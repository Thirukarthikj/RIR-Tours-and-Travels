const SITE_URL = 'https://www.rirtoursandtravels.com';

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
