import { PACKAGES } from '../constants';

export const getPackages = async () => {
  // Simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => resolve(PACKAGES), 300);
  });
};

export const getPackageById = async (id) => {
  return new Promise((resolve) => {
    const pkg = PACKAGES.find(p => p.id === id) || null;
    setTimeout(() => resolve(pkg), 150);
  });
};
