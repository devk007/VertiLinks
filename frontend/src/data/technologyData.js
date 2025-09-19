import cctvImg from '../assets/nick-loggie-fRVPzBYcd5A-unsplash.jpg'
import FWImg from '../assets/compare-fibre-tiSE_paTt0A-unsplash.jpg'
import ASImg from '../assets/premium_photo-1680807988328-7ba28ad24d9f.avif'
import ACSImg from '../assets/premium_photo-1729091229423-96b85c74a815.avif'

const technologyData = [
  {
    image:cctvImg, 
    title: "CCTV Security and Surveillance",
    description:
      "Advanced CCTV and IP surveillance solutions designed to protect businesses and public spaces. From HD cameras to centralized video management, VertiLinks ensures real-time monitoring, recording, and analytics for proactive security.",
    topTags: ["Corporate Offices", "Retail Stores", "Warehouses", "Banks", "Public Infrastructure"],
    bottomTags: ["HD/4K Cameras", "Remote Monitoring", "Video Analytics", "Night Vision", "ANPR Integration"],
  },
  {
    image: FWImg, 
    title: "Firewall and Gateway System",
    description:
      "Robust firewall and gateway systems that safeguard networks against cyber threats. VertiLinks delivers next-generation firewall solutions with VPN, IPS/IDS, and content filtering to protect enterprise data and ensure secure connectivity.",
    topTags: ["Financial Institutions", "Enterprises", "Healthcare", "Government", "Education"],
    bottomTags: ["Next-Gen Firewall", "VPN Security", "Intrusion Detection", "Content Filtering", "Zero Trust"],
  },
  {
    image: ASImg,
    title: "Time Attendance and Access Control System",
    description:
      "Integrated biometric and RFID-based systems for accurate time tracking and secure workplace access. VertiLinks solutions simplify workforce management, reduce fraud, and ensure compliance with HR and security policies.",
    topTags: ["Corporate Offices", "Factories", "Educational Institutions", "Hospitals", "Construction Sites"],
    bottomTags: ["Biometric Attendance", "Shift Management", "Payroll Integration", "RFID/Smart Cards", "Mobile Access"],
  },
  {
    image: ACSImg, 
    title: "Access Control System",
    description:
      "Comprehensive access control solutions to regulate entry at doors, turnstiles, and restricted areas. VertiLinks delivers scalable systems integrated with biometrics, smart cards, and mobile credentials for enhanced security.",
    topTags: ["Airports", "IT Parks", "Government Buildings", "Residential Complexes", "Data Centers"],
    bottomTags: ["Biometric Access", "Smart Card Readers", "Turnstiles & Gates", "Multi-level Authentication", "Audit Trails"],
  },
];

export default technologyData;
