import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { RiArrowRightLine, RiWhatsappLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Reusable Components & Constants
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';
import ServiceCard from '../../components/shared/ServiceCard';
import EnquiryModal from '../../components/shared/EnquiryModal';
import { SERVICES, STATS, FLEET, FAQS, POPULAR_CATEGORIES } from '../../constants';
import { useSettings } from '../../contexts/SettingsContext';
import { subscribeNewsletter } from '../../services/enquiryService';

export default function Home() {
  const { settings: CONTACT_INFO } = useSettings();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [email, setEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');



  const handleOpenModal = (data = null) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setNewsletterMsg("Subscribed! Thank you for joining.");
        setEmail('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const phoneDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent("Hello RIR Tours & Travels! I'm interested in booking a tour with you.")}`;

  // Carousel Slides for Hero
  const HERO_SLIDES = [
    {
      image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185824/imgi_5_kerala-trip-packages_iboeoi.jpg",
      title: "Experience Luxury in the Land of Temples",
      subtitle: "Curated travel experiences across Tamil Nadu's spiritual heartlands, serene coasts, and misty hills. A professional-driven fleet."
    },
    {
      image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185825/imgi_7_vibrant-kerala-tour-packages_whrahw.jpg",
      title: "Redefining Travel Across South India",
      subtitle: "Experience unparalleled chauffeur services in luxury sedans, utility MUVs, and premium traveler coaches."
    },
    {
      image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185826/imgi_25_kerala-boat-house-honeymoon-package_hwg0e6.jpg",
      title: "Your Safe Passage to Serenity",
      subtitle: "Expert drivers, transparent billing, and 24/7 client support to ensure your temple pilgrimages are divine."
    }
  ];

  return (
    <div className="overflow-hidden font-sans">
      
      {/* 1. Hero Banner Carousel */}
      <section className="relative h-[85vh] md:h-screen w-full bg-primary-dark">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              {/* Image with Dark Scrim overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/70 to-transparent" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-left text-white">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs md:text-sm font-semibold tracking-widest text-gold-light uppercase mb-3 block"
                >
                  Premium Travel Agency
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-display max-w-3xl leading-[1.1] mb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm md:text-lg text-white/70 max-w-xl font-sans mb-8 leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>
                
                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <Button 
                    onClick={() => navigate('/packages')}
                    variant="secondary"
                    size="lg"
                    className="font-bold cursor-pointer"
                  >
                    Explore Packages
                  </Button>
                  <Button 
                    onClick={() => window.open(whatsappUrl, 'rir_whatsapp')}
                    variant="outlineWhite"
                    size="lg"
                    icon={<RiWhatsappLine className="text-xl text-[#25D366]" />}
                    className="font-bold cursor-pointer"
                  >
                    Enquire on WhatsApp
                  </Button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Packages Category Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-8">
            Popular Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POPULAR_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-md ${cat.cols} aspect-[4/3] md:aspect-auto md:h-80`}
                onClick={() => navigate('/packages')}
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Scrim overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300" />
                
                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white z-10">
                  <h3 className="text-xl md:text-3xl font-bold font-display leading-tight max-w-sm mb-3">
                    {cat.title}
                  </h3>
                  <span className="inline-block bg-[#FACC15] text-[#002140] text-[10px] font-black font-sans px-4 py-2 rounded shadow-sm tracking-widest uppercase">
                    {cat.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Our Services"
            title="Tailored Travel Solutions for Every Journey"
            subtitle="From simple airport drops to monthly luxury car leases and custom pilgrimages, we ensure every mile is travel in absolute comfort."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats Banner Section */}
      <section className="bg-primary text-white py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-3xl md:text-5xl font-bold font-display text-gold-light block">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fleet Section (Visual Auto-Scrolling Showcase) */}
      <section id="fleet" className="py-20 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle
              tag="Elite Fleet"
              title="Travel in the Pinnacle of Comfort"
              align="left"
              className="mb-0 max-w-2xl"
            />
            <Link 
              to="/packages" 
              className="inline-flex items-center text-sm font-bold text-primary hover:text-gold transition-colors font-sans py-2"
            >
              View Full Fleet <RiArrowRightLine className="ml-2" />
            </Link>
          </div>

          {/* Auto Scrolling Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={FLEET.length > 3}
            pagination={{ clickable: true, el: '.fleet-swiper-pagination' }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full pb-4"
          >
            {FLEET.map((vehicle) => (
              <SwiperSlide key={vehicle.id}>
                <div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col text-left group cursor-pointer h-[380px] md:h-[450px]"
                  onClick={() => handleOpenModal(vehicle)}
                >
                  {/* Vehicle Image Frame */}
                  <div className="h-44 md:h-56 overflow-hidden relative bg-slate-100 flex-shrink-0">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {vehicle.tag && (
                      <span className="absolute top-4 right-4 bg-gold text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                        {vehicle.tag}
                      </span>
                    )}
                  </div>

                  {/* Card Details Body */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-widest text-gold uppercase font-sans block">
                        {vehicle.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold font-display text-primary leading-tight line-clamp-1">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans line-clamp-2 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-sans text-gray-500">
                      <span>Seats: {vehicle.seats} | Bags: {vehicle.bags}</span>
                      <span className="text-gold font-bold group-hover:translate-x-1 transition-transform duration-300">Enquire Now →</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination indicator slot */}
          <div className="fleet-swiper-pagination flex justify-center mt-6 gap-1.5" />
        </div>
      </section>



      {/* 7. FAQ Accordion Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            tag="FAQ"
            title="Common Inquiries"
          />

          <div className="space-y-4 text-left">
            {FAQS.map((faq, index) => (
              <div 
                key={faq.id} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-sans font-semibold text-primary hover:text-primary-light transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <RiSubtractLine className="text-gold text-lg shrink-0" />
                  ) : (
                    <RiAddLine className="text-gold text-lg shrink-0" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-gray-500 font-sans leading-relaxed border-t border-gray-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action / Newsletter Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Soft layout designs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Join Our Exclusive Travel Circle
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            Get early access to travel itineraries, seasonal package discounts, and luxury fleet updates.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your premium email"
              required
              className="w-full px-5 py-3.5 bg-white text-primary rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold-light border-none outline-none shadow-md"
            />
            <Button
              type="submit"
              variant="gold"
              className="w-full sm:w-auto font-bold px-8 py-3.5 shadow-md shrink-0 cursor-pointer"
            >
              Subscribe now
            </Button>
          </form>
          {newsletterMsg && (
            <p className="text-xs text-gold-light mt-3 font-sans font-medium">{newsletterMsg}</p>
          )}
        </div>
      </section>

      {/* Enquiry Modal overlay */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={modalData}
      />
    </div>
  );
}
