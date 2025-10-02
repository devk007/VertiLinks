import images from '../images';
import { Clock } from 'lucide-react';

const timeAttendanceImages = images.products.timeAttendance || {};
const heroImage = timeAttendanceImages.hero || images.products.hero;
const zktecoImages = timeAttendanceImages.zkteco || {};
const timyImages = timeAttendanceImages.timy || {};

const zktecoLogo = zktecoImages.logo || heroImage;
const timyLogo = timyImages.logo || heroImage;

const zktecoImageMap = {
  'horus-h1': zktecoImages.horusH1,
  s922: zktecoImages.s922,
  ua300: zktecoImages.ua300,
  'horus-series': zktecoImages.horusSeries,
  'speedface-v5l-series': zktecoImages.speedFaceV5l,
  tf1700: zktecoImages.tf1700,
  f18: zktecoImages.f18,
  'biopro-sa40': zktecoImages.bioProSa40,
  'iface-880': zktecoImages.iface880,
  'biotime-95': zktecoImages.bioTime95,
};

const timyImageMap = {
  'tm-ai67fw': timyImages.tmAi67fw,
  'tm-ai24f': timyImages.tmAi24f,
  'tm-ai08fw': timyImages.tmAi08fw,
  'tm-ai26f': timyImages.tmAi26f,
  'tm-ai03': timyImages.tmAi03,
};

