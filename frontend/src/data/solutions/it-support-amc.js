import images from '../images';
import {
  ClipboardCheck,
  Headset,
  LifeBuoy,
  MonitorCog,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default {
  slug: "it-support-amc",
  title: "IT Support and AMC",
  categoryPage: {
    hero: {
      title: "Managed IT Support & AMC",
      description:
        "Keep your infrastructure healthy with proactive maintenance, helpdesk, and on-site support plans.",
      bg: images.products.hero,
      breadcrumb: "Home / Solutions / IT Support and AMC",
      cta: { label: "Choose a Plan", to: "/contact" },
    },
    overview: {
      heading: "Comprehensive IT Managed Services",
      icon: LifeBuoy,
      intro:
        "We deliver helpdesk, on-site engineers, preventative maintenance, and lifecycle management under SLAs.",
      bulletsLeft: [
        "24/7 helpdesk",
        "On-site assistance",
        "Preventive maintenance",
        "Asset lifecycle management",
      ],
      bulletsRight: [
        "Patch & security updates",
        "Backup & DR checks",
        "Vendor coordination",
        "Reporting & reviews",
      ],
      keyBenefits: [
        { icon: "Headset", title: "Responsive", desc: "Multi-channel helpdesk with defined SLAs." },
        { icon: "ShieldCheck", title: "Secure", desc: "Patching, antivirus, and security monitoring built-in." },
        { icon: "ClipboardCheck", title: "Predictable", desc: "Fixed-fee coverage with regular reports." },
      ],
    },
    brands: [
      {
        slug: "support-care",
        name: "Support Care",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "SMB-focused AMC with quarterly health checks and remote support.",
        highlights: [
          "Remote support",
          "Quarterly visits",
          "Security updates",
        ],
        industries: ["SMB", "Retail", "Education"],
        to: "/solutions/it-support-amc/support-care",
      },
      {
        slug: "enterprise-care",
        name: "Enterprise Care",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Dedicated team, on-site engineers, and 24/7 monitoring for enterprises.",
        highlights: [
          "Dedicated engineer",
          "24/7 NOC",
          "Lifecycle management",
        ],
        industries: ["Manufacturing", "Finance", "Healthcare"],
        to: "/solutions/it-support-amc/enterprise-care",
      },
    ],
  },
  brandPages: {
    "support-care": {
      hero: {
        title: "Support Care AMC",
        description: "Affordable managed services plan for growing businesses.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / IT Support and AMC / Support Care",
        cta: { label: "See Plans", to: "/contact" },
      },
      keyBenefits: [
        { icon: "LifeBuoy", title: "Helpdesk", desc: "Unlimited support tickets with remote resolution." },
        { icon: "Wrench", title: "Preventive", desc: "Monthly maintenance and health checks." },
        { icon: "MonitorCog", title: "Monitoring", desc: "Endpoint monitoring keeps systems optimized." },
      ],
      models: [
        {
          slug: "basic-amc",
          name: "Basic AMC",
          image: images.products.hero,
          brief: "Covers up to 25 endpoints with remote helpdesk and quarterly visits.",
          features: [
            "Remote helpdesk",
            "Quarterly visits",
            "Security updates",
          ],
          to: "/solutions/it-support-amc/support-care/basic-amc",
        },
        {
          slug: "plus-amc",
          name: "Plus AMC",
          image: images.products.hero,
          brief: "Adds monthly visits, backup checks, and vendor coordination.",
          features: [
            "Monthly visits",
            "Backup checks",
            "Vendor coordination",
          ],
          to: "/solutions/it-support-amc/support-care/plus-amc",
        },
      ],
    },
    "enterprise-care": {
      hero: {
        title: "Enterprise Care AMC",
        description: "Dedicated IT managed services with proactive operations.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / IT Support and AMC / Enterprise Care",
      },
      keyBenefits: [
        { icon: "Headset", title: "Dedicated", desc: "Resident engineer and priority escalation." },
        { icon: "ShieldCheck", title: "Secure", desc: "Advanced patching, endpoint security, and reporting." },
        { icon: "ClipboardCheck", title: "Governed", desc: "Monthly service reviews with KPIs and roadmap." },
      ],
      models: [
        {
          slug: "enterprise-standard",
          name: "Enterprise Standard",
          image: images.products.hero,
          brief: "Core managed services with 8x5 onsite and 24/7 remote support.",
          features: [
            "8x5 onsite",
            "24/7 remote",
            "Monthly reviews",
          ],
          to: "/solutions/it-support-amc/enterprise-care/enterprise-standard",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "enterprise-premium",
          name: "Enterprise Premium",
          image: images.products.hero,
          brief: "Full coverage with 24/7 onsite, DR drills, and compliance reporting.",
          features: [
            "24/7 onsite",
            "DR drills",
            "Compliance reporting",
          ],
          to: "/solutions/it-support-amc/enterprise-care/enterprise-premium",
        },
      ],
    },
  },

  modelPages: {
    "support-care": {
      "basic-amc": {
        hero: {
          title: "Basic AMC",
          description: "Remote helpdesk and quarterly onsite visits for up to 25 endpoints.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / IT Support and AMC / Support Care / Basic AMC",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Keep core systems healthy with unlimited remote support, quarterly preventive maintenance, and security updates.",
        features: [
          "Remote helpdesk",
          "Quarterly onsite visits",
          "Security patching",
          "Asset reporting",
        ],
        specs: {
          Endpoints: "Up to 25",
          Coverage: "8x5 remote",
          Visits: "Quarterly",
          Reporting: "Quarterly health report",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/it-support-amc/support-care/plus-amc",
            name: "Plus AMC",
            image: images.products.hero,
          },
        ],
      },
      "plus-amc": {
        hero: {
          title: "Plus AMC",
          description: "Monthly visits, backup checks, and vendor coordination for growing offices.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / IT Support and AMC / Support Care / Plus AMC",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Add monthly onsite visits, backup verification, and vendor coordination for more demanding environments.",
        features: [
          "Monthly onsite",
          "Backup verification",
          "Vendor coordination",
          "Patch management",
        ],
        specs: {
          Endpoints: "Up to 60",
          Coverage: "8x5 + on-call",
          Visits: "Monthly",
          Reporting: "Monthly health report",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/it-support-amc/enterprise-care/enterprise-standard",
            name: "Enterprise Standard",
            image: images.products.hero,
          },
        ],
      },
    },
    "enterprise-care": {
      "enterprise-standard": {
        hero: {
          title: "Enterprise Standard",
          description: "8x5 onsite coverage with 24/7 remote response and monthly service reviews.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / IT Support and AMC / Enterprise Care / Enterprise Standard",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Resident engineer support during business hours backed by 24/7 remote NOC and monthly service reviews.",
        features: [
          "Resident engineer",
          "24/7 remote support",
          "Monthly service reviews",
          "Patch & AV management",
        ],
        specs: {
          Coverage: "8x5 onsite",
          Remote: "24/7",
          Reviews: "Monthly",
          Reporting: "SLA dashboard",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/it-support-amc/enterprise-care/enterprise-premium",
            name: "Enterprise Premium",
            image: images.products.hero,
          },
        ],
      },
      "enterprise-premium": {
        hero: {
          title: "Enterprise Premium",
          description: "24/7 onsite coverage, DR drills, and compliance reporting for regulated industries.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / IT Support and AMC / Enterprise Care / Enterprise Premium",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Full coverage managed services including 24/7 onsite engineers, scheduled DR drills, and compliance reporting.",
        features: [
          "24/7 onsite coverage",
          "Disaster recovery drills",
          "Compliance reporting",
          "Lifecycle management",
        ],
        specs: {
          Coverage: "24/7 onsite + remote",
          DR: "Bi-annual",
          Compliance: "ISO / PCI reporting",
          Assets: "Lifecycle tracking",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/it-support-amc/enterprise-care/enterprise-standard",
            name: "Enterprise Standard",
            image: images.products.hero,
          },
        ],
      },
    },
  },
};
