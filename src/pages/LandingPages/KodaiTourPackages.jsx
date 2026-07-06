import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Cab Booking', path: '/kodaikanal-cab-booking' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal Sightseeing Packages', path: '/kodaikanal-sightseeing' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'What are the best Kodaikanal tour packages available?',
    answer: 'RIR Tours and Travels offers five curated Kodaikanal tour packages: Valley Tour covering Coaker\'s Walk, Pillar Rocks, and Green Valley View; City Tour visiting Jain Temple, Kurinji Andavar Temple, and Science Museum; Wild Tour exploring Silent Valley, Berijam Lake, and Fire Tower; Trekking Tour through Dolphin\'s Nose, Vattakkanal Falls, and Echo Rock; and Village Tour to Poombarai Village, Mannavanur Sheep Farm, and Observatory Pine Forest. Each package includes a professional driver and comfortable vehicle.',
  },
  {
    question: 'How many days are needed for a complete Kodaikanal tour?',
    answer: 'For a thorough exploration of Kodaikanal, we recommend 3 to 4 days. This allows you to experience all five local sightseeing tours at a comfortable pace: Valley Tour, City Tour, Wild Tour, Trekking Tour, and Village Tour. If you have limited time, a 2-day trip covering the Valley Tour and one additional tour provides an excellent overview of the Princess of Hill Stations.',
  },
  {
    question: 'What is included in your Kodaikanal tour packages?',
    answer: 'Our Kodaikanal tour packages include a well-maintained vehicle (Toyota Etios or Innova), an experienced local driver with complete knowledge of Kodaikanal roads and attractions, fuel charges, parking fees, and toll charges. Hotel accommodation and meals can be arranged upon request at additional cost. We also provide customized itineraries for honeymoon couples, families, and corporate groups.',
  },
  {
    question: 'Which is the best time to visit Kodaikanal?',
    answer: 'Kodaikanal is a year-round destination. The peak season is from April to June when the weather is pleasant and ideal for sightseeing at Kodaikanal Lake, Bryant Park, and Coaker\'s Walk. The monsoon season (July to September) offers lush green landscapes and misty views, perfect for photography. October to March brings cooler temperatures, making it ideal for trekking at Dolphin\'s Nose and exploring Pine Forest trails. RIR Tours operates throughout the year with experienced hill-road drivers.',
  },
  {
    question: 'Can I customize my Kodaikanal tour package?',
    answer: 'Absolutely. RIR Tours and Travels specializes in customized Kodaikanal tour packages. Whether you want a romantic honeymoon package focused on Kodaikanal Lake and Coaker\'s Walk, a family adventure including Berijam Lake and Mannavanur, or a spiritual tour covering local temples, we tailor every itinerary to your preferences, budget, and schedule. Contact us via WhatsApp or phone for a free custom quote.',
  },
  {
    question: 'How do I book a Kodaikanal tour package with RIR Tours?',
    answer: 'Booking is simple and hassle-free. You can book your Kodaikanal tour package through our website enquiry form, WhatsApp at +91 93425 53805, or by calling us directly. We respond within 30 minutes with a detailed itinerary and transparent pricing. No hidden charges, no advance payment hassles — just reliable, premium travel service in Kodaikanal.',
  },
  {
    question: 'Is Kodaikanal safe for family trips and honeymoon couples?',
    answer: 'Kodaikanal is one of the safest hill stations in Tamil Nadu for families and honeymoon couples. The town is well-connected, tourist-friendly, and offers a serene environment. RIR Tours ensures additional safety with professionally trained drivers who are experts on Kodaikanal\'s hilly terrain, well-maintained vehicles with GPS tracking, and 24/7 customer support throughout your trip.',
  },
  {
    question: 'What are the popular sightseeing places in Kodaikanal?',
    answer: 'The top sightseeing places in Kodaikanal include Kodaikanal Lake (boating and cycling), Coaker\'s Walk (panoramic valley views), Bryant Park (botanical garden), Pillar Rocks (three giant rock pillars), Green Valley View (deep valley panorama), Pine Forest (tall pine tree canopy), Silver Cascade Falls, Guna Caves (Devil\'s Kitchen), Dolphin\'s Nose (cliff-edge viewpoint), Berijam Lake (forest permit required), Mannavanur Lake, and Poombarai Village. Our tour packages are designed to cover all these iconic attractions.',
  },
];