const zktecoModels = [
  {
    slug: 'horus-h1',
    name: 'ZKTeco Horus H1',
    image: zktecoImageMap['horus-h1'] || heroImage,
    hero: zktecoImageMap['horus-h1'] || heroImage,
    brief: 'Android 8 biometric terminal with 3D structured-light face recognition.',
    summaryFeatures: [
      '5-inch HD display with Android 8.1 platform',
      'Face, palm, and fingerprint authentication with anti-spoofing',
      'Dual cameras with Wi-Fi, 4G, and PoE connectivity options',
    ],
    link: 'https://www.zkteco.com/en/Android_Device/Horus_H1',
  },
  {
    slug: 's922',
    name: 'ZKTeco S922',
    image: zktecoImageMap.s922 || heroImage,
    hero: zktecoImageMap.s922 || heroImage,
    brief: 'Portable IP65 time attendance terminal engineered for harsh job sites.',
    summaryFeatures: [
      'Rugged handheld build with silicone protective cover',
      '8,000 fingerprint templates and 200,000 log capacity',
      '2.8-inch TFT display with GPRS, GPS, and USB connectivity',
    ],
    link: 'https://www.zkteco.com/en/PortableDevice/S922',
  },
  {
    slug: 'ua300',
    name: 'ZKTeco UA300',
    image: zktecoImageMap.ua300 || heroImage,
    hero: zktecoImageMap.ua300 || heroImage,
    brief: 'Standalone fingerprint time attendance terminal for SME deployments.',
    summaryFeatures: [
      '3,000 fingerprint templates with fast ZK optical sensor',
      '3-inch TFT display and intuitive UI',
      'TCP/IP, USB-host, and RS485 communication',
    ],
    link: 'https://www.zkteco.com/en/UAseries/UA300',
  },
  {
    slug: 'horus-series',
    name: 'ZKTeco Horus Series',
    image: zktecoImageMap['horus-series'] || heroImage,
    hero: zktecoImageMap['horus-series'] || heroImage,
    brief: 'Ultra-thin AI terminals with 3D face recognition and video intercom.',
    summaryFeatures: [
      '3D structured-light face detection with thermal option',
      'Wide-angle dual camera supporting liveness detection',
      'Modular communication: Wi-Fi, 4G, Bluetooth, and PoE',
    ],
    link: 'https://www.zkteco.com/en/Android_Device/Horus',
  },
  {
    slug: 'speedface-v5l-series',
    name: 'ZKTeco SpeedFace-V5L Series',
    image: zktecoImageMap['speedface-v5l-series'] || heroImage,
    hero: zktecoImageMap['speedface-v5l-series'] || heroImage,
    brief: 'Contactless AI terminal combining face, palm, and fingerprint recognition.',
    summaryFeatures: [
      'Up to 50,000 face templates with palm and fingerprint support',
      '3-in-1 biometric authentication with mask detection',
      'Multiple I/O relays for door, alarm, and Wiegand integration',
    ],
    link: 'https://www.zkteco.com/en/HybridBiometric4ZM/SpeedFace-V5L-Series',
  },
  {
    slug: 'tf1700',
    name: 'ZKTeco TF1700',
    image: zktecoImageMap.tf1700 || heroImage,
    hero: zktecoImageMap.tf1700 || heroImage,
    brief: 'IP65 fingerprint terminal for outdoor access and attendance.',
    summaryFeatures: [
      'Weatherproof metal housing rated IP65',
      'Up to 3,000 fingerprint templates and 100,000 logs',
      'TCP/IP, RS485, and Wiegand support with relay output',
    ],
    link: 'https://www.zkteco.com/en/FingerprintAeH/TF1700',
  },
  {
    slug: 'f18',
    name: 'ZKTeco F18',
    image: zktecoImageMap.f18 || heroImage,
    hero: zktecoImageMap.f18 || heroImage,
    brief: 'Classic fingerprint access and attendance reader with sleek design.',
    summaryFeatures: [
      'Fast ZKFinger VX10.0 algorithm for accurate matching',
      '2,000 fingerprint templates and 90,000 event logs',
      'TCP/IP, RS485, USB-host, and Wiegand connectivity',
    ],
    link: 'https://www.zkteco.com/en/FingerprintAeH/F18',
  },
  {
    slug: 'biopro-sa40',
    name: 'ZKTeco BioPro SA40',
    image: zktecoImageMap['biopro-sa40'] || heroImage,
    hero: zktecoImageMap['biopro-sa40'] || heroImage,
    brief: 'Fingerprint, RFID, and password terminal with cloud-ready firmware.',
    summaryFeatures: [
      'Multi-modal authentication including fingerprint and card',
      'Built-in Wi-Fi and TCP/IP for flexible deployments',
      'Supports BioTime SaaS integration',
    ],
    link: 'https://www.edatame.com/zkteco_biopro_sa40.html',
  },
  {
    slug: 'iface-880',
    name: 'ZKTeco iFace 880',
    image: zktecoImageMap['iface-880'] || heroImage,
    hero: zktecoImageMap['iface-880'] || heroImage,
    brief: 'Multi-biometric terminal with face, fingerprint, and palm recognition.',
    summaryFeatures: [
      '4.3-inch touchscreen with dual IR cameras',
      'Handles 3,000 face and 4,000 fingerprint templates',
      'Advanced anti-spoofing and optional Wi-Fi/GPRS',
    ],
    link: 'https://www.edatame.com/zkteco_iface880.html',
  },
  {
    slug: 'biotime-95',
    name: 'ZKTeco BioTime 9.5',
    image: zktecoImageMap['biotime-95'] || heroImage,
    hero: zktecoImageMap['biotime-95'] || heroImage,
    brief: 'Web-based time attendance and HR platform compatible with ZKTeco terminals.',
    summaryFeatures: [
      'Browser-based scheduling, approvals, and payroll exports',
      'Real-time device monitoring with push communication',
      'Multi-branch architecture with database redundancy',
    ],
    link: 'https://zkteco.me/BioTime%209.5',
  },
];

