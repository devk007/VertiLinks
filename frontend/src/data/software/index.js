import {
  Clock3,
  UsersRound,
  UtensilsCrossed,
  ShieldCheck,
  Smartphone,
  Workflow,
  Building2,
} from "lucide-react";

import images from "../images";

const heroImages = {
  attendance: images.home.tech.four,
  visitor: images.home.tech.three,
  canteen: images.home.hero,
  access: images.home.tech.two,
  mobile: images.home.tech.two,
  custom: images.home.tech.four,
  erp: images.home.tech.one,
};

const timeAttendance = {
  slug: "time-attendance-software",
  title: "Time Attendance Software",
  categoryPage: {
    overview: {
      intro:
        "Automate biometric and mobile punches, enforce rosters, and close payroll faster with compliance-ready reporting.",
      icon: Clock3,
    },
  },
  detailPage: {
    hero: {
      title: "Time Attendance Management",
      description:
        "Centralize attendance from biometric devices, mobile apps, and remote sites with intelligent scheduling and payroll integration.",
      bg: heroImages.attendance,
      breadcrumb: "Home / Softwares / Time Attendance",
      cta: { label: "Request Demo", to: "/contact" },
    },
    overview:
      "Our attendance platform unifies biometric machines, geo-fenced mobile punches and manual adjustments into a single, auditable source of truth. Shift managers gain real-time visibility, HR teams automate overtime and grievance workflows, and payroll receives clean, approved hours in every cycle.",
    highlights: [
      {
        title: "Accurate Time Capture",
        desc: "Ingest data from biometric, face recognition, RFID, and mobile punches with anomaly detection.",
      },
      {
        title: "Roster Intelligence",
        desc: "Drag-and-drop shift planning with automatic exceptions, swap approvals, and leave sync.",
      },
      {
        title: "Payroll Ready",
        desc: "Pre-built connectors push approved hours into HRMS, ERP, and payroll engines instantly.",
      },
    ],
    modules: [
      {
        title: "Core Modules",
        bullets: [
          "Shift and roster planner with rule-based validations",
          "Geo-fenced mobile app with selfie and location capture",
          "Automated OT, late coming, and penalty workflows",
          "Device heartbeat monitoring and command center",
        ],
      },
      {
        title: "Advanced Suite",
        bullets: [
          "AI-driven anomaly detection for buddy punching",
          "Contractor hour segregation and cost center tagging",
          "Custom approval hierarchies and escalations",
          "Pre-built dashboards for productivity and compliance",
        ],
      },
    ],
    integrations: [
      "SAP SuccessFactors",
      "Oracle HCM",
      "Zoho People",
      "Microsoft Dynamics",
      "Tally & local payroll providers",
    ],
    metrics: {
      Deployment: "Cloud or on-premise",
      Rollout: "2-4 weeks with hardware onboarding",
      Scalability: "50 to 25,000+ employees",
      Reporting: "Custom BI connectors + Excel templates",
    },
  },
};

const visitorManagement = {
  slug: "visitor-management-software",
  title: "Visitor Management Software",
  categoryPage: {
    overview: {
      intro:
        "Digitize visitor journeys with QR-based invites, instant approvals, badge printing, and security compliance logs.",
      icon: UsersRound,
    },
  },
  detailPage: {
    hero: {
      title: "Visitor Management Platform",
      description:
        "Deliver a premium lobby experience while maintaining audit-ready security trails for every visitor, contractor, or guest.",
      bg: heroImages.visitor,
      breadcrumb: "Home / Softwares / Visitor Management",
      cta: { label: "Schedule a Walkthrough", to: "/contact" },
    },
    overview:
      "Our visitor management software orchestrates the entire visitor lifecycle — from digital pre-registration and host approvals to badge issuance, contractor inductions, and exit compliance. Security teams gain full visibility, while front-office staff operate with intuitive, automated workflows.",
    highlights: [
      {
        title: "Touchless Check-in",
        desc: "QR code invites, lobby kiosks, and instant host notifications reduce queueing to seconds.",
      },
      {
        title: "Compliance Built-in",
        desc: "Capture NDAs, safety briefings, and document validation before access is granted.",
      },
      {
        title: "Multi-site Control",
        desc: "Central dashboard monitors occupancy, blacklists, and emergency roll calls across facilities.",
      },
    ],
    modules: [
      {
        title: "Front Desk",
        bullets: [
          "Pre-registration links with calendar invites",
          "Lobby kiosks with multilingual prompts",
          "Instant badge printing and photo capture",
          "SMS, email, and Teams notifications",
        ],
      },
      {
        title: "Security & Compliance",
        bullets: [
          "Blacklist and watchlist management",
          "Digital NDAs and safety videos",
          "Emergency evacuation muster list",
          "Contractor and vendor access controls",
        ],
      },
    ],
    integrations: [
      "Access control systems",
      "Active Directory / Azure AD",
      "Email and messaging platforms",
      "Facility management suites",
    ],
    metrics: {
      Deployment: "Cloud SaaS or private data center",
      Rollout: "1-3 weeks per location",
      Security: "ISO 27001-ready data controls",
      Onboarding: "Self-service portal for hosts and vendors",
    },
  },
};

