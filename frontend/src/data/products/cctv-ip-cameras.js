// /data/cctv-ip-cameras.js
// Structure mirrors your laptops/desktops file, but here the top-level cards are brand+category sections
// Paths follow:
//   /products/cctv-ip-cameras
//   /products/cctv-ip-cameras/<sectionKey>
//   /products/cctv-ip-cameras/<sectionKey>/<modelSlug>

import images from '../images';
import { Camera } from 'lucide-react';

const camImages = images.products.cctvIpCameras || {};
const heroImage = camImages.hero || images.products.hero;

// -------------------------------
// Sections (brand + category cards)
// -------------------------------

const sections = [
  // ---------------- HIKVISION NETWORK CAMS ----------------
  {
    key: 'hkvision-network-cameras',
    logo: camImages.hikvision?.logo,
    hero: camImages.hikvision?.network?.hero || camImages.hikvision?.hero,
    name: 'Hikvision Network Cameras',
    blurb:
      'AI-enabled IP cameras for smart detection, panoramic coverage and 24/7 color imaging with durable SmartIP hardware.',
    highlights: ['AcuSense AI analytics', 'ColorVu 24/7 color', 'Panoramic & PT options'],
    industries: ['Enterprise', 'Retail', 'Campuses'],
    preview: camImages.hikvision?.logo,
    models: [
      {
        slug: 'pro-series-with-acusense',
        title: 'Pro Series with AcuSense',
        description: 'Smarter trespasser detection and deterrence using AI analytics.',
        overview:
          'Embedded deep-learning distinguishes people and vehicles to reduce false alarms. Supports strobe/siren on select models with easy setup like conventional IP cams.',
        features: ['Human/vehicle classification', 'Accurate perimeter alerts', 'Quick target search'],
        specs: { AI: 'AcuSense (edge)', Imaging: 'Up to 8 MP', Install: 'PoE, ONVIF' },
        image: camImages.hikvision?.network?.proAcuSense,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-all' },
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-colorvu' },
        ],
      },
      {
        slug: 'pro-series-all',
        title: 'Pro Series (All)',
        description: 'Smart features and imaging performance at a great value.',
        overview:
          'Balanced lineup offering strong WDR, noise reduction and efficient codecs. Ideal baseline for most IP deployments.',
        features: ['True WDR', 'H.265+', '3D DNR'],
        specs: { Resolutions: '2–8 MP', FormFactors: 'Bullet/Dome/Turret', Power: 'PoE' },
        image: camImages.hikvision?.network?.proAll,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-acusense' },
          { section: 'hkvision-network-cameras', slug: 'value-series' },
        ],
      },
      {
        slug: 'deepinview-series',
        title: 'DeepinView Series',
        description: 'Top-tier imagery with advanced AI capabilities.',
        overview:
          'Premium sensors and lenses deliver superior image quality; onboard deep-learning adds rich metadata for advanced search and analytics.',
        features: ['Advanced AI at edge', 'High-end optics', 'Rich metadata'],
        specs: { AI: 'Deep learning/NPU', Imaging: 'Premium sensors', Apps: 'Vertical analytics' },
        image: camImages.hikvision?.network?.deepinview,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-acusense' },
          { section: 'hkvision-network-cameras', slug: 'panoramic-series' },
        ],
      },
      {
        slug: 'special-series',
        title: 'Special Series',
        description: 'Reliable network cameras for specific environments.',
        overview:
          'Designed for demanding conditions—ruggedized, explosion-resistant or specialty form factors for industrial and mission-critical sites.',
        features: ['Rugged designs', 'Special housings', 'Extended temp ranges'],
        specs: { IP: 'High IP rating', Materials: 'Industrial-grade', Power: 'Flexible' },
        image: camImages.hikvision?.network?.special,
        related: [
          { section: 'hkvision-network-cameras', slug: 'solar-powered-series' },
          { section: 'hkvision-network-cameras', slug: 'value-series' },
        ],
      },
      {
        slug: 'solar-powered-series',
        title: 'Solar-powered Series',
        description: 'Performance where power and Ethernet cannot reach.',
        overview:
          'Solar + battery solutions deliver remote video with low consumption electronics and adaptive power management.',
        features: ['Solar + battery', 'Low-power design', 'Remote connectivity'],
        specs: { Link: '4G/LTE options', Autonomy: 'Optimized battery', Mount: 'Outdoor kits' },
        image: camImages.hikvision?.network?.solar,
        related: [
          { section: 'hkvision-network-cameras', slug: 'special-series' },
          { section: 'hkvision-network-cameras', slug: 'value-series' },
        ],
      },
      {
        slug: 'value-series',
        title: 'Value Series',
        description: 'Reliable protection that saves on budget.',
        overview:
          'Essential IP features and solid durability while keeping TCO low—perfect for scale-out deployments.',
        features: ['Cost-effective', 'Essential smart events', 'Durable builds'],
        specs: { Codec: 'H.265+', Night: 'IR/Low-light', Power: 'PoE' },
        image: camImages.hikvision?.network?.value,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-all' },
          { section: 'hkvision-network-cameras', slug: 'solar-powered-series' },
        ],
      },
      {
        slug: 'pro-series-with-colorvu',
        title: 'Pro Series with ColorVu',
        description: 'Clear details and vivid color around the clock.',
        overview:
          'Large F1.0 aperture, advanced sensors and Smart Hybrid Light maintain color detail in ultra-low light scenarios.',
        features: ['24/7 color', 'Smart Hybrid Light', 'Super confocal lens'],
        specs: { Aperture: 'F1.0', Lighting: 'Hybrid (warm/IR)', Imaging: 'Low-light color' },
        image: camImages.hikvision?.network?.colorvu,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-acusense' },
          { section: 'hkvision-network-cameras', slug: 'panoramic-series' },
        ],
      },
      {
        slug: 'panoramic-series',
        title: 'Panoramic Series',
        description: 'Wide coverage and complete situational awareness.',
        overview:
          'Multi-sensor and fisheye options provide 180°–360° scenes with dewarping and stitching for fewer blind spots.',
        features: ['180°/360° views', 'Dewarping', 'Stitched panoramas'],
        specs: { Sensors: 'Multi/lens arrays', Mount: 'Indoor/Outdoor', Analytics: 'Basic/AI' },
        image: camImages.hikvision?.network?.panoramic,
        related: [
          { section: 'hkvision-network-cameras', slug: 'deepinview-series' },
          { section: 'hkvision-network-cameras', slug: 'ultra-series-smartip' },
        ],
      },
      {
        slug: 'ultra-series-smartip',
        title: 'Ultra Series (SmartIP)',
        description: 'Durable hardware with expanded software capabilities.',
        overview:
          'SmartIP combines higher compute, better optics and flexible lighting modes with enterprise features and third-party app support.',
        features: ['SmartIP platform', 'Hybrid light modes', 'HEOP/AIOP apps'],
        specs: { AI: 'Advanced/extendable', Build: 'Premium', Codec: 'H.265+' },
        image: camImages.hikvision?.network?.ultraSmartip,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-colorvu' },
          { section: 'hkvision-network-cameras', slug: 'panoramic-series' },
        ],
      },
      {
        slug: 'wi-fi-series',
        title: 'Wi-Fi Series',
        description: 'Easy installation with stable, high-quality Wi-Fi video.',
        overview:
          'Wireless connectivity simplifies retrofit installs while maintaining secure streaming and management.',
        features: ['Dual-band Wi-Fi', 'Easy pairing', 'App/Portal management'],
        specs: { Power: 'DC/PoE alt (varies)', Security: 'WPA2/3', Use: 'Retrofits/Rentals' },
        image: camImages.hikvision?.network?.wifi,
        related: [
          { section: 'hkvision-network-cameras', slug: 'value-series' },
          { section: 'hkvision-network-cameras', slug: 'pt-series' },
        ],
      },
      {
        slug: 'pt-series',
        title: 'PT Series',
        description: 'Flexible coverage with motorized pan and tilt.',
        overview:
          'Remotely steerable cameras cover multiple zones with presets and guard tours, reducing device counts.',
        features: ['Remote PT', 'Presets/Patrols', 'Event tracking'],
        specs: { Control: 'Web/VMS', Integrations: 'ONVIF', Power: 'PoE' },
        image: camImages.hikvision?.network?.pt,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-acusense' },
          { section: 'hkvision-turbo-hd-cameras', slug: 'colorvu' },
        ],
      },
    ],
  },

  // ---------------- HIKVISION TURBO HD ----------------
  {
    key: 'hkvision-turbo-hd-cameras',
    logo: camImages.hikvision?.logo,
    hero: camImages.hikvision?.turbo?.hero || camImages.hikvision?.hero,
    name: 'Hikvision Turbo HD Cameras',
    blurb:
      'HD-over-coax cameras for easy retrofits—ColorVu for 24/7 color, PIR IoT models and Ultra/Pro performance tiers.',
    highlights: ['HD over coax', 'ColorVu 24/7 color', 'PIR IoT models'],
    industries: ['Hospitality', 'Education', 'SMB'],
    preview: camImages.hikvision?.logo,
    models: [
      {
        slug: 'colorvu',
        title: 'Turbo HD with ColorVu',
        description: 'Colorful imaging 24/7 in ultra-low-light scenarios.',
        overview:
          'F1.0 aperture and hybrid lighting maintain color detail on coax systems; ideal for dark alleys and lots.',
        features: ['F1.0 super aperture', 'Smart Hybrid Light', 'Low-light color'],
        specs: { Medium: 'HDCVI/TVI/AHD/CVBS (varies)', Install: 'Coax + DVR', Night: 'Color priority' },
        image: camImages.hikvision?.turbo?.colorvu,
        related: [
          { section: 'hkvision-network-cameras', slug: 'pro-series-with-colorvu' },
          { section: 'hkvision-turbo-hd-cameras', slug: 'pro-series' },
        ],
      },
      {
        slug: 'value-series',
        title: 'Value Series',
        description: 'Cost-effective Turbo HD with durable builds.',
        overview:
          'Reliable imaging and essential features for budget deployments, keeping legacy coax cabling.',
        features: ['Essential events', 'H.265 (via DVR)', 'Rugged housings'],
        specs: { Resolutions: '2–5 MP', IR: 'Up to 30–60 m', Power: '12V DC' },
        image: camImages.hikvision?.turbo?.value,
        related: [
          { section: 'hkvision-turbo-hd-cameras', slug: 'colorvu' },
          { section: 'hkvision-turbo-hd-cameras', slug: 'pro-series' },
        ],
      },
      {
        slug: 'iot-series',
        title: 'IoT (PIR) Series',
        description: 'Detect passive infrared (heat) for smarter alerts.',
        overview:
          'Built-in PIR sensors reduce false alarms and can drive light/sound deterrence when paired with DVR rules.',
        features: ['PIR sensor', 'Visual/audio alarms', 'Bullet/Dome options'],
        specs: { PIRRange: 'Up to ~11 m', Channels: 'Alarm I/O (varies)', Power: '12V DC' },
        image: camImages.hikvision?.turbo?.iot,
        related: [
          { section: 'hkvision-turbo-hd-cameras', slug: 'value-series' },
          { section: 'hkvision-turbo-hd-cameras', slug: 'pro-series' },
        ],
      },
      {
        slug: 'pro-series',
        title: 'Pro Series',
        description: 'UHD imaging and ultra low-light tech on coax.',
        overview:
          'Higher-end sensors with true WDR and long-range IR; motorized varifocal options for flexible FoV.',
        features: ['True WDR', '3D DNR', 'Motorized VF options'],
        specs: { IR: 'Up to 60–80 m', Enclosure: 'IP67', Lens: '2.8–12 mm (VF)' },
        image: camImages.hikvision?.turbo?.pro,
        related: [
          { section: 'hkvision-turbo-hd-cameras', slug: 'colorvu' },
          { section: 'hkvision-turbo-hd-cameras', slug: 'ultra-series' },
        ],
      },
      {
        slug: 'ultra-series',
        title: 'Ultra Series',
        description: 'Ultra-high-performance Turbo HD imaging.',
        overview:
          'Top-tier coax cameras for critical areas requiring high detail retention and advanced OSD controls.',
        features: ['Premium sensors', 'Advanced OSD', 'Long-range IR'],
        specs: { Use: 'Critical zones', Build: 'Heavy-duty', Night: 'Optimized IR' },
        image: camImages.hikvision?.turbo?.ultra,
        related: [
          { section: 'hkvision-turbo-hd-cameras', slug: 'pro-series' },
          { section: 'hkvision-network-cameras', slug: 'deepinview-series' },
        ],
      },
      {
        slug: 'webcam-series',
        title: 'WebCam Series',
        description: 'Up to 4K for conferencing, streaming and education.',
        overview:
          'Purpose-built models for content creation and classrooms—USB/HDMI outputs, mics and wide FoVs.',
        features: ['Up to 4K', 'Integrated audio', 'Wide FoV'],
        specs: { Output: 'USB/HDMI (varies)', Mount: 'Desk/Tripod', Audio: 'Built-in mic' },
        image: camImages.hikvision?.turbo?.webcam,
        related: [
          { section: 'hkvision-network-cameras', slug: 'panoramic-series' },
          { section: 'dahua-network-cameras', slug: 'wireless-series' },
        ],
      },
    ],
  },

  // ---------------- DAHUA NETWORK CAMS ----------------
  {
    key: 'dahua-network-cameras',
    logo: camImages.dahua?.logo,
    hero: camImages.dahua?.network?.hero || camImages.dahua?.hero,
    name: 'Dahua Network Cameras',
    blurb:
      'AI-first IP portfolio with WizMind (advanced analytics) and WizSense (efficient AI) across panoramic and specialty lines.',
    highlights: ['WizMind AI', 'WizSense efficiency', 'Panoramic coverage'],
    industries: ['Smart Cities', 'Logistics', 'Retail'],
    preview: camImages.dahua?.logo,
    models: [
      {
        slug: 'wizmind-panoramic-series',
        title: 'WizMind Panoramic Series',
        description: 'Multi-sensor panoramic IP cameras for wide-area coverage.',
        overview:
          'Stitched multi-lens views (180°/360°) reduce blind spots and camera counts while retaining detail.',
        features: ['Multi-sensor stitching', '360°/180° views', 'AI metadata'],
        specs: { AI: 'WizMind analytics', Mount: 'Indoor/Outdoor', Codec: 'H.265' },
        image: camImages.dahua?.network?.panoramic,
      },
      {
        slug: 'wizmind-8-series',
        title: 'WizMind 8 Series',
        description: 'Flagship AI cameras with premium imaging.',
        overview:
          'Highest compute and sensor tiers deliver advanced analytics, search and low-light performance.',
        features: ['Advanced AI/NPU', 'Premium optics', 'Extended analytics'],
        specs: { Role: 'Enterprise/critical', Night: 'Starlight/AI-ISP', Power: 'PoE/Hi-PoE' },
        image: camImages.dahua?.network?.wizmind8,
      },
      {
        slug: 'wizmind-7-series',
        title: 'WizMind 7 Series',
        description: 'High-performance AI cameras for demanding sites.',
        overview:
          'Robust AI at the edge with rich event sets and strong low-light imaging for outdoor campuses.',
        features: ['Edge AI', 'Perimeter protection', 'Metadata search'],
        specs: { Imaging: 'Low-light tuned', Enclosure: 'IP67/IK10', Codec: 'H.265+' },
        image: camImages.dahua?.network?.wizmind7,
      },
      {
        slug: 'wizmind-5-series',
        title: 'WizMind 5 Series',
        description: 'AI with innovative multi-sight perimeter protection.',
        overview:
          'Select models combine multiple lenses for long-distance detection with fewer devices.',
        features: ['Multi-lens designs', 'Perimeter AI', 'Target tracking'],
        specs: { Use: 'Perimeter/roads', Power: 'PoE', Integrations: 'VMS/ONVIF' },
        image: camImages.dahua?.network?.wizmind5,
      },
      {
        slug: 'special-series',
        title: 'Special Series',
        description: 'Rugged/specialty IP cameras for harsh environments.',
        overview:
          'Anti-corrosion coatings, special housings and extended temp operation for industrial deployments.',
        features: ['Ruggedized', 'Special housings', 'Wide temp range'],
        specs: { IP: 'High rating', Materials: 'Marine/industrial', Power: 'Flexible' },
        image: camImages.dahua?.network?.special,
      },
      {
        slug: 'wizsense-series',
        title: 'WizSense Series',
        description: 'Cost-effective AI with human/vehicle detection.',
        overview:
          'Practical edge AI reduces false alarms and speeds up footage review for SMB and campuses.',
        features: ['Human/vehicle filters', 'Smart search', 'Efficient storage'],
        specs: { Codec: 'H.265+', Power: 'PoE', Use: 'SMB/branch' },
        image: camImages.dahua?.network?.wizsense,
      },
      {
        slug: 'lite-series',
        title: 'Lite Series',
        description: 'Entry IP cameras with solid essentials.',
        overview:
          'Reliable imaging, smart events and robust housings at attractive price points.',
        features: ['Essential smart events', 'Starlight options', 'IP67 builds'],
        specs: { Resolutions: '2–8 MP', IR: 'Up to 30–60 m', Power: 'PoE' },
        image: camImages.dahua?.network?.lite,
      },
      {
        slug: 'wireless-series',
        title: 'Wireless Series',
        description: 'Wi-Fi enabled IP cameras for simplified installs.',
        overview:
          'Wireless connectivity keeps deployment quick where cabling is limited while maintaining secure streams.',
        features: ['Dual-band Wi-Fi', 'App setup', 'Compact designs'],
        specs: { Security: 'WPA2/3', Power: 'DC/PoE alt', Use: 'Retrofits' },
        image: camImages.dahua?.network?.wireless,
      },
    ],
  },

  // ---------------- DAHUA PT CAMS ----------------
  {
    key: 'dahua-pt-cameras',
    logo: camImages.dahua?.logo,
    hero: camImages.dahua?.pt?.hero || camImages.dahua?.hero,
    name: 'Dahua PT Cameras',
    blurb: 'Pan-Tilt IP/HDCVI cameras with Smart Dual Light and active deterrence options.',
    highlights: ['PT control', 'Smart Dual Light', 'Active deterrence'],
    industries: ['SMB', 'Warehouses', 'Entrances'],
    preview: camImages.dahua?.logo,
    models: [
      {
        slug: 'ip-pt-1-series',
        title: 'IP PT 1 Series',
        description: 'Entry IP PT with Smart Dual Light/Active Deterrence on select models.',
        overview:
          'Remote pan/tilt coverage for doors, aisles and yards; presets and app/VMS control.',
        features: ['Remote PT', 'Smart Dual Light', 'Active deterrence (select)'],
        specs: { Control: 'Web/VMS', Power: 'PoE/DC', Use: 'Small sites' },
        image: camImages.dahua?.pt?.ippt1,
      },
      {
        slug: 'ip-pt-2-series',
        title: 'IP PT 2 Series',
        description: 'Mid-tier IP PT with better sensors and optics.',
        overview:
          'Improved low-light, faster PT response and enhanced analytics for busier sites.',
        features: ['Enhanced imaging', 'Faster PT', 'More analytics'],
        specs: { Lens: 'Fixed/VF (varies)', Power: 'PoE', Enclosure: 'IP66/67' },
        image: camImages.dahua?.pt?.ippt2,
      },
      {
        slug: 'ip-pt-3-series',
        title: 'IP PT 3 Series',
        description: 'Higher-tier IP PT with advanced tracking options.',
        overview:
          'Adds smarter auto-tracking and better zoom/tilt performance for wide coverage.',
        features: ['Auto-tracking', 'Improved zoom', 'Preset patrols'],
        specs: { Zoom: 'Optical (varies)', Control: 'VMS/SDK', Power: 'PoE/Hi-PoE' },
        image: camImages.dahua?.pt?.ippt3,
      },
      {
        slug: 'hac-pt-series',
        title: 'HAC PT Series',
        description: 'HDCVI PT cameras for coax infrastructures with dual-light.',
        overview:
          'Pan/tilt on coax using existing DVRs; Smart Dual Light helps capture detail and deter intrusions.',
        features: ['HDCVI over coax', 'Smart Dual Light', 'PT control via DVR'],
        specs: { Power: '12V DC / PoC', IR: 'Dual-light', Install: 'Coax retrofit' },
        image: camImages.dahua?.pt?.hacpt,
      },
    ],
  },

  // ---------------- DAHUA THERMAL CAMS ----------------
  {
    key: 'dahua-thermal-cameras',
    logo: camImages.dahua?.logo,
    hero: camImages.dahua?.thermal?.hero || camImages.dahua?.hero,
    name: 'Dahua Thermal Cameras',
    blurb:
      'Thermal imaging portfolio for detection, thermography and specialty environments including explosion-proof options.',
    highlights: ['Thermography', 'Perimeter detection', 'Special housings'],
    industries: ['Industrial', 'Perimeter', 'Utilities'],
    preview: camImages.dahua?.logo,
    models: [
      { slug: 'eureka-series', title: 'Eureka Series', description: 'Entry thermal for detection and alerts.', overview: 'Cost-effective thermal devices for perimeter and equipment monitoring.', features: ['Thermal detection', 'Smart alerts', 'Outdoor-ready'], specs: { Use: 'Perimeter/utility', Output: 'Thermal + visible (varies)' }, image: camImages.dahua?.thermal?.eureka },
      { slug: 'anti-corrosion-series', title: 'Anti-Corrosion Series', description: 'Marine/chemical resistant housings.', overview: 'Special materials and coatings resist harsh, corrosive atmospheres.', features: ['Anti-corrosion build', 'Rugged housing', 'Wide temp range'], specs: { Materials: 'Marine-grade', IP: 'High rating' }, image: camImages.dahua?.thermal?.antiCorrosion },
      { slug: 'explosion-proof-series', title: 'Explosion-proof Series', description: 'ATEX-style housings for hazardous zones.', overview: 'Special enclosures isolate ignition sources for safety compliance.', features: ['Explosion-proof housings', 'Industrial mounts', 'Safety compliance'], specs: { Zones: 'Hazardous areas', Certs: 'Regional/ATEX style' }, image: camImages.dahua?.thermal?.explosionProof },
      { slug: 'lite-series', title: 'Lite Series', description: 'Practical thermal features at value pricing.', overview: 'Essential thermal imaging for SMB perimeter and equipment checks.', features: ['Essential thermal', 'Smart events', 'IP67'], specs: { Lens: 'Fixed options', Output: 'Thermal stream' }, image: camImages.dahua?.thermal?.lite },
      { slug: 'pro-series', title: 'Pro Series', description: 'Higher accuracy thermography and analytics.', overview: 'Enhanced sensors and calibration enable more precise temperature measurement.', features: ['Higher accuracy', 'Advanced analytics', 'Better optics'], specs: { Thermography: 'Enhanced', Integrations: 'VMS/SDK' }, image: camImages.dahua?.thermal?.pro },
      { slug: 'ultra-series', title: 'Ultra Series', description: 'Top-tier thermal imaging performance.', overview: 'Maximum sensitivity and build quality for critical infrastructure.', features: ['Premium sensors', 'Long-range lenses', 'Rugged builds'], specs: { Range: 'Long-range', Power: 'PoE/AC (varies)' }, image: camImages.dahua?.thermal?.ultra },
      { slug: 'module-series', title: 'Module Series', description: 'Thermal camera modules for OEM/integration.', overview: 'Compact modules integrate into custom systems and devices.', features: ['Compact modules', 'SDK support', 'Flexible I/O'], specs: { Interface: 'MIPI/USB (varies)', SDK: 'Available' }, image: camImages.dahua?.thermal?.module },
      { slug: 'thermography-series', title: 'Thermography Series', description: 'Industrial temperature measurement solutions.', overview: 'Designed for precise temperature monitoring and alarming in production lines.', features: ['High accuracy', 'Alarm rules', 'Industrial integration'], specs: { Accuracy: 'High', Outputs: 'Alarms/Analytics' }, image: camImages.dahua?.thermal?.thermography },
    ],
  },

  // ---------------- DAHUA NETWORK RECORDERS ----------------
  {
    key: 'dahua-network-recorders',
    logo: camImages.dahua?.logo,
    hero: camImages.dahua?.nvrs?.hero || camImages.dahua?.hero,
    name: 'Dahua Network Recorders',
    blurb:
      'AI-ready NVR lineup from Lite to WizSense/WizMind with SSD and special-purpose options plus Wi-Fi kits.',
    highlights: ['Edge AI on NVR', 'High throughput', 'SSD/Kit options'],
    industries: ['SMB', 'Retail', 'Multi-site'],
    preview: camImages.dahua?.logo,
    models: [
      { slug: 'wizmind-series', title: 'WizMind Series', description: 'Enterprise NVRs with advanced AI support.', overview: 'Higher channel counts, AI analytics ingestion and powerful decoding.', features: ['High throughput', 'AI metadata', 'Redundancy options'], specs: { Channels: 'High density', RAID: 'Options', AI: 'WizMind ingest' }, image: camImages.dahua?.nvrs?.wizmind },
      { slug: 'wizsense-series', title: 'WizSense Series', description: 'Efficient AI NVRs for SMB and branches.', overview: 'Balanced performance with human/vehicle analytics and smart search.', features: ['Human/vehicle filters', 'Smart search', 'Efficient storage'], specs: { Channels: 'Mid-range', Codec: 'H.265+', Storage: 'Multi-bay' }, image: camImages.dahua?.nvrs?.wizsense },
      { slug: 'lite-series', title: 'Lite Series', description: 'Entry NVRs with the essentials.', overview: 'Reliable recording and remote viewing with straightforward setup.', features: ['Plug-and-play', 'Mobile apps', 'Essential features'], specs: { Channels: '8/16/32', PoE: 'Optional PoE ports', Remote: 'P2P' }, image: camImages.dahua?.nvrs?.lite },
      { slug: 'ssd-nvr', title: 'SSD NVR', description: 'Solid-state NVRs for vibration-prone sites.', overview: 'SSD storage improves reliability and performance in harsh environments.', features: ['SSD bays', 'Fast I/O', 'Rugged build'], specs: { Storage: 'SSD only', Use: 'Transport/industrial' }, image: camImages.dahua?.nvrs?.ssd },
      { slug: 'special-series', title: 'Special Series', description: 'Recorders for niche or rugged use cases.', overview: 'Special housings and I/O for edge/industrial or extended temp ranges.', features: ['Rugged enclosure', 'Special I/O', 'Wide temp'], specs: { Power: 'Flexible', I_O: 'Custom options' }, image: camImages.dahua?.nvrs?.special },
      { slug: 'wifi-kit', title: 'Wi-Fi Kit', description: 'All-in-one NVR + Wi-Fi camera kits.', overview: 'Fast startup for small premises—auto pairing with app onboarding.', features: ['Auto pairing', 'Mobile app', 'Compact NVR'], specs: { Channels: 'Kit-dependent', Radio: 'Wi-Fi', Install: 'DIY-friendly' }, image: camImages.dahua?.nvrs?.wifiKit },
    ],
  },

  // ---------------- DAHUA PTZ CAMS ----------------
  {
    key: 'dahua-ptz-cameras',
    logo: camImages.dahua?.logo,
    hero: camImages.dahua?.ptz?.hero || camImages.dahua?.hero,
    name: 'Dahua PTZ Cameras',
    blurb:
      'Long-range optical zoom with fast pan/tilt performance—X-Spans, WizMind/WizSense PTZs, HDCVI PTZ, positioning systems and wireless models.',
    highlights: ['Long-range zoom', 'Fast PTZ', 'Positioning systems'],
    industries: ['Airports', 'Stadiums', 'Perimeter'],
    preview: camImages.dahua?.logo,
    models: [
      { slug: 'x-spans-series', title: 'X-Spans Series', description: 'PTZ with extended field coverage.', overview: 'Wider coverage/overlap reduction with multi-view or extended zoom range.', features: ['Extended coverage', 'High zoom', 'Fast PTZ'], specs: { Zoom: 'High optical', Speed: 'Fast PTZ', Mount: 'Outdoor/indoor' }, image: camImages.dahua?.ptz?.xspans },
      { slug: 'wizmind-series', title: 'WizMind Series', description: 'AI-enabled PTZ for advanced tracking.', overview: 'Edge AI assists in auto-tracking, target classification and smart patrols.', features: ['AI auto-tracking', 'Smart patrols', 'Low-light PTZ'], specs: { AI: 'WizMind', Codec: 'H.265', Power: 'Hi-PoE/AC' }, image: camImages.dahua?.ptz?.wizmind },
      { slug: 'wizsense-series', title: 'WizSense Series', description: 'Efficient AI PTZ for SMB.', overview: 'Practical analytics with solid zoom and PTZ speed at attractive TCO.', features: ['Human/vehicle filters', 'Smart search', 'Good zoom'], specs: { Zoom: 'Optical (varies)', Power: 'PoE/Hi-PoE', Use: 'SMB/branch' }, image: camImages.dahua?.ptz?.wizsense },
      { slug: 'hdcvi-ptz-cameras', title: 'HDCVI PTZ Cameras', description: 'Coax-based PTZ domes for DVR systems.', overview: 'Bring PTZ control to legacy coax sites with long-range IR and OSD control.', features: ['HDCVI over coax', 'OSD/PTZ via DVR', 'Long-range IR'], specs: { Cabling: 'Coax', Power: '12V DC/24V AC', Control: 'DVR/UTC' }, image: camImages.dahua?.ptz?.hdcvi },
      { slug: 'positioning-systems', title: 'Positioning Systems', description: 'Rugged PTZ positioners for harsh sites.', overview: 'Heavy-duty housings and high torque for industrial and outdoor extremes.', features: ['Heavy-duty builds', 'High torque', 'Long-life motors'], specs: { IP: 'High rating', Materials: 'Industrial', Mount: 'Custom' }, image: camImages.dahua?.ptz?.positioning },
      { slug: 'wireless-series', title: 'Wireless Series', description: 'PTZ with integrated wireless links.', overview: 'Wireless connectivity eases deployment where fiber/copper is hard to run.', features: ['Integrated wireless', 'App/VMS control', 'Quick setup'], specs: { Radio: 'Dual-band/bridge', Power: 'PoE/AC', Range: 'Site-dependent' }, image: camImages.dahua?.ptz?.wireless },
    ],
  },
];

