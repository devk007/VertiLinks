import {DoorOpen} from 'lucide-react';

export default {
  slug: "turnstile-and-speed-gates",
  title: "Turnstile & Speed Gates",

  categoryPage: {
    hero: {
      title: "Turnstiles & Speed Gates",
      description:
        "From tripod turnstiles to elegant optical speed gates with ACS & biometrics integration.",
      bg: "/assets/heroes/hero-turnstile.jpg",
      breadcrumb: "Home / Products / Turnstiles & Speed Gates",
      cta: { label: "Request Site Visit", to: "/contact" },
    },
    overview: {
      heading: "Control Entry with Style",
      icon:DoorOpen,
      intro:
        "Balance throughput with security for offices, campuses and factories. Integrates with readers and visitor systems.",
      bulletsLeft: ["Tripod, swing, flap", "Optical IR sensors", "Fail-safe/secure modes", "Stainless steel"],
      bulletsRight: ["Reader/bio mounting", "Anti-tailgating", "Emergency drop-arm", "Onsite install"],
      keyBenefits: [
        { icon: "Users", title: "Throughput", desc: "Fast passage with IR sensors." },
        { icon: "Shield", title: "Secure", desc: "Anti-tailgating & alarm." },
        { icon: "Paintbrush", title: "Aesthetics", desc: "Glass & steel finishes." },
      ],
    },
    brands: [
      {
        slug: "zkteco",
        name: "ZKTeco",
        logo: "/assets/brands/zkteco.svg",
        banner: "/assets/banners/zkteco-turnstile.jpg",
        blurb: "Cost-effective tripod and flap barriers with reader mounts.",
        highlights: ["Tripod/Flap/Swing", "Anti-tailgate", "ACS ready"],
        industries: ["Corporate", "Factories"],
        preview: [{ name: "TS1000", image: "/assets/products/turnstile/zkteco-ts1000.jpg" }],
        to: "/products/turnstile-and-speed-gates/zkteco",
      },
      {
        slug: "boon-edam",
        name: "Boon Edam",
        logo: "/assets/brands/boonedam.svg",
        banner: "/assets/banners/boon-edam.jpg",
        blurb: "Premium speed gates and revolving doors for prestige sites.",
        highlights: ["Speedlane", "Premium finish", "High throughput"],
        industries: ["Enterprise HQ", "Airports"],
        preview: [{ name: "Speedlane Swing", image: "/assets/products/turnstile/boon-speedlane.jpg" }],
        to: "/products/turnstile-and-speed-gates/boon-edam",
      },
    ],
  },

  brandPages: {
    zkteco: {
      hero: {
        title: "ZKTeco Turnstiles",
        description: "Tripod and flap barriers for reliable entry control.",
        bg: "/assets/banners/zkteco-turnstile.jpg",
        breadcrumb: "Home / Products / Turnstiles & Speed Gates / ZKTeco",
      },
      keyBenefits: [
        { icon: "Wrench", title: "Serviceable", desc: "Simple mechanism with spares." },
        { icon: "Plug", title: "Integration", desc: "Reader plates & IO." },
        { icon: "AlarmSmoke", title: "Safety", desc: "Emergency drop-arm." },
      ],
      models: [
        {
          slug: "ts1000",
          name: "TS1000 Tripod",
          image: "/assets/products/turnstile/zkteco-ts1000.jpg",
          brief: "Compact tripod for receptions.",
          features: ["304 SS", "Single/bi-direction", "Drop arm option"],
          to: "/products/turnstile-and-speed-gates/zkteco/ts1000",
        },
      ],
    },

    "boon-edam": {
      hero: {
        title: "Boon Edam Speed Gates",
        description: "Premium optical gates for corporate entrances.",
        bg: "/assets/banners/boon-edam.jpg",
        breadcrumb: "Home / Products / Turnstiles & Speed Gates / Boon Edam",
      },
      keyBenefits: [
        { icon: "Sparkles", title: "Aesthetics", desc: "Elegant glass & finishes." },
        { icon: "UsersRound", title: "Throughput", desc: "Fast wings with IR matrix." },
        { icon: "ShieldCheck", title: "Security", desc: "Tailgate detection & alarms." },
      ],
      models: [
        {
          slug: "speedlane-swing",
          name: "Speedlane Swing",
          image: "/assets/products/turnstile/boon-speedlane.jpg",
          brief: "Iconic speed gate with custom finishes.",
          features: ["High throughput", "Custom heights", "ACS integration"],
          to: "/products/turnstile-and-speed-gates/boon-edam/speedlane-swing",
        },
      ],
    },
  },

  modelPages: {
    zkteco: {
      ts1000: {
        hero: {
          title: "ZKTeco TS1000 Tripod",
          description: "Compact entry control with durable mechanism.",
          bg: "/assets/products/turnstile/zkteco-ts1000-hero.jpg",
          breadcrumb:
            "Home / Products / Turnstiles & Speed Gates / ZKTeco / TS1000",
        },
        gallery: ["/assets/products/turnstile/zkteco-ts1000.jpg"],
        overview:
          "Good fit for receptions and factory entries; integrates with readers.",
        features: ["304 stainless", "Drop arm", "Bi-direction"],
        specs: { Material: "SS304", PassageWidth: "≤550mm", Power: "AC 100–120/200–240V" },
        downloads: [{ label: "Datasheet", href: "/downloads/turnstile/ts1000.pdf" }],
        related: [{ href: "/products/turnstile-and-speed-gates/boon-edam/speedlane-swing", name: "Boon Speedlane", image: "/assets/products/turnstile/boon-speedlane.jpg" }],
      },
    },
    "boon-edam": {
      "speedlane-swing": {
        hero: {
          title: "Boon Edam Speedlane Swing",
          description: "Premium optical speed gate for high-end lobbies.",
          bg: "/assets/products/turnstile/boon-speedlane-hero.jpg",
          breadcrumb:
            "Home / Products / Turnstiles & Speed Gates / Boon Edam / Speedlane Swing",
        },
        gallery: ["/assets/products/turnstile/boon-speedlane.jpg"],
        overview:
          "Elegant design with custom options and reliable anti-tailgating.",
        features: ["IR matrix", "Custom finishes", "Integration kits"],
        specs: { PassageWidth: "650–900mm", Height: "1000mm+", Power: "230V" },
        downloads: [{ label: "Brochure", href: "/downloads/turnstile/speedlane-swing.pdf" }],
        related: [{ href: "/products/turnstile-and-speed-gates/zkteco/ts1000", name: "ZKTeco TS1000", image: "/assets/products/turnstile/zkteco-ts1000.jpg" }],
      },
    },
  },

  seo: {
    title: "Turnstiles & Speed Gates | VertiLinks",
    description: "ZKTeco and Boon Edam entrance control solutions.",
    canonical: "/products/turnstile-and-speed-gates",
  },
};