const canteenManagement = {
  slug: "canteen-management-software",
  title: "Canteen Management Software",
  categoryPage: {
    overview: {
      intro:
        "Streamline cafeteria operations with prepaid wallets, subsidy rules, digital menus, and vendor reconciliation.",
      icon: UtensilsCrossed,
    },
  },
  detailPage: {
    hero: {
      title: "Canteen & Meal Management",
      description:
        "Digitize meal planning, consumption tracking, and vendor settlements for corporate cafeterias and industrial messes.",
      bg: heroImages.canteen,
      breadcrumb: "Home / Softwares / Canteen Management",
      cta: { label: "Talk to Our Team", to: "/contact" },
    },
    overview:
      "Empower employees with cashless dining while finance teams gain real-time subsidy control and vendor accountability. From menu planning to biometric validation at kiosks, every step is automated for accuracy and speed.",
    highlights: [
      {
        title: "Cashless Convenience",
        desc: "Wallets, meal cards, and biometric validations ensure express service without manual tallying.",
      },
      {
        title: "Rule-driven Subsidies",
        desc: "Define shift-wise subsidies, meal quotas, and eligibility that update in real time.",
      },
      {
        title: "Vendor Reconciliation",
        desc: "Automated consumption logs simplify vendor billing, wastage tracking, and audits.",
      },
    ],
    modules: [
      {
        title: "Dining Experience",
        bullets: [
          "Self-service kiosks with biometric or RFID validation",
          "Mobile ordering with slot reservations",
          "Digital menus with nutritional info",
          "Feedback capture and escalation workflows",
        ],
      },
      {
        title: "Operations & Finance",
        bullets: [
          "Subsidy and allowance policy engine",
          "Inventory and consumption analytics",
          "Vendor portal with invoice reconciliation",
          "Integration with payroll for taxable benefits",
        ],
      },
    ],
    integrations: [
      "Turnstiles and POS systems",
      "Attendance & payroll platforms",
      "IoT kitchen sensors",
      "Accounting and ERP systems",
    ],
    metrics: {
      Deployment: "Hybrid (cloud + edge kiosks)",
      Rollout: "Go-live in 3-5 weeks",
      Capacity: "Supports multi-location cafeterias",
      Analytics: "Meal cost, wastage, satisfaction dashboards",
    },
  },
};

