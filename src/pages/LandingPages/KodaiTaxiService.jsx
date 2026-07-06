import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Cab Booking', path: '/kodaikanal-cab-booking' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'What is the best taxi service in Kodaikanal?',
    answer: 'RIR Tours and Travels is widely recognized as the best taxi service in Kodaikanal. With over 12 years of experience, a cab of well-maintained vehicles (Etios, Innova, Fortuner, Tempo Traveller), experienced hill-road drivers, transparent pricing, and 24/7 availability, we have served over 10,000 satisfied customers. Our drivers are local experts who ensure safe navigation on Kodaikanal\'s winding mountain roads.',
  },
  {
    question: 'How much does a taxi cost in Kodaikanal?',
    answer: 'Taxi costs in Kodaikanal depend on the vehicle type and type of trip. Local sightseeing tours are available at competitive fixed rates. Outstation trips are charged per kilometre. Airport and railway station transfers have flat-rate pricing. Contact RIR Tours for a detailed, transparent quote with no hidden charges — we guarantee the best rates for quality taxi service in Kodaikanal.',
  },
  {
    question: 'Can I hire a taxi for a full day in Kodaikanal?',
    answer: 'Yes, RIR Tours offers full-day taxi hire in Kodaikanal. A full-day booking typically covers 8 hours and 80 km of local travel, which is sufficient for any of our five sightseeing tours. Extra hours and kilometres are charged at a nominal additional rate. Full-day hire includes the vehicle, driver, fuel, parking, and tolls.',
  },
  {
    question: 'Are your taxi drivers familiar with Kodaikanal roads?',
    answer: 'Absolutely. All our taxi drivers are experienced hill-road professionals, many of whom are Kodaikanal locals. They know every route, shortcut, scenic viewpoint, and safe parking area in and around Kodaikanal. Their expertise ensures safe driving on steep gradients, sharp hairpin bends, and foggy mountain conditions that are common in Kodaikanal.',
  },
  {
    question: 'Do you provide taxi service from Kodaikanal to other cities?',
    answer: 'Yes, we provide outstation taxi service from Kodaikanal to Madurai (120 km), Coimbatore (175 km), Chennai (530 km), Bangalore (465 km), Munnar (260 km), Ooty (250 km), Rameshwaram (350 km), and other destinations. Both one-way and round-trip options are available with competitive pricing.',
  },
  {
    question: 'Is taxi service available at night in Kodaikanal?',
    answer: 'Yes, RIR Tours provides 24/7 taxi service in Kodaikanal. Whether you need an early morning departure for a sunrise viewpoint or a late-night pickup from a bus stand, our taxis are available round the clock. Night driving on hill roads requires extra caution, and our experienced drivers are fully trained for safe nighttime driving in Kodaikanal.',
  },
  {
    question: 'How do I book a taxi in Kodaikanal with RIR Tours?',
    answer: 'Booking a taxi in Kodaikanal is easy. WhatsApp us at +91 93425 53805, call us directly, or fill out the enquiry form on our website. We respond within 30 minutes with vehicle options, driver details, and transparent pricing. No advance payment is required for most bookings. We also accept last-minute and same-day bookings.',
  },
];

