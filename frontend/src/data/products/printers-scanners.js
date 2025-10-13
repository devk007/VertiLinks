import images from '../images';
import {Printer} from 'lucide-react';

const printersImages = images.products.printersScanners || {};
const hpImages = printersImages.hp || {};
const canonImages = printersImages.canon || {};
const fallbackPrinterImage = printersImages.hero || images.products.hero;
const getHpImage = (key) => hpImages[key] || fallbackPrinterImage;
const getCanonImage = (key) => canonImages[key] || fallbackPrinterImage;

export default {
  slug: "printers-and-scanners",
  title: "Printers & Scanners",

  categoryPage: {
    hero: {
      title: "Office Printers & Document Scanners",
      description:
        "Reliable mono/color lasers, MFPs and high-speed document scanners with fleet management.",
      bg: fallbackPrinterImage,
      breadcrumb: "Home / Products / Printers & Scanners",
      cta: { label: "Get In Touch", to: "/contact" },
    },
    overview: {
      heading: "Print & Capture That Scales",
      icon:Printer,
      intro:
        "Control costs with secure print, quotas and automated supplies replenishment. Capture paper to searchable archives.",
      bulletsLeft: ["Mono/Color Laser MFPs", "A3/A4 ranges", "Duplex & finisher", "Wired/Wireless"],
      bulletsRight: ["Pull/Follow-me print", "Scan to cloud/DMS", "Fleet analytics", "Onsite NBD"],
      keyBenefits: [
        { icon: "Printer", title: "Dependable", desc: "High duty cycles & low CPP." },
        { icon: "Shield", title: "Secure", desc: "PIN release & user quotas." },
        { icon: "BarChart", title: "Manageable", desc: "Central fleet dashboards." },
      ],
    },
    brands: [
      {
        slug: "hp",
        name: "HP (Hewlett-Packard)",
        logo: getHpImage('logo'),
        banner: getHpImage('logo'),
        blurb: "LaserJet & OfficeJet printers, multi-function devices, and ScanJet document scanners.",
        highlights: [
          "LaserJet mono & color",
          "OfficeJet inkjet MFPs",
          "ScanJet sheetfed/flatbed",
        ],
        industries: ["Corporate", "Healthcare", "Education", "Retail"],
        preview: [
          { name: "LaserJet Enterprise", image: getHpImage('laserJet') },
          { name: "OfficeJet Pro", image: getHpImage('officeJet') },
          { name: "ScanJet Enterprise", image: getHpImage('scanJet') },
        ],
        to: "/products/printers-and-scanners/hp",
      },
      {
        slug: "canon",
        name: "Canon",
        logo: getCanonImage('logo'),
        banner: getCanonImage('logo'),
        blurb: "PIXMA and i-SENSYS printers, imageCLASS all-in-ones, and imageFORMULA production scanners.",
        highlights: [
          "PIXMA photo inkjets",
          "i-SENSYS laser printers",
          "imageFORMULA scanners",
        ],
        industries: ["Govt", "Studios", "Print bureaus", "Hospitality"],
        preview: [
          { name: "PIXMA G-Series", image: getCanonImage('pixma') },
          { name: "i-SENSYS Series", image: getCanonImage('isensys') },
          { name: "imageFORMULA", image: getCanonImage('imageFormula') },
        ],
        to: "/products/printers-and-scanners/canon",
      },
    ],
  },

  brandPages: {
    hp: {
      hero: {
        title: "HP LaserJet, OfficeJet & ScanJet",
        description:
          "Fleet-ready laser and inkjet printers with ScanJet capture for secure document workflows.",
        bg: getHpImage('laserJet'),
        breadcrumb: "Home / Products / Printers & Scanners / HP",
        cta: { label: "See Models", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Lock", title: "Wolf Security", desc: "Protection from power-on to print." },
        { icon: "Gauge", title: "Speed", desc: "Fast first page out." },
        { icon: "Coins", title: "TCO", desc: "Low cost per page." },
      ],
      models: [
        {
          slug: "laserjet-enterprise-series",
          name: "LaserJet Enterprise Series",
          image: getHpImage('laserJet'),
          brief: "Mono and color LaserJet Enterprise devices with HP Wolf Security.",
          features: ["45–75 ppm", "Self-healing firmware", "Dual trays"],
          to: "/products/printers-and-scanners/hp/laserjet-enterprise-series",
        },
        {
          slug: "officejet-pro-series",
          name: "OfficeJet Pro Series",
          image: getHpImage('officeJet'),
          brief: "Inkjet MFPs with smart tasks and low-cost color cartridges.",
          features: ["A4 color", "Smart app", "Auto duplex"],
          to: "/products/printers-and-scanners/hp/officejet-pro-series",
        },
        {
          slug: "color-laserjet-mfp-series",
          name: "Color LaserJet MFP Series",
          image: getHpImage('colorLaserJet'),
          brief: "Compact color LaserJet Pro and E-series multi-function printers.",
          features: ["Cloud print", "Custom workflows", "Optional stapler"],
          to: "/products/printers-and-scanners/hp/color-laserjet-mfp-series",
        },
        {
          slug: "scanjet-enterprise-series",
          name: "ScanJet Enterprise Series",
          image: getHpImage('scanJet'),
          brief: "ScanJet sheetfed and flatbed scanners with OCR automation.",
          features: ["80 ppm", "EveryPage sensors", "TWAIN/WIA"],
          to: "/products/printers-and-scanners/hp/scanjet-enterprise-series",
        },
      ],
    },

    canon: {
      hero: {
        title: "Canon PIXMA, i-SENSYS & imageFORMULA",
        description: "Photo-ready inkjets, i-SENSYS laser printers, and imageFORMULA scanners for mixed teams.",
        bg: getCanonImage('pixma'),
        breadcrumb: "Home / Products / Printers & Scanners / Canon",
      },
      keyBenefits: [
        { icon: "Layers", title: "Finishers", desc: "Staple, hole-punch & booklet." },
        { icon: "Server", title: "Platform", desc: "MEAP apps & integrations." },
        { icon: "Camera", title: "Scanners", desc: "Accurate feeding at speed." },
      ],
      models: [
        {
          slug: "pixma-g-series",
          name: "PIXMA G-Series Inkjets",
          image: getCanonImage('pixma'),
          brief: "Refillable photo printers with hybrid ink systems for creatives.",
          features: ["MegaTank reservoirs", "Borderless A4", "Wi-Fi Direct"],
          to: "/products/printers-and-scanners/canon/pixma-g-series",
        },
        {
          slug: "i-sensys-lbp-series",
          name: "i-SENSYS LBP & MF Series",
          image: getCanonImage('isensys'),
          brief: "Compact mono/color laser printers and MFPs with uniFLOW support.",
          features: ["A4 laser", "Secure PIN", "Mobile print"],
          to: "/products/printers-and-scanners/canon/i-sensys-lbp-series",
        },
        {
          slug: "imageformula-scanners",
          name: "imageFORMULA Scanners",
          image: getCanonImage('imageFormula'),
          brief: "Production and desktop scanners for batch capture and ID workflows.",
          features: ["U-turn feed", "Ultrasonic sensors", "ISIS/TWAIN"],
          to: "/products/printers-and-scanners/canon/imageformula-scanners",
        },
        {
          slug: "imagerunner-advance-series",
          name: "imageRUNNER ADVANCE DX",
          image: getCanonImage('imageRunner'),
          brief: "A3 workgroup all-in-ones with MEAP apps and cloud connectors.",
          features: ["35–70 ppm", "Cloud-ready", "Finisher choices"],
          to: "/products/printers-and-scanners/canon/imagerunner-advance-series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  modelPages: {
    hp: {
      "laserjet-enterprise-series": {
        hero: {
          title: "HP LaserJet Enterprise Series",
          description: "Mono and color LaserJet Enterprise printers with HP Wolf Security built-in.",
          bg: getHpImage('laserJet'),
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / LaserJet Enterprise Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpImage('laserJet')],
        overview:
          "Enterprise-grade LaserJets deliver high duty cycles, fast duplexing, and fleet security policies managed via HP Web Jetadmin.",
        features: [
          "45–75 ppm print engines",
          "Self-healing BIOS & runtime intrusion detection",
          "Modular input trays up to 4,600 sheets",
          "Dual-band wireless and Gigabit Ethernet",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=r2JRu4L8YUU",
          title: "LaserJet Enterprise Security Demo",
          description:
            "HP outlines Wolf Security hardening, self-healing firmware, and fleet controls for the LaserJet Enterprise line.",
        },
        specs: {
          Formats: "A4/A3 mono & color",
          DutyCycle: "Up to 300k pages/month",
          Consumables: "JetIntelligence cartridges",
          Management: "HP Web Jetadmin & Wolf Security",
        },
        downloads: [{ label: "LaserJet Enterprise Portfolio", href: "/downloads/print/hp-laserjet-enterprise.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/color-laserjet-mfp-series", name: "Color LaserJet MFP", image: getHpImage('colorLaserJet') },
          { href: "/products/printers-and-scanners/canon/i-sensys-lbp-series", name: "Canon i-SENSYS LBP/MF", image: getCanonImage('isensys') },
        ],
      },
      "officejet-pro-series": {
        hero: {
          title: "HP OfficeJet Pro Series",
          description: "Inkjet all-in-ones with Smart Tasks automation and low per-page color.",
          bg: getHpImage('officeJet'),
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / OfficeJet Pro Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpImage('officeJet')],
        overview:
          "OfficeJet Pro devices combine pigment-based inks, cloud/mobile workflows, and automatic duplexing to support hybrid teams.",
        features: [
          "Up to 25 ppm color",
          "Smart Tasks scan-to-cloud shortcuts",
          "Automatic duplex print/scan",
          "HP Instant Ink eligible",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=s-N0Mb2oOig",
          title: "OfficeJet Pro Smart Workflows",
          description:
            "Feature tour covering Smart Tasks automations, mobile printing, and hybrid work readiness for OfficeJet Pro devices.",
        },
        specs: {
          Formats: "A4 color inkjet",
          DutyCycle: "Up to 30k pages/month",
          Connectivity: "Wi-Fi 6, Ethernet, USB",
          Apps: "HP Smart, AirPrint, Mopria",
        },
        downloads: [{ label: "OfficeJet Pro Guide", href: "/downloads/print/hp-officejet-pro.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/scanjet-enterprise-series", name: "ScanJet Enterprise", image: getHpImage('scanJet') },
          { href: "/products/printers-and-scanners/canon/pixma-g-series", name: "Canon PIXMA G-Series", image: getCanonImage('pixma') },
        ],
      },
      "color-laserjet-mfp-series": {
        hero: {
          title: "HP Color LaserJet MFP Series",
          description: "Compact color LaserJet Pro and Managed E-series all-in-ones for shared workspaces.",
          bg: getHpImage('colorLaserJet'),
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / Color LaserJet MFP Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpImage('colorLaserJet')],
        overview:
          "Color LaserJet MFPs provide vibrant output, scan-to-cloud workflows, and optional stapling/finishing in a small footprint.",
        features: [
          "33–40 ppm color",
          "Auto-sensing toner and onboarding",
          "Cloud print (Universal Print/Chromebook)",
          "Optional stapler/stacker",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=QcoLO09KxM8",
          title: "Color LaserJet MFP Highlights",
          description:
            "Overview of Color LaserJet Pro and Managed E-series capabilities, from fast duplexing to workflow customization.",
        },
        specs: {
          Formats: "A4 color laser",
          Paper: "Up to 250-sheet input, 50-sheet ADF",
          Authentication: "PIN release, badge readers",
          Mobile: "AirPrint, Mopria, HP Roam",
        },
        downloads: [{ label: "Color LaserJet MFP", href: "/downloads/print/hp-color-laserjet-mfp.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/laserjet-enterprise-series", name: "LaserJet Enterprise", image: getHpImage('laserJet') },
          { href: "/products/printers-and-scanners/canon/imagerunner-advance-series", name: "Canon imageRUNNER ADV", image: getCanonImage('imageRunner') },
        ],
      },
      "scanjet-enterprise-series": {
        hero: {
          title: "HP ScanJet Enterprise Series",
          description: "Sheetfed and flatbed ScanJets with EveryPage ultrasonic misfeed detection.",
          bg: getHpImage('scanJet'),
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / ScanJet Enterprise Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpImage('scanJet')],
        overview:
          "Automate capture to SharePoint, cloud, and ECM platforms with TWAIN/ISIS drivers and built-in OCR.",
        features: [
          "Up to 80 ppm / 160 ipm duplex",
          "EveryPage ultrasonic jam detection",
          "HP Scan Premium shortcuts",
          "Long-document and card scanning",
        ],
        specs: {
          Feeders: "80-sheet ADF + flatbed",
          DutyCycle: "Up to 8,000 pages/day",
          Output: "Searchable PDF, Word, TIFF",
          Interfaces: "USB 3.0, Ethernet",
        },
        downloads: [{ label: "ScanJet Enterprise", href: "/downloads/print/hp-scanjet-enterprise.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/canon/imageformula-scanners", name: "Canon imageFORMULA", image: getCanonImage('imageFormula') },
          { href: "/products/printers-and-scanners/hp/officejet-pro-series", name: "OfficeJet Pro", image: getHpImage('officeJet') },
        ],
      },
    },
    canon: {
      "pixma-g-series": {
        hero: {
          title: "Canon PIXMA G-Series",
          description: "MegaTank refillable inkjet printers for vivid marketing collateral and photo output.",
          bg: getCanonImage('pixma'),
          breadcrumb:
            "Home / Products / Printers & Scanners / Canon / PIXMA G-Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getCanonImage('pixma')],
        overview:
          "PIXMA G-Series printers offer ultra-low running costs, hybrid photo inks, and wireless control for creative departments.",
        features: [
          "MegaTank refill bottles",
          "Borderless printing up to A4",
          "Wi-Fi Direct & Canon PRINT app",
          "Auto two-sided printing (select models)",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=STvv_2Mkero",
          title: "PIXMA G-Series MegaTank Tour",
          description:
            "Canon demonstrates MegaTank refilling, hybrid ink quality, and wireless controls for the PIXMA G-Series.",
        },
        specs: {
          Formats: "A4 photo/office",
          Ink: "Hybrid dye/pigment",
          Yield: "Up to 6,000 mono / 7,700 color pages",
          Connectivity: "USB, Wi-Fi, AirPrint",
        },
        downloads: [{ label: "PIXMA G Guide", href: "/downloads/print/canon-pixma-g.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/officejet-pro-series", name: "HP OfficeJet Pro", image: getHpImage('officeJet') },
          { href: "/products/printers-and-scanners/canon/i-sensys-lbp-series", name: "Canon i-SENSYS", image: getCanonImage('isensys') },
        ],
      },
      "i-sensys-lbp-series": {
        hero: {
          title: "Canon i-SENSYS LBP & MF Series",
          description: "Compact mono and color laser printers/MFPs with uniFLOW Online integration.",
          bg: getCanonImage('isensys'),
          breadcrumb:
            "Home / Products / Printers & Scanners / Canon / i-SENSYS Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getCanonImage('isensys')],
        overview:
          "i-SENSYS LBP and MF models bring fast first-page-out times, secure PIN release, and cloud management for branch sites.",
        features: [
          "21–38 ppm output",
          "uniFLOW Online Express support",
          "Secure PIN & department ID",
          "Compact footprint for desktops",
        ],
        specs: {
          Formats: "A4 mono/color laser",
          DutyCycle: "Up to 80k pages/month",
          PrintLanguages: "UFRII, PCL, PostScript",
          Mobile: "Canon PRINT Business, Mopria",
        },
        downloads: [{ label: "i-SENSYS Portfolio", href: "/downloads/print/canon-i-sensys.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/laserjet-enterprise-series", name: "HP LaserJet Enterprise", image: getHpImage('laserJet') },
          { href: "/products/printers-and-scanners/canon/imagerunner-advance-series", name: "imageRUNNER ADV DX", image: getCanonImage('imageRunner') },
        ],
      },
      "imageformula-scanners": {
        hero: {
          title: "Canon imageFORMULA Scanners",
          description: "Desktop and departmental scanners with CaptureOnTouch automation and robust feeders.",
          bg: getCanonImage('imageFormula'),
          breadcrumb:
            "Home / Products / Printers & Scanners / Canon / imageFORMULA",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getCanonImage('imageFormula')],
        overview:
          "imageFORMULA scanners deliver reliable paper handling, barcode routing, and seamless export to DMS and cloud targets.",
        features: [
          "Up to 90 ppm / 180 ipm",
          "Ultrasonic double-feed detection",
          "CaptureOnTouch Pro workflows",
          "Passport and card scanning kits",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=N0bJ2qHw_3o",
          title: "imageFORMULA Production Scanning",
          description:
            "Walkthrough of imageFORMULA scanners handling mixed batches, barcode routing, and CaptureOnTouch automation.",
        },
        specs: {
          Feeders: "60–100 sheet ADF",
          DutyCycle: "Up to 10,000 pages/day",
          Drivers: "ISIS/TWAIN/WIA",
          Output: "PDF/A, searchable PDF, Excel",
        },
        downloads: [{ label: "imageFORMULA Line", href: "/downloads/print/canon-imageformula.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/scanjet-enterprise-series", name: "HP ScanJet Enterprise", image: getHpImage('scanJet') },
          { href: "/products/printers-and-scanners/canon/pixma-g-series", name: "Canon PIXMA G", image: getCanonImage('pixma') },
        ],
      },
      "imagerunner-advance-series": {
        hero: {
          title: "Canon imageRUNNER ADVANCE DX",
          description: "A3 all-in-ones with MEAP apps, finishing kits, and uniFLOW fleet controls.",
          bg: getCanonImage('imageRunner'),
          breadcrumb:
            "Home / Products / Printers & Scanners / Canon / imageRUNNER ADVANCE",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getCanonImage('imageRunner')],
        overview:
          "imageRUNNER ADV DX systems deliver high-speed duplex scanning, cloud connectors, and smart finishing for enterprise pods.",
        features: [
          "35–70 ppm A3 engines",
          "Dual-scan ADF up to 270 ipm",
          "uniFLOW Online & Azure connectors",
          "Booklet, staple, and hole-punch finishers",
        ],
        videoSpotlight: {
          videoUrl: "https://www.youtube.com/watch?v=Zoj8GWvk9Qc",
          title: "imageRUNNER ADVANCE DX Overview",
          description:
            "Canon showcases imageRUNNER ADVANCE DX cloud connectors, security, and finishing modules for A3 workgroups.",
        },
        specs: {
          Formats: "A3/A4 mono & color",
          Toner: "Canon C-EXV series",
          Panel: "10.1\" responsive touchscreen",
          Security: "McAfee embedded control",
        },
        downloads: [{ label: "imageRUNNER ADV DX", href: "/downloads/print/canon-imagerunner-adv.pdf" }],
        related: [
          { href: "/products/printers-and-scanners/hp/color-laserjet-mfp-series", name: "HP Color LaserJet MFP", image: getHpImage('colorLaserJet') },
          { href: "/products/printers-and-scanners/canon/i-sensys-lbp-series", name: "Canon i-SENSYS", image: getCanonImage('isensys') },
        ],
      },
    },
  },

  seo: {
    title: "Office Printers & Scanners | VertiLinks",
    description: "HP and Canon print & capture with fleet management.",
    canonical: "/products/printers-and-scanners",
  },
};
