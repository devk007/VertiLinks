import images from '../images';
import {
  Headset,
  Network,
  PhoneCall,
  ServerCog,
  SignalHigh,
  Smartphone,
  Wifi,
} from "lucide-react";

export default {
  slug: "pabx-solution",
  title: "PABX Solution",
  categoryPage: {
    hero: {
      title: "IP PBX & Unified Communication",
      description:
        "Modernize telephony with IP PBX, contact centre features, and seamless collaboration across locations.",
      bg: images.home.about,
      breadcrumb: "Home / Solutions / PABX Solution",
      cta: { label: "Talk to a UC Expert", to: "/contact" },
    },
    overview: {
      heading: "Unified Voice Platform",
      icon: PhoneCall,
      intro:
        "From SMB to enterprise clusters, our PABX solutions deliver advanced call routing, mobility, and integrations.",
      bulletsLeft: [
        "Hybrid IP/PSTN setups",
        "Auto attendant & IVR",
        "Call recording & analytics",
        "Call centre & CRM integration",
      ],
      bulletsRight: [
        "Failover & redundancy",
        "Remote extensions",
        "Unified messaging",
        "Managed voice services",
      ],
      keyBenefits: [
        { icon: "PhoneCall", title: "Reliable", desc: "Carrier-grade uptime with HA and SBC security." },
        { icon: "Wifi", title: "Mobile", desc: "Softphone and mobile apps keep staff connected anywhere." },
        { icon: "ServerCog", title: "Integrated", desc: "Connect CRM, service desk, and billing platforms." },
      ],
    },
    brands: [
      {
        slug: "business-voice",
        name: "Business Voice",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "SMB IP PBX with auto-attendant, call queues, and recording.",
        highlights: [
          "Digital/analog gateway",
          "Call recording",
          "Mobile extensions",
        ],
        industries: ["Retail", "Healthcare", "Hospitality"],
        to: "/solutions/pabx-solution/business-voice",
      },
      {
        slug: "enterprise-uc",
        name: "Enterprise UC",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "High-availability clusters, contact center, and analytics dashboards.",
        highlights: [
          "HA clusters",
          "Omni-channel",
          "Analytics",
        ],
        industries: ["Banking", "BPO", "Government"],
        to: "/solutions/pabx-solution/enterprise-uc",
      },
    ],
  },
  brandPages: {
    "business-voice": {
      hero: {
        title: "Business Voice PBX",
        description: "Feature-rich IP PBX tailored for SMEs and multi-branch setups.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / PABX Solution / Business Voice",
        cta: { label: "See Plans", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Headset", title: "Contact Ready", desc: "Queue management, call recording, and wallboards." },
        { icon: "SignalHigh", title: "Scalable", desc: "Scale from 20 to 500 extensions with license upgrades." },
        { icon: "Smartphone", title: "Anywhere", desc: "Mobile and web softphones with secure VPN access." },
      ],
      models: [
        {
          slug: "starter-pbx",
          name: "Starter PBX",
          image: images.home.about,
          brief: "Up to 50 extensions with voicemail, IVR, and call recording.",
          features: [
            "50 extensions",
            "Auto attendant",
            "Call recording",
          ],
          to: "/solutions/pabx-solution/business-voice/starter-pbx",
        },
        {
          slug: "branch-pbx",
          name: "Branch PBX",
          image: images.home.about,
          brief: "150 extensions with remote branch connectivity and reporting.",
          features: [
            "150 extensions",
            "Branch VPN",
            "Wallboard",
          ],
          to: "/solutions/pabx-solution/business-voice/branch-pbx",
        },
      ],
    },
    "enterprise-uc": {
      hero: {
        title: "Enterprise UC Platform",
        description: "Carrier-grade voice, contact center, and collaboration suite.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / PABX Solution / Enterprise UC",
      },
      keyBenefits: [
        { icon: "Network", title: "Geo Redundant", desc: "Active-active nodes with SBC and SIP trunk failover." },
        { icon: "ServerCog", title: "Integrated", desc: "CRM, service desk, and BI connectors out of the box." },
        { icon: "Headset", title: "Omni Channel", desc: "Voice, chat, email, and social inbox in one agent desktop." },
      ],
      models: [
        {
          slug: "global-pbx",
          name: "Global PBX",
          image: images.home.about,
          brief: "Clustered PBX with SBC, HA core, and branch survivability.",
          features: [
            "Geo redundancy",
            "SBC security",
            "Survivable gateways",
          ],
          to: "/solutions/pabx-solution/enterprise-uc/global-pbx",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "contact-centre",
          name: "Contact Centre Suite",
          image: images.home.about,
          brief: "Advanced call centre with recording, QA, and analytics dashboards.",
          features: [
            "Quality monitoring",
            "Analytics dashboards",
            "CRM integration",
          ],
          to: "/solutions/pabx-solution/enterprise-uc/contact-centre",
        },
      ],
    },
  },

  modelPages: {
    "business-voice": {
      "starter-pbx": {
        hero: {
          title: "Starter PBX",
          description: "Up to 50 extensions with auto attendant and call recording.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / PABX Solution / Business Voice / Starter PBX",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Ideal for single-site SMBs, providing auto attendant, voicemail, and call recording out of the box.",
        features: [
          "Up to 50 extensions",
          "Auto attendant & IVR",
          "Call recording",
          "Desktop & mobile softphones",
        ],
        specs: {
          Extensions: "50",
          Trunks: "4 FXO / SIP",
          Recording: "Built-in 120GB",
          Management: "Web UI",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/pabx-solution/business-voice/branch-pbx",
            name: "Branch PBX",
            image: images.home.about,
          },
        ],
      },
      "branch-pbx": {
        hero: {
          title: "Branch PBX",
          description: "Multi-branch connectivity with VPN and wallboard reporting.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / PABX Solution / Business Voice / Branch PBX",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Connect remote branches using secure VPN gateways with centralized reporting and CRM popping.",
        features: [
          "150 extensions",
          "Branch VPN",
          "Wallboard dashboards",
          "CRM screen pop",
        ],
        specs: {
          Extensions: "150",
          VPN: "Site-to-site",
          Reporting: "Live wallboards",
          Integrations: "CRM / Helpdesk",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/pabx-solution/enterprise-uc/global-pbx",
            name: "Global PBX",
            image: images.home.about,
          },
        ],
      },
    },
    "enterprise-uc": {
      "global-pbx": {
        hero: {
          title: "Global PBX",
          description: "Clustered PBX with SBC, HA core, and survivable gateways.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / PABX Solution / Enterprise UC / Global PBX",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Designed for enterprises needing geo-redundant voice with SIP trunk security and branch survivability.",
        features: [
          "HA core cluster",
          "SBC security",
          "Survivable branch gateways",
          "QoS monitoring",
        ],
        specs: {
          Extensions: "500+",
          Redundancy: "Active/standby",
          Security: "SBC + TLS",
          Monitoring: "24/7 NOC",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/pabx-solution/enterprise-uc/contact-centre",
            name: "Contact Centre Suite",
            image: images.home.about,
          },
        ],
      },
      "contact-centre": {
        hero: {
          title: "Contact Centre Suite",
          description: "Omni-channel contact centre with QA, analytics, and CRM integration.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / PABX Solution / Enterprise UC / Contact Centre",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Deliver a full contact centre with voice, chat, email, social inboxes, quality assurance, and analytics dashboards.",
        features: [
          "Voice, chat, email",
          "Quality monitoring",
          "Analytics dashboards",
          "CRM connectors",
        ],
        specs: {
          Channels: "Omni-channel",
          QA: "Screen & voice recording",
          Analytics: "Real-time & historical",
          Integrations: "Salesforce, Dynamics",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/pabx-solution/enterprise-uc/global-pbx",
            name: "Global PBX",
            image: images.home.about,
          },
        ],
      },
    },
  },
};
