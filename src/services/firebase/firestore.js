// Firestore database service stub
export const getDocuments = async (collectionName) => {
  return [];
};

export const addDocument = async (collectionName, data) => {
  return { id: "mock-id" };
};

export const updateDocument = async (collectionName, docId, data) => {
  return true;
};

export const deleteDocument = async (collectionName, docId) => {
  return true;
};
