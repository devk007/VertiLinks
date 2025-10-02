import images from '../images';
import {
  AudioLines,
  LaptopMinimal,
  MicVocal,
  Projector,
  ScreenShare,
  TvMinimalPlay,
  UsersRound,
  Waves,
} from "lucide-react";

export default {
  slug: "audio-video-solutions",
  title: "Audio Video Solutions",
  categoryPage: {
    hero: {
      title: "Immersive Audio Video Experiences",
      description:
        "Deliver boardroom, classroom, and auditorium experiences with intuitive control and crystal-clear AV.",
      bg: images.home.about,
      breadcrumb: "Home / Solutions / Audio Video Solutions",
      cta: { label: "Plan My AV", to: "/contact" },
    },
    overview: {
      heading: "Unified Collaboration Stack",
      icon: TvMinimalPlay,
      intro:
        "Design and integrate conferencing, digital signage, and immersive audio tuned to each space.",
      bulletsLeft: [
        "Teams, Zoom, Google certified systems",
        "4K wireless presentation",
        "DSP-based audio tuning",
        "LED & projection blends",
      ],
      bulletsRight: [
        "Room automation & control",
        "Acoustic treatment planning",
        "AV over IP distribution",
        "Service & AMC packages",
      ],
      keyBenefits: [
        { icon: "ScreenShare", title: "Collaborative", desc: "One-touch meetings and wireless sharing." },
        { icon: "AudioLines", title: "Pristine Audio", desc: "DSP tuning removes echo and ensures clarity." },
        { icon: "Projector", title: "Impactful", desc: "LED walls and projection mapping impress every audience." },
      ],
    },
    brands: [
      {
        slug: "meeting-spaces",
        name: "Meeting Spaces",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Smart meeting rooms with intelligent video and touch control.",
        highlights: [
          "Certified codecs",
          "Occupancy sensors",
          "Wireless sharing",
        ],
        industries: ["Corporate", "Education"],
        to: "/solutions/audio-video-solutions/meeting-spaces",
      },
      {
        slug: "experience-centres",
        name: "Experience Centres",
        logo: images.products.hero,
        banner: images.home.about,
        blurb: "Large venues, signage, and immersive showrooms.",
        highlights: [
          "LED walls",
          "Adaptive audio",
          "Interactive content",
        ],
        industries: ["Retail", "Hospitality", "Government"],
        to: "/solutions/audio-video-solutions/experience-centres",
      },
    ],
  },
  brandPages: {
    "meeting-spaces": {
      hero: {
        title: "Smart Meeting Spaces",
        description: "Certified collaboration rooms with automation and analytics.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Audio Video Solutions / Meeting Spaces",
        cta: { label: "Compare Rooms", to: "/contact" },
      },
      keyBenefits: [
        { icon: "MicVocal", title: "Beamforming Audio", desc: "Ceiling array microphones capture every voice." },
        { icon: "LaptopMinimal", title: "Seamless Join", desc: "One-touch join with Teams, Zoom, and SIP bridging." },
        { icon: "ScreenShare", title: "Analytics", desc: "Utilization tracking and remote diagnostics." },
      ],
      models: [
        {
          slug: "huddle-room",
          name: "Huddle Room Kit",
          image: images.home.about,
          brief: "4-6 seats with all-in-one bar, wireless share, and scheduling panel.",
          features: [
            "All-in-one collaboration bar",
            "Wireless presentation",
            "Room scheduling",
          ],
          to: "/solutions/audio-video-solutions/meeting-spaces/huddle-room",
        },
        {
          slug: "boardroom",
          name: "Boardroom Kit",
          image: images.home.about,
          brief: "Premium audio, dual displays, and custom automation scripts.",
          features: [
            "Dual 4K displays",
            "DSP & beamforming",
            "Touch control",
          ],
          to: "/solutions/audio-video-solutions/meeting-spaces/boardroom",
        },
      ],
    },
    "experience-centres": {
      hero: {
        title: "Experience Centre AV",
        description: "Immersive audio and visuals for showrooms and auditoriums.",
        bg: images.home.about,
        breadcrumb: "Home / Solutions / Audio Video Solutions / Experience Centres",
      },
      keyBenefits: [
        { icon: "Projector", title: "Immersive", desc: "Projection mapping and LED walls create wow factor." },
        { icon: "Waves", title: "Precision Audio", desc: "Line arrays and DSP deliver even coverage." },
        { icon: "UsersRound", title: "Engaging", desc: "Interactive kiosks and signage capture attention." },
      ],
      models: [
        {
          slug: "auditorium",
          name: "Auditorium Pack",
          image: images.home.about,
          brief: "Complete stage audio, lighting control, and projection system.",
          features: [
            "Stage audio",
            "Lighting integration",
            "4K projection",
          ],
          to: "/solutions/audio-video-solutions/experience-centres/auditorium",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        {
          slug: "signage-network",
          name: "Signage Network",
          image: images.home.about,
          brief: "Centralized CMS for video walls and interactive displays.",
          features: [
            "Central CMS",
            "Interactive content",
            "Analytics",
          ],
          to: "/solutions/audio-video-solutions/experience-centres/signage-network",
        },
      ],
    },
  },

  modelPages: {
    "meeting-spaces": {
      "huddle-room": {
        hero: {
          title: "Huddle Room Kit",
          description: "All-in-one collaboration bar, wireless presentation, and scheduling for small rooms.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Audio Video Solutions / Meeting Spaces / Huddle Room",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Transform 4-6 seat rooms with a single collaboration bar, wireless presentation, and door scheduling panel.",
        features: [
          "All-in-one collaboration bar",
          "Wireless sharing",
          "Room scheduling display",
          "Auto framing camera",
        ],
        specs: {
          Capacity: "4-6 seats",
          Platforms: "Teams / Zoom",
          Audio: "Beamforming mics",
          Mounting: "Wall / display",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/audio-video-solutions/meeting-spaces/boardroom",
            name: "Boardroom Kit",
            image: images.home.about,
          },
        ],
      },
      boardroom: {
        hero: {
          title: "Boardroom Kit",
          description: "Premium audio, dual displays, and touch control for executive rooms.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Audio Video Solutions / Meeting Spaces / Boardroom",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Deliver a flagship boardroom with dual 4K displays, DSP tuned audio, and custom touch control scripts.",
        features: [
          "Dual 4K displays",
          "DSP & beamforming",
          "Touch control tablet",
          "Occupancy analytics",
        ],
        specs: {
          Capacity: "12-18 seats",
          Audio: "Ceiling array + DSP",
          Control: "Custom touch UI",
          Integration: "Lighting & shades",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/audio-video-solutions/meeting-spaces/huddle-room",
            name: "Huddle Room Kit",
            image: images.home.about,
          },
        ],
      },
    },
    "experience-centres": {
      auditorium: {
        hero: {
          title: "Auditorium Pack",
          description: "Stage audio, lighting integration, and projection for auditoriums.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Audio Video Solutions / Experience Centres / Auditorium",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Complete AVL solution including line-array audio, lighting control, and 4K projection with control automation.",
        features: [
          "Line-array audio",
          "Lighting console integration",
          "4K projection",
          "Stage monitoring",
        ],
        specs: {
          Audience: "Up to 800",
          Control: "Centralized AV",
          Projection: "Up to 20K lumens",
          Recording: "Multi-cam ready",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/audio-video-solutions/experience-centres/signage-network",
            name: "Signage Network",
            image: images.home.about,
          },
        ],
      },
      "signage-network": {
        hero: {
          title: "Signage Network",
          description: "Central CMS powering video walls and interactive signage.",
          bg: images.home.about,
          breadcrumb: "Home / Solutions / Audio Video Solutions / Experience Centres / Signage Network",
          cta: { label: "Get In Touch", to: "/contact" },
        },
        gallery: [images.home.about],
        overview:
          "Distribute content across video walls and kiosks with analytics and remote management.",
        features: [
          "Central CMS",
          "Interactive content",
          "Audience analytics",
          "Remote scheduling",
        ],
        specs: {
          Displays: "Video wall + kiosks",
          CMS: "Cloud or on-prem",
          Integration: "POS / CRM",
          Analytics: "Heatmaps & dwell",
        },
        downloads: [],
        related: [
          {
            href: "/solutions/audio-video-solutions/experience-centres/auditorium",
            name: "Auditorium Pack",
            image: images.home.about,
          },
        ],
      },
    },
  },
};
