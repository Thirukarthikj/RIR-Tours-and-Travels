// Navigation links
export const NAV_LINKS = [
  { label: 'Services', path: '/#services' },
  { label: 'Packages', path: '/packages' },
  { label: 'Cab', path: '/fleet' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' }
];

// Company Contact Info
export const CONTACT_INFO = {
  name: "RIR Tours & Travels",
  address: "42 Luxury Drive, Anna Salai, Chennai, Tamil Nadu 600002",
  phone: "+91 44 2456 7890",
  whatsapp: "+91 93425 53805",
  email: "concierge@rirtours.com",
  hours: "Mon-Sat: 09:00 - 20:00",
  gstin: "33AAAAR0000A1Z2",
  pan: "AAAAA0000A",
  socials: {
    facebook: "https://facebook.com/rirtours",
    instagram: "https://instagram.com/rirtours",
    youtube: "https://youtube.com/rirtours"
  }
};

// Services Offered
export const SERVICES = [
  {
    id: "one-way",
    title: "One Way Drop",
    icon: "RiNavigationLine", // Will map to React Icons
    description: "Premium airport transfers and city-to-city drops with zero wait times."
  },
  {
    id: "round-trip",
    title: "Round Trip",
    icon: "RiRouteLine",
    description: "Drive and return at your own pace with well-trained, round-trip services."
  },
  {
    id: "temple-tours",
    title: "Temple Tours",
    icon: "RiHomeHeartLine",
    description: "Spiritual journeys through the holy land of Tamil Nadu with local guides."
  },
  {
    id: "coastal-escapes",
    title: "Coastal Escapes",
    icon: "RiSailboatLine",
    description: "Explore the serene shores of Rameshwaram and Pondicherry in style."
  }
];

// Stats Data
export const STATS = [
  { value: "15k+", label: "Trips Completed" },
  { value: "10k+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "45+", label: "Luxury Fleet" }
];

// Vehicle Fleet List
export const FLEET = [
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Premium MUV",
    tag: "Popular",
    seats: 7,
    bags: 5,
    amenities: ["Climate Control", "Premium Captain Seats", "LED TV Screen"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600",
    description: "Ideal for family road trips and corporate transits, providing ultimate passenger relaxation."
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes E-Class",
    category: "Luxury Sedan",
    tag: "Exclusive",
    seats: 4,
    bags: 2,
    amenities: ["Minibar", "Ambient Lighting", "Panoramic Roof"],
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=600",
    description: "The epitome of executive travel, featuring luxury leather interiors and an ultra-smooth ride."
  },
  {
    id: "luxury-traveller",
    name: "Luxury Traveller",
    category: "Group Transport",
    tag: "Premium",
    seats: 12,
    bags: 8,
    amenities: ["Entertainment System", "Reclining Seats", "On-board Wifi"],
    image: "https://images.unsplash.com/photo-1532264523420-881a47db012d?q=80&w=600",
    description: "Designed for larger groups looking to tour together without compromising on luxury and comfort."
  }
];

// Tour Packages List
export const PACKAGES = [
  {
    id: "madurai-rameshwaram",
    title: "Madurai & Rameshwaram",
    tag: "Bestseller",
    rating: 4.9,
    duration: "3 Days / 2 Nights",
    vehicle: "Seven Luxury Cars",
    region: "Spiritual",
    tourType: "Luxury Fleet",
    highlights: [
      "22 Sacred Wells Bathing Ritual",
      "Dhanushkodi Ghost Town Visit",
      "Meenakshi Amman Temple VIP Darshan"
    ],
    description: "Dive deep into the spiritual heart of Tamil Nadu. Tour the historic city of Madurai and proceed to the island of Rameshwaram, experiencing standard temple rituals and sightseeing with executive transport and premium lodgings.",
    image: "https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=600"
  },
  {
    id: "ooty-kodaikanal",
    title: "Ooty & Kodaikanal",
    tag: "Romantic Escape",
    rating: 4.8,
    duration: "5 Days / 4 Nights",
    vehicle: "Premium Sedan",
    region: "Hill Station",
    tourType: "Luxury Fleet",
    highlights: [
      "Private Tea Estate Tour",
      "Sunrise Boating at Kodaikanal Lake",
      "Premium Resort Lodging"
    ],
    description: "Escape to the cool, misty climates of South India's premier hill stations. This romantic getaway includes curated estate walks, private boating, scenic viewpoints, and cozy luxury accommodation.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600"
  },
  {
    id: "coastal-tamil-nadu",
    title: "Coastal Tamil Nadu",
    tag: "Scenic Drive",
    rating: 4.7,
    duration: "4 Days / 3 Nights",
    vehicle: "Luxury Traveller",
    region: "Coastal",
    tourType: "Luxury Fleet",
    highlights: [
      "French Quarter Heritage Walk",
      "Authentic Seafood Experience",
      "Shore Temple Sunrise Tour"
    ],
    description: "A gorgeous oceanfront itinerary mapping Mahabalipuram's rock-cut monuments to Pondicherry's French avenues. Savour coastal culinary delights and experience beach resort luxury.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600"
  },
  {
    id: "spiritual-temple-tours",
    title: "Spiritual Temple Tours",
    tag: "Exclusive",
    rating: 5.0,
    duration: "6 Days / 5 Nights",
    vehicle: "Toyota Fortuner",
    region: "Spiritual",
    tourType: "Luxury Fleet",
    highlights: [
      "VIP Darshan Assurance",
      "Historical Chola Legacy Guide",
      "Tanjore Big Temple Tour"
    ],
    description: "The ultimate pilgrimage covering the magnificent architectural monuments of the Chola empire, including Thanjavur, Trichy, and Kumbakonam. Enjoy expedited temple entries and premium comfort.",
    image: "https://images.unsplash.com/photo-1608976450630-18e38ee12f9b?q=80&w=600"
  }
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Anand Krishnan",
    role: "Business Consultant",
    rating: 5,
    text: "The temple tour was absolutely flawless. Our driver was extremely knowledgeable and the vehicle was exceptionally clean. Truly a premium experience.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
  },
  {
    id: 2,
    name: "Meera Kumar",
    role: "Creative Director",
    rating: 5,
    text: "Booking was seamless through WhatsApp. We traveled to Ooty in their Mercedes and it was the most comfortable road trip our family has ever had.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
  }
];

// FAQ Data
export const FAQS = [
  {
    id: 1,
    question: "How do I book a tour with RIR?",
    answer: "You can book directly via our website by sending an enquiry, or call/WhatsApp our 24/7 concierge team. We will tailor the package and fleet to match your specifications."
  },
  {
    id: 2,
    question: "Are the drivers trained for long-distance temple tours?",
    answer: "Yes, all our chauffeurs are highly experienced in South Indian highways, fluent in local languages, background checked, and specifically trained for pilgrimage tours."
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "Cancellations made 72 hours prior to the trip start time will receive a full refund. For late cancellations, a minor processing fee may apply depending on the booking type."
  }
];

// FAQ Data for Contact Page
export const CONTACT_FAQS = [
  {
    id: 1,
    question: "Do you provide airport transfers?",
    answer: "Yes, we offer premium airport transfers in our luxury fleet for all major airports in Tamil Nadu including Chennai, Coimbatore, Trichy, and Madurai."
  },
  {
    id: 2,
    question: "Can itineraries be customized?",
    answer: "Absolutely. All our listed tours are customizable. You can adjust duration, select specific vehicles, or alter destinations to create a bespoke itinerary."
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "For premium custom tours, cancellation conditions vary. Typically, cancellations up to 3 days in advance qualify for full refunds. Details will be provided during quotation."
  }
];

export const POPULAR_CATEGORIES = [
  {
    id: 1,
    title: "India Tour Packages",
    count: "98 TOURS",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600",
    cols: "md:col-span-2"
  },
  {
    id: 2,
    title: "International Tour Packages",
    count: "362 TOURS",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600",
    cols: "md:col-span-1"
  },
  {
    id: 3,
    title: "International Honeymoon Packages",
    count: "17 TOURS",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600",
    cols: "md:col-span-1"
  },
  {
    id: 4,
    title: "Europe Tour Packages",
    count: "144 TOURS",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=600",
    cols: "md:col-span-1"
  },
  {
    id: 5,
    title: "Educational Tour Packages",
    count: "15 TOURS",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185826/imgi_25_kerala-boat-house-honeymoon-package_hwg0e6.jpg",
    cols: "md:col-span-1"
  }
];

export const FLEET_EXTENDED = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    tag: "Executive SUV",
    seats: "6+1 Seats",
    ac: "Climate Control",
    bags: "3 Large Bags",
    extra: "Onboard WiFi",
    pills: ["Professional Driver", "Mineral Water"],
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=600"
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    tag: "Luxury SUV",
    seats: "6+1 Seats",
    ac: "Dual AC",
    bags: "2 Large Bags",
    extra: "Premium Water",
    pills: ["Uniformed Driver", "Luxury Interior"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600"
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Sedan",
    tag: "Premium Sedan",
    seats: "4+1 Seats",
    ac: "High Efficiency AC",
    bags: "2 Med Bags",
    extra: "GPS Tracking",
    pills: ["Budget Friendly", "City Specialist"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600"
  },
  {
    id: "tempo-traveller",
    name: "Luxury Tempo Traveller",
    category: "Tempo Traveller",
    tag: "Group Travel",
    seats: "12-17 Seats",
    ac: "Roof Mounted AC",
    bags: "Ample Storage",
    extra: "Entertainment",
    pills: ["Reclining Seats", "Reading Lights"],
    image: "https://images.unsplash.com/photo-1532264523420-881a47db012d?q=80&w=600"
  },
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Sedan",
    tag: "Urban Sedan",
    seats: "4+1 Seats",
    ac: "Quick Cool AC",
    bags: "1 Large Bag",
    extra: "USB Charging",
    pills: ["Economical", "Modern Features"],
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600"
  },
  {
    id: "volvo-coach",
    name: "Volvo Multi-Axle",
    category: "Luxury Coach",
    tag: "Luxury Coach",
    seats: "45+ Seats",
    ac: "Semi-Sleeper",
    bags: "Massive Storage",
    extra: "Onboard Toilet",
    pills: ["Air Suspension", "Premium Audio"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600"
  }
];

export const GALLERY_EXTENDED = [
  {
    id: 1,
    title: "Chauffeur Drives on Coastal Roads",
    category: "Fleet",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185824/imgi_5_kerala-trip-packages_iboeoi.jpg"
  },
  {
    id: 2,
    title: "Western Ghats Tea Estates Drive",
    category: "Destinations",
    url: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600"
  },
  {
    id: 3,
    title: "Our Premium Volvo Coach Fleet",
    category: "Fleet",
    url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600"
  },
  {
    id: 4,
    title: "Shore Temple Heritage Sunrise",
    category: "Destinations",
    url: "https://images.unsplash.com/photo-1608976450630-18e38ee12f9b?q=80&w=600"
  },
  {
    id: 5,
    title: "Luxury Tempo Traveller Interior Cabin",
    category: "Fleet",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600"
  },
  {
    id: 6,
    title: "Traditional Welcome & Hospitality",
    category: "Events",
    url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600"
  },
  {
    id: 7,
    title: "Feasting on Authentic Banana Leaves Meal",
    category: "Events",
    url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600"
  },
  {
    id: 8,
    title: "Meenakshi Temple Tank at Twilight",
    category: "Destinations",
    url: "https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=600"
  }
];
