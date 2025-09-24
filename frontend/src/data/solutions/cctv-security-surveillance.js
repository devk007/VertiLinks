import {
  Camera,
  HardDriveDownload,
  MonitorSmartphone,
  Scan,
  Shield,
  Siren,
  Video,
  Wifi,
} from "lucide-react";

export default {
  slug: "cctv-security-surveillance",
  title: "CCTV Security & Surveillance",
  categoryPage: {
    hero: {
      title: "Always-On Surveillance",
      description:
        "Deploy NDAA-compliant cameras, VMS, and analytics that keep campuses, warehouses, and smart cities protected.",
      bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
      breadcrumb: "Home / Solutions / CCTV Security & Surveillance",
      cta: { label: "Request Site Survey", to: "/contact" },
    },
    overview: {
      heading: "Video Intelligence Platform",
      icon: Camera,
      intro:
        "From edge recording to control room displays, we design surveillance architectures that scale and keep you compliant.",
      bulletsLeft: [
        "4K/MP cameras with AI analytics",
        "Hybrid cloud & on-prem VMS",
        "Thermal & perimeter protection",
        "Control room video walls",
      ],
      bulletsRight: [
        "ANPR & face recognition",
        "Storage lifecycle planning",
        "Cyber-hardened deployments",
        "Command centre training",
      ],
      keyBenefits: [
        { icon: "Camera", title: "Clarity", desc: "Crystal clear video with WDR and low-light performance." },
        { icon: "Shield", title: "Reliable", desc: "Redundant storage and health monitoring eliminate downtime." },
        { icon: "MonitorSmartphone", title: "Accessible", desc: "View live feeds securely from SOC, desktop, or mobile." },
      ],
    },
    brands: [
      {
        slug: "smart-guard",
        name: "Smart Guard",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-1081869356-1024x1024.jpg",
        blurb: "End-to-end IP surveillance for SME and campus deployments.",
        highlights: [
          "IP cameras & NVR",
          "Mobile apps",
          "Health monitoring",
        ],
        industries: ["Retail", "Education", "Hospitality"],
        to: "/solutions/cctv-security-surveillance/smart-guard",
      },
      {
        slug: "command-vision",
        name: "Command Vision",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-1081869356-1024x1024.jpg",
        blurb: "Mission-critical VMS with analytics, video walls, and integrations.",
        highlights: [
          "Video wall",
          "Analytics suite",
          "Failover recording",
        ],
        industries: ["Logistics", "Government", "Oil & Gas"],
        to: "/solutions/cctv-security-surveillance/command-vision",
      },
    ],
  },
  brandPages: {
    "smart-guard": {
      hero: {
        title: "Smart Guard Surveillance",
        description: "Comprehensive CCTV kit with AI-assisted monitoring.",
        bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
        breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Smart Guard",
        cta: { label: "See Bundles", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Wifi", title: "Flexible", desc: "Supports wired, wireless, and solar-powered deployments." },
        { icon: "Siren", title: "Proactive", desc: "Event-based alerts with siren/strobe automation." },
        { icon: "HardDriveDownload", title: "Retention", desc: "Long-term storage with smart archiving policies." },
      ],
      models: [
        {
          slug: "retail-kit",
          name: "Retail Kit",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "8-camera package with PoE switch, NVR, and mobile app.",
          features: [
            "8x PoE cameras",
            "4TB NVR",
            "Mobile alerts",
          ],
          to: "/solutions/cctv-security-surveillance/smart-guard/retail-kit",
        },
        {
          slug: "campus-kit",
          name: "Campus Kit",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "32-camera setup with analytics and centralized management.",
          features: [
            "32x AI cameras",
            "Central VMS",
            "ANPR module",
          ],
          to: "/solutions/cctv-security-surveillance/smart-guard/campus-kit",
        },
      ],
    },
    "command-vision": {
      hero: {
        title: "Command Vision VMS",
        description: "Large-scale video platform with analytics & video walls.",
        bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
        breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Command Vision",
      },
      keyBenefits: [
        { icon: "Scan", title: "Analytics", desc: "Behavior detection, loitering, and intrusion detection algorithms." },
        { icon: "Video", title: "Unified", desc: "Integrates CCTV, access, and alarms into single timeline." },
        { icon: "MonitorSmartphone", title: "Situational Awareness", desc: "Operator workflows with incident timeline and evidence locker." },
      ],
      models: [
        {
          slug: "control-room",
          name: "Control Room Bundle",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Video wall, operator consoles, and VMS enterprise license.",
          features: [
            "Video wall processors",
            "Operator stations",
            "Failover servers",
          ],
          to: "/solutions/cctv-security-surveillance/command-vision/control-room",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "analytics-pack",
          name: "Analytics Pack",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Add AI modules like ANPR, face recognition, and heat mapping.",
          features: [
            "ANPR",
            "Face recognition",
            "Heat maps",
          ],
          to: "/solutions/cctv-security-surveillance/command-vision/analytics-pack",
        },
      ],
    },
  },

  modelPages: {
    "smart-guard": {
      "retail-kit": {
        hero: {
          title: "Retail Kit — Smart Guard",
          description: "8-camera PoE surveillance kit with mobile monitoring.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Smart Guard / Retail Kit",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Designed for retail floors and clinics, the Retail Kit bundles 8 PoE cameras, NVR storage, and secure mobile access.",
        features: [
          "8x PoE cameras",
          "4TB NVR",
          "Mobile app alerts",
          "Centralized health monitoring",
        ],
        specs: {
          Resolution: "4MP",
          Storage: "4TB",
          Analytics: "Motion & tamper",
          Viewing: "iOS / Android",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/cctv-security-surveillance/smart-guard/campus-kit",
            name: "Campus Kit",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
      "campus-kit": {
        hero: {
          title: "Campus Kit — Smart Guard",
          description: "32-camera AI-enabled setup for campuses and warehouses.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Smart Guard / Campus Kit",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Cover large sites with AI cameras, ANPR integration, and centralized VMS for control room operations.",
        features: [
          "32 AI cameras",
          "Central VMS",
          "ANPR module",
          "Video wall ready",
        ],
        specs: {
          Resolution: "4K mix",
          Storage: "N+1 failover",
          Analytics: "ANPR, intrusion",
          Connectivity: "Fiber / wireless backhaul",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/cctv-security-surveillance/command-vision/control-room",
            name: "Control Room Bundle",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
    },
    "command-vision": {
      "control-room": {
        hero: {
          title: "Control Room Bundle — Command Vision",
          description: "Operator consoles, video wall processors, and enterprise VMS license.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Command Vision / Control Room",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Build a mission control room with multi-operator consoles, processors, and redundant VMS servers.",
        features: [
          "Video wall processors",
          "Operator workstations",
          "Failover VMS",
          "Incident workflows",
        ],
        specs: {
          Operators: "Up to 8",
          VideoWall: "3x3 LED",
          Storage: "SAN / NAS",
          Reporting: "Incident timeline",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/cctv-security-surveillance/command-vision/analytics-pack",
            name: "Analytics Pack",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
      "analytics-pack": {
        hero: {
          title: "Analytics Pack — Command Vision",
          description: "Computer vision add-ons for ANPR, face recognition, and heat mapping.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / CCTV Security & Surveillance / Command Vision / Analytics Pack",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Activate AI modules that detect license plates, faces, and crowd density directly within Command Vision VMS.",
        features: [
          "ANPR engine",
          "Face recognition",
          "Heat map analytics",
          "Rule-based alerts",
        ],
        specs: {
          AIModels: "Edge GPU",
          Integration: "VMS native",
          Response: "Real-time",
          Licensing: "Per channel",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/cctv-security-surveillance/command-vision/control-room",
            name: "Control Room Bundle",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
    },
  },
};
