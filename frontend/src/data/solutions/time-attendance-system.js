import {
  BellRing,
  CalendarCheck,
  ChartPie,
  Clock3,
  FileSpreadsheet,
  Server,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

export default {
  slug: "time-attendance-system",
  title: "Time Attendance System",
  categoryPage: {
    hero: {
      title: "Automated Time & Attendance",
      description:
        "Capture accurate working hours, automate payroll inputs, and stay compliant with local labor laws using biometric and mobile attendance solutions.",
      bg: "/assets/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg",
      breadcrumb: "Home / Solutions / Time Attendance System",
      cta: { label: "Book a Demo", to: "/contact" },
    },
    overview: {
      heading: "Enterprise Time Tracking Platform",
      icon: Clock3,
      intro:
        "Deploy centrally managed biometric devices, mobile check-ins, and geo-fenced attendance with automated policy enforcement.",
      bulletsLeft: [
        "Face, fingerprint, RFID and mobile check-ins",
        "Shift templates with rotational planning",
        "Automated overtime & leave calculations",
        "Integration with Oracle, SAP, Tally, ERPNext",
      ],
      bulletsRight: [
        "Geo-fencing for field teams",
        "Real-time dashboards & alerts",
        "Arabic & English self-service portal",
        "Payroll-ready exports & APIs",
      ],
      keyBenefits: [
        { icon: "Clock3", title: "Accuracy", desc: "Biometric capture removes proxy attendance and buddy punching." },
        { icon: "CalendarCheck", title: "Compliance", desc: "Automatic policy application keeps you audit ready." },
        { icon: "Users", title: "Engagement", desc: "Self-service web & mobile apps improve transparency." },
      ],
    },
    brands: [
      {
        slug: "essential-suite",
        name: "Essential Suite",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-1081869356-1024x1024.jpg",
        blurb: "Cloud-ready attendance for SMEs with quick deployment and mobile approvals.",
        highlights: [
          "Mobile & biometric capture",
          "Leave & overtime workflows",
          "Payroll exports",
        ],
        industries: ["Retail", "Healthcare", "Hospitality"],
        to: "/solutions/time-attendance-system/essential-suite",
      },
      {
        slug: "enterprise-suite",
        name: "Enterprise Suite",
        logo: "/assets/brands/placeholder.svg",
        banner: "/assets/istockphoto-1081869356-1024x1024.jpg",
        blurb: "Multi-location attendance with high-availability architecture and custom integrations.",
        highlights: [
          "High availability",
          "Custom integration bus",
          "Advanced analytics",
        ],
        industries: ["Manufacturing", "Government", "Financial Services"],
        to: "/solutions/time-attendance-system/enterprise-suite",
      },
    ],
  },
  brandPages: {
    "essential-suite": {
      hero: {
        title: "Essential Time Attendance Suite",
        description: "Quick to deploy attendance management for distributed teams.",
        bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Time Attendance System / Essential Suite",
        cta: { label: "Explore Modules", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Smartphone", title: "Mobile Ready", desc: "Employee self-service with geo-fencing and selfie verification." },
        { icon: "FileSpreadsheet", title: "Payroll Sync", desc: "Exports to major payroll and ERP platforms in one click." },
        { icon: "BellRing", title: "Alerts", desc: "Instant notifications for missed swipes or overtime breaches." },
      ],
      models: [
        {
          slug: "starter-pack",
          name: "Starter Pack",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Up to 250 employees with biometric devices and cloud dashboard.",
          features: [
            "Cloud hosted dashboard",
            "Face & fingerprint terminals",
            "Basic leave management",
          ],
          to: "/solutions/time-attendance-system/essential-suite/starter-pack",
        },
        {
          slug: "growth-pack",
          name: "Growth Pack",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Scale to 1000 employees with multi-branch sync and mobile approvals.",
          features: [
            "Multi-branch sync",
            "Mobile approvals",
            "Payroll connectors",
          ],
          to: "/solutions/time-attendance-system/essential-suite/growth-pack",
        },
      ],
    },
    "enterprise-suite": {
      hero: {
        title: "Enterprise Attendance Suite",
        description: "Mission-critical platform with redundancy, custom policies, and analytics.",
        bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
        breadcrumb: "Home / Solutions / Time Attendance System / Enterprise Suite",
      },
      keyBenefits: [
        { icon: "Server", title: "Redundancy", desc: "Active-active server design with failover for uninterrupted uptime." },
        { icon: "Workflow", title: "Advanced Policies", desc: "Complex shifts, union rules, and compliance automation." },
        { icon: "ChartPie", title: "Analytics", desc: "Real-time dashboards with Power BI connectors." },
      ],
      models: [
        {
          slug: "enterprise-core",
          name: "Enterprise Core",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Core platform with LDAP/AD sync and API gateway.",
          features: [
            "LDAP/AD integration",
            "API gateway",
            "Advanced policy engine",
          ],
          to: "/solutions/time-attendance-system/enterprise-suite/enterprise-core",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "insights-pack",
          name: "Insights Pack",
          image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          brief: "Add-on analytics with predictive absence modelling.",
          features: [
            "Predictive insights",
            "Custom dashboards",
            "Scheduled reports",
          ],
          to: "/solutions/time-attendance-system/enterprise-suite/insights-pack",
        },
      ],
    },
  },

  modelPages: {
    "essential-suite": {
      "starter-pack": {
        hero: {
          title: "Starter Pack — Essential Suite",
          description: "Entry bundle with biometric devices and cloud dashboards for small teams.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Time Attendance System / Essential Suite / Starter Pack",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Deploy face or fingerprint terminals connected to the Essential Suite cloud portal. Automate attendance capture and basic leave workflows without custom development.",
        features: [
          "Up to 250 employees",
          "Cloud hosted dashboard",
          "Face & fingerprint devices",
          "Basic leave workflows",
        ],
        specs: {
          Connectivity: "Wi-Fi / LAN",
          Devices: "2 biometric terminals",
          Deployment: "Cloud SaaS",
          SLA: "Next-business-day support",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/time-attendance-system/essential-suite/growth-pack",
            name: "Growth Pack",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
      "growth-pack": {
        hero: {
          title: "Growth Pack — Essential Suite",
          description: "Scale attendance across branches with mobile approvals and integrations.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Time Attendance System / Essential Suite / Growth Pack",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Add multi-branch sync, mobile approvals, and payroll connectors to the Essential Suite foundation. Ideal for organizations expanding across regions.",
        features: [
          "Multi-branch synchronization",
          "Mobile self-service",
          "Payroll exports",
          "Geo-fencing for field teams",
        ],
        specs: {
          Users: "Up to 1,000 employees",
          MobileApp: "iOS / Android",
          Integrations: "SAP, Oracle, Tally",
          Support: "8x5 helpdesk",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/time-attendance-system/enterprise-suite/enterprise-core",
            name: "Enterprise Core",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
    },
    "enterprise-suite": {
      "enterprise-core": {
        hero: {
          title: "Enterprise Core — Attendance Suite",
          description: "High-availability attendance platform with LDAP and API connectivity.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Time Attendance System / Enterprise Suite / Enterprise Core",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Deploy redundant attendance servers with LDAP/AD sync and API gateway for seamless enterprise integrations.",
        features: [
          "Active-active servers",
          "LDAP / AD synchronization",
          "Policy engine for complex shifts",
          "REST API gateway",
        ],
        specs: {
          Uptime: "99.5%",
          Directory: "AD / Azure AD",
          APIs: "REST + Webhooks",
          Reporting: "Real-time dashboards",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/time-attendance-system/enterprise-suite/insights-pack",
            name: "Insights Pack",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
      "insights-pack": {
        hero: {
          title: "Insights Pack — Attendance Suite",
          description: "Advanced analytics with predictive absence modelling and dashboards.",
          bg: "/assets/istockphoto-1081869356-1024x1024.jpg",
          breadcrumb: "Home / Solutions / Time Attendance System / Enterprise Suite / Insights Pack",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/istockphoto-1081869356-1024x1024.jpg"],
        overview:
          "Enhance your core platform with predictive analytics, scheduled reporting, and custom dashboards powered by BI connectors.",
        features: [
          "Predictive absence modelling",
          "Power BI connectors",
          "Scheduled executive reports",
          "Custom KPI dashboards",
        ],
        specs: {
          BI: "Power BI / Tableau",
          Reports: "Automated PDF & CSV",
          Alerts: "Rule-based notifications",
          Storage: "Data lake integration",
        },
        downloads: [],
        related: [
          {
            href: "/softwares/time-attendance-system/enterprise-suite/enterprise-core",
            name: "Enterprise Core",
            image: "/assets/istockphoto-1081869356-1024x1024.jpg",
          },
        ],
      },
    },
  },
};
