import images from '../images';

const dmAssets = images.solutions.digitalMarketing;
const dmHero = dmAssets.hero;
const dmLogos = dmAssets.logos || {};
const dmImages = dmAssets.images || {};

const brandTitles = {
  'strategy-planning': 'Strategy & Planning',
  'search-marketing': 'Search Marketing',
  'paid-media': 'Paid Advertising / Paid Media',
  'content-marketing': 'Content Marketing',
  'social-media': 'Social Media Marketing',
  'direct-messaging': 'Email & SMS Marketing',
  'web-ux': 'Web & UX / UI Services',
  'ecommerce-marketplace': 'E-commerce & Marketplace Marketing',
};

const brandDescriptions = {
  'strategy-planning': 'Roadmaps, KPI frameworks, and competitor intelligence align teams before activation.',
  'search-marketing': 'SEO and SEM operations covering technical, on-page, off-page, local, and paid search.',
  'paid-media': 'PPC, display, remarketing, and paid social campaigns optimized for ROAS.',
  'content-marketing': 'Editorial, multimedia, and copywriting programs fueling awareness and demand.',
  'social-media': 'Organic calendars, influencer collaborations, and paid social amplification.',
  'direct-messaging': 'Lifecycle email, SMS, and WhatsApp automation driving retention.',
  'web-ux': 'Responsive web builds, landing page optimization, and UX/UI improvements supporting marketing programs.',
  'ecommerce-marketplace': 'Shopping ads, marketplace optimization, and remarketing journeys for ecommerce brands.',
};

const brandBenefits = {
  'strategy-planning': [
    { icon: 'ClipboardList', title: 'Roadmaps', desc: 'Channel playbooks with KPIs, timelines, and budgets.' },
    { icon: 'Target', title: 'Audiences', desc: 'Personas and journeys to align creative and offers.' },
    { icon: 'BarChart3', title: 'Benchmarking', desc: 'Share-of-voice and competitor intelligence.' },
  ],
  'search-marketing': [
    { icon: 'Search', title: 'SEO', desc: 'Technical, on-page/off-page, and local SEO workflows.' },
    { icon: 'Megaphone', title: 'SEM', desc: 'Paid search programs across Google Ads and Microsoft Ads.' },
    { icon: 'Layers3', title: 'Unified', desc: 'Shared keywords and landing pages across SEO and SEM.' },
  ],
  'paid-media': [
    { icon: 'DollarSign', title: 'ROAS', desc: 'Bid strategies and pacing tied to ROAS and CPL.' },
    { icon: 'MonitorSmartphone', title: 'Cross-Channel', desc: 'PPC, display, and paid social within one pod.' },
    { icon: 'Activity', title: 'Optimization', desc: 'Creative and audience testing with attribution.' },
  ],
  'content-marketing': [
    { icon: 'PenSquare', title: 'Editorial', desc: 'Blogging, articles, and infographics tied to buyer journeys.' },
    { icon: 'PlayCircle', title: 'Multimedia', desc: 'Video content, webinars, and podcasts.' },
    { icon: 'Sparkles', title: 'Copywriting', desc: 'Conversion copy for services and product pages.' },
  ],
  'social-media': [
    { icon: 'Share2', title: 'Organic', desc: 'Publishing cadence, community management, and analytics.' },
    { icon: 'Users', title: 'Influencer', desc: 'Influencer sourcing, briefs, and contracting.' },
    { icon: 'MonitorSmartphone', title: 'Paid', desc: 'Paid social campaigns across major networks.' },
  ],
  'direct-messaging': [
    { icon: 'Mail', title: 'Email', desc: 'Newsletter, drip, and promotional email journeys.' },
    { icon: 'BellRing', title: 'SMS / WhatsApp', desc: 'Region-compliant SMS and WhatsApp messaging.' },
    { icon: 'Layers3', title: 'Automation', desc: 'Lifecycle flows, lead scoring, and triggered touchpoints.' },
  ],
  'web-ux': [
    { icon: 'MonitorSmartphone', title: 'Responsive', desc: 'Mobile-first experiences and microsites.' },
    { icon: 'Activity', title: 'Optimization', desc: 'Landing page CRO and experimentation.' },
    { icon: 'Globe', title: 'Localization', desc: 'Multi-language and accessibility support.' },
  ],
  'ecommerce-marketplace': [
    { icon: 'ShoppingCart', title: 'Shopping Ads', desc: 'Product feed optimization and shopping campaigns.' },
    { icon: 'BarChart3', title: 'Marketplace', desc: 'Marketplace ranking, reviews, and ads.' },
    { icon: 'DollarSign', title: 'Remarketing', desc: 'Cart abandonment and lifecycle automation.' },
  ],
};

