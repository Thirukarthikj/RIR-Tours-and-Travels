import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiWhatsappLine, RiArrowRightLine, RiAddLine, RiSubtractLine, RiPhoneLine } from 'react-icons/ri';
import Button from '../../components/common/Button';
import EnquiryModal from '../../components/shared/EnquiryModal';
import SEOMeta from '../../components/common/SEOMeta';
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from '../../utils/schema';
import { useSettings } from '../../hooks/useSettings';

/**
 * SEOLandingLayout – Shared layout for all Kodaikanal SEO landing pages.
 *
 * Props:
 *  - seo          : { title, description, canonical, ogImage }
 *  - hero         : { tagline, heading, subHeading, image }
 *  - breadcrumbs  : Array of { name, path }
 *  - serviceName  : Service name for schema
 *  - serviceDesc  : Service description for schema
 *  - sections     : Array of { title, content (JSX) }
 *  - faqs         : Array of { question, answer }
 *  - relatedLinks : Array of { label, path }
 *  - children     : Extra content
 */
export default function SEOLandingLayout({
  seo,
  hero,
  breadcrumbs = [],
  serviceName,
  serviceDesc,
  sections = [],
  faqs = [],
  relatedLinks = [],
  children,
}) {
  const { settings: CONTACT_INFO } = useSettings();
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(`Hello RIR Tours & Travels! I'm interested in ${serviceName || 'your services'}.`)}`;

  const schemas = [
    localBusinessSchema(),
    serviceSchema(serviceName, serviceDesc, seo.canonical),
    breadcrumbSchema(breadcrumbs),
    ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
  ];

  return (
    <div className="overflow-hidden font-sans bg-white min-h-screen">
      <SEOMeta
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        schemas={schemas}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary-dark/50" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60 font-sans">
                {breadcrumbs.map((bc, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span>/</span>}
                    {i < breadcrumbs.length - 1 ? (
                      <Link to={bc.path} className="hover:text-gold-light transition-colors">{bc.name}</Link>
                    ) : (
                      <span className="text-gold-light font-semibold">{bc.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest mb-3 block">{hero.tagline}</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-5 max-w-3xl">{hero.heading}</h1>
          <p className="text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{hero.subHeading}</p>

        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {sections.map((section, i) => (
          <section key={i} className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-primary mb-5 leading-tight">{section.title}</h2>
            <div className="prose prose-gray max-w-none text-gray-600 font-sans text-[15px] leading-relaxed">
              {section.content}
            </div>
          </section>
        ))}

        {/* Extra children content */}
        {children}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
                        <div className="px-6 pb-5 pt-1 text-sm text-gray-500 font-sans leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Internal Links Section */}
        {relatedLinks.length > 0 && (
          <section className="text-left">
            <h2 className="text-xl font-bold font-display text-primary mb-5">Explore More Kodaikanal Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-gray-100 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all group"
                >
                  <RiArrowRightLine className="text-gold group-hover:text-gold-light transition-colors shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 relative z-10">
            Ready to Explore Kodaikanal?
          </h2>
          <p className="text-sm text-gray-300 max-w-lg mx-auto mb-6 relative z-10">
            Contact RIR Tours and Travels for the best Kodaikanal tour packages, cab booking, and taxi services. We are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <Button onClick={() => setIsModalOpen(true)} variant="gold" size="lg" className="font-bold cursor-pointer">
              Send Enquiry
            </Button>
            <a href={`tel:${CONTACT_INFO.phone?.replace(/\s+/g, '')}`}>
              <Button variant="outlineWhite" size="lg" icon={<RiPhoneLine />} className="font-bold cursor-pointer w-full">
                Call Now
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={serviceName ? { title: serviceName } : null}
      />
    </div>
  );
}
