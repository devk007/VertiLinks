import images from '../images';
import { DoorOpen } from 'lucide-react';

const turnstileImages = images.products.turnstileAndGates;
const heroImage = turnstileImages.hero;
const zktecoImages = turnstileImages.zkteco;
const cameImages = turnstileImages.came;

const zktecoLogo = zktecoImages?.logo || heroImage;
const cameLogo = cameImages?.logo || heroImage;

const zktecoImageMap = {
  'saturn-t1000': zktecoImages?.saturnT1000,
  'ts2000-plus-series': zktecoImages?.ts2000PlusSeries,
  'ts2000-pro-series': zktecoImages?.ts2000ProSeries,
  'ts1000-plus-series': zktecoImages?.ts1000PlusSeries,
  'ts1000-pro-series': zktecoImages?.ts1000ProSeries,
  'ts1000m-pro': zktecoImages?.ts1000mPro,
  ts5000a: zktecoImages?.ts5000a,
  'mts1000-series': zktecoImages?.mts1000Series,
};

const cameImageMap = {
  'came-500e-tripod': cameImages?.came500e,
  'came-700-en1-tripod': cameImages?.came700en1,
  'came-602-tripod': cameImages?.came602,
  'came-702-rn1-tripod': cameImages?.came702rn1,
  'came-saloon-swing': cameImages?.saloon40,
  'came-705-en1-swing': cameImages?.came705en1,
  'came-605-swing': cameImages?.came605,
  'came-gl-a1': cameImages?.gla1,
  'came-gl-b1': cameImages?.glb1,
  'came-gl-a2': cameImages?.gla2,
  'came-btx-300-n1': cameImages?.btx300n1,
  'came-btx-400-n1': cameImages?.btx400n1,
  'came-twister': cameImages?.twister,
  'came-saloon40': cameImages?.saloon40,
};

const zktecoModels = [
  {
    slug: 'saturn-t1000',
    name: 'ZKTeco Saturn-T1000',
    image: zktecoImageMap['saturn-t1000'] || heroImage,
    hero: zktecoImageMap['saturn-t1000'] || heroImage,
    brief: 'Drop-arm tripod turnstile balancing quiet throughput with failsafe evacuation.',
    summaryFeatures: [
      'Up to 25 persons per minute with <65 dB operation',
      'Bi-directional with adjustable arm modes',
      'Arms drop automatically on power loss/emergency',
      'Supports face, RFID, and QR verification',
    ],
  },
  {
    slug: 'ts2000-plus-series',
    name: 'ZKTeco TS2000 Plus Series',
    image: zktecoImageMap['ts2000-plus-series'] || heroImage,
    hero: zktecoImageMap['ts2000-plus-series'] || heroImage,
    brief: 'Bridge-type tripod made entirely of SUS304 stainless steel for indoor/outdoor use.',
    summaryFeatures: [
      'Bi-directional standard operation',
      'Automatic arm drop during outages',
      'Streamlined verification zone with under-mount readers',
    ],
  },
  {
    slug: 'ts1000-plus-series',
    name: 'ZKTeco TS1000 Plus Series',
    image: zktecoImageMap['ts1000-plus-series'] || heroImage,
    hero: zktecoImageMap['ts1000-plus-series'] || heroImage,
    brief: 'Vertical compact tripod turnstile for schools, museums, factories, and gyms.',
    summaryFeatures: [
      'Space-saving cabinet with SUS304 construction',
      'Bi-directional operation with auto-drop arms',
    ],
  },
  {
    slug: 'ts1000m-pro',
    name: 'ZKTeco TS1000M Pro',
    image: zktecoImageMap['ts1000m-pro'] || heroImage,
    hero: zktecoImageMap['ts1000m-pro'] || heroImage,
    brief: 'Professional tripod variant delivering economical access control for offices.',
    summaryFeatures: [
      'Classic tripod design tuned for indoor environments',
      'Safe access with energy-efficient electronics',
    ],
  },
  {
    slug: 'ts5000a',
    name: 'ZKTeco TS5000A',
    image: zktecoImageMap.ts5000a || heroImage,
    hero: zktecoImageMap.ts5000a || heroImage,
    brief: 'Automatic stainless-steel tripod engineered for smooth, silent operation.',
    summaryFeatures: [
      'Compact footprint for small workspaces',
      'Low power consumption with quiet motors',
    ],
  },
  {
    slug: 'ts2000-pro-series',
    name: 'ZKTeco TS2000 Pro Series',
    image: zktecoImageMap['ts2000-pro-series'] || heroImage,
    hero: zktecoImageMap['ts2000-pro-series'] || heroImage,
    brief: 'Pro tripod turnstiles tailored for indoor lobby deployments.',
    summaryFeatures: [
      'Economical option for offices',
      'Reliable tripod drive with safety sensors',
    ],
  },
  {
    slug: 'mts1000-series',
    name: 'ZKTeco mTS1000 Series',
    image: zktecoImageMap['mts1000-series'] || heroImage,
    hero: zktecoImageMap['mts1000-series'] || heroImage,
    brief: 'Tripod turnstile offering high throughput and arm-drop safety with LED guidance.',
    summaryFeatures: [
      'Bi-directional passage with LED pictograms',
      'Arm drop and wide accessory options',
      'Low power consumption for cost-effective deployments',
    ],
  },
  {
    slug: 'ts1000-pro-series',
    name: 'ZKTeco TS1000 Pro Series',
    image: zktecoImageMap['ts1000-pro-series'] || heroImage,
    hero: zktecoImageMap['ts1000-pro-series'] || heroImage,
    brief: 'Indoor tripod turnstiles delivering economical access management.',
    summaryFeatures: [
      'Widely deployed in offices, schools, and factories',
      'Budget-friendly with proven mechanics',
    ],
  },
];

