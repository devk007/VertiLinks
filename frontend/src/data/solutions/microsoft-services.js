import images from '../images';
import {
  Cloud,
  Layers,
  MonitorCog,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

export default {
  slug: "microsoft-services",
  title: "Microsoft Services",
  categoryPage: {
    hero: {
      title: "Microsoft Cloud & Productivity",
      description:
        "Adopt, customize, and manage Microsoft 365, Azure, and Power Platform with certified experts.",
      bg: images.products.hero,
      breadcrumb: "Home / Solutions / Microsoft Services",
      cta: { label: "Engage the Team", to: "/contact" },
    },
    overview: {
      heading: "Modern Work & Azure Solutions",
      icon: MonitorCog,
      intro:
        "We help organizations embrace secure collaboration, app modernization, and data insights on Microsoft cloud.",
      bulletsLeft: [
        "Microsoft 365 adoption",
        "Azure infrastructure & governance",
        "Power Platform automation",
        "Security & compliance",
      ],
      bulletsRight: [
        "Teams voice & meetings",
        "Endpoint management",
        "Licensing optimization",
        "Managed support services",
      ],
      keyBenefits: [
        { icon: "Cloud", title: "Cloud Native", desc: "Leverage Azure and Microsoft 365 features fully." },
        { icon: "ShieldCheck", title: "Secure", desc: "Zero trust framework with Defender and Purview." },
        { icon: "Workflow", title: "Automated", desc: "Power Platform enables rapid automation and apps." },
      ],
    },
    brands: [
      {
        slug: "modern-work",
        name: "Modern Work",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Microsoft 365 adoption, Teams enablement, and security hardening.",
        highlights: [
          "Teams voice",
          "Endpoint management",
          "Security baseline",
        ],
        industries: ["Corporate", "Education", "Healthcare"],
        to: "/solutions/microsoft-services/modern-work",
      },
      {
        slug: "azure-services",
        name: "Azure Services",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Infrastructure, data, and DevOps on Azure with governance.",
        highlights: [
          "Azure landing zone",
          "Data & analytics",
          "DevOps enablement",
        ],
        industries: ["Finance", "Government", "Manufacturing"],
        to: "/solutions/microsoft-services/azure-services",
      },
    ],
  },
  brandPages: {
    "modern-work": {
      hero: {
        title: "Modern Work Services",
        description: "Enable secure collaboration and productivity on Microsoft 365.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / Microsoft Services / Modern Work",
        cta: { label: "Review Packages", to: "/contact" },
      },
      keyBenefits: [
        { icon: "UsersRound", title: "Adoption", desc: "Change management and champion programs." },
        { icon: "ShieldCheck", title: "Secure", desc: "Defender suite configuration and compliance." },
        { icon: "Sparkles", title: "Productivity", desc: "Automations with Power Automate and Viva." },
      ],
      models: [
        {
          slug: "m365-launch",
          name: "M365 Launch",
          image: images.products.hero,
          brief: "Plan, deploy, and train users on Microsoft 365 core workloads.",
          features: [
            "Tenant setup",
            "Security baseline",
            "Adoption workshops",
          ],
          to: "/solutions/microsoft-services/modern-work/m365-launch",
        },
        {
          slug: "teams-voice",
          name: "Teams Voice",
          image: images.products.hero,
          brief: "Enable Teams calling with SBC, survivability, and user training.",
          features: [
            "Direct routing",
            "SBC setup",
            "Training",
          ],
          to: "/solutions/microsoft-services/modern-work/teams-voice",
        },
      ],
    },
    "azure-services": {
      hero: {
        title: "Azure Cloud Services",
        description: "Design, migrate, and operate workloads on Azure with governance.",
        bg: images.products.hero,
        breadcrumb: "Home / Solutions / Microsoft Services / Azure Services",
      },
      keyBenefits: [
        { icon: "Layers", title: "Landing Zone", desc: "Azure landing zone & governance blueprint." },
        { icon: "Cloud", title: "Modernization", desc: "App & data modernization with Azure services." },
        { icon: "Workflow", title: "DevOps", desc: "CI/CD pipelines, IaC, and observability." },
      ],
      models: [
        {
          slug: "azure-foundation",
          name: "Azure Foundation",
          image: images.products.hero,
          brief: "Landing zone, governance, and security baseline for Azure.",
          features: [
            "Landing zone",
            "Policy & RBAC",
            "Monitoring",
          ],
          to: "/solutions/microsoft-services/azure-services/azure-foundation",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "azure-modernization",
          name: "Azure Modernization",
          image: images.products.hero,
          brief: "Modernize apps with containers, serverless, and databases.",
          features: [
            "Containerization",
            "Data services",
            "Automation",
          ],
          to: "/solutions/microsoft-services/azure-services/azure-modernization",
        },
      ],
    },
  },

  modelPages: {
    "modern-work": {
      "m365-launch": {
        hero: {
          title: "M365 Launch",
          description: "Plan and deploy Microsoft 365 core workloads with adoption workshops.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Microsoft Services / Modern Work / M365 Launch",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Tenant setup, security baselines, and user training to launch Microsoft 365 successfully.",
        features: [
          "Tenant configuration",
          "Security baseline",
          "Adoption workshops",
          "Governance policy set",
        ],
        specs: {
          Duration: "4-6 weeks",
          Users: "Up to 500",
          Security: "Defender baseline",
          Training: "Champion sessions",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/microsoft-services/modern-work/teams-voice",
            name: "Teams Voice",
            image: images.products.hero,
          },
        ],
      },
      "teams-voice": {
        hero: {
          title: "Teams Voice",
          description: "Enable Teams calling with SBC integration, survivability, and user training.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Microsoft Services / Modern Work / Teams Voice",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Configure direct routing, SBC, and user training for Teams telephony rollouts.",
        features: [
          "Direct routing setup",
          "SBC configuration",
          "Survivable branch appliance",
          "End-user enablement",
        ],
        specs: {
          Users: "Up to 1,000",
          SBC: "Certified devices",
          DR: "Branch survivability",
          Training: "Role-based",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/microsoft-services/modern-work/m365-launch",
            name: "M365 Launch",
            image: images.products.hero,
          },
        ],
      },
    },
    "azure-services": {
      "azure-foundation": {
        hero: {
          title: "Azure Foundation",
          description: "Establish an Azure landing zone with governance and monitoring.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Microsoft Services / Azure Services / Azure Foundation",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Create a production-ready landing zone including identity, networking, policy, and monitoring.",
        features: [
          "Landing zone blueprint",
          "Policy & RBAC",
          "Logging & monitoring",
          "Cost guardrails",
        ],
        specs: {
          Architecture: "Hub & spoke",
          Identity: "Azure AD",
          Monitoring: "Azure Monitor",
          Security: "Defender",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/microsoft-services/azure-services/azure-modernization",
            name: "Azure Modernization",
            image: images.products.hero,
          },
        ],
      },
      "azure-modernization": {
        hero: {
          title: "Azure Modernization",
          description: "Modernize apps with containers, serverless, and managed databases.",
          bg: images.products.hero,
          breadcrumb: "Home / Solutions / Microsoft Services / Azure Services / Azure Modernization",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Refactor and replatform workloads using containers, serverless, and Azure data services.",
        features: [
          "Containerization",
          "Serverless functions",
          "Managed SQL / Cosmos",
          "DevOps automation",
        ],
        specs: {
          Stack: "AKS / Functions",
          DevOps: "Azure DevOps / GitHub",
          Databases: "Azure SQL / Cosmos",
          Monitoring: "Application Insights",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/microsoft-services/azure-services/azure-foundation",
            name: "Azure Foundation",
            image: images.products.hero,
          },
        ],
      },
    },
  },
};
