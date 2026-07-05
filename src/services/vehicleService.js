import { FLEET_EXTENDED } from '../constants';
import { getDocuments } from './firebase/firestore';

export const getVehicles = async () => {
  return getDocuments('vehicles', '', FLEET_EXTENDED);
};
