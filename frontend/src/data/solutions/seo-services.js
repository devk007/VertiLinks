import images from '../images';
import {
  BarChart3,
  Globe,
  Link2,
  ListChecks,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default {
  slug: "seo-services",
  title: "SEO Services",
  categoryPage: {
    hero: {
      title: "Search Engine Optimization",
      description:
        "Improve visibility, drive organic traffic, and convert more leads with data-backed SEO strategies.",
      bg: images.home.about,
      breadcrumb: "Home / Solutions / SEO Services",
      cta: { label: "Request SEO Audit", to: "/contact" },
    },
    overview: {
      heading: "Full-Funnel SEO Programs",
      icon: Search,
      intro:
        "Technical, on-page, and off-page SEO services engineered for sustainable ranking growth across Google and Bing.",
      bulletsLeft: [
        "Technical SEO & site health",
        "Keyword research & mapping",
        "Content strategy & production",
        "Local & multi-language SEO",
      ],
      bulletsRight: [
        "Backlink outreach",
        "Conversion optimization",
        "Analytics & reporting",
        "Continuous experimentation",
      ],
      keyBenefits: [
        { icon: "BarChart3", title: "Measurable", desc: "KPI-led dashboards track ranking, traffic, and conversions." },
        { icon: "ListChecks", title: "Holistic", desc: "Technical, content, and authority building in one program." },
        { icon: "Sparkles", title: "Modern", desc: "AI-assisted content briefs and structured data implementation." },
      ],
    },
    brands: [
      {
        slug: "growth-seo",
        name: "Growth SEO",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Comprehensive monthly SEO program for mid-market brands.",
        highlights: [
          "Keyword strategy",
          "Technical fixes",
          "Authority building",
        ],
        industries: ["E-commerce", "Hospitality", "Professional Services"],
        to: "/solutions/seo-services/growth-seo",
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Hyperlocal visibility for retail, clinics, and F&B chains.",
        highlights: [
          "GMB optimization",
          "Local content",
          "Review management",
        ],
        industries: ["Retail", "Healthcare", "Food & Beverage"],
        to: "/solutions/seo-services/local-seo",
      },
    ],
  },
  brandPages: {
    "growth-seo": {
      hero: {
        title: "Growth SEO Program",
        description: "Data-driven SEO retainer covering technical, content, and authority.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / SEO Services / Growth SEO",
        cta: { label: "See Deliverables", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Globe", title: "Global Reach", desc: "Multi-language and international SEO expertise." },
        { icon: "Link2", title: "Quality Links", desc: "White-hat outreach with editorial placements." },
        { icon: "Radar", title: "Insights", desc: "Dashboards highlight ROI and next best actions." },
      ],
      models: [
        {
          slug: "starter-plan",
          name: "Starter Plan",
          image: images.home.about,
          brief: "Ideal for emerging brands targeting 10-15 key themes.",
          features: [
            "Keyword strategy",
            "Technical fixes",
            "Monthly reporting",
          ],
          to: "/solutions/seo-services/growth-seo/starter-plan",
        },
        {
          slug: "scale-plan",
          name: "Scale Plan",
          image: images.home.about,
          brief: "Aggressive growth program with content marketing and outreach.",
          features: [
            "Content production",
            "Digital PR",
            "Conversion tracking",
          ],
          to: "/solutions/seo-services/growth-seo/scale-plan",
        },
      ],
    },
    "local-seo": {
      hero: {
        title: "Local SEO Program",
        description: "Dominate local search and maps for multi-location businesses.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / SEO Services / Local SEO",
      },
      keyBenefits: [
        { icon: "Search", title: "Maps Visibility", desc: "Optimize Google Business Profile and local citations." },
        { icon: "ListChecks", title: "Consistency", desc: "NAP audits and citation cleanup across directories." },
        { icon: "ShieldCheck", title: "Reputation", desc: "Review response playbooks and automation." },
      ],
      models: [
        {
          slug: "single-location",
          name: "Single Location",
          image: images.home.about,
          brief: "Boost visibility for a flagship store or clinic.",
          features: [
            "GBP optimization",
            "Local landing pages",
            "Review automation",
          ],
          to: "/solutions/seo-services/local-seo/single-location",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "multi-location",
          name: "Multi Location",
          image: images.home.about,
          brief: "Manage and scale 10+ locations with centralized reporting.",
          features: [
            "Location pages",
            "Citation syndication",
            "Call tracking",
          ],
          to: "/solutions/seo-services/local-seo/multi-location",
        },
      ],
    },
  },

  modelPages: {
    "growth-seo": {
      "starter-plan": {
        hero: {
          title: "Starter Plan",
          description: "Foundational SEO program covering technical fixes and keyword strategy.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / SEO Services / Growth SEO / Starter Plan",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Target 10-15 key themes with technical clean-up, keyword mapping, and baseline content recommendations.",
        features: [
          "Keyword strategy",
          "Technical audit & fixes",
          "Monthly reporting",
          "Competitor benchmarks",
        ],
        specs: {
          Keywords: "15 core",
          Content: "2 briefs / month",
          Backlinks: "Light outreach",
          Reporting: "Monthly dashboard",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/seo-services/growth-seo/scale-plan",
            name: "Scale Plan",
            image: images.home.about,
          },
        ],
      },
      "scale-plan": {
        hero: {
          title: "Scale Plan",
          description: "Aggressive SEO growth with content marketing and digital PR outreach.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / SEO Services / Growth SEO / Scale Plan",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Expand into new clusters with ongoing content production, digital PR, and conversion tracking.",
        features: [
          "Content production",
          "Digital PR outreach",
          "Conversion tracking",
          "Experimentation roadmap",
        ],
        specs: {
          Keywords: "40+",
          Content: "4 articles / month",
          Backlinks: "6 placements / month",
          CRO: "Landing page tests",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/seo-services/growth-seo/starter-plan",
            name: "Starter Plan",
            image: images.home.about,
          },
        ],
      },
    },
    "local-seo": {
      "single-location": {
        hero: {
          title: "Single Location",
          description: "Boost visibility for a flagship store or clinic in local search and maps.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / SEO Services / Local SEO / Single Location",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Optimize Google Business Profile, local citations, and localized landing pages for a single location.",
        features: [
          "GBP optimization",
          "Local landing page",
          "Review automation",
          "Citation cleanup",
        ],
        specs: {
          Locations: "1",
          Citations: "Top 40",
          Reviews: "Automation flows",
          Reporting: "Monthly",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/seo-services/local-seo/multi-location",
            name: "Multi Location",
            image: images.home.about,
          },
        ],
      },
      "multi-location": {
        hero: {
          title: "Multi Location",
          description: "Manage and scale SEO for 10+ locations with centralized dashboards.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / SEO Services / Local SEO / Multi Location",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Create and manage location landing pages, citation syndication, and call tracking for multi-site brands.",
        features: [
          "Location page templates",
          "Citation syndication",
          "Call tracking",
          "Review response playbooks",
        ],
        specs: {
          Locations: "10+",
          Citations: "Automated",
          Tracking: "Call & form",
          Dashboard: "Centralized KPI",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/seo-services/local-seo/single-location",
            name: "Single Location",
            image: images.home.about,
          },
        ],
      },
    },
  },
};
