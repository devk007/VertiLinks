import {Printer} from 'lucide-react';

export default {
  slug: "printers-and-scanners",
  title: "Printers & Scanners",

  categoryPage: {
    hero: {
      title: "Office Printers & Document Scanners",
      description:
        "Reliable mono/color lasers, MFPs and high-speed document scanners with fleet management.",
      bg: "/assets/heroes/hero-printers.jpg",
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
        name: "HP LaserJet / ScanJet",
        logo: "/assets/brands/hp.svg",
        banner: "/assets/banners/hp-printers.jpg",
        blurb: "Trusted LaserJet MFPs and ScanJet high-speed scanners.",
        highlights: ["JetIntelligence", "Wolf Security", "NBD support"],
        industries: ["Corporate", "Healthcare", "Education"],
        preview: [{ name: "LaserJet Pro M428", image: "/assets/products/print/hp-m428.jpg" }],
        to: "/products/printers-and-scanners/hp",
      },
      {
        slug: "canon",
        name: "Canon imageRUNNER / DR",
        logo: "/assets/brands/canon.svg",
        banner: "/assets/banners/canon-printers.jpg",
        blurb: "Robust A3 MFPs and DR series production scanners.",
        highlights: ["MEAP platform", "Booklet finishers", "CaptureOnTouch"],
        industries: ["Govt", "Print bureaus"],
        preview: [{ name: "imageRUNNER 2630", image: "/assets/products/print/canon-ir-2630.jpg" }],
        to: "/products/printers-and-scanners/canon",
      },
    ],
  },

  brandPages: {
    hp: {
      hero: {
        title: "HP LaserJet & ScanJet",
        description: "Secure, efficient printing and capture.",
        bg: "/assets/banners/hp-printers.jpg",
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
          slug: "laserjet-pro-m428",
          name: "LaserJet Pro M428fdw",
          image: "/assets/products/print/hp-m428.jpg",
          brief: "Mono A4 MFP with strong security.",
          features: ["38 ppm", "Duplex/ADF", "Wi-Fi"],
          to: "/products/printers-and-scanners/hp/laserjet-pro-m428",
        },
        {
          slug: "scanjet-pro-4500",
          name: "ScanJet Pro 4500",
          image: "/assets/products/print/hp-scanjet-4500.jpg",
          brief: "High-speed duplex document scanner.",
          features: ["ADF", "OCR", "Scan to cloud"],
          to: "/products/printers-and-scanners/hp/scanjet-pro-4500",
        },
      ],
    },

    canon: {
      hero: {
        title: "Canon imageRUNNER & DR",
        description: "A3 MFPs and production scanners for heavy use.",
        bg: "/assets/banners/canon-printers.jpg",
        breadcrumb: "Home / Products / Printers & Scanners / Canon",
      },
      keyBenefits: [
        { icon: "Layers", title: "Finishers", desc: "Staple, hole-punch & booklet." },
        { icon: "Server", title: "Platform", desc: "MEAP apps & integrations." },
        { icon: "Camera", title: "Scanners", desc: "Accurate feeding at speed." },
      ],
      models: [
        {
          slug: "imagerunner-2630",
          name: "imageRUNNER 2630",
          image: "/assets/products/print/canon-ir-2630.jpg",
          brief: "A3 mono MFP for workgroups.",
          features: ["30 ppm", "Duplex", "Finisher options"],
          to: "/products/printers-and-scanners/canon/imagerunner-2630",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  modelPages: {
    hp: {
      "laserjet-pro-m428": {
        hero: {
          title: "HP LaserJet Pro M428fdw",
          description: "Mono A4 MFP with strong security.",
          bg: "/assets/products/print/hp-m428-hero.jpg",
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / LaserJet Pro M428",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/print/hp-m428.jpg"],
        overview: "Fast, secure and easy to manage for small teams.",
        features: ["38 ppm", "Duplex & ADF", "Secure print"],
        specs: { Type: "A4 Mono MFP", DutyCycle: "80k/month", Connectivity: "USB, Ethernet, Wi-Fi" },
        downloads: [{ label: "Datasheet", href: "/downloads/print/hp-m428.pdf" }],
        related: [{ href: "/products/printers-and-scanners/canon/imagerunner-2630", name: "Canon iR 2630", image: "/assets/products/print/canon-ir-2630.jpg" }],
      },
      "scanjet-pro-4500": {
        hero: {
          title: "HP ScanJet Pro 4500",
          description: "Duplex document scanner with OCR.",
          bg: "/assets/products/print/hp-scanjet-hero.jpg",
          breadcrumb:
            "Home / Products / Printers & Scanners / HP / ScanJet Pro 4500",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/print/hp-scanjet-4500.jpg"],
        overview: "Quick capture to searchable PDFs and cloud.",
        features: ["ADF 50 sheets", "Duplex", "OCR"],
        specs: { Speed: "45 ppm", DPI: "600", Interface: "USB/Ethernet" },
        downloads: [{ label: "Datasheet", href: "/downloads/print/scanjet-4500.pdf" }],
        related: [],
      },
    },
    canon: {
      "imagerunner-2630": {
        hero: {
          title: "Canon imageRUNNER 2630",
          description: "A3 mono MFP for workgroups.",
          bg: "/assets/products/print/canon-ir-hero.jpg",
          breadcrumb:
            "Home / Products / Printers & Scanners / Canon / imageRUNNER 2630",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/print/canon-ir-2630.jpg"],
        overview: "Dependable printing with optional finisher.",
        features: ["30 ppm", "Duplex", "Large toner"],
        specs: { Type: "A3 Mono MFP", Speed: "30 ppm", Connectivity: "USB/Ethernet" },
        downloads: [{ label: "Datasheet", href: "/downloads/print/canon-ir-2630.pdf" }],
        related: [{ href: "/products/printers-and-scanners/hp/laserjet-pro-m428", name: "HP M428fdw", image: "/assets/products/print/hp-m428.jpg" }],
      },
    },
  },

  seo: {
    title: "Office Printers & Scanners | VertiLinks",
    description: "HP and Canon print & capture with fleet management.",
    canonical: "/products/printers-and-scanners",
  },
};
