import images from '../images';
import {Shield} from 'lucide-react';

export default {
  slug: "gate-barriers",
  title: "Gate Barriers",

  categoryPage: {
    hero: {
      title: "Vehicular Gate Barriers",
      description:
        "Industrial-grade boom barriers with loop detectors, remotes and access integrations.",
      bg: images.products.gateBarriers.hero,
      breadcrumb: "Home / Products / Gate Barriers",
      cta: { label: "Request Quote", to: "/contact" },
    },
    overview: {
      heading: "Control Vehicle Entry",
      icon:Shield,
      intro:
        "Choose from fast motors for parking to heavy-duty motors for sites. Integrates with ANPR, UHF tags and access systems.",
      bulletsLeft: ["3–6m booms", "Fast/standard speeds", "IP54/55", "Manual release"],
      bulletsRight: ["Loop detectors", "UHF/ANPR", "Remotes & push buttons", "Service kits"],
      keyBenefits: [
        { icon: "GaugeCircle", title: "Duty Cycle", desc: "Continuous operation models." },
        { icon: "Wrench", title: "Serviceable", desc: "Spares & easy maintenance." },
        { icon: "Plug", title: "Integrations", desc: "Access control & ANPR." },
      ],
    },
    brands: [
      {
        slug: "faac",
        name: "FAAC",
        logo: images.products.gateBarriers.hero,
        banner: images.products.gateBarriers.hero,
        blurb: "Italian engineered barriers for long life.",
        highlights: ["Rapid motors", "Robust build", "Accessories"],
        industries: ["Parking", "Industrial"],
        preview: [{ name: "FAAC 615", image: images.products.gateBarriers.hero }],
        to: "/products/gate-barriers/faac",
      },
      {
        slug: "nice",
        name: "NICE",
        logo: images.products.gateBarriers.hero,
        banner: images.products.gateBarriers.hero,
        blurb: "Reliable barriers with modern controls.",
        highlights: ["3–6m arms", "LED options", "Safety devices"],
        industries: ["Residential", "Commercial"],
        preview: [{ name: "Nice M3BAR", image: images.products.gateBarriers.hero }],
        to: "/products/gate-barriers/nice",
      },
    ],
  },

  brandPages: {
    faac: {
      hero: {
        title: "FAAC Gate Barriers",
        description: "Durable motors for heavy use.",
        bg: images.products.gateBarriers.hero,
        breadcrumb: "Home / Products / Gate Barriers / FAAC",
      },
      keyBenefits: [
        { icon: "Bolt", title: "Fast", desc: "Quick opening times." },
        { icon: "Shield", title: "Reliable", desc: "Italian components." },
        { icon: "Boxes", title: "Options", desc: "Boom lights & skirts." },
      ],
      models: [
        {
          slug: "615",
          name: "FAAC 615",
          image: images.products.gateBarriers.hero,
          brief: "Standard barrier for 3–5m arms.",
          features: ["230V motor", "Manual release", "Loop ready"],
          to: "/products/gate-barriers/faac/615",
        },
      ],
    },

    nice: {
      hero: {
        title: "NICE Gate Barriers",
        description: "Modern controllers with smart accessories.",
        bg: images.products.gateBarriers.hero,
        breadcrumb: "Home / Products / Gate Barriers / NICE",
      },
      keyBenefits: [
        { icon: "Gauge", title: "Speed", desc: "Rapid variants available." },
        { icon: "Radio", title: "Remotes", desc: "Handheld transmitters." },
        { icon: "PlugZap", title: "I/O", desc: "Integrates with readers & ANPR." },
      ],
      models: [
        {
          slug: "m3bar",
          name: "Nice M3BAR",
          image: images.products.gateBarriers.hero,
          brief: "3m rapid barrier for parking lanes.",
          features: ["Fast motor", "LED options", "Loop inputs"],
          to: "/products/gate-barriers/nice/m3bar",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  modelPages: {
    faac: {
      "615": {
        hero: {
          title: "FAAC 615",
          description: "3–5m barrier for commercial use.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / FAAC / 615",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.gateBarriers.hero],
        overview:
          "Well-proven model with reliable gearbox and accessories.",
        features: ["Manual release", "Boom lights", "Loop detectors"],
        specs: { Arm: "3–5m", IP: "IP54", Power: "230V" },
        downloads: [{ label: "Datasheet", href: "/downloads/barrier/faac-615.pdf" }],
        related: [{ href: "/products/gate-barriers/nice/m3bar", name: "Nice M3BAR", image: images.products.gateBarriers.hero }],
      },
    },
    nice: {
      m3bar: {
        hero: {
          title: "Nice M3BAR",
          description: "Rapid 3m barrier for parking lanes.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / NICE / M3BAR",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.gateBarriers.hero],
        overview:
          "Fast opening time and LED accessories for visibility.",
        features: ["Rapid motor", "LED boom", "Safety sensors"],
        specs: { Arm: "3m", OpeningTime: "≈1.5s", Power: "230V" },
        downloads: [{ label: "Datasheet", href: "/downloads/barrier/nice-m3bar.pdf" }],
        related: [{ href: "/products/gate-barriers/faac/615", name: "FAAC 615", image: images.products.gateBarriers.hero }],
      },
    },
  },

  seo: {
    title: "Gate Barriers | VertiLinks",
    description: "FAAC and NICE lane barriers with ANPR/UHF options.",
    canonical: "/products/gate-barriers",
  },
};
