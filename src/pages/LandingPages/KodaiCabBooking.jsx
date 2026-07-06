import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'How do I book a cab in Kodaikanal?',
    answer: 'Booking a cab in Kodaikanal with RIR Tours is simple. You can book through our website enquiry form, WhatsApp us at +91 93425 53805, or call us directly. We confirm your booking within 30 minutes with vehicle details, driver information, and transparent pricing. No advance payment required for most bookings.',
  },
  {
    question: 'What types of cabs are available for booking in Kodaikanal?',
    answer: 'RIR Tours offers a range of well-maintained vehicles for Kodaikanal cab booking: Toyota Etios (4+1 seater, ideal for couples and small families), Toyota Innova / Innova Crysta (7+1 seater, perfect for families and groups), Toyota Fortuner (luxury SUV for premium travel), and Tempo Traveller (12-17 seater for large groups). All vehicles feature AC, GPS tracking, and are driven by experienced hill-road specialists.',
  },
  {
    question: 'What is the cost of cab booking in Kodaikanal?',
    answer: 'Kodaikanal cab booking rates vary based on the vehicle type and tour selected. Our local sightseeing tours are competitively priced, and outstation trips are charged per kilometre with transparent billing. Contact us for exact pricing tailored to your itinerary — we guarantee the best rates among all Kodaikanal cab services.',
  },
  {
    question: 'Can I book a cab for multiple days in Kodaikanal?',
    answer: 'Yes, RIR Tours offers multi-day cab booking in Kodaikanal. Whether you need a cab for 2 days, 3 days, or an entire week, we provide dedicated vehicle and driver service throughout your stay. Multi-day bookings often come with discounted per-day rates. The same driver stays with you for the entire trip, ensuring familiarity and comfort.',
  },
  {
    question: 'Do you provide airport and railway station pickup for Kodaikanal?',
    answer: 'Yes, we provide pickup and drop services from Madurai Airport (IXM), Kodai Road Railway Station (KQN), Dindigul Junction, and all major bus stands. Our drivers will be waiting at the arrival point with a name board. We also offer one-way drop services from Kodaikanal to Madurai, Chennai, Coimbatore, and Bangalore.',
  },
  {
    question: 'Is the driver included in the cab booking price?',
    answer: 'Yes, all our Kodaikanal cab bookings include a professional, experienced driver. Our drivers are local hill-road experts who know every route, sightseeing spot, and safe parking area in Kodaikanal. Driver allowance, fuel, and basic parking charges are included in the quoted price.',
  },
  {
    question: 'Can I book a cab for a one-way trip to or from Kodaikanal?',
    answer: 'Absolutely. RIR Tours offers one-way cab booking to and from Kodaikanal. Popular one-way routes include Madurai to Kodaikanal, Kodaikanal to Madurai Airport, Kodaikanal to Coimbatore, and Kodaikanal to Chennai. One-way pricing is calculated at a per-kilometre rate with no return charges.',
  },
];

