// src/data/products/id-card-printers.js
// NOTE: is file me form data NAHI rakha gaya (forms will be independent component)
import images from '../images';
import { IdCard } from 'lucide-react';

const idPrinterHero = images.products.idCardPrinters.hero;

const fargoImages = images.products.idCardPrinters.fargo;
const fargoLogo = fargoImages.logo;

const niscoImages = images.products.idCardPrinters.nisco;
const niscoLogo = niscoImages.logo;
const niscoImageMap = {
  'kanematsu-201-plus': niscoImages.kanematsu201Plus,
  'pr-c101': niscoImages.prC101,
  'pr-5350': niscoImages.pr5350,
  'pr-c151': niscoImages.prC151,
  'pr-c201': niscoImages.prC201,
};
const niscoDefaultHero = idPrinterHero;

const evolisImages = images.products.idCardPrinters.evolis;
const evolisLogo = evolisImages.logo;
const evolisImageMap = {
  zenius: evolisImages.zenius,
  primacy: evolisImages.primacy,
  'primacy-lamination': evolisImages.primacyLamination,
  avansia: evolisImages.avansia,
  quantum: evolisImages.quantum,
  agilia: evolisImages.agilia,
  'primacy-2': evolisImages.primacy2,
};
const evolisDefaultHero = idPrinterHero;

const hidFargoModels = [
  {
    slug: 'dtc1250e',
    name: 'HID FARGO DTC1250e',
    image: fargoImages.dtc1250e,
    hero: idPrinterHero,
    brief: 'Fast, secure desktop issuance for vibrant employee, visitor, and membership cards.',
    summaryFeatures: [
      'Fast print speed with plug-and-play setup',
      'AES-256 encrypted data path',
      'Eco-friendly EZ/ECO ribbon cartridges',
    ],
  },
  {
    slug: 'dtc1500',
    name: 'HID FARGO DTC1500',
    image: fargoImages.dtc1500,
    hero: idPrinterHero,
    brief: 'Cost-efficient enterprise printer with built-in security and upgrade-ready architecture.',
    summaryFeatures: [
      'Integrated resin scramble and overlay watermark',
      'High-capacity consumables reduce cost per card',
      'Modular design for future upgrades',
      'Energy-efficient ECO refill ribbons',
    ],
  },
  {
    slug: 'dtc4250e',
    name: 'HID FARGO DTC4250e',
    image: fargoImages.dtc4250e,
    hero: idPrinterHero,
    brief: 'SmartScreen driven printer for visually rich credentials with built-in security.',
    summaryFeatures: [
      'High-quality output with dye-sublimation',
      'Intuitive SmartScreen user interface',
      'Password protection with AES-256 encryption',
      'Energy-efficient, rewritable card support',
    ],
  },
  {
    slug: 'dtc4500e',
    name: 'HID FARGO DTC4500e',
    image: fargoImages.dtc4500e,
    hero: idPrinterHero,
    brief: 'High-volume issuance platform with dual hoppers and enterprise-grade security.',
    summaryFeatures: [
      'Robust daily printing for medium-to-large programmes',
      'Dual input hoppers with high-capacity ribbons',
      'SmartScreen interface simplifies operation',
      'Optional locks plus AES-256 encryption',
    ],
  },
  {
    slug: 'dtcii-plus',
    name: 'HID FARGO DTCii Plus',
    image: fargoImages.dtciiPlus,
    hero: idPrinterHero,
    brief: 'Instant financial card issuance without a dedicated PC, built for secure branch deployments.',
    summaryFeatures: [
      'Customers receive debit and credit cards within minutes',
      'Standalone architecture immune to PC-based malware',
      'Multiple input hoppers with exception feed',
      'SmartScreen display and preloaded ribbon cartridge',
    ],
  },
  {
    slug: 'hdp5000e',
    name: 'HID FARGO HDP5000e',
    image: fargoImages.hdp5000e,
    hero: idPrinterHero,
    brief: 'High-definition retransfer printing for durable, photo-quality credentials.',
    summaryFeatures: [
      'HDP retransfer output for rich imagery',
      'Optional dual-side, lamination, and encoding modules',
      'Built-in AES-256 security and resin scramble',
      'SmartScreen interface simplifies setup and upkeep',
      'Modular design scales with growing programmes',
    ],
  },
  {
    slug: 'hdp600ii',
    name: 'HID FARGO HDP600ii',
    image: fargoImages.hdp600ii,
    hero: idPrinterHero,
    brief: 'Financial-grade retransfer solution built for secure card programs and bureaus.',
    summaryFeatures: [
      'Patent-pending iON technology for rapid readiness',
      'Driverless, highly secure card issuance',
      '600 dpi retransfer output with flat card printing',
      'Low-maintenance design with easy card path access',
      'Built for instant financial card personalisation',
    ],
  },
  {
    slug: 'hdp6600',
    name: 'HID FARGO HDP6600',
    image: fargoImages.hdp6600,
    hero: idPrinterHero,
    brief: 'Next-gen HDP platform with six-layer ribbon support and instant-on lamination.',
    summaryFeatures: [
      'High-speed retransfer printing up to 230 cards per hour',
      '600 dpi high-definition imagery and microtext',
      'iON technology for 60-second warm-up and intelligent temp control',
      'Wasteless lamination cuts laminate spend by up to 40%',
      'Simultaneous print and retransfer keeps throughput high',
      'Energy-efficient platform for secure high-volume issuance',
    ],
  },
];

