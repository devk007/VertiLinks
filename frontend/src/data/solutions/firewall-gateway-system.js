import {
  Activity,
  AlarmSmoke,
  CloudFog,
  Fingerprint,
  Network,
  ShieldCheck,
  Siren,
  Usb,
} from "lucide-react";

export default {
  slug: "firewall-gateway-system",
  title: "Firewall & Gateway System",
  categoryPage: {
    hero: {
      title: "Next-Gen Firewall & Secure Gateway",
      description:
        "Protect your perimeter, branch, and cloud workloads with unified threat management and secure access.",
      bg: "/assets/istockphoto-181098768-1024x1024.jpg",
      breadcrumb: "Home / Solutions / Firewall & Gateway System",
      cta: { label: "Book Security Audit", to: "/contact" },
    },
    overview: {
      heading: "Adaptive Network Security",
      icon: ShieldCheck,
      intro:
        "We architect, deploy, and manage firewalls, intrusion prevention, SD-WAN, and zero trust network access.",
      bulletsLeft: [
        "NGFW deployment & hardening",
        "UTM & sandboxing",
        "Secure SD-WAN",
        "Site-to-site & remote access VPN",
      ],
      bulletsRight: [
        "Segmentation & micro-segmentation",
        "Threat intelligence feeds",
        "Cloud edge security",
        "Managed SOC & response",
      ],
      keyBenefits: [
        { icon: "ShieldCheck", title: "Protected", desc: "Advanced threat protection with IPS/IDS and sandboxing." },
        { icon: "Network", title: "Connected", desc: "Secure connectivity for branches, users, and clouds." },
        { icon: "Activity", title: "Visible", desc: "Central dashboards with compliance-ready reporting." },
      ],
    },
    brands: [
      {
        slug: "utm-series",
        name: "UTM Series",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-181098768-1024x1024.jpg",
        blurb: "Unified threat management for SMBs and distributed branches.",
        highlights: [
          "UTM services",
          "VPN & SD-WAN",
          "Cloud management",
        ],
        industries: ["Retail", "Education", "Healthcare"],
        to: "/solutions/firewall-gateway-system/utm-series",
      },
      {
        slug: "nextgen-series",
        name: "NextGen Series",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-181098768-1024x1024.jpg",
        blurb: "High-performance NGFW with zero trust and SOC integrations.",
        highlights: [
          "Zero trust access",
          "Inline sandbox",
          "Automation APIs",
        ],
        industries: ["Banking", "Government", "Enterprise"],
        to: "/solutions/firewall-gateway-system/nextgen-series",
      },
    ],
  },
  brandPages: {
    "utm-series": {
      hero: {
        title: "UTM Firewall Suite",
        description: "All-in-one security for SMEs and distributed networks.",
        bg: "/assets/istockphoto-181098768-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Firewall & Gateway System / UTM Series",
        cta: { label: "See Appliances", to: "/contact" },
      },
      keyBenefits: [
        { icon: "CloudFog", title: "Secure Edge", desc: "Web filtering, anti-malware, and application control." },
        { icon: "Usb", title: "Easy Deploy", desc: "Zero-touch provisioning with cloud management console." },
        { icon: "Fingerprint", title: "User Aware", desc: "Identify users and apply granular policies." },
      ],
      models: [
        {
          slug: "utm-100",
          name: "UTM 100",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Suitable for 50-100 users with UTM subscription bundle.",
          features: [
            "Up to 1 Gbps NGFW",
            "UTM bundle",
            "Cloud management",
          ],
          to: "/solutions/firewall-gateway-system/utm-series/utm-100",
        },
        {
          slug: "utm-300",
          name: "UTM 300",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "300-user appliance with dual WAN and SD-WAN templates.",
          features: [
            "Dual WAN",
            "SD-WAN",
            "VPN hub",
          ],
          to: "/solutions/firewall-gateway-system/utm-series/utm-300",
        },
      ],
    },
    "nextgen-series": {
      hero: {
        title: "NextGen Firewall Platform",
        description: "Enterprise NGFW with threat hunting and automation integrations.",
        bg: "/assets/istockphoto-181098768-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Firewall & Gateway System / NextGen Series",
      },
      keyBenefits: [
        { icon: "AlarmSmoke", title: "Threat Detection", desc: "Inline sandboxing and behavioral analytics." },
        { icon: "Siren", title: "Automated Response", desc: "SOAR integrations trigger real-time containment." },
        { icon: "Network", title: "Zero Trust", desc: "Micro-segmentation and identity-aware policies." },
      ],
      models: [
        {
          slug: "ngfw-700",
          name: "NGFW 700",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Up to 5 Gbps NGFW with high availability bundle.",
          features: [
            "5 Gbps throughput",
            "HA pair",
            "Threat intel",
          ],
          to: "/solutions/firewall-gateway-system/nextgen-series/ngfw-700",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "ngfw-1200",
          name: "NGFW 1200",
          image: "/assets/istockphoto-181098768-1024x1024.jpg",
          brief: "Data centre model with chassis options and advanced analytics.",
          features: [
            "Chassis option",
            "Advanced analytics",
            "API automation",
          ],
          to: "/solutions/firewall-gateway-system/nextgen-series/ngfw-1200",
        },
      ],
    },
  },

  modelPages: {
    "utm-series": {
      "utm-100": {
        hero: {
          title: "UTM 100",
          description: "Unified threat management appliance for 50-100 users.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Firewall & Gateway System / UTM Series / UTM 100",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Protect small offices with NGFW, web filtering, anti-malware, and cloud management in one appliance.",
        features: [
          "Up to 1 Gbps NGFW",
          "UTM security bundle",
          "Cloud-based management",
          "Integrated VPN",
        ],
        specs: {
          Users: "50-100",
          Interfaces: "6x GE",
          VPN: "IPSec / SSL",
          Management: "Cloud portal",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/firewall-gateway-system/utm-series/utm-300",
            name: "UTM 300",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
      "utm-300": {
        hero: {
          title: "UTM 300",
          description: "Higher throughput appliance with dual WAN and SD-WAN templates.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Firewall & Gateway System / UTM Series / UTM 300",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Secure distributed branches with dual WAN, SD-WAN templates, and centralized logging.",
        features: [
          "Dual WAN",
          "SD-WAN templates",
          "VPN hub",
          "Centralized reporting",
        ],
        specs: {
          Throughput: "2.5 Gbps NGFW",
          Interfaces: "8x GE + 2x SFP",
          SDWAN: "Dynamic path selection",
          Logging: "Cloud + on-prem",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/firewall-gateway-system/nextgen-series/ngfw-700",
            name: "NGFW 700",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
    },
    "nextgen-series": {
      "ngfw-700": {
        hero: {
          title: "NGFW 700",
          description: "Enterprise NGFW with inline sandboxing and high availability bundle.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Firewall & Gateway System / NextGen Series / NGFW 700",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Secure mid-size datacenters with 5 Gbps throughput, HA pair, and threat intel feeds.",
        features: [
          "5 Gbps throughput",
          "Inline sandbox",
          "High availability pair",
          "Threat intelligence feeds",
        ],
        specs: {
          Throughput: "5 Gbps",
          Redundancy: "Active/standby",
          Interfaces: "12x GE + 4x SFP",
          Features: "IPS, AV, Web filtering",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/firewall-gateway-system/nextgen-series/ngfw-1200",
            name: "NGFW 1200",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
      "ngfw-1200": {
        hero: {
          title: "NGFW 1200",
          description: "Chassis-based NGFW with automation APIs and analytics for large enterprises.",
          bg: "/assets/istockphoto-181098768-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Firewall & Gateway System / NextGen Series / NGFW 1200",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-181098768-1024x1024.jpg"],
        overview:
          "Deliver carrier-grade protection with chassis scalability, SOAR integrations, and analytics.",
        features: [
          "Chassis scalability",
          "SOAR automation",
          "Behavioral analytics",
          "API automation",
        ],
        specs: {
          Throughput: "12 Gbps",
          Slots: "4 service blades",
          Automation: "REST / gRPC APIs",
          Analytics: "Behavioral + ML",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/firewall-gateway-system/nextgen-series/ngfw-700",
            name: "NGFW 700",
            image: "/assets/istockphoto-181098768-1024x1024.jpg",
          },
        ],
      },
    },
  },
};
