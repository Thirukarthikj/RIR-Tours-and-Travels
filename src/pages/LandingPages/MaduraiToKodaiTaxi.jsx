import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Cab Booking', path: '/kodaikanal-cab-booking' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'How far is Kodaikanal from Madurai?',
    answer: 'Kodaikanal is approximately 120 km from Madurai city and Madurai Airport. The journey takes about 3 to 3.5 hours by road, passing through Batlagundu and ascending the scenic ghat road with its famous 14 hairpin bends. RIR Tours provides comfortable taxi service on this route with experienced hill-road drivers.',
  },
  {
    question: 'How much does a taxi from Madurai to Kodaikanal cost?',
    answer: 'The taxi fare from Madurai to Kodaikanal varies by vehicle type. Sedan (Toyota Etios) offers the most affordable option, while Innova and Fortuner are available at premium rates. Our pricing is transparent and includes fuel, driver charges, parking, and tolls. Contact RIR Tours at +91 93425 53805 for an exact quote.',
  },
  {
    question: 'Can I get a taxi from Madurai Airport to Kodaikanal?',
    answer: 'Yes, RIR Tours provides seamless taxi service from Madurai Airport (IXM) to Kodaikanal. Our driver will be waiting at the airport arrival area with a name board displaying your name. We track flight arrivals so even if your flight is delayed, our driver will be there when you land.',
  },
  {
    question: 'What is the best route from Madurai to Kodaikanal?',
    answer: 'The most common and scenic route from Madurai to Kodaikanal is via NH 49 through Batlagundu. After Batlagundu, the road climbs the Palani Hills through the famous ghat section with 14 hairpin bends, offering spectacular views of the valley. An alternate route goes through Dindigul. Our drivers know both routes and choose the best option based on current conditions.',
  },
  {
    question: 'Is the Madurai to Kodaikanal road safe?',
    answer: 'The Madurai to Kodaikanal road is well-maintained and safe when driven by experienced drivers. The ghat section features hairpin bends and steep gradients that require careful driving, especially during monsoon when fog and drizzle are common. RIR Tours drivers are trained hill-road specialists who navigate this route daily, ensuring a safe and comfortable journey.',
  },
  {
    question: 'Can I book a round trip taxi from Madurai to Kodaikanal?',
    answer: 'Yes, RIR Tours offers both one-way and round-trip taxi service from Madurai to Kodaikanal. For round trips, the driver stays with you in Kodaikanal for your entire trip duration, available for local sightseeing tours and any ad-hoc travel needs. Round-trip packages include multi-day rates with driver accommodation charges.',
  },
  {
    question: 'What time should I start from Madurai to reach Kodaikanal?',
    answer: 'We recommend starting from Madurai between 6:00 AM and 8:00 AM to reach Kodaikanal by mid-morning, giving you ample time for sightseeing on your arrival day. If arriving at Madurai Airport, any time of day works as our drivers are available 24/7. For the best ghat road experience with clear views, morning departures are ideal as afternoon fog can reduce visibility.',
  },
];