const niscoModels = [
  {
    slug: 'kanematsu-201-plus',
    name: 'Kanematsu 201+',
    image: niscoImageMap['kanematsu-201-plus'],
    hero: niscoDefaultHero,
    brief: '600 dpi retransfer printer engineered for secure government, university, and loyalty programs.',
    summaryFeatures: [
      'Photo-quality 600 dpi retransfer output',
      'Durable build with quick consumable swaps',
      'SOC technology, RFID ribbon, and feeder lock security',
      'Ideal for high-trust credential environments',
    ],
  },
  {
    slug: 'pr-c101',
    name: 'Nisca PR-C101',
    image: niscoImageMap['pr-c101'],
    hero: niscoDefaultHero,
    brief: 'Compact single-sided printer tailored for schools, clubs, and other small organisations.',
    summaryFeatures: [
      'Rotating LCD for easy operation',
      'Disposable ribbon with integrated cleaning unit',
      'Affordable entry-level issuance',
    ],
  },
  {
    slug: 'pr-5350',
    name: 'Nisca PR5350 (End of Life)',
    image: niscoImageMap['pr-5350'],
    hero: niscoDefaultHero,
    brief: 'Dual-sided workhorse offering high-speed colour and layered security.',
    summaryFeatures: [
      '24-bit colour with variable UV and micro printing',
      'Optional magstripe, IC chip, and RFID encoding',
      'Compatible with PR5302 laminator',
    ],
  },
  {
    slug: 'pr-c151',
    name: 'Nisca PR-C151',
    image: niscoImageMap['pr-c151'],
    hero: niscoDefaultHero,
    brief: 'Mid-level dual-sided printer delivering edge-to-edge colour in a compact footprint.',
    summaryFeatures: [
      '24-bit colour with optional lamination (PR-L151)',
      'Supports magstripe and contactless encoding',
      'LCD display keeps operators informed',
    ],
  },
  {
    slug: 'pr-c201',
    name: 'Nisca PR-C201 (Discontinued)',
    image: niscoImageMap['pr-c201'],
    hero: niscoDefaultHero,
    brief: 'Legacy 600 dpi retransfer printer replaced by Kanematsu 201+, retained for support.',
    summaryFeatures: [
      'Full-bleed retransfer output with security printing',
      'Supports magstripe, contact, and contactless encoding',
      'Optional L201 laminator for extended durability',
    ],
  },
];

const evolisModels = [
  {
    slug: 'zenius',
    name: 'Evolis Zenius',
    image: evolisImageMap.zenius,
    hero: evolisDefaultHero,
    brief: 'Compact, plug-and-play single-sided printer built for low-volume programs.',
    summaryFeatures: [
      'Easy USB setup for quick issuance',
      '300 dpi dye-sublimation and thermal printing',
      'Up to 150 cards per hour in colour',
    ],
  },
  {
    slug: 'primacy',
    name: 'Evolis Primacy',
    image: evolisImageMap.primacy,
    hero: evolisDefaultHero,
    brief: 'High-performance platform that scales from single to dual-sided production.',
    summaryFeatures: [
      '300 dpi colour printing at up to 210 cards per hour',
      'Upgradeable dual-sided module',
      'Optional magstripe and smart card encoding',
    ],
  },
  {
    slug: 'primacy-lamination',
    name: 'Evolis Primacy Lamination',
    image: evolisImageMap['primacy-lamination'],
    hero: evolisDefaultHero,
    brief: 'Adds lamination to Primacy for longer-lasting, higher-security cards.',
    summaryFeatures: [
      'Dual-sided print and laminate workflow',
      'Overlaminate films boost durability and security',
      'Ideal for badges needing tamper resistance',
    ],
  },
  {
    slug: 'avansia',
    name: 'Evolis Avansia',
    image: evolisImageMap.avansia,
    hero: evolisDefaultHero,
    brief: 'HDP retransfer engine delivering ultra high-definition cards for secure programs.',
    summaryFeatures: [
      '600 dpi retransfer with over-the-edge coverage',
      'Dual-sided printing standard',
      'Designed for large-volume issuance',
    ],
  },
  {
    slug: 'quantum',
    name: 'Evolis Quantum',
    image: evolisImageMap.quantum,
    hero: evolisDefaultHero,
    brief: 'Centralised bulk card system with twin 500-card hoppers for bureau-scale runs.',
    summaryFeatures: [
      'Up to 1000 monochrome cards per hour',
      'Dual-sided colour printing up to 150 cards per hour',
      'Supports magstripe and smart card encoding',
    ],
  },
  {
    slug: 'agilia',
    name: 'Evolis Agilia Retransfer',
    image: evolisImageMap.agilia,
    hero: evolisDefaultHero,
    brief: 'Latest Evolis retransfer platform focused on secure, over-the-edge credentials.',
    summaryFeatures: [
      '600 dpi over-the-edge retransfer printing',
      'Advanced lamination options for security and durability',
      'USB and Ethernet connectivity standard',
    ],
  },
  {
    slug: 'primacy-2',
    name: 'Evolis Primacy 2',
    image: evolisImageMap['primacy-2'],
    hero: evolisDefaultHero,
    brief: 'Successor to Primacy with modular upgrades, reinforced security, and durability.',
    summaryFeatures: [
      '300 dpi colour plus rewrite monochrome support',
      'Up to 280 colour cards per hour',
      'Optional Wi-Fi, advanced encoding, and lamination modules',
    ],
  },
];

const catalogLists = {
  'hid-fargo': hidFargoModels,
  nisco: niscoModels,
  evolis: evolisModels,
};