const accessControl = {
  slug: "access-control-software",
  title: "Access Control Software",
  categoryPage: {
    overview: {
      intro:
        "Unify controllers, readers, and secure credentials into a single policy engine with real-time monitoring.",
      icon: ShieldCheck,
    },
  },
  detailPage: {
    hero: {
      title: "Access Control Command Center",
      description:
        "Design, deploy, and monitor high-security access policies with instant response to threats and compliance audits.",
      bg: heroImages.access,
      breadcrumb: "Home / Softwares / Access Control",
      cta: { label: "Plan Your Rollout", to: "/contact" },
    },
    overview:
      "Our access control suite bridges hardware ecosystems with unified credential policies, emergency workflows, and predictive monitoring. Security teams gain deep situational awareness and the flexibility to automate compliance across every facility and edge location.",
    highlights: [
      {
        title: "Unified Policy Engine",
        desc: "Manage doors, gates, and logical access with a single ruleset and credential lifecycle.",
      },
      {
        title: "Situational Awareness",
        desc: "Live command center with alarm workflows, video tie-ins, and incident tickets.",
      },
      {
        title: "Zero Trust Ready",
        desc: "Granular privileges, temporary passes, and API-first integrations keep perimeter adaptive.",
      },
    ],
    modules: [
      {
        title: "Control & Monitoring",
        bullets: [
          "Real-time door status and health monitoring",
          "Alarm workflows with escalation trees",
          "Visitor & contractor temporary access",
          "Video and intrusion panel integrations",
        ],
      },
      {
        title: "Credential Lifecycle",
        bullets: [
          "Badge issuance with digital identity",
          "API-based provisioning from HRMS",
          "Self-service portal for access requests",
          "Compliance reports with audit trails",
        ],
      },
    ],
    integrations: [
      "Biometric and RFID readers",
      "Video management systems",
      "ITSM and ticketing tools",
      "Emergency notification platforms",
    ],
    metrics: {
      Deployment: "On-premise, private cloud, or SaaS",
      Rollout: "Modular upgrades without downtime",
      Coverage: "25+ hardware OEM connectors",
      Compliance: "SOC 2 & ISO alignment",
    },
  },
};

const mobileAppDev = {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  categoryPage: {
    overview: {
      intro:
        "Design and ship user-centric iOS, Android, and cross-platform experiences backed by secure, scalable APIs.",
      icon: Smartphone,
    },
  },
  detailPage: {
    hero: {
      title: "Mobile Application Delivery",
      description:
        "From discovery to launch, we craft mobile products that blend premium UX, resilient engineering, and measurable outcomes.",
      bg: heroImages.mobile,
      breadcrumb: "Home / Softwares / Mobile App Development",
      cta: { label: "Start a Project", to: "/contact" },
    },
    overview:
      "Our mobile squads pair product strategists, UI/UX designers, and engineering leads to accelerate app launches. We build with performance budgets, offline resilience, analytics hooks, and DevOps pipelines so your roadmap keeps moving after launch.",
    highlights: [
      {
        title: "Discovery-Driven",
        desc: "Product workshops define personas, journeys, and measurable KPIs before a line of code is written.",
      },
      {
        title: "Engineering Excellence",
        desc: "Native and cross-platform stacks with automated testing, CI/CD, and observability baked in.",
      },
      {
        title: "Growth Ready",
        desc: "Feature flags, analytics, and A/B testing frameworks to iterate quickly post launch.",
      },
    ],
    modules: [
      {
        title: "Engagement Stack",
        bullets: [
          "Persona mapping and user journey blueprints",
          "UI systems with accessibility tokens",
          "Push, in-app messaging, and campaign automation",
          "App store optimization & release management",
        ],
      },
      {
        title: "Engineering Toolkit",
        bullets: [
          "React Native, Flutter, Swift, Kotlin, Xamarin",
          "Modular architecture with reusable components",
          "Automated QA pipelines and device farms",
          "Secure API gateway and auth frameworks",
        ],
      },
    ],
    integrations: [
      "CRM and marketing clouds",
      "Payment gateways and wallets",
      "Legacy ERP and middleware",
      "Analytics and product intelligence suites",
    ],
    metrics: {
      Engagement: "Launch in 12-16 weeks with iterative sprints",
      Deployment: "App store & enterprise distribution support",
      Support: "24/7 SRE and L2/L3 maintenance",
      Security: "OWASP MASVS aligned reviews",
    },
  },
};

