import {ScanFace} from 'lucide-react';

export default {
  slug: "face-biometric-terminals",
  title: "Face & Biometric Terminals",

  categoryPage: {
    hero: {
      title: "Face & Biometric Terminals",
      description:
        "Attendance and access devices using face, fingerprint, palm and cards — online or standalone.",
      bg: "/assets/heroes/hero-biometrics.jpg",
      breadcrumb: "Home / Products / Face & Biometric Terminals",
      cta: { label: "Book a Demo", to: "/contact" },
    },
    overview: {
      heading: "Frictionless & Secure",
      icon:ScanFace,
      intro:
        "Deploy fast recognition with liveness detection and anti-spoofing for secure entry and accurate time capture.",
      bulletsLeft: ["Face/Palm/Fingerprint", "Card & PIN fallback", "PoE/12V", "Wiegand/OSDP/TCP"],
      bulletsRight: ["Anti-spoofing", "SDK & integrations", "Cloud or on-prem", "Mobile credentials"],
      keyBenefits: [
        { icon: "Smile", title: "Fast UX", desc: "Sub-second recognition." },
        { icon: "ShieldCheck", title: "Liveness", desc: "Anti-spoofing protections." },
        { icon: "Network", title: "Integrations", desc: "HRMS, ACS & turnstiles." },
      ],
    },
    brands: [
      {
        slug: "zkteco",
        name: "ZKTeco",
        logo: "/assets/brands/zkteco.svg",
        banner: "/assets/banners/zkteco.jpg",
        blurb: "Wide portfolio for attendance and access with cloud options.",
        highlights: ["Face & palm", "PoE", "Cloud APIs"],
        industries: ["Corporate", "Factories"],
        preview: [{ name: "SpeedFace V5L", image: "/assets/products/bio/zkteco-v5l.jpg" }],
        to: "/products/face-biometric-terminals/zkteco",
      },
      {
        slug: "suprema",
        name: "Suprema",
        logo: "/assets/brands/suprema.svg",
        banner: "/assets/banners/suprema.jpg",
        blurb: "Premium terminals with BioStar 2 platform.",
        highlights: ["FaceStation", "Live Finger", "OSDP"],
        industries: ["Enterprise", "Govt"],
        preview: [{ name: "FaceStation F2", image: "/assets/products/bio/suprema-f2.jpg" }],
        to: "/products/face-biometric-terminals/suprema",
      },
    ],
  },

  brandPages: {
    zkteco: {
      hero: {
        title: "ZKTeco Terminals",
        description: "Affordable and feature-rich devices for T&A and access.",
        bg: "/assets/banners/zkteco.jpg",
        breadcrumb: "Home / Products / Face & Biometric Terminals / ZKTeco",
      },
      keyBenefits: [
        { icon: "Clock", title: "Attendance", desc: "Cloud & on-prem options." },
        { icon: "Unlock", title: "Access", desc: "Wiegand/OSDP & relays." },
        { icon: "PlugZap", title: "Integration", desc: "SDKs & APIs." },
      ],
      models: [
        {
          slug: "speedface-v5l",
          name: "SpeedFace V5L",
          image: "/assets/products/bio/zkteco-v5l.jpg",
          brief: "Face & palm recognition with anti-spoofing.",
          features: ["Face/Palm/Card", "PoE", "Wiegand/OSDP"],
          to: "/products/face-biometric-terminals/zkteco/speedface-v5l",
        },
      ],
    },

    suprema: {
      hero: {
        title: "Suprema Terminals",
        description: "High accuracy devices on BioStar 2 platform.",
        bg: "/assets/banners/suprema.jpg",
        breadcrumb: "Home / Products / Face & Biometric Terminals / Suprema",
      },
      keyBenefits: [
        { icon: "ScanFace", title: "Accuracy", desc: "Liveness & high match rates." },
        { icon: "ServerCog", title: "Platform", desc: "BioStar 2 management." },
        { icon: "Network", title: "Integrations", desc: "OSDP & SDKs." },
      ],
      models: [
        {
          slug: "facestation-f2",
          name: "FaceStation F2",
          image: "/assets/products/bio/suprema-f2.jpg",
          brief: "Fusion face with fingerprint option.",
          features: ["Face/Fingerprint/Card", "OSDP", "PoE"],
          to: "/products/face-biometric-terminals/suprema/facestation-f2",
        },
      ],
    },
  },

  modelPages: {
    zkteco: {
      "speedface-v5l": {
        hero: {
          title: "ZKTeco SpeedFace V5L",
          description: "Face & palm recognition terminal with PoE.",
          bg: "/assets/products/bio/zkteco-v5l-hero.jpg",
          breadcrumb:
            "Home / Products / Face & Biometric Terminals / ZKTeco / SpeedFace V5L",
        },
        gallery: ["/assets/products/bio/zkteco-v5l.jpg"],
        overview:
          "Ideal for lobbies and offices, supporting both attendance and access control.",
        features: ["Face/Palm/Card", "1:3000 face", "Wiegand/OSDP"],
        specs: { Power: "PoE/12V", Interfaces: "TCP/IP, Wiegand, RS485", Temp: "-10 to 45°C" },
        downloads: [{ label: "Datasheet", href: "/downloads/bio/zkteco-v5l.pdf" }],
        related: [{ href: "/products/face-biometric-terminals/suprema/facestation-f2", name: "Suprema F2", image: "/assets/products/bio/suprema-f2.jpg" }],
      },
    },
    suprema: {
      "facestation-f2": {
        hero: {
          title: "Suprema FaceStation F2",
          description: "Fusion face with fingerprint and liveness detection.",
          bg: "/assets/products/bio/suprema-f2-hero.jpg",
          breadcrumb:
            "Home / Products / Face & Biometric Terminals / Suprema / FaceStation F2",
        },
        gallery: ["/assets/products/bio/suprema-f2.jpg"],
        overview:
          "Enterprise-grade accuracy and security with BioStar 2 platform.",
        features: ["Face/Fingerprint/Card", "OSDP", "PoE"],
        specs: { Templates: "Face 30k", Interface: "TCP/IP, RS-485, Wiegand", Power: "PoE" },
        downloads: [{ label: "Datasheet", href: "/downloads/bio/suprema-f2.pdf" }],
        related: [{ href: "/products/face-biometric-terminals/zkteco/speedface-v5l", name: "ZKTeco V5L", image: "/assets/products/bio/zkteco-v5l.jpg" }],
      },
    },
  },

  seo: {
    title: "Face & Biometric Terminals | VertiLinks",
    description: "ZKTeco and Suprema devices for attendance and access.",
    canonical: "/products/face-biometric-terminals",
  },
};
