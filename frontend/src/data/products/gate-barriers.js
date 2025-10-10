import images from '../images';
import { Shield } from 'lucide-react';

const cameImages = images.products.gateBarriers.came.models;
const bftImages = images.products.gateBarriers.bft.models;

export default {
  slug: "gate-barriers",
  title: "Gate Barriers",

  categoryPage: {
    hero: {
      title: "Vehicular Gate Barriers",
      description:
        "High-cycle boom barriers, brushless operators and chain systems for controlled vehicle access.",
      bg: images.products.gateBarriers.hero,
      breadcrumb: "Home / Products / Gate Barriers",
      cta: { label: "Request Quote", to: "/contact" },
    },
    overview: {
      heading: "Control Vehicle Entry",
      icon: Shield,
      intro:
        "Deploy CAME brushless platforms and BFT high-frequency barriers for parking, tolling and industrial yards. Pair with ANPR, UHF tags and access control for intelligent, automated entry lanes.",
      bulletsLeft: [
        "3–12 m booms and 16 m chain spans",
        "Brushless and inverter-driven motors",
        "Fast and standard opening profiles",
        "Manual release and battery backup options",
      ],
      bulletsRight: [
        "Loop detectors and safety edges",
        "Modbus / CAME CONNECT / U-Link",
        "Remote monitoring and diagnostics",
        "LED lighting and integrated signage",
      ],
      keyBenefits: [
        { icon: "GaugeCircle", title: "Duty Cycle", desc: "Continuous-operation models with multi-million cycle lifespans." },
        { icon: "Plug", title: "Integrations", desc: "Native support for access control, ANPR and building systems." },
        { icon: "Lightbulb", title: "Visibility", desc: "Boom lighting and accessories improve driver guidance." },
      ],
    },
    brands: [
      {
        slug: "came",
        name: "CAME",
        logo: images.products.gateBarriers.came.logo,
        blurb: "Brushless Italian gate barriers covering fast car parks to 12 m industrial entrances.",
        highlights: [
          "Brushless 36 V DC motors",
          "Up to 10 million MCBF",
          "Modbus & CAME CONNECT ready",
          "LED boom lighting kits",
        ],
        industries: ["Parking", "Industrial", "Logistics"],
        preview: [
          { name: "GARD GT4", image: cameImages.gardGt4 },
          { name: "GARD PX", image: cameImages.gardPx },
        ],
        to: "/products/gate-barriers/came",
      },
      {
        slug: "bft",
        name: "BFT",
        logo: images.products.gateBarriers.bft.logo,
        blurb: "High-frequency electromechanical barriers with U-Link connectivity for smart control.",
        highlights: [
          "Encoder-based impact detection",
          "Integrated MERAK/U-Link controllers",
          "Rapid opening from 2.2 seconds",
          "Accessories for toll and parking sites",
        ],
        industries: ["Parking", "Commercial", "Infrastructure"],
        preview: [
          { name: "Giotto BT B Ultra 36", image: bftImages.giottoBtBUltra36 },
          { name: "Maxima Ultra 36", image: bftImages.maximaUltra36 },
        ],
        to: "/products/gate-barriers/bft",
      },
    ],
  },

  brandPages: {
    came: {
      hero: {
        title: "CAME Gate Barriers",
        description: "Brushless and telescopic boom barriers engineered for intensive traffic lanes.",
        bg: images.products.gateBarriers.hero,
        breadcrumb: "Home / Products / Gate Barriers / CAME",
        cta: { label: "Request Quote", to: "/contact" },
      },
      keyBenefits: [
        { icon: "GaugeCircle", title: "High Duty", desc: "Up to 10 million cycles on PX brushless platforms." },
        { icon: "Network", title: "Connected", desc: "Modbus, CAME KEY and CONNECT remote diagnostics." },
        { icon: "Settings", title: "Configurable", desc: "LED crowns, breakaway booms and cabinet finishes." },
      ],
      models: [
        {
          slug: "gard-gt4",
          name: "CAME GARD GT4",
          image: cameImages.gardGt4,
          brief: "24 V DC barrier for passages up to 5 m with 3M cycle coverage.",
          features: [
            "Adjustable 2–6 s opening profile for parking lanes",
            "350 cycles/hour duty with 3 million MCBF",
            "Modbus, CONNECT and emergency battery options",
          ],
          to: "/products/gate-barriers/came/gard-gt4",
        },
        {
          slug: "gard-gt8",
          name: "CAME GARD GT8",
          image: cameImages.gardGt8,
          brief: "Extended boom variant covering wider roadways up to 8 m.",
          features: [
            "Heavy-duty gearing for large road spans",
            "3 million cycle lifespan for intensive sites",
            "CONNECT-ready control with remote management",
          ],
          to: "/products/gate-barriers/came/gard-gt8",
        },
        {
          slug: "gard-px",
          name: "CAME GARD PX",
          image: cameImages.gardPx,
          brief: "Brushless 36 V DC barrier delivering sub-2 second openings.",
          features: [
            "1–2 s opening for 3.8 m clear passages",
            "10 million MCBF with oil-bath gearbox",
            "Adaptive speed control with Modbus integration",
          ],
          to: "/products/gate-barriers/came/gard-px",
        },
        {
          slug: "gard-12",
          name: "CAME GARD 12",
          image: cameImages.gard12,
          brief: "Dual-motor telescopic boom reaching clearances up to 12 m.",
          features: [
            "Twin 24 V DC motors balance long booms",
            "600k cycle design for wide industrial driveways",
            "Modular counterweights for easy balancing",
          ],
          to: "/products/gate-barriers/came/gard-12",
        },
        {
          slug: "gard-ls4",
          name: "CAME GARD LS4",
          image: cameImages.gardLs4,
          brief: "Compact intensive-use barrier for passages up to 3.8 m.",
          features: [
            "Adjustable 2–6 s motion with encoder control",
            "1.5M MCBF and 300 cycles/hour throughput",
            "Integrated LEDs and reversible mounting",
          ],
          to: "/products/gate-barriers/came/gard-ls4",
        },
        {
          slug: "gard-ls6",
          name: "CAME GARD LS6",
          image: cameImages.gardLs6,
          brief: "High-frequency 6.5 m barrier for logistics and industrial yards.",
          features: [
            "24 V DC motor with 160 cycles/hour capability",
            "1.5M MCBF and breakaway boom safety",
            "Remote configuration via CAME KEY/App",
          ],
          to: "/products/gate-barriers/came/gard-ls6",
        },
        {
          slug: "cat-chain",
          name: "CAME CAT Chain Barrier",
          image: cameImages.catChain,
          brief: "Discrete chain barrier system covering 8–16 m passages.",
          features: [
            "Chain lifts to block up to 16 m wide openings",
            "Suitable for intensive residential and industrial use",
            "CONNECT-ready with multiple cabinet finishes",
          ],
          to: "/products/gate-barriers/came/cat-chain",
        },
      ],
    },

    bft: {
      hero: {
        title: "BFT Gate Barriers",
        description: "Electromechanical and inverter-driven barriers for demanding vehicle lanes.",
        bg: images.products.gateBarriers.hero,
        breadcrumb: "Home / Products / Gate Barriers / BFT",
        cta: { label: "Request Quote", to: "/contact" },
      },
      keyBenefits: [
        { icon: "Cpu", title: "Smart Control", desc: "MERAK and U-Link platforms enable remote diagnostics." },
        { icon: "Activity", title: "Intensive Use", desc: "Tested up to 3 million cycles on Ultra series." },
        { icon: "Shield", title: "Safety", desc: "Encoder-based impact detection and obstacle reversal." },
      ],
      models: [
        {
          slug: "giotto-bt-b-ultra-36",
          name: "BFT Giotto BT B Ultra 36",
          image: bftImages.giottoBtBUltra36,
          brief: "Parking-class barrier with 24 V DC motor and 3M cycle testing.",
          features: [
            "2.2–4 s opening depending on boom length",
            "Integrated U-Link connectivity and MERAK control",
            "Encoder-driven safety for impact detection",
          ],
          to: "/products/gate-barriers/bft/giotto-bt-b-ultra-36",
        },
        {
          slug: "giotto-bt-a-ultra-36",
          name: "BFT Giotto BT A Ultra 36",
          image: bftImages.giottoBtAUltra36,
          brief: "Flexible 2–6 m barrier with XL boom options to 6 m.",
          features: [
            "24 V electromechanical drive with 3M MCBF",
            "Reversible motion on obstacle detection",
            "Compatible with PS/ES articulated booms",
          ],
          to: "/products/gate-barriers/bft/giotto-bt-a-ultra-36",
        },
        {
          slug: "giotto-ultra-36",
          name: "BFT Giotto Ultra 36",
          image: bftImages.giottoUltra36,
          brief: "High-duty parking barrier rated for 5,000 operations per day.",
          features: [
            "2.2 s opening for 3 m bars; 4 s for 6 m XL",
            "U-Link ready MERAK controller in head unit",
            "Designed for continuous parking facility throughput",
          ],
          to: "/products/gate-barriers/bft/giotto-ultra-36",
        },
        {
          slug: "maxima-ultra-36",
          name: "BFT Maxima Ultra 36",
          image: bftImages.maximaUltra36,
          brief: "Three-phase inverter barrier for high-frequency access points.",
          features: [
            "Asynchronous 3-phase motor with inverter control",
            "Designed for very high traffic and intensive duty",
            "Self-diagnostics with comprehensive accessory support",
          ],
          to: "/products/gate-barriers/bft/maxima-ultra-36",
        },
        {
          slug: "michelangelo-bt-a",
          name: "BFT Michelangelo BT A",
          image: bftImages.michelangelo,
          brief: "Architectural boom barrier available up to 8 m spans.",
          features: [
            "24 V platform with 6–8 m boom options",
            "Integrated controller with display and radio receiver",
            "Optional battery backup and custom finishes",
          ],
          to: "/products/gate-barriers/bft/michelangelo-bt-a",
        },
      ],
    },
  },

  modelPages: {
    came: {
      "gard-gt4": {
        hero: {
          title: "CAME GARD GT4",
          description: "24 V DC barrier for passages up to 5 m with adjustable speed profiles.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD GT4",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gardGt4],
        overview:
          "The GARD GT4 is a fast, intensive-use barrier suited to parking lots and corporate driveways. It combines a 24 V DC motor, single-spring balancing and modular accessories for rapid deployment.",
        features: [
          "Adjustable opening between 2 and 6 seconds for tailored operations",
          "350 cycles/hour duty rating with 3 million mean cycles between failures",
          "Galvanised, painted or stainless cabinets with LED crown indicators",
          "Native Modbus plus CAME CONNECT remote monitoring support",
        ],
        specs: {
          Passage: "Up to 5 m clearance",
          "Opening Time": "2–6 s adjustable",
          "Duty Cycle": "350 cycles/hour",
          MCBF: "3,000,000 cycles",
          Motor: "24 V DC",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-gt4/" },
          { label: "Brochure", href: "https://www.camedownload.net/brochures/2021_CAME_GARD_GT.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-px", name: "CAME GARD PX", image: cameImages.gardPx },
          { href: "/products/gate-barriers/bft/giotto-bt-b-ultra-36", name: "BFT Giotto BT B Ultra 36", image: bftImages.giottoBtBUltra36 },
        ],
      },
      "gard-gt8": {
        hero: {
          title: "CAME GARD GT8",
          description: "Wide carriage barrier covering extended passages with intensive-use components.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD GT8",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gardGt8],
        overview:
          "The GARD GT8 extends the GT platform to wider roadways and industrial entrances. Sharing the GT control platform, it brings fast commissioning, remote diagnostics and accessories for mission-critical lanes.",
        features: [
          "Supports long booms for large vehicle carriageways",
          "3 million cycle life with intensive-use design",
          "Compatible with CONNECT cloud for remote management",
          "Customisable cabinet colours and LED boom profiles",
        ],
        specs: {
          Passage: "Up to 8 m clearance",
          "Opening Time": "Configurable by boom length",
          "Duty Cycle": "Intensive use",
          MCBF: "3,000,000 cycles",
          Motor: "24 V DC platform",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-gt8/" },
          { label: "Brochure", href: "https://www.camedownload.net/brochures/2021_CAME_GARD_GT.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-12", name: "CAME GARD 12", image: cameImages.gard12 },
          { href: "/products/gate-barriers/bft/michelangelo-bt-a", name: "BFT Michelangelo BT A", image: bftImages.michelangelo },
        ],
      },
      "gard-px": {
        hero: {
          title: "CAME GARD PX",
          description: "Brushless barrier delivering ultra-fast movements and 10 million cycle life.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD PX",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gardPx],
        overview:
          "The brushless GARD PX pairs a 36 V DC motor with oil-bath gearboxes to achieve 10 million cycles. Adaptive speed control, Modbus connectivity and CONNECT diagnostics suit high-throughput parking and toll gates.",
        features: [
          "1–2 second opening based on boom length",
          "100–240 VAC supply with 36 V DC brushless drive",
          "Adaptive movement profiles with integrated encoders",
          "Remote monitoring through CAME CONNECT and Modbus",
        ],
        specs: {
          Passage: "Up to 3.8 m clearance",
          "Opening Time": "1–2 s",
          Duty: "Continuous duty",
          MCBF: "10,000,000 cycles",
          Motor: "Brushless 36 V DC",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-px/" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-ls4", name: "CAME GARD LS4", image: cameImages.gardLs4 },
          { href: "/products/gate-barriers/bft/giotto-ultra-36", name: "BFT Giotto Ultra 36", image: bftImages.giottoUltra36 },
        ],
      },
      "gard-12": {
        hero: {
          title: "CAME GARD 12",
          description: "Telescopic 12 m boom barrier with dual motors for wide industrial access control.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD 12",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gard12],
        overview:
          "CAME's GARD 12 handles extra-wide driveways and industrial entrances using dual 24 V DC motors and telescopic booms. Modular counterweights keep the boom balanced while maintaining top-tier build quality.",
        features: [
          "Covers openings up to 12 m with telescopic sections",
          "Dual-motor architecture with 300 W total power",
          "50% duty rating for heavy commercial use",
          "Configurable counterweights and accessory packages",
        ],
        specs: {
          Passage: "Up to 12 m clearance",
          "Opening Time": "≈10 s for 90° travel",
          Duty: "50% duty cycle",
          MCBF: "600,000 cycles",
          Motor: "24 V DC dual motor, 300 W",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-12/" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-gt8", name: "CAME GARD GT8", image: cameImages.gardGt8 },
          { href: "/products/gate-barriers/bft/maxima-ultra-36", name: "BFT Maxima Ultra 36", image: bftImages.maximaUltra36 },
        ],
      },
      "gard-ls4": {
        hero: {
          title: "CAME GARD LS4",
          description: "Intensive-use 3.8 m barrier with encoder control and LED options.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD LS4",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gardLs4],
        overview:
          "The compact GARD LS4 is tuned for fast-moving car parks requiring 3.8 m coverage. 24 V DC motors, encoder feedback and CONNECT services keep the system responsive and easy to maintain.",
        features: [
          "2–6 s adjustable operation with encoder precision",
          "1.5 million cycle lifespan for intensive parking sites",
          "Left/right mounting without internally flipping components",
          "Boom LEDs and signage enhance approach visibility",
        ],
        specs: {
          Passage: "Up to 3.8 m clearance",
          "Opening Time": "2–6 s adjustable",
          "Duty Cycle": "300 cycles/hour",
          MCBF: "1,500,000 cycles",
          Motor: "24 V DC, 190 W",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-ls4/" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-ls6", name: "CAME GARD LS6", image: cameImages.gardLs6 },
          { href: "/products/gate-barriers/bft/giotto-bt-a-ultra-36", name: "BFT Giotto BT A Ultra 36", image: bftImages.giottoBtAUltra36 },
        ],
      },
      "gard-ls6": {
        hero: {
          title: "CAME GARD LS6",
          description: "6.5 m intensive-use barrier with remote configuration via CAME KEY.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / GARD LS6",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.gardLs6],
        overview:
          "Designed for logistics yards and industrial entrances, the GARD LS6 combines a 24 V DC platform with 1.5 million cycle durability. Remote configuration tools simplify commissioning and maintenance.",
        features: [
          "Handles up to 6.5 m passages with 4–6 s motion",
          "1.5 million MCBF with 160 cycles/hour throughput",
          "Breakaway boom and safety edge compatibility",
          "CAME KEY and app-enabled programming",
        ],
        specs: {
          Passage: "Up to 6.5 m clearance",
          "Opening Time": "4–6 s",
          "Duty Cycle": "160 cycles/hour",
          MCBF: "1,500,000 cycles",
          Motor: "24 V DC, 190 W",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/automatic-barriers-gard-ls6/" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-gt4", name: "CAME GARD GT4", image: cameImages.gardGt4 },
          { href: "/products/gate-barriers/bft/maxima-ultra-36", name: "BFT Maxima Ultra 36", image: bftImages.maximaUltra36 },
        ],
      },
      "cat-chain": {
        hero: {
          title: "CAME CAT Chain Barrier",
          description: "Low-profile chain barrier covering up to 16 m spans for shared spaces.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / CAME / CAT Chain",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [cameImages.catChain],
        overview:
          "The CAT chain barrier secures wide entrances with minimal visual impact. Multiple cabinet finishes and CONNECT-ready electronics make it ideal for residential communities and industrial yards needing flexible gating.",
        features: [
          "Covers 8–16 m passages using raised chain span",
          "Available in 230 VAC or 24 V DC versions",
          "Supports CAME CONNECT for remote status monitoring",
          "Robust steel construction with configurable colours",
        ],
        specs: {
          Coverage: "8–16 m chain span",
          "Opening Time": "Dependent on configuration",
          Usage: "Intensive use design",
          Motor: "230 VAC and 24 V DC variants",
        },
        downloads: [
          { label: "Product Page", href: "https://www.came.com/global/en/products/chain-barriers-cat/" },
        ],
        related: [
          { href: "/products/gate-barriers/came/gard-12", name: "CAME GARD 12", image: cameImages.gard12 },
          { href: "/products/gate-barriers/bft/michelangelo-bt-a", name: "BFT Michelangelo BT A", image: bftImages.michelangelo },
        ],
      },
    },
    bft: {
      "giotto-bt-b-ultra-36": {
        hero: {
          title: "BFT Giotto BT B Ultra 36",
          description: "Encoder-equipped parking barrier tested for 3 million operations.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / BFT / Giotto BT B Ultra 36",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [bftImages.giottoBtBUltra36],
        overview:
          "Giotto BT B Ultra 36 brings fast cycle times and encoder-based safety for busy parking facilities. The MERAK controller with U-Link connectivity simplifies integration with building systems.",
        features: [
          "24 V DC motor with soft start/stop control",
          "2.2–4 second opening depending on boom length",
          "Integrated back-up battery compatibility",
          "U-Link ready for remote diagnostics and programming",
        ],
        specs: {
          Passage: "2–6 m booms",
          "Opening Time": "2.2–4 s",
          Duty: "3,000,000 cycle testing",
          Motor: "24 V DC electromechanical",
          Control: "MERAK with U-Link",
        },
        downloads: [
          { label: "Spec Sheet", href: "https://www.arcat.com/datasheets/bft/GIOTTO_BT_B_ULTRA36_Spec_Sheet_EN.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/bft/giotto-bt-a-ultra-36", name: "BFT Giotto BT A Ultra 36", image: bftImages.giottoBtAUltra36 },
          { href: "/products/gate-barriers/came/gard-gt4", name: "CAME GARD GT4", image: cameImages.gardGt4 },
        ],
      },
      "giotto-bt-a-ultra-36": {
        hero: {
          title: "BFT Giotto BT A Ultra 36",
          description: "Flexible parking barrier available in standard and XL boom configurations.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / BFT / Giotto BT A Ultra 36",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [bftImages.giottoBtAUltra36],
        overview:
          "The Giotto BT A Ultra 36 pairs a 24 V drive with advanced control logic for parking, logistics and commercial entrances. XL versions extend coverage to 6 m while retaining rapid motion profiles.",
        features: [
          "2.2–4 second opening across boom lengths",
          "Obstacle detection with automatic reversal",
          "PS/ES boom compatibility including articulated variants",
          "Integrated MERAK control with U-Link connectivity",
        ],
        specs: {
          Passage: "2–6 m (XL up to 6 m)",
          "Opening Time": "2.2–4 s",
          MCBF: "≈3,000,000 cycles",
          Motor: "24 V electromechanical",
          Rating: "IP54 enclosure",
        },
        downloads: [
          { label: "Datasheet", href: "https://dorongates.com/wp-content/uploads/2022/11/giotto-ultra-36-1.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/bft/giotto-ultra-36", name: "BFT Giotto Ultra 36", image: bftImages.giottoUltra36 },
          { href: "/products/gate-barriers/came/gard-ls4", name: "CAME GARD LS4", image: cameImages.gardLs4 },
        ],
      },
      "giotto-ultra-36": {
        hero: {
          title: "BFT Giotto Ultra 36",
          description: "High-duty barrier rated for up to 5,000 operations per day.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / BFT / Giotto Ultra 36",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [bftImages.giottoUltra36],
        overview:
          "Giotto Ultra 36 delivers intensive throughput for parking structures, featuring U-Link connectivity, built-in flashers and durable mechanics capable of 5,000 operations every 24 hours.",
        features: [
          "Rapid 2.2 s opening with 3 m bar (4 s with XL bar)",
          "5,000 ops/24h at 3 m and 2,000 ops at 6 m",
          "Powder-coated steel cabinet with integrated control head",
          "Accessories include LED booms, skirts and safety edges",
        ],
        specs: {
          Passage: "Standard up to 4 m, XL up to 6 m",
          "Opening Time": "≈2.2 s @ 3 m, 4 s @ 6 m",
          Usage: "5,000 ops/24h (3 m bar)",
          Motor: "24 V DC",
          Protection: "IP54",
        },
        downloads: [
          { label: "Product Page", href: "https://www.bft-automation.com/en_INT/family-detail/giotto-ultra-36/" },
        ],
        related: [
          { href: "/products/gate-barriers/bft/giotto-bt-b-ultra-36", name: "BFT Giotto BT B Ultra 36", image: bftImages.giottoBtBUltra36 },
          { href: "/products/gate-barriers/came/gard-px", name: "CAME GARD PX", image: cameImages.gardPx },
        ],
      },
      "maxima-ultra-36": {
        hero: {
          title: "BFT Maxima Ultra 36",
          description: "Industrial barrier with asynchronous three-phase motor and inverter control.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / BFT / Maxima Ultra 36",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [bftImages.maximaUltra36],
        overview:
          "Maxima Ultra 36 is designed for tolls, airports and logistics hubs demanding nonstop service. Its asynchronous motor with inverter ensures smooth, configurable motion and exceptional endurance.",
        features: [
          "Three-phase motor with inverter for precision speed control",
          "Engineered for very high frequency duty cycles",
          "Self-diagnostic control logic with comprehensive feedback",
          "Supports advanced accessories and long boom options",
        ],
        specs: {
          Passage: "2–6 m booms",
          Duty: "Very high frequency / intensive use",
          Motor: "Asynchronous 3-phase with inverter",
          Control: "Integrated smart diagnostics",
        },
        downloads: [
          { label: "Brochure", href: "https://www.bftautomationuk.com/media/attachments/2023/02/14/barrier-brochure-2023.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/bft/michelangelo-bt-a", name: "BFT Michelangelo BT A", image: bftImages.michelangelo },
          { href: "/products/gate-barriers/came/gard-12", name: "CAME GARD 12", image: cameImages.gard12 },
        ],
      },
      "michelangelo-bt-a": {
        hero: {
          title: "BFT Michelangelo BT A",
          description: "Architectural barrier platform covering entrances up to 8 m.",
          bg: images.products.gateBarriers.hero,
          breadcrumb: "Home / Products / Gate Barriers / BFT / Michelangelo BT A",
          cta: { label: "Request Quote", to: "/contact" },
        },
        gallery: [bftImages.michelangelo],
        overview:
          "Michelangelo BT A blends aesthetics with robust engineering for high-profile sites. Integrated display controls, built-in radio and optional batteries make it versatile for gated communities and facilities.",
        features: [
          "24 V DC motor with intensive-use design",
          "6 m variant opens in ~6 s; 8 m in ~8 s",
          "Built-in controller with LCD interface and receiver",
          "Optional battery backup and custom cabinet colours",
        ],
        specs: {
          Passage: "Up to 8 m versions",
          "Opening Time": "≈6 s (6 m) / 8 s (8 m)",
          Usage: "Intensive use",
          Motor: "24 V DC",
          Features: "Integrated radio, display control panel",
        },
        downloads: [
          { label: "Brochure", href: "https://www.bftautomationuk.com/media/attachments/2023/02/14/barrier-brochure-2023.pdf" },
        ],
        related: [
          { href: "/products/gate-barriers/bft/maxima-ultra-36", name: "BFT Maxima Ultra 36", image: bftImages.maximaUltra36 },
          { href: "/products/gate-barriers/came/gard-gt8", name: "CAME GARD GT8", image: cameImages.gardGt8 },
        ],
      },
    },
  },

  seo: {
    title: "Gate Barriers | VertiLinks",
    description: "CAME and BFT vehicular gate barriers with brushless, inverter and chain systems for intensive sites.",
    canonical: "/products/gate-barriers",
  },
};
