import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
];

const FAQS = [
  {
    question: 'What does a Kodaikanal tour operator do?',
    answer: 'A Kodaikanal tour operator like RIR Tours and Travels handles complete trip planning and execution — from cab booking and sightseeing tour itineraries to hotel recommendations, forest permit arrangements, and 24/7 travel support. We take the hassle out of planning so you can focus entirely on enjoying your Kodaikanal vacation.',
  },
  {
    question: 'Is RIR Tours a licensed tour operator in Kodaikanal?',
    answer: 'Yes, RIR Tours and Travels is a fully registered and licensed travel agency operating in Kodaikanal, Tamil Nadu. We are a GST-registered business with over 12 years of experience in South Indian tourism. We comply with all state transport regulations and maintain proper insurance coverage for all vehicles in our cab.',
  },
  {
    question: 'How is a tour operator different from a taxi service?',
    answer: 'While a taxi service simply provides a vehicle and driver, a tour operator like RIR Tours offers comprehensive travel management. This includes curated sightseeing itineraries designed by local experts, forest permit arrangements for Berijam Lake, hotel recommendations and booking assistance, multi-day package planning, group coordination, and round-the-clock customer support throughout your trip.',
  },
  {
    question: 'Can RIR Tours plan my entire Kodaikanal trip?',
    answer: 'Absolutely. As a full-service Kodaikanal tour operator, RIR Tours can plan your entire trip from start to finish. This includes airport/railway station pickup, hotel recommendations, daily sightseeing tours, restaurant suggestions, special event arrangements (birthday celebrations, anniversary surprises), forest permits, and return drop. Just tell us your dates, budget, and preferences — we handle everything.',
  },
  {
    question: 'Do you offer tour packages for honeymoon couples?',
    answer: 'Yes, we specialize in Kodaikanal honeymoon packages. Our romantic itineraries focus on serene spots like Kodaikanal Lake (private boating), Coaker\'s Walk at sunset, Pine Forest walks, and Berijam Lake. We recommend premium vehicles (Innova Crysta or Fortuner) with extra privacy, and can suggest the best romantic resorts and restaurants in Kodaikanal.',
  },
  {
    question: 'What languages do your drivers speak?',
    answer: 'Our drivers primarily speak Tamil and Hindi. Many of our regular drivers also communicate in basic English. For guests who need English-speaking drivers or guides, we can arrange the same upon request during booking. All our drivers are courteous, well-groomed, and trained in customer service.',
  },
  {
    question: 'How far in advance should I book with RIR Tours?',
    answer: 'For regular tour packages and cab bookings, we can accommodate bookings made 24-48 hours in advance. For peak season (April-June) and long weekends, we recommend booking at least 1-2 weeks in advance to ensure vehicle availability. For the Wild Tour (Berijam Lake forest permit), booking 3-4 days ahead is recommended as permits are limited daily.',
  },
  {
    question: 'Do you offer group discounts for Kodaikanal tours?',
    answer: 'Yes, RIR Tours offers group discounts for bookings of 3 or more vehicles. Corporate groups, college excursions, family reunions, and pilgrimage groups can avail special rates. We also provide dedicated trip coordinators for large groups to ensure smooth logistics and synchronized itineraries across multiple vehicles.',
  },
];

