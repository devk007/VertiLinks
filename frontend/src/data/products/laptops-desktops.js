import images from '../images';
import { Laptop2 } from 'lucide-react';

const laptopImages = images.products.laptopsDesktops || {};
const heroImage = laptopImages.hero || images.products.hero;

const brands = [
  {
    key: 'apple',
    logo: laptopImages.apple.logo,
    hero: laptopImages.apple.hero,
    name: 'Apple',
    blurb: 'MacBooks, iMacs, Mac mini and Studio systems for modern creative and leadership teams.',
    highlights: ['MacBook Air & Pro', 'iMac 4.5K/5K', 'Mac mini & Studio'],
    industries: ['Design', 'Executive', 'Developers'],
    preview: laptopImages.apple.models.macbooks,
    models: [
      {
        slug: 'macbooks',
        title: 'MacBooks',
        description: 'MacBook Air and Pro with Apple silicon for mobile professionals.',
        overview:
          'Liquid Retina displays, industry-leading battery life and seamless integration with iPhone/iPad workflows make MacBooks ideal for hybrid teams.',
        features: ['M3/M3 Pro silicon', 'Liquid Retina XDR', 'Up to 22-hour battery'],
        specs: { Sizes: '13" / 14" / 16"', Weight: '1.2–2.1 kg', Security: 'Touch ID + Secure Enclave' },
        image: laptopImages.apple.models.macbooks,
        related: [
          { brand: 'apple', slug: 'imacs' },
          { brand: 'apple', slug: 'mac-mini' },
        ],
      },
      {
        slug: 'imacs',
        title: 'iMacs',
        description: '24" and 27" iMac all-in-one desktops with Retina displays.',
        overview:
          'Ultra-thin all-in-ones with 4.5K/5K Retina displays, studio-quality audio and powerful Apple silicon for front-office and creative teams.',
        features: ['4.5K/5K Retina', '1080p FaceTime camera', 'Magic Keyboard & Mouse'],
        specs: { Chips: 'M3 / M3 Pro', Ports: 'Thunderbolt / USB4', Audio: 'Six-speaker spatial system' },
        image: laptopImages.apple.models.imacs,
        related: [
          { brand: 'apple', slug: 'macbooks' },
          { brand: 'apple', slug: 'mac-mini' },
        ],
      },
      {
        slug: 'mac-mini',
        title: 'Mac mini & Studio',
        description: 'Compact desktops with M2/M2 Pro and M2 Ultra performance.',
        overview:
          'Small-form-factor desktops with multiple display support, 10Gb networking and silent operation for labs, signage and render farms.',
        features: ['M2 / M2 Pro / M2 Ultra', 'Supports 3+ displays', 'Compact 7.7" footprint'],
        specs: { Memory: 'Up to 192GB unified', Storage: 'Up to 8TB SSD', Networking: '10Gb Ethernet option' },
        image: laptopImages.apple.models.macMini,
        related: [
          { brand: 'apple', slug: 'macbooks' },
          { brand: 'apple', slug: 'imacs' },
        ],
      },
    ],
  },
  {
    key: 'dell',
    logo: laptopImages.dell.logo,
    hero: laptopImages.dell.hero,
    name: 'Dell',
    blurb: 'Latitude/XPS ultrabooks, Alienware gaming rigs, OptiPlex desktops and Precision workstations.',
    highlights: ['Latitude & XPS ultrabooks', 'Alienware gaming', 'OptiPlex & Precision workstations'],
    industries: ['Corporate', 'Engineering', 'Gaming'],
    preview: laptopImages.dell.models.xpsLatitude,
    models: [
      {
        slug: 'xps-latitude-laptops',
        title: 'XPS & Latitude Laptops',
        description: 'Premium ultrabooks with ExpressCharge and Dell Optimizer.',
        overview:
          'Thin-and-light designs with 16:10 displays, vPro manageability and advanced SafeBIOS security for hybrid workforces.',
        features: ['ExpressCharge 2.0', 'Dell Optimizer AI', 'SafeBIOS & SafeScreen'],
        specs: { Displays: '13"–16" InfinityEdge', Support: 'ProSupport NBD', Connectivity: 'Wi-Fi 6E / 5G options' },
        image: laptopImages.dell.models.xpsLatitude,
        related: [
          { brand: 'dell', slug: 'alienware-gaming' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
      {
        slug: 'alienware-gaming',
        title: 'Alienware Gaming Systems',
        description: 'Alienware laptops and desktops for competitive gaming.',
        overview:
          'High-refresh displays, Cryo-Tech cooling and AlienFX lighting make Alienware systems ready for esports arenas and gaming lounges.',
        features: ['Up to RTX 4090', 'Advanced Cryo-Tech cooling', 'QHD 240Hz displays'],
        specs: { Platforms: 'm16/m18 laptops & Aurora desktops', Cooling: 'Vapor chamber options', Lighting: 'AlienFX RGB' },
        image: laptopImages.dell.models.alienware,
        related: [
          { brand: 'dell', slug: 'xps-latitude-laptops' },
          { brand: 'msi', slug: 'raider-stealth' },
        ],
      },
      {
        slug: 'optiplex-precision',
        title: 'OptiPlex & Precision Workstations',
        description: 'Business desktops and ISV-certified workstations.',
        overview:
          'Tower, small-form and rack workstations supporting CAD, BIM and data science with vPro manageability and ISV certifications.',
        features: ['Xeon / Core processors', 'ISV certifications', 'Tool-less chassis'],
        specs: { FormFactors: 'SFF / Tower / Rack', Graphics: 'RTX / Radeon Pro', Manageability: 'vPro + Dell Command' },
        image: laptopImages.dell.models.optiplexPrecision,
        related: [
          { brand: 'dell', slug: 'xps-latitude-laptops' },
          { brand: 'lenovo', slug: 'legion-thinkcentre' },
        ],
      },
    ],
  },
  {
    key: 'hp',
    logo: laptopImages.hp.logo,
    hero: laptopImages.hp.hero,
    name: 'HP',
    blurb: 'Pavilion and Spectre laptops, Omen gaming systems, Elite desktops and all-in-ones.',
    highlights: ['Pavilion & Spectre laptops', 'Omen gaming', 'EliteDesk & All-in-One'],
    industries: ['SMB', 'Enterprise', 'Education'],
    preview: laptopImages.hp.models.pavilionSpectre,
    models: [
      {
        slug: 'pavilion-spectre',
        title: 'Pavilion & Spectre Laptops',
        description: 'Thin-and-light notebooks with HP Wolf Security and SureView.',
        overview:
          'Premium aluminium designs offering OLED displays, Bang & Olufsen audio and rapid charging for on-the-go professionals.',
        features: ['HP SureView privacy', 'Bang & Olufsen audio', 'HP Fast Charge'],
        specs: { Displays: '13"–16" OLED', Security: 'Wolf Security stack', Battery: 'Up to 18 hrs' },
        image: laptopImages.hp.models.pavilionSpectre,
        related: [
          { brand: 'hp', slug: 'omen-gaming' },
          { brand: 'hp', slug: 'elite-all-in-ones' },
        ],
      },
      {
        slug: 'omen-gaming',
        title: 'Omen Gaming PCs',
        description: 'Omen laptops and desktops with Cryo chamber cooling.',
        overview:
          'Performance-tuned systems managed through OMEN Gaming Hub with customizable RGB and liquid-cooled options.',
        features: ['OMEN Tempest cooling', 'QHD 165Hz displays', 'Per-key RGB'],
        specs: { GPUs: 'RTX 40 series', Cooling: 'Cryo chamber', Software: 'OMEN Gaming Hub' },
        image: laptopImages.hp.models.omen,
        related: [
          { brand: 'hp', slug: 'pavilion-spectre' },
          { brand: 'msi', slug: 'raider-stealth' },
        ],
      },
      {
        slug: 'elite-all-in-ones',
        title: 'Elite & All-in-One Desktops',
        description: 'EliteDesk towers and HP All-in-One desktops for front-office teams.',
        overview:
          'Secure, easily deployed desktops with tool-less access, optional touch displays and powerful collaboration cameras.',
        features: ['HP Manageability Integration Kit', 'Tool-less chassis', 'Multiple display support'],
        specs: { FormFactors: 'Tower / Mini / AiO', Security: 'Wolf Security BIOS', Service: 'Next Business Day' },
        image: laptopImages.hp.models.elite,
        related: [
          { brand: 'hp', slug: 'pavilion-spectre' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
    ],
  },
  {
    key: 'lenovo',
    logo: laptopImages.lenovo.logo,
    hero: laptopImages.lenovo.hero,
    name: 'Lenovo',
    blurb: 'ThinkPad, IdeaPad, Yoga and Legion laptops with ThinkCentre desktops.',
    highlights: ['ThinkPad business laptops', 'Yoga & IdeaPad convertibles', 'Legion gaming & ThinkCentre desktops'],
    industries: ['Corporate', 'Finance', 'Gaming'],
    preview: laptopImages.lenovo.models.thinkpad,
    models: [
      {
        slug: 'thinkpad-business',
        title: 'ThinkPad Business Laptops',
        description: 'ThinkPad X/T/L series with ThinkShield security and RapidCharge.',
        overview:
          'Enterprise classics featuring the TrackPoint, MIL-STD durability, privacy shutters and wide docking ecosystem support.',
        features: ['ThinkShield security', 'RapidCharge 80% in 60 min', 'PrivacyGuard screens'],
        specs: { Families: 'X / T / L / P', Durability: 'MIL-STD 810H', Manageability: 'vPro + ThinkShield' },
        image: laptopImages.lenovo.models.thinkpad,
        related: [
          { brand: 'lenovo', slug: 'yoga-ideapad' },
          { brand: 'lenovo', slug: 'legion-thinkcentre' },
        ],
      },
      {
        slug: 'yoga-ideapad',
        title: 'Yoga & IdeaPad Convertibles',
        description: '2-in-1 convertibles with OLED touch displays for hybrid work.',
        overview:
          'Flexible devices offering Dolby Atmos audio, Lenovo pen support and 360° hinges for collaboration.',
        features: ['OLED touch displays', '360° hinges', 'Dolby Atmos audio'],
        specs: { Sizes: '13"–15"', Input: 'Active pen support', Battery: 'Rapid Charge Express' },
        image: laptopImages.lenovo.models.yoga,
        related: [
          { brand: 'lenovo', slug: 'thinkpad-business' },
          { brand: 'microsoft', slug: 'surface-pro-go' },
        ],
      },
      {
        slug: 'legion-thinkcentre',
        title: 'Legion Gaming & ThinkCentre Desktops',
        description: 'Legion gaming towers and ThinkCentre desktops for mission-critical performance.',
        overview:
          'Coldfront-cooled Legion towers for gamers and modular ThinkCentre desktops with Premier Support for business workloads.',
        features: ['RTX graphics', 'Coldfront cooling', 'Tool-less serviceability'],
        specs: { FormFactors: 'Tower / Tiny', Manageability: 'vPro / ThinkShield', Support: 'Premier Support' },
        image: laptopImages.lenovo.models.legion,
        related: [
          { brand: 'lenovo', slug: 'thinkpad-business' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
    ],
  },
  {
    key: 'asus',
    logo: laptopImages.asus.logo,
    hero: laptopImages.asus.hero,
    name: 'ASUS',
    blurb: 'ROG, TUF gaming, ZenBook and VivoBook ultrabooks plus ExpertCenter mini PCs.',
    highlights: ['ZenBook & VivoBook ultrabooks', 'ROG/TUF gaming laptops', 'ExpertCenter mini PCs'],
    industries: ['Gaming', 'Creators', 'SMB'],
    preview: laptopImages.asus.models.zenbookVivobook,
    models: [
      {
        slug: 'zenbook-vivobook',
        title: 'ZenBook & VivoBook Laptops',
        description: 'Portable ultrabooks with OLED displays and ErgoLift designs.',
        overview:
          'Lightweight notebooks delivering ScreenPad and NumberPad innovations, Wi-Fi 6E and adaptive noise-cancelation for remote work.',
        features: ['OLED displays', 'ScreenPad / NumberPad', 'ErgoLift hinge'],
        specs: { Sizes: '13"–16"', Weight: '1.1–1.6 kg', Battery: 'Fast charge 60%/49 min' },
        image: laptopImages.asus.models.zenbookVivobook,
        related: [
          { brand: 'asus', slug: 'rog-tuf-gaming' },
          { brand: 'asus', slug: 'expertcenter-mini' },
        ],
      },
      {
        slug: 'rog-tuf-gaming',
        title: 'ROG & TUF Gaming Systems',
        description: 'High-refresh gaming laptops and desktops with Armoury Crate control.',
        overview:
          'ROG and TUF portfolios with liquid metal cooling, MUX switches and military-grade durability for esports programs.',
        features: ['Liquid metal cooling', 'MUX switch', 'Aura Sync RGB'],
        specs: { Displays: '165–240Hz', GPUs: 'RTX 40 series', Certification: 'MIL-STD-810H' },
        image: laptopImages.asus.models.rogTuf,
        related: [
          { brand: 'asus', slug: 'zenbook-vivobook' },
          { brand: 'msi', slug: 'raider-stealth' },
        ],
      },
      {
        slug: 'expertcenter-mini',
        title: 'ExpertCenter Mini PCs',
        description: 'Compact desktops for front-of-house, retail and signage.',
        overview:
          'Mini PCs with dual storage, TPM 2.0 security and VESA mounting to deploy in tight spaces.',
        features: ['1-liter chassis', 'Dual storage bays', 'TPM 2.0 security'],
        specs: { Volume: '<1L', Mounting: 'VESA-ready', Ports: 'Wi-Fi 6, DisplayPort, HDMI' },
        image: laptopImages.asus.models.expertCenter,
        related: [
          { brand: 'asus', slug: 'zenbook-vivobook' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
    ],
  },
  {
    key: 'acer',
    logo: laptopImages.acer.logo,
    hero: laptopImages.acer.hero,
    name: 'Acer',
    blurb: 'Aspire and Swift productivity laptops, Predator gaming rigs and Veriton desktops.',
    highlights: ['Aspire & Swift laptops', 'Predator gaming systems', 'Veriton desktops & AiO'],
    industries: ['Education', 'Retail', 'Gaming'],
    preview: laptopImages.acer.models.aspireSwift,
    models: [
      {
        slug: 'aspire-swift',
        title: 'Aspire & Swift Laptops',
        description: 'Value-packed productivity and thin-and-light notebooks.',
        overview:
          'Balanced systems with Wi-Fi 6 connectivity, BlueLightShield displays and ergonomic hinges for everyday productivity.',
        features: ['Wi-Fi 6 connectivity', 'BlueLightShield technology', 'Backlit keyboards'],
        specs: { Sizes: '13"–17"', Battery: 'Up to 13 hrs', Security: 'Fingerprint / TPM' },
        image: laptopImages.acer.models.aspireSwift,
        related: [
          { brand: 'acer', slug: 'predator-gaming' },
          { brand: 'acer', slug: 'veriton-desktops' },
        ],
      },
      {
        slug: 'predator-gaming',
        title: 'Predator Gaming',
        description: 'Predator Helios laptops and Orion desktops for serious gamers.',
        overview:
          'Performance tuned hardware with AeroBlade 3D fans, RGB lighting and PredatorSense tuning for esports programs.',
        features: ['AeroBlade 3D cooling', 'High refresh displays', 'PredatorSense app'],
        specs: { GPUs: 'RTX 40 series', Cooling: 'Liquid / AeroBlade', Displays: '165–240Hz' },
        image: laptopImages.acer.models.predator,
        related: [
          { brand: 'acer', slug: 'aspire-swift' },
          { brand: 'msi', slug: 'raider-stealth' },
        ],
      },
      {
        slug: 'veriton-desktops',
        title: 'Veriton Desktops & All-in-Ones',
        description: 'Veriton desktop towers and all-in-ones for business and education labs.',
        overview:
          'Secure, manageable desktops featuring DASH/vPro support, tool-less access and long lifecycle availability.',
        features: ['Tool-less access', 'DASH/vPro manageability', 'Integrated TPM'],
        specs: { FormFactors: 'Mini / SFF / Tower / AiO', Support: 'Onsite NBD', Security: 'TPM / Cable lock' },
        image: laptopImages.acer.models.veriton,
        related: [
          { brand: 'acer', slug: 'aspire-swift' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
    ],
  },
  {
    key: 'msi',
    logo: laptopImages.msi.logo,
    hero: laptopImages.msi.hero,
    name: 'MSI',
    blurb: 'Gaming and creator laptops with CoolerBoost plus MEG and MPG desktops for performance teams.',
    highlights: ['Raider & Stealth gaming laptops', 'Creator Z & Prestige series', 'MEG & MPG desktops'],
    industries: ['Gaming', 'Animation', 'Esports'],
    preview: laptopImages.msi.models.raiderStealth,
    models: [
      {
        slug: 'raider-stealth',
        title: 'Raider & Stealth Gaming Laptops',
        description: 'High-refresh gaming notebooks with HDR displays and CoolerBoost 5.',
        overview:
          'Laptop platforms delivering desktop performance, panoramic Mystic Light bars and tuned audio for premium esports programs.',
        features: ['RTX 40 series', '240Hz displays', 'CoolerBoost 5'],
        specs: { Sizes: '15" / 17"', Battery: '99Wh', Lighting: 'Mystic Light RGB' },
        image: laptopImages.msi.models.raiderStealth,
        related: [
          { brand: 'msi', slug: 'creator-series' },
          { brand: 'asus', slug: 'rog-tuf-gaming' },
        ],
      },
      {
        slug: 'creator-series',
        title: 'Creator Z & Prestige Series',
        description: 'Color-accurate creator laptops with RTX Studio drivers.',
        overview:
          'True Pixel calibrated panels, pen support and studio drivers deliver reliable color for photographers and editors.',
        features: ['QHD+ True Pixel', 'RTX Studio drivers', 'MSI Pen support'],
        specs: { Color: 'Delta-E <2', Ports: 'Thunderbolt™ 4', Security: 'Fingerprint reader' },
        image: laptopImages.msi.models.creatorPrestige,
        related: [
          { brand: 'msi', slug: 'raider-stealth' },
          { brand: 'acer', slug: 'aspire-swift' },
        ],
      },
      {
        slug: 'meg-gaming-desktops',
        title: 'MEG & MPG Gaming Desktops',
        description: 'Modular desktops with custom cooling and RGB lighting.',
        overview:
          'Tower systems with tempered glass, liquid cooling and tool-less access for easy upgrades.',
        features: ['Custom liquid cooling', 'Tool-less chassis', 'Mystic Light control'],
        specs: { GPUs: 'NVIDIA RTX / AMD', Cooling: 'AIO liquid options', Support: '2-year warranty' },
        image: laptopImages.msi.models.megMpg,
        related: [
          { brand: 'msi', slug: 'raider-stealth' },
          { brand: 'dell', slug: 'optiplex-precision' },
        ],
      },
    ],
  },
  {
    key: 'microsoft',
    logo: laptopImages.microsoft.logo,
    hero: laptopImages.microsoft.hero,
    name: 'Microsoft',
    blurb: 'Surface Laptop, Surface Pro, Surface Studio and Surface Hub for modern workspaces.',
    highlights: ['Surface Laptop & Studio', 'Surface Pro & Go tablets', 'Surface Hub collaboration'],
    industries: ['Executives', 'Educators', 'Field teams'],
    preview: laptopImages.microsoft.models.surfaceLaptop,
    models: [
      {
        slug: 'surface-laptop',
        title: 'Surface Laptop & Laptop Studio',
        description: 'Premium clamshell and convertible devices with PixelSense touch.',
        overview:
          'Aluminium designs with LTE options, Windows Hello, and Thunderbolt™ 4 for leadership teams.',
        features: ['PixelSense touchscreens', 'Thunderbolt™ 4', 'Zero-touch deployment'],
        specs: { Sizes: '13.5" / 15"', Battery: 'Up to 18 hrs', Weight: '1.3 kg starting' },
        image: laptopImages.microsoft.models.surfaceLaptop,
        related: [
          { brand: 'microsoft', slug: 'surface-pro-go' },
          { brand: 'apple', slug: 'macbooks' },
        ],
      },
      {
        slug: 'surface-pro-go',
        title: 'Surface Pro & Go Tablets',
        description: '2-in-1 Surface tablets with detachable keyboards and pen support.',
        overview:
          'Ultra-portable devices with LTE/5G, Slim Pen 2 support and enterprise management for field teams.',
        features: ['Surface Slim Pen', 'Optional 5G', 'Kickstand flexibility'],
        specs: { Display: '13" PixelSense', Weight: '879 g', Battery: 'Up to 15.5 hrs' },
        image: laptopImages.microsoft.models.surfaceProGo,
        related: [
          { brand: 'microsoft', slug: 'surface-laptop' },
          { brand: 'microsoft', slug: 'surface-hub-studio' },
        ],
      },
      {
        slug: 'surface-hub-studio',
        title: 'Surface Hub & Studio',
        description: 'Interactive collaboration displays for meeting rooms and studios.',
        overview:
          'Large-format touch displays with far-field microphones, 4K cameras and Teams Rooms integration.',
        features: ['Interactive pen and touch', 'Teams Rooms certified', '4K camera & mic array'],
        specs: { Sizes: '50" / 55" / 85"', Audio: 'Far-field mic array', OS: 'Windows 11 / Teams Rooms' },
        image: laptopImages.microsoft.models.surfaceHubStudio,
        related: [
          { brand: 'microsoft', slug: 'surface-laptop' },
          { brand: 'microsoft', slug: 'surface-pro-go' },
        ],
      },
    ],
  },
];

const brandMap = Object.fromEntries(brands.map((brand) => [brand.key, brand]));

const buildCategoryBrands = () =>
  brands.map((brand) => ({
    slug: brand.key,
    name: brand.name,
    logo: brand.logo,
    banner: brand.logo,
    blurb: brand.blurb,
    highlights: brand.highlights,
    industries: brand.industries,
    preview: [{ name: brand.models[0].title, image: brand.models[0].image }],
    to: `/products/laptops-and-desktop-computers/${brand.key}`,
  }));

const buildBrandPages = () =>
  Object.fromEntries(
    brands.map((brand) => [
      brand.key,
      {
        hero: {
          title: `${brand.name} Laptops & Desktops`,
          description: brand.blurb,
          bg: brand.hero,
          breadcrumb: `Home / Products / Laptops & Desktops / ${brand.name}`,
          cta: { label: 'Explore Lineup', to: '/contact' },
        },
        keyBenefits: brand.highlights.map((item) => ({ icon: 'CheckCircle', title: item, desc: '' })),
        models: brand.models.map((model) => ({
          slug: model.slug,
          name: model.title,
          image: model.image,
          brief: model.description,
          features: model.features.slice(0, 3),
          to: `/products/laptops-and-desktop-computers/${brand.key}/${model.slug}`,
        })),
      },
    ]),
  );

const buildModelPages = () => {
  const pages = {};
  brands.forEach((brand) => {
    pages[brand.key] = {};
    brand.models.forEach((model) => {
      const relatedEntries = (model.related || []).map(({ brand: relBrand, slug }) => {
        const relBrandData = brandMap[relBrand];
        const relatedModel = relBrandData?.models.find((m) => m.slug === slug);
        return relatedModel
          ? {
              href: `/products/laptops-and-desktop-computers/${relBrand}/${slug}`,
              name: relatedModel.title,
              image: relatedModel.image,
            }
          : {
              href: `/products/laptops-and-desktop-computers/${relBrand}/${slug}`,
              name: slug.replace(/-/g, ' '),
              image: heroImage,
            };
      });

      pages[brand.key][model.slug] = {
        hero: {
          title: `${brand.name} ${model.title}`,
          description: model.description,
          bg: model.image,
          breadcrumb: `Home / Products / Laptops & Desktops / ${brand.name} / ${model.title}`,
          cta: { label: 'Get In Touch', to: '/contact' },
        },
        gallery: [model.image],
        overview: model.overview,
        features: model.features,
        specs: model.specs,
        downloads: [],
        related: relatedEntries,
      };
    });
  });
  return pages;
};

const categoryBrands = buildCategoryBrands();
const brandPages = buildBrandPages();
const modelPages = buildModelPages();

export default {
  slug: 'laptops-and-desktop-computers',
  title: 'Laptops & Desktop Computers',

  categoryPage: {
    hero: {
      title: 'Business Laptops & Desktops',
      description:
        'From ultra-portable notebooks to powerful workstations and all-in-one desktops. Imaged, enrolled and delivered ready-to-work.',
      bg: heroImage,
      breadcrumb: 'Home / Products / Laptops & Desktops',
      cta: { label: 'Talk to Sales', to: '/contact' },
    },
    overview: {
      heading: 'Choose the Right Form-Factor',
      icon: Laptop2,
      intro:
        'Standardize on secure, manageable devices with long battery life and warranty coverage suited for your teams.',
      bulletsLeft: [
        '13–16" ultrabooks & 2-in-1s',
        'Pro GPUs for CAD/AI',
        'MIL-STD durability',
        'Wi-Fi 6/6E & LTE/5G',
      ],
      bulletsRight: [
        'Windows 11 Pro / macOS',
        'Autopilot/Intune/ABM enroll',
        'Onsite/Next-Business-Day',
        'Asset tags & imaging',
      ],
      keyBenefits: [
        { icon: 'Shield', title: 'Security', desc: 'TPM, BitLocker & BIOS protections.' },
        { icon: 'BatteryFull', title: 'Endurance', desc: 'All-day battery with fast charge.' },
        { icon: 'Wrench', title: 'Manageability', desc: 'Autopilot/Intune & fleet tools.' },
      ],
    },
    brands: categoryBrands,
  },

  brandPages,
  modelPages,
};
