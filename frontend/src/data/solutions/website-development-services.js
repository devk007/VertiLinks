import images from '../images';
import {
  Code,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  PenTool,
  ServerCog,
  Sparkles,
} from "lucide-react";

export default {
  slug: "website-development-services",
  title: "Website Development Services",
  categoryPage: {
    hero: {
      title: "High-Performance Web Development",
      description:
        "Design and build responsive, secure websites that convert visitors into customers and integrate with your stack.",
      bg: images.home.about,
      breadcrumb: "Home / Solutions / Website Development Services",
      cta: { label: "Discuss a Project", to: "/contact" },
    },
    overview: {
      heading: "Full-Stack Web Studio",
      icon: MonitorSmartphone,
      intro:
        "Our UX designers and full-stack engineers craft compelling web experiences powered by modern frameworks and CMS options.",
      bulletsLeft: [
        "UX research & prototyping",
        "Responsive & ADA compliant design",
        "Jamstack, Headless, or traditional CMS",
        "Performance & SEO optimization",
      ],
      bulletsRight: [
        "APIs & system integrations",
        "E-commerce development",
        "Managed hosting & support",
        "Analytics & experimentation",
      ],
      keyBenefits: [
        { icon: "Palette", title: "On-Brand", desc: "Pixel-perfect design language reflecting your brand." },
        { icon: "Code", title: "Modern Stack", desc: "React, Next.js, Laravel, WordPress, or custom builds." },
        { icon: "ServerCog", title: "Reliable", desc: "Secure hosting, CI/CD, and ongoing enhancements." },
      ],
    },
    brands: [
      {
        slug: "experience-sites",
        name: "Experience Sites",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Marketing and corporate sites with storytelling and lead capture.",
        highlights: [
          "Brand storytelling",
          "Marketing automation",
          "A/B testing",
        ],
        industries: ["Corporate", "Finance", "Education"],
        to: "/solutions/website-development-services/experience-sites",
      },
      {
        slug: "commerce-sites",
        name: "Commerce Sites",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "E-commerce builds with headless architecture and ERP integrations.",
        highlights: [
          "Headless storefront",
          "Payment gateways",
          "ERP integration",
        ],
        industries: ["Retail", "Wholesale", "Manufacturing"],
        to: "/solutions/website-development-services/commerce-sites",
      },
    ],
  },
  brandPages: {
    "experience-sites": {
      hero: {
        title: "Experience Website Studio",
        description: "Narrative-driven, high-converting websites with analytics baked in.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Website Development Services / Experience Sites",
        cta: { label: "View Packages", to: "/contact" },
      },
      keyBenefits: [
        { icon: "PenTool", title: "UX Research", desc: "Workshops, personas, and journey mapping inform design." },
        { icon: "Sparkles", title: "Animations", desc: "Micro-interactions and rich media for engagement." },
        { icon: "Globe", title: "Global", desc: "Multi-language support with localized content." },
      ],
      models: [
        {
          slug: "launch-kit",
          name: "Launch Kit",
          image: images.home.about,
          brief: "Corporate site up to 12 pages with CMS and analytics setup.",
          features: [
            "Design system",
            "CMS setup",
            "Analytics",
          ],
          to: "/solutions/website-development-services/experience-sites/launch-kit",
        },
        {
          slug: "growth-kit",
          name: "Growth Kit",
          image: images.home.about,
          brief: "Multi-language site with marketing automation and personalization.",
          features: [
            "Localization",
            "Automation",
            "Personalization",
          ],
          to: "/solutions/website-development-services/experience-sites/growth-kit",
        },
      ],
    },
    "commerce-sites": {
      hero: {
        title: "Commerce Website Studio",
        description: "High-converting commerce experiences with integrations and automations.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Website Development Services / Commerce Sites",
      },
      keyBenefits: [
        { icon: "LayoutDashboard", title: "Headless", desc: "API-first storefront with blazing fast performance." },
        { icon: "Code", title: "Integrated", desc: "ERP, CRM, and fulfilment workflow automation." },
        { icon: "MonitorSmartphone", title: "Omnichannel", desc: "Responsive, PWA-ready experiences." },
      ],
      models: [
        {
          slug: "launch-commerce",
          name: "Launch Commerce",
          image: images.home.about,
          brief: "Quick-to-market store with payment gateways and shipping setup.",
          features: [
            "Payment gateways",
            "Shipping rules",
            "Analytics",
          ],
          to: "/solutions/website-development-services/commerce-sites/launch-commerce",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "scale-commerce",
          name: "Scale Commerce",
          image: images.home.about,
          brief: "Headless commerce with integrations, loyalty, and automation.",
          features: [
            "Headless architecture",
            "ERP integration",
            "Automation",
          ],
          to: "/solutions/website-development-services/commerce-sites/scale-commerce",
        },
      ],
    },
  },

  modelPages: {
    "experience-sites": {
      "launch-kit": {
        hero: {
          title: "Launch Kit",
          description: "Corporate site up to 12 pages with CMS, tracking, and design system.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Website Development Services / Experience Sites / Launch Kit",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Craft a polished marketing site with UX workshops, responsive design, CMS setup, and analytics configuration.",
        features: [
          "Design system",
          "CMS configuration",
          "Analytics setup",
          "SEO ready architecture",
        ],
        specs: {
          Pages: "Up to 12",
          CMS: "WordPress / Headless",
          Timeline: "6-8 weeks",
          Handover: "Training + docs",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/website-development-services/experience-sites/growth-kit",
            name: "Growth Kit",
            image: images.home.about,
          },
        ],
      },
      "growth-kit": {
        hero: {
          title: "Growth Kit",
          description: "Multi-language experience with automation, personalization, and experimentation.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Website Development Services / Experience Sites / Growth Kit",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Scale globally with localized content, marketing automation workflows, and personalization engines.",
        features: [
          "Multi-language localization",
          "Marketing automation",
          "Personalization rules",
          "A/B testing setup",
        ],
        specs: {
          Locales: "Up to 6",
          Integrations: "CRM / MAP",
          Experimentation: "A/B + heatmaps",
          Support: "Quarterly enhancements",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/website-development-services/experience-sites/launch-kit",
            name: "Launch Kit",
            image: images.home.about,
          },
        ],
      },
    },
    "commerce-sites": {
      "launch-commerce": {
        hero: {
          title: "Launch Commerce",
          description: "E-commerce store with payments, shipping rules, and analytics.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Website Development Services / Commerce Sites / Launch Commerce",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Launch quickly with storefront setup, payment gateway integration, and shipping automation.",
        features: [
          "Payment gateway setup",
          "Shipping & tax rules",
          "Analytics dashboards",
          "Marketing pixels",
        ],
        specs: {
          Platform: "Shopify / Woo / Headless",
          Products: "Up to 500",
          Timeline: "8-10 weeks",
          Support: "30-day hypercare",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/website-development-services/commerce-sites/scale-commerce",
            name: "Scale Commerce",
            image: images.home.about,
          },
        ],
      },
      "scale-commerce": {
        hero: {
          title: "Scale Commerce",
          description: "Headless commerce with ERP integration, loyalty, and automation.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Website Development Services / Commerce Sites / Scale Commerce",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Deliver high-performance headless storefronts with ERP integration, loyalty, and automation.",
        features: [
          "Headless architecture",
          "ERP / CRM integration",
          "Automation workflows",
          "Loyalty program support",
        ],
        specs: {
          Stack: "Next.js / Headless CMS",
          Integrations: "ERP, CRM, OMS",
          Performance: "Core Web Vitals optimised",
          Support: "Retainer available",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/website-development-services/commerce-sites/launch-commerce",
            name: "Launch Commerce",
            image: images.home.about,
          },
        ],
      },
    },
  },
};