const getImage = (key) => (key ? dmImages[key] || dmHero : dmHero);

const brandData = {
  'strategy-planning': {
    logo: dmLogos.strategyPlanning,
    models: [
      {
        slug: 'digital-roadmap',
        title: 'Digital Marketing Strategy / Roadmap',
        description: 'Workshops and roadmap covering 6-12 month omnichannel plans.',
        overview:
          'Align leadership and channel owners on KPIs, budgets, personas, and sequencing before launching digital campaigns.',
        features: ['Executive workshops', 'Channel blueprints', 'Budget & KPI plan', 'Dashboard framework'],
        specs: { Duration: '3-4 weeks', Deliverables: 'Strategy deck', Personas: 'Up to 6', KPIs: 'CPL / ROAS / pipeline' },
        imageKey: 'strategyRoadmap',
        related: [
          { brand: 'strategy-planning', slug: 'competitor-analysis' },
          { brand: 'search-marketing', slug: 'seo-program' },
        ],
      },
      {
        slug: 'competitor-analysis',
        title: 'Competitor Analysis',
        description: 'Benchmark competitors, share-of-voice, and positioning opportunities.',
        overview:
          'Audit messaging, offers, media, and share-of-voice to prioritize opportunity areas and channel investments.',
        features: ['Market scan', 'SOV dashboards', 'Messaging audit', 'Opportunity roadmap'],
        specs: { Markets: 'Up to 4', Competitors: '10', Deliverable: 'Insights report', Workshop: 'Playbook session' },
        imageKey: 'strategyCompetitor',
        related: [
          { brand: 'strategy-planning', slug: 'digital-roadmap' },
          { brand: 'paid-media', slug: 'social-media-ads' },
        ],
      },
    ],
  },
  'search-marketing': {
    logo: dmLogos.searchMarketing,
    models: [
      {
        slug: 'seo-program',
        title: 'Search Engine Optimization (SEO)',
        description: 'Technical, on-page, off-page, and local SEO operations.',
        overview:
          'Deliver audits, keyword clusters, on-page refresh, outreach, and localized landing pages to grow organic conversions.',
        features: ['Technical & CWV fixes', 'On-page refresh', 'Link outreach', 'Local landing pages'],
        specs: { Keywords: '40+', Locales: 'Up to 25', Outreach: '6 placements/mo', Reporting: 'GA4 + GSC' },
        imageKey: 'seoProgram',
        related: [
          { brand: 'search-marketing', slug: 'sem' },
          { brand: 'content-marketing', slug: 'blogging-articles' },
        ],
      },
      {
        slug: 'sem',
        title: 'SEM / Paid Search',
        description: 'Google Ads and Microsoft Ads campaign management.',
        overview:
          'Structure campaigns, refine bids, test creative, and produce attribution reporting for paid search.',
        features: ['Campaign builds', 'Bid automation', 'Audience layering', 'Conversion tracking'],
        specs: { Platforms: 'Google & Bing', Optimizations: 'Weekly', Reporting: 'Bi-weekly', Experiments: 'Always-on' },
        imageKey: 'semProgram',
        related: [
          { brand: 'search-marketing', slug: 'seo-program' },
          { brand: 'paid-media', slug: 'ppc-advertising' },
        ],
      },
    ],
  },
  'paid-media': {
    logo: dmLogos.paidMedia,
    models: [
      {
        slug: 'ppc-advertising',
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Search PPC setup with weekly optimization.',
        overview:
          'Launch PPC campaigns, sculpt keywords, and manage bids to drive efficient CPL and revenue.',
        features: ['Keyword segmentation', 'Ad copy testing', 'Bid automation', 'Weekly reporting'],
        specs: { Channels: 'Google/Bing', Optimizations: 'Weekly', Reporting: 'Bi-weekly', Experiments: 'Split tests' },
        imageKey: 'ppcEssentials',
        related: [
          { brand: 'paid-media', slug: 'display-remarketing' },
          { brand: 'paid-media', slug: 'social-media-ads' },
        ],
      },
      {
        slug: 'display-remarketing',
        title: 'Display Ads & Remarketing',
        description: 'Banner, video, and remarketing journeys across display networks.',
        overview:
          'Design creatives, build audiences, and optimize placements for awareness and nurture.',
        features: ['Creative templates', 'Audience segmentation', 'Dynamic remarketing', 'Attribution dashboards'],
        specs: { Channels: 'GDN/DV360', Audiences: '1P & 3P', Creative: 'Quarterly refresh', Reporting: 'Monthly' },
        imageKey: 'displayRemarketing',
        related: [
          { brand: 'paid-media', slug: 'ppc-advertising' },
          { brand: 'ecommerce-marketplace', slug: 'cart-remarketing' },
        ],
      },
      {
        slug: 'social-media-ads',
        title: 'Social Media Ads',
        description: 'Paid social advertising across Meta, LinkedIn, TikTok, and more.',
        overview:
          'Create audience matrices, iterate creatives, and optimize paid social funnels for acquisition and retention.',
        features: ['Audience frameworks', 'Creative variants', 'Funnel reporting', 'Attribution'],
        specs: { Platforms: 'Meta/LinkedIn/TikTok', Optimizations: 'Weekly', Reporting: 'Live dashboard', Experiments: 'Always-on' },
        imageKey: 'socialMediaAds',
        related: [
          { brand: 'social-media', slug: 'paid-social' },
          { brand: 'direct-messaging', slug: 'newsletter-drip' },
        ],
      },
    ],
  },
  'content-marketing': {
    logo: dmLogos.contentMarketing,
    models: [
      {
        slug: 'blogging-articles',
        title: 'Blogging, Articles, Infographics',
        description: 'Editorial calendar and production supporting SEO and storytelling.',
        overview:
          'Research keywords, craft outlines, and deliver publish-ready articles with design assets.',
        features: ['Editorial calendar', 'SEO briefs', 'Infographic design', 'Distribution guidance'],
        specs: { Cadence: '4-6 assets/mo', Workflow: 'Editorial approvals', SEO: 'On-page', Reporting: 'Engagement' },
        imageKey: 'contentEngine',
        related: [
          { brand: 'content-marketing', slug: 'video-webinars' },
          { brand: 'social-media', slug: 'organic-social' },
        ],
      },
      {
        slug: 'video-webinars',
        title: 'Video Content, Webinars, Podcasts',
        description: 'Video and event storytelling for acquisition and retention.',
        overview:
          'Produce video series, webinars, and podcasts with promotion blueprints.',
        features: ['Video scripting', 'Webinar production', 'Podcast editing', 'Promotion kits'],
        specs: { Outputs: '2 videos + 1 webinar', Platforms: 'YouTube/LinkedIn', Promotion: 'Paid + organic', Reporting: 'View & engagement' },
        imageKey: 'multimediaLab',
        related: [
          { brand: 'content-marketing', slug: 'blogging-articles' },
          { brand: 'social-media', slug: 'influencer' },
        ],
      },
      {
        slug: 'copywriting',
        title: 'Copywriting & Content Development',
        description: 'Conversion-focused copy for service, product, and campaign pages.',
        overview:
          'Deliver messaging frameworks, landing page copy, and nurture assets tuned to personas.',
        features: ['Messaging framework', 'Landing page copy', 'Product storytelling', 'Enablement assets'],
        specs: { Assets: '6-8 pages', Revisions: '2', Timeline: '4-6 weeks', Delivery: 'CMS-ready' },
        imageKey: 'copywriting',
        related: [
          { brand: 'content-marketing', slug: 'blogging-articles' },
          { brand: 'web-ux', slug: 'ux-ui-improvements' },
        ],
      },
    ],
  },
  'social-media': {
    logo: dmLogos.socialMedia,
    models: [
      {
        slug: 'organic-social',
        title: 'Organic Social & Community',
        description: 'Publishing cadence, creative templates, and moderation.',
        overview:
          'Plan content calendars, manage communities, and share monthly insights across platforms.',
        features: ['Posting schedule', 'Creative templates', 'Community management', 'Analytics'],
        specs: { Platforms: 'Up to 4', Posts: '12-16/mo', SLA: 'Responses <4h', Reporting: 'Monthly' },
        imageKey: 'organicSocial',
        related: [
          { brand: 'social-media', slug: 'influencer' },
          { brand: 'social-media', slug: 'paid-social' },
        ],
      },
      {
        slug: 'influencer',
        title: 'Influencer Marketing & Collaborations',
        description: 'Influencer sourcing, briefs, and collaboration management.',
        overview:
          'Identify creators, manage contracts, and track performance for campaigns.',
        features: ['Influencer sourcing', 'Briefs & approvals', 'Content QA', 'Performance recap'],
        specs: { Influencers: '8-12/campaign', Timeline: '8-10 weeks', Reporting: 'Campaign wrap', Platforms: 'Meta/TikTok/YouTube' },
        imageKey: 'influencer',
        related: [
          { brand: 'social-media', slug: 'organic-social' },
          { brand: 'paid-media', slug: 'social-media-ads' },
        ],
      },
      {
        slug: 'paid-social',
        title: 'Paid Social Campaigns',
        description: 'Paid social campaign strategy with creative testing and attribution.',
        overview:
          'Deploy full-funnel paid social across platforms with iterative creative and audience testing.',
        features: ['Campaign setup', 'Audience testing', 'Creative iteration', 'Attribution'],
        specs: { Platforms: 'Meta/LinkedIn/TikTok', Optimizations: 'Weekly', Reporting: 'Live dashboard', Experiments: 'Always-on' },
        imageKey: 'paidSocial',
        related: [
          { brand: 'paid-media', slug: 'social-media-ads' },
          { brand: 'direct-messaging', slug: 'newsletter-drip' },
        ],
      },
    ],
  },
  'direct-messaging': {
    logo: dmLogos.directMessaging,
    models: [
      {
        slug: 'newsletter-drip',
        title: 'Newsletter & Drip Campaigns',
        description: 'Editorial calendar and automation for newsletters and nurture flows.',
        overview:
          'Build segments, drip journeys, creative, and analytics for lifecycle email.',
        features: ['Segmentation', 'Automation flows', 'Template library', 'Performance dashboards'],
        specs: { Platforms: 'HubSpot/Braze', Journeys: 'Up to 5', Segments: 'Up to 20', Reporting: 'Per send + monthly' },
        imageKey: 'newsletterDrip',
        related: [
          { brand: 'direct-messaging', slug: 'sms-whatsapp' },
          { brand: 'content-marketing', slug: 'copywriting' },
        ],
      },
      {
        slug: 'sms-whatsapp',
        title: 'SMS / WhatsApp Marketing',
        description: 'Compliant SMS and WhatsApp automation for promos and alerts.',
        overview:
          'Implement opt-ins, templates, and triggered flows for messaging channels.',
        features: ['Opt-in flows', 'Template management', 'Behavioral triggers', 'Compliance monitoring'],
        specs: { Regions: 'Global', Journeys: 'Up to 10', Reporting: 'Campaign dashboard', Integrations: 'CRM / MAP' },
        imageKey: 'smsWhatsapp',
        related: [
          { brand: 'direct-messaging', slug: 'newsletter-drip' },
          { brand: 'ecommerce-marketplace', slug: 'cart-remarketing' },
        ],
      },
    ],
  },
  'web-ux': {
    logo: dmLogos.webUx,
    models: [
      {
        slug: 'web-design-development',
        title: 'Website Design & Development',
        description: 'Responsive web builds supporting digital campaigns.',
        overview:
          'Deliver UX strategy, responsive UI, CMS configuration, and analytics tagging for campaign-ready websites.',
        features: ['UX workshops', 'Responsive build', 'CMS setup', 'Analytics tagging'],
        specs: { Pages: 'Up to 12', Timeline: '8-10 weeks', CMS: 'WordPress/headless', Delivery: 'Design system' },
        imageKey: 'webDesign',
        related: [
          { brand: 'web-ux', slug: 'landing-optimization' },
          { brand: 'web-ux', slug: 'ux-ui-improvements' },
        ],
      },
      {
        slug: 'landing-optimization',
        title: 'Landing Page Design & Optimization',
        description: 'Landing page creation, testing, and analytics.',
        overview:
          'Create landing pages, run CRO testing, and provide insights back to media squads.',
        features: ['Landing builds', 'A/B testing', 'Heatmap analysis', 'Performance recap'],
        specs: { Pages: 'Up to 6/mo', Experiments: 'Bi-weekly', Tools: 'GA4/Hotjar', Reporting: 'Experiment recaps' },
        imageKey: 'landingOptimization',
        related: [
          { brand: 'web-ux', slug: 'web-design-development' },
          { brand: 'paid-media', slug: 'ppc-advertising' },
        ],
      },
      {
        slug: 'ux-ui-improvements',
        title: 'UX / UI Improvements',
        description: 'UX/UI audits, prototypes, and component updates.',
        overview:
          'Conduct heuristic audits, usability testing, and deliver hi-fi prototypes and design system updates.',
        features: ['UX audit', 'User testing', 'Prototype design', 'Component updates'],
        specs: { Duration: '3-week sprint', Participants: 'Up to 8', Deliverables: 'Figma + docs', Rollout: 'Dev-ready' },
        imageKey: 'uxUiImprovements',
        related: [
          { brand: 'web-ux', slug: 'landing-optimization' },
          { brand: 'content-marketing', slug: 'copywriting' },
        ],
      },
    ],
  },
  'ecommerce-marketplace': {
    logo: dmLogos.ecommerceMarketplace,
    models: [
      {
        slug: 'product-feed-optimization',
        title: 'Product Feed Optimization & Shopping Ads',
        description: 'Feed governance and shopping ad management.',
        overview:
          'Optimize product feeds, Merchant Center health, and shopping campaigns to grow ROAS.',
        features: ['Feed cleanup', 'Shopping ads', 'Performance Max', 'Analytics dashboards'],
        specs: { SKUs: 'Up to 15k', Feeds: 'Google + Meta', Optimizations: 'Weekly', Reporting: 'ROAS & margin' },
        imageKey: 'productFeedOptimization',
        related: [
          { brand: 'ecommerce-marketplace', slug: 'marketplace-optimization' },
          { brand: 'direct-messaging', slug: 'sms-whatsapp' },
        ],
      },
      {
        slug: 'marketplace-optimization',
        title: 'Marketplace Optimization',
        description: 'Marketplace catalog, reviews, and sponsored ads.',
        overview:
          'Improve Amazon/Noon listings, manage sponsored ads, and run review programs.',
        features: ['Catalog SEO', 'Sponsored ads', 'Review ops', 'Promotion cadences'],
        specs: { Marketplaces: 'Amazon/Noon', Catalog: 'Up to 10k SKUs', Ads: 'Sponsored products', Reporting: 'Sales & ranking' },
        imageKey: 'marketplaceOptimization',
        related: [
          { brand: 'ecommerce-marketplace', slug: 'product-feed-optimization' },
          { brand: 'ecommerce-marketplace', slug: 'cart-remarketing' },
        ],
      },
      {
        slug: 'cart-remarketing',
        title: 'Cart Abandonment & Remarketing',
        description: 'Cart recovery journeys, ads, and automations.',
        overview:
          'Deploy remarketing ads, dynamic emails, and automation to recover drop-offs and drive repeat purchases.',
        features: ['Automation flows', 'Dynamic ads', 'Offer testing', 'Retention dashboards'],
        specs: { Channels: 'Ads + email/SMS', Automations: 'Up to 5', Reporting: 'Weekly', Lift: 'Tracked conversions' },
        imageKey: 'cartRemarketing',
        related: [
          { brand: 'ecommerce-marketplace', slug: 'product-feed-optimization' },
          { brand: 'direct-messaging', slug: 'newsletter-drip' },
        ],
      },
    ],
  },
};

