// src/data/products/server-and-storages.js
// NOTE: forms are NOT embedded in data
import images from '../images';
import {HardDrive} from 'lucide-react';

const serverImages = images.products.serverStorages;
const dellImages = serverImages?.dellEmc || {};
const hpeImages = serverImages?.hpe || {};
const fallbackProductImage = images.products.hero;
const getDellImage = (key) => dellImages[key] || serverImages?.hero || fallbackProductImage;
const getHpeImage = (key) => hpeImages[key] || serverImages?.hero || fallbackProductImage;

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
      bg: serverImages?.hero || fallbackProductImage,
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
        name: "Dell / Dell EMC",
        logo: getDellImage('logo'),
        banner: getDellImage('logo'),
        blurb: "Rack, blade, and tower servers; SAN/NAS storage; enterprise-class storage arrays.",
        highlights: ["PowerEdge rack/blade/tower", "PowerStore SAN/NAS", "Enterprise arrays"],
        industries: ["Enterprise", "SaaS", "Healthcare"],
        preview: [
          { name: "Rack Servers", image: getDellImage('rackServers') },
          { name: "Blade Servers", image: getDellImage('bladeServers') },
          { name: "Storage Arrays", image: getDellImage('enterpriseArrays') },
        ],
        to: "/products/server-and-storages/dell-emc",
      },
      {
        slug: "hpe",
        name: "HP / HPE",
        logo: getHpeImage('logo'),
        banner: getHpeImage('logo'),
        blurb: "ProLiant servers (DL, ML, etc.), enterprise storage, hybrid systems.",
        highlights: ["ProLiant DL/ML", "Alletra enterprise storage", "Hybrid cloud systems"],
        industries: ["Govt", "Finance", "Manufacturing"],
        preview: [
          { name: "ProLiant DL", image: getHpeImage('rackServers') },
          { name: "ProLiant ML", image: getHpeImage('towerServers') },
          { name: "Hybrid Systems", image: getHpeImage('hybridSystems') },
        ],
        to: "/products/server-and-storages/hpe",
      },
    ],
  },

  // ================= /products/server-and-storages/:brand ==============
  brandPages: {
    "dell-emc": {
      hero: {
        title: "Dell / Dell EMC",
        description:
          "Rack, blade, and tower PowerEdge servers paired with SAN/NAS PowerStore enterprise arrays.",
        bg: getDellImage('rackServers'),
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
          slug: "rack-servers",
          name: "Rack Servers",
          image: getDellImage('rackServers'),
          brief: "PowerEdge rack platforms that scale compute, memory, and acceleration for data centers.",
          features: [
            "1U/2U PowerEdge R-Series",
            "PCIe Gen4/Gen5 with NVMe",
            "Automated lifecycle via iDRAC",
          ],
          to: "/products/server-and-storages/dell-emc/rack-servers",
        },
        {
          slug: "blade-servers",
          name: "Blade Servers",
          image: getDellImage('bladeServers'),
          brief: "Compact FX and MX modular blades for dense virtualization and cloud stacks.",
          features: [
            "MX7000 modular chassis",
            "Multi-node fabric backplane",
            "Integrated networking & management",
          ],
          to: "/products/server-and-storages/dell-emc/blade-servers",
        },
        {
          slug: "tower-servers",
          name: "Tower Servers",
          image: getDellImage('towerServers'),
          brief: "Quiet, office-ready tower servers for ROBO and SMB workloads.",
          features: [
            "PowerEdge T-Series",
            "Tool-free expansion slots",
            "Optional GPU/RAID add-ons",
          ],
          to: "/products/server-and-storages/dell-emc/tower-servers",
        },
        {
          slug: "san-nas-systems",
          name: "SAN/NAS Storage Systems",
          image: getDellImage('sanNas'),
          brief: "Unified SAN and NAS appliances that centralize block and file services.",
          features: [
            "PowerStore block/file tiers",
            "NVMe/Tiered caching",
            "Native replication & snapshots",
          ],
          to: "/products/server-and-storages/dell-emc/san-nas-systems",
        },
        {
          slug: "enterprise-storage-arrays",
          name: "Enterprise-Class Storage Arrays",
          image: getDellImage('enterpriseArrays'),
          brief: "PowerMax and PowerStore arrays engineered for always-on enterprise workloads.",
          features: [
            "Active-active scale-out",
            "Inline dedupe & compression",
            "Metro cluster ready",
          ],
          to: "/products/server-and-storages/dell-emc/enterprise-storage-arrays",
        },
      ],
    },

    hpe: {
      hero: {
        title: "HP / HPE",
        description:
          "ProLiant DL and ML servers integrated with Alletra enterprise storage for hybrid-ready systems.",
        bg: getHpeImage('rackServers'),
        breadcrumb: "Home / Products / Servers & Storage / HPE",
      },
      keyBenefits: [
        { icon: "Shield", title: "Root of Trust", desc: "Firmware attestation & rollback." },
        { icon: "Activity", title: "Efficiency", desc: "Smart Array & power tuning." },
        { icon: "Network", title: "Hybrid", desc: "Alletra storage with on-prem and cloud fabrics." },
      ],
      models: [
        {
          slug: "proliant-dl-series",
          name: "ProLiant DL Series (Rack Servers)",
          image: getHpeImage('rackServers'),
          brief: "High-density ProLiant DL rack servers optimized for performance per watt.",
          features: [
            "DL360/DL380 Gen11",
            "Silicon Root of Trust",
            "Flexible NVMe/SAS backplanes",
          ],
          to: "/products/server-and-storages/hpe/proliant-dl-series",
        },
        {
          slug: "proliant-ml-series",
          name: "ProLiant ML Series (Tower Servers)",
          image: getHpeImage('towerServers'),
          brief: "Expandable tower designs for branch and SMB workloads with quieter acoustics.",
          features: [
            "Tool-less expansion",
            "Integrated security agents",
            "Optional GPU acceleration",
          ],
          to: "/products/server-and-storages/hpe/proliant-ml-series",
        },
        {
          slug: "enterprise-storage-solutions",
          name: "Enterprise Storage Solutions",
          image: getHpeImage('enterpriseStorage'),
          brief: "Alletra and Nimble platforms delivering enterprise-grade block and file services.",
          features: [
            "Alletra MP unified storage",
            "InfoSight predictive analytics",
            "Data reduction and encryption",
          ],
          to: "/products/server-and-storages/hpe/enterprise-storage-solutions",
        },
        {
          slug: "hybrid-systems",
          name: "Hybrid Systems",
          image: getHpeImage('hybridSystems'),
          brief: "Composable and hyperconverged systems blending compute and storage for hybrid cloud.",
          features: [
            "HPE Synergy frames",
            "dHCI & GreenLake integration",
            "Unified automation tooling",
          ],
          to: "/products/server-and-storages/hpe/hybrid-systems",
        },
      ],
    },

  },

  // ========= /products/server-and-storages/:brand/:slug (MODEL) =========
  modelPages: {
    "dell-emc": {
      "rack-servers": {
        hero: {
          title: "Dell PowerEdge Rack Servers",
          description: "Scale-out rack compute for virtualization, databases, and cloud-native workloads.",
          bg: getDellImage('rackServers'),
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / Rack Servers",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getDellImage('rackServers')],
        overview:
          "PowerEdge rack systems deliver dense compute with PCIe Gen4/Gen5, high core-count CPUs, and accelerator-ready designs.",
        features: [
          "1U/2U PowerEdge R-Series",
          "iDRAC9 and OpenManage automation",
          "Hot-swap NVMe/SAS drive bays",
          "GPU and DPU expansion-ready",
        ],
        specs: {
          FormFactors: "1U / 2U rack",
          CPU: "Intel® Xeon® / AMD EPYC™",
          Memory: "Up to 8TB DDR5",
          Connectivity: "1/10/25/100GbE & Fibre Channel",
        },
        downloads: [{ label: "Rack Portfolio", href: "/downloads/servers/dell-rack-portfolio.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/hpe/proliant-dl-series",
            name: "HPE ProLiant DL Series",
            image: getHpeImage('rackServers'),
          },
        ],
      },
      "blade-servers": {
        hero: {
          title: "Dell Blade Servers",
          description: "FX and MX modular blades that consolidate compute, storage, and fabric in a shared chassis.",
          bg: getDellImage('bladeServers'),
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / Blade Servers",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getDellImage('bladeServers')],
        overview:
          "Dell MX7000 and FX2 chassis support mix-and-match compute sleds, storage sleds, and networking fabrics with kinetic infrastructure orchestration.",
        features: [
          "MX7000 kinetic architecture",
          "Integrated fabric switching",
          "Composable compute/storage sleds",
          "OpenManage Enterprise Modules",
        ],
        specs: {
          Chassis: "MX7000 / FX2",
          Nodes: "Up to 8 half-height sleds",
          Fabrics: "Ethernet, Fibre Channel, SAS",
          Management: "OpenManage Enterprise",
        },
        downloads: [{ label: "Blade Systems Guide", href: "/downloads/servers/dell-blade-guide.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/rack-servers",
            name: "Dell PowerEdge Rack Servers",
            image: getDellImage('rackServers'),
          },
          {
            href: "/products/server-and-storages/hpe/hybrid-systems",
            name: "HPE Hybrid Systems",
            image: getHpeImage('hybridSystems'),
          },
        ],
      },
      "tower-servers": {
        hero: {
          title: "Dell PowerEdge Tower Servers",
          description: "Quiet, office-friendly tower servers for branch offices, retail, and SMB workloads.",
          bg: getDellImage('towerServers'),
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / Tower Servers",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getDellImage('towerServers')],
        overview:
          "Tower servers deliver enterprise-class performance with acoustic dampening, tool-less expansion, and optional rack conversion kits.",
        features: [
          "PowerEdge T150/T350/T550",
          "Optional GPU and RAID add-ons",
          "Quiet acoustics for office use",
          "Remote management with iDRAC",
        ],
        specs: {
          FormFactors: "Tower / rackable",
          Expansion: "8+ drive bays",
          Power: "Platinum redundant PSUs",
          Security: "Lockable bezels & TPM 2.0",
        },
        downloads: [{ label: "Tower Portfolio", href: "/downloads/servers/dell-tower-portfolio.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/hpe/proliant-ml-series",
            name: "HPE ProLiant ML Series",
            image: getHpeImage('towerServers'),
          },
        ],
      },
      "san-nas-systems": {
        hero: {
          title: "Dell SAN/NAS Storage Systems",
          description: "Unified PowerStore platforms for block, file, and VMware-ready storage fabrics.",
          bg: getDellImage('sanNas'),
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / SAN-NAS Storage Systems",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getDellImage('sanNas')],
        overview:
          "Deliver consolidated block and file services with NVMe performance, inline data reduction, and cloud tiering for backup and DR.",
        features: [
          "PowerStore block/file appliances",
          "Native replication & snapshots",
          "Anytime controller upgrades",
          "CloudIQ monitoring",
        ],
        specs: {
          Protocols: "FC, iSCSI, NFS, SMB",
          Media: "NVMe / SAS expansion",
          DataServices: "Thin provisioning, dedupe",
          Scale: "Scale-up or scale-out clusters",
        },
        downloads: [{ label: "SAN/NAS Overview", href: "/downloads/storage/dell-sannas-overview.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/enterprise-storage-arrays",
            name: "Enterprise-Class Storage Arrays",
            image: getDellImage('enterpriseArrays'),
          },
          {
            href: "/products/server-and-storages/hpe/enterprise-storage-solutions",
            name: "HPE Enterprise Storage Solutions",
            image: getHpeImage('enterpriseStorage'),
          },
        ],
      },
      "enterprise-storage-arrays": {
        hero: {
          title: "Dell Enterprise-Class Storage Arrays",
          description: "PowerMax and PowerStore arrays engineered for mission-critical, latency-sensitive workloads.",
          bg: getDellImage('enterpriseArrays'),
          breadcrumb:
            "Home / Products / Servers & Storage / Dell EMC / Enterprise Storage Arrays",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getDellImage('enterpriseArrays')],
        overview:
          "Scale-out arrays deliver NVMe end-to-end fabrics, cyber-resilience vaults, and Metro node capabilities for zero-downtime operations.",
        features: [
          "Active-active metro clustering",
          "Inline dedupe & compression",
          "Cyber Vault immutable copies",
          "NVMe/TCP and FC support",
        ],
        specs: {
          Controllers: "Dual / multi-controller",
          Media: "NVMe + SCM tiers",
          Availability: "99.9999% design",
          Integrations: "VMware, Kubernetes, Ansible",
        },
        downloads: [{ label: "Enterprise Arrays", href: "/downloads/storage/dell-enterprise-arrays.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/hpe/hybrid-systems",
            name: "HPE Hybrid Systems",
            image: getHpeImage('hybridSystems'),
          },
        ],
      },
    },
    hpe: {
      "proliant-dl-series": {
        hero: {
          title: "HPE ProLiant DL Series Rack Servers",
          description: "High-density rack servers with Silicon Root of Trust and workload-tuned performance.",
          bg: getHpeImage('rackServers'),
          breadcrumb:
            "Home / Products / Servers & Storage / HPE / ProLiant DL Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpeImage('rackServers')],
        overview:
          "DL racks pair Gen11 compute with iLO management, making them ideal for virtualization, VDI, and analytics clusters.",
        features: [
          "DL360/DL380 Gen11 portfolio",
          "Silicon Root of Trust security",
          "Tool-less NVMe/SAS backplanes",
          "HPE GreenLake readiness",
        ],
        specs: {
          FormFactors: "1U / 2U rack",
          CPU: "Intel® Xeon® / AMD EPYC™",
          Memory: "Up to 6TB DDR5",
          Networking: "OCP 3.0 10/25/100GbE",
        },
        downloads: [{ label: "DL Portfolio", href: "/downloads/servers/hpe-dl-portfolio.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/rack-servers",
            name: "Dell PowerEdge Rack Servers",
            image: getDellImage('rackServers'),
          },
        ],
      },
      "proliant-ml-series": {
        hero: {
          title: "HPE ProLiant ML Series Tower Servers",
          description: "Quiet, modular tower servers tailored for branch and SMB requirements.",
          bg: getHpeImage('towerServers'),
          breadcrumb:
            "Home / Products / Servers & Storage / HPE / ProLiant ML Series",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpeImage('towerServers')],
        overview:
          "ProLiant ML towers scale with optional GPU, storage, and networking modules while keeping acoustics low for office installs.",
        features: [
          "ML30/ML350 Gen11 systems",
          "Tool-less PCIe expansion",
          "Integrated iLO5 management",
          "Optional rack conversion kits",
        ],
        specs: {
          FormFactors: "Tower / rackable",
          DriveBays: "Up to 16 LFF/SFF",
          Power: "Redundant PSU options",
          Security: "TPM 2.0, chassis lock",
        },
        downloads: [{ label: "ML Portfolio", href: "/downloads/servers/hpe-ml-portfolio.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/tower-servers",
            name: "Dell PowerEdge Tower Servers",
            image: getDellImage('towerServers'),
          },
        ],
      },
      "enterprise-storage-solutions": {
        hero: {
          title: "HPE Enterprise Storage Solutions",
          description: "Alletra, Primera, and Nimble storage delivering always-on availability and predictive insights.",
          bg: getHpeImage('enterpriseStorage'),
          breadcrumb:
            "Home / Products / Servers & Storage / HPE / Enterprise Storage Solutions",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpeImage('enterpriseStorage')],
        overview:
          "HPE Alletra MP and Nimble systems blend flash performance with InfoSight AI-driven operations for enterprise storage fabrics.",
        features: [
          "InfoSight predictive analytics",
          "Native data reduction",
          "Multi-protocol block/file access",
          "Advanced encryption & snapshots",
        ],
        specs: {
          Protocols: "iSCSI, FC, NFS, SMB",
          Media: "NVMe / hybrid flash",
          Analytics: "HPE InfoSight AI",
          Availability: "99.9999% design",
        },
        downloads: [{ label: "Storage Portfolio", href: "/downloads/storage/hpe-enterprise-storage.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/san-nas-systems",
            name: "Dell SAN/NAS Storage Systems",
            image: getDellImage('sanNas'),
          },
        ],
      },
      "hybrid-systems": {
        hero: {
          title: "HPE Hybrid Systems",
          description: "Composable and hyperconverged systems that blend compute, storage, and networking for hybrid cloud.",
          bg: getHpeImage('hybridSystems'),
          breadcrumb:
            "Home / Products / Servers & Storage / HPE / Hybrid Systems",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [getHpeImage('hybridSystems')],
        overview:
          "Synergy and dHCI solutions provide template-driven provisioning, while GreenLake consumption delivers cloud economics on-premises.",
        features: [
          "HPE Synergy composable fabric",
          "dHCI with Alletra storage",
          "GreenLake pay-per-use",
          "Unified API & automation",
        ],
        specs: {
          Architecture: "Composable / HCI",
          Orchestration: "HPE OneView",
          Storage: "Alletra / Nimble dHCI",
          UseCases: "Hybrid cloud, VDI, databases",
        },
        downloads: [{ label: "Hybrid Systems", href: "/downloads/servers/hpe-hybrid-systems.pdf" }],
        related: [
          {
            href: "/products/server-and-storages/dell-emc/blade-servers",
            name: "Dell Blade Servers",
            image: getDellImage('bladeServers'),
          },
        ],
      },
    },
  },

  seo: {
    title: "Enterprise Servers & Storage | VertiLinks",
    description:
      "Dell EMC and HPE server/storage solutions with design, implementation and AMC.",
    canonical: "/products/server-and-storages",
  },
};
