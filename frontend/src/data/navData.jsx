// src/data/navData.js
import {
  // common
  ChevronRight,
  // solutions
  Clock,
  KeyRound,
  Camera,
  MonitorPlay,
  Cable,
  Phone,
  Cloud,
  Shield,
  Search,
  Code,
  Wrench,
  // softwares
  IdCard,
  Utensils,
  Smartphone,
  // products
  Printer,
  Server,
  Laptop,
  Scan,
  Fingerprint,
  DoorOpen,
  DoorClosed,
  Tablet,

  Mail,
  Database,
  Monitor
} from "lucide-react";

const navData = {
  // Top-right / small items: sirf Contact ki demand thi
  utility: [
    { label: "Contact", to: "/contact" },
  ],

  // Main navbar items
  main: [
    /** -------------------- SOLUTIONS -------------------- **/
    {
      id: "solutions",
      label: "Solutions",
      panel: {
        title: "Solutions",
        intro:
          "End-to-end IT & security solutions for modern businesses: from time attendance and access control to cloud, network security, and managed support.",
        cta: { label: "Explore more", to: "/solutions" },
        links: [
          { label: "Time Attendance System", to: "/solutions/time-attendance", icon: Clock },
          { label: "Access Control System", to: "/solutions/access-control", icon: KeyRound },
          { label: "CCTV Security & Surveillance", to: "/solutions/cctv-surveillance", icon: Camera },
          { label: "Audio Video Solutions", to: "/solutions/audio-video", icon: MonitorPlay },
          { label: "Structured Cabling Solution", to: "/solutions/structured-cabling", icon: Cable },
          { label: "PABX Solution", to: "/solutions/pabx", icon: Phone },
          { label: "Cloud Solutions", to: "/solutions/cloud", icon: Cloud },
          { label: "Firewall & Gateway System", to: "/solutions/firewall-gateway", icon: Shield },
          { label: "SEO Services", to: "/solutions/seo", icon: Search },
          { label: "Website Development Services", to: "/solutions/website-development", icon: Code },
          { label: "Digital Marketing Solution", to: "/solutions/digital-marketing", icon: MonitorPlay },
          { label: "Microsoft Services", to: "/solutions/microsoft-services", icon: Wrench },
          { label: "IT Support & AMC", to: "/solutions/it-support-amc", icon: Wrench },
        ],
      },
    },

    /** -------------------- SOFTWARES -------------------- **/
    {
      id: "softwares",
      label: "Softwares",
      panel: {
        title: "Softwares",
        intro:
          "Business-ready software stack: attendance, visitor & canteen management, access control, and full-cycle custom & ERP development.",
        cta: { label: "Explore more", to: "/softwares" },
        links: [
          { label: "Time Attendance Software", to: "/softwares/time-attendance", icon: Clock },
          { label: "Visitor Management Software", to: "/softwares/visitor-management", icon: IdCard },
          { label: "Canteen Management Software", to: "/softwares/canteen-management", icon: Utensils },
          { label: "Access Control Software", to: "/softwares/access-control", icon: KeyRound },
          { label: "Mobile App Development", to: "/softwares/mobile-app-development", icon: Smartphone },
          { label: "Custom Application Development", to: "/softwares/custom-application", icon: Code },
          { label: "ERP Solutions", to: "/softwares/erp-solutions", icon: Code },
        ],
      },
    },

    /** -------------------- PRODUCTS -------------------- **/
    {
      id: "products",
      label: "Products",
      panel: {
        title: "Products",
        intro:
          "Carefully curated hardware portfolio covering compute, print/scan, surveillance, and identity—ready for enterprise deployment.",
        cta: { label: "Explore more", to: "/products" },
        links: [
          { label: "ID Card Printers", to: "/products/id-card-printers", icon: Printer },
          { label: "Server & Storages", to: "/products/servers-storages", icon: Server },
          { label: "Laptops & Desktop Computers", to: "/products/laptops-desktops", icon: Laptop },
          { label: "Printers & Scanners", to: "/products/printers-scanners", icon: Scan },
          { label: "CCTV & IP Cameras", to: "/products/cctv-ip-cameras", icon: Camera },
          { label: "Face & Biometric Terminals", to: "/products/face-biometric-terminals", icon: Fingerprint },
          { label: "Turnstile & Speed Gates", to: "/products/turnstile-speed-gates", icon: DoorOpen },
          { label: "Gate Barriers", to: "/products/gate-barriers", icon: DoorClosed },
          { label: "Designer Tablets & Displays", to: "/products/designer-tablets-displays", icon: Tablet },
        ],
      },
    },

    /** -------------------- BRANDS -------------------- **/
    {
      id: "brands",
      label: "Brands",
      panel: {
        title: "Our Brands",
        intro:
          "We partner with leading global OEMs to deliver robust, scalable, and secure solutions.",
        links: [
          { label: "ASUS", to: "/brands/asus", icon: ChevronRight },
          { label: "DELL", to: "/brands/dell", icon: ChevronRight },
          { label: "HP", to: "/brands/hp", icon: ChevronRight },
          { label: "Lenova", to: "/brands/lenova", icon: ChevronRight },
          { label: "HIKVision", to: "/brands/hikvision", icon: ChevronRight },
          { label: "Duhua", to: "/brands/dahua", icon: ChevronRight },
          { label: "Fortinet", to: "/brands/fortinet", icon: ChevronRight },
          { label: "Cisco", to: "/brands/cisco", icon: ChevronRight },
          { label: "Sonicwall", to: "/brands/sonicwall", icon: ChevronRight },
          { label: "Huawei", to: "/brands/huawei", icon: ChevronRight },
          { label: "Samsung", to: "/brands/samsung", icon: ChevronRight },
          { label: "Logitech", to: "/brands/logitech", icon: ChevronRight },
          { label: "CAME", to: "/brands/came", icon: ChevronRight },
        ],
      },
    },

    /** -------------------- CONTACT (simple link, no panel) -------------------- **/
    { id: "support",
      label: "Support",
      panel: { 
        title: "Support",
        intro: "You can download and use the fingerprint scanner driver and SDK for developing your application.",
        links: [
          { label: "Email:- services@vertilinks.com", to: "mailto:services@vertilinks.com", icon: Mail }, 
          { label: "Phone:- 0505810499", to: "tel:0505810499", icon: Phone }, 
          { label: "Warranty & RMA Process", to: "/support/warranty-rma", icon: Database }, 
          { label: "Support Ticket", to: "/support/ticket", icon: KeyRound }, 
          { label: "Download Technical Resources", to: "/support/resources", icon: Monitor },
        ], 
      }, 
    },
  ],
};

export default navData;