const brandPages = {
  'hid-fargo': {
    hero: {
      title: 'HID Fargo ID & Financial Card Printers',
      description:
        'From rapid desktop issuance to high-definition retransfer systems, HID Fargo delivers secure credentials at any scale.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo',
      cta: { label: 'Design Your Issuance Stack', to: '/contact' },
    },
    logo: fargoLogo,
    keyBenefits: [
      { icon: 'Fingerprint', title: 'Secure Issuance', desc: 'AES-256 encryption, resin scramble, and custom watermarks.' },
      { icon: 'Boxes', title: 'Complete Lineup', desc: 'Direct-to-card, HDP retransfer, financial instant issuance.' },
      { icon: 'Network', title: 'IT Ready', desc: 'Ethernet, Wi-Fi, SDKs, and Workbench diagnostics.' },
    ],
    models: catalogLists['hid-fargo'],
  },
  nisco: {
    hero: {
      title: 'Nisco Card Printers',
      description:
        'Value-driven card issuance platforms that scale from reception desks to managed bureau programmes.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco',
      cta: { label: 'Speak with a Specialist', to: '/contact' },
    },
    logo: niscoLogo,
    keyBenefits: [
      { icon: 'Cpu', title: 'Modular Upgrades', desc: 'Start simple and add modules as your requirements grow.' },
      { icon: 'Cable', title: 'Integration Ready', desc: 'REST APIs and SDKs for HRMS, CRM, and campus systems.' },
      { icon: 'Leaf', title: 'Optimised Costs', desc: 'Efficient consumables keep total ownership in check.' },
    ],
    models: catalogLists['nisco'],
  },
  evolis: {
    hero: {
      title: 'Evolis Card Printers',
      description: 'High-speed issuance with lamination and 600 dpi print fidelity.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis',
      cta: { label: 'Plan Your Deployment', to: '/contact' },
    },
    logo: evolisLogo,
    keyBenefits: [
      { icon: 'Sparkles', title: 'High Resolution', desc: 'Up to 600 dpi for detailed microtext and guilloche.' },
      { icon: 'ShieldCheck', title: 'Durability', desc: 'Lamination and UV panels extend card life.' },
      { icon: 'Wrench', title: 'Serviceable', desc: 'Field-friendly modules and cloud monitoring options.' },
    ],
    models: catalogLists['evolis'],
  },
};

