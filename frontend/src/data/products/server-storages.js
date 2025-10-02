// src/data/products/server-and-storages.js
// NOTE: forms are NOT embedded in data
import images from '../images';
import {HardDrive} from 'lucide-react';

export default {
  // ------------------------------------------------------------------
  slug: "server-and-storages",
  title: "Servers & Storages",

  // ================== /products/server-and-storages ==================
  categoryPage: {
    hero: {
      title: "Enterprise Servers & Storage",
      description:
        "From rack servers to all-flash arrays and NAS. We size compute, memory, disks and protection to hit your TCO and SLA targets.",
      bg: images.products.hero,
      breadcrumb: "Home / Products / Servers & Storage",
      cta: { label: "Get In Touch", to: "/contact" },
    },

    overview: {
      heading: "Right-sized Infrastructure",
      icon:HardDrive,
      intro:
        "Design for today, scale for tomorrow. Choose virtualization-ready servers and storage with snapshots, replication and secure management.",
      bulletsLeft: [
        "1U/2U rack, tower & blades",
        "Intel®/AMD® options, NVMe/SAS",
        "vPro/ILO/iDRAC remote mgmt",
        "VMware/Hyper-V/KVM ready",
      ],
      bulletsRight: [
        "NAS/SAN/Unified storage",
        "Snapshots, replication, WORM",
        "10/25/40GbE & FC options",
        "Onsite install & AMC",
      ],
      keyBenefits: [
        { icon: "Cpu", title: "Performance", desc: "Modern CPUs, DDR5 & NVMe deliver consistent throughput." },
        { icon: "ShieldCheck", title: "Resilience", desc: "Redundant PSUs, RAID & multi-site DR." },
        { icon: "ServerCog", title: "Manageable", desc: "Out-of-band health, updates & audit." },
      ],
    },

    brands: [
      {
        slug: "dell-emc",
        name: "Dell PowerEdge / PowerStore",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "PowerEdge servers with iDRAC and PowerStore for all-flash storage.",
        highlights: ["iDRAC9", "NVMe support", "Scale-out"],
        industries: ["Enterprise", "SaaS", "Healthcare"],
        preview: [{ name: "R650", image: images.products.hero }],
        to: "/products/server-and-storages/dell-emc",
      },
      {
        slug: "hpe",
        name: "HPE ProLiant / Alletra",
        logo: images.products.heroe,
        banner: images.products.hero,
        blurb: "ProLiant with iLO security and Alletra storage for mission-critical workloads.",
        highlights: ["Silicon Root of Trust", "iLO", "All-flash/Hybrid"],
        industries: ["Govt", "Finance", "Manufacturing"],
        preview: [{ name: "DL380 Gen11", image: images.products.hero }],
        to: "/products/server-and-storages/hpe",
      },
      {
        slug: "synology",
        name: "Synology NAS",
        logo: images.products.hero,
        banner: images.products.hero,
        blurb: "Simple, reliable NAS with snapshots, Active Backup and Surveillance Station.",
        highlights: ["BTRFS snapshots", "Hybrid RAID", "Apps & backup"],
        industries: ["SMB", "Education", "Studios"],
        preview: [{ name: "RS3621xs+", image: images.products.hero }],
        to: "/products/server-and-storages/synology",
      },
    ],
  },

  // ================= /products/server-and-storages/:brand ==============
  brandPages: {
    "dell-emc": {
      hero: {
        title: "Dell EMC Servers & Storage",
        description: "PowerEdge compute and PowerStore all-flash arrays.",
        bg: images.products.hero,
        breadcrumb: "Home / Products / Servers & Storage / Dell EMC",
        cta: { label: "Explore Models", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Gauge", title: "Throughput", desc: "PCIe Gen4, NVMe & high core counts." },
        { icon: "Lock", title: "Secure", desc: "Secure Boot, TPM 2.0 and signed updates." },
        { icon: "Server", title: "Lifecycle", desc: "iDRAC9 & OpenManage automation." },
      ],
      models: [
        {
          slug: "poweredge-r650",
          name: "PowerEdge R650",
          image: images.products.hero,
          brief: "1U performance server for dense virtualization.",
          features: ["Intel® Xeon®", "Up to 10 NVMe", "iDRAC9"],
          to: "/products/server-and-storages/dell-emc/poweredge-r650",
        },
        {
          slug: "powerstore-500",
          name: "PowerStore 500T",
          image: images.products.hero,
          brief: "All-flash NVMe storage with always-on data reduction.",
          features: ["NVMe", "Thin & dedupe", "Scale-out"],
          to: "/products/server-and-storages/dell-emc/powerstore-500",
        },
      ],
    },

    hpe: {
      hero: {
        title: "HPE ProLiant & Alletra",
        description: "Secure compute with iLO and fast all-flash storage.",
        bg: images.products.hero,
        breadcrumb: "Home / Products / Servers & Storage / HPE",
      },
      keyBenefits: [
        { icon: "Shield", title: "Root of Trust", desc: "Firmware attestation & rollback." },
        { icon: "Activity", title: "Efficiency", desc: "Smart Array & power tuning." },
        { icon: "Network", title: "Fabric", desc: "25/100GbE & FC options." },
      ],
      models: [
        {
          slug: "proliant-dl380",
          name: "ProLiant DL380 Gen11",
          image: images.products.hero,
          brief: "Balanced 2U server for mainstream workloads.",
          features: ["Intel®/AMD®", "NVMe/SAS", "iLO 6"],
          to: "/products/server-and-storages/hpe/proliant-dl380",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },

    synology: {
      hero: {
        title: "Synology NAS",
        description: "Simple storage with snapshots, backup and apps.",
        bg: images.products.hero,
        breadcrumb: "Home / Products / Servers & Storage / Synology",
      },
      keyBenefits: [
        { icon: "HardDrive", title: "BTRFS", desc: "Checksums & instant snapshots." },
        { icon: "Cloud", title: "Backup", desc: "Active Backup for Microsoft 365/VMs." },
        { icon: "Camera", title: "Surveillance", desc: "Integrated NVR features." },
      ],
      models: [
        {
          slug: "rs3621xs-plus",
          name: "RS3621xs+",
          image: images.products.hero,
          brief: "High-performance 12-bay rack NAS.",
          features: ["Xeon D", "10GbE", "BTRFS"],
          to: "/products/server-and-storages/synology/rs3621xs-plus",
          cta: { label: "Get In Touch", to: "/contact" },
        },
      ],
    },
  },

  // ========= /products/server-and-storages/:brand/:slug (MODEL) =========
  modelPages: {
    "dell-emc": {
      "poweredge-r650": {
        hero: {
          title: "Dell PowerEdge R650",
          description: "1U performance server for dense virtualization.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / PowerEdge R650",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "High-core Xeon CPUs with NVMe deliver excellent VM density and throughput.",
        features: ["Dual Xeon®", "Up to 3TB RAM", "10x NVMe bays", "iDRAC9"],
        specs: { FormFactor: "1U rack", DriveBays: "Up to 10 NVMe", PSU: "Dual hot-swap" },
        downloads: [{ label: "Spec Sheet", href: "/downloads/servers/dell-r650.pdf" }],
        related: [
          { href: "/products/server-and-storages/hpe/proliant-dl380", name: "HPE DL380 Gen11", image: images.products.hero },
        ],
      },
      "powerstore-500": {
        hero: {
          title: "PowerStore 500T",
          description: "Entry all-flash array with always-on data reduction.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / PowerStore 500T",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "NVMe performance with thin provisioning, dedupe and compression.",
        features: ["NVMe", "Scale-out", "Snapshots/Replication"],
        specs: { DriveType: "NVMe SSD", Protocols: "iSCSI/FC/NFS/SMB" },
        downloads: [{ label: "Datasheet", href: "/downloads/storage/powerstore-500.pdf" }],
        related: [{ href: "/products/server-and-storages/synology/rs3621xs-plus", name: "Synology RS3621xs+", image: images.products.hero }],
      },
    },
    hpe: {
      "proliant-dl380": {
        hero: {
          title: "HPE ProLiant DL380 Gen11",
          description: "Balanced 2U server for core workloads.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Servers & Storage / HPE / ProLiant DL380 Gen11",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "A proven platform for virtualization, databases and file services.",
        features: ["Intel®/AMD®", "RAID & boot mirroring", "iLO 6"],
        specs: { FormFactor: "2U rack", DriveBays: "Up to 20 SFF", PSU: "Redundant" },
        downloads: [{ label: "Spec Sheet", href: "/downloads/servers/hpe-dl380.pdf" }],
        related: [{ href: "/products/server-and-storages/dell-emc/poweredge-r650", name: "Dell R650", image: images.products.hero }],
      },
    },
    synology: {
      "rs3621xs-plus": {
        hero: {
          title: "Synology RS3621xs+",
          description: "High-performance 12-bay rack NAS.",
          bg: images.products.hero,
          breadcrumb:
            "Home / Products / Servers & Storage / Synology / RS3621xs+",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.products.hero],
        overview:
          "Ideal for backups, file sharing and virtualization storage with BTRFS.",
        features: ["Xeon D", "ECC RAM", "10GbE ready", "BTRFS snapshots"],
        specs: { Bays: "12 x 3.5/2.5", CPU: "Xeon D", RAM: "8GB+ ECC" },
        downloads: [{ label: "Datasheet", href: "/downloads/storage/synology-rs3621.pdf" }],
        related: [{ href: "/products/server-and-storages/dell-emc/powerstore-500", name: "PowerStore 500T", image: images.products.hero }],
      },
    },
  },

  seo: {
    title: "Enterprise Servers & Storage | VertiLinks",
    description:
      "Dell EMC, HPE and Synology solutions with design, implementation and AMC.",
    canonical: "/products/server-and-storages",
  },
};