const getModel = (brand, slug) => brandData[brand]?.models.find((m) => m.slug === slug);

const buildBrandModels = () =>
  Object.fromEntries(
    Object.entries(brandData).map(([brand, config]) => [
      brand,
      config.models.map((model) => ({
        slug: model.slug,
        name: model.title,
        image: getImage(model.imageKey),
        brief: model.description,
        features: model.features.slice(0, 3),
        to: `/solutions/digital-marketing-solution/${brand}/${model.slug}`,
      })),
    ]),
  );

const brandModels = buildBrandModels();

const modelPages = Object.fromEntries(
  Object.entries(brandData).map(([brand, config]) => [
    brand,
    Object.fromEntries(
      config.models.map((model) => [
        model.slug,
        {
          hero: {
            title: model.title,
            description: model.description,
            bg: dmHero,
            breadcrumb: `Home / Solutions / Digital Marketing Services / ${brandTitles[brand]} / ${model.title}`,
            cta: { label: 'Get In Touch', to: '/contact' },
          },
          gallery: [getImage(model.imageKey)],
          overview: model.overview,
          features: model.features,
          specs: model.specs,
          downloads: [],
          related: (model.related || []).map(({ brand: relBrand, slug: relSlug }) => {
            const relatedModel = getModel(relBrand, relSlug);
            return {
              href: `/solutions/digital-marketing-solution/${relBrand}/${relSlug}`,
              name: relatedModel?.title || relSlug.replace(/-/g, ' '),
              image: relatedModel ? getImage(relatedModel.imageKey) : dmHero,
            };
          }),
        },
      ]),
    ),
  ]),
);

