import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiUserLine, RiBriefcaseLine, RiWindyLine, RiWifiLine, RiShieldCheckLine, RiUserStarLine, RiCustomerService2Line, RiArrowRightSLine } from 'react-icons/ri';

// Components & Constants
import Button from '../../components/common/Button';

import EnquiryModal from '../../components/shared/EnquiryModal';
import { CAB_EXTENDED } from '../../constants';
import { getVehicles } from '../../services/vehicleService';

export default function Cab() {
  const [vehicles, setVehicles] = useState(CAB_EXTENDED);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPresetData, setModalPresetData] = useState(null);

  useEffect(() => {
    getVehicles().then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setVehicles(data);
      }
    }).catch(err => {
      console.error("Error loading vehicles:", err);
    });
  }, []);

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Tempo Traveller', 'Luxury Coach'];

  const filteredCab = activeCategory === 'All'
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory);

  const handleEnquireClick = (vehicle) => {
    setModalPresetData(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-hidden font-sans bg-slate-50 min-h-screen">
      
      {/* 1. Header Section with Background Image */}
      <section className="relative pt-36 pb-20 text-center text-white bg-primary-dark overflow-hidden">
        {/* Background Image Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest">
            Our Premium Cab
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
            Our Premium Cab
          </h1>
        </div>
      </section>

      {/* 2. Filter Pills Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 flex justify-center flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
              activeCategory === cat
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {cat === 'All' ? 'All Vehicles' : cat}
          </button>
        ))}
      </section>

      {/* 3. Cards Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCab.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,33,64,0.04)] border border-gray-100 flex flex-col text-left group"
            >
              {/* Media Image Frame */}
              <div className="h-56 overflow-hidden relative bg-slate-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-gold text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                  {vehicle.tag}
                </span>
              </div>

              {/* Card Details Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-display text-primary leading-tight">
                    {vehicle.name}
                  </h3>
                  
                  {/* Detailed Specs Grid */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-5 pb-5 text-xs text-gray-500 font-sans border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <RiUserLine className="text-primary text-base" />
                      <span>{vehicle.seats}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiWindyLine className="text-primary text-base" />
                      <span>{vehicle.ac}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiBriefcaseLine className="text-primary text-base" />
                      <span>{vehicle.bags}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiWifiLine className="text-primary text-base" />
                      <span>{vehicle.extra}</span>
                    </div>
                  </div>

                  {/* Highlight pill tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {vehicle.pills?.map((pill, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold tracking-wider bg-secondary/10 text-secondary-dark px-2.5 py-1 rounded uppercase font-sans"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to action button */}
                <Button
                  onClick={() => handleEnquireClick(vehicle)}
                  variant="primary"
                  className="w-full py-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  Enquire Availability <RiArrowRightSLine className="text-lg" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Safety Highlights Banner */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Certified Safety */}
          <div className="bg-slate-50 border-l-4 border-gold p-8 rounded-r-2xl text-left space-y-4 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.01)]">
            <div className="bg-gold/10 text-gold w-10 h-10 rounded-lg flex items-center justify-center">
              <RiShieldCheckLine className="text-xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-primary">Certified Safety</h3>
            <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
              Every vehicle undergoes a rigorous 50-point inspection before every journey. Our safety protocols are the industry benchmark in luxury travel.
            </p>
          </div>

          {/* Expert Drivers */}
          <div className="bg-slate-50 p-8 rounded-2xl text-left space-y-4">
            <div className="bg-primary/5 text-primary w-10 h-10 rounded-lg flex items-center justify-center">
              <RiUserStarLine className="text-xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-primary">Expert Drivers</h3>
            <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
              Background-verified & hospitality trained. Our chauffeurs hold localized geographical insights for South Indian highways.
            </p>
          </div>

          {/* 24/7 Concierge */}
          <div className="bg-slate-50 p-8 rounded-2xl text-left space-y-4">
            <div className="bg-primary/5 text-primary w-10 h-10 rounded-lg flex items-center justify-center">
              <RiCustomerService2Line className="text-xl" />
            </div>
            <h3 className="text-lg font-bold font-display text-primary">24/7 Concierge</h3>
            <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
              Real-time trip tracking, digital invoicing, and client support coordinates standing by round-the-clock for schedule changes.
            </p>
          </div>

        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={modalPresetData}
      />
    </div>
  );
}