const timyModels = [
  {
    slug: 'tm-ai67fw',
    name: 'Timy TM-AI67FW',
    image: timyImageMap['tm-ai67fw'] || heroImage,
    hero: timyImageMap['tm-ai67fw'] || heroImage,
    brief: 'Waterproof dynamic face and fingerprint recognition terminal.',
    summaryFeatures: [
      'IP65 housing with anti-glare IPS display',
      'Dual-lens 3D cameras with 2,000 face capacity',
      'Supports fingerprint, RFID, and QR credentialing',
    ],
    link: 'https://sztimmy.net/products/tm-ai67fw-waterproof-dynamic-facefingerprint-recognition-terminal',
  },
  {
    slug: 'tm-ai24f',
    name: 'Timy TM-AI24F',
    image: timyImageMap['tm-ai24f'] || heroImage,
    hero: timyImageMap['tm-ai24f'] || heroImage,
    brief: 'Dynamic face and fingerprint terminal for lobby installations.',
    summaryFeatures: [
      '8-inch IPS touch display with wide-angle dual cameras',
      'AI algorithm supports face, fingerprint, and RFID',
      'Gigabit Ethernet, Wi-Fi, and Wiegand interfaces',
    ],
    link: 'https://sztimmy.net/products/tm-ai24f-dynamic-face-fingerprint-recognition-terminal',
  },
  {
    slug: 'tm-ai08fw',
    name: 'Timy TM-AI08FW',
    image: timyImageMap['tm-ai08fw'] || heroImage,
    hero: timyImageMap['tm-ai08fw'] || heroImage,
    brief: 'Compact face recognition device with optional temperature sensing.',
    summaryFeatures: [
      '7-inch IPS display with binocular camera',
      'Face, RFID, and optional QR access',
      'Wall, turnstile, or floor stand mounting options',
    ],
    link: 'https://sztimmy.net/products/tm-ai08fw-dynamic-face-recognition-terminal',
  },
  {
    slug: 'tm-ai26f',
    name: 'Timy TM-AI26F',
    image: timyImageMap['tm-ai26f'] || heroImage,
    hero: timyImageMap['tm-ai26f'] || heroImage,
    brief: 'Face and fingerprint hybrid terminal with multi-language UI.',
    summaryFeatures: [
      '2,000 face and 3,000 fingerprint templates',
      '2MP dual cameras with infrared fill light',
      'IP54 enclosure with relay, RS485, and Wiegand',
    ],
    link: 'https://sztimmy.net/products/tm-ai26f-dynamic-face-recognition-terminal',
  },
  {
    slug: 'tm-ai03',
    name: 'Timy TM-AI03',
    image: timyImageMap['tm-ai03'] || heroImage,
    hero: timyImageMap['tm-ai03'] || heroImage,
    brief: 'Entry-level dynamic face recognition terminal for SMB sites.',
    summaryFeatures: [
      '4.3-inch display with binocular live detection',
      'Supports face, RFID, and optional temperature module',
      'Relay, Wiegand, and USB interfaces for ACS integration',
    ],
    link: 'https://sztimmy.net/products/tm-ai03-dynamic-face-recognition-terminal',
  },
];

const catalogLists = {
  zkteco: zktecoModels,
  timy: timyModels,
};

const brandPages = {
  zkteco: {
    hero: {
      title: 'ZKTeco Time Attendance',
      description: 'Enterprise-grade biometric terminals covering rugged, desktop, and contactless deployments.',
      bg: heroImage,
      breadcrumb: 'Home / Products / Time Attendance / ZKTeco',
    },
    logo: zktecoLogo,
    keyBenefits: [
      { icon: 'Cpu', title: 'AI Biometrics', desc: '3D face, palm, and fingerprint anti-spoofing.' },
      { icon: 'Globe', title: 'Connectivity', desc: '4G, Wi-Fi, PoE, and push communications.' },
      { icon: 'Database', title: 'Scalability', desc: 'Handles thousands of users with BioTime platform.' },
    ],
    models: catalogLists.zkteco,
  },
  timy: {
    hero: {
      title: 'Timy Attendance Terminals',
      description: 'Dynamic face recognition terminals built for fast throughput and rugged environments.',
      bg: heroImage,
      breadcrumb: 'Home / Products / Time Attendance / Timy',
    },
    logo: timyLogo,
    keyBenefits: [
      { icon: 'Sparkles', title: 'Dynamic Face', desc: 'AI-powered detection with IR anti-spoofing.' },
      { icon: 'Shield', title: 'Rugged', desc: 'IP-rated housings for harsh deployments.' },
      { icon: 'PlugZap', title: 'Integrations', desc: 'Relay, RS485, and Wiegand interfaces ready for ACS.' },
    ],
    models: catalogLists.timy,
  },
};