export default function KodaiTourOperator() {
  const sections = [
    {
      title: 'RIR Tours – Your Trusted Tour Operator in Kodaikanal',
      content: (
        <>
          <p>
            Looking for the <strong>best tour operator in Kodaikanal</strong>? RIR Tours and Travels has been crafting memorable Kodaikanal experiences for over 12 years. As a full-service <strong>Kodaikanal tour operator</strong>, we go beyond simple cab booking to deliver comprehensive travel management — from the moment you arrive at Madurai Airport to the time you depart from the Princess of Hill Stations.
          </p>
          <p>
            What makes a great tour operator? Local expertise, reliable vehicles, transparent pricing, and genuine care for your travel experience. At RIR Tours, our team consists of Kodaikanal locals and seasoned tourism professionals who understand every aspect of hill station travel. We know which viewpoints offer the best sunrise views, which restaurants serve authentic local cuisine, which hotels provide the best valley-facing rooms, and which forest trails are safe for families with children.
          </p>
          <p>
            Whether you are planning a romantic honeymoon, a family vacation with grandparents and children, a corporate team outing, or a solo adventure, RIR Tours designs customized itineraries that match your interests, budget, and pace. Our commitment: no cookie-cutter packages, no hidden charges, and no compromises on quality.
          </p>
        </>
      ),
    },
    {
      title: 'Complete Kodaikanal Tour Operator Services',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Curated Sightseeing Tours</h3>
          <p>
            Our five signature <Link to="/kodaikanal-sightseeing" className="text-primary font-semibold hover:underline">Kodaikanal sightseeing tours</Link> are the result of years of local expertise. Each tour is carefully designed to cover the best attractions in a logical route that minimizes backtracking and maximizes your time at each viewpoint. Valley Tour, City Tour, Wild Tour, Trekking Tour, and Village Tour — together they cover every iconic Kodaikanal destination from Kodaikanal Lake and Coaker's Walk to Berijam Lake and Mannavanur.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Cab & Cab Management</h3>
          <p>
            As the leading <Link to="/cab" className="text-primary font-semibold hover:underline">cab service in Kodaikanal</Link>, RIR Tours maintains a diverse cab of well-serviced vehicles. Toyota Etios for budget-conscious couples, Innova for comfortable family travel, Fortuner for luxury seekers, and Tempo Travellers for large groups. All vehicles undergo regular mechanical servicing, safety inspections, and interior sanitization.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Airport & Station Transfers</h3>
          <p>
            We provide seamless <Link to="/madurai-to-kodaikanal-taxi" className="text-primary font-semibold hover:underline">Madurai to Kodaikanal transfers</Link> with real-time flight tracking, airport meet-and-greet service, and comfortable hill drives through the scenic ghat road. We also serve Kodai Road Railway Station, Dindigul Junction, and Palani.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">One-Way Drop Service</h3>
          <p>
            Our <Link to="/kodaikanal-one-way-drop" className="text-primary font-semibold hover:underline">one-way drop taxi service</Link> connects Kodaikanal to all major South Indian cities — Madurai, Chennai, Coimbatore, Bangalore, Munnar, Ooty, and more. Pay only for the distance you travel with no return charges.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Forest Permit Arrangements</h3>
          <p>
            Visiting Berijam Lake and the protected forest zone requires a special permit from the Forest Department. As an established Kodaikanal tour operator, RIR Tours has a streamlined process for obtaining these permits. We handle the application, documentation, and approval so you can simply show up and enjoy the pristine wilderness.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Hotel & Restaurant Recommendations</h3>
          <p>
            While we don't directly book hotels, our years of local experience enable us to recommend the best accommodations for every budget — from budget-friendly guesthouses near Kodaikanal Lake to premium resorts with valley-facing rooms and luxury cottages with private gardens. We can also suggest restaurants serving authentic Kodaikanal cuisine, including the famous home-made chocolates and fresh eucalyptus honey.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Custom Trip Planning</h3>
          <p>
            Every traveller is different. That is why RIR Tours offers fully customized trip planning. Tell us your dates, group size, interests (nature, adventure, culture, relaxation, spirituality), and budget. Our expert planners will create a personalized Kodaikanal itinerary that fits your unique requirements perfectly.
          </p>
        </>
      ),
    },
    {
      title: 'Why Choose RIR Tours as Your Kodaikanal Tour Operator?',
      content: (
        <>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>12+ Years of Experience:</strong> Over a decade of operating tours in Kodaikanal has given us unmatched local expertise. We know every road, every viewpoint, and every hidden gem in and around Kodaikanal.</li>
            <li><strong>10,000+ Happy Customers:</strong> Our track record speaks for itself. Thousands of families, couples, and groups have trusted RIR Tours for their Kodaikanal vacations and continue to recommend us to their friends and family.</li>
            <li><strong>Local Expert Drivers:</strong> Our drivers are not just chauffeurs — they are local guides who share stories, suggest photo spots, and ensure you see the best of Kodaikanal beyond the standard tourist routes.</li>
            <li><strong>Transparent Operations:</strong> No hidden charges, no surprise fees. We provide detailed quotations before booking, and what we quote is what you pay. Our GST-registered business operates with full compliance and financial transparency.</li>
            <li><strong>24/7 Customer Support:</strong> From the moment you book until you return home, our customer support team is available around the clock via phone and WhatsApp. Any issue, any question — we respond immediately.</li>
            <li><strong>Flexible Policies:</strong> Plans change, and we understand that. Our flexible booking policies allow modifications to dates, vehicle types, and itineraries with minimal hassle. Cancellations made 48 hours in advance receive full refunds.</li>
            <li><strong>All-Weather Operations:</strong> Kodaikanal experiences varied weather — fog, rain, sunshine. Our drivers are trained to handle all weather conditions safely, and we adjust sightseeing itineraries based on daily weather to ensure you get the best experience.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Areas We Serve from Kodaikanal',
      content: (
        <>
          <p>
            As a comprehensive Kodaikanal tour operator, RIR Tours provides travel services covering:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Kodaikanal Local:</strong> All five sightseeing tours, hourly rentals, hotel-to-hotel transfers, event transportation</li>
            <li><strong>Madurai Corridor:</strong> Madurai Airport transfers, Madurai city connections, Madurai hotel pickups</li>
            <li><strong>Tamil Nadu:</strong> Chennai, Coimbatore, Trichy, Dindigul, Palani, Salem, Erode, Tirunelveli</li>
            <li><strong>Kerala:</strong> Munnar, Thekkady, Alleppey, Kochi, Trivandrum</li>
            <li><strong>Karnataka:</strong> Bangalore, Mysore</li>
            <li><strong>Pilgrimage Circuits:</strong> Palani, Rameshwaram, Madurai Meenakshi Temple, Tiruchendur</li>
            <li><strong>Hill Station Circuits:</strong> Kodaikanal + Munnar, Kodaikanal + Ooty, Kodaikanal + Valparai</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal Tour Operator – Best Travel Agency in Kodaikanal',
        description: 'RIR Tours and Travels – the best tour operator in Kodaikanal. 12+ years experience, 10,000+ happy customers. Tour packages, cab booking, sightseeing. Call +91 93425 53805.',
        canonical: '/kodaikanal-tour-operator',
      }}
      hero={{
        tagline: 'Best Tour Operator in Kodaikanal',
        heading: 'RIR Tours – Your Expert Kodaikanal Tour Operator Since 2014',
        subHeading: 'Over 12 years of crafting unforgettable Kodaikanal experiences. Expert local guides, premium cab, transparent pricing, and 24/7 support for every journey.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246359/imgi_33_tours-bnr_xpvnob.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
      ]}
      serviceName="Kodaikanal Tour Operator"
      serviceDesc="RIR Tours and Travels – Full-service tour operator in Kodaikanal offering curated sightseeing tours, cab booking, airport transfers, and customized trip planning."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