// Map for quick lookups
const sectionMap = Object.fromEntries(sections.map((s) => [s.key, s]));

// -------------------------------
// List view (category cards)
// -------------------------------
const buildCategoryCards = () =>
  sections.map((section) => ({
    slug: section.key,
    name: section.name,
    logo: section.logo,
    banner: section.logo,
    blurb: section.blurb,
    highlights: section.highlights,
    industries: section.industries,
    preview: [{ name: section.models[0].title, image: section.models[0].image }],
    to: `/products/cctv-ip-cameras/${section.key}`,
  }));

// -------------------------------
// Section pages (grid of models under a section)
// -------------------------------
const buildSectionPages = () =>
  Object.fromEntries(
    sections.map((section) => [
      section.key,
      {
        hero: {
          title: section.name,
          description: section.blurb,
          bg: section.hero || heroImage,
          breadcrumb: `Home / Products / CCTV & IP Cameras / ${section.name}`,
          cta: { label: 'Explore Lineup', to: '/contact' },
        },
        keyBenefits: section.highlights.map((item) => ({ icon: 'CheckCircle', title: item, desc: '' })),
        models: section.models.map((model) => ({
          slug: model.slug,
          name: model.title,
          image: model.image,
          brief: model.description,
          features: (model.features || []).slice(0, 3),
          to: `/products/cctv-ip-cameras/${section.key}/${model.slug}`,
        })),
      },
    ]),
  );

