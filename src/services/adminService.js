import { PACKAGES, FLEET_EXTENDED, GALLERY_EXTENDED } from '../constants';

// Helper to interact with LocalStorage
const getStoredData = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(defaultData));
    return defaultData;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultData;
  }
};

const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

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
  whatsapp: "+91 98400 12345",
  address: "42 Luxury Drive, Anna Salai, Chennai, Tamil Nadu 600002",
  googleMaps: "https://goo.gl/maps/example",
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
  login(username, password) {
    if (username === 'admin' && password === 'trailone') {
      localStorage.setItem('rir_admin_auth', 'true');
      return true;
    }
    return false;
  },

  logout() {
    localStorage.removeItem('rir_admin_auth');
  },

  isAuthenticated() {
    return localStorage.getItem('rir_admin_auth') === 'true';
  },

  // --- Packages CRUD ---
  getPackages() {
    return getStoredData('rir_packages', PACKAGES);
  },

  savePackage(pkg) {
    const list = this.getPackages();
    if (pkg.id) {
      // Update
      const idx = list.findIndex(p => p.id === pkg.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...pkg };
      }
    } else {
      // Add
      pkg.id = "pkg-" + Date.now();
      pkg.createdDate = new Date().toISOString().split('T')[0];
      list.unshift(pkg);
    }
    setStoredData('rir_packages', list);
    return pkg;
  },

  deletePackage(id) {
    let list = this.getPackages();
    list = list.filter(p => p.id !== id);
    setStoredData('rir_packages', list);
    return true;
  },

  // --- Vehicles CRUD ---
  getVehicles() {
    return getStoredData('rir_vehicles', FLEET_EXTENDED);
  },

  saveVehicle(v) {
    const list = this.getVehicles();
    if (v.id) {
      // Update
      const idx = list.findIndex(item => item.id === v.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...v };
      }
    } else {
      // Add
      v.id = "veh-" + Date.now();
      list.unshift(v);
    }
    setStoredData('rir_vehicles', list);
    return v;
  },

  deleteVehicle(id) {
    let list = this.getVehicles();
    list = list.filter(item => item.id !== id);
    setStoredData('rir_vehicles', list);
    return true;
  },

  // --- Gallery CRUD ---
  getGallery() {
    return getStoredData('rir_gallery', GALLERY_EXTENDED);
  },

  saveGallery(g) {
    const list = this.getGallery();
    if (g.id) {
      const idx = list.findIndex(item => item.id === g.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...g };
      }
    } else {
      g.id = Date.now();
      list.unshift(g);
    }
    setStoredData('rir_gallery', list);
    return g;
  },

  deleteGallery(id) {
    let list = this.getGallery();
    list = list.filter(item => item.id !== id);
    setStoredData('rir_gallery', list);
    return true;
  },

  // --- Enquiries CRUD ---
  getEnquiries() {
    return getStoredData('rir_enquiries', DEFAULT_ENQUIRIES);
  },

  addEnquiry(enq) {
    const list = this.getEnquiries();
    const newEnq = {
      id: "enq-" + Date.now(),
      date: new Date().toISOString(),
      status: "New",
      ...enq
    };
    list.unshift(newEnq);
    setStoredData('rir_enquiries', list);
    return newEnq;
  },

  updateEnquiryStatus(id, status) {
    const list = this.getEnquiries();
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      list[idx].status = status;
      setStoredData('rir_enquiries', list);
    }
    return true;
  },

  deleteEnquiry(id) {
    let list = this.getEnquiries();
    list = list.filter(item => item.id !== id);
    setStoredData('rir_enquiries', list);
    return true;
  },

  // --- Settings CRUD ---
  getSettings() {
    return getStoredData('rir_settings', DEFAULT_SETTINGS);
  },

  saveSettings(settings) {
    setStoredData('rir_settings', settings);
    return settings;
  },

  // --- Profile CRUD ---
  getProfile() {
    return getStoredData('rir_profile', DEFAULT_PROFILE);
  },

  saveProfile(profile) {
    setStoredData('rir_profile', profile);
    return profile;
  }
};
