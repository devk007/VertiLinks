// src/data/productsOverviewData.js
import {
  IdCard,
  HardDrive,
  Laptop2,
  Printer,
  Camera,
  ScanFace,
  DoorOpen,
  Shield,
  MonitorSmartphone,
} from "lucide-react";

export const productsOverviewItems = [
  {
    id: "id-card-printers",
    title: "ID Card Printers.",
    icon: IdCard,
    href: "/products/id-card-printers",
    blurb:
      "High-quality card issuance for badges, visitor passes and smart cards with lamination, UV and anti-tamper options.",
  },
  {
    id: "server-and-storages",
    title: "Server and Storages.",
    icon: HardDrive,
    href: "/products/server-and-storages",
    blurb:
      "Rack, tower and edge servers with SAN/NAS storage, RAID, and backup—built for reliability and easy scaling.",
  },
  {
    id: "laptops-and-desktops",
    title: "Laptops and Desktop Computers.",
    icon: Laptop2,
    href: "/products/laptops-and-desktops",
    blurb:
      "Business-class notebooks and desktops for daily productivity, graphics workloads and secure remote work.",
  },
  {
    id: "printers-and-scanners",
    title: "Printers and Scanners.",
    icon: Printer,
    href: "/products/printers-and-scanners",
    blurb:
      "Laser/inkjet MFPs and high-speed scanners with duplex, ADF and cost controls for busy offices.",
  },
  {
    id: "cctv-ip-cameras",
    title: "CCTV & IP Cameras.",
    icon: Camera,
    href: "/products/cctv-ip-cameras",
    blurb:
      "Fixed, dome and PTZ cameras with night vision, WDR and analytics—plus NVRs for centralized recording.",
  },
  {
    id: "face-biometric-terminals",
    title: "Face & Biometric Terminals.",
    icon: ScanFace,
    href: "/products/face-biometric-terminals",
    blurb:
      "Touchless face, fingerprint and iris terminals for access control and time-attendance with anti-spoofing.",
  },
  {
    id: "turnstile-speed-gates",
    title: "Turnstile and Speed Gates.",
    icon: DoorOpen,
    href: "/products/turnstile-speed-gates",
    blurb:
      "Tripod, flap and swing speed gates—integrated with readers/controllers for secure, fast throughput.",
  },
  {
    id: "gate-barriers",
    title: "Gate Barriers.",
    icon: Shield,
    href: "/products/gate-barriers",
    blurb:
      "Heavy-duty boom barriers with loop detectors, ANPR triggers and safety sensors for parking & perimeters.",
  },
  {
    id: "designer-tablets-displays",
    title: "Designer Tablets and Displays.",
    icon: MonitorSmartphone,
    href: "/products/designer-tablets-displays",
    blurb:
      "Professional tablets & signage displays for kiosks, dashboards and meeting rooms with long-life panels.",
  },
];
