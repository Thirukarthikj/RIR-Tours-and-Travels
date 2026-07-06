import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill, RiMapPin2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri';
import { useSettings } from '../../hooks/useSettings';

export default function Footer() {
  const { settings: CONTACT_INFO } = useSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <div className="space-y-4 text-left">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-bold font-display tracking-tight text-white">
              RIR <span className="text-gold-light">Tours</span>
            </span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            Crafting luxury road journeys across the rich heritage of Tamil Nadu, Kerala, and Bengaluru since 2014. Dedicated to convenience, security, safety, and cultural heritage.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href={CONTACT_INFO.socials.facebook} target="rir_facebook" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="Facebook">
              <RiFacebookCircleFill />
            </a>
            <a href={CONTACT_INFO.socials.instagram} target="rir_instagram" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="Instagram">
              <RiInstagramFill />
            </a>
            <a href={CONTACT_INFO.socials.youtube} target="rir_youtube" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="YouTube">
              <RiYoutubeFill />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-light mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <a href="/#cab" className="text-gray-300 hover:text-white transition-colors">Luxury Cab</a>
            </li>
            <li>
              <a href="/#services" className="text-gray-300 hover:text-white transition-colors">Temple Tours</a>
            </li>
            <li>
              <Link to="/packages" className="text-gray-300 hover:text-white transition-colors">Coastal Escapes</Link>
            </li>
          </ul>
        </div>

        {/* Kodaikanal Services */}
        <div className="text-left">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-light mb-4">Kodaikanal Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/kodaikanal-tour-packages" className="text-gray-300 hover:text-white transition-colors">Kodaikanal Tour Packages</Link>
            </li>
            <li>
              <Link to="/kodaikanal-taxi-service" className="text-gray-300 hover:text-white transition-colors">Kodaikanal Taxi Service</Link>
            </li>
            <li>
              <Link to="/kodaikanal-sightseeing" className="text-gray-300 hover:text-white transition-colors">Kodaikanal Sightseeing</Link>
            </li>
            <li>
              <Link to="/kodaikanal-one-way-drop" className="text-gray-300 hover:text-white transition-colors">One Way Drop Taxi</Link>
            </li>
            <li>
              <Link to="/madurai-to-kodaikanal-taxi" className="text-gray-300 hover:text-white transition-colors">Madurai to Kodaikanal Taxi</Link>
            </li>
            <li>
              <Link to="/kodaikanal-tour-operator" className="text-gray-300 hover:text-white transition-colors">Kodaikanal Tour Operator</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left space-y-3.5">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-light mb-4">Contact Us</h3>
          <div className="flex items-start gap-4">
            <RiMapPin2Line className="text-gold-light mt-1 flex-shrink-0 text-xl" />
            <div className="text-gray-300 leading-relaxed text-sm">
              <p>{CONTACT_INFO.address}</p>
              {CONTACT_INFO.googleMaps && (
                <a href={CONTACT_INFO.googleMaps} target="rir_map" rel="noopener noreferrer" className="inline-block mt-1.5 text-[11px] font-bold text-gold-light hover:underline">
                  View on Google Maps →
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <RiPhoneLine className="text-gold-light text-lg shrink-0" />
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <RiMailLine className="text-gold-light text-lg shrink-0" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
          </div>
        </div>

      </div>

      <hr className="max-w-7xl mx-auto border-white/10 my-10 px-6" />

      {/* Legal & GST Details */}
      <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-400 space-y-2.5">
        <p>{CONTACT_INFO.footerText || `© ${currentYear} ${CONTACT_INFO.name}. All rights reserved. Crafted for luxury.`}</p>
        <p className="flex justify-center flex-wrap gap-x-6 gap-y-1 opacity-70">
          <span>GSTIN: {CONTACT_INFO.gstin}</span>
          <span>PAN: {CONTACT_INFO.pan}</span>
        </p>
      </div>
    </footer>
  );
}
