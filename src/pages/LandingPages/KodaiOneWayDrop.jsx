import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Cab Booking', path: '/kodaikanal-cab-booking' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'What is one way drop taxi service from Kodaikanal?',
    answer: 'One way drop taxi service means you hire a taxi for a single journey from Kodaikanal to your destination (or vice versa) without paying for the return trip. RIR Tours offers affordable one-way drop taxis from Kodaikanal to Madurai, Coimbatore, Chennai, Bangalore, and other cities. You only pay for the distance travelled — no return fare.',
  },
  {
    question: 'How much does a one way taxi from Kodaikanal to Madurai cost?',
    answer: 'The one-way taxi fare from Kodaikanal to Madurai depends on the vehicle type. Sedan (Etios) is the most affordable option, while Innova and Fortuner are available at premium rates. The journey covers approximately 120 km and takes 3-3.5 hours. Contact RIR Tours at +91 93425 53805 for exact pricing with no hidden charges.',
  },
  {
    question: 'Can I book a one way drop from Madurai Airport to Kodaikanal?',
    answer: 'Yes, we provide one-way drop taxi service from Madurai Airport (IXM) to Kodaikanal. Our driver will meet you at the airport arrival area with a name board and drive you comfortably to your hotel in Kodaikanal. The scenic 120-km journey passes through Batlagundu and the famous 14 hairpin bends of the Kodaikanal ghat road.',
  },
  {
    question: 'What vehicles are available for one way drop from Kodaikanal?',
    answer: 'RIR Tours offers multiple vehicle options for one-way drop service: Toyota Etios (4+1 seater sedan), Toyota Innova/Innova Crysta (7+1 seater MUV), Toyota Fortuner (luxury SUV), and Tempo Traveller (12-17 seater for groups). All vehicles are AC, well-maintained, and driven by experienced professionals.',
  },
  {
    question: 'Which cities can I get a one way drop from Kodaikanal?',
    answer: 'RIR Tours provides one-way drop taxi service from Kodaikanal to: Madurai (120 km), Madurai Airport (120 km), Coimbatore (175 km), Chennai (530 km), Bangalore (465 km), Trichy (195 km), Dindigul (100 km), Palani (65 km), Munnar (260 km), Ooty (250 km), Rameshwaram (350 km), and Kanyakumari (355 km). We also serve any custom destination in South India.',
  },
  {
    question: 'Is one way drop cheaper than round trip?',
    answer: 'Yes, one-way drop taxi is significantly more affordable than a round trip because you only pay for the distance actually travelled. There is no return fare charge. This makes it the most economical option when you need to travel from Kodaikanal to another city without a return journey. RIR Tours offers competitive one-way rates across all vehicle types.',
  },
  {
    question: 'Can I book a one way drop taxi for early morning or late night?',
    answer: 'Yes, RIR Tours provides 24/7 one-way drop taxi service from Kodaikanal. Whether you need to catch an early morning flight from Madurai Airport or have a late-night arrival at Kodai Road Railway Station, our drivers are available round the clock. We recommend booking at least 4-6 hours in advance for early morning and late-night trips.',
  },
];

