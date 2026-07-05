import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RiArrowRightSLine, RiImageLine } from 'react-icons/ri';

// Components & Constants
import Button from '../../components/common/Button';

import GalleryCard from '../../components/shared/GalleryCard';
import EnquiryModal from '../../components/shared/EnquiryModal';
import { GALLERY_EXTENDED } from '../../constants';

export default function Gallery() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ['All', 'Fleet', 'Destinations', 'Spiritual'];

  const filteredImages = activeTab === 'All'
    ? GALLERY_EXTENDED
    : GALLERY_EXTENDED.filter(img => img.category === activeTab);

  return (
    <div className="overflow-hidden font-sans bg-slate-50 min-h-screen">
      
      {/* 1. Header Section with Background Image */}
      <section className="relative pt-36 pb-20 text-center text-white bg-primary-dark overflow-hidden">
        {/* Background Image Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://res.cloudinary.com/vpjbovlg/image/upload/v1783237806/imgi_32_domestic_upqye0.webp')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest">
            Our Visual Journey
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
            Experience the Luxury
          </h1>
        </div>
      </section>

      {/* 2. Filter Pills Navigation */}
      <section className="max-w-6xl mx-auto px-6 py-8 flex justify-center flex-wrap gap-2.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
              activeTab === tab
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* 3. Responsive Staggered Image Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <GalleryCard key={image.id} image={image} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md mx-auto">
            <RiImageLine className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary font-display mb-1">No Images Found</h3>
            <p className="text-xs text-gray-500 font-sans max-w-xs mx-auto">
              We haven't uploaded images for this category yet. Please check back later.
            </p>
          </div>
        )}
      </section>

      {/* 4. Memory Creation CTA Banner */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary leading-tight">
                Ready to create your own memories?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg font-sans">
                Our team is ready to curate a bespoke travel experience tailored to your every need, from spiritual journeys to coastal retreats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  className="px-8 py-3.5 font-bold rounded-xl cursor-pointer"
                >
                  Enquire Now
                </Button>
                <Button
                  onClick={() => navigate('/fleet')}
                  variant="outline"
                  className="px-8 py-3.5 font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View Fleet <RiArrowRightSLine className="text-lg" />
                </Button>
              </div>
            </div>

            {/* Right Chauffeur Image Column */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800"
                alt="Executive Chauffeur opens door for tourists"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