const cameModels = [
  {
    slug: 'came-500e-tripod',
    name: 'CAME 500E Tripod',
    image: cameImageMap['came-500e-tripod'] || heroImage,
    hero: cameImageMap['came-500e-tripod'] || heroImage,
    brief: 'Bidirectional electromechanical tripod with optional motor drive and arm-drop safety.',
    summaryFeatures: [
      'Structure and arms in AISI 304 steel with optional AISI 316 or painted finish',
      'Choose fixed-arm or drop-arm configurations with side status indicators',
      'Allows free passage during outages: free rotation or horizontal arm drop',
    ],
  },
  {
    slug: 'came-700-en1-tripod',
    name: 'CAME 700 EN1 Tripod',
    image: cameImageMap['came-700-en1-tripod'] || heroImage,
    hero: cameImageMap['came-700-en1-tripod'] || heroImage,
    brief: 'Electromechanical or motor-driven tripod with configurable emergency modes.',
    summaryFeatures: [
      'AISI 304 construction with optional AISI 316 or painted finish',
      'Available in single or double versions with side status indicators',
      'Supports free/free or optional free/locked emergency modes with I/O connectivity',
    ],
  },
  {
    slug: 'came-602-tripod',
    name: 'CAME 602 Tripod',
    image: cameImageMap['came-602-tripod'] || heroImage,
    hero: cameImageMap['came-602-tripod'] || heroImage,
    brief: 'Compact tripod with top-mounted passage indicator and optional drop arm.',
    summaryFeatures: [
      'Reduced footprint with stainless AISI 304 structure and arms',
      'Status indicators on the sides plus overhead passage indicator',
      'Electromechanical or motor-driven versions with RS232/RS485/TCP/IP modules',
    ],
  },
  {
    slug: 'came-702-rn1-tripod',
    name: 'CAME 702 RN1 Tripod',
    image: cameImageMap['came-702-rn1-tripod'] || heroImage,
    hero: cameImageMap['came-702-rn1-tripod'] || heroImage,
    brief: 'Motor-driven tripod with integrated drop arm and premium Italian styling.',
    summaryFeatures: [
      'AISI 304 structure with optional AISI 316 or painted finish',
      'Side status indicators and top passage indicator guide users',
      'Emergency drop arm clears the lane during power loss with modular connectivity',
    ],
  },
  {
    slug: 'came-saloon-swing',
    name: 'CAME Saloon Swing Gate',
    image: cameImageMap['came-saloon-swing'] || heroImage,
    hero: cameImageMap['came-saloon-swing'] || heroImage,
    brief: 'Modular swing gate with luminous crown and paired operation up to 2450 mm.',
    summaryFeatures: [
      'Satin stainless look frame ready for Ø40 mm barrier integration',
      'Supports single or paired master/slave setup with activation radars',
      'Free passage during outages with buzzer and status lighting',
    ],
  },
  {
    slug: 'came-705-en1-swing',
    name: 'CAME 705 EN1 Swing Gate',
    image: cameImageMap['came-705-en1-swing'] || heroImage,
    hero: cameImageMap['came-705-en1-swing'] || heroImage,
    brief: 'Motor-driven swing turnstile with wide acrylic lane for accessible entry.',
    summaryFeatures: [
      'AISI 304 structure with optional AISI 316 or painted finishes',
      'Status and passage indicators on cabinet and top',
      'Free/free emergency mode with optional free/locked logic',
    ],
  },
  {
    slug: 'came-605-swing',
    name: 'CAME 605 Swing Gate',
    image: cameImageMap['came-605-swing'] || heroImage,
    hero: cameImageMap['came-605-swing'] || heroImage,
    brief: 'Compact swing turnstile with motor drive and configurable lane widths.',
    summaryFeatures: [
      '450 mm or 900 mm passage widths, custom options available',
      'Status indicators on sides plus top-mounted passage icon',
      'Free passage on power loss with dry contact integrations',
    ],
  },
  {
    slug: 'came-gl-a1',
    name: 'CAME GL A1 Swing Gate',
    image: cameImageMap['came-gl-a1'] || heroImage,
    hero: cameImageMap['came-gl-a1'] || heroImage,
    brief: 'Elegant glass swing gate with luminous crown and premium finishes.',
    summaryFeatures: [
      'AISI 304 structure with optional AISI 316, polished black, or bronze finish',
      '10 mm tempered glass gate in 550 or 900 mm widths',
      'Luminous crown signals movement and operating status',
    ],
  },
  {
    slug: 'came-gl-b1',
    name: 'CAME GL B1 Swing Gate',
    image: cameImageMap['came-gl-b1'] || heroImage,
    hero: cameImageMap['came-gl-b1'] || heroImage,
    brief: 'Outdoor-rated glass swing turnstile with stainless tubular gate.',
    summaryFeatures: [
      'Designed for outdoor use with luminous warning crown',
      'Ø27 mm stainless tubular gate with acrylic panel in 550 or 900 mm lengths',
      'Motor-driven with configurable operating modes via onboard display',
    ],
  },
  {
    slug: 'came-gl-a2',
    name: 'CAME GL A2 Swing Gate',
    image: cameImageMap['came-gl-a2'] || heroImage,
    hero: cameImageMap['came-gl-a2'] || heroImage,
    brief: 'Bidirectional glass swing gate with luminous crown for upscale lobbies.',
    summaryFeatures: [
      'Elegant AISI 304 frame with optional premium finishes',
      'Tempered glass gate 550 or 900 mm wide with custom sizing',
      'Automatic opening in chosen direction during outages',
    ],
  },
  {
    slug: 'came-btx-300-n1',
    name: 'CAME BTX 300 N1 Full-Height Turnstile',
    image: cameImageMap['came-btx-300-n1'] || heroImage,
    hero: cameImageMap['came-btx-300-n1'] || heroImage,
    brief: 'Full-height three-sector turnstile with illuminated passage area.',
    summaryFeatures: [
      'Electromechanical or optional motor drive with outdoor-rated build',
      'Status and passage indicators plus upper LED lighting',
      'Free rotation during power loss with selectable lock direction',
    ],
  },
  {
    slug: 'came-btx-400-n1',
    name: 'CAME BTX 400 N1 Full-Height Turnstile',
    image: cameImageMap['came-btx-400-n1'] || heroImage,
    hero: cameImageMap['came-btx-400-n1'] || heroImage,
    brief: 'Four-sector full-height turnstile supplied with comprehensive status guidance.',
    summaryFeatures: [
      'Single or double configuration with electromechanical or motorised drive',
      'Front status and passage indicators with overhead LED lighting',
      'Free movement during outages with optional directional release control',
    ],
  },
  {
    slug: 'came-twister',
    name: 'CAME Twister Tripod',
    image: cameImageMap['came-twister'] || heroImage,
    hero: cameImageMap['came-twister'] || heroImage,
    brief: 'Italian-built tripod turnstile designed for corporate reception areas.',
    summaryFeatures: [
      'Stainless-steel cabinet with modular reader integration',
      'Fail-safe drop arm and emergency override',
      'Optional LED pictograms and advanced controllers',
    ],
  },
  {
    slug: 'came-saloon40',
    name: 'CAME Saloon40 Swing Gate',
    image: cameImageMap['came-saloon40'] || heroImage,
    hero: cameImageMap['came-saloon40'] || heroImage,
    brief: 'Motorised swing gate suited for premium entrances and accessible lanes.',
    summaryFeatures: [
      'Glass swing wings with elegant finish options',
      'Silent motor with encoder-based control',
      'Integrates with access control and visitor systems',
    ],
  },
];