const categoryPage = {
  hero: {
    title: 'Time Attendance Devices',
    description:
      'Deploy biometrics, RFID, and face readers for accurate workforce attendance with cloud-ready integrations.',
    bg: heroImage,
    breadcrumb: 'Home / Products / Time Attendance',
    cta: { label: 'Request Demo', to: '/contact' },
  },
  overview: {
    heading: 'Automate Workforce Accountability',
    icon: Clock,
    intro:
      'From rugged construction terminals to AI-driven lobby readers, choose the devices that match your compliance goals and environment.',
    bulletsLeft: ['Face, fingerprint, palm', 'Cloud push data', 'IP54–IP65 enclosures', 'PoE & 4G options'],
    bulletsRight: ['Visitor screening', 'Temperature add-ons', 'Door control I/O', 'BioTime compatibility'],
    keyBenefits: [
      { icon: 'Users', title: 'Frictionless', desc: 'Speed up lines with sub-second verification.' },
      { icon: 'ShieldCheck', title: 'Compliant', desc: 'Accurate logs for audits and payroll.' },
      { icon: 'Network', title: 'Connected', desc: 'Integrate with HR, payroll, and access control.' },
    ],
  },
  brands: [
    {
      slug: 'zkteco',
      name: 'ZKTeco',
      logo: zktecoLogo,
      blurb: 'Full spectrum of fingerprint, palm, and face terminals with BioTime software ecosystem.',
      highlights: ['Hybrid biometrics', 'Rugged & lobby options', 'BioTime compatibility'],
      industries: ['Construction', 'Corporate', 'Government'],
      preview: [{ name: zktecoModels[0].name, image: zktecoModels[0].image }],
      to: '/products/time-attendance/zkteco',
    },
    {
      slug: 'timy',
      name: 'Timy',
      logo: timyLogo,
      blurb: 'Dynamic face recognition terminals with weatherproof builds and fast AI matching.',
      highlights: ['Dynamic face', 'IP-rated housings', 'Rich I/O'],
      industries: ['Industrial', 'Education', 'Healthcare'],
      preview: [{ name: timyModels[0].name, image: timyModels[0].image }],
      to: '/products/time-attendance/timy',
    },
  ],
};