const customAppDev = {
  slug: "custom-application-development",
  title: "Custom Application Development",
  categoryPage: {
    overview: {
      intro:
        "Modernize legacy workflows with bespoke web, desktop, and integration platforms tailored to your business.",
      icon: Workflow,
    },
  },
  detailPage: {
    hero: {
      title: "Custom Application Engineering",
      description:
        "We transform complex processes into robust digital platforms with clear roadmaps, governance, and measurable ROI.",
      bg: heroImages.custom,
      breadcrumb: "Home / Softwares / Custom Application Development",
      cta: { label: "Co-create With Us", to: "/contact" },
    },
    overview:
      "Our engineers partner with domain experts to blueprint, build, and evolve mission-critical applications. From microservices and APIs to front-end modernization, we ensure each release reduces manual effort, surfaces better insights, and scales with your operations.",
    highlights: [
      {
        title: "Domain-led Discovery",
        desc: "Process deep-dives reveal opportunities for automation, self-service, and analytics.",
      },
      {
        title: "Composable Architecture",
        desc: "Microservices, event-driven pipelines, and integration hubs keep systems flexible.",
      },
      {
        title: "Sustainable Delivery",
        desc: "DevSecOps, automated testing, and documentation practices support long-term ownership.",
      },
    ],
    modules: [
      {
        title: "Delivery Accelerators",
        bullets: [
          "Design thinking and process mapping workshops",
          "Reference architectures for quick starts",
          "Reusable UI component libraries",
          "Automated test harnesses and quality gates",
        ],
      },
      {
        title: "Lifecycle Services",
        bullets: [
          "Legacy modernization and re-platforming",
          "API management and integration fabric",
          "Performance tuning and observability",
          "Managed services and enhancement governance",
        ],
      },
    ],
    integrations: [
      "Core banking and financial systems",
      "Manufacturing execution systems",
      "Government and regulatory platforms",
      "Data warehouses and BI tools",
    ],
    metrics: {
      Delivery: "Agile pods with PI-based planning",
      Engagement: "Outcome-based KPIs and dashboards",
      Compliance: "ISO 9001 & 27001 delivery model",
      Support: "Transition-to-support playbooks within 30 days",
    },
  },
};

const erpSolutions = {
  slug: "erp-solutions",
  title: "ERP Solutions",
  categoryPage: {
    overview: {
      intro:
        "Implement modular ERP stacks for finance, supply chain, projects, and HR with faster time-to-value.",
      icon: Building2,
    },
  },
  detailPage: {
    hero: {
      title: "Enterprise ERP Programs",
      description:
        "Align processes, people, and data across finance, operations, and supply chain with configurable ERP blueprints.",
      bg: heroImages.erp,
      breadcrumb: "Home / Softwares / ERP Solutions",
      cta: { label: "Plan Your ERP Journey", to: "/contact" },
    },
    overview:
      "We deliver ERP rollouts with industry accelerators, change management, and integration expertise. Our approach reduces customization debt while enabling analytics-rich decision making across finance, supply chain, and human capital streams.",
    highlights: [
      {
        title: "Industry Accelerators",
        desc: "Pre-built templates for manufacturing, services, retail, and public sector cut deployment time.",
      },
      {
        title: "Process Governance",
        desc: "PMO and change frameworks ensure adoption, data accuracy, and compliance.",
      },
      {
        title: "Connected Insights",
        desc: "Data warehousing and BI packs deliver role-based dashboards from day one.",
      },
    ],
    modules: [
      {
        title: "Functional Streams",
        bullets: [
          "Finance & controllership",
          "Procurement and vendor management",
          "Inventory & warehouse operations",
          "Project accounting and PSA",
        ],
      },
      {
        title: "Program Enablers",
        bullets: [
          "Legacy data migration and validation",
          "Integration factory for CRM, eCommerce, MES",
          "User training, UAT, and hypercare",
          "Managed enhancements with SLA-based support",
        ],
      },
    ],
    integrations: [
      "SAP, Oracle, Microsoft, Zoho ecosystems",
      "Banking and payment gateways",
      "Manufacturing and logistics platforms",
      "Analytics, BI, and RPA tools",
    ],
    metrics: {
      Deployment: "Phased rollout with quick wins in 12-20 weeks",
      Governance: "Dedicated PMO, risk, and change offices",
      Compliance: "IFRS, VAT, and regional statutory packs",
      Support: "24/7 support with quarterly roadmap reviews",
    },
  },
};

export default {
  [timeAttendance.slug]: timeAttendance,
  [visitorManagement.slug]: visitorManagement,
  [canteenManagement.slug]: canteenManagement,
  [accessControl.slug]: accessControl,
  [mobileAppDev.slug]: mobileAppDev,
  [customAppDev.slug]: customAppDev,
  [erpSolutions.slug]: erpSolutions,
};