const catalogLists = {
  zkteco: zktecoModels,
  came: cameModels,
};

const brandPages = {
  zkteco: {
    hero: {
      title: 'ZKTeco Turnstiles',
      description: 'Comprehensive tripod lineup with biometrics, RFID, and QR verification.',
      bg: heroImage,
      breadcrumb: 'Home / Products / Turnstiles & Speed Gates / ZKTeco',
    },
    logo: zktecoLogo,
    keyBenefits: [
      { icon: 'Users', title: 'High Throughput', desc: 'Optimised for busy lobbies with bi-directional flow.' },
      { icon: 'Shield', title: 'Failsafe Safety', desc: 'Arms drop automatically on power loss or emergency.' },
      { icon: 'Cpu', title: 'Integrated', desc: 'Works with ZKBio CVAccess and third-party ACS.' },
    ],
    models: catalogLists.zkteco,
  },
  came: {
    hero: {
      title: 'CAME Entrance Control',
      description: 'Italian-engineered turnstiles and swing gates for premium architecture.',
      bg: heroImage,
      breadcrumb: 'Home / Products / Turnstiles & Speed Gates / CAME',
    },
    logo: cameLogo,
    keyBenefits: [
      { icon: 'Sparkles', title: 'Aesthetics', desc: 'Refined finishes that elevate lobby experiences.' },
      { icon: 'Wrench', title: 'Engineered', desc: 'Robust mechanics with encoder-based control.' },
      { icon: 'PlugZap', title: 'Integrations', desc: 'Ready for access control, visitor, and fire systems.' },
    ],
    models: catalogLists.came,
  },
};