const modelPages = {
  zkteco: {
    'horus-h1': buildZktecoModel({
      slug: 'horus-h1',
      name: 'ZKTeco Horus H1',
      overview:
        'Horus H1 is an Android 8-based AI terminal marrying 3D structured-light face recognition, palm vein, and fingerprint verification in a compact body.',
      features: [
        '5-inch capacitive HD screen with Gorilla Glass for public use areas',
        '3D structured-light and IR camera pair detect live faces even in low light',
        'Supports face, fingerprint, palm, RFID, and QR codes with anti-spoofing',
        'Wi-Fi, 4G, Ethernet, and Bluetooth ensure flexible connectivity',
        'Built-in microphone and speaker enable video intercom workflows',
      ],
      specs: {
        Authentication: 'Face, fingerprint, palm, RFID, PIN, QR',
        Display: '5-inch 720p IPS',
        Processor: 'Quad-core ARM, Android 8.1 OS',
        Storage: '8 GB eMMC, 1 GB RAM',
        Connectivity: 'Ethernet, Wi-Fi, 4G (optional), Bluetooth, USB',
        Temperature: '-20 °C to 60 °C',
      },
      link: 'https://www.zkteco.com/en/Android_Device/Horus_H1',
    }),
    s922: buildZktecoModel({
      slug: 's922',
      name: 'ZKTeco S922',
      overview:
        'S922 is a rugged IP65 biometric terminal with battery power designed for construction, mining, and logistics sites requiring portable attendance.',
      features: [
        'Sealed silicone casing protects against water, dust, and impacts',
        'Integrated handle and 7600 mAh battery for all-day portability',
        'GPRS, TCP/IP, USB-host, and GPS for data transfer and location tagging',
        'Stores 8,000 fingerprint templates and 200,000 transactions locally',
        'Built-in printer support for onsite attendance slips',
      ],
      specs: {
        Templates: '8,000 fingerprints, 10,000 cards',
        Logs: '200,000 transactions',
        Display: '2.8-inch TFT',
        Connectivity: 'TCP/IP, RS232/485, USB-host, GPRS (optional)',
        Battery: 'Built-in 7600 mAh',
        Rating: 'IP65',
      },
      link: 'https://www.zkteco.com/en/PortableDevice/S922',
    }),
    ua300: buildZktecoModel({
      slug: 'ua300',
      name: 'ZKTeco UA300',
      overview:
        'UA300 delivers dependable fingerprint attendance for SMB offices with simple menu navigation and multiple connectivity choices.',
      features: [
        '3-inch TFT display with shortcut icons for quick operations',
        'Stores 3,000 fingerprint templates and 100,000 logs',
        'USB-host allows off-network data downloads',
        'Built-in bell schedules and SSR reports',
        'Compatible with BioTime and attendance middleware',
      ],
      specs: {
        Templates: '3,000 fingerprints, 10,000 cards',
        Logs: '100,000 events',
        Display: '3-inch TFT',
        Connectivity: 'TCP/IP, RS485, USB-host',
        Power: 'DC 5 V 2 A',
      },
      link: 'https://www.zkteco.com/en/UAseries/UA300',
    }),
    'horus-series': buildZktecoModel({
      slug: 'horus-series',
      name: 'ZKTeco Horus Series',
      overview:
        'The Horus family offers ultra-thin terminals with edge AI for premium lobbies, featuring video intercom, 3D face matching, and optional temperature modules.',
      features: [
        '4G, Wi-Fi, and Bluetooth modules for flexible deployment',
        'Support for ZKBioSecurity and BioTime via push SDKs',
        'Optional thermal camera and QR reader for wellness screening',
        'Dual cameras with HDR imaging manage challenging lighting',
        'Slim profile fits onto turnstiles, pedestals, and wall mounts',
      ],
      specs: {
        Authentication: 'Face, palm, fingerprint, RFID, QR (options)',
        Display: '7-inch IPS (varies by model)',
        OperatingSystem: 'Android 8/9',
        Connectivity: 'Ethernet, Wi-Fi, 4G, Bluetooth, PoE',
        Accessories: 'Temperature sensor, QR reader, pedestal kits',
      },
      link: 'https://www.zkteco.com/en/Android_Device/Horus',
    }),
    'speedface-v5l-series': buildZktecoModel({
      slug: 'speedface-v5l-series',
      name: 'ZKTeco SpeedFace-V5L Series',
      overview:
        'SpeedFace-V5L combines face, palm, and fingerprint recognition with mask detection to support fast, hygienic entry control.',
      features: [
        'Handles 50,000 face templates and 5,000 palm templates',
        'Mask detection with configurable alarm actions',
        'Supports 13.56 MHz smart cards and QR codes',
        'Optional temperature module for fever screening',
        'Multiple relays and Wiegand I/O for door control',
      ],
      specs: {
        Templates: '50,000 faces, 5,000 palms, 5,000 fingerprints',
        Accuracy: '<0.3s per face match',
        Connectivity: 'TCP/IP, Wi-Fi (optional), Wiegand, RS485, USB-host',
        Power: '12 V DC 3 A',
      },
      link: 'https://www.zkteco.com/en/HybridBiometric4ZM/SpeedFace-V5L-Series',
    }),
    tf1700: buildZktecoModel({
      slug: 'tf1700',
      name: 'ZKTeco TF1700',
      overview:
        'TF1700 is a compact IP65 fingerprint reader offering strong security for outdoor access points and attendance checkpoints.',
      features: [
        'Metal vandal-resistant casing with IP65 sealing',
        'Stores up to 3,000 fingerprint templates and 50,000 logs',
        'Integrated relay for lock control plus door sensor inputs',
        'Wiegand interface enables controller integration',
        'Touch keypad with backlight for PIN entry',
      ],
      specs: {
        Templates: '3,000 fingerprints, 10,000 cards',
        Logs: '50,000 events',
        Connectivity: 'TCP/IP, RS485, USB-host, Wiegand',
        Rating: 'IP65',
        Power: '12 V DC 3 A',
      },
      link: 'https://www.zkteco.com/en/FingerprintAeH/TF1700',
    }),
    f18: buildZktecoModel({
      slug: 'f18',
      name: 'ZKTeco F18',
      overview:
        'F18 delivers proven fingerprint recognition with rich connectivity, making it a favourite for small and mid-size attendance projects.',
      features: [
        'Stores 3,000 fingerprint templates with fast 1:1 matching',
        'Supports multi-verification combining card, PIN, and fingerprint',
        'Built-in WebServer for quick configuration',
        'Anti-passback and scheduled bells supported',
        'Push protocol compatible with BioTime 9.5',
      ],
      specs: {
        Templates: '3,000 fingerprints, 5,000 cards',
        Logs: '100,000 events',
        Connectivity: 'TCP/IP, RS485, Wiegand, USB-host',
        Display: '2.8-inch TFT',
      },
      link: 'https://www.zkteco.com/en/FingerprintAeH/F18',
    }),
    'biopro-sa40': buildZktecoModel({
      slug: 'biopro-sa40',
      name: 'ZKTeco BioPro SA40',
      overview:
        'BioPro SA40 brings Wi-Fi enabled fingerprint attendance with multi-card support and BioTime cloud readiness.',
      features: [
        'Fingerprint, RFID, PIN, and password verification',
        'Capacitive touch keypad with 3-inch TFT display',
        'Wi-Fi, TCP/IP, USB-host, and RS485 communications',
        'Stores 3,000 fingerprint templates and 100,000 logs',
        'Push firmware supports BioTime cloud platform',
      ],
      specs: {
        Templates: '3,000 fingerprints, 3,000 cards, 3,000 passwords',
        Logs: '100,000 transactions',
        Connectivity: 'TCP/IP, RS485, USB-host, Wi-Fi',
        Power: '12 V DC 1.5 A',
      },
      link: 'https://www.edatame.com/zkteco_biopro_sa40.html',
    }),
    'iface-880': buildZktecoModel({
      slug: 'iface-880',
      name: 'ZKTeco iFace 880',
      overview:
        'iFace 880 blends face, fingerprint, palm, and ID card verification with a 4.3-inch display for modern attendance halls.',
      features: [
        'Stores 3,000 face, 4,000 fingerprint, and 10,000 card users',
        'Infrared light enables low-light face capture',
        'Optional Wi-Fi, 3G, and battery backup',
        'Built-in camera supports photo capture on events',
        'Dual relays and Wiegand facilitate door control',
      ],
      specs: {
        Templates: '3,000 faces, 4,000 fingerprints, 10,000 cards',
        Logs: '100,000 records',
        Display: '4.3-inch touchscreen',
        Connectivity: 'TCP/IP, RS232/485, USB-host, Wi-Fi/3G (optional)',
      },
      link: 'https://www.edatame.com/zkteco_iface880.html',
    }),
    'biotime-95': buildZktecoModel({
      slug: 'biotime-95',
      name: 'ZKTeco BioTime 9.5',
      overview:
        'BioTime 9.5 is a web-based attendance platform that centralises multi-site ZKTeco devices with scheduling, approvals, and payroll exports.',
      features: [
        'Browser-based dashboards with role-based access',
        'Automated shift scheduling and overtime policies',
        'Real-time device monitoring with push communication',
        'Integration APIs for payroll and ERP systems',
        'Supports database redundancy and distributed architecture',
      ],
      specs: {
        Deployment: 'On-premises or cloud',
        Users: 'Multi-site, unlimited users (license dependent)',
        Database: 'MySQL and MS SQL support',
        Integration: 'RESTful APIs, CSV exports',
        CompatibleDevices: 'All ZKTeco push communication terminals',
      },
      link: 'https://zkteco.me/BioTime%209.5',
    }),
  },
  timy: {
    'tm-ai67fw': buildTimyModel({
      slug: 'tm-ai67fw',
      name: 'Timy TM-AI67FW',
      overview:
        'TM-AI67FW is a waterproof AI terminal with dynamic face, fingerprint, and RFID verification optimised for outdoor checkpoints.',
      features: [
        'IP65 waterproof enclosure with IK08-rated panel',
        'Binocular HDR cameras deliver liveness detection under sunlight',
        'Supports face, fingerprint, RFID, and optional QR codes',
        'Built-in heater for -20 °C operation (optional)',
        'Relays, RS485, Wiegand, and Ethernet for integration',
      ],
      specs: {
        Templates: '20,000 faces, 10,000 fingerprints',
        Display: '8-inch IPS, 1280×800',
        Connectivity: 'Ethernet, Wi-Fi, RS485, Wiegand, USB',
        Rating: 'IP65',
        Power: '12 V DC',
      },
      link: 'https://sztimmy.net/products/tm-ai67fw-waterproof-dynamic-facefingerprint-recognition-terminal',
    }),
    'tm-ai24f': buildTimyModel({
      slug: 'tm-ai24f',
      name: 'Timy TM-AI24F',
      overview:
        'TM-AI24F delivers an 8-inch lobby terminal with AI face and fingerprint recognition for corporate access and attendance.',
      features: [
        '8-inch IPS touchscreen with tempered glass',
        'Dual infrared cameras with 0.2 s recognition speed',
        'Supports face, fingerprint, RFID, and PIN',
        'Integrated speaker and microphone for voice prompts',
        'Relay outputs and Wiegand 26/34 for door controllers',
      ],
      specs: {
        Templates: '20,000 faces, 20,000 fingerprints',
        Connectivity: 'Ethernet, Wi-Fi (optional), RS485, Wiegand',
        Display: '8-inch IPS',
        OperatingTemp: '-10 °C to 55 °C',
      },
      link: 'https://sztimmy.net/products/tm-ai24f-dynamic-face-fingerprint-recognition-terminal',
    }),
    'tm-ai08fw': buildTimyModel({
      slug: 'tm-ai08fw',
      name: 'Timy TM-AI08FW',
      overview:
        'TM-AI08FW is a compact dynamic face recognition terminal with optional temperature module for health screening workflows.',
      features: [
        '7-inch IPS display with binocular camera and IR fill light',
        'Optional temperature sensor and automatic alerts',
        'Supports face, RFID, and QR code recognition',
        'Wall, gate, or desktop mount kits available',
        'RS485, Wiegand, and relay outputs for door integration',
      ],
      specs: {
        Templates: '10,000 faces, 10,000 cards',
        Connectivity: 'Ethernet, Wi-Fi (optional), RS485, Wiegand',
        Display: '7-inch IPS',
        Power: '12 V DC',
      },
      link: 'https://sztimmy.net/products/tm-ai08fw-dynamic-face-recognition-terminal',
    }),
    'tm-ai26f': buildTimyModel({
      slug: 'tm-ai26f',
      name: 'Timy TM-AI26F',
      overview:
        'TM-AI26F combines dynamic face and fingerprint recognition with infrared anti-spoofing in a slim metal chassis.',
      features: [
        'Dual 2MP cameras with liveness detection and IR fill lights',
        'Stores up to 20,000 faces and 3,000 fingerprints',
        'IP54 metal housing suited for indoor/outdoor canopies',
        'Supports Weigand 26/34 and RS485 communications',
        'Configurable relay outputs for locks and alarms',
      ],
      specs: {
        Templates: '20,000 faces, 3,000 fingerprints, 20,000 cards',
        Connectivity: 'Ethernet, RS485, Wiegand, USB',
        Rating: 'IP54',
        Display: '7-inch IPS',
      },
      link: 'https://sztimmy.net/products/tm-ai26f-dynamic-face-recognition-terminal',
    }),
    'tm-ai03': buildTimyModel({
      slug: 'tm-ai03',
      name: 'Timy TM-AI03',
      overview:
        'TM-AI03 is an entry-level face recognition device delivering fast verification for SMB access points and turnstiles.',
      features: [
        '4.3-inch IPS display with simple user interface',
        'Supports face, RFID, and password modes',
        'Optional temperature sensing module for wellness checks',
        'Relay, RS485, and Wiegand outputs for controller integration',
        'SDK available for third-party software integration',
      ],
      specs: {
        Templates: '5,000 faces, 10,000 cards',
        Connectivity: 'Ethernet, RS485, Wiegand, USB',
        Display: '4.3-inch IPS',
        Power: '12 V DC',
      },
      link: 'https://sztimmy.net/products/tm-ai03-dynamic-face-recognition-terminal',
    }),
  },
};

