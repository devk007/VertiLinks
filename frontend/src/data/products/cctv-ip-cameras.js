import {Camera} from 'lucide-react';

export default {
  slug: "cctv-ip-cameras",
  title: "CCTV & IP Cameras",

  categoryPage: {
    hero: {
      title: "CCTV & IP Video",
      description:
        "Fixed, varifocal and PTZ cameras with NVR/VMS, analytics and remote access.",
      bg: "/assets/heroes/hero-cctv.jpg",
      breadcrumb: "Home / Products / CCTV & IP Cameras",
      cta: { label: "Plan a Site Survey", to: "/contact" },
    },
    overview: {
      heading: "Reliable Video Security",
      icon:Camera,
      intro:
        "From small offices to multi-site deployments with smart analytics and retention policies.",
      bulletsLeft: ["2–8 MP resolutions", "IR & low-light", "WDR & H.265+", "Outdoor IP67"],
      bulletsRight: ["NVR/VMS options", "ANPR/People counting", "Mobile apps", "Onsite install"],
      keyBenefits: [
        { icon: "Camera", title: "Clarity", desc: "High resolution & WDR." },
        { icon: "Eye", title: "Awareness", desc: "Analytics & alerts." },
        { icon: "HardDrive", title: "Retention", desc: "Sized storage and backups." },
      ],
    },
    brands: [
      {
        slug: "hikvision",
        name: "Hikvision",
        logo: "/assets/brands/hikvision.svg",
        banner: "/assets/banners/hikvision.jpg",
        blurb: "Value-packed cameras with ColorVu/Acusense analytics.",
        highlights: ["ColorVu", "AcuSense", "PoE NVRs"],
        industries: ["Retail", "SMB", "Residential"],
        preview: [{ name: "ColorVu Dome", image: "/assets/products/cctv/hik-colorvu.jpg" }],
        to: "/products/cctv-ip-cameras/hikvision",
      },
      {
        slug: "axis",
        name: "Axis Communications",
        logo: "/assets/brands/axis.svg",
        banner: "/assets/banners/axis.jpg",
        blurb: "Premium IP cameras with superior image quality and reliability.",
        highlights: ["Lightfinder", "Zipstream", "ONVIF"],
        industries: ["Enterprise", "Critical", "Airports"],
        preview: [{ name: "P32 Dome", image: "/assets/products/cctv/axis-p32.jpg" }],
        to: "/products/cctv-ip-cameras/axis",
      },
    ],
  },

  brandPages: {
    hikvision: {
      hero: {
        title: "Hikvision IP Cameras",
        description: "ColorVu for vivid color at night and AcuSense to reduce false alarms.",
        bg: "/assets/banners/hikvision.jpg",
        breadcrumb: "Home / Products / CCTV & IP Cameras / Hikvision",
      },
      keyBenefits: [
        { icon: "SunMoon", title: "Low-light Color", desc: "ColorVu lenses & LEDs." },
        { icon: "Bell", title: "Smart Alerts", desc: "AcuSense human/vehicle filter." },
        { icon: "Server", title: "Simple NVRs", desc: "Plug-and-play PoE." },
      ],
      models: [
        {
          slug: "colorvu-dome-4mp",
          name: "ColorVu Dome 4MP",
          image: "/assets/products/cctv/hik-colorvu.jpg",
          brief: "4MP fixed lens with vivid night color.",
          features: ["F1.0 aperture", "Built-in white light", "H.265+"],
          to: "/products/cctv-ip-cameras/hikvision/colorvu-dome-4mp",
        },
      ],
    },

    axis: {
      hero: {
        title: "Axis IP Cameras",
        description: "Reliable performance with Lightfinder and Zipstream.",
        bg: "/assets/banners/axis.jpg",
        breadcrumb: "Home / Products / CCTV & IP Cameras / Axis",
      },
      keyBenefits: [
        { icon: "Gauge", title: "Quality", desc: "Consistent image & color." },
        { icon: "PlugZap", title: "Open", desc: "ONVIF & VAPIX ecosystem." },
        { icon: "LifeBuoy", title: "Reliability", desc: "MTBF and long lifecycle." },
      ],
      models: [
        {
          slug: "p3265-lv",
          name: "Axis P3265-LV",
          image: "/assets/products/cctv/axis-p32.jpg",
          brief: "5MP dome with Lightfinder 2.0.",
          features: ["Lightfinder", "Zipstream", "WDR Forensic"],
          to: "/products/cctv-ip-cameras/axis/p3265-lv",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  modelPages: {
    hikvision: {
      "colorvu-dome-4mp": {
        hero: {
          title: "Hikvision ColorVu Dome 4MP",
          description: "Color at night with smart alerts.",
          bg: "/assets/products/cctv/hik-colorvu-hero.jpg",
          breadcrumb:
            "Home / Products / CCTV & IP Cameras / Hikvision / ColorVu Dome 4MP",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/cctv/hik-colorvu.jpg"],
        overview:
          "Delivers bright color images 24/7, ideal for entrances and yards.",
        features: ["F1.0 lens", "White light LEDs", "AcuSense filtering"],
        specs: { Resolution: "4MP", Lens: "2.8mm", Rating: "IP67" },
        downloads: [{ label: "Datasheet", href: "/downloads/cctv/hik-colorvu-4mp.pdf" }],
        related: [{ href: "/products/cctv-ip-cameras/axis/p3265-lv", name: "Axis P3265-LV", image: "/assets/products/cctv/axis-p32.jpg" }],
      },
    },
    axis: {
      "p3265-lv": {
        hero: {
          title: "Axis P3265-LV",
          description: "5MP dome with Lightfinder 2.0 and Zipstream.",
          bg: "/assets/products/cctv/axis-p32-hero.jpg",
          breadcrumb:
            "Home / Products / CCTV & IP Cameras / Axis / P3265-LV",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: ["/assets/products/cctv/axis-p32.jpg"],
        overview: "Excellent image in challenging light with efficient bitrate.",
        features: ["Lightfinder 2.0", "Zipstream", "PoE"],
        specs: { Resolution: "5MP", WDR: "Forensic WDR", Temp: "-30 to 55°C" },
        downloads: [{ label: "Datasheet", href: "/downloads/cctv/axis-p3265.pdf" }],
        related: [{ href: "/products/cctv-ip-cameras/hikvision/colorvu-dome-4mp", name: "Hikvision ColorVu 4MP", image: "/assets/products/cctv/hik-colorvu.jpg" }],
      },
    },
  },

  seo: {
    title: "CCTV & IP Cameras | VertiLinks",
    description: "Hikvision and Axis with analytics, storage and VMS.",
    canonical: "/products/cctv-ip-cameras",
  },
};
