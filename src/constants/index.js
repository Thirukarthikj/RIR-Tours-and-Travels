// Navigation links
export const NAV_LINKS = [
  { label: 'Services', path: '/#services' },
  { label: 'Packages', path: '/packages' },
  { label: 'Cab', path: '/cab' },
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
  { value: "45+", label: "Luxury Cab" }
];

// Vehicle Cab List
export const CAB = [
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Premium MUV",
    tag: "Popular",
    seats: 7,
    bags: 5,
    amenities: ["Climate Control", "Premium Captain Seats", "LED TV Screen"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_6_innova_ooa4b8.jpg",
    description: "Ideal for family road trips and corporate transits, providing ultimate passenger relaxation."
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner / SUV",
    category: "Luxury SUV",
    tag: "Exclusive",
    seats: 7,
    bags: 3,
    amenities: ["Climate Control", "Premium Leather Seats", "GPS Navigation"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_5_suv_t9qzwz.jpg",
    description: "The epitome of high-performance touring, featuring a rugged build and unmatched passenger safety."
  },
  {
    id: "tempo-traveller",
    name: "Luxury Tempo Traveller",
    category: "Group Transport",
    tag: "Premium",
    seats: 12,
    bags: 8,
    amenities: ["Entertainment System", "Reclining Seats", "On-board Wifi"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246345/imgi_9_tempo_obexg0.jpg",
    description: "Designed for larger groups looking to tour together without compromising on luxury and comfort."
  }
];

// Tour Packages List
export const PACKAGES = [
  {
    id: "kodai-valley-tour",
    title: "Tour No. 1 (Valley Tour)",
    tag: "Valley Tour",
    rating: 4.8,
    duration: "1 Day",
    vehicle: "Etios / Innova",
    region: "Hill Station",
    tourType: "Local Tour",
    highlights: [
      "Coaker's Walk",
      "Upper Lake View",
      "Moier Point",
      "Pine Tree Forest",
      "Devil's Kichen (Guna Cave)",
      "Pillar Rocks",
      "Green Valley View",
      "Golf Course",
      "Pambar Falls",
      "Shopping & Lunch Break",
      "Brayant Park",
      "Kodai Lake"
    ],
    description: "Explore the signature valley viewpoints of Kodaikanal. Walk misty paths at Coaker's Walk, visit deep pine forests, and stand in awe of the towering Pillar Rocks.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg"
  },
  {
    id: "kodai-city-tour",
    title: "Tour No. 2 (City Tour)",
    tag: "City Tour",
    rating: 4.6,
    duration: "1 Day",
    vehicle: "Etios / Innova",
    region: "Hill Station",
    tourType: "Local Tour",
    highlights: [
      "Jain Temple",
      "Kurinji Andaver Temple",
      "Chettiar Park",
      "Palani View",
      "Kodai City View",
      "7D Theatre",
      "Science Museum",
      "Silver Falls",
      "Lake & Park"
    ],
    description: "Take a relaxed drive through Kodaikanal's main town attractions. Explore historical temples, beautiful public flower gardens, and local museums.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246361/Desktop_wallpaper_-_Serene_mountain_road_xmpyv4.jpg"
  },
  {
    id: "kodai-wild-tour",
    title: "Tour No. 3 (Wild Tour)",
    tag: "Wild Tour",
    rating: 4.7,
    duration: "1 Day",
    vehicle: "Etios / Innova",
    region: "Hill Station",
    tourType: "Local Tour",
    highlights: [
      "Silent Valley View",
      "Fire Tower",
      "Berijam Lake View",
      "Caps Fly View",
      "Herbal Forest",
      "Berijam Lake",
      "Shopping",
      "Kodai Lake"
    ],
    description: "Venture deep into Kodaikanal's protected forest zones. Experience the serene beauty of Berijam Lake and high-altitude wild pine views under a special forest permit.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_31_wayanad_pnyroq.jpg"
  },
  {
    id: "kodai-trekking-tour",
    title: "Tour No. 4 (Trekking Tour)",
    tag: "Trekking Tour",
    rating: 4.8,
    duration: "1 Day",
    vehicle: "Etios / Innova",
    region: "Hill Station",
    tourType: "Local Tour",
    highlights: [
      "La Saleth Church",
      "Vattakkanal Falls",
      "Pambar Falls",
      "Mountain Beauty",
      "Dolphine Nose",
      "Echo Rock",
      "500 Year Old Tree",
      "Shopping",
      "Brayant Park",
      "Lake Boating"
    ],
    description: "A trekking trail for nature lovers. Hike to the famous Dolphin Nose rock ledge overlooking deep valley drops, hear echoes at the canyon, and cross streams.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_16_kotagiri_mmkg42.jpg"
  },
  {
    id: "kodai-village-tour",
    title: "Tour No. 5 (Village Tour)",
    tag: "Village Tour",
    rating: 4.9,
    duration: "1 Day",
    vehicle: "Etios / Innova",
    region: "Hill Station",
    tourType: "Local Tour",
    highlights: [
      "Observatory Pine Forest",
      "Rose Garden",
      "Poombarai Village View",
      "Poombarai Village",
      "Mahalakshmi Temple",
      "Kulanthi velappar Temple",
      "Palani View",
      "Mannavanur Sheep Farm",
      "Rabit Farm",
      "Mannavanur Lake"
    ],
    description: "Discover Kodaikanal's countryside. Visit the terraced agriculture valleys of Poombarai village, walk around the grasslands of Mannavanur Lake, and tour animal farms.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_29_valparai_agdcal.jpg"
  },
  {
    id: "kodaikanal-misty",
    title: "Kodaikanal Misty Peaks",
    tag: "Scenic Drive",
    rating: 4.7,
    duration: "3 Days / 2 Nights",
    vehicle: "Toyota Fortuner",
    region: "Hill Station",
    tourType: "Luxury Cab",
    highlights: [
      "Coaker's Walk Heritage Trail",
      "Kodaikanal Lake Cycling",
      "Pillar Rocks Panoramic View"
    ],
    description: "Experience Kodaikanal's fresh pine forests, misty valleys, and calm lake. A scenic tour focusing on peaceful relaxation and customized nature trails.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg"
  },
  {
    id: "munnar-hills",
    title: "Munnar Hills & Tea Estates",
    tag: "Hills Escape",
    rating: 4.8,
    duration: "3 Days / 2 Nights",
    vehicle: "Toyota Innova Crysta",
    region: "Hill Station",
    tourType: "Luxury Cab",
    highlights: [
      "Private Tea Factory Tour",
      "Eravikulam National Park Visit",
      "Mattupetty Dam Boating"
    ],
    description: "Unwind in the mist-laden hills of Munnar. Explore sprawling tea plantations, scenic waterfalls, and experience premium resort luxury in Kerala's premier hill country.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_19_Munnar_zpepqe.jpg"
  },
  {
    id: "ooty-gateway",
    title: "Ooty Botanic & Lake Getaway",
    tag: "Romantic Escape",
    rating: 4.8,
    duration: "3 Days / 2 Nights",
    vehicle: "Premium Sedan",
    region: "Hill Station",
    tourType: "Luxury Cab",
    highlights: [
      "Nilgiri Toy Train Ride",
      "Doddabetta Peak Viewpoint",
      "Ooty Lake Private Boating"
    ],
    description: "Known as the Queen of Hill Stations, enjoy Ooty's colonial heritage gardens, scenic viewpoints, and peaceful boating, accompanied by luxury private transport.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_22_ooty_mwiwte.jpg"
  },
  
  {
    id: "yercaud-hills",
    title: "Yercaud Emerald Escapes",
    tag: "Weekend Getaway",
    rating: 4.6,
    duration: "2 Days / 1 Night",
    vehicle: "Toyota Etios",
    region: "Hill Station",
    tourType: "Luxury Cab",
    highlights: [
      "Emerald Lake Boating",
      "Pagoda Point Sunset",
      "Killiyur Falls Trek"
    ],
    description: "Explore the quiet charm of Yercaud. Famous for its coffee plantations, botanical gardens, and panoramic views of Salem from the Shevaroy Hills.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_30_yercaud_atq9eq.jpg"
  },
  {
    id: "thekkady-wildlife",
    title: "Thekkady Wildlife & Spice Tour",
    tag: "Adventure",
    rating: 4.7,
    duration: "3 Days / 2 Nights",
    vehicle: "Toyota Innova Hycross",
    region: "Hill Station",
    tourType: "Luxury Cab",
    highlights: [
      "Periyar Lake Wildlife Cruise",
      "Guided Spice Plantation Tour",
      "Kathakali Cultural Show"
    ],
    description: "Journey into the heart of Kerala's Periyar forest. Observe wild elephants, learn about local spice farming, and enjoy private traditional cultural performances.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_24_thekkady_s6nd7c.jpg"
  },
  {
    id: "kanyakumari-coast",
    title: "Kanyakumari Sunrise & Heritage",
    tag: "Scenic Drive",
    rating: 4.8,
    duration: "2 Days / 1 Night",
    vehicle: "Premium SUV",
    region: "Coastal",
    tourType: "Luxury Cab",
    highlights: [
      "Vivekananda Rock Memorial Ferry",
      "Thiruvalluvar Statue Visit",
      "Triveni Sangam Sunset View"
    ],
    description: "Stand at the southernmost tip of mainland India. Witness the Confluence of three oceans and enjoy historical tours of Padmanabhapuram Palace.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_14_kanyakumari_csetx3.jpg"
  },
  {
    id: "rameshwaram-temples",
    title: "Rameshwaram & Dhanushkodi Island",
    tag: "Bestseller",
    rating: 4.9,
    duration: "3 Days / 2 Nights",
    vehicle: "Seven Luxury Cars",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Pamban Bridge Scenic Crossing",
      "22 Sacred Wells Bathing Ritual",
      "Dhanushkodi Ghost Town Exploration"
    ],
    description: "Explore the holy island of Rameshwaram. Experience the spiritual bathing rituals at Ramanathaswamy Temple and drive to the abandoned town of Dhanushkodi.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_23_rameshwaram_bv5odj.jpg"
  },
  {
    id: "thiruchendur-coastal",
    title: "Thiruchendur Murugan Sea Temple",
    tag: "Spiritual",
    rating: 4.7,
    duration: "2 Days / 1 Night",
    vehicle: "Premium Sedan",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Nazhikinaru Sacred Well Darshan",
      "Shoreline Temple Sunrise Walk",
      "Tuticorin Salt Fields Drive"
    ],
    description: "Visit the only Murugan temple situated on the sea coast. Witness early morning beachfront rituals and enjoy seamless chauffeur transfers.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_25_thiruchendur_fxugle.jpg"
  },
  {
    id: "madurai-heritage",
    title: "Madurai Meenakshi & Palace Heritage",
    tag: "Heritage",
    rating: 4.9,
    duration: "2 Days / 1 Night",
    vehicle: "Toyota Innova Crysta",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Meenakshi Amman VIP Darshan",
      "Thirumalai Nayakkar Palace Show",
      "Famous Jigarthanda Tasting"
    ],
    description: "Step into the ancient city of Madurai. Experience the architecture of the Meenakshi Temple and enjoy local food tours in this legendary cultural hub.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg"
  },
  {
    id: "trichy-rockfort",
    title: "Trichy Rockfort & Srirangam",
    tag: "Spiritual",
    rating: 4.8,
    duration: "2 Days / 1 Night",
    vehicle: "Toyota Etios",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Srirangam Temple VIP Darshan",
      "Rockfort Uchchi Pillayar Climb",
      "Kallanai Dam Chola Legacy Walk"
    ],
    description: "Visit the massive Srirangam temple complex, the largest functioning temple in the world, and climb Trichy's historic Rockfort Temple for panoramic city views.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_27_trichy_uxa0hr.jpg"
  },
  {
    id: "tirupati-darshan",
    title: "Tirupati Balaji VIP Pilgrimage",
    tag: "Exclusive",
    rating: 5.0,
    duration: "2 Days / 1 Night",
    vehicle: "Toyota Fortuner",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Special Entry VIP Darshan Tickets",
      "Tirumala Hills Chauffeur Escort",
      "Srikalahasti Temple Visit"
    ],
    description: "Experience a stress-free pilgrimage to the world-famous Lord Venkateswara temple in Tirupati, featuring pre-arranged VIP entry and luxury hill transit.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_26_Tirupati_ebfe8n.jpg"
  },
  {
    id: "trivandrum-royal",
    title: "Trivandrum Padmanabhaswamy & Kovalam",
    tag: "Coastal",
    rating: 4.8,
    duration: "3 Days / 2 Nights",
    vehicle: "Premium Sedan",
    region: "Coastal",
    tourType: "Luxury Cab",
    highlights: [
      "Sree Padmanabhaswamy Temple Darshan",
      "Kovalam Beach Resort Stay",
      "Kuthira Malika Palace Tour"
    ],
    description: "Tour the capital of Kerala, home to the wealthiest temple in the world. Enjoy pristine sandy beaches at Kovalam and the royal heritage of Travancore palaces.",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_28_trivandrum_alfyde.jpg"
  },
  {
    id: "arupadaiveedu-murugan",
    title: "Arupadaiveedu Murugan Temple Tour",
    tag: "Religious",
    rating: 5.0,
    duration: "6 Days / 5 Nights",
    vehicle: "Luxury Tempo Traveller",
    region: "Spiritual",
    tourType: "Luxury Cab",
    highlights: [
      "Visit All 6 Sacred Abodes",
      "VIP Archana & Pooja Assistance",
      "Premium Chaperoned Travel"
    ],
    description: "An executive group pilgrimage covering all six holy hill abodes of Lord Murugan across Tamil Nadu (Palani, Swamimalai, Thiruthani, Pazhamudircholai, Thiruparankundram, Thiruchendur).",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_5_arupadaiveedu_t3cyhi.jpg"
  }];

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
    answer: "You can book directly via our website by sending an enquiry, or call/WhatsApp our 24/7 concierge team. We will tailor the package and cab to match your specifications."
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
    answer: "Yes, we offer premium airport transfers in our luxury cab for all major airports across Tamil Nadu, Kerala, and Bengaluru (including Chennai, Coimbatore, Cochin, and Bangalore airports)."
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
    title: "Tamil Nadu Heritage & Pilgrimage",
    count: "48 TOURS",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg",
    cols: "md:col-span-1"
  },
  {
    id: 2,
    title: "Kerala Backwaters & Hills",
    count: "35 TOURS",
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783185825/imgi_7_vibrant-kerala-tour-packages_whrahw.jpg",
    cols: "md:col-span-1"
  },
  {
    id: 3,
    title: "Bengaluru City & Weekend Escapes",
    count: "12 TOURS",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600",
    cols: "md:col-span-1"
  }
];