const seo = {
  title: 'Time Attendance Devices | ZKTeco & Timy | VertiLinks',
  description:
    'Explore ZKTeco and Timy time attendance devices: rugged portable terminals, AI face recognition readers, and BioTime-ready platforms.',
  canonical: '/products/time-attendance',
};

export default {
  slug: 'time-attendance',
  title: 'Time Attendance Devices',
  categoryPage,
  brandPages,
  catalogLists,
  modelPages,
  seo,
};

function buildZktecoModel({ slug, name, overview, features, specs, link }) {
  const image = zktecoImageMap[slug] || heroImage;
  return {
    hero: {
      title: name,
      description: overview,
      bg: heroImage,
      breadcrumb: `Home / Products / Time Attendance / ZKTeco / ${name}`,
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [image],
    overview,
    features,
    specs,
    downloads: link ? [{ label: 'View Product', href: link }] : [],
    related: timyModels.map((model) => ({
      href: `/products/time-attendance/timy/${model.slug}`,
      name: model.name,
      image: model.image,
    })),
  };
}

function buildTimyModel({ slug, name, overview, features, specs, link }) {
  const image = timyImageMap[slug] || heroImage;
  return {
    hero: {
      title: name,
      description: overview,
      bg: heroImage,
      breadcrumb: `Home / Products / Time Attendance / Timy / ${name}`,
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [image],
    overview,
    features,
    specs,
    downloads: link ? [{ label: 'View Product', href: link }] : [],
    related: zktecoModels.map((model) => ({
      href: `/products/time-attendance/zkteco/${model.slug}`,
      name: model.name,
      image: model.image,
    })),
  };
}
