import images from '../images';
import {
  CircuitBoard,
  Fingerprint,
  Lock,
  Network,
  ScanFace,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default {
  slug: "access-control-system",
  title: "Access Control System",
  categoryPage: {
    hero: {
      title: "Adaptive Access Control",
      description:
        "Control entry across doors, gates, elevators, and data centres with unified policies and real-time visibility.",
      bg: images.home.tech.three,
      breadcrumb: "Home / Solutions / Access Control System",
      cta: { label: "Schedule Assessment", to: "/contact" },
    },
    overview: {
      heading: "Unified Physical Access Platform",
      icon: ShieldCheck,
      intro:
        "Integrate controllers, readers, and identity management with SOC visibility and compliance-ready reporting.",
      bulletsLeft: [
        "Multi-technology readers (RFID, BLE, mobile)",
        "Elevator & parking integration",
        "Visitor & contractor workflows",
        "High-availability controller clusters",
      ],
      bulletsRight: [
        "Video verification",
        "Real-time alarms & lockdown",
        "Badge lifecycle management",
        "SIEM & HR integrations",
      ],
      keyBenefits: [
        { icon: "ShieldCheck", title: "Secure", desc: "Encrypted credentials and anti-tamper hardware." },
        { icon: "ScanFace", title: "Frictionless", desc: "Touchless, mobile, and biometric experiences." },
        { icon: "Network", title: "Unified", desc: "Single console connects access, alarms, and CCTV." },
      ],
    },
    brands: [
      {
        slug: "pro-series",
        name: "Pro Series",
        logo: images.products.hero,
        banner: images.home.tech.three,
        blurb: "Mid-market controllers with wired and wireless reader support.",
        highlights: [
          "4/8 door controllers",
          "Mobile credential support",
          "Rule-based alarms",
        ],
        industries: ["Corporate", "Healthcare", "Education"],
        to: "/solutions/access-control-system/pro-series",
      },
      {
        slug: "enterprise-series",
        name: "Enterprise Series",
        logo: images.products.hero,
        banner: images.home.tech.three,
        blurb: "Tier-1 platform with global scalability, high availability, and compliance modules.",
        highlights: [
          "Geo-redundant architecture",
          "API-first design",
          "Video & alarm fusion",
        ],
        industries: ["Government", "Banking", "Critical Infrastructure"],
        to: "/solutions/access-control-system/enterprise-series",
      },
    ],
  },
  brandPages: {
    "pro-series": {
      hero: {
        title: "Pro Access Suite",
        description: "Scalable access control for multi-site deployments.",
        bg: images.home.tech.three,
        breadcrumb: "Home / Solutions / Access Control System / Pro Series",
        cta: { label: "View Packages", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Fingerprint", title: "Biometric Ready", desc: "Supports fingerprint, face, and palm readers." },
        { icon: "Smartphone", title: "Mobile Credentials", desc: "Issue BLE/NFC passes with expiry policies." },
        { icon: "CircuitBoard", title: "Modular", desc: "Expansion boards add IO, relays, and elevator control." },
      ],
      models: [
        {
          slug: "starter",
          name: "Starter Bundle",
          image: images.home.tech.three,
          brief: "4-door controller, readers, and centralized software for HQ.",
          features: [
            "4-door PoE controller",
            "Two-factor reader kit",
            "Basic reporting",
          ],
          to: "/solutions/access-control-system/pro-series/starter",
        },
        {
          slug: "advanced",
          name: "Advanced Bundle",
          image: images.home.tech.three,
          brief: "Add elevator control, mobile credentials, and SOC alerts.",
          features: [
            "Elevator integration",
            "Mobile credentials",
            "Alarm automation",
          ],
          to: "/solutions/access-control-system/pro-series/advanced",
        },
      ],
    },
    "enterprise-series": {
      hero: {
        title: "Enterprise Access Platform",
        description: "Zero-trust access for critical infrastructure and global enterprises.",
        bg: images.home.tech.three,
        breadcrumb: "Home / Solutions / Access Control System / Enterprise Series",
      },
      keyBenefits: [
        { icon: "Lock", title: "Zero Trust", desc: "Role-based and risk-based adaptive access policies." },
        { icon: "Network", title: "Integrations", desc: "SIEM, HRMS, visitor and video analytics connectors." },
        { icon: "ScanFace", title: "Frictionless", desc: "Fast lane gates, mobile IDs, and biometric kiosks." },
      ],
      models: [
        {
          slug: "global",
          name: "Global Tier",
          image: images.home.tech.three,
          brief: "Geo-redundant servers with 24/7 SOC monitoring.",
          features: [
            "Active-active servers",
            "SOC monitoring",
            "Disaster recovery",
          ],
          to: "/solutions/access-control-system/enterprise-series/global",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "compliance",
          name: "Compliance Tier",
          image: images.home.tech.three,
          brief: "Audit trails, badge lifecycle automation, and risk scoring.",
          features: [
            "Badge lifecycle",
            "Audit-ready reports",
            "Risk scoring",
          ],
          to: "/solutions/access-control-system/enterprise-series/compliance",
        },
      ],
    },
  },

  modelPages: {
    "pro-series": {
      starter: {
        hero: {
          title: "Starter Bundle — Pro Series",
          description: "Kick-start access control for HQ with PoE controllers and secure readers.",
          bg: images.home.tech.three,
          breadcrumb: "Home / Solutions / Access Control System / Pro Series / Starter",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.tech.three],
        overview:
          "Includes a 4-door PoE controller, two-factor readers, and management software for main office deployments.",
        features: [
          "4-door PoE controller",
          "Dual-factor readers",
          "Rule-based alarms",
          "Web-based management",
        ],
        specs: {
          Doors: "4",
          Credentials: "RFID + PIN",
          Connectivity: "Ethernet / PoE",
          Software: "Browser console",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/access-control-system/pro-series/advanced",
            name: "Advanced Bundle",
            image: images.home.tech.three,
          },
        ],
      },
      advanced: {
        hero: {
          title: "Advanced Bundle — Pro Series",
          description: "Add elevator control, mobile credentials, and alarm automation.",
          bg: images.home.tech.three,
          breadcrumb: "Home / Solutions / Access Control System / Pro Series / Advanced",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.tech.three],
        overview:
          "Enhance your deployment with elevator IO boards, mobile ID provisioning, and SOC-ready alerts.",
        features: [
          "Elevator integration",
          "BLE/NFC mobile IDs",
          "Alarm automation",
          "API connectors",
        ],
        specs: {
          Doors: "16 expandable",
          Credentials: "RFID / Mobile",
          ElevatorIO: "Up to 64 floors",
          Alerts: "Email, SMS, SOC",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/access-control-system/enterprise-series/global",
            name: "Global Tier",
            image: images.home.tech.three,
          },
        ],
      },
    },
    "enterprise-series": {
      global: {
        hero: {
          title: "Global Tier — Enterprise Platform",
          description: "Geo-redundant servers with 24/7 SOC coverage for critical facilities.",
          bg: images.home.tech.three,
          breadcrumb: "Home / Solutions / Access Control System / Enterprise Series / Global",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.tech.three],
        overview:
          "Deploy active-active controllers, multi-region redundancy, and continuous SOC monitoring for mission critical access.",
        features: [
          "Active-active servers",
          "24/7 SOC monitoring",
          "Disaster recovery plan",
          "Hardware redundancy",
        ],
        specs: {
          Availability: "99.9%",
          Regions: "3",
          Monitoring: "SOC + SIEM",
          Compliance: "ISO 27001",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/access-control-system/enterprise-series/compliance",
            name: "Compliance Tier",
            image: images.home.tech.three,
          },
        ],
      },
      compliance: {
        hero: {
          title: "Compliance Tier — Enterprise Platform",
          description: "Auditable badge lifecycle automation with risk scoring and reporting.",
          bg: images.home.tech.three,
          breadcrumb: "Home / Solutions / Access Control System / Enterprise Series / Compliance",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.tech.three],
        overview:
          "Automate badge issuance, renewals, and deprovisioning with full audit trails and risk analytics.",
        features: [
          "Badge lifecycle automation",
          "Audit-ready reports",
          "Risk scoring dashboard",
          "Visitor & contractor workflows",
        ],
        specs: {
          Workflow: "Customisable",
          Reporting: "PDF / CSV",
          RiskEngine: "Built-in",
          Integrations: "HRMS, SIEM",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/access-control-system/enterprise-series/global",
            name: "Global Tier",
            image: images.home.tech.three,
          },
        ],
      },
    },
  },
};
