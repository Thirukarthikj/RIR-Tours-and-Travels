import React from 'react';
import { Link } from 'react-router-dom';
import SEOLandingLayout from './SEOLandingLayout';

const RELATED_LINKS = [
  { label: 'Kodaikanal Tour Packages', path: '/kodaikanal-tour-packages' },
  { label: 'Kodaikanal Taxi Service', path: '/kodaikanal-taxi-service' },
  { label: 'Kodaikanal One Way Drop', path: '/kodaikanal-one-way-drop' },
  { label: 'Madurai to Kodaikanal Taxi', path: '/madurai-to-kodaikanal-taxi' },
  { label: 'Kodaikanal Tour Operator', path: '/kodaikanal-tour-operator' },
];

const FAQS = [
  {
    question: 'What are the top sightseeing places in Kodaikanal?',
    answer: 'The top sightseeing places in Kodaikanal include Kodaikanal Lake (boating and cycling), Coaker\'s Walk (panoramic valley views), Bryant Park (botanical garden), Pillar Rocks (three giant granite pillars), Green Valley View (deep valley panorama), Pine Forest (tall pine tree canopy), Silver Cascade Falls, Guna Caves (Devil\'s Kitchen), Dolphin\'s Nose (cliff-edge viewpoint), Berijam Lake (forest permit required), Mannavanur Lake, Poombarai Village, Fire Tower, Echo Rock, and the 500-Year-Old Tree.',
  },
  {
    question: 'How many sightseeing tours are available in Kodaikanal?',
    answer: 'RIR Tours offers five distinct sightseeing tours in Kodaikanal, each covering different attractions: Tour 1 (Valley Tour) covers Coaker\'s Walk, Pillar Rocks, and Pine Forest. Tour 2 (City Tour) visits temples and museums. Tour 3 (Wild Tour) explores Berijam Lake and Silent Valley. Tour 4 (Trekking Tour) takes you to Dolphin\'s Nose and Echo Rock. Tour 5 (Village Tour) visits Poombarai and Mannavanur.',
  },
  {
    question: 'Which Kodaikanal sightseeing tour is best for families?',
    answer: 'For families with children, we recommend the Valley Tour (Tour 1) combined with the City Tour (Tour 2). The Valley Tour offers scenic viewpoints and easy walks suitable for all ages, while the City Tour includes the 7D Theatre and Science Museum that children enjoy. The Village Tour is also family-friendly with its animal farms at Mannavanur.',
  },
  {
    question: 'Is a forest permit needed for Kodaikanal sightseeing?',
    answer: 'A forest permit is required only for the Wild Tour (Tour 3) which visits Berijam Lake and the protected forest zone. RIR Tours handles the entire permit application process on your behalf. The permit is limited to a fixed number of vehicles per day, so we recommend booking this tour at least 2-3 days in advance.',
  },
  {
    question: 'What is the best order to do the Kodaikanal sightseeing tours?',
    answer: 'We recommend starting with Tour 1 (Valley Tour) on day one to get an overview of Kodaikanal\'s iconic attractions. Follow with Tour 3 (Wild Tour) on day two for the Berijam Lake experience (book permit in advance). Day three can cover Tour 4 (Trekking Tour) for adventure or Tour 5 (Village Tour) for cultural immersion. The City Tour can fill a half-day on any remaining day.',
  },
  {
    question: 'What is the best time for sightseeing in Kodaikanal?',
    answer: 'The best time for sightseeing varies by season. Summer (April-June) offers clear skies and pleasant weather ideal for all viewpoints. Monsoon (July-September) brings lush greenery and dramatic mist but some viewpoints may have limited visibility. Winter (October-February) features cool temperatures perfect for trekking. We recommend starting sightseeing by 8:00 AM daily to avoid afternoon fog that often rolls in after 2:00 PM.',
  },
  {
    question: 'Can I combine multiple sightseeing tours in one day?',
    answer: 'Each sightseeing tour is designed as a full-day experience to give you enough time at each attraction without rushing. However, the City Tour (Tour 2) can be completed in half a day and combined with free time at Kodaikanal Lake. We don\'t recommend combining two full tours in a single day as the mountain roads and sightseeing can be tiring.',
  },
];