export default function KodaiTaxiService() {
  const sections = [
    {
      title: 'Professional Taxi Service in Kodaikanal by RIR Tours',
      content: (
        <>
          <p>
            Looking for a reliable <strong>taxi service in Kodaikanal</strong>? RIR Tours and Travels provides professional, safe, and affordable taxi services for all your travel needs in and around Kodaikanal. As the <strong>best travel agency in Kodaikanal</strong>, we have been serving tourists, families, honeymooners, and business travellers for over 12 years with a commitment to quality, transparency, and customer satisfaction.
          </p>
          <p>
            Our <strong>Kodaikanal taxi service</strong> covers everything from local sightseeing tours to airport transfers, railway station pickups, outstation trips, and multi-day packages. Whether you need a <strong>taxi in Kodaikanal</strong> for a few hours or an entire week, RIR Tours has the right vehicle and the right driver for your journey.
          </p>
          <p>
            What sets our Kodaikanal taxi service apart is our focus on safety and expertise. Kodaikanal's mountain roads feature steep gradients, hairpin bends, and unpredictable weather — you need a driver who knows these roads intimately. All our drivers are experienced hill-road professionals who have logged thousands of kilometres on Kodaikanal's terrain, ensuring your journey is not just comfortable but also completely safe.
          </p>
        </>
      ),
    },
    {
      title: 'Kodaikanal Taxi Services We Offer',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Local Sightseeing Taxi</h3>
          <p>
            Hire a <strong>taxi in Kodaikanal</strong> for our curated <Link to="/kodaikanal-sightseeing" className="text-primary font-semibold hover:underline">sightseeing tours</Link>. Our Valley Tour covers Coaker's Walk, Pillar Rocks, and Green Valley View. The City Tour explores temples and museums. The Wild Tour ventures into Berijam Lake forest. The Trekking Tour takes you to Dolphin's Nose and Echo Rock. The Village Tour visits Poombarai and Mannavanur. Each tour runs for a full day with a dedicated driver.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Airport Transfer Taxi</h3>
          <p>
            We provide comfortable taxi transfers from Madurai Airport (IXM) to Kodaikanal, a scenic 120-km drive through the Palani Hills. Our driver will meet you at the airport arrival area with a name board. The journey takes approximately 3 to 3.5 hours, passing through the famous ghat road with 14 hairpin bends. Return transfers from Kodaikanal to Madurai Airport are also available.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Railway Station Taxi</h3>
          <p>
            Kodai Road Railway Station (KQN), located 80 km from Kodaikanal town, is the nearest railhead. RIR Tours provides reliable pickup and drop taxi service between Kodai Road station and your hotel in Kodaikanal. We also serve Dindigul Junction (65 km) and Palani Railway Station (65 km).
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Outstation Taxi from Kodaikanal</h3>
          <p>
            Planning to travel beyond Kodaikanal? Our outstation taxi service connects Kodaikanal to Madurai, Munnar, Ooty, Coimbatore, Chennai, Bangalore, Rameshwaram, Kanyakumari, and other popular South Indian destinations. Both <Link to="/kodaikanal-one-way-drop" className="text-primary font-semibold hover:underline">one-way drop</Link> and round-trip options are available with transparent per-kilometre pricing.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Hourly Taxi Rental</h3>
          <p>
            Need a taxi for just a few hours? Our hourly rental packages are perfect for quick visits to Kodaikanal Lake, Bryant Park, or nearby viewpoints. Choose from 4-hour and 8-hour packages with a fixed rate that includes fuel, driver, and parking charges.
          </p>
        </>
      ),
    },
    {
      title: 'Taxi Vehicles Available in Kodaikanal',
      content: (
        <>
          <p>Our Kodaikanal taxi cab includes vehicles suited for every budget and group size:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Hatchback (Swift/Indica):</strong> Budget-friendly option for 2-3 passengers. Economical for short local trips within Kodaikanal town.</li>
            <li><strong>Sedan (Swift Dzire / Toyota Etios):</strong> The most popular taxi choice in Kodaikanal. Comfortable for up to 4 passengers with good luggage space. Ideal for sightseeing tours and airport transfers.</li>
            <li><strong>MUV (Toyota Innova / Innova Crysta):</strong> Spacious 7-seater perfect for families. Premium captain seats, climate control, and ample boot space for mountain-road comfort.</li>
            <li><strong>SUV (Toyota Fortuner):</strong> Luxury taxi option with premium interiors, powerful engine, and superior handling on Kodaikanal's steep roads. Perfect for honeymoon couples and VIP travellers.</li>
            <li><strong>Tempo Traveller (12-17 seats):</strong> Ideal for large groups, corporate outings, and family reunions visiting Kodaikanal together.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Why RIR Tours is the Best Taxi Service in Kodaikanal',
      content: (
        <>
          <p>
            Choosing the right <strong>cab service in Kodaikanal</strong> makes all the difference in your hill station experience. Here is why thousands of travellers prefer RIR Tours:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Safety First:</strong> Our drivers undergo rigorous training for mountain driving, including handling fog, rain, and steep descents. All vehicles carry emergency kits and undergo regular safety checks.</li>
            <li><strong>Local Knowledge:</strong> Our drivers don't just drive — they guide. They know the best time to visit each spot, secret viewpoints, recommended restaurants, and the safest parking areas at every attraction.</li>
            <li><strong>No Hidden Charges:</strong> Our taxi rates are fully transparent. Fuel, driver bata, parking fees, and toll charges are included in the quoted price. No surprises at the end of your trip.</li>
            <li><strong>Flexible Scheduling:</strong> Unlike fixed-route shared taxis, our dedicated taxi service lets you set your own pace. Spend extra time at Kodaikanal Lake, stop for photography at Pine Forest, or take a detour to Silver Cascade Falls — it's your trip.</li>
            <li><strong>Instant Booking:</strong> Book via WhatsApp, phone, or our website. We confirm within 30 minutes with driver name, phone number, and vehicle details.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal Taxi Service – Best Taxi in Kodaikanal',
        description: 'Hire the best taxi in Kodaikanal with RIR Tours. Local sightseeing, airport transfer, outstation trips. Etios, Innova, Fortuner available. Call +91 93425 53805.',
        canonical: '/kodaikanal-taxi-service',
      }}
      hero={{
        tagline: 'Kodaikanal Taxi Service',
        heading: 'Trusted Taxi Service in Kodaikanal – Safe, Reliable & Professional',
        subHeading: 'Professional taxi service for sightseeing, airport transfers, and outstation trips. Experienced hill-road drivers and a well-maintained cab at your service.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246344/imgi_3_sedan_qkmju5.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
      ]}
      serviceName="Kodaikanal Taxi Service"
      serviceDesc="Professional taxi service in Kodaikanal for local sightseeing, airport transfers, railway station pickups, and outstation trips with experienced hill-road drivers."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