export default function KodaiOneWayDrop() {
  const sections = [
    {
      title: 'Kodaikanal One Way Drop Taxi Service by RIR Tours',
      content: (
        <>
          <p>
            Need to travel from Kodaikanal to another city without paying for a return trip? RIR Tours and Travels offers the most affordable and reliable <strong>Kodaikanal one way drop</strong> taxi service to all major cities in Tamil Nadu, Kerala, and Karnataka. Our one-way taxi service is designed for travellers who need a comfortable ride from the hill station to their next destination — whether that is Madurai Airport, Chennai, Coimbatore, or Bangalore.
          </p>
          <p>
            With a <strong>one way drop from Kodaikanal</strong>, you only pay for the distance you travel. No return fare, no empty kilometre charges. Our transparent per-kilometre pricing ensures you get the best value for your money. Combined with our experienced hill-road drivers and well-maintained cab of Toyota Etios, Innova, and Fortuner vehicles, RIR Tours delivers a premium one-way taxi experience at affordable rates.
          </p>
          <p>
            Whether you are concluding your Kodaikanal vacation and heading to Madurai for your flight, or you are arriving at Madurai and need a pickup to Kodaikanal, our <strong>one way drop taxi</strong> is the smart, economical choice. Book through WhatsApp, phone, or our website — we confirm within 30 minutes.
          </p>
        </>
      ),
    },
    {
      title: 'Popular One Way Drop Routes from Kodaikanal',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Kodaikanal to Madurai (120 km – 3.5 hours)</h3>
          <p>
            The most popular one-way route. Travel from the misty hills of Kodaikanal down through the scenic ghat road with its 14 hairpin bends, passing through Batlagundu and Perumal Malai before reaching Madurai. Perfect for catching flights from <strong>Madurai Airport</strong> or connecting trains at Madurai Junction.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Kodaikanal to Coimbatore (175 km – 4.5 hours)</h3>
          <p>
            A scenic drive descending from Kodaikanal through Palani and Dharapuram to reach Coimbatore. Ideal for travellers connecting at Coimbatore International Airport (CJB) or Coimbatore Junction railway station. The route passes through the agricultural heartland of Tamil Nadu.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Kodaikanal to Chennai (530 km – 9 hours)</h3>
          <p>
            For travellers heading to Chennai, we offer comfortable one-way drop service via Salem and Villupuram on NH-44. The journey takes approximately 9 hours with breaks. Our drivers are experienced in long-distance highway driving and maintain safe speeds throughout.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Kodaikanal to Bangalore (465 km – 8 hours)</h3>
          <p>
            Travel from Kodaikanal to Bangalore via Salem and Krishnagiri on NH-44. A comfortable 8-hour journey in our AC vehicles with experienced drivers. Popular among IT professionals and business travellers returning to Bangalore after a weekend getaway in Kodaikanal.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Kodaikanal to Munnar (260 km – 7 hours)</h3>
          <p>
            Travelling from one hill station to another? Our one-way taxi from Kodaikanal to Munnar takes you through the scenic landscapes of Theni and Bodimettu. Experience two of South India's most beautiful hill stations in a single trip with RIR Tours.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Kodaikanal to Rameshwaram (350 km – 7.5 hours)</h3>
          <p>
            Combine your Kodaikanal vacation with a spiritual visit to Rameshwaram. Our one-way taxi takes you through Madurai and the iconic Pamban Bridge to reach the holy island of Rameshwaram. A perfect blend of hill station relaxation and temple pilgrimage.
          </p>
        </>
      ),
    },
    {
      title: 'One Way Drop Taxi to Kodaikanal',
      content: (
        <>
          <p>
            We also provide one-way taxi service <em>to</em> Kodaikanal from major cities. The most popular inbound routes include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong><Link to="/madurai-to-kodaikanal-taxi" className="text-primary font-semibold hover:underline">Madurai to Kodaikanal</Link>:</strong> 120 km, 3-3.5 hours. The most common arrival route with airport and railway station pickup.</li>
            <li><strong>Madurai Airport to Kodaikanal:</strong> Seamless airport pickup with name board service. Our driver will be waiting at the arrival terminal.</li>
            <li><strong>Coimbatore to Kodaikanal:</strong> 175 km, 4.5 hours via Palani. Airport and railway station pickup available.</li>
            <li><strong>Chennai to Kodaikanal:</strong> 530 km, 9 hours. Overnight travel option available with rest stops.</li>
            <li><strong>Kodai Road Station to Kodaikanal:</strong> 80 km, 2 hours. The nearest railway station with taxi pickup service.</li>
            <li><strong>Dindigul to Kodaikanal:</strong> 100 km, 2.5 hours via the scenic ghat road.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Why Choose RIR Tours for One Way Drop Taxi?',
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pay Only One Way:</strong> No return charges. You pay only for the distance actually travelled from pickup to drop-off point.</li>
            <li><strong>Experienced Hill-Road Drivers:</strong> Our drivers specialize in Kodaikanal's mountain roads and are equally skilled on highways for long-distance outstation trips.</li>
            <li><strong>Airport & Station Connectivity:</strong> Seamless pickup from Madurai Airport (IXM), Kodai Road Station (KQN), Dindigul Junction, and all major bus stands.</li>
            <li><strong>Well-Maintained Vehicles:</strong> Choose from Etios, Innova, Fortuner, or Tempo Traveller — all regularly serviced, sanitized, and equipped with AC and GPS.</li>
            <li><strong>24/7 Availability:</strong> Early morning flights? Late-night train arrivals? Our one-way taxis operate round the clock.</li>
            <li><strong>Transparent Pricing:</strong> Get an exact quote before booking. Our price includes fuel, driver charges, parking, and tolls. No surprises.</li>
            <li><strong>Instant Booking:</strong> WhatsApp, call, or online. Confirmed within 30 minutes with full driver and vehicle details.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal One Way Drop Taxi – Affordable One Way Cab Service',
        description: 'Book a one way drop taxi from Kodaikanal to Madurai, Chennai, Coimbatore & more. Affordable one way cab service with RIR Tours. Call +91 93425 53805.',
        canonical: '/kodaikanal-one-way-drop',
      }}
      hero={{
        tagline: 'Kodaikanal One Way Drop',
        heading: 'Affordable One Way Drop Taxi from Kodaikanal to Any City',
        subHeading: 'Pay only for the distance you travel. One-way taxi to Madurai, Chennai, Coimbatore, Bangalore & more. No return charges, no hidden fees.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246361/Desktop_wallpaper_-_Serene_mountain_road_xmpyv4.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
      ]}
      serviceName="Kodaikanal One Way Drop Taxi"
      serviceDesc="Affordable one-way drop taxi service from Kodaikanal to Madurai, Chennai, Coimbatore, Bangalore, and all major South Indian cities with experienced drivers."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
