export const servicesMega = {
  columns: [
    {
      title: "SEO & Local SEO",
      items: [
        { label: "SEO services", desc: "Rank higher in Google search", href: "/services/seo" },
        { label: "Local SEO", desc: "Dominate local search results", href: "/services/local-seo" },
        { label: "GBP Optimisation", desc: "Boost map pack visibility", href: "/services/local-seo/gbp-optimisation", indent: true },
        { label: "Local Citations", desc: "Consistent directory listings", href: "/services/local-seo/local-citations", indent: true },
        { label: "Brand Visibility - AI & Beyond", desc: "AI search & entity optimization", href: "/services/brand-visibility-ai" },
      ],
    },
    {
      title: "Paid Advertising",
      items: [
        { label: "Paid Ads", desc: "Get leads from paid search", href: "/services/paid-ads" },
        { label: "Google Ads", desc: "Get leads from Google Search intent", href: "/services/paid-ads/google-ads", indent: true },
        { label: "Meta Ads", desc: "Convert audiences on FB & Instagram", href: "/services/paid-ads/meta-ads", indent: true },
        { label: "Lead Generation Ads", desc: "High-ROI direct response funnels", href: "/services/paid-ads/lead-generation-ads", indent: true },
      ],
    },
    {
      title: "Web Design & Development",
      items: [
        { label: "Web Design & Development", desc: "Build websites that convert", href: "/services/web-design-development" },
        { label: "WordPress Development", desc: "Manage and update content easily", href: "/services/web-design-development/wordpress", indent: true },
      ],
    },
  ],
};

export const industriesMega = [
  { label: "Contractors", desc: "Get more qualified leads", href: "/industries/contractors" },
  { label: "Clinics", desc: "Attract more online patients", href: "/industries/clinics" },
  { label: "Legal services", desc: "Build authority and trust", href: "/industries/legal-services" },
  { label: "Real estate", desc: "List properties where buyers search", href: "/industries/real-estate" },
];

export const locationsMega = [
  { label: "London", desc: "Digital marketing for London businesses", href: "/locations/london" },
  { label: "Toronto", desc: "Digital marketing for Toronto businesses", href: "/locations/toronto" },
  { label: "Mississauga", desc: "Digital marketing for Mississauga businesses", href: "/locations/mississauga" },
  { label: "Hamilton", desc: "Digital marketing for Hamilton businesses", href: "/locations/hamilton" },
];

export const navLinks = [
  {
    label: "Services",
    href: "/services",
    mega: true,
    columns: [
      {
        title: "SEO & Local SEO",
        items: [
          { label: "SEO services", desc: "Rank higher in Google search", href: "/services/seo", icon: "Globe" },
          { label: "Local SEO", desc: "Dominate local search results", href: "/services/local-seo", icon: "MapPin" },
          { label: "GBP Optimisation", desc: "Boost map pack visibility", href: "/services/local-seo/gbp-optimisation", icon: "Compass", indent: true },
          { label: "Local Citations", desc: "Consistent directory listings", href: "/services/local-seo/local-citations", icon: "Globe", indent: true },
          { label: "Brand Visibility - AI & Beyond", desc: "AI search & entity optimization", href: "/services/brand-visibility-ai", icon: "Globe" },
        ],
      },
      {
        title: "Paid Advertising",
        items: [
          { label: "Paid Ads", desc: "Get leads from paid search", href: "/services/paid-ads", icon: "Target" },
          { label: "Google Ads", desc: "Get leads from Google Search intent", href: "/services/paid-ads/google-ads", icon: "Target", indent: true },
          { label: "Meta Ads", desc: "Convert audiences on FB & Instagram", href: "/services/paid-ads/meta-ads", icon: "Globe", indent: true },
          { label: "Lead Generation Ads", desc: "High-ROI direct response funnels", href: "/services/paid-ads/lead-generation-ads", icon: "Target", indent: true },
        ],
      },
      {
        title: "Web Design",
        items: [
          { label: "Web Design & Development", desc: "Build websites that convert", href: "/services/web-design-development", icon: "Layout" },
          { label: "WordPress Development", desc: "Manage and update content easily", href: "/services/web-design-development/wordpress", icon: "Layout", indent: true },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    mega: true,
    columns: [
      {
        title: "By industry",
        items: [
          { label: "Industries Overview", desc: "See how we adapt to your sector", href: "/industries", icon: "Globe" },
          { label: "Contractors", desc: "Get more qualified leads", href: "/industries/contractors", icon: "Hammer" },
          { label: "Clinics", desc: "Attract new patients online", href: "/industries/clinics", icon: "Heart" },
          { label: "Legal services", desc: "Build authority and trust", href: "/industries/legal-services", icon: "Scale" },
          { label: "Real estate", desc: "List properties where buyers search", href: "/industries/real-estate", icon: "Home" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    mega: true,
    columns: [
      {
        title: "By location",
        items: [
          { label: "Locations Overview", desc: "Explore all Ontario coverage", href: "/locations", icon: "MapPin" },
          { label: "London", desc: "Digital marketing for London businesses", href: "/locations/london", icon: "MapPin" },
          { label: "Toronto", desc: "Digital marketing for Toronto businesses", href: "/locations/toronto", icon: "MapPin" },
          { label: "Mississauga", desc: "Digital marketing for Mississauga businesses", href: "/locations/mississauga", icon: "MapPin" },
          { label: "Hamilton", desc: "Digital marketing for Hamilton businesses", href: "/locations/hamilton", icon: "MapPin" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    mega: true,
    columns: [
      {
        title: "Resources",
        items: [
          { label: "Resources Overview", desc: "Browse all guides and case studies", href: "/resources", icon: "BookOpen" },
          { label: "Case Studies", desc: "See our client success stories", href: "/case-studies", icon: "Target" },
          { label: "About", desc: "Learn about our mission and team", href: "/about", icon: "Globe" },
          { label: "Team", desc: "Meet the experts behind VASP", href: "/team", icon: "Heart" },
          { label: "Blog", desc: "Read our latest insights", href: "/blog", icon: "BookOpen" },
        ],
      },
    ],
  },
];

export const footerLinks = {
  services: [
    { label: "SEO services", href: "/services/seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Paid Ads", href: "/services/paid-ads" },
    { label: "Web Design & Development", href: "/services/web-design-development" },
    { label: "Company", href: "/about" },
  ],
  company: [
    { label: "Case studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Follow us", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];
