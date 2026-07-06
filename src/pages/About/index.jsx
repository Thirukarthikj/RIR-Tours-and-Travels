import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiEyeLine, RiCompassLine, RiUserStarLine, RiCarWashingLine, RiCustomerService2Line } from 'react-icons/ri';

// Reusable Components
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';
import EnquiryModal from '../../components/shared/EnquiryModal';

export default function About() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-hidden font-sans">
      
      {/* 1. Legacy Hero Header */}
      <section className="relative h-[60vh] bg-primary-dark">
        {/* Background Image Scrim */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://res.cloudinary.com/vpjbovlg/image/upload/v1783237798/Travel_cover_photo_umhm9z.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center text-center text-white">
          <span className="text-xs md:text-sm font-bold tracking-widest text-gold-light uppercase mb-3 block">
            Our Legacy
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight max-w-4xl mx-auto mb-8">
            Redefining Luxury Travel in Tamil Nadu, Kerala & Bengaluru
          </h1>
          <div>
            <Button
              onClick={() => {
                document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="gold"
              className="font-bold cursor-pointer"
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Story / Mission Section */}
      <section id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Mission Card */}
            <div className="text-left space-y-6">
              <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)]">
                <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <RiCompassLine className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-primary mb-4">Our Mission</h3>
                <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed">
                  To deliver unparalleled travel experiences through meticulous planning, premium cab management, and absolute local dedication. We target the gold standard for bespoke tourism and corporate transit solutions in South India, treating every guest as family.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800"
                alt="Luxury Car Interior facing temple"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision Section (Alternating Layout: Image Left, Text Right) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Visual Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800"
                alt="Luxury cab driving on scenic road"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right Column: Vision Card */}
            <div className="text-left space-y-6">
              <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <RiEyeLine className="text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-primary mb-4">Our Vision</h3>
                  <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed mb-6">
                    To be recognized as the premier luxury travel partner in South India, setting the gold standard for bespoke tourism and corporate transit solutions by 2030.
                  </p>
                </div>
                <div className="text-xs text-gold font-bold tracking-wider uppercase font-sans">Strategic Horizon 2030</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose RIR (Value Props) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Why Choose RIR?"
            title="Standard of Executive Travel"
            subtitle="Explore our key differentiators that separate RIR Tours & Travels from traditional vehicle rental options."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] text-left space-y-4">
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center">
                <RiUserStarLine className="text-xl" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary">Verified Drivers</h3>
              <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
                Our chauffeurs are more than drivers; they are trained hospitality professionals who undergo rigorous background checks and soft-skill training.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] text-left space-y-4">
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center">
                <RiCarWashingLine className="text-xl" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary">Premium Cab</h3>
              <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
                From sleek executive sedans to spacious luxury coaches, our vehicles are impeccably maintained and equipped with high-end amenities.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] text-left space-y-4">
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center">
                <RiCustomerService2Line className="text-xl" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary">24/7 Support</h3>
              <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
                Round-the-clock concierge service to handle last-minute changes, local recommendations, or any assistance you might need during your tour.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* 6. CTA Section: Ready to Experience True Luxury? */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">Ready to Experience True Luxury?</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-primary leading-tight">
            Whether it's a spiritual pilgrimage, a coastal escape, or high-stakes business tour, let RIR Tours and Travels manage the details while you enjoy the journey.
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-sans">
            Our luxury cab and experienced guides are waiting. Let us customize your road tour across Tamil Nadu, Kerala, and Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Button
              onClick={handleOpenModal}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold rounded-full cursor-pointer"
            >
              Plan Your Journey
            </Button>
            <Button
              onClick={() => navigate('/packages')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold rounded-full cursor-pointer"
            >
              How Our Cab
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form Overlay */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