export default function KodaiTourPackages() {
  const sections = [
    {
      title: 'Best Kodaikanal Tour Packages by RIR Tours and Travels',
      content: (
        <>
          <p>
            Looking for the <strong>best Kodaikanal tour packages</strong>? RIR Tours and Travels is your trusted <Link to="/kodaikanal-tour-operator" className="text-primary font-semibold hover:underline">tour operator in Kodaikanal</Link>, offering expertly crafted sightseeing packages that cover every iconic destination in the Princess of Hill Stations. Whether you are planning a romantic honeymoon, a family vacation, or a group adventure, our Kodaikanal tour packages are designed to deliver an unforgettable hill station experience.
          </p>
          <p>
            Kodaikanal, nestled in the Palani Hills of Tamil Nadu at an altitude of over 2,100 meters, is renowned for its misty valleys, pristine lakes, dense pine forests, and cool climate year-round. As the leading <strong>travel agency in Kodaikanal</strong>, RIR Tours brings you closer to nature with five unique local sightseeing tours and multiple multi-day packages that explore every corner of this enchanting hill station.
          </p>
          <p>
            Our cab includes comfortable Toyota Etios sedans and spacious Toyota Innova vehicles, driven by experienced local drivers who know every twist and turn of Kodaikanal's mountain roads. With transparent pricing, no hidden charges, and 24/7 customer support, RIR Tours ensures your Kodaikanal trip is smooth, safe, and memorable.
          </p>
        </>
      ),
    },
    {
      title: 'Our Kodaikanal Sightseeing Tour Packages',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Tour 1 – Valley Tour (Full Day)</h3>
          <p>
            The Valley Tour is our most popular <Link to="/kodaikanal-sightseeing" className="text-primary font-semibold hover:underline">Kodaikanal sightseeing</Link> package. Begin your day with the breathtaking views from <strong>Coaker's Walk</strong>, a one-kilometer pedestrian path that offers panoramic views of the Palani Plains. Continue to <strong>Upper Lake View</strong> for a bird's-eye perspective of Kodaikanal Lake, followed by <strong>Moier Point</strong>, one of the less crowded viewpoints where you can enjoy unobstructed valley vistas.
          </p>
          <p>
            The tour proceeds to the magical <strong>Pine Tree Forest</strong>, a serene stretch of towering pine trees that provides an otherworldly walking experience. Next, visit <strong>Devil's Kitchen (Guna Cave)</strong>, the famous cave system immortalized in Tamil cinema, and the awe-inspiring <strong>Pillar Rocks</strong> — three vertically standing granite pillars rising 122 meters high. Take in the dramatic <strong>Green Valley View</strong>, explore the <strong>Golf Course</strong>, and stop at <strong>Pambar Falls</strong>. After a shopping and lunch break, unwind at <strong>Bryant Park</strong>, the beautifully landscaped botanical garden, and conclude with a peaceful evening at <strong>Kodaikanal Lake</strong> — perfect for boating and cycling.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Tour 2 – City Tour (Full Day)</h3>
          <p>
            Our City Tour explores Kodaikanal's cultural and heritage attractions. Visit the ancient <strong>Jain Temple</strong>, the spiritually significant <strong>Kurinji Andavar Temple</strong> (dedicated to Lord Murugan, surrounded by Kurinji flowers that bloom once every 12 years), and the scenic <strong>Chettiar Park</strong>. The <strong>Palani View Point</strong> offers magnificent views toward the temple town of Palani, while <strong>Kodai City View</strong> provides a panoramic perspective of the entire town. The tour also includes a fun visit to the <strong>7D Theatre</strong>, the educational <strong>Science Museum</strong>, the cascading <strong>Silver Falls</strong>, and ends with a relaxing stroll at Kodaikanal's <strong>Lake and Park</strong> area.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Tour 3 – Wild Tour (Full Day)</h3>
          <p>
            For nature and wildlife enthusiasts, our Wild Tour ventures deep into Kodaikanal's protected forest zones. The highlight is <strong>Berijam Lake</strong>, a pristine reservoir surrounded by dense shola forest — access requires a special forest department permit that RIR Tours arranges for you. Experience the wilderness from the <strong>Silent Valley View</strong>, climb the historic <strong>Fire Tower</strong> for 360-degree forest panoramas, and take in the breathtaking <strong>Caps Fly View</strong>. Walk through the aromatic <strong>Herbal Forest</strong> and end the day with peaceful boating at <strong>Kodai Lake</strong>.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Tour 4 – Trekking Tour (Full Day)</h3>
          <p>
            Adventure seekers will love our Trekking Tour, which takes you through Kodaikanal's most dramatic landscapes. Start at <strong>La Saleth Church</strong>, one of the oldest churches in Kodaikanal, then trek to the stunning <strong>Vattakkanal Falls</strong> — a hidden gem surrounded by lush vegetation. Continue to <strong>Pambar Falls</strong> and experience the raw beauty of <strong>Mountain Beauty Point</strong>. The iconic <strong>Dolphin's Nose</strong> is a narrow cliff-edge viewpoint that overlooks a 6,600-foot vertical drop into the valley — a truly breathtaking experience. Test the acoustics at <strong>Echo Rock</strong>, photograph the ancient <strong>500-Year-Old Tree</strong>, shop for local specialities, and relax at <strong>Bryant Park</strong> before concluding with <strong>Lake Boating</strong>.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Tour 5 – Village Tour (Full Day)</h3>
          <p>
            Our Village Tour offers a unique glimpse into rural Kodaikanal life. Walk through the <strong>Observatory Pine Forest</strong>, a stunning corridor of tall pine trees, and visit the beautifully maintained <strong>Rose Garden</strong>. Drive to <strong>Poombarai Village View</strong> for terraced landscape panoramas, then explore <strong>Poombarai Village</strong> itself — an ancient settlement known for its traditional Palani Panchamirtham preparation. Visit the sacred <strong>Mahalakshmi Temple</strong> and <strong>Kulanthi Velappar Temple</strong>, enjoy views from <strong>Palani View Point</strong>, interact with animals at <strong>Mannavanur Sheep Farm</strong> and <strong>Rabbit Farm</strong>, and end with a peaceful walk around <strong>Mannavanur Lake</strong> — a stunning grassland lake surrounded by rolling hills.
          </p>
        </>
      ),
    },
    {
      title: 'Why Choose RIR Tours for Your Kodaikanal Trip?',
      content: (
        <>
          <p>
            As the <strong>best travel agency in Kodaikanal</strong>, RIR Tours and Travels stands apart with over 12 years of experience in South Indian tourism. Here is what makes us the preferred choice for thousands of happy travellers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Local Expertise:</strong> Our drivers are Kodaikanal locals who know every scenic shortcut, the best photography spots, and safe mountain driving techniques.</li>
            <li><strong>Well-Maintained Cab:</strong> Choose from comfortable Toyota Etios sedans for couples and small families, or spacious Toyota Innova vehicles for larger groups. All vehicles are regularly serviced and sanitized.</li>
            <li><strong>Transparent Pricing:</strong> No hidden charges. Our package prices include fuel, driver charges, parking fees, and tolls. What we quote is what you pay.</li>
            <li><strong>24/7 Support:</strong> From the moment you book until you return home, our customer support team is available around the clock via phone and WhatsApp.</li>
            <li><strong>Customizable Itineraries:</strong> Every trip is unique. We customize packages for <strong>honeymoon couples</strong>, <strong>family tours</strong>, <strong>corporate outings</strong>, and <strong>group pilgrimages</strong>.</li>
            <li><strong>Forest Permit Assistance:</strong> For the Wild Tour (Berijam Lake), we handle the forest department permit process so you can focus on enjoying nature.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'How to Reach Kodaikanal',
      content: (
        <>
          <p>
            Kodaikanal is well-connected to major cities in Tamil Nadu and Kerala. The nearest major city is <strong>Madurai</strong> (120 km, approximately 3.5 hours by road). RIR Tours provides a dedicated <Link to="/madurai-to-kodaikanal-taxi" className="text-primary font-semibold hover:underline">Madurai to Kodaikanal taxi service</Link> for a comfortable and scenic hill drive.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>From Madurai:</strong> 120 km via NH 49 (3–3.5 hours) — The most popular route, passing through Batlagundu and the 14 hairpin bends.</li>
            <li><strong>From Chennai:</strong> 530 km (approximately 9–10 hours) — Best covered with an overnight stop in Madurai or Dindigul.</li>
            <li><strong>From Coimbatore:</strong> 175 km (approximately 4.5 hours) — A scenic drive through Palani and Dindigul.</li>
            <li><strong>From Bangalore:</strong> 465 km (approximately 8 hours) — Via Salem and Dindigul.</li>
            <li><strong>Nearest Airport:</strong> Madurai Airport (IXM), 120 km from Kodaikanal.</li>
            <li><strong>Nearest Railway Station:</strong> Kodai Road (KQN), 80 km from Kodaikanal town.</li>
          </ul>
          <p className="mt-3">
            Book your <Link to="/kodaikanal-cab-booking" className="text-primary font-semibold hover:underline">Kodaikanal cab</Link> or <Link to="/kodaikanal-one-way-drop" className="text-primary font-semibold hover:underline">one-way drop taxi</Link> with RIR Tours for a hassle-free journey to the hill station.
          </p>
        </>
      ),
    },
    {
      title: 'Kodaikanal Tour Packages for Every Traveller',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Kodaikanal Honeymoon Packages</h3>
          <p>
            Kodaikanal is one of India's top honeymoon destinations. Our romantic packages focus on serene spots like Kodaikanal Lake (private boating), Coaker's Walk at sunset, Pine Forest walks, and Berijam Lake for couples seeking solitude. We recommend premium vehicles with privacy and comfort, along with hotel recommendations at romantic resorts overlooking the valley.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Kodaikanal Family Tour Packages</h3>
          <p>
            Families with children love our Valley Tour and Village Tour combination. Kids enjoy the 7D Theatre, Science Museum, Bryant Park playground, and Mannavanur animal farms. Our spacious Innova vehicles accommodate families with ample luggage space, and our drivers are trained to maintain a safe, comfortable pace on mountain roads.
          </p>

          <h3 className="text-lg font-bold text-primary mt-6 mb-2">Kodaikanal Group Tour Packages</h3>
          <p>
            Planning a trip with friends or a corporate team? RIR Tours offers group packages with multiple vehicles and coordinated itineraries. Our Tempo Traveller option seats 12–17 passengers comfortably, making it ideal for team outings. Group discounts are available for bookings of 3 or more vehicles.
          </p>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal Tour Packages – Best Kodaikanal Sightseeing Tours',
        description: 'Book the best Kodaikanal tour packages with RIR Tours and Travels. Valley Tour, City Tour, Wild Tour, Trekking Tour & Village Tour. Etios & Innova cabs. Call +91 93425 53805.',
        canonical: '/kodaikanal-tour-packages',
        ogImage: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
      }}
      hero={{
        tagline: 'Kodaikanal Tour Packages',
        heading: 'Explore the Princess of Hill Stations with Expert-Guided Tours',
        subHeading: 'Five unique Kodaikanal sightseeing tours covering every valley, peak, forest, and lake. Professional drivers, comfortable vehicles, and transparent pricing.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
      ]}
      serviceName="Kodaikanal Tour Packages"
      serviceDesc="Comprehensive Kodaikanal sightseeing tour packages including Valley Tour, City Tour, Wild Tour, Trekking Tour, and Village Tour with professional drivers and comfortable vehicles."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
