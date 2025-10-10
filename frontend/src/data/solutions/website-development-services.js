import images from '../images';

const webAssets = images.solutions.webDevelopment;
const webHero = webAssets.hero;
const webLogos = webAssets.logos;
const webModelImages = webAssets.images;

export default {
  slug: "website-development-services",
  title: "Website Development Services",
  categoryPage: {
    hero: {
      title: "Web Design & Development",
      description:
        "UX/UI design, CMS builds, e-commerce development, portal engineering, hosting, and maintenance delivered by certified web teams.",
      bg: webHero,
      breadcrumb: "Home / Solutions / Website Development Services",
      cta: { label: "Discuss a Project", to: "/contact" },
    },
    overview: {
      heading: "Full-Lifecycle Web Programs",
      icon: "MonitorSmartphone",
      intro:
        "From discovery to ongoing care, we handle front-end experience, platform engineering, CMS governance, hosting, and continuous optimization.",
      bulletsLeft: [
        "Website maintenance & support",
        "Managed web hosting services",
        "Custom portal & application development",
      ],
      bulletsRight: [
        "E-commerce storefront & marketplace builds",
        "Content management systems & headless",
        "UX/analytics instrumentation",
      ],
      keyBenefits: [
        { icon: "Palette", title: "UX-Driven", desc: "Responsive UX/UI systems with accessibility and localization." },
        { icon: "Code", title: "Modern Stack", desc: "Jamstack, React/Next.js, Laravel, WordPress, and headless CMS delivery." },
        { icon: "ServerCog", title: "Managed", desc: "DevOps hosting, monitoring, and security baked into every engagement." },
      ],
    },
    brands: [
      {
        slug: "maintenance-support",
        name: "Website Maintenance & Support",
        logo: webLogos.maintenanceSupport,
        banner: webLogos.maintenanceSupport,
        blurb: "SLA-backed maintenance, enhancements, and helpdesk support for live sites.",
        highlights: ["Ticketing & SLAs", "CMS/security patches", "Performance tuning"],
        industries: ["Corporate", "Education", "Healthcare", "Government"],
        to: "/solutions/website-development-services/maintenance-support",
      },
      {
        slug: "web-hosting",
        name: "Web Hosting Services",
        logo: webLogos.webHosting,
        banner: webLogos.webHosting,
        blurb: "Managed cloud hosting, CI/CD, monitoring, and compliance-ready environments.",
        highlights: ["Managed cloud", "Monitoring", "Compliance"],
        industries: ["Finance", "Retail", "Media"],
        to: "/solutions/website-development-services/web-hosting",
      },
      {
        slug: "portal-application",
        name: "Custom Portal & Application Development",
        logo: webLogos.portalApplication,
        banner: webLogos.portalApplication,
        blurb: "Role-based portals, dashboards, and custom web apps integrated with core systems.",
        highlights: ["Portal UX", "API integrations", "Workflow automation"],
        industries: ["Manufacturing", "Logistics", "Startups", "Public Sector"],
        to: "/solutions/website-development-services/portal-application",
      },
      {
        slug: "ecommerce-development",
        name: "E-Commerce Development",
        logo: webLogos.ecommerceDevelopment,
        banner: webLogos.ecommerceDevelopment,
        blurb: "Headless storefronts, marketplace feeds, and conversion-focused checkout experiences.",
        highlights: ["Headless commerce", "Shopping feeds", "Marketing pixels"],
        industries: ["Retail", "CPG", "Hospitality"],
        to: "/solutions/website-development-services/ecommerce-development",
      },
      {
        slug: "cms-services",
        name: "Content Management Systems",
        logo: webLogos.cmsServices,
        banner: webLogos.cmsServices,
        blurb: "Implementation, migration, and governance for enterprise CMS and headless stacks.",
        highlights: ["CMS migration", "Workflow governance", "Localization"],
        industries: ["B2B", "Media", "Education"],
        to: "/solutions/website-development-services/cms-services",
      },
    ],
  },
  brandPages: {
    "maintenance-support": {
      hero: {
        title: "Website Maintenance & Support",
        description: "Sustain and enhance your site with proactive maintenance, SLAs, and optimization sprints.",
        bg: webHero,
        breadcrumb: "Home / Solutions / Website Development Services / Maintenance & Support",
        cta: { label: "View Retainers", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Wrench", title: "Enhancements", desc: "UX tweaks, component updates, and landing page refreshes." },
        { icon: "ShieldCheck", title: "Secure", desc: "Security patches, vulnerability scans, and compliance updates." },
        { icon: "Activity", title: "Measured", desc: "Performance and analytics reviews with monthly reporting." },
      ],
      models: [
        {
          slug: "care-plan",
          name: "Website Care Plan",
          image: webModelImages.carePlan,
          brief: "Monthly maintenance, backups, and SLA-based support tickets.",
          features: ["CMS/plugin updates", "Daily backups", "Helpdesk"],
          to: "/solutions/website-development-services/maintenance-support/care-plan",
        },
        {
          slug: "optimization-sprint",
          name: "Optimization Sprint",
          image: webModelImages.optimizationSprint,
          brief: "Quarterly UX/performance enhancements with testing and rollout.",
          features: ["CRO audit", "Component updates", "Release management"],
          to: "/solutions/website-development-services/maintenance-support/optimization-sprint",
        },
      ],
    },
    "web-hosting": {
      hero: {
        title: "Web Hosting Services",
        description: "Managed hosting, CI/CD automation, and observability for mission-critical sites.",
        bg: webHero,
        breadcrumb: "Home / Solutions / Website Development Services / Web Hosting",
      },
      keyBenefits: [
        { icon: "ServerCog", title: "Managed Cloud", desc: "AWS, Azure, or GCP setups with autoscaling and CDN." },
        { icon: "ShieldCheck", title: "Hardened", desc: "WAF, SSL automation, intrusion alerts, and compliance posture." },
        { icon: "Activity", title: "Monitored", desc: "APM, uptime tracking, and log aggregation dashboards." },
      ],
      models: [
        {
          slug: "managed-hosting",
          name: "Managed Hosting & DevOps",
          image: webModelImages.managedHosting,
          brief: "Provision, monitor, and optimize cloud environments with CI/CD.",
          features: ["Infrastructure as code", "Monitoring & alerts", "CI/CD pipelines"],
          to: "/solutions/website-development-services/web-hosting/managed-hosting",
        },
        {
          slug: "compliance-hosting",
          name: "Compliance & Security Hosting",
          image: webModelImages.complianceHosting,
          brief: "Audit-ready hosting with policy enforcement and reporting.",
          features: ["Policies & logging", "Pen-test remediation", "Compliance reporting"],
          to: "/solutions/website-development-services/web-hosting/compliance-hosting",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
    "portal-application": {
      hero: {
        title: "Custom Portal & Application Development",
        description: "Role-based portals, dashboards, and workflow applications connected to your stack.",
        bg: webHero,
        breadcrumb: "Home / Solutions / Website Development Services / Portal & Applications",
      },
      keyBenefits: [
        { icon: "Globe", title: "Experience", desc: "UX research, prototyping, and responsive UI for every portal." },
        { icon: "Database", title: "Integration", desc: "Secure APIs, ERP/CRM connectors, and data governance." },
        { icon: "LayoutDashboard", title: "Workflow", desc: "Role management, approvals, and automation layers." },
      ],
      models: [
        {
          slug: "portal-foundation",
          name: "Portal Foundation",
          image: webModelImages.portalFoundation,
          brief: "Discovery, UX, and MVP portal build with authentication and dashboards.",
          features: ["Workshops", "Role-based UX", "Analytics"],
          to: "/solutions/website-development-services/portal-application/portal-foundation",
        },
        {
          slug: "workflow-suite",
          name: "Workflow Application Suite",
          image: webModelImages.workflowSuite,
          brief: "Advanced portals with workflow automation, integrations, and reporting.",
          features: ["API integrations", "Workflow automation", "BI dashboards"],
          to: "/solutions/website-development-services/portal-application/workflow-suite",
        },
      ],
    },
    "ecommerce-development": {
      hero: {
        title: "E-Commerce Development",
        description: "Headless storefronts, checkout optimization, and marketplace feeds for revenue growth.",
        bg: webHero,
        breadcrumb: "Home / Solutions / Website Development Services / E-Commerce Development",
      },
      keyBenefits: [
        { icon: "ShoppingCart", title: "Storefronts", desc: "Composable storefronts powered by Shopify Plus, BigCommerce, or headless." },
        { icon: "Activity", title: "Conversion", desc: "Checkout optimization, A/B testing, and analytics instrumentation." },
        { icon: "Globe", title: "Marketplace", desc: "Feeds for Amazon, Noon, and other marketplaces with review ops." },
      ],
      models: [
        {
          slug: "commerce-launch",
          name: "Commerce Launch",
          image: webModelImages.commerceLaunch,
          brief: "Rapid storefront setup with payment, shipping, and analytics foundations.",
          features: ["Payment gateways", "Shipping/tax", "Analytics"],
          to: "/solutions/website-development-services/ecommerce-development/commerce-launch",
        },
        {
          slug: "commerce-scale",
          name: "Commerce Scale",
          image: webModelImages.commerceScale,
          brief: "Headless commerce, marketplace feeds, and automation playbooks.",
          features: ["Headless architecture", "Marketplace feeds", "Automation"],
          to: "/solutions/website-development-services/ecommerce-development/commerce-scale",
        },
      ],
    },
    "cms-services": {
      hero: {
        title: "Content Management System Services",
        description: "Plan, implement, migrate, and govern CMS platforms and headless content stacks.",
        bg: webHero,
        breadcrumb: "Home / Solutions / Website Development Services / CMS Services",
      },
      keyBenefits: [
        { icon: "LayoutDashboard", title: "CMS Strategy", desc: "Assess, select, and roadmap enterprise CMS or headless stacks." },
        { icon: "Code", title: "Implementation", desc: "Build reusable components, workflows, and governance models." },
        { icon: "ShieldCheck", title: "Governance", desc: "Role-based workflows, localization, and compliance for content teams." },
      ],
      models: [
        {
          slug: "cms-implementation",
          name: "CMS Implementation",
          image: webModelImages.cmsImplementation,
          brief: "Componentized CMS rollout with integrations and content modeling.",
          features: ["Content modeling", "Component library", "Integration hooks"],
          to: "/solutions/website-development-services/cms-services/cms-implementation",
        },
        {
          slug: "cms-migration-governance",
          name: "CMS Migration & Governance",
          image: webModelImages.cmsMigrationGovernance,
          brief: "Migrate legacy sites and establish governance, localization, and workflows.",
          features: ["Migration planning", "Localization", "Governance playbook"],
          to: "/solutions/website-development-services/cms-services/cms-migration-governance",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },
  modelPages: {
    "maintenance-support": {
      "care-plan": {
        hero: {
          title: "Website Care Plan",
          description: "SLA-backed web maintenance covering updates, security, and support desk.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Maintenance & Support / Website Care Plan",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.carePlan],
        overview:
          "Includes CMS/plugin updates, daily backups, uptime monitoring, accessibility fixes, and priority support with monthly health reports.",
        features: ["Monthly updates", "Daily backups", "Uptime & SLA dashboards", "Accessibility/CWV checks"],
        specs: {
          SLA: "8/5 or 24/7",
          Backups: "Daily & on-demand",
          Tickets: "Unlimited (fair usage)",
          Reporting: "Monthly health report",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/maintenance-support/optimization-sprint", name: "Optimization Sprint", image: webHero },
          { href: "/solutions/website-development-services/web-hosting/managed-hosting", name: "Managed Hosting & DevOps", image: webHero },
        ],
      },
      "optimization-sprint": {
        hero: {
          title: "Optimization Sprint",
          description: "Quarterly UX, performance, and CRO sprint to enhance live sites.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Maintenance & Support / Optimization Sprint",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.optimizationSprint],
        overview:
          "Run diagnostics, prioritize UX/conversion improvements, implement releases, and measure uplift across pages and funnels.",
        features: ["CRO roadmap", "Design & front-end updates", "QA & deployment", "Post-launch analytics"],
        specs: {
          Duration: "4-week sprint",
          Experiments: "2-3 A/B tests",
          Enhancements: "Up to 8 components",
          Reporting: "Before/after dashboard",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/web-ux/landing-optimization", name: "Landing Page Optimization", image: webHero },
          { href: "/solutions/website-development-services/cms-services/cms-implementation", name: "CMS Implementation", image: webHero },
        ],
      },
    },
    "web-hosting": {
      "managed-hosting": {
        hero: {
          title: "Managed Hosting & DevOps",
          description: "Cloud infrastructure provisioning, observability, and automated deployments.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Web Hosting / Managed Hosting & DevOps",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.managedHosting],
        overview:
          "Cover infrastructure-as-code, CDN, CI/CD, monitoring, and incident response for web properties.",
        features: ["Terraform/IaC", "CI/CD pipelines", "Monitoring & alerts", "Incident response"],
        specs: {
          Cloud: "AWS/Azure/GCP",
          Deployments: "Automated",
          Monitoring: "APM + logs",
          Compliance: "ISO/SOC ready",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/web-hosting/compliance-hosting", name: "Compliance & Security Hosting", image: webHero },
          { href: "/solutions/website-development-services/portal-application/workflow-suite", name: "Workflow Application Suite", image: webHero },
        ],
      },
      "compliance-hosting": {
        hero: {
          title: "Compliance & Security Hosting",
          description: "Audit-ready hosting with policy enforcement, logging, and reporting.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Web Hosting / Compliance Hosting",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.complianceHosting],
        overview:
          "Implements WAF, SIEM feeds, IAM policies, and compliance documentation for regulated industries.",
        features: ["WAF & IAM", "SIEM dashboards", "Compliance evidence", "Disaster recovery"],
        specs: {
          Frameworks: "ISO 27001, GDPR, PCI",
          Reporting: "Quarterly audits",
          DR: "Multi-region backups",
          Logging: "Centralized (SIEM)",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/web-hosting/managed-hosting", name: "Managed Hosting & DevOps", image: webHero },
          { href: "/solutions/website-development-services/cms-services/cms-migration-governance", name: "CMS Migration & Governance", image: webHero },
        ],
      },
    },
    "portal-application": {
      "portal-foundation": {
        hero: {
          title: "Portal Foundation",
          description: "MVP portal covering UX, authentication, dashboards, and analytics.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Portal & Applications / Portal Foundation",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.portalFoundation],
        overview:
          "Discovery workshops, UX wireframes, responsive UI, RBAC, and analytics instrumentation for a first-release portal.",
        features: ["Workshops & backlog", "Role-based UI", "Auth & SSO", "Analytics"],
        specs: {
          Users: "Up to 3 roles",
          Auth: "SSO / OAuth",
          Timeline: "12 weeks",
          Stack: "React/Next + Node/.NET",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/portal-application/workflow-suite", name: "Workflow Application Suite", image: webHero },
          { href: "/solutions/website-development-services/cms-services/cms-implementation", name: "CMS Implementation", image: webHero },
        ],
      },
      "workflow-suite": {
        hero: {
          title: "Workflow Application Suite",
          description: "Advanced portals with workflow automation, API integrations, and reporting dashboards.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / Portal & Applications / Workflow Suite",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.workflowSuite],
        overview:
          "Adds automation flows, ERP/CRM integrations, notification systems, and BI dashboards for large teams.",
        features: ["Automation engine", "API integrations", "Notifications", "BI dashboards"],
        specs: {
          Users: "Unlimited roles",
          Integrations: "ERP/CRM/Identity",
          Automation: "Workflow builder",
          Reporting: "Embedded BI",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/ecommerce-development/commerce-scale", name: "Commerce Scale", image: webHero },
          { href: "/solutions/website-development-services/web-hosting/managed-hosting", name: "Managed Hosting & DevOps", image: webHero },
        ],
      },
    },
    "ecommerce-development": {
      "commerce-launch": {
        hero: {
          title: "Commerce Launch",
          description: "Launch storefronts with payments, shipping, analytics, and basic automations.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / E-Commerce Development / Commerce Launch",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.commerceLaunch],
        overview:
          "Includes storefront theming, product catalog import, payment/shipping setup, and analytics instrumentation.",
        features: ["Catalog import", "Payment gateways", "Shipping automation", "Analytics"],
        specs: {
          Platform: "Shopify / Woo / Magento",
          Catalog: "Up to 2k SKUs",
          Timeline: "8-10 weeks",
          Automations: "Email/pixel setup",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/ecommerce-development/commerce-scale", name: "Commerce Scale", image: webHero },
          { href: "/solutions/digital-marketing-solution/ecommerce-marketplace/shopping-ads", name: "Shopping Ads & Feeds", image: webHero },
        ],
      },
      "commerce-scale": {
        hero: {
          title: "Commerce Scale",
          description: "Headless commerce, marketplace feeds, and automation for enterprise catalogs.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / E-Commerce Development / Commerce Scale",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.commerceScale],
        overview:
          "Implements headless storefronts, marketplace feeds, OMS/ERP integrations, and conversion optimization.",
        features: ["Headless storefront", "Marketplace feeds", "OMS/ERP integration", "CRO roadmap"],
        specs: {
          Catalog: "Up to 20k SKUs",
          Marketplaces: "Amazon/Noon/etc.",
          Integrations: "OMS/ERP/PIM",
          Experiments: "Quarterly CRO",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/ecommerce-development/commerce-launch", name: "Commerce Launch", image: webHero },
          { href: "/solutions/website-development-services/cms-services/cms-migration-governance", name: "CMS Migration & Governance", image: webHero },
        ],
      },
    },
    "cms-services": {
      "cms-implementation": {
        hero: {
          title: "CMS Implementation",
          description: "Plan and implement enterprise CMS or headless stacks with reusable components.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / CMS Services / CMS Implementation",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.cmsImplementation],
        overview:
          "Deliver content modeling, component libraries, localization, workflows, and integrations for CMS success.",
        features: ["Content modeling", "Component library", "Localization setup", "Integration hooks"],
        specs: {
          CMS: "WordPress, Drupal, Sanity, Contentful",
          Languages: "Up to 6",
          Components: "30+ reusable",
          Training: "Workshops + docs",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/cms-services/cms-migration-governance", name: "CMS Migration & Governance", image: webHero },
          { href: "/solutions/website-development-services/experience-design/experience-growth", name: "Experience Growth", image: webHero },
        ],
      },
      "cms-migration-governance": {
        hero: {
          title: "CMS Migration & Governance",
          description: "Migrate legacy sites and enforce governance, localization, and workflows.",
          bg: webHero,
          breadcrumb: "Home / Solutions / Website Development Services / CMS Services / CMS Migration & Governance",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [webModelImages.cmsMigrationGovernance],
        overview:
          "Includes migration strategy, content rewrites, localization, workflow rules, and content quality audits.",
        features: ["Migration roadmap", "Localization governance", "Workflow automation", "Quality assurance"],
        specs: {
          Sites: "Up to 3",
          Locales: "Up to 12",
          Workflow: "Role-based approvals",
          Reporting: "Governance dashboards",
        },
        downloads: [],
        related: [
          { href: "/solutions/website-development-services/cms-services/cms-implementation", name: "CMS Implementation", image: webHero },
          { href: "/solutions/website-development-services/maintenance-support/care-plan", name: "Website Care Plan", image: webHero },
        ],
      },
    },
  },
};