export default function KodaiCabBooking() {
  const sections = [
    {
      title: 'Reliable Kodaikanal Cab Booking Service by RIR Tours',
      content: (
        <>
          <p>
            Need a <strong>cab in Kodaikanal</strong>? RIR Tours and Travels provides the most reliable and affordable <strong>Kodaikanal cab booking</strong> service for tourists, families, honeymoon couples, and business travellers. As the trusted <Link to="/kodaikanal-tour-operator" className="text-primary font-semibold hover:underline">tour operator in Kodaikanal</Link>, we offer a cab of well-maintained vehicles ranging from budget-friendly sedans to premium SUVs and spacious tempo travellers.
          </p>
          <p>
            Whether you need a cab for <Link to="/kodaikanal-sightseeing" className="text-primary font-semibold hover:underline">Kodaikanal sightseeing</Link>, airport transfers, railway station pickups, or outstation travel, our Kodaikanal cab service is available 24/7 with instant booking confirmation. Our experienced drivers are local hill-road specialists who know every curve, shortcut, and scenic viewpoint in and around Kodaikanal, ensuring you a safe and enjoyable journey.
          </p>
          <p>
            With transparent pricing, no hidden charges, and real-time vehicle tracking, RIR Tours has earned the trust of over 10,000 satisfied customers. Book your Kodaikanal cab today and experience the difference between a regular taxi and a professionally managed travel service.
          </p>
        </>
      ),
    },
    {
      title: 'Our Kodaikanal Cab Cab',
      content: (
        <>
          <p>
            RIR Tours maintains a diverse cab of vehicles to cater to every travel requirement in Kodaikanal. Each vehicle undergoes regular mechanical servicing, safety inspections, and interior sanitization to ensure maximum comfort and reliability on Kodaikanal's challenging mountain roads.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Toyota Etios – Comfort Sedan</h3>
          <p>
            The Toyota Etios is our most popular choice for couples and small families visiting Kodaikanal. With comfortable seating for 4 passengers, high-efficiency AC that performs well at altitude, and a spacious boot for luggage, the Etios delivers excellent value for money. Ideal for local sightseeing tours around Kodaikanal Lake, Coaker's Walk, and Bryant Park.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Toyota Innova / Innova Crysta – Premium MUV</h3>
          <p>
            For families and groups of up to 7 passengers, the Innova and Innova Crysta offer spacious interiors with captain seats, climate control AC, and ample luggage capacity. The Innova is perfect for full-day sightseeing tours covering Pillar Rocks, Green Valley View, Dolphin's Nose, and Berijam Lake, where the extra space makes a real difference on long mountain drives.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Toyota Fortuner – Luxury SUV</h3>
          <p>
            Our premium offering, the Toyota Fortuner delivers a luxury cab experience in Kodaikanal. With powerful 4WD capability, dual-zone AC, premium leather interiors, and superior suspension, the Fortuner handles Kodaikanal's steep gradients and winding roads with effortless comfort. Recommended for honeymoon couples and VIP travellers seeking a premium experience.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Tempo Traveller – Group Transport</h3>
          <p>
            Planning a group trip to Kodaikanal? Our Tempo Travellers accommodate 12 to 17 passengers with individual reclining seats, roof-mounted AC, and entertainment systems. Popular among corporate groups, college excursions, and large family gatherings visiting multiple sightseeing spots like Pine Forest, Mannavanur, and Poombarai Village.
          </p>
        </>
      ),
    },
    {
      title: 'Kodaikanal Cab Booking for Every Occasion',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Local Sightseeing Cab</h3>
          <p>
            Book a cab for our curated <Link to="/kodaikanal-tour-packages" className="text-primary font-semibold hover:underline">Kodaikanal tour packages</Link> — Valley Tour, City Tour, Wild Tour, Trekking Tour, and Village Tour. Each tour covers the most iconic attractions including Kodaikanal Lake, Pillar Rocks, Coaker's Walk, Dolphin's Nose, Berijam Lake, and Mannavanur. Our drivers double as informal guides, sharing local knowledge and history at every stop.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Airport and Railway Station Transfer</h3>
          <p>
            We provide seamless pickup and drop services from Madurai Airport (IXM), Kodai Road Railway Station (KQN), Dindigul Junction, and Palani. Our driver will be waiting at the arrival point with a name board, ready to begin your scenic 3-hour drive up to Kodaikanal through the famous ghat road with its 14 hairpin bends.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Outstation Cab from Kodaikanal</h3>
          <p>
            Planning to travel beyond Kodaikanal? We offer outstation cab services from Kodaikanal to Madurai, Munnar, Ooty, Coimbatore, Chennai, Bangalore, Rameshwaram, and other popular destinations. Both one-way and round-trip options are available with competitive per-kilometre pricing.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Honeymoon Cab Packages</h3>
          <p>
            Newly married couples visiting Kodaikanal deserve special attention. Our honeymoon cab packages include premium vehicles, flexible timings, romantic route suggestions (sunset at Coaker's Walk, private boating at Kodaikanal Lake, secluded Pine Forest walks), and a courteous driver who ensures your privacy while being available whenever needed.
          </p>
        </>
      ),
    },
    {
      title: 'Why Book Your Kodaikanal Cab with RIR Tours?',
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Experienced Hill-Road Drivers:</strong> All our drivers are trained professionals with years of experience navigating Kodaikanal's steep, winding mountain roads. Safety is our top priority.</li>
            <li><strong>24/7 Availability:</strong> Whether you need an early morning airport pickup or a late-night drop, our cab service operates round the clock in Kodaikanal.</li>
            <li><strong>Transparent Billing:</strong> No surge pricing, no hidden fees. We provide a detailed quote before your trip with all charges clearly listed — fuel, driver allowance, parking, and tolls included.</li>
            <li><strong>Instant Confirmation:</strong> Book via WhatsApp, phone, or our website and receive instant confirmation with driver details, vehicle number, and pickup time.</li>
            <li><strong>GPS-Tracked Vehicles:</strong> All our cabs in Kodaikanal are equipped with GPS tracking for real-time monitoring and enhanced passenger safety.</li>
            <li><strong>Clean and Sanitized:</strong> Every vehicle is thoroughly cleaned and sanitized before each trip, with sanitizers and tissues provided for passenger comfort.</li>
            <li><strong>Flexible Itineraries:</strong> Unlike fixed-route taxis, our cab service lets you customize your Kodaikanal sightseeing itinerary, spend more time at your favourite spots, and add extra stops as you wish.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal Cab Booking – Best Cab Service in Kodaikanal',
        description: 'Book a cab in Kodaikanal with RIR Tours. Etios, Innova, Fortuner & Tempo Traveller available for sightseeing, airport transfer & outstation trips. Call +91 93425 53805.',
        canonical: '/kodaikanal-cab-booking',
        ogImage: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_4_etios_xoehkl.jpg',
      }}
      hero={{
        tagline: 'Kodaikanal Cab Booking',
        heading: 'Book Your Kodaikanal Cab – Reliable, Safe & Affordable',
        subHeading: 'Choose from Etios, Innova, Fortuner, and Tempo Traveller. Professional drivers, 24/7 availability, and transparent pricing for every trip in Kodaikanal.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_4_etios_xoehkl.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Cab Booking', path: '/kodaikanal-cab-booking' },
      ]}
      serviceName="Kodaikanal Cab Booking"
      serviceDesc="Professional cab booking service in Kodaikanal with a range of vehicles including Etios, Innova, Fortuner, and Tempo Traveller for sightseeing, airport transfers, and outstation travel."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