// -------------------------------
// Model pages (detail for each series)
// -------------------------------
const buildModelPages = () => {
  const pages = {};
  sections.forEach((section) => {
    pages[section.key] = {};
    section.models.forEach((model) => {
      const relatedEntries = (model.related || []).map(({ section: relSectionKey, slug }) => {
        const relSection = sectionMap[relSectionKey];
        const relatedModel = relSection?.models.find((m) => m.slug === slug);
        return relatedModel
          ? {
              href: `/products/cctv-ip-cameras/${relSectionKey}/${slug}`,
              name: relatedModel.title,
              image: relatedModel.image,
            }
          : {
              href: `/products/cctv-ip-cameras/${relSectionKey}/${slug}`,
              name: slug.replace(/-/g, ' '),
              image: heroImage,
            };
      });
      const fallbackRelated = relatedEntries.length
        ? relatedEntries
        : section.models
            .filter((m) => m.slug !== model.slug)
            .slice(0, 2)
            .map((fallback) => ({
              href: `/products/cctv-ip-cameras/${section.key}/${fallback.slug}`,
              name: fallback.title,
              image: fallback.image,
            }));

      pages[section.key][model.slug] = {
        hero: {
          title: `${section.name} — ${model.title}`,
          description: model.description,
          bg: model.image || section.hero || heroImage,
          breadcrumb: `Home / Products / CCTV & IP Cameras / ${section.name} / ${model.title}`,
          cta: { label: 'Get In Touch', to: '/contact' },
        },
        gallery: [model.image || section.hero || heroImage],
        overview: model.overview,
        features: model.features || [],
        specs: model.specs || {},
        downloads: model.downloads || [],
        related: fallbackRelated,
      };
    });
  });
  return pages;
};