const modelPages = {
  zkteco: {
    'saturn-t1000': buildZktecoModel({
      slug: 'saturn-t1000',
      name: 'ZKTeco Saturn-T1000',
      gallery: [zktecoImageMap['saturn-t1000'] || heroImage],
      overview:
        'Saturn-T1000 is a drop-arm tripod delivering quiet, value-driven access control with embedded biometrics and QR scanning.',
      features: [
        'Bi-directional operation with adjustable arm modes',
        'Arms drop automatically during power loss or emergencies',
        'Supports face recognition, RFID, and static/dynamic QR codes',
        'Integrates with ZKBio CVAccess and ZKBio CVSecurity',
      ],
      specs: {
        Type: 'Drop-arm tripod',
        Materials: 'Cabinet: SPCC steel (powder coated); Arm: SUS304 stainless steel',
        LaneWidth: '550 mm',
        Throughput: 'Up to 25 persons/min',
        Noise: '< 65 dB',
        Operation: 'Bi-directional; arm drop on power loss/emergency',
        Authentication: 'Face, RFID, QR (static & dynamic)',
        Integrations: 'ZKBio CVAccess, ZKBio CVSecurity',
      },
    }),
    'ts2000-plus-series': buildZktecoModel({
      slug: 'ts2000-plus-series',
      name: 'ZKTeco TS2000 Plus Series',
      gallery: [zktecoImageMap['ts2000-plus-series'] || heroImage],
      overview:
        'Bridge-type tripod turnstiles built entirely from SUS304 stainless steel for indoor or outdoor deployments.',
      features: [
        'Bi-directional movement with automatic arm drop',
        'Under-mount reader supports RFID and QR scanning',
        'Simple installation with optimised verification area',
      ],
      specs: {
        Type: 'Bridge-type tripod',
        Materials: 'SUS304 stainless steel',
        Operation: 'Bi-directional (standard); arm drop on power-off/emergency',
        Authentication: 'RFID, QR (under-mount readers)',
        Integrations: 'Access control systems',
      },
    }),
    'ts1000-plus-series': buildZktecoModel({
      slug: 'ts1000-plus-series',
      name: 'ZKTeco TS1000 Plus Series',
      gallery: [zktecoImageMap['ts1000-plus-series'] || heroImage],
      overview:
        'Compact vertical tripod turnstiles suitable for schools, museums, factories, and gyms needing dependable entry control.',
      features: [
        'SUS304 stainless-steel cabinet',
        'Bi-directional passage with auto arm drop',
      ],
      specs: {
        Type: 'Vertical tripod',
        Materials: 'SUS304 stainless steel',
        Operation: 'Bi-directional (standard); arm drop on power-off/emergency',
      },
    }),
    'ts1000m-pro': buildZktecoModel({
      slug: 'ts1000m-pro',
      name: 'ZKTeco TS1000M Pro',
      gallery: [zktecoImageMap['ts1000m-pro'] || heroImage],
      overview:
        'Professional tripod variant delivering straightforward, economical entry control for offices and public buildings.',
      features: [
        'Indoor-friendly tripod with safety sensors',
        'Cost-effective mechanics with low power draw',
      ],
      specs: {
        Type: 'Tripod (Pro series)',
        Operation: 'Safe indoor access with classic design',
      },
    }),
    ts5000a: buildZktecoModel({
      slug: 'ts5000a',
      name: 'ZKTeco TS5000A',
      gallery: [zktecoImageMap.ts5000a || heroImage],
      overview:
        'Automatic stainless-steel tripod that delivers smooth, silent throughput for compact workspaces.',
      features: [
        'Automatic tripod control with low noise',
        'Low power consumption electronics',
      ],
      specs: {
        Type: 'Automatic tripod',
        Materials: 'Stainless steel',
      },
    }),
    'ts2000-pro-series': buildZktecoModel({
      slug: 'ts2000-pro-series',
      name: 'ZKTeco TS2000 Pro Series',
      gallery: [zktecoImageMap['ts2000-pro-series'] || heroImage],
      overview:
        'Indoor tripod series delivering economical access control for office buildings.',
      features: [
        'Reliable tripod drive with safety sensors',
        'Optimised for indoor applications',
      ],
      specs: {
        Type: 'Tripod (Pro series)',
        Operation: 'Indoor use; economical office deployment',
      },
    }),
    'mts1000-series': buildZktecoModel({
      slug: 'mts1000-series',
      name: 'ZKTeco mTS1000 Series',
      gallery: [zktecoImageMap['mts1000-series'] || heroImage],
      overview:
        'High-throughput tripod with LED pictograms, bi-directional passage, and arm-drop safety.',
      features: [
        'Bi-directional control with arm drop function',
        'LED pictograms that guide flow',
        'Low power consumption and accessory support',
      ],
      specs: {
        Type: 'Tripod',
        Materials: 'SUS304 stainless steel',
        Throughput: 'Both directions (high)',
      },
    }),
    'ts1000-pro-series': buildZktecoModel({
      slug: 'ts1000-pro-series',
      name: 'ZKTeco TS1000 Pro Series',
      gallery: [zktecoImageMap['ts1000-pro-series'] || heroImage],
      overview:
        'Entry-level tripod range chosen for wide deployment in offices and public buildings.',
      features: [
        'Economical solution for controlled access',
        'Indoor use with reliable tripod mechanism',
      ],
      specs: {
        Type: 'Tripod (Pro series)',
        Operation: 'Indoor use',
      },
    }),
  },
  came: {
    'came-500e-tripod': buildCameModel({
      slug: 'came-500e-tripod',
      name: 'CAME 500E Tripod',
      gallery: [cameImageMap['came-500e-tripod'] || heroImage],
      overview:
        'CAME 500E is a compact tripod turnstile available in electromechanical or motorised versions with fixed or drop arms for emergency egress.',
      features: [
        'Single or double cabinet with electromechanical drive and optional motorisation',
        'Side-mounted status indicators support intuitive bi-directional flow',
        'Fixed-arm and drop-arm variants handle everyday and emergency scenarios',
        'Electronic control board with display for parameter configuration and modes',
      ],
      specs: {
        Type: 'Tripod turnstile',
        Drive: 'Electromechanical standard; motorised optional',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        Configurations: 'Single or double cabinet',
        Indicators: 'Side status indicators',
        FailSafe: 'Free rotation on power loss or horizontal arm drop (drop-arm version)',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-700-en1-tripod': buildCameModel({
      slug: 'came-700-en1-tripod',
      name: 'CAME 700 EN1 Tripod',
      gallery: [cameImageMap['came-700-en1-tripod'] || heroImage],
      overview:
        'CAME 700 EN1 combines Italian styling with configurable emergency modes and modular connectivity for access control integrations.',
      features: [
        'Electromechanical or optional motor-driven cabinet for bi-directional throughput',
        'Single or double versions with side status indicators',
        'Electronic board with integrated display simplifies operating mode setup',
        'Emergency free/free mode as standard with optional free/locked logic',
      ],
      specs: {
        Type: 'Tripod turnstile',
        Drive: 'Electromechanical or motor-driven (optional)',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        Configurations: 'Single or double cabinet',
        Indicators: 'Side status indicators',
        EmergencyMode: 'Free/free standard; optional free/locked',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-602-tripod': buildCameModel({
      slug: 'came-602-tripod',
      name: 'CAME 602 Tripod',
      gallery: [cameImageMap['came-602-tripod'] || heroImage],
      overview:
        'CAME 602 delivers a reduced-footprint tripod with top-mounted passage indicators and optional drop arm for evacuation.',
      features: [
        'Compact stainless-steel build fits tight lobbies and corridors',
        'Status indicators on the sides with overhead passage indicator',
        'Available with fixed arms or drop-arm system for emergency clearance',
        'Electronic board with display manages parameters and operating mode',
      ],
      specs: {
        Type: 'Tripod turnstile',
        Drive: 'Electromechanical or motor-driven (optional)',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        Indicators: 'Side status and top passage indicators',
        Configurations: 'Single or double cabinet',
        FailSafe: 'Free rotation or arm drop during power outage',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-702-rn1-tripod': buildCameModel({
      slug: 'came-702-rn1-tripod',
      name: 'CAME 702 RN1 Tripod',
      gallery: [cameImageMap['came-702-rn1-tripod'] || heroImage],
      overview:
        'CAME 702 RN1 is a motor-driven tripod turnstile with premium finishes, integrated drop arm, and comprehensive status guidance.',
      features: [
        'Motor-driven operation delivers smooth, bi-directional access',
        'Side status indicators and top passage indicator provide clear user cues',
        'Drop arm system lowers automatically during emergencies to clear the lane',
        'Electronic board with display streamlines parameter and mode configuration',
      ],
      specs: {
        Type: 'Tripod turnstile',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        Indicators: 'Side status and top passage indicators',
        FailSafe: 'Emergency drop arm clears passage on power loss',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-saloon-swing': buildCameModel({
      slug: 'came-saloon-swing',
      name: 'CAME Saloon Swing Gate',
      gallery: [cameImageMap['came-saloon-swing'] || heroImage],
      overview:
        'CAME Saloon swing gates deliver modular, radar-ready access control with luminous status cues and wide passages up to 2450 mm in paired mode.',
      features: [
        'Satin stainless-effect structure prepared for Ø40 mm CAME barriers',
        'Houses one or two activation radars with onboard control panel and display',
        'Master/slave configuration supports paired leaves for large openings',
        'Luminous crown and buzzer alert during movement or forced entry attempts',
      ],
      specs: {
        Type: 'Motor-driven swing gate',
        Drive: 'Motor-driven bidirectional',
        Materials: 'Satin stainless steel effect (optional painted finishes)',
        PassageWidth: 'Up to 2450 mm (paired leaves)',
        Controls: 'Integrated control board with buttons and display',
        Indicators: 'Luminous crown with open/closed feedback via clean contacts',
        Connectivity: 'Clean contact I/O; optional CAME control boards (up to 150 users)',
        Emergency: 'Free passage in either direction during power outages',
      },
    }),
    'came-705-en1-swing': buildCameModel({
      slug: 'came-705-en1-swing',
      name: 'CAME 705 EN1 Swing Gate',
      gallery: [cameImageMap['came-705-en1-swing'] || heroImage],
      overview:
        'CAME 705 EN1 is a motor-driven swing turnstile with acrylic gate panels and accessibility-friendly lane widths.',
      features: [
        'Compact cabinet with brushed AISI 304 steel, optional AISI 316 or painted finish',
        'Status indicators on the sides with top-mounted passage pictogram',
        'Bidirectional operation with free/free emergency mode (optional free/locked)',
        'Electronic board with display simplifies parameter setup and diagnostics',
      ],
      specs: {
        Type: 'Motor-driven swing turnstile',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        PassageWidth: '450 mm or 900 mm (custom widths available)',
        Gate: 'Tubular stainless frame with acrylic panel',
        Configurations: 'Single or double versions',
        Indicators: 'Side status indicators and top passage indicator',
        EmergencyMode: 'Free/free standard; optional free/locked',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-605-swing': buildCameModel({
      slug: 'came-605-swing',
      name: 'CAME 605 Swing Gate',
      gallery: [cameImageMap['came-605-swing'] || heroImage],
      overview:
        'CAME 605 provides a space-saving swing turnstile with configurable gate widths and motor-driven convenience.',
      features: [
        'Reduced footprint cabinet ideal for retrofits and tight corridors',
        'Status indicators on the sides with passage indicator on the top cap',
        'Compatible with third-party access control via dry contacts and optional communication modules',
        'Motor-driven bidirectional operation with free passage during outages',
      ],
      specs: {
        Type: 'Motor-driven swing turnstile',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316 or painted optional)',
        PassageWidth: '450 mm or 900 mm (custom widths available)',
        Configurations: 'Single or double versions',
        Indicators: 'Side status indicators and top passage indicator',
        EmergencyMode: 'Free/free standard; optional free/locked',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-gl-a1': buildCameModel({
      slug: 'came-gl-a1',
      name: 'CAME GL A1 Swing Gate',
      gallery: [cameImageMap['came-gl-a1'] || heroImage],
      overview:
        'CAME GL A1 combines a luminous crown with tempered glass wings for premium, accessibility-ready lanes.',
      features: [
        'Elegant design with brushed AISI 304 steel and optional premium finishes',
        '10 mm tempered glass gate in 550 mm or 900 mm widths with bespoke sizing',
        'Luminous crown signals movement and operational status',
        'Electronic board with display for mode configuration and diagnostics',
      ],
      specs: {
        Type: 'Motor-driven swing gate',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316, polished black, or bronze optional)',
        Gate: '10 mm tempered glass (550 or 900 mm standard)',
        Indicators: 'Luminous crown with status signalling',
        Accessibility: 'Suitable for people with reduced mobility',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
        Emergency: 'Automatic opening in selected direction during outages',
      },
    }),
    'came-gl-b1': buildCameModel({
      slug: 'came-gl-b1',
      name: 'CAME GL B1 Swing Gate',
      gallery: [cameImageMap['came-gl-b1'] || heroImage],
      overview:
        'GL B1 is an outdoor-ready motor-driven swing gate marrying stainless tubular gates with luminous guidance.',
      features: [
        'Engineered for outdoor installation with premium stainless construction',
        'Ø27 mm tubular gate with acrylic panel in 550 or 900 mm lengths',
        'Luminous crown and status indicators ensure clear user guidance',
        'Electronic board with display supports parameter tuning and operating modes',
      ],
      specs: {
        Type: 'Motor-driven swing gate',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316, polished black, or bronze optional)',
        Gate: 'Ø27 mm tubular stainless gate with acrylic panel (550 or 900 mm)',
        Indicators: 'Luminous crown plus status and passage indicators',
        Installation: 'Outdoor ready',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
        Emergency: 'Automatic opening in chosen direction during outages',
      },
    }),
    'came-gl-a2': buildCameModel({
      slug: 'came-gl-a2',
      name: 'CAME GL A2 Swing Gate',
      gallery: [cameImageMap['came-gl-a2'] || heroImage],
      overview:
        'GL A2 delivers luminous, bidirectional glass swing gates crafted for premium entrances and accessible lanes.',
      features: [
        'Brushed stainless chassis with optional AISI 316, polished black, or bronze finishes',
        '10 mm tempered glass gate with standard 550 or 900 mm widths and bespoke options',
        'Luminous crown communicates motion and status at a glance',
        'Electronic board with display manages configuration and operating modes',
      ],
      specs: {
        Type: 'Motor-driven swing gate',
        Drive: 'Motor-driven bidirectional',
        Materials: 'AISI 304 stainless steel (AISI 316, polished black, or bronze optional)',
        Gate: '10 mm tempered glass (550 or 900 mm standard)',
        Indicators: 'Luminous crown and status indicators',
        Accessibility: 'Suitable for people with reduced mobility',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
        Emergency: 'Automatic opening in chosen direction during outages',
      },
    }),
    'came-btx-300-n1': buildCameModel({
      slug: 'came-btx-300-n1',
      name: 'CAME BTX 300 N1 Full-Height Turnstile',
      gallery: [cameImageMap['came-btx-300-n1'] || heroImage],
      overview:
        'BTX 300 N1 is a three-sector full-height turnstile with LED-lit passage area for demanding outdoor perimeters.',
      features: [
        'Electromechanical drive standard with optional motorisation',
        'Front-mounted status and passage indicators with upper LED lighting',
        'Allows free rotor movement during outages with optional directional release',
        'Available in single or double configurations with multiple finish options',
      ],
      specs: {
        Type: 'Full-height turnstile (three-sector)',
        Drive: 'Electromechanical (motor-driven optional)',
        Materials: 'Painted or AISI 304 stainless steel (AISI 316 optional)',
        Configurations: 'Single or double versions',
        Indicators: 'Status and passage indicators with top LED lighting',
        Installation: 'Outdoor ready',
        EmergencyMode: 'Free rotation both directions (optional one-way lock)',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-btx-400-n1': buildCameModel({
      slug: 'came-btx-400-n1',
      name: 'CAME BTX 400 N1 Full-Height Turnstile',
      gallery: [cameImageMap['came-btx-400-n1'] || heroImage],
      overview:
        'BTX 400 N1 extends CAME’s full-height range with four-sector rotors and flexible single or double lane deployments.',
      features: [
        'Electromechanical drive with optional motorised upgrade for smooth rotation',
        'Status and passage indicators on the front with overhead LED lighting',
        'Free movement during outages with optional directional release control',
        'Offered in painted or stainless finishes with single or double cabinets',
      ],
      specs: {
        Type: 'Full-height turnstile (four-sector)',
        Drive: 'Electromechanical (motor-driven optional)',
        Materials: 'Painted or AISI 304 stainless steel (AISI 316 optional)',
        Configurations: 'Single or double versions',
        Indicators: 'Front status and passage indicators with top LED lighting',
        Installation: 'Outdoor ready',
        EmergencyMode: 'Free rotation both directions (optional one-way lock)',
        Connectivity: 'Dry contact I/O; optional RS232/RS485/TCP/IP modules',
      },
    }),
    'came-twister': buildCameModel({
      slug: 'came-twister',
      name: 'CAME Twister Tripod',
      gallery: [cameImageMap['came-twister'] || heroImage],
      overview:
        'Twister is CAME’s flagship tripod turnstile combining Italian design with modular readers for corporate entries.',
      features: [
        'Stainless-steel chassis with modular integration plates',
        'Encoder-based drop arm for safety compliance',
        'Optional LED pictograms and advanced controllers',
      ],
      specs: {
        Type: 'Tripod turnstile',
        Materials: 'Stainless steel enclosure',
        Operation: 'Fail-safe drop arm, bi-directional',
      },
    }),
    'came-saloon40': buildCameModel({
      slug: 'came-saloon40',
      name: 'CAME Saloon40 Swing Gate',
      gallery: [cameImageMap['came-saloon40'] || heroImage],
      overview:
        'Saloon40 provides motorised swing access lanes with premium finishes and silent motion.',
      features: [
        'Glass swing wings with custom finish options',
        'Silent motor control with encoders',
        'Integrates with access control and visitor systems',
      ],
      specs: {
        Type: 'Motorised swing gate',
        Operation: 'Bidirectional with encoder motor',
        Applications: 'Premium entrances, accessible lanes',
      },
    }),
  },
};

const categoryPage = {
  hero: {
    title: 'Turnstiles & Speed Gates',
    description:
      'From tripod turnstiles to elegant optical speed gates with access control integration.',
    bg: heroImage,
    breadcrumb: 'Home / Products / Turnstiles & Speed Gates',
    cta: { label: 'Request Site Visit', to: '/contact' },
  },
  overview: {
    heading: 'Control Entry with Style',
    icon: DoorOpen,
    intro:
      'Balance throughput with security for offices, campuses, and factories. Integrates with readers and visitor systems.',
    bulletsLeft: ['Tripod, swing, flap', 'Optical IR sensors', 'Fail-safe/secure modes', 'Stainless steel construction'],
    bulletsRight: ['Reader/bio mounting', 'Anti-tailgating', 'Emergency drop-arm', 'Onsite installation'],
    keyBenefits: [
      { icon: 'Users', title: 'Throughput', desc: 'Fast passage with IR sensors and drop arms.' },
      { icon: 'Shield', title: 'Secure', desc: 'Anti-tailgating logic with alarm outputs.' },
      { icon: 'Sparkles', title: 'Aesthetics', desc: 'Glass and steel finishes suit modern lobbies.' },
    ],
  },
  brands: [
    {
      slug: 'zkteco',
      name: 'ZKTeco',
      logo: zktecoLogo,
      blurb: 'Cost-effective tripod barriers with extensive authentication support.',
      highlights: ['Tripod portfolio', 'Biometric and QR integration', 'Fail-safe drop arms'],
      industries: ['Corporate', 'Factories', 'Education'],
      preview: [{ name: 'Saturn-T1000', image: zktecoModels[0].image }],
      to: '/products/turnstile-and-speed-gates/zkteco',
    },
    {
      slug: 'came',
      name: 'CAME',
      logo: cameLogo,
      blurb: 'Italian-engineered turnstiles and swing gates for premium entrances.',
      highlights: ['Premium finishes', 'Accessible swing lanes', 'Encoder-based control'],
      industries: ['Enterprise lobbies', 'Public infrastructure'],
      preview: [{ name: cameModels[0].name, image: cameModels[0].image }],
      to: '/products/turnstile-and-speed-gates/came',
    },
  ],
};

const seo = {
  title: 'Turnstiles & Speed Gates | ZKTeco & CAME | VertiLinks',
  description:
    'Explore ZKTeco and CAME turnstiles, tripod barriers, and swing gates with biometrics, RFID, and access control integration.',
  canonical: '/products/turnstile-and-speed-gates',
};

export default {
  slug: 'turnstile-and-speed-gates',
  title: 'Turnstile & Speed Gates',
  categoryPage,
  brandPages,
  catalogLists,
  modelPages,
  seo,
};

function buildZktecoModel({ slug, name, gallery, overview, features, specs }) {
  return {
    hero: {
      title: name,
      description: overview,
      bg: heroImage,
      breadcrumb: `Home / Products / Turnstiles & Speed Gates / ZKTeco / ${name}`,
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery,
    overview,
    features,
    specs,
    downloads: [],
    related: cameModels.map((model) => ({
      href: `/products/turnstile-and-speed-gates/came/${model.slug}`,
      name: model.name,
      image: model.image,
    })),
  };
}

function buildCameModel({ slug, name, gallery, overview, features, specs }) {
  return {
    hero: {
      title: name,
      description: overview,
      bg: heroImage,
      breadcrumb: `Home / Products / Turnstiles & Speed Gates / CAME / ${name}`,
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery,
    overview,
    features,
    specs,
    downloads: [],
    related: zktecoModels.map((model) => ({
      href: `/products/turnstile-and-speed-gates/zkteco/${model.slug}`,
      name: model.name,
      image: model.image,
    })),
  };
}
