import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiWhatsappLine, RiMailLine, RiTimeLine, RiFacebookCircleLine, RiInstagramLine, RiYoutubeLine, RiAddLine, RiSubtractLine, RiCheckboxCircleFill } from 'react-icons/ri';

// Reusable Components
import { Input, Textarea } from '../../components/common/Input';
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';
import { CONTACT_FAQS } from '../../constants';
import { useSettings } from '../../hooks/useSettings';
import { submitEnquiry } from '../../services/enquiryService';

export default function Contact() {
  const { settings: CONTACT_INFO } = useSettings();
  const [openFaq, setOpenFaq] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await submitEnquiry(data);
      if (res.success) {
        // Format WhatsApp message text
        const messageText = `Hello RIR Tours & Travels! 👋\n\nI have submitted an enquiry:\n*Name:* ${data.fullName}\n*Phone:* ${data.phone}\n*Email:* ${data.email || 'N/A'}\n*Interested Service:* ${data.service || 'General Enquiry'}\n*Message:* ${data.message}\n\nPlease confirm availability and details. Thank you!`;

        const phoneDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
        const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(messageText)}`;
        
        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, 'rir_whatsapp');

        setIsSuccess(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="overflow-hidden font-sans bg-slate-50 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="relative py-24 md:py-32 bg-primary-dark text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest">Concierge Desk</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
            Get in Touch with Our Concierge Team
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Experience unparalleled personalized service. Whether planning a coastal escape or a spiritual journey, our experts are here to curate your perfect itinerary.
          </p>
        </div>
      </section>

      {/* 2. Coordinates & Form Layout */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Our Office */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-start space-x-4">
              <div className="bg-primary/5 text-primary p-3 rounded-xl">
                <RiMapPin2Line className="text-xl" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Our Office</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-sans">{CONTACT_INFO.address}</p>
                {CONTACT_INFO.googleMaps && (
                  <a href={CONTACT_INFO.googleMaps} target="rir_map" rel="noopener noreferrer" className="inline-block mt-2 text-[11px] font-bold text-gold hover:underline">
                    View on Google Maps →
                  </a>
                )}
              </div>
            </div>

            {/* Grid of contact coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-start space-x-3.5">
                <div className="bg-primary/5 text-primary p-2.5 rounded-lg">
                  <RiPhoneLine className="text-lg" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Phone</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-xs text-gray-500 hover:text-primary transition-colors font-medium font-sans">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-start space-x-3.5">
                <div className="bg-[#25D366]/10 text-[#25D366] p-2.5 rounded-lg">
                  <RiWhatsappLine className="text-lg" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-[#25D366] uppercase tracking-wide">WhatsApp</h3>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="rir_whatsapp" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[#25D366] transition-colors font-medium font-sans">{CONTACT_INFO.whatsapp}</a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-start space-x-3.5">
                <div className="bg-primary/5 text-primary p-2.5 rounded-lg">
                  <RiMailLine className="text-lg" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs text-gray-500 hover:text-primary transition-colors font-medium font-sans">{CONTACT_INFO.email}</a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-start space-x-3.5">
                <div className="bg-primary/5 text-primary p-2.5 rounded-lg">
                  <RiTimeLine className="text-lg" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Hours</h3>
                  <p className="text-xs text-gray-500 font-medium font-sans">{CONTACT_INFO.hours}</p>
                </div>
              </div>

            </div>

            {/* Social media handles */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] space-y-4">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Follow Our Journeys</h3>
              <div className="flex space-x-4">
                <a href={CONTACT_INFO.socials.facebook} target="rir_facebook" rel="noopener noreferrer" className="bg-slate-50 border border-slate-100 text-gray-400 hover:text-primary hover:bg-slate-100 p-2.5 rounded-lg text-lg transition-all" aria-label="Facebook">
                  <RiFacebookCircleLine />
                </a>
                <a href={CONTACT_INFO.socials.instagram} target="rir_instagram" rel="noopener noreferrer" className="bg-slate-50 border border-slate-100 text-gray-400 hover:text-primary hover:bg-slate-100 p-2.5 rounded-lg text-lg transition-all" aria-label="Instagram">
                  <RiInstagramLine />
                </a>
                <a href={CONTACT_INFO.socials.youtube} target="rir_youtube" rel="noopener noreferrer" className="bg-slate-50 border border-slate-100 text-gray-400 hover:text-primary hover:bg-slate-100 p-2.5 rounded-lg text-lg transition-all" aria-label="YouTube">
                  <RiYoutubeLine />
                </a>
              </div>
            </div>

          </div>

          {/* Form UI (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_10px_35px_-8px_rgba(0,33,64,0.04)] text-left flex flex-col justify-between">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-16 px-4"
              >
                <RiCheckboxCircleFill className="text-6xl text-secondary mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold font-display text-primary mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-500 max-w-sm mb-8 leading-relaxed font-sans">
                  Our concierge team has received your enquiry. We will review your specifications and contact you within 2 business hours.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="primary" className="px-8 rounded-full">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-primary mb-1">Send a Message</h3>
                  <p className="text-xs text-gray-500 mb-6 font-sans">Fill out the form below and our travel specialists will contact you.</p>
                </div>

                <Input
                  label="Full Name"
                  id="fullName"
                  required
                  placeholder="John Doe"
                  error={errors.fullName?.message}
                  {...register('fullName', { required: 'Please enter your full name' })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    id="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  <Input
                    label="Phone Number"
                    id="phone"
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    error={errors.phone?.message}
                    {...register('phone', {
                      required: 'Please enter your phone number',
                      pattern: {
                        value: /^[0-9+\s-]{8,15}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                </div>


                <Textarea
                  label="Your Message"
                  id="message"
                  required
                  placeholder="Tell us about your travel plans..."
                  error={errors.message?.message}
                  {...register('message', { required: 'Please enter details for your enquiry' })}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full font-bold py-3 mt-2 cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Presence / SVG Map Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Our Service Network"
            title="Strategically Located to Serve You"
            subtitle="Explore our locations covering the heritage networks and coastal lines of the South."
          />

          {/* SVG Map Layout representation */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-12 relative flex items-center justify-center min-h-[400px] overflow-hidden shadow-inner">
            
            {/* Custom stylized map graphic representing Tamil Nadu and branches */}
            <svg viewBox="0 0 800 500" className="w-full max-w-3xl h-auto relative z-10 select-none">
              {/* Simplified contour representation of Tamil Nadu/South India coast */}
              <path 
                d="M380,50 L440,100 L470,180 L520,240 L530,280 L540,320 L510,380 L460,420 L400,450 L340,430 L310,380 L290,320 L270,260 L280,200 L300,120 L350,70 Z" 
                fill="#E2E8F0" 
                stroke="#CBD5E1" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              
              {/* Map grid lines */}
              <line x1="50" y1="250" x2="750" y2="250" stroke="#E2E8F0" strokeWidth="1" />
              <line x1="400" y1="20" x2="400" y2="480" stroke="#E2E8F0" strokeWidth="1" />

              {/* Chennai Anchor (Main Hub) */}
              <g className="cursor-pointer">
                {/* Ping waves */}
                <circle cx="475" cy="180" r="15" fill="#002140" className="animate-ping opacity-15" />
                <circle cx="475" cy="180" r="8" fill="#002140" />
                <circle cx="475" cy="180" r="4" fill="#B45309" />
                {/* Pointer Card */}
                <rect x="490" y="145" width="160" height="50" rx="8" fill="white" stroke="#002140" strokeWidth="1.5" shadow="md" />
                <text x="502" y="165" fill="#002140" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Main Hub</text>
                <text x="502" y="180" fill="#64748B" fontSize="9" fontFamily="sans-serif">Chennai Intl. Terminal</text>
              </g>

              {/* Mahabalipuram Anchor (Coastal Desk) */}
              <g className="cursor-pointer">
                <circle cx="495" cy="225" r="15" fill="#16A34A" className="animate-ping opacity-15" />
                <circle cx="495" cy="225" r="8" fill="#16A34A" />
                <circle cx="495" cy="225" r="4" fill="#B45309" />
                {/* Pointer Card */}
                <rect x="510" y="200" width="160" height="50" rx="8" fill="white" stroke="#16A34A" strokeWidth="1.5" />
                <text x="522" y="220" fill="#16A34A" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Coastal Desk</text>
                <text x="522" y="235" fill="#64748B" fontSize="9" fontFamily="sans-serif">Mahabalipuram Branch</text>
              </g>

              {/* Kerala Desk (Munnar & Alleppey) */}
              <g className="cursor-pointer">
                <circle cx="340" cy="360" r="15" fill="#0EA5E9" className="animate-ping opacity-15" />
                <circle cx="340" cy="360" r="8" fill="#0EA5E9" />
                <circle cx="340" cy="360" r="4" fill="#B45309" />
                {/* Pointer Card */}
                <rect x="170" y="335" width="160" height="50" rx="8" fill="white" stroke="#0EA5E9" strokeWidth="1.5" />
                <text x="182" y="355" fill="#0EA5E9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kerala Desk</text>
                <text x="182" y="370" fill="#64748B" fontSize="9" fontFamily="sans-serif">Cochin & Munnar Branch</text>
              </g>

              {/* Bengaluru Hub */}
              <g className="cursor-pointer">
                <circle cx="370" cy="150" r="15" fill="#8B5CF6" className="animate-ping opacity-15" />
                <circle cx="370" cy="150" r="8" fill="#8B5CF6" />
                <circle cx="370" cy="150" r="4" fill="#B45309" />
                {/* Pointer Card */}
                <rect x="200" y="115" width="160" height="50" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
                <text x="212" y="135" fill="#8B5CF6" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Bengaluru Hub</text>
                <text x="212" y="150" fill="#64748B" fontSize="9" fontFamily="sans-serif">Garden City Desk</text>
              </g>

              {/* Legend details */}
              <text x="50" y="440" fill="#002140" fontSize="12" fontWeight="bold" fontFamily="sans-serif">RIR Network Scope</text>
              <text x="50" y="458" fill="#64748B" fontSize="10" fontFamily="sans-serif">All chauffeur transfers are GPS monitored in real-time.</text>
            </svg>
            
          </div>
        </div>
      </section>

      {/* 4. Common Questions Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: visual (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg aspect-square bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600"
                alt="Butler Concierge Bell Service Desk"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Accordion FAQs (7 cols) */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">Support FAQ</span>
                <h2 className="text-3xl font-bold font-display text-primary">Common Questions</h2>
                <p className="text-xs text-gray-500 font-sans mt-1">We understand luxury requires clarity. Here are some quick answers to common enquiries.</p>
              </div>

              <div className="space-y-4">
                {CONTACT_FAQS.map((faq, index) => (
                  <div 
                    key={faq.id} 
                    className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left font-sans font-semibold text-primary hover:text-primary-light transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm">{faq.question}</span>
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
                          <div className="px-5 pb-4 pt-0.5 text-xs text-gray-500 font-sans leading-relaxed border-t border-gray-100/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
