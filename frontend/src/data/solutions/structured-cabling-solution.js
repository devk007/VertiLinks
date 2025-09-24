import {
  Cable,
  Cog,
  Hammer,
  Layers,
  Network,
  PlugZap,
  Puzzle,
  Wrench,
} from "lucide-react";

export default {
  slug: "structured-cabling-solution",
  title: "Structured Cabling Solution",
  categoryPage: {
    hero: {
      title: "Structured Cabling & Infrastructure",
      description:
        "Design and deploy reliable copper and fiber infrastructure with certified installers and long-term warranties.",
      bg: "/assets/istockphoto-181098768-1024x1024.jpg",
      breadcrumb: "Home / Solutions / Structured Cabling Solution",
      cta: { label: "Get Site Survey", to: "/contact" },
    },
    overview: {
      heading: "End-to-End Cabling Lifecycle",
      icon: Cable,
      intro:
        "From backbone fiber to floor cabling, our designs follow TIA/EIA standards and deliver predictable performance.",
      bulletsLeft: [
        "Copper Cat6/6A/7 design",
        "Single & multi-mode fiber",
        "Server room build & containment",
        "Labeling and documentation",
      ],
      bulletsRight: [
        "Certification testing",
        "Warranty backed components",
        "Moves, adds & changes",
        "Maintenance & AMC",
      ],
      keyBenefits: [
        { icon: "Network", title: "Performance", desc: "Certified throughput to support current and future workloads." },
        { icon: "Wrench", title: "Craftsmanship", desc: "Certified technicians deliver neat, standards-compliant installs." },
        { icon: "PlugZap", title: "Reliability", desc: "Structured design minimizes downtime and simplifies expansion." },
      ],
    },
    brands: [
      {
        slug: "fast-track",
        name: "Fast Track",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-181098768-1024x1024.jpg",
        blurb: "Quick rollout for SME offices and retail outlets.",
        highlights: [
          "Cat6 copper",
          "Rack & patch panels",
          "Testing reports",
        ],
        industries: ["Retail", "SME Offices"],
        to: "/solutions/structured-cabling-solution/fast-track",
      },
      {
        slug: "enterprise-grid",
        name: "Enterprise Grid",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-181098768-1024x1024.jpg",
        blurb: "Campus-grade infrastructure with containment, fiber backbone, and documentation.",
        highlights: [
          "Fiber backbone",
          "Containment & racks",
          "Warranty management",
        ],
        industries: ["Healthcare", "Education", "Logistics"],
        to: "/solutions/structured-cabling-solution/enterprise-grid",
      },
    ],
  },
  brandPages: {
    "fast-track": {
      hero: {
        title: "Fast Track Cabling",
        description: "Rapid deployment for growing offices with minimal disruption.",
        bg: "/assets/istockphoto-181098768-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Structured Cabling Solution / Fast Track",
        cta: { label: "View Packages", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Hammer", title: "Rapid", desc: "Pre-terminated options enable overnight cutovers." },
        { icon: "Layers", title: "Documented", desc: "As-built drawings, labeling, and certification included." },
        { icon: "Puzzle", title: "Flexible", desc: "Supports future Wi-Fi APs, CCTV, and IoT additions." },
      ],
      models: [
        {
          slug: "office-32",
          name: "Office 32 Nodes",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Up to 32 network points with rack, patch panels, and testing.",
          features: [
            "Cat6 cabling",
            "Rack & cable management",
            "Fluke certification",
          ],
          to: "/solutions/structured-cabling-solution/fast-track/office-32",
        },
        {
          slug: "retail-64",
          name: "Retail 64 Nodes",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "64 points with containment, CCTV drops, and Wi-Fi ready design.",
          features: [
            "Cat6A cabling",
            "Containment",
            "Wi-Fi ready",
          ],
          to: "/solutions/structured-cabling-solution/fast-track/retail-64",
        },
      ],
    },
    "enterprise-grid": {
      hero: {
        title: "Enterprise Cabling Grid",
        description: "Campus-wide copper & fiber backbone with lifecycle services.",
        bg: "/assets/istockphoto-181098768-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Structured Cabling Solution / Enterprise Grid",
      },
      keyBenefits: [
        { icon: "Cog", title: "Lifecycle", desc: "Design, build, document, and maintain under one SLA." },
        { icon: "Layers", title: "Scalable", desc: "Core, distribution, and access layers engineered for growth." },
        { icon: "PlugZap", title: "Resilient", desc: "Fiber redundancy and monitoring keep the network available." },
      ],
      models: [
        {
          slug: "campus-fiber",
          name: "Campus Fiber Backbone",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Core to building backbone with ODF, splice, and OTDR testing.",
          features: [
            "Single & multi-mode",
            "ODF & splice",
            "OTDR reports",
          ],
          to: "/solutions/structured-cabling-solution/enterprise-grid/campus-fiber",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "distribution-layer",
          name: "Distribution Layer",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Floor distribution, racks, and containment with labeling.",
          features: [
            "Racks & power",
            "Containment",
            "Labeling",
          ],
          to: "/solutions/structured-cabling-solution/enterprise-grid/distribution-layer",
        },
      ],
    },
  },

  modelPages: {
    "fast-track": {
      "office-32": {
        hero: {
          title: "Office 32 Nodes",
          description: "Cat6 structured cabling for up to 32 workstations with rack and certification.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Structured Cabling Solution / Fast Track / Office 32",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Ideal for fast-growing offices, includes Cat6 terminations, rack, cable management, and Fluke certification.",
        features: [
          "Cat6 cabling",
          "Rack & patch panels",
          "Cable management",
          "Fluke certification reports",
        ],
        specs: {
          Nodes: "32",
          Cable: "Cat6",
          Certification: "Fluke DSX",
          Warranty: "20 years",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/structured-cabling-solution/fast-track/retail-64",
            name: "Retail 64 Nodes",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
      "retail-64": {
        hero: {
          title: "Retail 64 Nodes",
          description: "Enhanced deployment with containment, Wi-Fi ready drops, and CCTV trunks.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Structured Cabling Solution / Fast Track / Retail 64",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Support larger footprints with Cat6A cabling, containment, and additional Wi-Fi/CCTV drops for retail chains.",
        features: [
          "Cat6A cabling",
          "Containment install",
          "Wi-Fi ready points",
          "Labeling & documentation",
        ],
        specs: {
          Nodes: "64",
          Cable: "Cat6A",
          Containment: "Ladder & trunking",
          Documentation: "As-built drawings",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/structured-cabling-solution/enterprise-grid/campus-fiber",
            name: "Campus Fiber Backbone",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
    },
    "enterprise-grid": {
      "campus-fiber": {
        hero: {
          title: "Campus Fiber Backbone",
          description: "Deploy core-to-building fiber with ODF, splicing, and OTDR reports.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Structured Cabling Solution / Enterprise Grid / Campus Fiber",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Engineer resilient fiber backbone with redundant paths, ODF termination, and full test documentation.",
        features: [
          "Single & multi-mode fiber",
          "ODF & splice trays",
          "OTDR & light loss reports",
          "Redundant routing",
        ],
        specs: {
          Fiber: "OS2 / OM4",
          Termination: "LC / SC",
          Testing: "OTDR + OLTS",
          Warranty: "25-year manufacturer",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/structured-cabling-solution/enterprise-grid/distribution-layer",
            name: "Distribution Layer",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
      "distribution-layer": {
        hero: {
          title: "Distribution Layer",
          description: "Floor-level distribution with racks, containment, and labeling.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Structured Cabling Solution / Enterprise Grid / Distribution Layer",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Complete floor distribution build including racks, power, cable management, and documentation.",
        features: [
          "Floor racks & power",
          "Cable containment",
          "Labeling & documentation",
          "Preventive maintenance",
        ],
        specs: {
          Racks: "42U / 27U",
          Power: "Dual PDU",
          Containment: "Basket / trunking",
          Documentation: "Labeling pack",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/structured-cabling-solution/enterprise-grid/campus-fiber",
            name: "Campus Fiber Backbone",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
    },
  },
};
