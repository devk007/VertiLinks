import images from '../images';
import {Laptop2} from 'lucide-react';

export default {
  slug: "laptops-and-desktop-computers",
  title: "Laptops & Desktop Computers",

  categoryPage: {
    hero: {
      title: "Business Laptops & Desktops",
      description:
        "From ultra-portable notebooks to powerful workstations and all-in-one desktops. Imaged, enrolled and delivered ready-to-work.",
      bg: images.products.hero,
      breadcrumb: "Home / Products / Laptops & Desktops",
      cta: { label: "Talk to Sales", to: "/contact" },
    },
    overview: {
      heading: "Choose the Right Form-Factor",
      icon:Laptop2,
      intro:
        "Standardize on secure, manageable devices with long battery life and warranty coverage suited for your teams.",
      bulletsLeft: [
        "13–16\" ultrabooks & 2-in-1s",
        "Pro GPUs for CAD/AI",
        "MIL-STD durability",
        "Wi-Fi 6/6E & LTE/5G",
      ],
      bulletsRight: [
        "Windows 11 Pro / macOS",
        "Autopilot/Intune/ABM enroll",
        "Onsite/Next-Business-Day",
        "Asset tags & imaging",
      ],
      keyBenefits: [
        { icon: "Shield", title: "Security", desc: "TPM, BitLocker & BIOS protections." },
        { icon: "BatteryFull", title: "Endurance", desc: "All-day battery with fast charge." },
        { icon: "Wrench", title: "Manageability", desc: "Autopilot/Intune & fleet tools." },
      ],
    },
    brands: [
      {
        slug: "dell",
        name: "Dell Latitude / Precision",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Latitude for business users and Precision for creators/engineers.",
        highlights: ["ExpressCharge", "ProSupport", "vPro options"],
        industries: ["Corporate", "Engineering", "Design"],
        preview: [{ name: "Latitude 5440", image: images.products.hero }],
        to: "/products/laptops-and-desktop-computers/dell",
      },
      {
        slug: "hp",
        name: "HP ProBook / ZBook",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Secure and durable devices with HP Wolf Security.",
        highlights: ["Wolf Security", "SureView privacy", "Z performance"],
        industries: ["SMB", "Enterprise"],
        preview: [{ name: "ZBook Fury 16", image: images.products.hero }],
        to: "/products/laptops-and-desktop-computers/hp",
      },
    ],
  },

  brandPages: {
    dell: {
      hero: {
        title: "Dell Latitude & Precision",
        description: "Reliable business laptops and mobile workstations.",
        bg: images.products.hero,
        breadcrumb: "Home / Products / Laptops & Desktops / Dell",
        cta: { label: "Explore Models", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Laptop", title: "Portable", desc: "Slim magnesium designs with great keyboards." },
        { icon: "Cpu", title: "Power", desc: "Intel® Core™ & RTX™ graphics options." },
        { icon: "Headset", title: "Support", desc: "ProSupport with NBD repair." },
      ],
      models: [
        {
          slug: "latitude-5440",
          name: "Latitude 5440",
          image: images.products.hero,
          brief: "14\" business laptop with strong battery life.",
          features: ["Intel® Core™", "vPro options", "LTE/5G"],
          to: "/products/laptops-and-desktop-computers/dell/latitude-5440",
        },
        {
          slug: "precision-3580",
          name: "Precision 3580",
          image: images.products.hero,
          brief: "Entry mobile workstation for creators/CAD.",
          features: ["NVIDIA® RTX™", "ISV certified", "Thunderbolt™"],
          to: "/products/laptops-and-desktop-computers/dell/precision-3580",
        },
      ],
    },

    hp: {
      hero: {
        title: "HP ProBook & ZBook",
        description: "Security-first business laptops and mobile workstations.",
        bg: images.products.hero,
        breadcrumb: "Home / Products / Laptops & Desktops / HP",
      },
      keyBenefits: [
        { icon: "ShieldCheck", title: "Wolf Security", desc: "Hardware-enforced protections." },
        { icon: "Battery", title: "Longevity", desc: "Long battery with fast charge." },
        { icon: "Monitor", title: "Displays", desc: "HP SureView privacy screens." },
      ],
      models: [
        {
          slug: "probook-450",
          name: "ProBook 450",
          image: images.products.hero,
          brief: "Value business laptop with modern ports.",
          features: ["Intel® Core™", "TPM 2.0", "Wi-Fi 6"],
          to: "/products/laptops-and-desktop-computers/hp/probook-450",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "zbook-fury-16",
          name: "ZBook Fury 16",
          image: images.products.hero,
          brief: "Performance workstation for simulation & rendering.",
          features: ["Intel® HX", "RTX™ Ada", "ISV certified"],
          to: "/products/laptops-and-desktop-computers/hp/zbook-fury-16",
        },
      ],
    },
  },

  modelPages: {
    dell: {
      "latitude-5440": {
        hero: {
          title: "Dell Latitude 5440",
          description: "14\" business laptop with vPro and long battery life.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Laptops & Desktops / Dell / Latitude 5440",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Built for hybrid work with premium keyboard, camera and battery.",
        features: ["Intel® Core™", "IR webcam", "LTE/5G eSIM"],
        specs: { Display: "14\" FHD/2.2K", Weight: "1.4–1.6 kg", OS: "Windows 11 Pro" },
        downloads: [{ label: "Datasheet", href: "/downloads/pc/latitude-5440.pdf" }],
        related: [{ href: "/products/laptops-and-desktop-computers/dell/precision-3580", name: "Precision 3580", image: images.products.hero }],
      },
      "precision-3580": {
        hero: {
          title: "Dell Precision 3580",
          description: "Entry mobile workstation with RTX graphics.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Laptops & Desktops / Dell / Precision 3580",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "ISV-certified performance for CAD, BIM and content creation.",
        features: ["RTX™", "ISV certifications", "Thunderbolt™"],
        specs: { Display: "15.6\"", GPU: "RTX A500/A1000", RAM: "Up to 64GB" },
        downloads: [{ label: "Datasheet", href: "/downloads/pc/precision-3580.pdf" }],
        related: [{ href: "/products/laptops-and-desktop-computers/hp/zbook-fury-16", name: "HP ZBook Fury 16", image: images.products.hero }],
      },
    },
    hp: {
      "probook-450": {
        hero: {
          title: "HP ProBook 450",
          description: "Cost-effective 15.6\" business notebook.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Laptops & Desktops / HP / ProBook 450",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview: "Balanced performance with strong security features.",
        features: ["Wolf Security", "TPM 2.0", "Wi-Fi 6"],
        specs: { CPU: "Intel® Core™", Storage: "SSD NVMe", OS: "Windows 11 Pro" },
        downloads: [{ label: "Datasheet", href: "/downloads/pc/probook-450.pdf" }],
        related: [{ href: "/products/laptops-and-desktop-computers/dell/latitude-5440", name: "Latitude 5440", image: images.products.hero }],
      },
      "zbook-fury-16": {
        hero: {
          title: "HP ZBook Fury 16",
          description: "No-compromise mobile workstation for heavy workloads.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Laptops & Desktops / HP / ZBook Fury 16",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Desktop-class performance with color-accurate displays.",
        features: ["Intel® HX", "RTX™ Ada", "ISV certified"],
        specs: { Display: "16\" 120Hz", GPU: "RTX Ada", Color: "100% DCI-P3" },
        downloads: [{ label: "Datasheet", href: "/downloads/pc/zbook-fury-16.pdf" }],
        related: [{ href: "/products/laptops-and-desktop-computers/dell/precision-3580", name: "Precision 3580", image: images.products.hero }],
      },
    },
  },

  seo: {
    title: "Business Laptops & Desktops | VertiLinks",
    description:
      "Dell, HP and more with imaging, enrollment and NBD support.",
    canonical: "/products/laptops-and-desktop-computers",
  },
};
