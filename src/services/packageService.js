import { PACKAGES } from '../constants';
import { getDocuments } from './firebase/firestore';

export const getPackages = async () => {
  const list = await getDocuments('packages', '', PACKAGES);
  
  // Deduplicate by title
  const seen = new Set();
  const uniqueList = [];
  for (const p of list) {
    if (!seen.has(p.title)) {
      seen.add(p.title);
      uniqueList.push(p);
    }
  }

  // Return only active packages to the public view
  return uniqueList.filter(p => p.status !== 'Inactive');
};

export const getPackageById = async (id) => {
  const list = await getPackages();
  return list.find(p => p.id === id) || null;
};
