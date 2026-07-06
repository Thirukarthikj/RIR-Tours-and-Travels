import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { Input, Textarea, Select } from '../common/Input';
import Button from '../common/Button';
import { useSettings } from '../../hooks/useSettings';
import { submitEnquiry } from '../../services/enquiryService';
import { adminService } from '../../services/adminService';

export default function EnquiryModal({ isOpen, onClose, initialData = null }) {
  const { settings } = useSettings();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState(settings?.whatsapp || '');

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  // Pre-fill fields if opened from a specific package/vehicle
  useEffect(() => {
    if (initialData) {
      if (initialData.title) {
        setValue('service', initialData.title);
        setValue('message', `Hi, I am interested in booking the "${initialData.title}" package (${initialData.duration}). Please share customized pricing details.`);
      } else if (initialData.name) {
        setValue('service', initialData.name);
        setValue('message', `Hi, I am interested in renting the "${initialData.name}" (${initialData.category}). Please share tariff options.`);
      }
    } else {
      reset({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
    setIsSubmitted(false);
  }, [initialData, isOpen, setValue, reset]);

  // Load dynamic WhatsApp number from Firestore settings if configured
  useEffect(() => {
    adminService.getSettings().then(settings => {
      if (settings && settings.whatsapp) {
        setWhatsappNumber(settings.whatsapp);
      }
    }).catch(() => {});
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await submitEnquiry(data);
      if (res.success) {
        // Format WhatsApp message text
        const messageText = `Hello RIR Tours & Travels! 👋

I have submitted an enquiry:
*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Email:* ${data.email || 'N/A'}
*Service/Package:* ${data.service}
*Message:* ${data.message}

Please confirm availability and details. Thank you!`;

        const phoneDigits = whatsappNumber.replace(/\D/g, '');
        const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(messageText)}`;

        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, 'rir_whatsapp');

        setIsSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error("Failed to submit enquiry:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: "Munnar Hills & Tea Estates", label: "Munnar Hills & Tea Estates Package" },
    { value: "Ooty Botanic & Lake Getaway", label: "Ooty Botanic & Lake Getaway Package" },
    { value: "Kodaikanal Misty Peaks", label: "Kodaikanal Misty Peaks Package" },
    { value: "Kodaikanal Valley Sightseeing", label: "Kodaikanal Valley Sightseeing (Local)" },
    { value: "Kodaikanal Classic City Tour", label: "Kodaikanal Classic City Tour (Local)" },
    { value: "Kodaikanal Forest & Wild Tour", label: "Kodaikanal Forest & Wild Tour (Local)" },
    { value: "Kodaikanal Trekking & Adventure", label: "Kodaikanal Trekking & Adventure (Local)" },
    { value: "Kodaikanal Mannavanur Village Eco Tour", label: "Kodaikanal Mannavanur Village Eco Tour (Local)" },
    { value: "Yercaud Emerald Escapes", label: "Yercaud Emerald Escapes Package" },
    { value: "Thekkady Wildlife & Spice Tour", label: "Thekkady Wildlife & Spice Tour Package" },
    { value: "Kanyakumari Sunrise & Heritage", label: "Kanyakumari Sunrise & Heritage Package" },
    { value: "Rameshwaram & Dhanushkodi Island", label: "Rameshwaram & Dhanushkodi Island Package" },
    { value: "Thiruchendur Murugan Sea Temple", label: "Thiruchendur Murugan Sea Temple Package" },
    { value: "Madurai Meenakshi & Palace Heritage", label: "Madurai Meenakshi & Palace Heritage Package" },
    { value: "Trichy Rockfort & Srirangam", label: "Trichy Rockfort & Srirangam Package" },
    { value: "Tirupati Balaji VIP Pilgrimage", label: "Tirupati Balaji VIP Pilgrimage Package" },
    { value: "Trivandrum Padmanabhaswamy & Kovalam", label: "Trivandrum Padmanabhaswamy & Kovalam Package" },
    { value: "Arupadaiveedu Murugan Temple Tour", label: "Arupadaiveedu Murugan Temple Tour Package" },
    { value: "Toyota Innova Hycross", label: "Toyota Innova Hycross (Cab)" },
    { value: "Toyota Fortuner / SUV", label: "Toyota Fortuner / SUV (Cab)" },
    { value: "Luxury Tempo Traveller", label: "Luxury Tempo Traveller (Cab)" },
    { value: "Custom Bespoke Tour", label: "Custom Bespoke Tour Plan" },
    { value: "Airport Transfer / Drop", label: "Airport Drop / Pick-up" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-10 text-left font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-primary text-white">
              <div>
                <h3 className="text-lg font-bold font-display tracking-wide">
                  {initialData ? `Enquire: ${initialData.title || initialData.name}` : "Book Chauffeur / Custom Tour"}
                </h3>
                <p className="text-xs text-white/70 mt-0.5 font-sans">
                  Submit details below to reach our concierge.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white text-2xl transition-colors cursor-pointer"
                aria-label="Close"
              >
                <RiCloseLine />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6">
              {isSubmitted ? (
                /* Success visual layout */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 px-4"
                >
                  <RiCheckboxCircleFill className="text-6xl text-secondary mb-4" />
                  <h4 className="text-xl font-bold text-primary font-display mb-2">
                    Enquiry Submitted Successfully
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm mb-8 font-sans leading-relaxed">
                    Thank you! Our travel concierge has received your request and will get back to you within 2 business hours.
                  </p>
                  <Button onClick={onClose} variant="primary" className="px-8 rounded-full">
                    Done
                  </Button>
                </motion.div>
              ) : (
                /* Main form layout */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    label="Full Name"
                    id="fullName"
                    required
                    placeholder="Enter your name"
                    error={errors.fullName?.message}
                    {...register('fullName', { required: 'Please enter your full name' })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      id="email"
                      required
                      type="email"
                      placeholder="e.g. name@example.com"
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
                      placeholder="e.g. +91 99999 99999"
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

                  <Select
                    label="Interested Service / Package"
                    id="service"
                    required
                    options={serviceOptions}
                    error={errors.service?.message}
                    {...register('service', { required: 'Please select a package/service' })}
                  />

                  <Textarea
                    label="Your Message"
                    id="message"
                    required
                    placeholder="Tell us about your travel dates, passenger count, or special requests..."
                    error={errors.message?.message}
                    {...register('message', { required: 'Please enter details for your enquiry' })}
                  />

                  <Button
                    type="submit"
                    variant="gold"
                    className="w-full font-bold mt-2 py-3 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
