import React from 'react';
import useDocumentHead from '../../hooks/useDocumentHead';

const SITE_URL = 'https://www.rirtours.com';

/**
 * SEOMeta – Reusable component for injecting SEO metadata into <head>.
 * Uses a custom hook instead of react-helmet-async (no external dependency).
 *
 * Props:
 *  - title        : Page title (will be appended with site name)
 *  - description  : Meta description (max ~160 chars)
 *  - canonical    : Canonical path, e.g. '/kodaikanal-tour-packages'
 *  - ogImage      : Open Graph image URL
 *  - schemas      : Array of JSON-LD schema objects
 *  - noIndex      : If true, adds noindex directive
 */
export default function SEOMeta({
  title,
  description,
  canonical = '',
  ogImage = 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
  schemas = [],
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | RIR Tours and Travels` : 'RIR Tours and Travels – Kodaikanal Tour Packages & Cab Booking';
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const meta = [
    { name: 'description', content: description },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: 'RIR Tours and Travels' },
    { property: 'og:locale', content: 'en_IN' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: canonicalUrl },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    // Geo Tags for Local SEO
    { name: 'geo.region', content: 'IN-TN' },
    { name: 'geo.placename', content: 'Kodaikanal' },
  ];

  if (noIndex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' });
  }

  useDocumentHead({
    title: fullTitle,
    meta,
    canonical: canonicalUrl,
    schemas,
  });

  return null; // This component only manages <head> — renders nothing
}

/* ─── Reusable Schema Generators ─── */

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness'],
  'name': 'RIR Tours and Travels',
  'image': 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
  'url': SITE_URL,
  'telephone': '+91-93425-53805',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Kodaikanal',
    'addressLocality': 'Kodaikanal',
    'addressRegion': 'Tamil Nadu',
    'postalCode': '624101',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 10.2381,
    'longitude': 77.4892,
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'opens': '00:00',
    'closes': '23:59',
  },
  'priceRange': '₹₹',
  'areaServed': [
    { '@type': 'City', 'name': 'Kodaikanal' },
    { '@type': 'City', 'name': 'Madurai' },
    { '@type': 'State', 'name': 'Tamil Nadu' },
  ],
  'sameAs': [
    'https://facebook.com/rirtours',
    'https://instagram.com/rirtours',
    'https://youtube.com/rirtours',
  ],
});

export const serviceSchema = (name, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': name,
  'description': description,
  'provider': {
    '@type': 'TravelAgency',
    'name': 'RIR Tours and Travels',
    'url': SITE_URL,
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Kodaikanal',
  },
  'url': `${SITE_URL}${url}`,
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, i) => ({
    '@type': 'ListItem',
    'position': i + 1,
    'name': item.name,
    'item': `${SITE_URL}${item.path}`,
  })),
});