// Build data blocks
const categoryCards = buildCategoryCards();
const sectionPages = buildSectionPages();
const modelPages = buildModelPages();

export default {
  slug: 'cctv-ip-cameras',
  title: 'CCTV & IP Cameras',

  categoryPage: {
    hero: {
      title: 'CCTV & IP Cameras',
      description:
        'From AI-enabled IP cameras and panoramic coverage to coax retrofits, thermal imaging and high-throughput recorders.',
      bg: heroImage,
      breadcrumb: 'Home / Products / CCTV & IP Cameras',
      cta: { label: 'Talk to Sales', to: '/contact' },
    },
    overview: {
      heading: 'Choose the Right Surveillance Stack',
      icon: Camera,
      intro:
        'Standardize on modern imaging with AI analytics and robust storage. Mix IP, Turbo HD, PT/PTZ and thermal to meet site needs.',
      bulletsLeft: ['AcuSense & WizMind AI', '24/7 ColorVu imaging', 'Panoramic & PT/PTZ'],
      bulletsRight: ['H.265+/Smart codecs', 'PoE/Hi-PoE & Wi-Fi', 'ONVIF & VMS integrations'],
      keyBenefits: [
        { icon: 'Shield', title: 'Security', desc: 'Accurate AI detection and deterrence.' },
        { icon: 'Expand', title: 'Coverage', desc: 'Panoramic and PT/PTZ for wide areas.' },
        { icon: 'HardDrive', title: 'Retention', desc: 'High-throughput NVRs & RAID options.' },
      ],
    },
    // Top-level grid cards (these are your brand+category sections)
    brands: categoryCards,
  },

  // Section pages (each card above opens to one of these)
  brandPages: sectionPages,

  // Series detail pages
  modelPages,
};
