import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiWhatsappLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import { useSettings } from '../../contexts/SettingsContext';
import Button from './Button';

export default function Navbar() {
  const { settings: CONTACT_INFO } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to add sticky backdrop effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! I want to enquire about RIR Tours and Travels packages.")}`;

  // Helper to determine if link is active
  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const isDarkHeaderPage = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/fleet' || location.pathname === '/packages' || location.pathname === '/gallery';
  const showDarkStyles = isDarkHeaderPage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-gray-100/50 shadow-md py-3'
          : isDarkHeaderPage
            ? 'bg-transparent py-5'
            : 'bg-white border-b border-gray-100 shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-1 cursor-pointer">
          <span className={`text-2xl font-black font-display tracking-tight transition-colors duration-300 ${
            showDarkStyles ? 'text-white' : 'text-primary'
          }`}>
            RIR <span className="text-gold-light">Tours</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`font-sans text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${
                  isActive(link.path)
                    ? `${showDarkStyles ? 'text-white' : 'text-primary'} font-semibold`
                    : `${showDarkStyles ? 'text-white/75 hover:text-white' : 'text-gray-600 hover:text-primary'}`
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-light"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp CTA Action */}
        <div className="hidden md:block">
          <Button
            onClick={() => window.open(whatsappUrl, 'rir_whatsapp')}
            variant={showDarkStyles ? "outlineWhite" : "primary"}
            size="md"
            icon={<RiWhatsappLine className="text-lg text-[#25D366]" />}
            className="rounded-full font-bold"
          >
            WhatsApp Enquiry
          </Button>
        </div>

        {/* Mobile Hamburguer Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none text-2xl p-1.5 rounded-lg transition-colors cursor-pointer ${
            showDarkStyles ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-gray-100'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-sans text-base font-semibold py-2 block ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-gray-100 my-2" />
              <Button
                onClick={() => window.open(whatsappUrl, 'rir_whatsapp')}
                variant="whatsapp"
                size="lg"
                icon={<RiWhatsappLine className="text-xl" />}
                className="w-full text-center"
              >
                WhatsApp Enquiry
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