const hidModelPages = {
  dtc1250e: {
    hero: {
      title: 'HID FARGO DTC1250e ID Card Printer & Encoder',
      description:
        'Fast, simple, and secure direct-to-card printing that keeps queues short while protecting sensitive data.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / DTC1250e',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.dtc1250e],
    overview:
      'DTC1250e is built for organizations that need eye-catching credentials without slowing down the front desk. Plug-and-play drivers, easy ribbon swaps, and onboard AES-256 encryption combine convenience with compliance.',
    features: [
      'Fast print speed - minimise wait time for new cards',
      'High-quality dye-sub output for rich, photo-grade imagery',
      'Simple plug-and-play installation with intuitive Workbench tools',
      'AES-256 encrypted data path with resin scramble for sensitive panels',
      'Eco-friendly design supporting energy-efficient standby and ECO refill ribbons',
    ],
    specs: {
      'Side printing': 'Single or dual',
      'Print method': 'Dye sublimation / resin thermal transfer',
      Resolution: '300 dpi',
      'Print speed': '16 sec per card / 225 cards per hour (YMCKO)',
      Software: 'FARGO Workbench with Color Assist',
      'Data protection': 'AES-256 encryption with secure network communications',
      'Card capacity': '100-card input, 30-card output (dual-side up to 100)',
      'Accepted sizes': 'CR-80, CR-79 adhesive back',
      Options: 'Dual-sided printing upgrade, magstripe and smartcard encoding, USB 2.0, Ethernet, cleaning kit, EZ or ECO ribbon cartridges',
    },
    downloads: [{ label: 'DTC1250e Datasheet', href: '/downloads/hid-fargo/dtc1250e.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/dtc1500',
        name: 'HID FARGO DTC1500',
        image: fargoImages.dtc1500,
      },
      {
        href: '/products/id-card-printers/hid-fargo/hdp6600',
        name: 'HID FARGO HDP6600',
        image: fargoImages.hdp6600,
      },
    ],
  },
  dtc1500: {
    hero: {
      title: 'HID FARGO DTC1500 ID Card Printer & Encoder',
      description:
        'Enterprise-focused DTC printing with built-in security, low consumable costs, and modular upgrade paths.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / DTC1500',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.dtc1500],
    overview:
      'DTC1500 delivers smart security straight out of the box; resin scramble, custom overlay watermarking, and password-protected drivers work alongside high-capacity consumables to keep cost per card in check.',
    features: [
      'Resin scramble and custom overlay watermark enhance tamper resistance',
      'High-capacity, low-cost ribbons minimise consumable spend',
      'Modular design scales with dual-side, encoding, or lamination upgrades',
      'Energy-efficient operation supports ECO refill ribbons',
    ],
    specs: {
      'Print method': 'Dye-sublimation / resin thermal transfer',
      Resolution: '300 dpi',
      'Print speed': '16 sec per card / 225 cards per hour (YMCKO)',
      Software: 'FARGO Workbench with Color Assist',
      Security: 'Overlay watermark, resin scramble, password protection, AES-256 encryption',
      'Card capacity': '100 input, up to 100 output',
      'Accepted sizes': 'CR-80, CR-79 adhesive back',
      Options: 'Dual-sided printing, lamination, smart card encoding, magstripe, USB 2.0, cleaning kit',
    },
    downloads: [{ label: 'DTC1500 Datasheet', href: '/downloads/hid-fargo/dtc1500.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/dtc1250e',
        name: 'HID FARGO DTC1250e',
        image: fargoImages.dtc1250e,
      },
      {
        href: '/products/id-card-printers/hid-fargo/dtc4500e',
        name: 'HID FARGO DTC4500e',
        image: fargoImages.dtc4500e,
      },
    ],
  },
  dtc4250e: {
    hero: {
      title: 'HID FARGO DTC4250e ID Card Printer & Encoder',
      description: 'SmartScreen-guided printer producing visually rich credentials with built-in security controls.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / DTC4250e',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.dtc4250e],
    overview:
      'Deliver professional cards on demand thanks to dye-sublimation print quality, SmartScreen guidance, and integrated password-protected security backed by AES-256 encryption.',
    features: [
      'High-quality, visually rich output when you need it',
      'SmartScreen interface keeps operators productive',
      'Password protection with AES-256 encrypted data path',
      'Energy-efficient design with rewritable card support',
    ],
    specs: {
      'Side printing': 'Single or dual',
      'Print method': 'Dye-sublimation / resin thermal transfer',
      Resolution: '300 dpi',
      'Print speed': '16 sec per card / 225 cards per hour (YMCKO)',
      Software: 'FARGO Workbench with Color Assist',
      'Data protection': 'AES-256 encryption',
      'Card capacity': '100 input, 100 output, 100 reject hopper (same-side I/O)',
      'Accepted sizes': 'CR-80, CR-79 adhesive back',
      Options: 'Dual-side module, same-side I/O hopper, smart card encoding, magstripe encoding, USB 2.0, cleaning kit',
    },
    downloads: [{ label: 'DTC4250e Datasheet', href: '/downloads/hid-fargo/dtc4250e.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/dtc4500e',
        name: 'HID FARGO DTC4500e',
        image: fargoImages.dtc4500e,
      },
      {
        href: '/products/id-card-printers/hid-fargo/dtc1250e',
        name: 'HID FARGO DTC1250e',
        image: fargoImages.dtc1250e,
      },
    ],
  },
  dtc4500e: {
    hero: {
      title: 'HID FARGO DTC4500e ID Card Printer & Encoder',
      description: 'High-volume printer for medium to large organisations requiring efficiency and layered security.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / DTC4500e',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.dtc4500e],
    overview:
      'DTC4500e combines dual input hoppers, high-capacity ribbons, and SmartScreen usability, making it ideal for bustling card offices that cannot compromise on throughput or security.',
    features: [
      'High-volume daily printing for medium-to-large programmes',
      'Dual input hoppers with high-capacity ribbons maximise uptime',
      'SmartScreen interface streamlines operator workflows',
      'Optional locks, password protection, and AES-256 encryption',
      'Energy-efficient with ECO ribbons and rewritable card support',
    ],
    specs: {
      'Side printing': 'Single or dual',
      'Print method': 'Dye-sublimation / resin thermal transfer',
      Resolution: '300 dpi',
      'Print speed': '16 sec per card / 225 cards per hour (YMCKO)',
      Software: 'FARGO Workbench with Color Assist',
      'Data protection': 'AES-256 encryption with optional locking hoppers',
      'Card capacity': '200 input (dual hopper), 100 output',
      'Accepted sizes': 'CR-80, CR-79 adhesive back',
      Options: 'USB 2.0, Ethernet, dual-side printing, lamination, smart card encoding, magstripe encoding, locking hoppers',
    },
    downloads: [{ label: 'DTC4500e Datasheet', href: '/downloads/hid-fargo/dtc4500e.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/hdp5000e',
        name: 'HID FARGO HDP5000e',
        image: fargoImages.hdp5000e,
      },
    ],
  },
  'dtcii-plus': {
    hero: {
      title: 'HID FARGO DTCii Plus Financial Card Printer & Encoder',
      description: 'Instantly issue debit and credit cards in-branch with a secure, PC-independent platform.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / DTCii Plus',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.dtciiPlus],
    overview:
      'Purpose-built for banks and credit unions, DTCii Plus brings customers from account opening to card-in-hand within minutes while keeping issuance isolated from malware and PC-based attacks.',
    features: [
      'Instant debit and credit card issuance for on-the-spot activation',
      'Embedded controller eliminates the need for a dedicated PC',
      'Multiple input hoppers plus exception feed keep production moving',
      'Preloaded ribbon and SmartScreen display simplify operation',
    ],
    specs: {
      'Side printing': 'Dual-side standard',
      'Print method': 'Dye-sublimation / resin thermal transfer',
      Resolution: '300 dpi (continuous tone)',
      'Print speed': '8-24 sec per card (ribbon dependent)',
      Memory: '32 MB RAM',
      'Card size': 'CR-80',
      'Card capacity': '200 input (dual hopper), 20 output',
      Encoding: 'Contact/contactless smart card, EMV L1, magstripe',
      Security: 'Hopper and door locks, Kensington lock, TLS 1.2 encryption, concealed output hopper',
      Interface: 'Ethernet (internal server)',
      'Driverless operation': 'Printer controlled via SDK',
      Warranty: '3 years printer and printhead',
    },
    downloads: [{ label: 'DTCii Plus Datasheet', href: '/downloads/hid-fargo/dtcii-plus.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/hdp600ii',
        name: 'HID FARGO HDP600ii',
        image: fargoImages.hdp600ii,
      },
    ],
  },
  hdp5000e: {
    hero: {
      title: 'HID FARGO HDP5000e ID Card Printer & Encoder',
      description: 'Produce visually rich credentials on demand with modular add-ons and SmartScreen guidance.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / HDP5000e',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.hdp5000e],
    overview:
      'HDP5000e helps corporations, universities, healthcare providers, and government agencies deliver durable, full-coverage cards while adapting quickly to new security or workflow requirements.',
    features: [
      'High-quality, visually rich credentials on demand',
      'Optional dual-sided printing, lamination, and encoding modules',
      'Built-in AES-256 encryption with resin scramble protection',
      'SmartScreen interface makes setup and maintenance simple',
      'Modular architecture scales with evolving issuance needs',
      'Ideal for medium-to-large corporations, universities, healthcare, and government',
    ],
    specs: {
      'Side printing': 'Single or dual',
      'Print method': 'HDP dye-sublimation / resin thermal transfer (retransfer)',
      Resolution: '300 dpi',
      'Print speed': '27 sec per card / 133 cards per hour (YMCK + transfer)',
      'Accepted card size': 'CR-80',
      Warranty: '4 years printer, lifetime printhead',
      Options: 'Dual-sided printing, single or dual-side lamination, smart card encoding, magstripe encoding, dual input hopper, 200-card input hopper, cleaning kit',
    },
    downloads: [{ label: 'HDP5000e Datasheet', href: '/downloads/hid-fargo/hdp5000e.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/hdp6600',
        name: 'HID FARGO HDP6600',
        image: fargoImages.hdp6600,
      },
    ],
  },
  hdp600ii: {
    hero: {
      title: 'HID FARGO HDP600ii Financial Card Printer & Encoder',
      description: 'Instantly personalise financial cards with secure, driverless 600 dpi retransfer printing.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / HDP600ii',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.hdp600ii],
    overview:
      'Purpose-built for banks and financial institutions, HDP600ii combines iON technology, secure driverless operation, and 600 dpi retransfer printing to deliver flat financial cards quickly and consistently.',
    features: [
      'Patent-pending iON technology for fast readiness and energy savings',
      'Highly secure, driverless card printing workflow',
      '600 dpi retransfer output with flat card printing',
      'Low-maintenance design with easy card path access',
      'Optimised for instant in-branch debit and credit card personalisation',
    ],
    specs: {
      'Side printing': 'Dual-side standard',
      'Print method': 'HDP retransfer (dye-sublimation / resin thermal transfer)',
      Resolution: '600 dpi (16.7M colors, 256 shades per pixel)',
      'First card out': '< 60 sec',
      Memory: '1 GB RAM',
      'Card size': 'CR-80, over-the-edge coverage',
      'Card capacity': 'Input 100, output 200',
      Encoding: 'Contact/contactless smart card plus magstripe',
      Security: 'FCA-compliant locks, Kensington slot, bolt-down points, concealed hopper, TLS 1.2 encryption',
      Warranty: '3 years',
    },
    downloads: [{ label: 'HDP600ii Datasheet', href: '/downloads/hid-fargo/hdp600ii.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/dtcii-plus',
        name: 'HID FARGO DTCii Plus',
        image: fargoImages.dtciiPlus,
      },
    ],
  },
  hdp6600: {
    hero: {
      title: 'HID FARGO HDP6600 Card Printer & Encoder',
      description: 'High-speed 600 dpi retransfer platform with iON warm-up and cost-saving lamination.',
      bg: idPrinterHero,
      breadcrumb: 'Home / Products / ID Card Printers / HID Fargo / HDP6600',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [fargoImages.hdp6600],
    overview:
      'HDP6600 helps large programmes issue secure IDs faster through simultaneous print and retransfer, wasteless lamination, and iON intelligent temperature control that saves time and energy.',
    features: [
      'High-speed retransfer printing up to 230 cards per hour',
      '600 dpi high-definition printing for sharp text and imagery',
      'iON technology delivers 60-second warm-up and smart temp control',
      'Wasteless lamination reduces laminate costs by up to 40 percent',
      'Simultaneous print and retransfer keeps production moving',
      'Energy-efficient design for high-volume secure issuance',
    ],
    specs: {
      'Side printing': 'Single or dual',
      'Print method': 'HDP dye-sublimation / resin thermal transfer (retransfer)',
      Resolution: '600 dpi',
      'Print speed': '16 sec per card / 230 cards per hour (YMCK + transfer)',
      Memory: '1 GB RAM',
      'Card size': 'CR-80',
      Warranty: '4 years printer, lifetime printhead',
      Options: 'Dual-side printing, lamination module (one or two material), card flattener, magstripe encoder, contact/contactless smart card encoding, dual input or 200-card hopper, physical locks, secure holographic overlaminates, cleaning kit',
    },
    downloads: [{ label: 'HDP6600 Datasheet', href: '/downloads/hid-fargo/hdp6600.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/hdp5000e',
        name: 'HID FARGO HDP5000e',
        image: fargoImages.hdp5000e,
      },
    ],
  },
};

const niscoModelPages = {
  'kanematsu-201-plus': {
    hero: {
      title: 'Kanematsu 201+',
      description: '600 dpi retransfer solution with SOC security for high-trust credentials.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco / Kanematsu 201+',
      cta: { label: 'Request Configuration', to: '/contact' },
    },
    gallery: [niscoImageMap['kanematsu-201-plus']],
    overview:
      'Kanematsu 201+ combines photo-quality retransfer output, SOC security, and rugged construction so issuers can deliver durable credentials in government, campus, and loyalty environments.',
    features: [
      '600 dpi dye-sub retransfer printing',
      'SOC technology with RFID ribbon authentication and feeder lock',
      'Consumables change quickly to keep production running',
      'Supports a wide range of card bodies and thicknesses',
    ],
    specs: {
      'Print method': 'Dye-sub retransfer',
      Resolution: '600 dpi',
      'Print speed': '25 sec (single-side), 55 sec (dual-side)',
      'Card thickness': '20-50 mil (10-50 mil via manual feed)',
      'Card capacity': '250 cards (auto feeder)',
      Media: 'PVC, ABS, PET, PET-G, PC',
      Connectivity: 'USB 2.0, Ethernet',
      Dimensions: '12.25" x 13.25" x 17"',
      Weight: '48 lbs',
      Warranty: '3 years (printer), lifetime printhead',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/nisco/pr-c201',
        name: 'Nisca PR-C201',
        image: niscoImageMap['pr-c201'],
      },
    ],
  },
  'pr-c101': {
    hero: {
      title: 'Nisca PR-C101',
      description: 'Compact single-sided printer designed for schools, clubs, and small organisations.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco / PR-C101',
      cta: { label: 'Request Configuration', to: '/contact' },
    },
    gallery: [niscoImageMap['pr-c101']],
    overview:
      'PR-C101 streamlines entry-level issuance with a rotating LCD panel, disposable ribbon-and-cleaning unit, and support for popular contactless credentials.',
    features: [
      'Rotating LCD interface keeps operators informed',
      'Disposable ribbon cartridge includes cleaning unit',
      'Supports MIFARE and Desfire encoding',
    ],
    specs: {
      Resolution: '300 dpi',
      'Print speed': '150 cph YMCKO, 643 cph resin',
      'Side printing': 'Single-side only',
      'Card capacity': '100 input / 30 output',
      Encoding: 'MIFARE, Desfire',
      'Card thickness': '10-30 mil',
      OS: 'Windows 2000-8 (32/64-bit), macOS 10.5+',
      Warranty: '2 years',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/nisco/pr-c151',
        name: 'Nisca PR-C151',
        image: niscoImageMap['pr-c151'],
      },
    ],
  },
  'pr-5350': {
    hero: {
      title: 'Nisca PR5350 (End of Life)',
      description: 'Legacy high-speed dual-sided printer with layered security options.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco / PR5350',
      cta: { label: 'Discuss Legacy Support', to: '/contact' },
    },
    gallery: [niscoImageMap['pr-5350']],
    overview:
      'PR5350 served large programmes that required rapid colour output, advanced security printing, and optional lamination. VertiLinks continues to support installed bases.',
    features: [
      '24-bit colour printing with 256 greyscale levels',
      'Variable UV and micro text security capabilities',
      'Optional magstripe, IC chip, and RFID encoding',
      'Integrates with PR5302 laminator',
    ],
    specs: {
      Resolution: '300 dpi',
      'Print speed': '144 cph YMCKO, 600 cph resin',
      Lamination: '132 cph single-side, 112 cph dual-side',
      'Card capacity': '100 input / 100 output',
      'Card sizes': 'CR79, CR80 (10-50 mil)',
      Memory: '16 MB',
      Warranty: '2 years',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/nisco/pr-c201',
        name: 'Nisca PR-C201',
        image: niscoImageMap['pr-c201'],
      },
    ],
  },
  'pr-c151': {
    hero: {
      title: 'Nisca PR-C151',
      description: 'Dual-sided direct-to-card printer with upgradeable encoding and lamination options.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco / PR-C151',
      cta: { label: 'Request Configuration', to: '/contact' },
    },
    gallery: [niscoImageMap['pr-c151']],
    overview:
      'PR-C151 balances speed, quality, and expandability—making it a practical choice for corporate, education, and government programmes aiming for long-term value.',
    features: [
      'Edge-to-edge 24-bit colour printing',
      'Supports magstripe, contact, and contactless encoding',
      'Works with PR-L151 laminator for enhanced durability',
      'LCD display and compact design suit front-office use',
    ],
    specs: {
      'Print method': 'Dye-sublimation direct-to-card',
      Resolution: '300 dpi',
      'Print speed': '144 cph YMCK (single), 60 cph (dual)',
      'Card capacity': '100 input / 100 output',
      'Card thickness': '20-50 mil (10 mil with special media)',
      Dimensions: '16.57"H x 10.66"W x 13.03"D',
      Weight: 'Approx. 26 lbs',
      Power: '90-240 V',
      MTBF: '100,000 prints',
      Warranty: '2 years',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/nisco/kanematsu-201-plus',
        name: 'Kanematsu 201+',
        image: niscoImageMap['kanematsu-201-plus'],
      },
    ],
  },
  'pr-c201': {
    hero: {
      title: 'Nisca PR-C201 (Discontinued)',
      description: 'Legacy 600 dpi retransfer platform superseded by Kanematsu 201+. VertiLinks continues to support active fleets.',
      bg: niscoDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Nisco / PR-C201',
      cta: { label: 'Discuss Migration', to: '/contact' },
    },
    gallery: [niscoImageMap['pr-c201']],
    overview:
      'PR-C201 offered full-bleed 600 dpi retransfer printing with security options such as UV and micro text. We now recommend transitioning to Kanematsu 201+ while maintaining legacy support.',
    features: [
      '600 dpi retransfer engine with optional lamination',
      'Supports magstripe, contact, and contactless encoding',
      'Built-in Ethernet for centralised management',
    ],
    specs: {
      Resolution: '600 dpi',
      'Print speed': '145 cph YMCK (single)',
      Lamination: '145 cph single-side with L201',
      'Card capacity': '250 input / 250 output',
      'Card sizes': 'CR79, CR80 (25-100 mil)',
      Memory: '64 MB',
      MTBF: '100,000 cards',
      Connectivity: 'Ethernet (built-in)',
      Warranty: '2 years',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/nisco/kanematsu-201-plus',
        name: 'Kanematsu 201+',
        image: niscoImageMap['kanematsu-201-plus'],
      },
    ],
  },
};

