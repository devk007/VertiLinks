// src/data/softwareOverviewData.js
import {
  Clock,
  IdCard,
  Utensils,
  KeyRound,
  Smartphone,
  Code,
  Server,
} from "lucide-react";

export const softwareOverviewItems = [
  {
    id: "time-attendance-software",
    title: "Time Attendance Software.",
    icon: Clock,
    href: "/softwares/time-attendance",
    blurb:
      "Automated attendance tracking with biometric integration, shift management, and payroll-ready reports.",
  },
  {
    id: "visitor-management-software",
    title: "Visitor Management Software.",
    icon: IdCard,
    href: "/softwares/visitor-management",
    blurb:
      "Streamlined check-in, ID issuance, and visitor tracking for enhanced workplace security.",
  },
  {
    id: "canteen-management-software",
    title: "Canteen Management Software.",
    icon: Utensils,
    href: "/softwares/canteen-management",
    blurb:
      "Cashless transactions, meal planning, and subsidy management for corporate cafeterias.",
  },
  {
    id: "access-control-software",
    title: "Access Control Software.",
    icon: KeyRound,
    href: "/softwares/access-control",
    blurb:
      "Centralized control of access points with real-time monitoring, alerts, and audit trails.",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development.",
    icon: Smartphone,
    href: "/softwares/mobile-app-development",
    blurb:
      "Custom mobile solutions for iOS and Android tailored to business workflows and customer engagement.",
  },
  {
    id: "custom-application-development",
    title: "Custom Application Development.",
    icon: Code,
    href: "/softwares/custom-application-development",
    blurb:
      "Bespoke applications designed to meet specific enterprise requirements with scalability in mind.",
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions.",
    icon: Server,
    href: "/softwares/erp-solutions",
    blurb:
      "Comprehensive ERP platforms to streamline operations, finance, HR, supply chain, and reporting.",
  },
];