export default function MaduraiToKodaiTaxi() {
  const sections = [
    {
      title: 'Madurai to Kodaikanal Taxi Service – Comfortable Hill Drive with RIR Tours',
      content: (
        <>
          <p>
            Planning a trip from Madurai to Kodaikanal? RIR Tours and Travels provides the most reliable and comfortable <strong>Madurai to Kodaikanal taxi service</strong> for tourists, families, honeymoon couples, and pilgrims. As the leading <Link to="/kodaikanal-tour-operator" className="text-primary font-semibold hover:underline">tour operator in Kodaikanal</Link>, we handle hundreds of Madurai-Kodaikanal transfers every month, making us experts on this scenic hill route.
          </p>
          <p>
            The <strong>Madurai to Kodaikanal cab</strong> journey is one of South India's most scenic drives. Starting from the temple city of Madurai, the 120-km route takes you through the agricultural plains of Tamil Nadu, past the historic town of Batlagundu, and up into the Palani Hills through a breathtaking ghat road featuring 14 hairpin bends. As you ascend, the temperature drops, the vegetation changes from tropical to temperate, and you are greeted by misty clouds and cool mountain air — the signature Kodaikanal welcome.
          </p>
          <p>
            Our experienced drivers navigate this route daily. They know every curve, every viewpoint, and every safe stopping spot. Whether you are arriving at Madurai Airport, Madurai Railway Junction, or any hotel in Madurai city, our driver will pick you up right at your location and drive you to your Kodaikanal hotel door-to-door.
          </p>
        </>
      ),
    },
    {
      title: 'The Madurai to Kodaikanal Route – What to Expect',
      content: (
        <>
          <p>
            The journey from Madurai to Kodaikanal is divided into three distinct segments, each offering a unique experience:
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Segment 1: Madurai to Batlagundu (50 km – Plains)</h3>
          <p>
            The first segment takes you through the flat agricultural plains of Dindigul district. The road is a well-maintained national highway (NH 49) with smooth driving conditions. You will pass through small towns and can stop for a traditional South Indian breakfast at one of the popular roadside restaurants near Batlagundu.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Segment 2: Batlagundu to Perumal Malai (30 km – Foothills & Ghat Road)</h3>
          <p>
            After Batlagundu, the road begins its ascent into the Palani Hills. This is where the famous <strong>14 hairpin bends</strong> begin. The ghat road is a spectacular engineering feat, winding through dense vegetation with each turn revealing new panoramic views of the valley below. Our drivers slow down here to ensure both safety and a chance to enjoy the scenery.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Segment 3: Perumal Malai to Kodaikanal (40 km – Hill Plateau)</h3>
          <p>
            Once you reach the plateau, the landscape transforms into rolling hills, eucalyptus groves, and pine forests. The temperature drops noticeably, and on clear days, you can see for miles. The final stretch into Kodaikanal town passes <strong>Silver Cascade Falls</strong> — a beautiful waterfall visible right from the road, where we make a brief photo stop. You arrive in Kodaikanal refreshed and ready to explore.
          </p>
        </>
      ),
    },
    {
      title: 'Madurai Airport to Kodaikanal Taxi',
      content: (
        <>
          <p>
            <strong>Madurai Airport (IXM)</strong> is the nearest airport to Kodaikanal, located 120 km away. RIR Tours provides hassle-free <strong>Madurai Airport to Kodaikanal taxi</strong> service with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Flight Tracking:</strong> We monitor your flight arrival in real-time. Even if your flight is delayed, our driver will be waiting.</li>
            <li><strong>Airport Meet & Greet:</strong> Your driver will be at the arrival area with a name board displaying your name.</li>
            <li><strong>Direct Door-to-Door Service:</strong> From the airport terminal to your hotel lobby in Kodaikanal — no waiting, no transfers.</li>
            <li><strong>Luggage Handling:</strong> Our drivers assist with your luggage from the airport to the vehicle.</li>
            <li><strong>Scenic Commentary:</strong> Enjoy informal commentary about the region as your driver points out landmarks along the route.</li>
          </ul>
          <p className="mt-3">
            Major airlines that fly into Madurai Airport include IndiGo, SpiceJet, Air India Express, and Star Air, with connections from Chennai, Bangalore, Hyderabad, and Mumbai. After landing, the 3-hour drive to Kodaikanal is a scenic adventure in itself.
          </p>
        </>
      ),
    },
    {
      title: 'Vehicles Available for Madurai to Kodaikanal',
      content: (
        <>
          <p>Choose the perfect vehicle for your Madurai to Kodaikanal journey:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Toyota Etios (Sedan):</strong> Ideal for couples and small families (2-3 passengers). Comfortable, fuel-efficient, and great value for the hill drive.</li>
            <li><strong>Toyota Innova (MUV):</strong> Spacious 7-seater perfect for families with children. Extra luggage space and climate control AC for a comfortable 3-hour ascent.</li>
            <li><strong>Toyota Innova Crysta:</strong> Premium version with captain seats and superior comfort. Recommended for guests seeking luxury on the mountain road.</li>
            <li><strong>Toyota Fortuner (SUV):</strong> The premium choice. Powerful engine handles steep gradients effortlessly. Premium leather interiors and superior suspension make the hill climb feel smooth and luxurious.</li>
            <li><strong>Tempo Traveller:</strong> For groups of 8-17 passengers. Individual reclining seats and AC ensure comfort even on the winding ghat road.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Why Book Your Madurai to Kodaikanal Taxi with RIR Tours?',
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Daily Route Experts:</strong> Our drivers navigate the Madurai-Kodaikanal route daily. They know every hairpin bend, every safe overtaking zone, and every scenic stop.</li>
            <li><strong>Both One Way & Round Trip:</strong> Book a <Link to="/kodaikanal-one-way-drop" className="text-primary font-semibold hover:underline">one-way drop</Link> for the airport transfer, or a round trip with the driver staying in Kodaikanal for your entire vacation.</li>
            <li><strong>Continue with Sightseeing:</strong> Book the Madurai-Kodaikanal transfer and seamlessly continue with our <Link to="/kodaikanal-tour-packages" className="text-primary font-semibold hover:underline">Kodaikanal tour packages</Link>. The same driver and vehicle stay with you.</li>
            <li><strong>24/7 Availability:</strong> Early morning flights, late-night train arrivals — we are always available for your Madurai to Kodaikanal taxi needs.</li>
            <li><strong>Transparent Pricing:</strong> Fixed-rate transfers with no hidden charges. Fuel, driver bata, tolls, and parking included.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Madurai to Kodaikanal Taxi – Best Cab Service from Madurai to Kodaikanal',
        description: 'Book a taxi from Madurai to Kodaikanal with RIR Tours. Madurai Airport pickup, scenic hill drive, experienced drivers. Etios & Innova available. Call +91 93425 53805.',
        canonical: '/madurai-to-kodaikanal-taxi',
      }}
      hero={{
        tagline: 'Madurai to Kodaikanal Taxi',
        heading: 'Comfortable Taxi Service from Madurai to Kodaikanal',
        subHeading: 'Airport pickup, scenic 120-km hill drive through 14 hairpin bends, experienced local drivers. The best way to start your Kodaikanal vacation.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
      ]}
      serviceName="Madurai to Kodaikanal Taxi"
      serviceDesc="Professional taxi service from Madurai to Kodaikanal covering Madurai Airport pickup, scenic ghat road drive, and door-to-door hotel drop."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
