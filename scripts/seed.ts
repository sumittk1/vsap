import { getPayload } from 'payload'
import configPromise from '../payload.config.js'

function blocksToLexical(blocks: { type: 'p' | 'h2' | 'h3'; text: string }[]) {
  const children = blocks.map(block => {
    if (block.type === 'p') {
      return {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: block.text,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      };
    } else {
      return {
        type: 'heading',
        tag: block.type,
        children: [
          {
            type: 'text',
            text: block.text,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      };
    }
  });

  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  };
}

async function seed() {
  console.log('Initializing Payload...')
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding Database...')

  // 1. Create default admin user
  const users = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (users.docs.length === 0) {
    console.log('Creating admin user admin@vaspdigital.com / password123')
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@vaspdigital.com',
        password: 'password123',
      },
    })
  } else {
    console.log('Admin user already exists.')
  }

  // 2. Create testimonials
  const testimonials = await payload.find({
    collection: 'testimonials',
  })

  if (testimonials.docs.length === 0) {
    console.log('Creating Testimonials...')
    const items = [
      {
        quote: "We went from almost no online presence to getting calls every week. VASP Digital knew exactly what to do.",
        name: "Sarah Mitchell",
        role: "Owner, dental clinic",
        initials: "SM",
      },
      {
        quote: "They didn't just promise results. They delivered them. Our leads doubled in six months.",
        name: "James Chen",
        role: "Contractor, home services",
        initials: "JC",
      },
      {
        quote: "Finally, someone who understands local business. No jargon, just real growth.",
        name: "Rebecca Walsh",
        role: "Partner, legal firm",
        initials: "RW",
      },
    ]

    for (const item of items) {
      await payload.create({
        collection: 'testimonials',
        data: item,
      })
    }
  }

  // 3. Create Locations
  const locations = await payload.find({
    collection: 'locations',
  })

  if (locations.docs.length === 0) {
    console.log('Creating Locations...')
    const items = [
      {
        slug: "london",
        name: "London, Ontario",
        population: "~430,000",
        blurb: "Known as 'The Forest City', London is home to a thriving mix of healthcare, education, manufacturing, and small business sectors.",
        stat: "150% more calls for contractors",
        isCustom: true,
      },
      {
        slug: "toronto",
        name: "Toronto",
        population: "~2.9 million",
        blurb: "Canada's largest city and a hyper-competitive market where local visibility makes the difference between getting found and getting lost.",
        stat: "2x organic leads for clinics",
        isCustom: false,
      },
      {
        slug: "mississauga",
        name: "Mississauga",
        population: "~720,000",
        blurb: "A major business hub in the GTA with a fast-growing population and strong demand for local services.",
        stat: "#1 Map Pack for home services",
        isCustom: false,
      },
      {
        slug: "brampton",
        name: "Brampton",
        population: "~660,000",
        blurb: "One of Canada's fastest-growing cities, with a young, diverse population actively searching for local businesses online.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "oakville",
        name: "Oakville",
        population: "~210,000",
        blurb: "An affluent GTA community where residents expect a polished, professional online presence from local businesses.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "hamilton",
        name: "Hamilton",
        population: "~580,000",
        blurb: "A city in transformation, with growing tech and service sectors alongside its industrial roots.",
        stat: "3x website conversions",
        isCustom: false,
      },
      {
        slug: "burlington",
        name: "Burlington",
        population: "~190,000",
        blurb: "A family-friendly city between Toronto and Hamilton with strong local search activity.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "milton",
        name: "Milton",
        population: "~140,000",
        blurb: "One of Ontario's fastest-growing towns, creating fresh opportunities for local businesses to capture new residents.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "kitchener",
        name: "Kitchener",
        population: "~250,000",
        blurb: "Part of the Waterloo Region's tech corridor, with a competitive but rewarding local search landscape.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "waterloo",
        name: "Waterloo",
        population: "~110,000",
        blurb: "Home to a young, tech-savvy population that searches and shops locally online.",
        stat: "Growing local visibility",
        isCustom: false,
      },
      {
        slug: "cambridge",
        name: "Cambridge",
        population: "~135,000",
        blurb: "A growing Waterloo Region city with strong manufacturing and service business communities.",
        stat: "Growing local visibility",
        isCustom: false,
      },
    ]

    for (const item of items) {
      await payload.create({
        collection: 'locations',
        data: item,
      })
    }
  }

  // 4. Create Industries
  const industries = await payload.find({
    collection: 'industries',
  })

  if (industries.docs.length === 0) {
    console.log('Creating Industries...')
    const items = [
      {
        slug: "clinics",
        title: "Digital Marketing for Clinics & Healthcare",
        name: "Clinic",
        pain: "Patients",
        searches: [
          { query: "Dentist near me open now" },
          { query: "Walk-in clinic near me" },
          { query: "Best family doctor in [city]" }
        ],
        challenges: [
          { challenge: "Standing out among multiple nearby clinics" },
          { challenge: "Ranking in Google Maps for urgent, location-based searches" },
          { challenge: "Building trust through reviews and online presence" }
        ],
        bestFitServices: [
          { title: "Local SEO", description: "Show up first when patients search for care nearby.", icon: "MapPin", href: "/services/local-seo" },
          { title: "GBP Optimization", description: "Optimize hours, services, and reviews for more bookings.", icon: "Building2", href: "/services/local-seo/gbp-optimisation" },
          { title: "Web Design & Development", description: "A fast, trustworthy website that converts visitors to patients.", icon: "Code2", href: "/services/web-design-development" }
        ],
        testimonialQuote: "We went from page three to page one in six months. New patient inquiries have been consistent and qualified.",
        testimonialName: "Dr. Sarah Mitchell",
        testimonialRole: "Owner, Dental Clinic",
        faqs: [
          { question: "How do you handle patient privacy in marketing?", answer: "We follow best practices for healthcare marketing and never use identifiable patient information without consent." },
          { question: "Can you help with multiple locations?", answer: "Yes — we manage local SEO and GBP optimization across multiple clinic locations." },
          { question: "What about online booking?", answer: "We can integrate booking systems into your website to streamline patient scheduling." }
        ]
      },
      {
        slug: "contractors",
        title: "Digital Marketing for Contractors",
        name: "Contractor",
        pain: "Leads",
        searches: [
          { query: "Best contractor near me" },
          { query: "Roofing repair near me" },
          { query: "Affordable renovation contractor" }
        ],
        challenges: [
          { challenge: "Standing out in a crowded local market" },
          { challenge: "Ranking in Google Maps for service + location searches" },
          { challenge: "Outperforming competitors with bigger ad budgets" }
        ],
        bestFitServices: [
          { title: "Local SEO", description: "Dominate Google Maps for service and location searches.", icon: "MapPin", href: "/services/local-seo" },
          { title: "Google Business Profile Optimization", description: "Maximize calls and direction requests from your GBP.", icon: "Building2", href: "/services/local-seo/gbp-optimisation" },
          { title: "Lead Generation Ads", description: "Fill your pipeline with qualified job inquiries.", icon: "Target", href: "/services/paid-ads/lead-generation-ads" }
        ],
        testimonialQuote: "We doubled our monthly leads within 90 days of working with VASP Digital.",
        testimonialName: "Mike Thompson",
        testimonialRole: "Owner, Thompson Contracting",
        faqs: [
          { question: "How quickly can I expect more leads?", answer: "Paid ads can generate leads within days, while local SEO typically shows meaningful results within 60-90 days." },
          { question: "Do you understand seasonal demand?", answer: "Yes — we adjust strategy and budget allocation based on seasonal trends specific to your trade." },
          { question: "Can you help with reviews?", answer: "Absolutely. Review generation and management is a core part of our local SEO and GBP services." }
        ]
      },
      {
        slug: "home-services",
        title: "Digital Marketing for Home Services",
        name: "Home Services",
        pain: "Booked Jobs",
        searches: [
          { query: "Emergency plumber near me" },
          { query: "HVAC repair near me" },
          { query: "House cleaning service in [city]" }
        ],
        challenges: [
          { challenge: "Standing out for urgent, high-intent searches" },
          { challenge: "Ranking in the Map Pack for service + location terms" },
          { challenge: "Managing reviews across multiple platforms" }
        ],
        bestFitServices: [
          { title: "Local SEO", description: "Capture urgent 'near me' searches in the Map Pack.", icon: "MapPin", href: "/services/local-seo" },
          { title: "GBP Optimization", description: "Maximize calls from your Google Business Profile.", icon: "Building2", href: "/services/local-seo/gbp-optimisation" },
          { title: "Lead Generation Ads", description: "Fill your schedule with booked jobs.", icon: "Target", href: "/services/paid-ads/lead-generation-ads" }
        ],
        testimonialQuote: "Home Services: #1 in Google Maps within four months — calls have never stopped.",
        testimonialName: "David Park",
        testimonialRole: "Owner, Home Services Co.",
        faqs: [
          { question: "How do you handle emergency service searches?", answer: "We optimize for high-urgency, high-intent keywords and ensure your GBP reflects availability for emergency calls." },
          { question: "Can you manage multiple service areas?", answer: "Yes — we build location-specific pages and citations for each service area you operate in." },
          { question: "What about seasonal services?", answer: "We adjust campaigns and content seasonally — e.g., HVAC in summer/winter, landscaping in spring/fall." }
        ]
      },
      {
        slug: "hospitality",
        title: "Digital Marketing for Hospitality",
        name: "Hospitality",
        pain: "Bookings & Visits",
        searches: [
          { query: "Best restaurant near me" },
          { query: "Hotels near [landmark]" },
          { query: "Brunch spots in [city]" }
        ],
        challenges: [
          { challenge: "Standing out in a visually competitive market" },
          { challenge: "Ranking in Google Maps and Google's local 3-pack" },
          { challenge: "Managing reviews and reputation across platforms" }
        ],
        bestFitServices: [
          { title: "Local SEO", description: "Get found by hungry, nearby customers searching now.", icon: "MapPin", href: "/services/local-seo" },
          { title: "GBP Optimization", description: "Showcase menus, photos, and hours that drive visits.", icon: "Building2", href: "/services/local-seo/gbp-optimisation" },
          { title: "Meta Ads", description: "Visual campaigns that drive awareness and bookings.", icon: "Megaphone", href: "/services/paid-ads/meta-ads" }
        ],
        testimonialQuote: "Our reservations increased noticeably within the first two months of optimizing our local presence.",
        testimonialName: "Lina Osei",
        testimonialRole: "Owner, Local Restaurant",
        faqs: [
          { question: "Can you help with menu and photo optimization?", answer: "Yes — visual content optimization is a key part of our GBP and local SEO services for hospitality." },
          { question: "Do you run social media ads?", answer: "Yes — Meta Ads are particularly effective for hospitality businesses given the visual nature of the platform." },
          { question: "How do you handle reviews?", answer: "We provide guidance and management for review generation and responses across Google and other platforms." }
        ]
      },
      {
        slug: "legal-services",
        title: "Digital Marketing for Legal Services",
        name: "Legal Services",
        pain: "Client Inquiries",
        searches: [
          { query: "Family lawyer near me" },
          { query: "Best personal injury lawyer in [city]" },
          { query: "Free legal consultation near me" }
        ],
        challenges: [
          { challenge: "Standing out in a competitive, trust-driven market" },
          { challenge: "Ranking for high-value practice area searches" },
          { challenge: "Converting website visitors into consultations" }
        ],
        bestFitServices: [
          { title: "SEO Services", description: "Build long-term authority for your practice areas.", icon: "Search", href: "/services/seo" },
          { title: "Local SEO", description: "Get found by clients searching for legal help nearby.", icon: "MapPin", href: "/services/local-seo" },
          { title: "Web Design & Development", description: "A professional website that builds instant trust.", icon: "Code2", href: "/services/web-design-development" }
        ],
        testimonialQuote: "Rankings improved across all our target keywords. The ROI on SEO is way better than what we were spending on Google Ads.",
        testimonialName: "Emma Rodriguez",
        testimonialRole: "Director, Legal Firm",
        faqs: [
          { question: "Is SEO effective for law firms?", answer: "Yes — legal services searches have high intent, making SEO and local SEO especially valuable for generating consultations." },
          { question: "Do you write legal content?", answer: "We work with content specialists familiar with legal topics, always reviewed by your team for accuracy." },
          { question: "How do you handle competitive keywords?", answer: "We focus on a mix of high-value competitive terms and long-tail searches where you can win faster." }
        ]
      },
      {
        slug: "real-estate",
        title: "Digital Marketing for Real Estate",
        name: "Real Estate",
        pain: "Buyer & Seller Leads",
        searches: [
          { query: "Homes for sale in [city]" },
          { query: "Real estate agent near me" },
          { query: "Best realtor in [neighborhood]" }
        ],
        challenges: [
          { challenge: "Standing out among many local agents and brokerages" },
          { challenge: "Ranking for neighborhood and listing-based searches" },
          { challenge: "Converting site visitors into buyer and seller leads" }
        ],
        bestFitServices: [
          { title: "Local SEO", description: "Rank for neighborhood and city-specific searches.", icon: "MapPin", href: "/services/local-seo" },
          { title: "Web Design & Development", description: "A modern site that showcases listings beautifully.", icon: "Code2", href: "/services/web-design-development" },
          { title: "Paid Ads", description: "Targeted campaigns for buyer and seller leads.", icon: "Target", href: "/services/paid-ads" }
        ],
        testimonialQuote: "Our organic traffic tripled in a year. We're no longer dependent on paid ads to fill our pipeline.",
        testimonialName: "James Chen",
        testimonialRole: "Founder, Real Estate Group",
        faqs: [
          { question: "Can you integrate MLS listings?", answer: "Yes — we can integrate MLS feeds into your website for automatically updated listings." },
          { question: "Do you target buyers and sellers separately?", answer: "Yes — we build distinct campaigns and content tracks for buyer-intent and seller-intent searches." },
          { question: "How do you handle multiple agents?", answer: "We can build agent-specific pages and campaigns within a unified brokerage strategy." }
        ]
      }
    ]

    for (const item of items) {
      await payload.create({
        collection: 'industries',
        data: item,
      })
    }
  }

  // 5. Create Blog Posts
  const blogPosts = await payload.find({
    collection: 'blog-posts',
  })

  if (blogPosts.docs.length === 0) {
    console.log('Creating Blog Posts...')
    const items = [
      {
        slug: "how-to-rank-in-google-maps",
        title: "How to Rank in Google Maps: A Local SEO Guide",
        category: "Local SEO",
        summary: "Strategies for improving your Google Maps visibility and showing up in the local pack for high-intent searches.",
        date: "2026-05-12T00:00:00.000Z",
        author: "Priya Nair",
        body: blocksToLexical([
          { type: 'p', text: "For most local businesses, showing up in the Google Maps \"local pack\" — the top three map results that appear above the regular search listings — is one of the highest-impact things you can do for visibility. Customers searching for services near them tend to click one of these three results before scrolling further." },
          { type: 'h2', text: "Start with your Google Business Profile" },
          { type: 'p', text: "Your Google Business Profile (GBP) is the foundation of local ranking. Make sure your business name, address, and phone number are accurate and consistent with how they appear everywhere else online. Choose the most accurate primary category, and add relevant secondary categories that reflect everything you offer." },
          { type: 'h2', text: "Build consistent citations" },
          { type: 'p', text: "Citations are mentions of your business name, address, and phone number across directories and platforms. When this information is consistent everywhere, it sends a strong trust signal to Google. Inconsistent or outdated listings can actively hurt your rankings." },
          { type: 'h2', text: "Earn and respond to reviews" },
          { type: 'p', text: "Review quantity, quality, and recency all factor into local rankings. Make it easy for happy customers to leave a review, and respond to every review — positive or negative — to show you're an active, engaged business." },
          { type: 'h2', text: "Create location-specific content" },
          { type: 'p', text: "If you serve multiple areas, dedicated landing pages for each city or neighborhood help you appear for \"near me\" and location-specific searches — as long as the content is genuinely useful and not just templated text with the city name swapped in." },
          { type: 'h2', text: "Be patient — and consistent" },
          { type: 'p', text: "Local SEO compounds over time. Businesses that consistently optimize their profile, build citations, and earn reviews tend to see steady improvements in map visibility over a few months — and those gains tend to stick." }
        ])
      },
      {
        slug: "seo-vs-ppc-for-local-business",
        title: "SEO vs PPC: What's Right for Your Local Business?",
        category: "Strategy",
        summary: "A breakdown of the pros, cons, and timelines for organic search versus paid advertising for local businesses.",
        date: "2026-04-28T00:00:00.000Z",
        author: "Alex Carter",
        body: blocksToLexical([
          { type: 'p', text: "One of the most common questions we hear from local business owners is whether they should invest in SEO, paid ads, or both. The honest answer is that it depends on your timeline, budget, and goals — but understanding the tradeoffs helps you make the right call for your business." },
          { type: 'h2', text: "SEO: long-term, compounding growth" },
          { type: 'p', text: "SEO builds organic visibility that compounds over time. The tradeoff is patience — meaningful results typically take three to six months. Once you're ranking, though, that traffic doesn't stop when you stop paying for it, which makes SEO a strong long-term investment." },
          { type: 'h2', text: "PPC: speed and control" },
          { type: 'p', text: "Paid ads can generate leads within days of launching a campaign. You have precise control over budget, targeting, and messaging, and every dollar is trackable. The tradeoff is that visibility stops the moment you stop paying." },
          { type: 'h2', text: "When to prioritize SEO" },
          { type: 'p', text: "If you're building for the long term and want to reduce dependence on ad spend over time, SEO should be a core part of your strategy — especially for service businesses with strong recurring or referral demand." },
          { type: 'h2', text: "When to prioritize PPC" },
          { type: 'p', text: "If you need leads now — a new location, a slow season, or a new service launch — paid ads can fill the gap quickly while your SEO foundation builds in the background." },
          { type: 'h2', text: "The best approach: both, working together" },
          { type: 'p', text: "Most successful local businesses use both. Paid ads generate immediate leads while SEO compounds in the background, eventually reducing how much you need to spend on ads to maintain the same lead volume." }
        ])
      },
      {
        slug: "google-business-profile-checklist",
        title: "The Complete Google Business Profile Optimization Checklist",
        category: "Local SEO",
        summary: "Every section of your GBP that impacts rankings, calls, and conversions — and how to optimize each one.",
        date: "2026-04-10T00:00:00.000Z",
        author: "Priya Nair",
        body: blocksToLexical([
          { type: 'p', text: "Your Google Business Profile is often the first thing potential customers see — and one of the strongest factors in local rankings. Here's a checklist of every section worth optimizing." },
          { type: 'h2', text: "Business information" },
          { type: 'p', text: "Confirm your business name matches your signage and legal name exactly, your address is accurate and consistent everywhere, and your phone number is local (not a call center number) wherever possible." },
          { type: 'h2', text: "Categories" },
          { type: 'p', text: "Choose the most accurate primary category — this carries significant ranking weight — and add every relevant secondary category that applies to your business." },
          { type: 'h2', text: "Services and products" },
          { type: 'p', text: "List out every service or product you offer with descriptions. This helps you appear for more specific searches and gives customers a clearer picture of what you do." },
          { type: 'h2', text: "Photos" },
          { type: 'p', text: "Profiles with regularly updated, high-quality photos receive significantly more engagement. Include exterior shots, interior shots, team photos, and photos of your work or products." },
          { type: 'h2', text: "Reviews" },
          { type: 'p', text: "Set up a simple process for asking happy customers for reviews, and respond to every review — thanking positive reviewers and addressing concerns from negative ones professionally." },
          { type: 'h2', text: "Posts and updates" },
          { type: 'p', text: "Regular posts — about offers, events, or updates — keep your profile active and give customers a reason to engage, which can positively impact visibility." },
          { type: 'h2', text: "Q&A" },
          { type: 'p', text: "Proactively add and answer common questions before customers have to ask — this reduces friction and shows you're attentive to customer needs." }
        ])
      },
      {
        slug: "website-speed-and-conversions",
        title: "Why Website Speed Directly Impacts Your Conversion Rate",
        category: "Web Design",
        summary: "How load times affect bounce rate, SEO rankings, and ultimately your bottom line — plus quick wins.",
        date: "2026-03-22T00:00:00.000Z",
        author: "Jordan Lee",
        body: blocksToLexical([
          { type: 'p', text: "It's easy to think of website speed as a technical detail, but for local businesses, it's directly tied to revenue. Slow websites lose visitors before they even see your services — and Google notices too." },
          { type: 'h2', text: "The bounce rate connection" },
          { type: 'p', text: "Visitors form an impression of your business within seconds. If your site takes too long to load, many will simply leave and click back to search results — often landing on a competitor's site instead." },
          { type: 'h2', text: "Speed is a ranking factor" },
          { type: 'p', text: "Google uses Core Web Vitals — metrics around loading, interactivity, and visual stability — as part of its ranking algorithm. A faster site doesn't just convert better; it can also rank better." },
          { type: 'h2', text: "Common culprits" },
          { type: 'p', text: "Unoptimized images are usually the biggest offender, followed by excessive scripts and plugins, slow hosting, and render-blocking resources that delay the page from becoming interactive." },
          { type: 'h2', text: "Quick wins" },
          { type: 'p', text: "Compress and properly size images, enable lazy loading for below-the-fold content, minimize unnecessary plugins and scripts, and choose hosting that's appropriate for your traffic and platform." },
          { type: 'h2', text: "The bottom line" },
          { type: 'p', text: "Every second of load time can meaningfully affect conversion rates. For a local business relying on form fills and calls, a faster site isn't a nice-to-have — it's part of your lead generation strategy." }
        ])
      },
      {
        slug: "meta-ads-for-local-businesses",
        title: "Getting Started with Meta Ads for Local Businesses",
        category: "Paid Ads",
        summary: "Campaign types, targeting strategies, and creative tips for Facebook and Instagram advertising.",
        date: "2026-03-05T00:00:00.000Z",
        author: "Marco Bianchi",
        body: blocksToLexical([
          { type: 'p', text: "Facebook and Instagram remain some of the most cost-effective platforms for reaching local audiences — especially for businesses that benefit from visual storytelling, like restaurants, home services, and retail." },
          { type: 'h2', text: "Choose the right campaign objective" },
          { type: 'p', text: "Awareness campaigns build recognition, engagement campaigns build community, traffic campaigns drive website visits, and lead generation campaigns capture inquiries directly within the platform using instant forms." },
          { type: 'h2', text: "Targeting that works locally" },
          { type: 'p', text: "Combine geographic targeting — a radius around your business or service area — with demographic and interest targeting that reflects your ideal customer. Don't make your audience too narrow, or the algorithm won't have enough data to optimize effectively." },
          { type: 'h2', text: "Creative matters more than you think" },
          { type: 'p', text: "Meta's algorithm rewards engagement, and engagement starts with creative that stops the scroll. Authentic photos and short videos of your team, work, or space tend to outperform overly polished stock imagery." },
          { type: 'h2', text: "Don't skip retargeting" },
          { type: 'p', text: "Visitors who've already shown interest — by visiting your website or engaging with your page — are far more likely to convert. Retargeting campaigns to this audience are often the highest-ROI part of a Meta Ads strategy." },
          { type: 'h2', text: "Start small, then scale" },
          { type: 'p', text: "Begin with a modest budget to test creative and targeting, then scale up the combinations that perform best. Meta Ads reward consistent testing and iteration over time." }
        ])
      },
      {
        slug: "ai-search-and-brand-visibility",
        title: "How AI Search Is Changing Brand Visibility for Local Businesses",
        category: "AI & Beyond",
        summary: "What AI-powered answer engines mean for your business, and how to stay discoverable beyond traditional rankings.",
        date: "2026-02-18T00:00:00.000Z",
        author: "Taylor Brooks",
        body: blocksToLexical([
          { type: 'p', text: "Search behavior is shifting. AI-powered answer engines and overviews are increasingly surfacing direct answers — including local business recommendations — before traditional search results even appear. For local businesses, this raises a new question: how do you show up in an answer, not just a ranking?" },
          { type: 'h2', text: "Consistency is more important than ever" },
          { type: 'p', text: "AI systems often pull from multiple sources — your website, your Google Business Profile, directories, and reviews — to form a picture of your business. Inconsistent information across these sources makes it harder for AI to confidently represent your business." },
          { type: 'h2', text: "Structured, clear content helps" },
          { type: 'p', text: "Content that clearly states what you do, who you serve, and where you operate — using structured data and plain language — is easier for AI systems to interpret and reference accurately." },
          { type: 'h2', text: "Reviews as trust signals" },
          { type: 'p', text: "Reviews continue to play an outsized role, both for traditional rankings and as a trust signal that AI systems weigh when forming recommendations." },
          { type: 'h2', text: "SEO and local SEO are still the foundation" },
          { type: 'p', text: "AI visibility isn't a replacement for SEO and local SEO — it's built on top of them. Businesses with strong fundamentals — accurate listings, quality content, and active reviews — are best positioned as AI-driven discovery grows." },
          { type: 'h2', text: "What to do now" },
          { type: 'p', text: "Audit your information for consistency across your website, Google Business Profile, and major directories. Keep building genuine reviews. And ensure your content clearly communicates who you are and what you offer — to humans and AI alike." }
        ])
      }
    ]

    for (const item of items) {
      await payload.create({
        collection: 'blog-posts',
        data: item,
      })
    }
  }

  console.log('Seeding completed successfully!')
  process.exit(0)
}

seed().catch(err => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
