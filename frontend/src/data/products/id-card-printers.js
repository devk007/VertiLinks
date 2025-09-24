// src/data/products/id-card-printers.js
// NOTE: is file me form data NAHI rakha gaya (forms will be independent component)
import {IdCard} from 'lucide-react';
import ZC from '../../assets/products/HID.png'
import ZC1 from '../../assets/products/zc100.webp'
import ZC12 from '../../assets/products/ZC100(2).png'
import ZC3 from '../../assets/products/Magic300.png'
import Z from '../../assets/products/zebra-technologies-logo.svg'
import E from '../../assets/products/evolis-seeklogo.png'
import M from '../../assets/products/magicard-logo.webp'
import H from '../../assets/products/hid-fargo.webp'

export default {
  // ------------------------------------------------------------------
  // CATEGORY METADATA (used across all 3 levels if needed)
  // ------------------------------------------------------------------
  slug: "id-card-printers",
  title: "ID Card Printers",

  // ==================================================================
  // ROUTE: /products/id-card-printers
  // PAGE:  Category → Brands listing page (Hero + Overview + Brands grid)
  // ==================================================================
  categoryPage: {
    hero: {
      title: "ID Card Printers for Every Scale",
      description:
        "From entry models to enterprise-grade issuers with lamination and encoders. We help you size ribbons, media and service plans for the lowest total cost.",
      bg: "/assets/heroes/hero-idcards.jpg",
      breadcrumb: "Home / Products / ID Card Printers",
      cta: { label: "Get In Touch", to: "/contact" },
    },

    overview: {
      heading: "Our ID Card Printer Portfolio",
      icon:IdCard,
      intro:
        "Choose between single/dual-side printers, on-card visual security (HoloKote®/UV), encoders (Mag/Contact/Contactless), and centralized management. Local spares and fast support keep your issuance running.",
      bulletsLeft: [
        "Single & dual-side, edge-to-edge photo printing",
        "Lamination, UV & visual watermark options",
        "Encoders: Magstripe, Contact, Contactless",
        "Batch printing for events & bureaus",
      ],
      bulletsRight: [
        "Windows/Mac drivers & SDKs",
        "Fleet management & print quotas",
        "Onsite installation, training & AMC",
        "Ribbons & consumables forecasting",
      ],
      keyBenefits: [
        { icon: "Shield", title: "Security", desc: "Watermark/UV, lamination & driver locks reduce cloning risks." },
        { icon: "Headset", title: "Support", desc: "Local inventory of spares & ribbons with quick-response SLAs." },
        { icon: "Sparkles", title: "Scalability", desc: "Grow from desk printers to centralized bureaus with APIs." },
      ],
    },

    // IMPORTANT: Category page par SIRF brands dikhenge — models yahan NAHI.
    brands: [
      {
        slug: "zebra",
        name: "Zebra",
        logo: Z,
        banner: Z,
        blurb:
          "Enterprise printers with secure ribbons and simple cartridge loading. ZC series is compact yet powerful.",
        highlights: [
          "ZC-series compact design",
          "Dual-side options & Ethernet",
          "Secure ribbon erase / data shred",
        ],
        industries: ["Corporate", "Healthcare", "Education", "Events"],
        // Optionally show 1-2 preview models on the card (thumbnails only)
        preview: [
          { name: "ZC100", image: "/assets/products/idcards/zebra-zc100.jpg" },
          { name: "ZC300", image: "/assets/products/idcards/zebra-zc300.jpg" },
        ],
        to: "/products/id-card-printers/zebra",
      },
      {
        slug: "evolis",
        name: "Evolis",
        logo: E,
        banner: E,
        blurb: "High-speed issuance with advanced lamination and encoders.",
        highlights: ["Primacy 2 series", "300–600 dpi", "Lamination module"],
        industries: ["Banking", "Government", "Corporate"],
        preview: [{ name: "Primacy 2", image: "/assets/products/idcards/evolis-primacy-2.jpg" }],
        to: "/products/id-card-printers/evolis",
      },
      {
        slug: "magicard",
        name: "Magicard",
        logo: M,
        banner: M,
        blurb: "UK engineering with HoloKote® visual security and low running cost.",
        highlights: ["HoloKote® watermark", "Dual-side options", "Lamination kits"],
        industries: ["Education", "SMB", "Events"],
        preview: [{ name: "Magicard 300", image: "/assets/products/idcards/magicard-300.jpg" }],
        to: "/products/id-card-printers/magicard",
      },
      {
        slug: "hid-fargo",
        name: "HID Fargo",
        logo: "/assets/brands/hid-fargo.svg",
        banner: H,
        blurb: "Enterprise security with custom watermarks and network printing.",
        highlights: ["DTC/HDP ranges", "Custom watermark", "High-cap ribbons"],
        industries: ["Government", "Enterprise"],
        preview: [{ name: "DTC1500", image: "/assets/products/idcards/fargo-dtc1500.jpg" }],
        to: "/products/id-card-printers/hid-fargo",
      },
    ],
  },

  // ==================================================================
  // ROUTE: /products/id-card-printers/:brand
  // PAGE:  Brand page (Hero + Key benefits + Models list) — NO forms here
  // ==================================================================
  brandPages: {
    zebra: {
      hero: {
        title: "Zebra ID Card Printers",
        description:
          "ZC family delivers compact design, secure ribbons and effortless cartridges — perfect for desks to bureaus.",
        bg: "/assets/banners/zebra-idcards.jpg",
        breadcrumb: "Home / Products / ID Card Printers / Zebra",
        cta: { label: "Explore Models", to: "/contact" },
      },
      keyBenefits: [
        { icon: "BadgeCheck", title: "Easy Media", desc: "Cartridge-based ribbons reduce handling errors." },
        { icon: "Lock", title: "Secure", desc: "Ribbon erase and driver security features." },
        { icon: "ServerCog", title: "Manage", desc: "Ethernet options, fleet tools and SDKs." },
      ],
      models: [
        {
          slug: "zc100",
          name: "ZC100",
          image: ZC,
          brief: "Compact single-side printer for low to medium volumes.",
          features: ["300 dpi edge-to-edge", "USB 2.0 (Ethernet opt.)", "Easy cartridge ribbons"],
          to: "/products/id-card-printers/zebra/zc100",
        },
        {
          slug: "zc300",
          name: "ZC300",
          image: ZC3,
          brief: "Flexible single/dual-side issuance with secure ribbons.",
          features: ["Dual-side option", "Multiple ribbon choices", "Network printing"],
          to: "/products/id-card-printers/zebra/zc300",
        },
      ],
    },

    evolis: {
      hero: {
        title: "Evolis Card Printers",
        description: "High-speed issuance with lamination options for secure programs.",
        bg: "/assets/banners/evolis-idcards.jpg",
        breadcrumb: "Home / Products / ID Card Printers / Evolis",
      },
      keyBenefits: [
        { icon: "Sparkles", title: "600 dpi", desc: "High-res printing for microtext & fine logos." },
        { icon: "ShieldCheck", title: "Lamination", desc: "Added durability and anti-tamper layers." },
        { icon: "Wrench", title: "Serviceable", desc: "Field-friendly design lowers downtime." },
      ],
      models: [
        {
          slug: "primacy-2",
          name: "Primacy 2",
          image: "/assets/products/idcards/evolis-primacy-2.jpg",
          brief: "High-volume dual-side printer with lamination.",
          features: ["300/600 dpi", "Encoders", "Lamination module"],
          to: "/products/id-card-printers/evolis/primacy-2",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },

    magicard: {
      hero: {
        title: "Magicard Printers",
        description: "UK-built printers with HoloKote® visual security.",
        bg: "/assets/banners/magicard-idcards.jpg",
        breadcrumb: "Home / Products / ID Card Printers / Magicard",
      },
      keyBenefits: [
        { icon: "Eye", title: "HoloKote®", desc: "On-card watermark visible under light." },
        { icon: "Layers", title: "Variants", desc: "From entry to enterprise with lamination." },
        { icon: "Clock", title: "Low TCO", desc: "Efficient ribbons and service kits." },
      ],
      models: [
        {
          slug: "300",
          name: "Magicard 300",
          image: "/assets/products/idcards/magicard-300.jpg",
          brief: "Mid-range printer with HoloKote® security.",
          features: ["300 dpi", "Dual-side option", "Encoder options"],
          to: "/products/id-card-printers/magicard/300",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "pronto-100",
          name: "Pronto 100",
          image: "/assets/products/idcards/pronto-100.jpg",
          brief: "Entry-level single-side issuance.",
          features: ["Compact", "Fast mono", "Low maintenance"],
          to: "/products/id-card-printers/magicard/pronto-100",
        },
      ],
    },

    "hid-fargo": {
      hero: {
        title: "HID Fargo Printers",
        description: "Enterprise-grade DTC/HDP lineup with custom watermark capability.",
        bg: "/assets/banners/hid-fargo-idcards.jpg",
        breadcrumb: "Home / Products / ID Card Printers / HID Fargo",
      },
      keyBenefits: [
        { icon: "Fingerprint", title: "Secure Issuance", desc: "Custom watermarks & advanced drivers." },
        { icon: "Boxes", title: "Range", desc: "DTC to HDP retransfer for photo-like quality." },
        { icon: "Network", title: "IT Ready", desc: "Network printing and fleet tools." },
      ],
      models: [
        {
          slug: "dtc1500",
          name: "DTC1500",
          image: "/assets/products/idcards/fargo-dtc1500.jpg",
          brief: "Cost-effective enterprise security with watermark.",
          features: ["Custom watermark", "High-cap ribbons", "Encoding options"],
          to: "/products/id-card-printers/hid-fargo/dtc1500",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  // ==================================================================
  // ROUTE: /products/id-card-printers/:brand/:slug
  // PAGE:  Model detail page (Hero + gallery + overview + features + specs + downloads + related)
  // ==================================================================
  modelPages: {
    zebra: {
      zc100: {
        hero: {
          title: "Zebra ZC100",
          description: "Compact single-side card printer for low to medium volumes.",
          bg: "/assets/products/idcards/zebra-zc100-hero.jpg",
          cta: { label: "Get In Touch", to: "/contact" },
          breadcrumb: "Home / Products / ID Card Printers / Zebra / ZC100",
        },
        gallery: [
          ZC1,
          ZC12,
        ],
        overview:
          "ZC100 simplifies card issuance with a compact design, easy-to-load cartridges, and reliable 300-dpi output. Ideal for visitor passes and small teams.",
        features: [
          "300 dpi edge-to-edge colour/mono",
          "USB 2.0 (Ethernet optional)",
          "Cartridge ribbons with secure erase",
          "Supports Mag/Contact/Contactless encoding",
        ],
        specs: {
          PrintMode: "Single-side",
          Resolution: "300 dpi",
          Speed: "Up to 150 cph (colour)",
          Interfaces: "USB 2.0, Ethernet (optional)",
          Drivers: "Windows, macOS",
          Dimensions: "258 × 157 × 383 mm (approx.)",
        },
        downloads: [{ label: "Product Brochure", href: "/downloads/zebra/zc100.pdf" }],
        related: [
          { href: "/products/id-card-printers/zebra/zc300", name: "Zebra ZC300", image: ZC3 },
          { href: "/products/id-card-printers/evolis/primacy-2", name: "Evolis Primacy 2", image: "/assets/products/idcards/evolis-primacy-2.jpg" },
        ],
      },

      zc300: {
        hero: {
          title: "Zebra ZC300",
          description: "Flexible single/dual-side printer with advanced ribbon options.",
          bg: "/assets/products/idcards/zebra-zc300-hero.jpg",
          breadcrumb: "Home / Products / ID Card Printers / Zebra / ZC300",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [
          "/assets/products/idcards/zebra-zc300.jpg",
          "/assets/products/idcards/zebra-zc300-2.jpg",
        ],
        overview:
          "Designed for flexibility, ZC300 supports single or dual-side printing, secure ribbons and network workflows for modern IT environments.",
        features: ["Dual-side option", "Multiple ribbon types", "Driver security controls"],
        specs: {
          PrintMode: "Single/Dual-side",
          Resolution: "300 dpi",
          Speed: "Up to 200 cph (colour)",
          Interfaces: "USB 2.0, Ethernet",
        },
        downloads: [{ label: "Product Brochure", href: "/downloads/zebra/zc300.pdf" }],
        related: [
          { href: "/products/id-card-printers/magicard/300", name: "Magicard 300", image: "/assets/products/idcards/magicard-300.jpg" },
        ],
      },
    },

    evolis: {
      "primacy-2": {
        hero: {
          title: "Evolis Primacy 2",
          description: "High-volume dual-side issuance with lamination & encoders.",
          bg: "/assets/products/idcards/evolis-primacy-2-hero.jpg",
          breadcrumb: "Home / Products / ID Card Printers / Evolis / Primacy 2",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/idcards/evolis-primacy-2.jpg"],
        overview:
          "Primacy 2 is built for intensive card programs, delivering fast print speeds, high resolution and optional lamination for durability.",
        features: ["300/600 dpi", "Lamination module", "Mag/Contact/Contactless encoders"],
        specs: {
          PrintMode: "Dual-side",
          Resolution: "300/600 dpi",
          Speed: "Up to 280 cph (colour)",
          Interfaces: "USB, Ethernet",
        },
        downloads: [{ label: "Product Brochure", href: "/downloads/evolis/primacy-2.pdf" }],
        related: [
          { href: "/products/id-card-printers/zebra/zc300", name: "Zebra ZC300", image: "/assets/products/idcards/zebra-zc300.jpg" },
        ],
      },
    },

    magicard: {
      "300": {
        hero: {
          title: "Magicard 300",
          description: "Mid-range printer with HoloKote® visual security.",
          bg: "/assets/products/idcards/magicard-300-hero.jpg",
          breadcrumb: "Home / Products / ID Card Printers / Magicard / 300",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/idcards/magicard-300.jpg"],
        overview:
          "Trusted by schools and enterprises, Magicard 300 balances print quality with low running cost and optional dual-side.",
        features: ["HoloKote® watermark", "300 dpi", "Encoder options"],
        specs: { PrintMode: "Single/Dual-side", Resolution: "300 dpi" },
        downloads: [{ label: "Product Brochure", href: "/downloads/magicard/300.pdf" }],
        related: [
          { href: "/products/id-card-printers/magicard/pronto-100", name: "Pronto 100", image: "/assets/products/idcards/pronto-100.jpg" },
        ],
      },
      "pronto-100": {
        hero: {
          title: "Magicard Pronto 100",
          description: "Entry-level, fast single-side issuance.",
          bg: "/assets/products/idcards/pronto-100-hero.jpg",
          breadcrumb: "Home / Products / ID Card Printers / Magicard / Pronto 100",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/idcards/pronto-100.jpg"],
        overview:
          "Compact form factor for desks and receptions; great for visitor passes and small teams.",
        features: ["300 dpi", "Fast monochrome", "Low maintenance"],
        specs: { PrintMode: "Single-side", Resolution: "300 dpi" },
        downloads: [{ label: "Product Brochure", href: "/downloads/magicard/pronto-100.pdf" }],
        related: [
          { href: "/products/id-card-printers/zebra/zc100", name: "Zebra ZC100", image: "/assets/products/idcards/zebra-zc100.jpg" },
        ],
      },
    },

    "hid-fargo": {
      dtc1500: {
        hero: {
          title: "HID Fargo DTC1500",
          description: "Enterprise-security features with custom watermark printing.",
          bg: "/assets/products/idcards/fargo-dtc1500-hero.jpg",
          breadcrumb: "Home / Products / ID Card Printers / HID Fargo / DTC1500",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/idcards/fargo-dtc1500.jpg"],
        overview:
          "Lower cost-per-card and built-in security watermark make DTC1500 ideal for secure programs.",
        features: ["Custom watermark", "High-capacity ribbons", "Encoding options"],
        specs: { PrintMode: "Single/Dual-side", Resolution: "300 dpi" },
        downloads: [{ label: "Product Brochure", href: "/downloads/hid-fargo/dtc1500.pdf" }],
        related: [
          { href: "/products/id-card-printers/evolis/primacy-2", name: "Evolis Primacy 2", image: "/assets/products/idcards/evolis-primacy-2.jpg" },
        ],
      },
    },
  },

  // Optional SEO (category level)
  seo: {
    title: "ID Card Printers in UAE | VertiLinks",
    description:
      "Zebra, Evolis, Magicard, HID Fargo and more. Enterprise card printers with lamination, encoders & local support.",
    canonical: "/products/id-card-printers",
  },
};
