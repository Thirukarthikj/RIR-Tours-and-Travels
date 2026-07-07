import React, { useState, useEffect } from 'react';
import SEOLandingLayout from './SEOLandingLayout';
import { RiStarFill, RiGroupLine, RiHotelBedLine, RiWifiLine, RiParkingBoxLine, RiGobletLine, RiRestaurantLine, RiMapPin2Line, RiTimeLine, RiCheckLine, RiCompass3Line, RiRoadsterLine, RiLandscapeLine } from 'react-icons/ri';
import Button from '../../components/common/Button';
import EnquiryModal from '../../components/shared/EnquiryModal';
import { motion, AnimatePresence } from 'framer-motion';
import { getDocuments } from '../../services/firebase/firestore';

const SEED_STAYS_DATA = [
  {
    tag: 'Cottage',
    rating: 4.9,
    title: 'Hillside Cottage',
    desc: 'A cozy cottage perched on the hillside with panoramic views of the valley. Perfect for families seeking tranquility and natural...',
    guests: 4,
    beds: 2,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395493/imgi_21_main-building-exterior-cHCpu93u_cvhbla.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiParkingBoxLine, label: 'Parking' },
      { icon: RiGobletLine, label: 'Mini Bar' },
      { label: '+3 more' }
    ]
  },
  {
    tag: 'Villa',
    rating: 4.8,
    title: 'Lake View Villa',
    desc: 'A luxurious villa overlooking the serene Kodaikanal lake. Features elegant interiors, spacious rooms, and premium...',
    guests: 6,
    beds: 3,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395491/imgi_3_stone-cottage-exterior-DB7CjBhG_uqgaro.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiParkingBoxLine, label: 'Parking' },
      { icon: RiRestaurantLine, label: 'Full Kitchen' },
      { label: '+3 more' }
    ]
  },
  {
    tag: 'Room',
    rating: 4.7,
    title: 'Forest Retreat Room',
    desc: 'A peaceful room nestled in the forest, offering the perfect escape for couples. Wake up to birdsong and misty mornings.',
    guests: 2,
    beds: 1,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395490/imgi_6_cottage-exterior-patio-Bj1q3Muc_fiolw3.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiRestaurantLine, label: 'Kitchenette' },
      { label: 'Hot Water' }
    ]
  },
  {
    tag: 'Suite',
    rating: 4.9,
    title: 'Mountain Peak Suite',
    desc: 'An elegant suite at the highest point of our property, offering unobstructed views of the Western Ghats. Luxury meets...',
    guests: 3,
    beds: 1,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395489/imgi_2_balcony-valley-view-DYND3t_I_trk3o8.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiParkingBoxLine, label: 'Parking' },
      { icon: RiGobletLine, label: 'Mini Bar' },
      { label: '+3 more' }
    ]
  },
  {
    tag: 'Bungalow',
    rating: 4.6,
    title: 'Garden Bungalow',
    desc: 'A spacious bungalow surrounded by beautiful gardens. Ideal for large families or groups looking for a home-away from home...',
    guests: 8,
    beds: 4,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395489/imgi_6_wide-balcony-valley-view-CgcFhm0k_uuhvat.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiParkingBoxLine, label: 'Parking' },
      { icon: RiRestaurantLine, label: 'Full Kitchen' },
      { label: '+3 more' }
    ]
  },
  {
    tag: 'Studio',
    rating: 4.5,
    title: 'Cozy Studio',
    desc: 'A budget-friendly studio apartment perfect for solo travelers or couples. Compact yet comfortable with all essential amenities.',
    guests: 2,
    beds: 1,
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783395489/imgi_15_balcony-rooftop-valley-view-B_M6Itlg_nflbet.jpg',
    amenities: [
      { icon: RiWifiLine, label: 'Free WiFi' },
      { icon: RiRestaurantLine, label: 'Kitchenette' },
      { label: 'Hot Water' }
    ]
  }
];

