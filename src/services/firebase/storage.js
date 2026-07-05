import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './config';
import { uploadToCloudinary } from './cloudinary';

/**
 * Helper to wrap promises with a timeout to prevent infinite loading when offline
 */
const withTimeout = (promise, timeoutMs = 5000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Upload timed out")), timeoutMs);
    promise.then((res) => {
      clearTimeout(timer);
      resolve(res);
    }).catch((err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
};

/**
 * Uploads a file to Firebase Storage if configured, otherwise falls back to Cloudinary,
 * and finally to local Base64 Data URL.
 * 
 * @param {File|Blob} file - The file to upload.
 * @param {string} path - The path destination in Firebase Storage (e.g. 'gallery/image.jpg').
 * @returns {Promise<string>} Download URL or base64 representation.
 */
export const uploadFile = async (file, path) => {
  // 1. Try Firebase Storage

  if (storage) {
    try {
      const storageRef = ref(storage, path);
      const snapshot = await withTimeout(uploadBytes(storageRef, file), 4000);
      const downloadURL = await withTimeout(getDownloadURL(snapshot.ref), 4000);
      return downloadURL;
    } catch (error) {
      console.error("Firebase Storage Upload Error, trying Cloudinary fallback:", error);
    }
  }

  // 2. Try Cloudinary Fallback
  try {
    const cloudinaryUrl = await withTimeout(uploadToCloudinary(file), 5000);
    if (cloudinaryUrl) return cloudinaryUrl;
  } catch (error) {
    console.error("Cloudinary Fallback Upload Error, trying Base64 fallback:", error);
  }

  // 3. Try Base64 local fallback
  if (file instanceof File || file instanceof Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return file;
};

/**
 * Deletes a file from Firebase Storage.
 * 
 * @param {string} filePath - Full URL or path of the file to delete.
 * @returns {Promise<boolean>} True if deleted or ignored.
 */
export const deleteFile = async (filePath) => {
  if (storage && filePath && (filePath.includes('firebasestorage.googleapis.com') || !filePath.startsWith('http'))) {
    try {
      const storageRef = ref(storage, filePath);
      await deleteObject(storageRef);
      return true;
    } catch (error) {
      console.error("Firebase Storage Delete Error:", error);
      return false;
    }
  }
  return true;
};
