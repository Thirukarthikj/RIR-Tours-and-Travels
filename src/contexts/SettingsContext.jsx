import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminService } from '../services/adminService';
import { CONTACT_INFO as STATIC_CONTACT_INFO } from '../constants';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(STATIC_CONTACT_INFO);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await adminService.getSettings();
        if (data) {
          // Map DB structure to frontend structure to prevent breaking components
          setSettings({
            ...STATIC_CONTACT_INFO,
            name: data.companyName || STATIC_CONTACT_INFO.name,
            address: data.address || STATIC_CONTACT_INFO.address,
            phone: data.phone || STATIC_CONTACT_INFO.phone,
            whatsapp: data.whatsapp || STATIC_CONTACT_INFO.whatsapp,
            email: data.email || STATIC_CONTACT_INFO.email,
            googleMaps: data.googleMaps || "https://maps.app.goo.gl/jfDDXBKQgqqmHM6k6",
            footerText: data.footerText || "© 2026 RIR Tours and Travels. All rights reserved.",
            socials: {
              facebook: data.facebook || STATIC_CONTACT_INFO.socials.facebook,
              instagram: data.instagram || STATIC_CONTACT_INFO.socials.instagram,
              youtube: data.youtube || STATIC_CONTACT_INFO.socials.youtube
            }
          });
        }
      } catch (error) {
        console.error("Failed to load global settings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, isLoading }}>
      {children}
    </SettingsContext.Provider>
  );
};