const SEED_JEEP_SAFARIS = [
  {
    title: 'Jeep Safari 1',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396004/imgi_5_safari-jungle_nkyuqq.png',
    spots: ['Shooting spot view', 'Palani view point', 'Falls', 'Mehindi Circle', 'Falls view Point', 'River Cross'],
  },
  {
    title: 'Jeep Safari 2',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396003/imgi_7_off-road-jeep-safari-in-kodaikanal_sbo2ae.webp',
    spots: ['Offroad', 'Pepper Falls', 'Skating Falls', 'Mountain View', 'Sera Cafe'],
  },
  {
    title: 'Jeep Safari 3',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396001/imgi_8_jeep-safari-in-kodaikanal_witqyd.jpg',
    spots: ['Deep Jungle', 'Lake View', 'Echo Point', 'Silent Valley', 'Caps Valley'],
  },
  {
    title: 'Jeep Safari 4',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396002/imgi_6_top-5-hidden-gems-in-kodaikanal_fkcs10.webp',
    spots: ['Hidden Waterfalls', 'Mist Valley', 'Pine Forest', 'Moir Point', 'Pillar Rocks'],
  },
  {
    title: 'Jeep Safari 5',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396001/imgi_10_banner_fqurqj.jpg',
    spots: ['Sunrise Point', 'Village View', 'Trekking Trail', 'Nature Walk', 'Mountain Peaks'],
  },
  {
    title: 'Jeep Safari 6',
    subtitle: 'Max 6',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783396004/imgi_4_safari-trekking_u2yyil.png',
    spots: ['Wilderness Trek', 'Bird Watching', 'Photography Spots', 'Campfire Site', 'Forest Cave'],
  }
];

const SEED_DESTINATION_TOURS = [
  {
    title: 'Valley Tour',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
    spots: ['1. Rose Garden', '2. Observatory telescope', '3. Moir point', '4. Pine forest', '5. Devils kitchen', '6. Pillar rocks', '7. Golf course', '8. Green valley view', '9. Upper lake view', '10. Pambar falls', '11. Kodaikanal Lake (star lake)', '12. Byrant park'],
    footerText: 'Drop for Lunch and drop at property'
  },
  {
    title: 'Village Tour',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg',
    spots: ['1. Observatory pine forest', '2. Poombarai village view', '3. Poombarai village', '4. Mahalakshmi temple', '5. Kulanthi velappar temple', '6. Palani view', '7. Mannavanur sheep farm', '8. Mannavanur Lake'],
    footerText: 'Drop for Lunch and drop at property'
  },
  {
    title: 'Trekking Tour',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783185825/imgi_7_vibrant-kerala-tour-packages_whrahw.jpg',
    spots: ['1. La saleth church', '2. Vattakanal falls', '3. Pambar falls', '4. Lion cave', '5. Mountain beauty', '6. Dolphin nose', '7. Eco rock', '8. 500 years old tree'],
    footerText: 'Drop for Lunch and drop at property'
  },
  {
    title: 'Berijam Tour',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
    spots: ['1. Silent valley view', '2. Fire tower', '3. Berijam lake view', '4. Caps valley view', '5. Herbal Forest', '6. Berijam lake', '7. Boating'],
    footerText: 'Drop for Lunch and drop at property'
  }
];

const SEED_TOUR_PACKAGES = [
  {
    badge: 'POPULAR',
    title: 'Couple Package 1',
    duration: '3 Days / 2 Nights',
    capacity: 'Max 2',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783403984/imgi_21_jw_sig_cache_943205497a_kodai-resort-kodaikanal-hotel-tour-package-from-madurai_qkiye3.jpg',
    desc: 'Experience romance in our stunning A-frame or Glass house stays with complimentary food, campfire, and a special couple photoshoot.',
    features: [
      'A-frame or Glass house stays',
      'Stay (complimentary food & campfire)',
      'Couple Photoshoot',
      'Jeep safari',
      'Sightseeing',
      'Mannavanur & Poombarai'
    ]
  },
  {
    badge: 'POPULAR',
    title: 'Couple Package 2',
    duration: '3 Days / 2 Nights',
    capacity: 'Max 2',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783403984/imgi_22_jw_sig_cache_943205497a_kodai-resort-kodaikanal-hotel-tour-package-with-campfire_xpbb1d.jpg',
    desc: 'A romantic getaway with comfortable room or cottage accommodation, complete with photoshoot and adventure activities.',
    features: [
      'Room or Cottage Stay',
      'Stay (complimentary food & campfire)',
      'Couple Photoshoot',
      'Jeep safari',
      'Sightseeing',
      'Mannavanur & Poombarai'
    ]
  },
  {
    title: 'Family Package',
    duration: '3 Days / 2 Nights',
    capacity: 'Min 4',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783403982/imgi_20_jw_sig_cache_943205497a_kodai-resort-kodaikanal-hotel-tour-package-from-hyderabad_x5yife.jpg',
    desc: 'The perfect family getaway with comfortable stays, exciting activities, and memorable experiences for everyone.',
    features: [
      'Family Suite or Villa Stay',
      'Stay (complimentary food & campfire)',
      'Group Activities',
      'Jeep safari',
      'Sightseeing',
      'Kids Play Area Access'
    ]
  },
  {
    title: 'Namma Pasanga Package',
    duration: '3 Days / 2 Nights',
    capacity: 'Min 4',
    image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
    desc: 'An adventure-packed package designed for groups of friends looking for thrills and unforgettable memories in the hills.',
    features: [
      'Dormitory or Tent Stay',
      'Stay (complimentary food & campfire)',
      'Trekking & Adventure',
      'Jeep safari',
      'Night Safari',
      'BBQ Setup'
    ]
  }
];

