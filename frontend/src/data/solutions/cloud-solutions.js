import images from '../images';
import {
  Cloud,
  CloudCog,
  Database,
  Lock,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export default {
  slug: "cloud-solutions",
  title: "Cloud Solutions",
  categoryPage: {
    hero: {
      title: "Cloud Transformation Services",
      description:
        "Design, migrate, and optimize workloads across private, public, and hybrid cloud platforms with confidence.",
      bg: images.products.hero,
      breadcrumb: "Home / Solutions / Cloud Solutions",
      cta: { label: "Start Your Journey", to: "/contact" },
    },
    overview: {
      heading: "Cloud Adoption Framework",
      icon: Cloud,
      intro:
        "We assess, migrate, secure, and operate your infrastructure on AWS, Azure, GCP, or private cloud.",
      bulletsLeft: [
        "Cloud readiness assessments",
        "Lift & shift migrations",
        "Modernization & containerization",
        "DevOps enablement",
      ],
      bulletsRight: [
        "FinOps & cost governance",
        "Hybrid connectivity",
        "Backup & DR planning",
        "Managed cloud operations",
      ],
      keyBenefits: [
        { icon: "CloudCog", title: "Optimized", desc: "Right-sized workloads with automation and observability." },
        { icon: "ShieldCheck", title: "Secure", desc: "Zero trust, IAM, and compliance frameworks baked in." },
        { icon: "Server", title: "Managed", desc: "24/7 managed services keep workloads healthy and resilient." },
      ],
    },
    brands: [
      {
        slug: "migration-suite",
        name: "Migration Suite",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Assessment and migration services for workloads moving to cloud.",
        highlights: [
          "Discovery & assessment",
          "Migration factory",
          "Cutover support",
        ],
        industries: ["Manufacturing", "Healthcare", "Financial Services"],
        to: "/solutions/cloud-solutions/migration-suite",
      },
      {
        slug: "managed-cloud",
        name: "Managed Cloud",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Operational excellence with SRE, FinOps, and security operations.",
        highlights: [
          "24/7 monitoring",
          "FinOps governance",
          "Security automation",
        ],
        industries: ["E-commerce", "SaaS", "Government"],
        to: "/solutions/cloud-solutions/managed-cloud",
      },
    ],
  },
  brandPages: {
    "migration-suite": {
      hero: {
        title: "Cloud Migration Suite",
        description: "Assessment-driven migrations with minimal downtime.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / Cloud Solutions / Migration Suite",
        cta: { label: "View Stages", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Database", title: "Workload Ready", desc: "Databases, apps, and VMs migrated with validation." },
        { icon: "Network", title: "Connectivity", desc: "Hybrid networks and VPN/ExpressRoute setup." },
        { icon: "Lock", title: "Secure", desc: "IAM, logging, and compliance controls enforced." },
      ],
      models: [
        {
          slug: "assessment",
          name: "Assessment Phase",
          image: images.products.hero,
          brief: "Discovery workshops, TCO, and migration roadmap.",
          features: [
            "Workload inventory",
            "TCO analysis",
            "Migration plan",
          ],
          to: "/solutions/cloud-solutions/migration-suite/assessment",
        },
        {
          slug: "migration",
          name: "Migration Execution",
          image: images.products.hero,
          brief: "Factory approach with cutover orchestration and validation.",
          features: [
            "Pilot migrations",
            "Cutover orchestration",
            "Knowledge transfer",
          ],
          to: "/solutions/cloud-solutions/migration-suite/migration",
        },
      ],
    },
    "managed-cloud": {
      hero: {
        title: "Managed Cloud Services",
        description: "SRE-driven operations, FinOps, and continuous optimization.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / Cloud Solutions / Managed Cloud",
      },
      keyBenefits: [
        { icon: "ServerCog", title: "SRE", desc: "SRE team provides reliability engineering and automation." },
        { icon: "Cloud", title: "FinOps", desc: "Continuous cost optimization and governance." },
        { icon: "ShieldCheck", title: "Security", desc: "Managed SOC, compliance reporting, and remediation." },
      ],
      models: [
        {
          slug: "ops-essentials",
          name: "Ops Essentials",
          image: images.products.hero,
          brief: "24/7 monitoring, patching, and incident response for workloads.",
          features: [
            "24/7 monitoring",
            "Incident response",
            "Patch management",
          ],
          to: "/solutions/cloud-solutions/managed-cloud/ops-essentials",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "ops-plus",
          name: "Ops Plus",
          image: images.products.hero,
          brief: "Adds FinOps governance, automation, and compliance reports.",
          features: [
            "FinOps governance",
            "Automation",
            "Compliance reports",
          ],
          to: "/solutions/cloud-solutions/managed-cloud/ops-plus",
        },
      ],
    },
  },

  modelPages: {
    "migration-suite": {
      assessment: {
        hero: {
          title: "Assessment Phase",
          description: "Discover workloads, assess readiness, and define migration roadmap.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Cloud Solutions / Migration Suite / Assessment",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Workshops, discovery tooling, and TCO analysis to build a phased migration plan.",
        features: [
          "Workload inventory",
          "TCO modelling",
          "Landing zone recommendations",
          "Migration roadmap",
        ],
        specs: {
          Duration: "2-4 weeks",
          Deliverables: "Assessment report",
          Tooling: "Discovery & TCO",
          Stakeholders: "IT + business",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/cloud-solutions/migration-suite/migration",
            name: "Migration Execution",
            image: images.products.hero,
          },
        ],
      },
      migration: {
        hero: {
          title: "Migration Execution",
          description: "Factory-driven migration with orchestrated cutovers and validation.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Cloud Solutions / Migration Suite / Migration",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Pilot then scale migrations across apps, databases, and VMs with orchestrated cutovers and knowledge transfer.",
        features: [
          "Pilot migration",
          "Cutover orchestration",
          "Validation scripts",
          "Knowledge transfer",
        ],
        specs: {
          Method: "Wave-based",
          Automation: "Infrastructure as code",
          Validation: "Runbooks",
          Handover: "Operations playbook",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/cloud-solutions/migration-suite/assessment",
            name: "Assessment Phase",
            image: images.products.hero,
          },
        ],
      },
    },
    "managed-cloud": {
      "ops-essentials": {
        hero: {
          title: "Ops Essentials",
          description: "24/7 monitoring, incident response, and patching for critical workloads.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Cloud Solutions / Managed Cloud / Ops Essentials",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Baseline managed services covering monitoring, incident response, and routine patching across environments.",
        features: [
          "24/7 monitoring",
          "Incident response",
          "Patch management",
          "Monthly reports",
        ],
        specs: {
          Coverage: "Production workloads",
          Tooling: "SIEM + ITSM",
          SLA: "P1 within 15 mins",
          Reporting: "Monthly insights",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/cloud-solutions/managed-cloud/ops-plus",
            name: "Ops Plus",
            image: images.products.hero,
          },
        ],
      },
      "ops-plus": {
        hero: {
          title: "Ops Plus",
          description: "FinOps governance, automation, and compliance reporting layered atop managed services.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Cloud Solutions / Managed Cloud / Ops Plus",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Extend essentials with cost governance, automation pipelines, and compliance reporting.",
        features: [
          "FinOps governance",
          "Automation pipelines",
          "Compliance reporting",
          "Continuous optimization",
        ],
        specs: {
          Reviews: "Quarterly",
          Automation: "IaC + runbooks",
          Compliance: "ISO / PCI reports",
          Cost: "Budget guardrails",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/cloud-solutions/managed-cloud/ops-essentials",
            name: "Ops Essentials",
            image: images.products.hero,
          },
        ],
      },
    },
  },
};
