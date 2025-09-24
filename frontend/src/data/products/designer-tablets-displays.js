import {MonitorSmartphone} from 'lucide-react';

export default {
  slug: "designer-tablets-and-displays",
  title: "Designer Tablets & Displays",

  categoryPage: {
    hero: {
      title: "Pen Tablets & Pen Displays",
      description:
        "Create with precision using professional pen tablets and 4K pen displays.",
      bg: "/assets/heroes/hero-tablets.jpg",
      breadcrumb: "Home / Products / Designer Tablets & Displays",
      cta: { label: "Talk to an Expert", to: "/contact" },
    },
    overview: {
      heading: "Natural Drawing Experience",
      icon:MonitorSmartphone,
      intro:
        "Battery-free pens with tilt, programmable keys and color-accurate displays for artists and designers.",
      bulletsLeft: ["Battery-free pens", "8192 pressure levels", "Tilt support", "Shortcut keys"],
      bulletsRight: ["sRGB/Adobe RGB", "Laminate & anti-glare", "Stands & arms", "Windows/macOS"],
      keyBenefits: [
        { icon: "PenTool", title: "Precision", desc: "Accurate strokes & tilt." },
        { icon: "Palette", title: "Color", desc: "Calibrated displays." },
        { icon: "Cable", title: "Connectivity", desc: "USB-C/HDMI & power." },
      ],
    },
    brands: [
      {
        slug: "wacom",
        name: "Wacom",
        logo: "/assets/brands/wacom.svg",
        banner: "/assets/banners/wacom.jpg",
        blurb: "Industry-standard tablets and Cintiq pen displays.",
        highlights: ["Pro Pen 2", "4K Cintiq", "ExpressKeys"],
        industries: ["Design", "Illustration", "Animation"],
        preview: [{ name: "Cintiq 16", image: "/assets/products/tablet/wacom-cintiq16.jpg" }],
        to: "/products/designer-tablets-and-displays/wacom",
      },
      {
        slug: "huion",
        name: "Huion",
        logo: "/assets/brands/huion.svg",
        banner: "/assets/banners/huion.jpg",
        blurb: "Great value pen displays for students and studios.",
        highlights: ["8192 levels", "Laminate screens", "Strong value"],
        industries: ["Students", "Studios"],
        preview: [{ name: "Kamvas 13", image: "/assets/products/tablet/huion-kamvas13.jpg" }],
        to: "/products/designer-tablets-and-displays/huion",
      },
    ],
  },

  brandPages: {
    wacom: {
      hero: {
        title: "Wacom Tablets & Cintiq",
        description: "Trusted by professionals worldwide.",
        bg: "/assets/banners/wacom.jpg",
        breadcrumb: "Home / Products / Designer Tablets & Displays / Wacom",
      },
      keyBenefits: [
        { icon: "PenLine", title: "Feel", desc: "Low latency & accuracy." },
        { icon: "Monitor", title: "Displays", desc: "Color-accurate panels." },
        { icon: "Settings2", title: "Customization", desc: "ExpressKeys & touch rings." },
      ],
      models: [
        {
          slug: "cintiq-16",
          name: "Wacom Cintiq 16",
          image: "/assets/products/tablet/wacom-cintiq16.jpg",
          brief: "15.6\" FHD pen display with Pro Pen 2.",
          features: ["8192 levels", "Tilt", "Foldable stand"],
          to: "/products/designer-tablets-and-displays/wacom/cintiq-16",
        },
      ],
    },

    huion: {
      hero: {
        title: "Huion Pen Displays",
        description: "Affordable pen displays with great performance.",
        bg: "/assets/banners/huion.jpg",
        breadcrumb: "Home / Products / Designer Tablets & Displays / Huion",
      },
      keyBenefits: [
        { icon: "Coin", title: "Value", desc: "Great specs at good price." },
        { icon: "Pen", title: "Pen", desc: "Battery-free with tilt." },
        { icon: "ScreenShare", title: "Connectivity", desc: "USB-C/HDMI options." },
      ],
      models: [
        {
          slug: "kamvas-13",
          name: "Huion Kamvas 13",
          image: "/assets/products/tablet/huion-kamvas13.jpg",
          brief: "Portable 13\" pen display.",
          features: ["8192 levels", "Laminate", "Tilt"],
          to: "/products/designer-tablets-and-displays/huion/kamvas-13",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  modelPages: {
    wacom: {
      "cintiq-16": {
        hero: {
          title: "Wacom Cintiq 16",
          description: "15.6\" FHD pen display with Pro Pen 2.",
          bg: "/assets/products/tablet/wacom-cintiq16-hero.jpg",
          breadcrumb:
            "Home / Products / Designer Tablets & Displays / Wacom / Cintiq 16",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/tablet/wacom-cintiq16.jpg"],
        overview:
          "Comfortable drawing surface with accurate color and low parallax.",
        features: ["8192 pressure", "Tilt", "Foldable stand"],
        specs: { Size: "15.6\" FHD", Color: "72% NTSC", Connection: "HDMI + USB" },
        downloads: [{ label: "Datasheet", href: "/downloads/tablet/wacom-cintiq16.pdf" }],
        related: [{ href: "/products/designer-tablets-and-displays/huion/kamvas-13", name: "Huion Kamvas 13", image: "/assets/products/tablet/huion-kamvas13.jpg" }],
      },
    },
    huion: {
      "kamvas-13": {
        hero: {
          title: "Huion Kamvas 13",
          description: "Portable 13\" pen display.",
          bg: "/assets/products/tablet/huion-kamvas13-hero.jpg",
          breadcrumb:
            "Home / Products / Designer Tablets & Displays / Huion / Kamvas 13",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/tablet/huion-kamvas13.jpg"],
        overview:
          "Laminate screen reduces parallax; great for learning and travel.",
        features: ["8192 pressure", "Tilt", "USB-C/HDMI"],
        specs: { Size: "13.3\" FHD", Color: "sRGB ~120%", Weight: "≈1kg" },
        downloads: [{ label: "Datasheet", href: "/downloads/tablet/huion-kamvas13.pdf" }],
        related: [{ href: "/products/designer-tablets-and-displays/wacom/cintiq-16", name: "Wacom Cintiq 16", image: "/assets/products/tablet/wacom-cintiq16.jpg" }],
      },
    },
  },

  seo: {
    title: "Designer Tablets & Displays | VertiLinks",
    description: "Wacom and Huion pen displays and tablets.",
    canonical: "/products/designer-tablets-and-displays",
  },
};