export default function KodaiTourPackages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [activeTab, setActiveTab] = useState('packages');
  const [staysData, setStaysData] = useState([]);
  const [jeepSafaris, setJeepSafaris] = useState([]);
  const [destinationTours, setDestinationTours] = useState([]);
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stays, safaris, tours, packages] = await Promise.all([
          getDocuments('kodai_stays', '', SEED_STAYS_DATA),
          getDocuments('kodai_safaris', '', SEED_JEEP_SAFARIS),
          getDocuments('kodai_sightseeing', '', SEED_DESTINATION_TOURS),
          getDocuments('kodai_tours', '', SEED_TOUR_PACKAGES)
        ]);
        setStaysData(stays || []);
        setJeepSafaris(safaris || []);
        setDestinationTours(tours || []);
        setTourPackages(packages || []);
      } catch (err) {
        console.error("Error fetching Kodai content:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const tabs = [
    { id: 'packages', label: 'Tour Packages', icon: RiCompass3Line },
    { id: 'safari', label: 'Jeep Safari', icon: RiRoadsterLine },
    { id: 'accommodation', label: 'Accommodation', icon: RiHotelBedLine },
    { id: 'sightseeing', label: 'Sightseeing', icon: RiLandscapeLine }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'packages':
        if (loading) return <div className="py-20 text-center"><div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div><p className="text-gray-500 font-semibold text-sm">Loading packages...</p></div>;
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pt-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">All-Inclusive</span>
              <h3 className="text-3xl md:text-4xl font-display text-primary">Our Tour Packages</h3>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Carefully curated experiences that bundle the best of Kodaikanal into an unforgettable trip.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(tourPackages || []).map((pkg, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.06)] border border-gray-100 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-8px_rgba(0,33,64,0.12)]">
                  <div className="relative w-full h-64 overflow-hidden rounded-t-2xl shrink-0">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    {pkg.badge && (
                      <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold font-sans tracking-widest px-3 py-1.5 shadow-sm rounded-sm">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between w-full">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{pkg.title}</h4>
                      <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-4">
                        <span className="flex items-center gap-1.5"><RiTimeLine className="text-gray-400" /> {pkg.duration}</span>
                        <span className="flex items-center gap-1.5"><RiGroupLine className="text-gray-400" /> {pkg.capacity}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">{pkg.desc}</p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-xs text-gray-700 mb-6">
                        {pkg.features?.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <RiCheckLine className="text-gold shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-5">
                      <Button onClick={() => { setModalData({ title: pkg.title + ' (Package)' }); setIsModalOpen(true); }} variant="secondary" className="w-full py-3 text-sm font-semibold rounded-md">
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'safari':
        if (loading) return <div className="py-20 text-center"><div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div><p className="text-gray-500 font-semibold text-sm">Loading safaris...</p></div>;
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pt-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">Off-Road</span>
              <h3 className="text-3xl md:text-4xl font-display text-primary">Choose Your Adventure</h3>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Experience the raw beauty of Kodaikanal's untouched landscapes in our specialized off-road vehicles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(jeepSafaris || []).map((safari, idx) => (
                <div key={idx} className="bg-white shadow-[0_4px_25px_-5px_rgba(0,33,64,0.06)] border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_-8px_rgba(0,33,64,0.12)] rounded-2xl">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img src={safari.image} alt={safari.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <h4 className="text-2xl font-display font-bold mb-1">{safari.title}</h4>
                      <p className="text-sm flex items-center gap-1.5"><RiGroupLine /> {safari.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="mb-6">
                      <h5 className="font-bold text-gray-800 mb-4 text-sm">Spots Covered:</h5>
                      <ul className="grid grid-cols-1 gap-y-3 gap-x-4 text-sm text-gray-700">
                        {safari.spots?.map((spot, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <RiMapPin2Line className="text-gold shrink-0 mt-0.5" />
                            <span className="leading-snug">{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 mt-auto">
                      <Button onClick={() => { setModalData({ title: safari.title + ' (Jeep Safari)' }); setIsModalOpen(true); }} variant="secondary" className="w-full py-2.5 text-xs font-semibold rounded-md">
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'accommodation':
        if (loading) return <div className="py-20 text-center"><div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div><p className="text-gray-500 font-semibold text-sm">Loading accommodations...</p></div>;
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pt-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">Stays</span>
              <h3 className="text-3xl md:text-4xl font-display text-primary">Available Accommodations</h3>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Relax and unwind in our hand-picked properties designed for absolute comfort.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(staysData || []).map((stay, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,33,64,0.06)] border border-gray-100 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-8px_rgba(0,33,64,0.12)]">
                  <div className="relative h-64 bg-slate-50 overflow-hidden">
                    <img src={stay.image} alt={stay.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold font-sans tracking-widest px-2.5 py-1.5 uppercase shadow-sm rounded-md">
                      {stay.tag}
                    </span>
                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-2.5 py-1 flex items-center shadow-sm rounded-md">
                      <RiStarFill className="text-[#EAB308] mr-1" /> {stay.rating}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display text-primary mb-3 leading-tight group-hover:text-primary-light transition-colors">{stay.title}</h4>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2 mb-4">
                        {stay.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-5 text-xs font-sans font-medium text-gray-600">
                        <span className="flex items-center gap-1.5 mr-2">
                          <RiGroupLine className="text-gray-400 text-sm" /> {stay.guests} guests
                        </span>
                        <span className="flex items-center gap-1.5">
                          <RiHotelBedLine className="text-gray-400 text-sm" /> {stay.beds} bed
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {stay.amenities?.map((amenity, i) => (
                          <span key={i} className="bg-slate-50 border border-slate-100 px-2 py-1 rounded text-[10px] text-gray-500 font-medium flex items-center gap-1">
                            {amenity.icon && <amenity.icon className="text-gray-400" />} {amenity.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 mt-auto">
                      <Button onClick={() => { setModalData({ title: stay.title + ' (Accommodation)' }); setIsModalOpen(true); }} variant="secondary" className="w-full py-2.5 text-xs font-semibold rounded-md">
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'sightseeing':
        if (loading) return <div className="py-20 text-center"><div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div><p className="text-gray-500 font-semibold text-sm">Loading sightseeing...</p></div>;
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="pt-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">Sightseeing</span>
              <h3 className="text-3xl md:text-4xl font-display text-primary">Explore Kodaikanal's Best Spots</h3>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Discover hidden gems and popular viewpoints on our curated guided tours.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(destinationTours || []).map((tour, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.06)] border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_-8px_rgba(0,33,64,0.12)]">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <h4 className="text-2xl font-display font-bold">{tour.title}</h4>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="mb-6">
                      <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-700">
                        {tour.spots?.map((spot, i) => (
                          <li key={i} className="flex items-start">
                             <span className="leading-snug">{spot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 mt-auto">
                      <div className="text-gold text-sm font-medium mb-4 text-center">{tour.footerText}</div>
                      <Button onClick={() => { setModalData({ title: tour.title + ' (Destination Tour)' }); setIsModalOpen(true); }} variant="secondary" className="w-full py-2.5 text-xs font-semibold rounded-md">
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEOLandingLayout
        seo={{
          title: 'Kodaikanal Tour Packages - Room, Jeep Safari & Accommodation',
          description: 'Explore Kodaikanal with our exciting room packages, jeep safaris, and comfortable accommodations.',
          canonical: '/kodaikanal-tour-packages',
          ogImage: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
        }}
        hero={{
          tagline: 'Kodaikanal',
          heading: 'Kodaikanal Tour Packages',
          subHeading: 'Exciting room packages, jeep safaris, and comfortable accommodations.',
          image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
        }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Packages', path: '/packages' },
          { name: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
        ]}
        serviceName="Kodaikanal Tour Packages"
        serviceDesc="Kodaikanal tour packages including room packages, jeep safari, and accommodation."
        sections={[]} // We are replacing sections with custom children layout
        faqs={[]}
        relatedLinks={[]}
      >
        {/* Custom Tabbed UI for Comfort */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-2 md:p-4 mb-12 flex flex-col md:flex-row gap-2 sticky top-24 z-30 backdrop-blur-xl bg-white/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-transparent text-gray-500 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <Icon className="text-lg" />
                {tab.label}
              </button>
            );
          })}
        </div>
        
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </SEOLandingLayout>

      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageData={modalData}
      />
    </>
  );
}