const evolisModelPages = {
  zenius: {
    hero: {
      title: 'Evolis Zenius',
      description: 'Compact, plug-and-play single-sided printer for low-volume badge issuance.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Zenius',
      cta: { label: 'Request Demo', to: '/contact' },
    },
    gallery: [evolisImageMap.zenius],
    overview:
      'Zenius keeps issuance simple with desktop-friendly dimensions, intuitive media swaps, and connectivity that works out of the box for visitor, membership, and loyalty cards.',
    features: [
      'Compact footprint and lightweight design (around 3.3 kg)',
      '300 dpi dye-sublimation or thermal resin printing',
      'Up to 150 colour cards per hour, 400 monochrome',
      'Plug-and-play USB with optional Ethernet',
    ],
    specs: {
      Resolution: '300 dpi',
      'Print method': 'Dye-sublimation / thermal transfer',
      'Print speed': '120-150 cph YMCKO, 400 cph monochrome',
      'Card capacity': '50 input / 20 output',
      'Card thickness': '10-30 mil',
      Connectivity: 'USB (Ethernet optional)',
      Weight: '~3.3 kg',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/primacy',
        name: 'Evolis Primacy',
        image: evolisImageMap.primacy,
      },
    ],
  },
  primacy: {
    hero: {
      title: 'Evolis Primacy',
      description: 'High-performance direct-to-card printer scaled for medium and large programs.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Primacy',
      cta: { label: 'Plan Your Configuration', to: '/contact' },
    },
    gallery: [evolisImageMap.primacy],
    overview:
      'Primacy handles daily production with fast colour output, modular upgrades, and encoder options that let you grow issuance without replacing the platform.',
    features: [
      '300 dpi dye-sublimation engine with up to 210 colour cards per hour',
      'Upgradeable from single to dual-sided printing',
      'Supports magstripe and smart card encoding modules',
      'USB and Ethernet connectivity standard',
    ],
    specs: {
      Resolution: '300 dpi',
      'Print method': 'Dye-sublimation',
      'Print speed': 'Up to 210 cph colour',
      'Card capacity': '100 input / 100 output',
      'Card thickness': '10-30 mil',
      Connectivity: 'USB, Ethernet',
      Encoding: 'Optional magstripe and smart card',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/primacy-lamination',
        name: 'Evolis Primacy Lamination',
        image: evolisImageMap['primacy-lamination'],
      },
      {
        href: '/products/id-card-printers/evolis/primacy-2',
        name: 'Evolis Primacy 2',
        image: evolisImageMap['primacy-2'],
      },
    ],
  },
  'primacy-lamination': {
    hero: {
      title: 'Evolis Primacy Lamination',
      description: 'Primacy paired with a lamination module for cards that demand durability and security.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Primacy Lamination',
      cta: { label: 'Discuss Lamination', to: '/contact' },
    },
    gallery: [evolisImageMap['primacy-lamination']],
    overview:
      'Primacy Lamination prints and laminates in a single pass, adding holographic or overlay protection for cards that need to withstand heavy use or security scrutiny.',
    features: [
      'Dual-sided printing and lamination workflow',
      'Supports a range of overlaminate films',
      'Maintains Primacy performance with added durability',
    ],
    specs: {
      'Print method': 'Dye-sublimation with lamination',
      Resolution: '300 dpi',
      'Print and lamination speed': 'Approximately 215 cph YMCKO',
      'Card capacity': '100 input / 100 output',
      'Card thickness': '10-50 mil',
      Connectivity: 'USB, Ethernet',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/primacy',
        name: 'Evolis Primacy',
        image: evolisImageMap.primacy,
      },
    ],
  },
  avansia: {
    hero: {
      title: 'Evolis Avansia',
      description: 'Retransfer printer delivering ultra high-definition cards for secure programmes.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Avansia',
      cta: { label: 'Request Quote', to: '/contact' },
    },
    gallery: [evolisImageMap.avansia],
    overview:
      'Avansia produces 600 dpi edge-to-edge cards with rock-solid construction, perfect for large volumes that demand flawless imagery and long-term durability.',
    features: [
      '600 dpi retransfer printing with dual-sided output',
      'Designed for high-volume secure issuance',
      'Handles card stocks from 10 to 50 mil',
    ],
    specs: {
      'Print method': 'Retransfer dye-sublimation',
      Resolution: '600 dpi',
      'Print speed': 'Around 144 cph YMCK (single-sided)',
      'Card capacity': '250 input / 250 output',
      'Card thickness': '10-50 mil',
      Connectivity: 'USB, Ethernet',
      Weight: '~20 kg',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/agilia',
        name: 'Evolis Agilia Retransfer',
        image: evolisImageMap.agilia,
      },
    ],
  },
  quantum: {
    hero: {
      title: 'Evolis Quantum',
      description: 'Centralised bulk issuance system with dual 500-card hoppers.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Quantum',
      cta: { label: 'Talk to Our Team', to: '/contact' },
    },
    gallery: [evolisImageMap.quantum],
    overview:
      'Quantum combines high-speed print engines with dual hoppers and encoding options, enabling bureau-style production in a single chassis.',
    features: [
      'Up to 1000 monochrome cards per hour',
      'Dual-sided colour printing up to 150 cards per hour',
      'Dual 500-card input/output hoppers',
      'Supports magstripe and smart card encoding',
    ],
    specs: {
      Resolution: '300 dpi',
      'Print method': 'Dye-sublimation / thermal transfer',
      'Print speed': 'Up to 1000 cph mono, 150 cph colour',
      'Card capacity': '500 input / 500 output',
      Connectivity: 'USB, Ethernet',
      Encoding: 'Magstripe and smart card options',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/primacy-2',
        name: 'Evolis Primacy 2',
        image: evolisImageMap['primacy-2'],
      },
    ],
  },
  agilia: {
    hero: {
      title: 'Evolis Agilia Retransfer',
      description: 'Latest Evolis retransfer platform with advanced security and over-the-edge output.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Agilia',
      cta: { label: 'Secure Your Cards', to: '/contact' },
    },
    gallery: [evolisImageMap.agilia],
    overview:
      'Agilia brings Evolis retransfer technology up-to-date with high-speed, 600 dpi over-the-edge printing and advanced lamination modules suited for government and corporate deployments.',
    features: [
      '600 dpi over-the-edge retransfer printing',
      'Dual-sided production with around 150 colour cards per hour',
      'Advanced lamination modules for security and durability',
      'USB and Ethernet connectivity standard',
    ],
    specs: {
      'Print method': 'Retransfer',
      Resolution: '600 dpi',
      'Print speed': 'Approximately 150 cph YMCK',
      'Card capacity': '200 input / 200 output',
      'Card thickness': '10-50 mil',
      Options: 'Advanced lamination modules',
      Connectivity: 'USB, Ethernet',
    },
    downloads: [],
    related: [
      {
        href: '/products/id-card-printers/evolis/avansia',
        name: 'Evolis Avansia',
        image: evolisImageMap.avansia,
      },
    ],
  },
  'primacy-2': {
    hero: {
      title: 'Evolis Primacy 2',
      description: 'Modular evolution of Primacy with upgraded security, durability, and connectivity.',
      bg: evolisDefaultHero,
      breadcrumb: 'Home / Products / ID Card Printers / Evolis / Primacy 2',
      cta: { label: 'Get In Touch', to: '/contact' },
    },
    gallery: [evolisImageMap['primacy-2']],
    overview:
      'Primacy 2 builds on the Primacy platform with enhanced security, rewrite capabilities, and modular connectivity so you can tailor issuance to evolving program needs.',
    features: [
      '300 dpi colour plus rewrite monochrome support',
      'Up to 280 colour cards per hour',
      'USB and Ethernet standard with optional Wi-Fi',
      'Advanced encoding and lamination modules available',
    ],
    specs: {
      'Side printing': 'Single or dual (modular)',
      Resolution: '300 dpi (colour) with mono rewrite',
      'Print speed': 'Up to 280 cph colour',
      'Card capacity': '100 input / 100 output',
      'Card thickness': '10-50 mil',
      Connectivity: 'USB, Ethernet, optional Wi-Fi',
      Options: 'Advanced encoding and lamination modules',
    },
    downloads: [{ label: 'Primacy 2 Datasheet', href: '/downloads/evolis/primacy-2.pdf' }],
    related: [
      {
        href: '/products/id-card-printers/hid-fargo/hdp6600',
        name: 'HID FARGO HDP6600',
        image: fargoImages.hdp6600,
      },
    ],
  },
};

