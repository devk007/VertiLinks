import images from '../images';

const seoAssets = images.solutions.seoServices;
const seoHeroImage = seoAssets.hero;
const seoLogos = seoAssets.logos;
const seoModelImages = seoAssets.images;

export default {
  slug: "seo-services",
  title: "SEO Services",
  categoryPage: {
    hero: {
      title: "Search Engine Optimization",
      description:
        "Technical SEO, content and authority building, analytics, and ASO programs managed by certified SEO experts.",
      bg: seoHeroImage,
      breadcrumb: "Home / Solutions / SEO Services",
      cta: { label: "Request SEO Audit", to: "/contact" },
    },
    overview: {
      heading: "Enterprise & Local SEO Operations",
      icon: "Search",
      intro:
        "We align SEO roadmaps with your funnel—from audits and geo-targeted optimization to content, analytics, and marketplace visibility.",
      bulletsLeft: [
        "SEO experts & program management",
        "Local / geo-targeted SEO rollouts",
        "Content optimization & briefs",
        "Web analytics instrumentation",
      ],
      bulletsRight: [
        "Link development & outreach",
        "Content development sprints",
        "App Store Optimization (ASO)",
        "GA4 setup and migration",
      ],
      keyBenefits: [
        { icon: "Compass", title: "Strategic", desc: "Keyword, competitor, and audience insights drive prioritization." },
        { icon: "Layers3", title: "Full Stack", desc: "Technical, local, content, and authority building under one program." },
        { icon: "BarChart3", title: "Measured", desc: "Dashboards combining GA4, Search Console, and CRM conversions." },
      ],
    },
    brands: [
      {
        slug: "core-optimization",
        name: "Core Optimization",
        logo: seoLogos.coreOptimization,
        banner: seoLogos.coreOptimization,
        blurb: "SEO experts deliver technical, on-page, and local/geo-targeted optimization sprints.",
        highlights: ["Technical SEO", "On-page optimization", "Local/Geo SEO"],
        industries: ["Corporate", "Retail", "Healthcare", "Hospitality"],
        to: "/solutions/seo-services/core-optimization",
      },
      {
        slug: "content-authority",
        name: "Content & Authority",
        logo: seoLogos.contentAuthority,
        banner: seoLogos.contentAuthority,
        blurb: "Content optimization, new asset development, and link development campaigns.",
        highlights: ["Content optimization", "Content development", "Link development"],
        industries: ["E-commerce", "B2B", "Education"],
        to: "/solutions/seo-services/content-authority",
      },
      {
        slug: "analytics-aso",
        name: "Analytics & ASO",
        logo: seoLogos.analyticsAso,
        banner: seoLogos.analyticsAso,
        blurb: "GA4 migration, web analytics, reporting, and app store optimization services.",
        highlights: ["GA4 migrations", "Web analytics", "App store optimization"],
        industries: ["Startups", "Fintech", "Product", "Marketplace"],
        to: "/solutions/seo-services/analytics-aso",
      },
    ],
  },
  brandPages: {
    "core-optimization": {
      hero: {
        title: "Core SEO Optimization",
        description: "Technical SEO, keyword clustering, and local SEO managed by senior SEO experts.",
        bg: seoHeroImage,
        breadcrumb: "Home / Solutions / SEO Services / Core Optimization",
        cta: { label: "View Programs", to: "/contact" },
      },
      keyBenefits: [
        { icon: "ShieldCheck", title: "Technical Health", desc: "Resolve crawl, Core Web Vitals, schema, and indexing issues." },
        { icon: "Search", title: "Keyword Precision", desc: "Map keywords to journeys with on-page optimizations." },
        { icon: "Megaphone", title: "Local Reach", desc: "Geo/branch landing pages and listings for map dominance." },
      ],
      models: [
        {
          slug: "technical-onpage",
          name: "Technical & On-Page SEO",
          image: seoModelImages.technicalOnpage,
          brief: "Audits, Core Web Vitals, schema, and on-page optimization packages.",
          features: ["Technical audits", "On-page refresh", "Schema & CWV"],
          to: "/solutions/seo-services/core-optimization/technical-onpage",
        },
        {
          slug: "local-geo",
          name: "Local & Geo SEO",
          image: seoModelImages.localGeo,
          brief: "Location landing pages, listings management, and local content calendars.",
          features: ["GBP optimization", "Citation cleanup", "Geo content"],
          to: "/solutions/seo-services/core-optimization/local-geo",
        },
      ],
    },
    "content-authority": {
      hero: {
        title: "Content & Authority Programs",
        description: "Content optimization, new asset development, and link earning initiatives.",
        bg: seoHeroImage,
        breadcrumb: "Home / Solutions / SEO Services / Content & Authority",
      },
      keyBenefits: [
        { icon: "Sparkles", title: "Content Engine", desc: "Briefs, optimization, and refresh cycles for top pages." },
        { icon: "Link2", title: "Authority", desc: "Editorial outreach and partnerships for quality backlinks." },
        { icon: "ListChecks", title: "Governance", desc: "Content calendars, approvals, and CMS-ready publishing." },
      ],
      models: [
        {
          slug: "content-optimization",
          name: "Content Optimization Sprint",
          image: seoModelImages.contentOptimization,
          brief: "Refresh high-impact pages with NLP scoring, structured data, and UX tweaks.",
          features: ["Content audits", "Brief creation", "Optimization rollouts"],
          to: "/solutions/seo-services/content-authority/content-optimization",
        },
        {
          slug: "link-content-dev",
          name: "Link & Content Development",
          image: seoModelImages.linkContentDev,
          brief: "Develop new assets and secure placements through targeted outreach.",
          features: ["Asset ideation", "Outreach", "Thought-leadership"],
          to: "/solutions/seo-services/content-authority/link-content-dev",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
    "analytics-aso": {
      hero: {
        title: "Analytics & ASO Services",
        description: "Implement GA4, dashboards, and App Store Optimization for mobile visibility.",
        bg: seoHeroImage,
        breadcrumb: "Home / Solutions / SEO Services / Analytics & ASO",
      },
      keyBenefits: [
        { icon: "Activity", title: "GA4 & Reporting", desc: "Migrate properties, tag conversions, and ship Looker dashboards." },
        { icon: "Globe", title: "Insights", desc: "Search Console, marketplace, and app analytics unified in one view." },
        { icon: "BookMarked", title: "ASO", desc: "Keyword, creative, and review optimization for Play Store / App Store." },
      ],
      models: [
        {
          slug: "analytics-ga4",
          name: "Analytics & GA4 Migration",
          image: seoModelImages.analyticsGa4,
          brief: "Implement GA4, tag manager, events, and executive dashboards.",
          features: ["GA4 migration", "Tagging", "Looker studio"],
          to: "/solutions/seo-services/analytics-aso/analytics-ga4",
        },
        {
          slug: "app-store-optimization",
          name: "App Store Optimization",
          image: seoModelImages.appStoreOptimization,
          brief: "Boost visibility across Apple App Store and Google Play with ASO sprints.",
          features: ["Keyword targeting", "Creative testing", "Review response"],
          to: "/solutions/seo-services/analytics-aso/app-store-optimization",
        },
      ],
    },
  },
  modelPages: {
    "core-optimization": {
      "technical-onpage": {
        hero: {
          title: "Technical & On-Page SEO",
          description: "Resolve crawl barriers, optimize site structure, and align on-page signals to priority keywords.",
          bg: seoHeroImage,
          breadcrumb:
            "Home / Solutions / SEO Services / Core Optimization / Technical & On-Page",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.technicalOnpage],
        overview:
          "Deliverables include enterprise audits, Core Web Vitals fixes, schema, and page-level optimizations for priority clusters.",
        features: [
          "Technical & CWV audit",
          "Schema & structured data",
          "On-page refresh playbooks",
          "Monthly performance reviews",
        ],
        specs: {
          Pages: "Up to 40 URLs",
          CWV: "LCP & CLS remediation",
          Schema: "12+ schema types",
          Reporting: "GA4 + GSC dashboards",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/core-optimization/local-geo", name: "Local & Geo SEO", image: seoHeroImage },
          { href: "/solutions/seo-services/content-authority/content-optimization", name: "Content Optimization Sprint", image: seoHeroImage },
        ],
      },
      "local-geo": {
        hero: {
          title: "Local & Geo SEO",
          description: "Geo landing pages, listings management, and hyperlocal content for location-based businesses.",
          bg: seoHeroImage,
          breadcrumb: "Home / Solutions / SEO Services / Core Optimization / Local & Geo SEO",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.localGeo],
        overview:
          "Deploy location landing pages, citation cleanup, and reputation playbooks to dominate maps and near-me searches.",
        features: [
          "GBP optimization",
          "Citation building",
          "Geo landing pages",
          "Review enablement",
        ],
        specs: {
          Locations: "Up to 25",
          Citations: "Top 70 directories",
          Reviews: "Automation sequences",
          Reporting: "Local rank tracker",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/analytics-aso/analytics-ga4", name: "Analytics & GA4 Migration", image: seoHeroImage },
          { href: "/solutions/seo-services/content-authority/link-content-dev", name: "Link & Content Development", image: seoHeroImage },
        ],
      },
    },
    "content-authority": {
      "content-optimization": {
        hero: {
          title: "Content Optimization Sprint",
          description: "Refresh and expand high-impact pages with NLP scoring, structured data, and UX tweaks.",
          bg: seoHeroImage,
          breadcrumb: "Home / Solutions / SEO Services / Content & Authority / Content Optimization",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.contentOptimization],
        overview:
          "Includes content audits, briefs, CMS-ready updates, and QA to lift rankings and engagement.",
        features: [
          "Top-page audit",
          "SEO content briefs",
          "UX & CRO checklist",
          "Structured data markup",
        ],
        specs: {
          Pages: "Up to 25",
          Cadence: "Bi-weekly sprints",
          Output: "CMS-ready drafts",
          QA: "Editorial + SEO QA",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/content-authority/link-content-dev", name: "Link & Content Development", image: seoHeroImage },
          { href: "/solutions/seo-services/core-optimization/technical-onpage", name: "Technical & On-Page SEO", image: seoHeroImage },
        ],
      },
      "link-content-dev": {
        hero: {
          title: "Link & Content Development",
          description: "Produce new content assets and secure authority links via digital PR and partnerships.",
          bg: seoHeroImage,
          breadcrumb: "Home / Solutions / SEO Services / Content & Authority / Link & Content Development",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.linkContentDev],
        overview:
          "Launch thematic campaigns with share-worthy assets, prospecting, and reporting for placements and mentions.",
        features: [
          "Content asset creation",
          "Prospecting & outreach",
          "Digital PR pitches",
          "Monthly authority reporting",
        ],
        specs: {
          Assets: "2 assets / month",
          Outreach: "60 prospects",
          Links: "6 placements avg",
          Reporting: "DA / traffic metrics",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/content-authority/content-optimization", name: "Content Optimization Sprint", image: seoHeroImage },
          { href: "/solutions/seo-services/analytics-aso/app-store-optimization", name: "App Store Optimization", image: seoHeroImage },
        ],
      },
    },
    "analytics-aso": {
      "analytics-ga4": {
        hero: {
          title: "Analytics & GA4 Migration",
          description: "Migrate to GA4, configure events, dashboards, and analytics governance.",
          bg: seoHeroImage,
          breadcrumb: "Home / Solutions / SEO Services / Analytics & ASO / Analytics & GA4",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.analyticsGa4],
        overview:
          "Includes GA4 workspace setup, GTM tagging, conversion tracking, and Looker Studio dashboards for SEO KPIs.",
        features: [
          "GA4 property migration",
          "Event & ecommerce tagging",
          "Looker Studio dashboard",
          "Training & documentation",
        ],
        specs: {
          Properties: "Up to 4",
          Events: "25 conversions",
          Dashboards: "2 custom",
          Training: "2 stakeholder sessions",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/analytics-aso/app-store-optimization", name: "App Store Optimization", image: seoHeroImage },
          { href: "/solutions/seo-services/core-optimization/technical-onpage", name: "Technical & On-Page SEO", image: seoHeroImage },
        ],
      },
      "app-store-optimization": {
        hero: {
          title: "App Store Optimization",
          description: "Optimize metadata, creative, and reviews to increase app visibility and installs.",
          bg: seoHeroImage,
          breadcrumb: "Home / Solutions / SEO Services / Analytics & ASO / App Store Optimization",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [seoModelImages.appStoreOptimization],
        overview:
          "Deliverables include keyword research, metadata refresh, creative testing, and ratings/enhancement workflow.",
        features: [
          "Metadata & keyword updates",
          "Creative testing roadmaps",
          "Review management",
          "Install & cohort dashboards",
        ],
        specs: {
          Stores: "Apple + Google",
          Keywords: "50 tracked",
          Creative: "Quarterly refresh",
          Reporting: "Monthly ASO insights",
        },
        downloads: [],
        related: [
          { href: "/solutions/seo-services/analytics-aso/analytics-ga4", name: "Analytics & GA4 Migration", image: seoHeroImage },
          { href: "/solutions/seo-services/content-authority/link-content-dev", name: "Link & Content Development", image: seoHeroImage },
        ],
      },
    },
  },
};
