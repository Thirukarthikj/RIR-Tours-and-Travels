import { PACKAGES } from '../constants';
import { getDocuments } from './firebase/firestore';

export const getPackages = async () => {
  const list = await getDocuments('packages', 'createdDate', PACKAGES);
  // Return only active packages to the public view
  return list.filter(p => p.status !== 'Inactive');
};

export const getPackageById = async (id) => {
  const list = await getPackages();
  return list.find(p => p.id === id) || null;
};
