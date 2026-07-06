import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiTimeLine, RiCarLine, RiStarFill, RiCheckLine, RiCompassLine, RiFilterLine } from 'react-icons/ri';

// Reusable Components
import Button from '../../components/common/Button';
import PackageCard from '../../components/shared/PackageCard';
import EnquiryModal from '../../components/shared/EnquiryModal';
import { getPackages } from '../../services/packageService';
import { useSettings } from '../../contexts/SettingsContext';

export default function Packages() {
  const { settings: CONTACT_INFO } = useSettings();
  const [packagesList, setPackagesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);

  // Filters State
  const [regionFilter, setRegionFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [tourTypeFilter, setTourTypeFilter] = useState('');

  // Fetch package list
  useEffect(() => {
    getPackages().then(res => {
      setPackagesList(res);
      setFilteredList(res);
    });
  }, []);

  const handleRefineSearch = () => {
    let result = packagesList;

    if (regionFilter) {
      result = result.filter(p => p.region.toLowerCase() === regionFilter.toLowerCase());
    }

    if (durationFilter) {
      result = result.filter(p => p.duration.toLowerCase().includes(durationFilter.toLowerCase()));
    }

    if (tourTypeFilter) {
      result = result.filter(p => p.tourType.toLowerCase() === tourTypeFilter.toLowerCase());
    }

    setFilteredList(result);
  };

  const handleOpenEnquiry = (pkg) => {
    setActivePackage(pkg);
    setIsDetailOpen(false); // Close details modal if open
    setIsEnquiryOpen(true);
  };

  const handleOpenDetails = (pkg) => {
    setActivePackage(pkg);
    setIsDetailOpen(true);
  };

  const phoneDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const chatUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent("Hello! I want to talk to a travel expert about planning my road trip in Tamil Nadu, Kerala, and Bengaluru.")}`;

  return (
    <div className="overflow-hidden font-sans bg-slate-50 min-h-screen">
      
      {/* 1. Page Header with Background Image */}
      <section className="relative pt-36 pb-20 text-center text-white bg-primary-dark overflow-hidden">
        {/* Background Image Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://res.cloudinary.com/vpjbovlg/image/upload/v1783237809/download_1_t5rabk.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest">Curated Journeys</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Discover the Soul of <span className="italic text-gold-light">Tamil Nadu, Kerala & Bengaluru</span>
          </h1>
        </div>
      </section>

      {/* 2. Search & Filter panel */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_10px_35px_-8px_rgba(0,33,64,0.06)] p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          
          {/* Region Select */}
          <div className="flex flex-col text-left">
            <label className="text-xs font-semibold text-gray-500 mb-1.5 uppercase font-sans tracking-wide">Region</label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none text-gray-700"
            >
              <option value="">All Regions</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Hill Station">Hill Station</option>
              <option value="Coastal">Coastal</option>
              <option value="Heritage">Heritage</option>
            </select>
          </div>

          {/* Duration Select */}
          <div className="flex flex-col text-left">
            <label className="text-xs font-semibold text-gray-500 mb-1.5 uppercase font-sans tracking-wide">Duration</label>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none text-gray-700"
            >
              <option value="">Any Duration</option>
              <option value="3 Days">3 Days / 2 Nights</option>
              <option value="4 Days">4 Days / 3 Nights</option>
              <option value="5 Days">5 Days / 4 Nights</option>
              <option value="6 Days">6 Days / 5 Nights</option>
            </select>
          </div>

          {/* Tour Type Select */}
          <div className="flex flex-col text-left">
            <label className="text-xs font-semibold text-gray-500 mb-1.5 uppercase font-sans tracking-wide">Tour Type</label>
            <select
              value={tourTypeFilter}
              onChange={(e) => setTourTypeFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none text-gray-700"
            >
              <option value="">Luxury Cab</option>
              <option value="Custom Plan">Custom Plan</option>
            </select>
          </div>

          {/* Action button */}
          <Button
            onClick={handleRefineSearch}
            variant="primary"
            className="w-full py-3 font-semibold rounded-xl"
            icon={<RiFilterLine className="text-sm mr-2" />}
          >
            Refine Search
          </Button>

        </div>
      </section>

      {/* 3. Packages listing grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {filteredList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onDetails={() => handleOpenDetails(pkg)}
                onEnquire={() => handleOpenEnquiry(pkg)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-lg mx-auto">
            <RiCompassLine className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary font-display mb-1">No Packages Match</h3>
            <p className="text-xs text-gray-500 font-sans max-w-xs mx-auto">
              Try adjusting your region or duration filters to explore other luxury tours.
            </p>
          </div>
        )}
      </section>

      {/* 4. Bespoke Quote Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-10 bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200')` }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold font-display leading-tight">
            Can't find exactly what you're looking for?
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            Our travel experts specialize in crafting bespoke itineraries tailored to your specific interests, budget, and pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
            <Button
              onClick={() => handleOpenEnquiry(null)}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto font-bold rounded-full cursor-pointer"
            >
              Get Custom Quote
            </Button>
            <Button
              onClick={() => window.open(chatUrl, 'rir_whatsapp')}
              variant="outlineWhite"
              size="lg"
              className="w-full sm:w-auto font-bold rounded-full cursor-pointer"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Package Detail Modal Overlay */}
      <AnimatePresence>
        {isDetailOpen && activePackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="fixed inset-0 bg-primary/45 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl relative z-10 text-left font-sans flex flex-col"
            >
              {/* Cover Image */}
              <div className="h-64 relative bg-slate-100">
                <img
                  src={activePackage.image}
                  alt={activePackage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="absolute top-4 right-4 bg-black/55 hover:bg-black/80 text-white rounded-full p-2 text-xl transition-all cursor-pointer"
                >
                  <RiCloseLine />
                </button>
                <span className="absolute bottom-4 left-4 bg-gold text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                  {activePackage.tag}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 flex-grow overflow-y-auto max-h-[50vh]">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-primary leading-tight">
                    {activePackage.title}
                  </h3>
                  <div className="bg-slate-50 px-2.5 py-1 rounded flex items-center text-xs font-bold text-gray-700 shrink-0 border border-slate-100">
                    <RiStarFill className="text-[#EAB308] mr-1" />
                    <span>{(activePackage.rating || 5.0).toFixed(1)}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6">
                  {activePackage.description}
                </p>

                {/* Specs Chips */}
                <div className="flex flex-wrap gap-2.5 mb-6 text-xs font-medium text-gray-600">
                  <span className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg flex items-center gap-1.5">
                    <RiTimeLine className="text-primary text-base" />
                    {activePackage.duration}
                  </span>
                  <span className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg flex items-center gap-1.5">
                    <RiCarLine className="text-primary text-base" />
                    {activePackage.vehicle}
                  </span>
                </div>

                {/* Highlights Checklist */}
                <h4 className="text-sm font-bold uppercase text-primary tracking-wider mb-3">Package Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {activePackage.highlights.map((hl, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <RiCheckLine className="text-secondary text-lg mr-2.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer action */}
              <div className="p-6 border-t border-gray-100 bg-slate-50 flex items-center justify-end gap-3 shrink-0">
                <Button
                  onClick={() => setIsDetailOpen(false)}
                  variant="outline"
                  className="rounded-lg text-xs"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleOpenEnquiry(activePackage)}
                  variant="secondary"
                  className="rounded-lg text-xs"
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Enquiry Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialData={activePackage}
      />
    </div>
  );
}