export default {
  slug: 'digital-marketing-solution',
  title: 'Digital Marketing Services',
  categoryPage: {
    hero: {
      title: 'Digital Marketing Services',
      description:
        'Plan, launch, and optimize digital programs across strategy, search, paid media, content, social, lifecycle, UX, and ecommerce.',
      bg: dmHero,
      breadcrumb: 'Home / Solutions / Digital Marketing Services',
      cta: { label: 'Plan a Campaign', to: '/contact' },
    },
    overview: {
      heading: 'Integrated Growth Framework',
      icon: 'Megaphone',
      intro:
        'Every engagement combines strategic planning, channel execution, and analytics to connect discovery, engagement, and conversion.',
      bulletsLeft: [
        'Strategy & planning playbooks',
        'Search marketing (SEO/SEM)',
        'Paid advertising & media',
        'Content marketing engines',
      ],
      bulletsRight: [
        'Social media marketing',
        'Email & SMS automation',
        'Web & UX / UI optimization',
        'E-commerce & marketplace growth',
      ],
      keyBenefits: [
        { icon: 'Target', title: 'Aligned Goals', desc: 'Roadmaps connect each channel to shared CPL, ROAS, and pipeline targets.' },
        { icon: 'Activity', title: 'Always Optimized', desc: 'Dashboards and experiments inform weekly optimizations across channels.' },
        { icon: 'Sparkles', title: 'Creative First', desc: 'Editorial, video, and social storytelling tailored to each persona.' },
      ],
    },
    brands: Object.entries(brandData).map(([brand, config]) => ({
      slug: brand,
      name: brandTitles[brand],
      logo: config.logo || dmHero,
      banner: config.logo || dmHero,
      blurb: brandDescriptions[brand],
      highlights: brandBenefits[brand].map((benefit) => benefit.title),
      industries: [],
      to: `/solutions/digital-marketing-solution/${brand}`,
    })),
  },
  brandPages: Object.fromEntries(
    Object.entries(brandData).map(([brand, config]) => [
      brand,
      {
        hero: {
          title: brandTitles[brand],
          description: brandDescriptions[brand],
          bg: dmHero,
          breadcrumb: `Home / Solutions / Digital Marketing Services / ${brandTitles[brand]}`,
          cta: { label: 'Explore Offerings', to: '/contact' },
        },
        keyBenefits: brandBenefits[brand],
        models: brandModels[brand],
      },
    ]),
  ),
  modelPages,
};