export default function KodaiSightseeing() {
  const sections = [
    {
      title: 'Complete Kodaikanal Sightseeing Guide by RIR Tours',
      content: (
        <>
          <p>
            Kodaikanal, fondly known as the <strong>Princess of Hill Stations</strong>, offers some of the most breathtaking <strong>sightseeing experiences in South India</strong>. From misty valley viewpoints and pristine forest lakes to ancient temples and charming rural villages, Kodaikanal's diverse attractions make it a paradise for nature lovers, adventure seekers, and culture enthusiasts alike.
          </p>
          <p>
            RIR Tours and Travels has designed five comprehensive <Link to="/kodaikanal-tour-packages" className="text-primary font-semibold hover:underline">Kodaikanal sightseeing packages</Link> that systematically cover every major attraction. Each package is a full-day tour with a dedicated driver and comfortable vehicle, allowing you to explore at a relaxed pace without the stress of navigation or parking.
          </p>
          <p>
            As the most experienced <Link to="/kodaikanal-tour-operator" className="text-primary font-semibold hover:underline">tour operator in Kodaikanal</Link>, we know exactly when to visit each spot for the best experience — the ideal time for clear views at Coaker's Walk, the quietest hours at Berijam Lake, and the most photogenic light at Pillar Rocks. Let our local expertise transform your Kodaikanal sightseeing into a curated, memorable experience.
          </p>
        </>
      ),
    },
    {
      title: 'Top Kodaikanal Sightseeing Places',
      content: (
        <>
          <h3 className="text-lg font-bold text-primary mt-2 mb-2">Kodaikanal Lake</h3>
          <p>
            The iconic star-shaped <strong>Kodaikanal Lake</strong> is the centrepiece of the hill station. Spread over 60 acres, this man-made lake offers pedal boating, row boating, and a 5-km cycling/walking path around its perimeter. The lake is surrounded by lush eucalyptus and pine trees, creating a serene atmosphere. Morning hours (7-9 AM) offer mirror-like reflections on the water surface. Available in our Valley Tour and Wild Tour packages.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Coaker's Walk</h3>
          <p>
            A one-kilometre pedestrian path constructed along the edge of steep slopes on the southern side of Kodaikanal. <strong>Coaker's Walk</strong> offers unobstructed panoramic views of the Palani Plains stretching to the horizon, with Periyakulam and Madurai visible on clear days. The walk features a telescope house where you can observe distant landscapes. Best visited early morning (before 9 AM) or late afternoon. Featured in our Valley Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Pillar Rocks</h3>
          <p>
            Three vertically standing granite pillars rising 122 metres from the ground, <strong>Pillar Rocks</strong> is one of Kodaikanal's most photographed attractions. The viewing area provides a dramatic perspective of these massive rock formations set against the deep valley backdrop. On misty mornings, the rocks appear to float above the clouds. Part of our Valley Tour package.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Green Valley View (Suicide Point)</h3>
          <p>
            Originally known as Suicide Point and renamed to <strong>Green Valley View</strong>, this viewpoint offers one of the most dramatic vistas in Kodaikanal. Looking down into a deep valley covered with dense green vegetation that stretches to the horizon, the view is particularly stunning during the monsoon season when clouds roll through the valley below you. Covered in the Valley Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Bryant Park</h3>
          <p>
            <strong>Bryant Park</strong> is a beautifully maintained botanical garden spread over 20 acres on the eastern shore of Kodaikanal Lake. The park features over 325 species of trees, a greenhouse with exotic plants, a rose garden, and well-manicured lawns. The annual flower show held in May attracts thousands of visitors. Available in the Valley Tour and Trekking Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Pine Forest</h3>
          <p>
            The <strong>Pine Forest</strong> is a magical stretch of towering pine trees that creates a cathedral-like canopy overhead. Walking through this forest feels like entering another world, with sunlight filtering through the dense pine needles creating patterns on the forest floor. The earthy aroma of pine adds to the sensory experience. A highlight of our Valley Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Berijam Lake</h3>
          <p>
            Located 21 km from Kodaikanal town within a protected forest reserve, <strong>Berijam Lake</strong> is one of the most pristine and least commercialized attractions. Access requires a forest department permit (limited daily entries). The drive through dense shola forests to reach the lake is an experience in itself. RIR Tours arranges the permit as part of our Wild Tour package.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Dolphin's Nose</h3>
          <p>
            <strong>Dolphin's Nose</strong> is a narrow, flat rock projection shaped like a dolphin's snout, jutting out over a deep valley with a 6,600-foot vertical drop. Reaching it requires a moderate trek through forest paths. The viewpoint offers one of the most thrilling and vertiginous vistas in all of South India. Featured in our Trekking Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Mannavanur Lake & Village</h3>
          <p>
            Located about 35 km from Kodaikanal town, <strong>Mannavanur</strong> is a serene grassland plateau with a beautiful lake, sheep farms, and rabbit farms. The landscape resembles European countryside with rolling green hills and grazing sheep. One of Kodaikanal's best-kept secrets, Mannavanur is a photographer's paradise. The centrepiece of our Village Tour.
          </p>
          <h3 className="text-lg font-bold text-primary mt-4 mb-2">Silver Cascade Falls</h3>
          <p>
            <strong>Silver Cascade Falls</strong> is a 55-metre cascade located on the Madurai-Kodaikanal road, visible directly from the highway. The falls are formed by the overflow water from Kodaikanal Lake, cascading down silvery granite rocks. A convenient stop during the <Link to="/madurai-to-kodaikanal-taxi" className="text-primary font-semibold hover:underline">Madurai to Kodaikanal drive</Link>.
          </p>
        </>
      ),
    },
    {
      title: 'Kodaikanal Sightseeing Tour Schedule',
      content: (
        <>
          <p>RIR Tours recommends the following ideal sightseeing schedule for visitors:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Day 1 – Valley Tour:</strong> Coaker's Walk → Upper Lake View → Moier Point → Pine Forest → Guna Cave → Pillar Rocks → Green Valley View → Golf Course → Pambar Falls → Shopping → Bryant Park → Kodai Lake</li>
            <li><strong>Day 2 – Wild Tour:</strong> Silent Valley View → Fire Tower → Berijam Lake View → Caps Fly View → Herbal Forest → Berijam Lake → Shopping → Kodai Lake (Forest permit required — RIR Tours arranges this)</li>
            <li><strong>Day 3 – Trekking Tour:</strong> La Saleth Church → Vattakkanal Falls → Pambar Falls → Mountain Beauty → Dolphin's Nose → Echo Rock → 500-Year-Old Tree → Shopping → Bryant Park → Lake Boating</li>
            <li><strong>Day 4 – Village Tour:</strong> Observatory Pine Forest → Rose Garden → Poombarai Village View → Poombarai Village → Mahalakshmi Temple → Palani View → Mannavanur Sheep Farm → Rabbit Farm → Mannavanur Lake</li>
            <li><strong>Day 5 – City Tour:</strong> Jain Temple → Kurinji Andavar Temple → Chettiar Park → Palani View → Kodai City View → 7D Theatre → Science Museum → Silver Falls → Lake & Park</li>
          </ul>
          <p className="mt-3">
            For shorter trips, we recommend prioritizing the Valley Tour (Day 1) and either the Wild Tour or Trekking Tour as your second choice. <Link to="/cab" className="text-primary font-semibold hover:underline">Book your Kodaikanal cab</Link> with RIR Tours for any combination of tours.
          </p>
        </>
      ),
    },
  ];

  return (
    <SEOLandingLayout
      seo={{
        title: 'Kodaikanal Sightseeing – Best Places to Visit in Kodaikanal',
        description: 'Discover the best Kodaikanal sightseeing places with RIR Tours. Kodaikanal Lake, Coaker\'s Walk, Pillar Rocks, Berijam Lake, Dolphin\'s Nose & more. Book sightseeing tours now.',
        canonical: '/kodaikanal-sightseeing',
      }}
      hero={{
        tagline: 'Kodaikanal Sightseeing',
        heading: 'Discover Every Scenic Wonder of Kodaikanal',
        subHeading: 'From misty valleys and pristine lakes to ancient forests and charming villages — explore Kodaikanal\'s finest attractions with expert-guided sightseeing tours.',
        image: 'https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg',
      }}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Kodaikanal Sightseeing', path: '/kodaikanal-sightseeing' },
      ]}
      serviceName="Kodaikanal Sightseeing Packages"
      serviceDesc="Complete Kodaikanal sightseeing guide with five curated tours covering every major attraction including Kodaikanal Lake, Coaker's Walk, Pillar Rocks, Berijam Lake, and Dolphin's Nose."
      sections={sections}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
