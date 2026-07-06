import { PACKAGES, CAB_EXTENDED, GALLERY_EXTENDED } from '../constants';
import { getDocuments, addDocument, updateDocument, deleteDocument } from './firebase/firestore';
import { loginAdmin, logoutAdmin } from './firebase/auth';

// Seeding Initial Enquiries if empty
const DEFAULT_ENQUIRIES = [
  {
    id: "enq-1",
    name: "Karthik Raja",
    phone: "+91 98765 43210",
    email: "karthik.raja@outlook.com",
    package: "Madurai & Rameshwaram",
    vehicle: "Toyota Innova Crysta",
    message: "We are planning a family temple tour with 6 adults and 2 children. Please quote for a 3 Days custom package.",
    date: "2026-07-04T12:00:00Z",
    status: "New"
  },
  {
    id: "enq-2",
    name: "Dr. Ananya Sen",
    phone: "+91 94432 10987",
    email: "ananya.sen@univ.edu",
    package: "Ooty & Kodaikanal",
    vehicle: "Luxury Tempo Traveller",
    message: "Corporate leisure trip for 12 research scholars. Need pickup from Coimbatore airport.",
    date: "2026-07-03T18:45:00Z",
    status: "Contacted"
  }
];

const DEFAULT_SETTINGS = {
  companyName: "RIR Tours & Travels",
  phone: "+91 44 2456 7890",
  email: "info@rirtours.com",
  whatsapp: "+91 93425 53805",
  address: "42 Luxury Drive, Anna Salai, Chennai, Tamil Nadu 600002",
  googleMaps: "https://maps.app.goo.gl/jfDDXBKQgqqmHM6k6",
  facebook: "https://facebook.com/rirtours",
  instagram: "https://instagram.com/rirtours",
  youtube: "https://youtube.com/rirtours",
  footerText: "© 2026 RIR Tours and Travels. All rights reserved. Crafted for luxury.",
  logoUrl: "",
  faviconUrl: ""
};

const DEFAULT_PROFILE = {
  name: "R. Raghuran",
  email: "raghuran@rirtours.com",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
};

export const adminService = {
  // --- Auth Session ---
  async login(username, password) {
    try {
      await loginAdmin(username, password);
      return true;
    } catch (e) {
      console.error("Auth login failure:", e);
      return false;
    }
  },

  async logout() {
    await logoutAdmin();
  },

  isAuthenticated() {
    return localStorage.getItem('rir_admin_auth') === 'true';
  },

  // --- Packages CRUD ---
  async getPackages() {
    return getDocuments('packages', 'createdDate', PACKAGES);
  },

  async savePackage(pkg) {
    if (pkg.id) {
      await updateDocument('packages', pkg.id, pkg);
      return pkg;
    } else {
      const cleanPkg = {
        ...pkg,
        createdDate: new Date().toISOString().split('T')[0]
      };
      return addDocument('packages', cleanPkg);
    }
  },

  async deletePackage(id) {
    return deleteDocument('packages', id);
  },

  // --- Vehicles CRUD ---
  async getVehicles() {
    return getDocuments('vehicles', '', CAB_EXTENDED);
  },

  async saveVehicle(v) {
    if (v.id) {
      await updateDocument('vehicles', v.id, v);
      return v;
    } else {
      return addDocument('vehicles', v);
    }
  },

  async deleteVehicle(id) {
    return deleteDocument('vehicles', id);
  },

  // --- Gallery CRUD ---
  async getGallery() {
    return getDocuments('gallery', '', GALLERY_EXTENDED);
  },

  async saveGallery(g) {
    if (g.id) {
      await updateDocument('gallery', String(g.id), g);
      return g;
    } else {
      const cleanG = {
        ...g,
        createdDate: new Date().toISOString().split('T')[0]
      };
      return addDocument('gallery', cleanG);
    }
  },

  async deleteGallery(id) {
    return deleteDocument('gallery', String(id));
  },

  // --- Enquiries CRUD ---
  async getEnquiries() {
    return getDocuments('enquiries', 'date', DEFAULT_ENQUIRIES);
  },

  async addEnquiry(enq) {
    const newEnq = {
      date: new Date().toISOString(),
      status: "New",
      ...enq
    };
    return addDocument('enquiries', newEnq);
  },

  async updateEnquiryStatus(id, status) {
    return updateDocument('enquiries', id, { status });
  },

  async deleteEnquiry(id) {
    return deleteDocument('enquiries', id);
  },

  // --- Settings CRUD ---
  async getSettings() {
    const list = await getDocuments('settings', '', [DEFAULT_SETTINGS]);
    if (Array.isArray(list)) {
      return list[0] || DEFAULT_SETTINGS;
    }
    return list || DEFAULT_SETTINGS;
  },

  async saveSettings(settings) {
    let result;
    // Check if the current settings ID is a real Firebase ID (usually 20 chars).
    // LocalStorage fallback creates IDs like 'set-12345678'
    const isLocalId = settings.id && settings.id.startsWith('set-');
    
    if (settings.id && !isLocalId) {
      await updateDocument('settings', settings.id, settings);
      result = settings;
    } else {
      const list = await getDocuments('settings', '', []);
      if (Array.isArray(list) && list.length > 0) {
        // Update the FIRST real document found in Firebase
        await updateDocument('settings', list[0].id, settings);
        result = { id: list[0].id, ...settings };
      } else {
        result = await addDocument('settings', settings);
      }
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('rir_settings_updated', { detail: result }));
    }
    return result;
  },

  // --- Profile CRUD ---
  async getProfile() {
    const list = await getDocuments('profile', '', [DEFAULT_PROFILE]);
    if (Array.isArray(list)) {
      return list[0] || DEFAULT_PROFILE;
    }
    return list || DEFAULT_PROFILE;
  },

  async saveProfile(profile) {
    if (profile.id) {
      await updateDocument('profile', profile.id, profile);
      return profile;
    } else {
      const list = await getDocuments('profile', '', []);
      if (Array.isArray(list) && list.length > 0) {
        await updateDocument('profile', list[0].id, profile);
        return { id: list[0].id, ...profile };
      } else {
        return addDocument('profile', profile);
      }
    }
  }
};