const categoryPage = {
  hero: {
    title: 'ID Card Printers for Every Scale',
    description:
      'From entry models to enterprise-grade issuers with lamination and encoders. We help you size ribbons, media and service plans for the lowest total cost.',
    bg: idPrinterHero,
    breadcrumb: 'Home / Products / ID Card Printers',
    cta: { label: 'Get In Touch', to: '/contact' },
  },
  overview: {
    heading: 'Our ID Card Printer Portfolio',
    icon: IdCard,
    intro:
      'Choose between direct-to-card (DTC) or high-definition retransfer (HDP) printers, add encoders, laminators, and remote monitoring. Our certified team configures everything from visitor passes to secure financial cards.',
    bulletsLeft: [
      'Single & dual-side printing with hundreds of cards per hour',
      'Integrated laminators, UV panels, and custom watermark security',
      'Magstripe, contact, contactless, and financial encoding options',
      'Batch issuance for events, campuses, and bureaus',
    ],
    bulletsRight: [
      'Driver support for Windows, macOS, and Linux',
      'API integration for HRMS, ERP, and access control',
      'Onsite installation, training, and managed services',
      'Consumable forecasting with local stock availability',
    ],
    keyBenefits: [
      { icon: 'Shield', title: 'Security', desc: 'Watermarks, UV layers, and driver locks reduce cloning risk.' },
      { icon: 'Headset', title: 'Support', desc: 'Regional inventory of spares & ribbons with rapid SLAs.' },
      { icon: 'Sparkles', title: 'Scalability', desc: 'Grow from desktop issuance to bureau setups with APIs.' },
    ],
  },
  brands: [
    {
      slug: 'hid-fargo',
      name: 'HID Fargo',
      logo: fargoLogo,
      blurb:
        'Gold-standard DTC and HDP printers trusted by governments, enterprises, and financial institutions worldwide.',
      highlights: ['DTC & HDP lineup', 'AES-256 encrypted drivers', 'Custom watermark security'],
      industries: ['Government', 'Enterprise', 'Financial Services'],
      preview: [
        { name: 'HID Fargo', image: fargoLogo },
      ],
      to: '/products/id-card-printers/hid-fargo',
    },
    {
      slug: 'nisco',
      name: 'Nisco',
      logo: niscoLogo,
      blurb:
        'Modular card printers suitable for campuses, retail loyalty, and bureau deployments that need value plus flexibility.',
      highlights: ['Upgradeable modules', 'REST-ready control', 'Lamination options'],
      industries: ['Education', 'Retail', 'Hospitality'],
      preview: [
        { name: 'Nisco', image: niscoLogo },
      ],
      to: '/products/id-card-printers/nisco',
    },
    {
      slug: 'evolis',
      name: 'Evolis',
      logo: evolisLogo,
      blurb: 'High-speed issuance with advanced lamination and 600 dpi printing.',
      highlights: ['300/600 dpi printheads', 'Encoder-ready architecture', 'Lamination upgrade'],
      industries: ['Banking', 'Government', 'Corporate'],
      preview: [
        { name: 'Evolis', image: evolisLogo },
      ],
      to: '/products/id-card-printers/evolis',
    },
  ],
};

const modelPages = {
  'hid-fargo': hidModelPages,
  nisco: niscoModelPages,
  evolis: evolisModelPages,
};

const seo = {
  title: 'ID Card Printers in UAE | HID Fargo, Nisco & Evolis | VertiLinks',
  description:
    'Configure HID Fargo, Nisco, and Evolis ID card printers with encoders, laminators, and consumables. VertiLinks supplies, installs, and supports issuance across the GCC.',
  canonical: '/products/id-card-printers',
};

export default {
  slug: 'id-card-printers',
  title: 'ID Card Printers',
  categoryPage,
  brandPages,
  catalogLists,
  modelPages,
  seo,
};
