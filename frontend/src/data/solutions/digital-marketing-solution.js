import images from '../images';
import {
  BarChart3,
  BellRing,
  Group,
  Megaphone,
  MonitorSmartphone,
  Network,
  Sparkles,
  Target,
} from "lucide-react";

export default {
  slug: "digital-marketing-solution",
  title: "Digital Marketing Solution",
  categoryPage: {
    hero: {
      title: "Full-Funnel Digital Marketing",
      description:
        "Campaign strategy, creative, media buying, and analytics aligned to your growth goals.",
      bg: images.home.about,
      breadcrumb: "Home / Solutions / Digital Marketing Solution",
      cta: { label: "Plan a Campaign", to: "/contact" },
    },
    overview: {
      heading: "Performance Marketing Engine",
      icon: Megaphone,
      intro:
        "We craft campaigns across paid, owned, and earned media with data-driven optimization.",
      bulletsLeft: [
        "Campaign strategy & planning",
        "Creative production",
        "Paid media management",
        "Marketing automation",
      ],
      bulletsRight: [
        "Lead nurturing",
        "Analytics & attribution",
        "Growth experiments",
        "Monthly business reviews",
      ],
      keyBenefits: [
        { icon: "Target", title: "Targeted", desc: "Precision audience targeting across channels." },
        { icon: "Sparkles", title: "Creative", desc: "Compelling storytelling and thumb-stopping content." },
        { icon: "BarChart3", title: "ROI Focused", desc: "Dashboards showing CPL, ROAS, and conversion health." },
      ],
    },
    brands: [
      {
        slug: "performance-suite",
        name: "Performance Suite",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Lead generation and e-commerce performance marketing retainer.",
        highlights: [
          "Paid search",
          "Paid social",
          "Conversion tracking",
        ],
        industries: ["Education", "Real Estate", "E-commerce"],
        to: "/solutions/digital-marketing-solution/performance-suite",
      },
      {
        slug: "engagement-suite",
        name: "Engagement Suite",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Brand storytelling, content marketing, and automation journeys.",
        highlights: [
          "Content calendars",
          "Email nurture",
          "Community building",
        ],
        industries: ["Hospitality", "B2B", "Healthcare"],
        to: "/solutions/digital-marketing-solution/engagement-suite",
      },
    ],
  },
  brandPages: {
    "performance-suite": {
      hero: {
        title: "Performance Marketing Suite",
        description: "Paid media campaigns optimized for leads and conversions.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Digital Marketing Solution / Performance Suite",
        cta: { label: "See Tiers", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Megaphone", title: "Cross-Channel", desc: "Run search, social, display, and video from one team." },
        { icon: "MonitorSmartphone", title: "Always-On", desc: "Daily optimizations with creative testing." },
        { icon: "BarChart3", title: "Reporting", desc: "Live dashboards and executive summaries." },
      ],
      models: [
        {
          slug: "growth-tier",
          name: "Growth Tier",
          image: images.home.about,
          brief: "Paid campaigns across two channels with weekly optimization.",
          features: [
            "Paid search",
            "Paid social",
            "Weekly reviews",
          ],
          to: "/solutions/digital-marketing-solution/performance-suite/growth-tier",
        },
        {
          slug: "scale-tier",
          name: "Scale Tier",
          image: images.home.about,
          brief: "Multi-channel strategy with CRO and automation support.",
          features: [
            "Display & video",
            "CRO support",
            "Automation",
          ],
          to: "/solutions/digital-marketing-solution/performance-suite/scale-tier",
        },
      ],
    },
    "engagement-suite": {
      hero: {
        title: "Engagement Marketing Suite",
        description: "Content, community, and lifecycle marketing programs.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Digital Marketing Solution / Engagement Suite",
      },
      keyBenefits: [
        { icon: "Group", title: "Community", desc: "Social listening, moderation, and engagement." },
        { icon: "BellRing", title: "Automation", desc: "Email nurture and trigger campaigns." },
        { icon: "Network", title: "Influence", desc: "Influencer partnerships and co-marketing." },
      ],
      models: [
        {
          slug: "content-engine",
          name: "Content Engine",
          image: images.home.about,
          brief: "Content calendars, blog production, and social storytelling.",
          features: [
            "Editorial calendar",
            "SEO content",
            "Social storytelling",
          ],
          to: "/solutions/digital-marketing-solution/engagement-suite/content-engine",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "lifecycle",
          name: "Lifecycle Journeys",
          image: images.home.about,
          brief: "Marketing automation, lead scoring, and nurture sequences.",
          features: [
            "Email automation",
            "Lead scoring",
            "Analytics",
          ],
          to: "/solutions/digital-marketing-solution/engagement-suite/lifecycle",
        },
      ],
    },
  },

  modelPages: {
    "performance-suite": {
      "growth-tier": {
        hero: {
          title: "Growth Tier",
          description: "Two-channel paid media management with weekly optimization.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Digital Marketing Solution / Performance Suite / Growth Tier",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Launch high-performing paid search and social campaigns with weekly optimization and reporting.",
        features: [
          "Paid search management",
          "Paid social management",
          "Weekly optimizations",
          "Lead tracking setup",
        ],
        specs: {
          Channels: "Search + Social",
          Reporting: "Weekly snapshot",
          Experiments: "Ad copy tests",
          Support: "Dedicated manager",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/digital-marketing-solution/performance-suite/scale-tier",
            name: "Scale Tier",
            image: images.home.about,
          },
        ],
      },
      "scale-tier": {
        hero: {
          title: "Scale Tier",
          description: "Multi-channel performance marketing with CRO and automation.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Digital Marketing Solution / Performance Suite / Scale Tier",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Add display, video, CRO support, and marketing automation to accelerate growth campaigns.",
        features: [
          "Display & video activation",
          "Landing page CRO",
          "Marketing automation",
          "Attribution modelling",
        ],
        specs: {
          Channels: "Search, Social, Display, Video",
          CRO: "Quarterly tests",
          Automation: "Lead nurture flows",
          Reporting: "Executive dashboard",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/digital-marketing-solution/performance-suite/growth-tier",
            name: "Growth Tier",
            image: images.home.about,
          },
        ],
      },
    },
    "engagement-suite": {
      "content-engine": {
        hero: {
          title: "Content Engine",
          description: "Editorial calendars, SEO storytelling, and social content for engagement.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Digital Marketing Solution / Engagement Suite / Content Engine",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Produce consistent content across blogs and social with an editorial calendar and storytelling framework.",
        features: [
          "Editorial calendar",
          "SEO content production",
          "Social storytelling",
          "Creative templates",
        ],
        specs: {
          Cadence: "4 articles + 12 posts / month",
          Channels: "Blog + social",
          Toolkit: "Design templates",
          Reporting: "Monthly engagement",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/digital-marketing-solution/engagement-suite/lifecycle",
            name: "Lifecycle Journeys",
            image: images.home.about,
          },
        ],
      },
      lifecycle: {
        hero: {
          title: "Lifecycle Journeys",
          description: "Marketing automation, lead scoring, and nurture sequences.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Digital Marketing Solution / Engagement Suite / Lifecycle",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Automate customer journeys with email nurture, lead scoring, and lifecycle analytics.",
        features: [
          "Email automation",
          "Lead scoring",
          "Journey analytics",
          "CRM integration",
        ],
        specs: {
          Platform: "HubSpot / Marketo / Pardot",
          Journeys: "Up to 6",
          Scoring: "Custom rules",
          Reporting: "Lifecycle dashboard",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/digital-marketing-solution/engagement-suite/content-engine",
            name: "Content Engine",
            image: images.home.about,
          },
        ],
      },
    },
  },
};
