import {
  Briefcase,
  Shield,
  Radio,
  ScanFace,
  Fingerprint,
  IdCard,
  Building2,
  Plane,
  Cpu,
  Cloud,
  Lock,
  Microscope,
  Users,
  Phone,
  Mail,
  Database,
  Monitor,
  KeyRound,
  ChevronRight,
} from "lucide-react";

const navData = {
  utility: [
    { label: "About Us", to: "/about-us" },
    { label: "R&D Lab", to: "/rnd-lab" },
    { label: "OEM Modules", to: "/oem-modules" },
    { label: "Media", to: "/media" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ],

  main: [
    {
      id: "solutions",
      label: "Solutions",
      panel: {
        title: "Solutions",
        intro:
          "We pay careful attention to your needs at every point of interaction as we are passionate about delivering security solutions on time. We have a very prompt customer service team which always tries to resolve all the call requests on the same day. Mantra has the technology, people and infrastructure to deliver exceptional security and surveillance solutions to your business.",
        cta: { label: "Explore more", to: "/solutions" },
        links: [
          { label: "Business Security Systems", to: "/solutions/business", icon: Briefcase },
          { label: "Enterprise Security Solutions", to: "/solutions/enterprise", icon: Shield },
          { label: "RFID Security Solution", to: "/solutions/rfid", icon: Radio },
          { label: "Face Recognition Attendance", to: "/solutions/face-attendance", icon: ScanFace },
          { label: "Access Control System", to: "/solutions/access-control", icon: Fingerprint },
          { label: "Biometrics Attendance", to: "/solutions/attendance", icon: Fingerprint },
          { label: "Citizen Identification", to: "/solutions/citizen-id", icon: IdCard },
          { label: "Biometric Technologies", to: "/solutions/biometric-tech", icon: Fingerprint },
          { label: "Smart City Solution", to: "/solutions/smart-city", icon: Building2 },
          { label: "Airport Solution", to: "/solutions/airport", icon: Plane },
        ],
      },
    },

    {
      id: "software",
      label: "Software",
      panel: {
        title: "Software",
        intro:
          "We pay careful attention to your needs at every point of interaction as we are passionate about delivering security solutions on time. We have a very prompt customer service team which always tries to resolve all the call requests on the same day. Mantra has the technology, people and infrastructure to deliver exceptional security and surveillance solutions to your business.",
        cta: { label: "Explore more", to: "/software" },
        links: [
          { label: "Business Security Systems", to: "/software/business", icon: Briefcase },
          { label: "Enterprise Security Solutions", to: "/software/enterprise", icon: Shield },
          { label: "RFID Security Solution", to: "/software/rfid", icon: Radio },
          { label: "Face Recognition Attendance", to: "/software/face-attendance", icon: ScanFace },
          { label: "Access Control System", to: "/software/access-control", icon: Fingerprint },
          { label: "Biometrics Attendance", to: "/software/attendance", icon: Fingerprint },
          { label: "Citizen Identification", to: "/software/citizen-id", icon: IdCard },
          { label: "Biometric Technologies", to: "/software/biometric-tech", icon: Fingerprint },
          { label: "Smart City Solution", to: "/software/smart-city", icon: Building2 },
          { label: "Airport Solution", to: "/software/airport", icon: Plane },
        ],
      },
    },

    {
      id: "products",
      label: "Products",
      panel: {
        title: "Products",
        intro:
          "Mantra offers a cutting edge range of industrial and commercial security products that will help to safeguard your business and facilities. Most of the times the companies get confused in deciding whether to invest in a branded or local security system, but we are here to help you in making things easier.",
        cta: { label: "Explore more", to: "/oem-products" },
        links: [
          { label: "Aadhaar Biometric Attendance System", to: "/oem/attendance", icon: Fingerprint },
          { label: "Biometric Enrollment Devices", to: "/oem/enrollment", icon: ScanFace },
          { label: "POS MicroATM Financial Terminal", to: "/oem/pos-microatm", icon: Cpu },
          { label: "Integrated Biometric Devices", to: "/oem/integrated-biometric", icon: Database },
          { label: "Fingerprint Sensors", to: "/oem/fingerprint-sensors", icon: Fingerprint },
          { label: "Biometric Tablet", to: "/oem/biometric-tablet", icon: Monitor },
          { label: "Aadhaar Products", to: "/oem/aadhaar-products", icon: Fingerprint },
          { label: "IRIS Sensor", to: "/oem/iris-sensor", icon: ScanFace },
          { label: "Face Recognition Device", to: "/oem/face-device", icon: ScanFace },
          { label: "Access Control", to: "/oem/access-control", icon: KeyRound },
        ],
      },
    },

    {
      id: "technologies",
      label: "Technologies",
      panel: {
        title: "Technologies",
        intro:
          "Our cutting-edge technologies encompass biometric solutions, AI, machine learning, computer vision, IoT, and advanced encryption. These innovations empower businesses to enhance security, automate processes, and gain actionable insights, driving efficiency and growth in various industries.",
        cta: { label: "Explore more", to: "/technologies" },
        links: [
          { label: "Computer Vision", to: "/tech/computer-vision", icon: Monitor },
          { label: "Behavioral Biometrics", to: "/tech/behavioral-biometrics", icon: Fingerprint },
          { label: "AI & ML", to: "/tech/ai-ml", icon: Cpu },
          { label: "Internet of Things", to: "/tech/iot", icon: Cloud },
          { label: "Encryption", to: "/tech/encryption", icon: Lock },
        ],
      },
    },

    {
      id: "brands",
      label: "Our Brands",
      panel: {
        title: "Our Brands",
        intro:
          "We create brands and product platforms for our customers to make things more possible. Take a look at our brand and product portfolio.",
        links: [
          { label: "Servico", to: "/brands/servico", icon: ChevronRight, desc: "Biometric Fingerprint Attendance Machine Maintenance" },
          { label: "myrfid", to: "/brands/myrfid", icon: ChevronRight, desc: "Solution for Inventory management, Asset tracking." },
          { label: "moreze", to: "/brands/moreze", icon: ChevronRight, desc: "Leading kiosk manufacturer known for bespoke kiosks." },
          { label: "MINOP", to: "/brands/minop", icon: ChevronRight, desc: "Cloud-based time-attendance system." },
          { label: "MXFACE", to: "/brands/mxface", icon: ChevronRight, desc: "API platform that powers face recognition." },
          { label: "Mikshi", to: "/brands/mikshi", icon: ChevronRight, desc: "A cutting-edge Video Analytics software designed." },
        ],
      },
    },

    {
      id: "partners",
      label: "Partners",
      panel: {
        title: "Partners",
        intro:
          "Our cutting-edge technologies encompass biometric solutions, AI, machine learning, computer vision, IoT, and advanced encryption. These innovations empower businesses to enhance security, automate processes, and gain actionable insights, driving efficiency and growth in various industries.",
        cta: { label: "Explore more", to: "/partners" },
        links: [
          { label: "Solution Partner", to: "/partners/solution", icon: Microscope },
          { label: "Distribution Partner", to: "/partners/distribution", icon: Cloud },
          { label: "Technology Partner", to: "/partners/technology", icon: Cpu },
          { label: "Consulting Partner", to: "/partners/consulting", icon: Users },
        ],
      },
    },

    {
      id: "support",
      label: "Support",
      panel: {
        title: "Support",
        intro:
          "You can download and use the fingerprint scanner driver and SDK for developing your application.",
        links: [
          { label: "Email:- servico@mantratec.com", to: "mailto:servico@mantratec.com", icon: Mail },
          { label: "Phone:- 079-49068000", to: "tel:07949068000", icon: Phone },
          { label: "Warranty & RMA Process", to: "/support/warranty-rma", icon: Database },
          { label: "Support Ticket", to: "/support/ticket", icon: KeyRound },
          { label: "Download Technical Resources", to: "/support/resources", icon: Monitor },
        ],
      },
    },
  ],
};

export default navData;