export const CAB_EXTENDED = [
  {
    id: "hatchback",
    name: "Maruti Swift / Indica",
    category: "Hatchback",
    tag: "Economy Hatchback",
    seats: "4+1 Seats",
    ac: "Standard AC",
    bags: "1 Med Bag",
    extra: "Budget Friendly",
    pills: ["AC / Heater", "Experienced Driver"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246343/imgi_2_hatchback_zj9cdb.jpg"
  },
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Sedan",
    tag: "Comfort Sedan",
    seats: "4+1 Seats",
    ac: "High Efficiency AC",
    bags: "2 Bags",
    extra: "GPS Tracking",
    pills: ["Uniformed Driver", "City Specialist"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_3_sedan_qkmju5.jpg"
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Sedan",
    tag: "Premium Sedan",
    seats: "4+1 Seats",
    ac: "High Efficiency AC",
    bags: "2 Large Bags",
    extra: "GPS Tracking",
    pills: ["Spacious Boot", "Top Rated Chauffeur"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_4_etios_xoehkl.jpg"
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner / SUV",
    category: "SUV",
    tag: "Luxury SUV",
    seats: "6+1 Seats",
    ac: "Dual Zone AC",
    bags: "3 Large Bags",
    extra: "Premium Suspension",
    pills: ["Uniformed Driver", "All-Terrain Capability"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_5_suv_t9qzwz.jpg"
  },
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Premium MUV",
    tag: "Premium MUV",
    seats: "7+1 Seats",
    ac: "Climate Control",
    bags: "4 Large Bags",
    extra: "Ambient Lighting",
    pills: ["Premium Captain Seats", "Professional Chauffeur"],
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_6_innova_ooa4b8.jpg"
  },
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
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246345/imgi_7_crysta_vvogcu.jpg"
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
    image: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246345/imgi_9_tempo_obexg0.jpg"
  }
];

export const GALLERY_EXTENDED = [
  {
    id: 1,
    title: "RIR Tours Premium Banner",
    category: "Cab",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246359/imgi_33_tours-bnr_xpvnob.jpg"
  },
  {
    id: 2,
    title: "Serene Mountain Road Drive",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246361/Desktop_wallpaper_-_Serene_mountain_road_xmpyv4.jpg"
  },
  {
    id: 3,
    title: "Cherrapunji Meghalaya Tour",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246360/imgi_77_meghalaya-tour-packag-cherrapunji-aspire-holidays-chennai_gv1sji.webp"
  },
  {
    id: 4,
    title: "Sunset Road Trip Gallery",
    category: "Cab",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246359/imgi_61_home_gallery2_yg9c7i.webp"
  },
  {
    id: 5,
    title: "Domestic Tour Highlights",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246357/imgi_32_domestic_k4q21e.webp"
  },
  {
    id: 6,
    title: "Starry Night Scenic Drive",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246358/imgi_17_1752825137530-275145032-Tuscan_Nightscape_Under_Starry_Skies_knhcro.webp"
  },
  {
    id: 7,
    title: "Wayanad Kerala Green Hills",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_31_wayanad_pnyroq.jpg"
  },
  {
    id: 8,
    title: "Trivandrum Padmanabhaswamy Temple",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_28_trivandrum_alfyde.jpg"
  },
  {
    id: 9,
    title: "Yercaud Emerald Lake",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_30_yercaud_atq9eq.jpg"
  },
  {
    id: 10,
    title: "Valparai Misty Tea Estates",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_29_valparai_agdcal.jpg"
  },
  {
    id: 11,
    title: "Trichy Rockfort Temple",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_27_trichy_uxa0hr.jpg"
  },
  {
    id: 12,
    title: "Thiruchendur Sea Temple",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_25_thiruchendur_fxugle.jpg"
  },
  {
    id: 13,
    title: "Thekkady Periyar Wildlife",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_24_thekkady_s6nd7c.jpg"
  },
  {
    id: 14,
    title: "Rameshwaram Pamban Bridge",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_23_rameshwaram_bv5odj.jpg"
  },
  {
    id: 15,
    title: "Ooty Nilgiri Hills",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_22_ooty_mwiwte.jpg"
  },
  {
    id: 16,
    title: "Courtallam Five Falls",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_13_courtallam_uehx2p.jpg"
  },
  {
    id: 17,
    title: "Kumarakom Backwaters",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_17_Kumarakom_p0hswh.jpg"
  },
  {
    id: 18,
    title: "Madurai Meenakshi Temple",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg"
  },
  {
    id: 19,
    title: "Munnar Tea Plantations",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_19_Munnar_zpepqe.jpg"
  },
  {
    id: 20,
    title: "Kanyakumari Sunset Point",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_14_kanyakumari_csetx3.jpg"
  },
  {
    id: 21,
    title: "Kotagiri Nilgiri Panorama",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_16_kotagiri_mmkg42.jpg"
  },
  {
    id: 22,
    title: "Arupadaiveedu Murugan Temple",
    category: "Spiritual",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_5_arupadaiveedu_t3cyhi.jpg"
  },
  {
    id: 23,
    title: "Kodaikanal Misty Peaks",
    category: "Destinations",
    url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg"
  }
];
