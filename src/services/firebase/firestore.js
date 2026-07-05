import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from './config';

// Helper to wrap promises with a timeout
const withTimeout = (promise, timeoutMs = 2000) => {
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

// Fallback logic to interact with LocalStorage when Firebase is not configured
const getStoredData = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (!data || data === 'undefined') {
    localStorage.setItem(key, JSON.stringify(defaultData));
    return defaultData;
  }
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(defaultData) && !Array.isArray(parsed)) {
      return [parsed];
    }
    return parsed;
  } catch (e) {
    return defaultData;
  }
};

const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDocuments = async (collectionName, orderByField = '', seedData = null) => {
  if (db) {
    try {
      const colRef = collection(db, collectionName);
      const q = orderByField ? query(colRef, orderBy(orderByField, 'desc')) : colRef;
      
      // Query Firestore with a 2-second timeout
      const snapshot = await withTimeout(getDocs(q), 2000);
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Auto seed database if empty
      if (list.length === 0 && seedData) {
        console.log(`Seeding empty Firestore collection: ${collectionName}`);
        for (const item of seedData) {
          const { id, ...cleanItem } = item;
          await withTimeout(addDoc(colRef, cleanItem), 2000);
        }
        const seededSnapshot = await withTimeout(getDocs(q), 2000);
        return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }
      return list;
    } catch (error) {
      console.error(`Error fetching collection ${collectionName} from Firestore:`, error);
      return getStoredData(`rir_${collectionName}`, seedData || []);
    }
  }
  return getStoredData(`rir_${collectionName}`, seedData || []);
};

export const addDocument = async (collectionName, data) => {
  if (db) {
    try {
      const colRef = collection(db, collectionName);
      const docRef = await withTimeout(addDoc(colRef, data), 2000);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error adding document to Firestore collection ${collectionName}:`, error);
    }
  }
  // LocalStorage Fallback
  const list = getStoredData(`rir_${collectionName}`, []);
  const newItem = { id: `${collectionName.slice(0, 3)}-` + Date.now(), ...data };
  list.unshift(newItem);
  setStoredData(`rir_${collectionName}`, list);
  return newItem;
};

export const updateDocument = async (collectionName, docId, data) => {
  if (db) {
    try {
      const docRef = doc(db, collectionName, docId);
      const { id, ...cleanData } = data;
      await withTimeout(updateDoc(docRef, cleanData), 2000);
      return true;
    } catch (error) {
      console.error(`Error updating document ${docId} in Firestore collection ${collectionName}:`, error);
    }
  }
  // LocalStorage Fallback
  const list = getStoredData(`rir_${collectionName}`, []);
  const idx = list.findIndex(item => item.id === docId);
  if (idx !== -1) {
    list[idx] = { ...list[idx], ...data };
    setStoredData(`rir_${collectionName}`, list);
    return true;
  }
  return false;
};

export const deleteDocument = async (collectionName, docId) => {
  if (db) {
    try {
      const docRef = doc(db, collectionName, docId);
      await withTimeout(deleteDoc(docRef), 2000);
      return true;
    } catch (error) {
      console.error(`Error deleting document ${docId} from Firestore collection ${collectionName}:`, error);
    }
  }
  // LocalStorage Fallback
  let list = getStoredData(`rir_${collectionName}`, []);
  list = list.filter(item => item.id !== docId);
  setStoredData(`rir_${collectionName}`, list);
  return true;
};
