import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, limit } from 'firebase/firestore';
import { db } from './config';

// Circuit breaker flag to bypass Firestore requests if a connection failure or timeout occurs
let isFirestoreOffline = false;
let connPromise = null;

// Helper to wrap promises with a timeout (default 4 seconds)
const withTimeout = (promise, timeoutMs = 4000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Database operation timed out"));
    }, timeoutMs);

    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
};

// Check connection health dynamically with a cached promise
const checkConnection = () => {
  if (!connPromise) {
    const isOffline = typeof window !== 'undefined' && !navigator.onLine;
    if (isOffline) {
      isFirestoreOffline = true;
      connPromise = Promise.resolve(false);
    } else if (db) {
      const colRef = collection(db, 'settings');
      const q = query(colRef, limit(1));
      connPromise = withTimeout(getDocs(q), 3000)
        .then(() => {
          isFirestoreOffline = false;
          return true;
        })
        .catch((e) => {
          isFirestoreOffline = true;
          console.warn("Firestore database is unreachable or unconfigured. Falling back to offline LocalStorage mode.", e);
          return false;
        });
    } else {
      isFirestoreOffline = true;
      connPromise = Promise.resolve(false);
    }
  }
  return connPromise;
};

// Fallback logic to interact with LocalStorage when Firebase is not configured
const getStoredData = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (!data || data === 'undefined') {
    localStorage.setItem(key, JSON.stringify(defaultData));
    return defaultData;
  }
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(defaultData)) {
      if (!Array.isArray(parsed)) return [parsed];
      
      let hasChanges = false;
      // Self-heal: if cache is empty but defaultData has items (prevents stuck empty state)
      if (parsed.length === 0 && defaultData.length > 0) {
        localStorage.setItem(key, JSON.stringify(defaultData));
        return defaultData;
      }
      
      // Self-heal: merge any new items from defaultData that are missing in localStorage
      defaultData.forEach(defaultItem => {
        if (defaultItem.id && !parsed.find(p => p.id === defaultItem.id)) {
          parsed.push(defaultItem);
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        localStorage.setItem(key, JSON.stringify(parsed));
      }
    }
    return parsed;
  } catch {
    return defaultData;
  }
};

const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDocuments = async (collectionName, orderByField = '', seedData = null) => {
  if (db) {
    const isOnline = await checkConnection();
    if (isOnline && !isFirestoreOffline) {
      try {
        const colRef = collection(db, collectionName);
        const q = orderByField ? query(colRef, orderBy(orderByField, 'desc')) : colRef;
        
        const snapshot = await withTimeout(getDocs(q));
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Auto seed database if empty
        if (list.length === 0 && seedData) {
          console.log(`Seeding empty Firestore collection: ${collectionName}`);
          for (const item of seedData) {
            const { id: _id, ...cleanItem } = item;
            await withTimeout(addDoc(colRef, cleanItem));
          }
          const seededSnapshot = await withTimeout(getDocs(q));
          return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
        return list;
      } catch (error) {
        console.error(`Error fetching collection ${collectionName} from Firestore:`, error);
        isFirestoreOffline = true;
        return getStoredData(`rir_v4_${collectionName}`, seedData || []);
      }
    }
  }
  return getStoredData(`rir_v4_${collectionName}`, seedData || []);
};

export const addDocument = async (collectionName, data) => {
  if (db) {
    const isOnline = await checkConnection();
    if (isOnline && !isFirestoreOffline) {
      try {
        const colRef = collection(db, collectionName);
        const docRef = await withTimeout(addDoc(colRef, data));
        return { id: docRef.id, ...data };
      } catch (error) {
        console.error(`Error adding document to Firestore collection ${collectionName}:`, error);
        isFirestoreOffline = true;
      }
    }
  }
  // LocalStorage Fallback
  const list = getStoredData(`rir_v4_${collectionName}`, []);
  const newItem = { id: `${collectionName.slice(0, 3)}-` + Date.now(), ...data };
  list.unshift(newItem);
  setStoredData(`rir_v4_${collectionName}`, list);
  return newItem;
};

export const updateDocument = async (collectionName, docId, data) => {
  if (db) {
    const isOnline = await checkConnection();
    if (isOnline && !isFirestoreOffline) {
      try {
        const docRef = doc(db, collectionName, docId);
        const { id: _id, ...cleanData } = data;
        await withTimeout(updateDoc(docRef, cleanData));
        return true;
      } catch (error) {
        console.error(`Error updating document ${docId} in Firestore collection ${collectionName}:`, error);
        isFirestoreOffline = true;
      }
    }
  }
  // LocalStorage Fallback
  const list = getStoredData(`rir_v4_${collectionName}`, []);
  const idx = list.findIndex(item => item.id === docId);
  if (idx !== -1) {
    list[idx] = { ...list[idx], ...data };
    setStoredData(`rir_v4_${collectionName}`, list);
    return true;
  }
  return false;
};

export const deleteDocument = async (collectionName, docId) => {
  if (db) {
    const isOnline = await checkConnection();
    if (isOnline && !isFirestoreOffline) {
      try {
        const docRef = doc(db, collectionName, docId);
        await withTimeout(deleteDoc(docRef));
        return true;
      } catch (error) {
        console.error(`Error deleting document ${docId} from Firestore collection ${collectionName}:`, error);
        isFirestoreOffline = true;
      }
    }
  }
  // LocalStorage Fallback
  let list = getStoredData(`rir_v4_${collectionName}`, []);
  list = list.filter(item => item.id !== docId);
  setStoredData(`rir_v4_${collectionName}`, list);
  return true;
};
