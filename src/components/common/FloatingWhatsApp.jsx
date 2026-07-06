import React from 'react';
import { motion } from 'framer-motion';
import { RiWhatsappLine } from 'react-icons/ri';
import { useSettings } from '../../hooks/useSettings';

export default function FloatingWhatsApp() {
  const { settings: CONTACT_INFO } = useSettings();
  const phoneDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const encodedText = encodeURIComponent("Hello RIR Tours & Travels! I'm visiting your website and would like to enquire about your services.");
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodedText}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="rir_whatsapp"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA56] transition-colors cursor-pointer flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -6, 0]
      }}
      transition={{
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Enquiry on WhatsApp"
    >
      <RiWhatsappLine className="text-3xl" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-dark"></span>
      </span>
    </motion.a>
  );
}
