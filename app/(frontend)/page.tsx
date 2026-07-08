import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/sections/HomeHero";
import FeatureSection from "@/components/sections/FeatureSection";
import StatsSection from "@/components/sections/StatsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import LogoListSection from "@/components/sections/LogoListSection";
import Button from "@/components/ui/Button";
import { Section, Container, ArrowLink, SectionHeader } from "@/components/ui/Primitives";
import { Search, Navigation, Scale, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { genericFAQs } from "@/data/content";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata: Metadata = {
  title: "VASP Digital | Digital Marketing for Local Businesses in London & GTA",
  description:
    "VASP Digital helps local and small businesses in London, Ontario and the GTA get found, generate more leads, and grow with SEO, paid ads, and high-converting websites.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VASP Digital | Digital Marketing for Local Businesses",
    description: "SEO, Local SEO, Paid Ads, Web Design and AI Brand Visibility for local businesses in London & the GTA.",
    url: "/",
  },
};

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });
  const testimonialsRes = await payload.find({
    collection: "testimonials",
    depth: 1,
  });

  const formattedTestimonials = testimonialsRes.docs.map((t) => ({
    quote: t.quote,
    name: t.name,
    role: t.role,
    image: t.image && typeof t.image === "object" && "url" in t.image ? t.image.url || undefined : undefined,
  }));

  return (
    <>
      <HomeHero />

      {/* 01. Organic Search Section */}
      <FeatureSection
        sectionNumber="01 Organic search"
        eyebrow="SEO"
        title="Rank higher and own your search results"
        description="We build SEO strategies that put your business in front of people actively searching for what you offer. Steady, sustainable growth that compounds over time."
        ctaLabel="Explore"
        ctaHref="/services/seo"
        secondaryCta={{ label: "Learn", href: "/services/seo" }}
        imageLabel="SEO visual"
        imageSrc="/seo_illustration.png"
      />

      {/* 02. Local Visibility Section */}
      <FeatureSection
        sectionNumber="02 Local visibility"
        eyebrow="Local SEO"
        title="Get found when customers search near you"
        description="Dominate local search results and Google Maps. We optimize your profile, citations, and local signals so customers in your area find you first."
        ctaLabel="Explore"
        ctaHref="/services/local-seo"
        secondaryCta={{ label: "Learn", href: "/services/local-seo" }}
        imageReversed
        imageLabel="Local SEO visual"
        imageSrc="/local_seo_illustration.png"
        bg="white"
      />

      {/* 03. Paid Advertising Section */}
      <FeatureSection
        sectionNumber="03 Paid advertising"
        eyebrow="Paid Ads"
        title="Drive qualified leads with Google and Meta ads"
        description="Fast results when you need them. We run Google Ads and Meta campaigns that target the right people at the right time, turning clicks into customers."
        ctaLabel="Explore"
        ctaHref="/services/paid-ads"
        secondaryCta={{ label: "Learn", href: "/services/paid-ads" }}
        imageLabel="Paid Ads visual"
        imageSrc="/paid_ads_illustration.png"
      />

      {/* 04. Built for Local Business Growth */}
      <section className="py-16 md:py-24 bg-brand-lavender border-y border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
            <div className="lg:col-span-5">
              <h2 className="text-h2 leading-tight">Built for local business growth</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-body-lg text-muted mb-8">
                We're not a generic agency. We've spent years helping service and local businesses cut through the noise and get real leads from Google. That focus shows in everything we do.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-base uppercase tracking-wider mb-2 text-foreground">Proven locally</h3>
                  <p className="text-sm text-muted">
                    We know your market, your competitors, and what actually works here.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase tracking-wider mb-2 text-foreground">Results matter</h3>
                  <p className="text-sm text-muted">
                    Every strategy we build is measured by leads, calls, and revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Placeholder */}
          <div className="w-full aspect-[16/7] bg-[#8B8B8B] rounded-card relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-card">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 text-brand-purple flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-current ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Cards Section (Real growth, real numbers) */}
      <Section bg="lavender">
        <Container>
          <SectionHeader
            eyebrow="Results"
            title="Real growth, real numbers"
            description="More leads from Google search and maps"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Leads */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#F2F2F2]">
                <img src="/leads_card_photo.png" alt="Collaborating team" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Leads</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Higher search rankings</h3>
                <p className="text-sm text-muted mb-4 flex-grow">Clients find you when they're searching</p>
                <Link href="/services/seo" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mt-auto">
                  <span>Learn</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Traffic */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#F2F2F2]">
                <img src="/traffic_card_photo.png" alt="Business environment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Traffic</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Better conversion rates</h3>
                <p className="text-sm text-muted mb-4 flex-grow">Websites that turn visitors into paying clients</p>
                <Link href="/services/web-design-development" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mt-auto">
                  <span>Learn</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Growth */}
            <div className="md:col-span-2 bg-white rounded-card border border-border overflow-hidden flex flex-col md:flex-row h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full md:w-[45%] aspect-[16/10] md:aspect-auto md:h-full overflow-hidden bg-[#F2F2F2]">
                <img src="/growth_card_photo.png" alt="Laptop screen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 md:w-[55%] flex flex-col justify-center flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Growth</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Faster results with paid advertising</h3>
                <p className="text-sm text-muted mb-4">Google and Meta ads that work hard for you</p>
                <Link href="/services/paid-ads" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mt-auto md:mt-0">
                  <span>Learn</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coral Orange Industries Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white border-y border-brand-coral-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-white/80 mb-3">Industries</p>
            <h2 className="text-h2 mb-4 text-white">We work with businesses across every sector</h2>
            <p className="text-body-lg text-white/80">
              From clinics to contractors, legal firms to real estate. If you need more leads and better visibility, we've helped businesses like yours.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mb-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 text-white">Clinics and healthcare practices</h3>
                <p className="text-sm text-white/85">
                  Patients find you through local search and Google Ads.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2.5" />
                    <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2.5" />
                    <path d="M13 12l2.5 5 1.5-.7 1.5 2.5 1.2-.7-1.5-2.5 1.8-.5-7-3.1z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 text-white">Contractors and trades</h3>
                <p className="text-sm text-white/85">
                  Rank for service calls in your area and get qualified leads.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14.7 15.3l5.5-5.5a2.5 2.5 0 00-3.5-3.5l-5.5 5.5" strokeLinecap="round" />
                    <path d="M16 4l4 4m-8.5 4.5l-6 6a2 2 0 003 3l6-6" strokeLinecap="round" />
                    <path d="M5.5 14.5l-2 2a1.5 1.5 0 002 2l2-2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 text-white font-display">Legal, real estate, and professional services</h3>
                <p className="text-sm text-white/85">
                  Build authority and attract high-value clients consistently.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <Button href="/industries" variant="white">
              Explore
            </Button>
            <ArrowLink href="/industries" light>
              More
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Locations Section (Where we serve) */}
      <section className="py-16 md:py-24 bg-brand-lavender border-y border-border">
        <div className="container-max">
          <SectionHeader
            eyebrow="Coverage"
            title="Where we serve"
            description="Helping businesses grow across Ontario and beyond"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Card 1: London (1/4 width) */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2]">
                <img src="/london_serve_photo.png" alt="London, Ontario" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-1 block">London</span>
                <h3 className="font-bold text-base mb-1 leading-snug">London businesses</h3>
                <p className="text-xs text-muted mb-4 flex-grow">SEO and local search for southwestern Ontario</p>
                <Link href="/locations/london" className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:underline">
                  <span>Explore</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Card 2: Toronto (1/4 width) */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2]">
                <img src="/toronto_serve_photo.png" alt="Toronto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-1 block">Toronto</span>
                <h3 className="font-bold text-base mb-1 leading-snug">Greater Toronto Area</h3>
                <p className="text-xs text-muted mb-4 flex-grow">Dominate search in Canada's largest market</p>
                <Link href="/locations/toronto" className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:underline">
                  <span>Explore</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Card 3: Ontario (2/4 width - large) */}
            <div className="md:col-span-2 bg-white rounded-card border border-border overflow-hidden flex flex-col md:flex-row h-full hover:shadow-card transition-all duration-300 group">
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-[#F2F2F2]">
                <img src="/ontario_serve_photo.png" alt="Ontario" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-1 block">ontario</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Expanding across the province</h3>
                <p className="text-xs text-muted mb-4">Growing businesses province-wide with proven strategies</p>
                <Link href="/locations" className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:underline mt-auto md:mt-0">
                  <span>Explore</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (How we build your growth) */}
      <section className="py-16 md:py-24 bg-brand-lavender">
        <div className="container-max">
          <SectionHeader
            eyebrow="Process"
            title="How we build your growth"
            description="We start with what you need, build a plan that works, and keep pushing for better results every month."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Discovery */}
            <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Discovery</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">We learn your business and market</h3>
                <p className="text-sm text-muted mb-4 flex-grow">Understand your goals and competition.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mb-4">
                  <span>Next</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2] mt-auto">
                <img src="/process_discovery_photo.png" alt="Discovery stage" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2: Strategy */}
            <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Strategy</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">We build a plan built on data</h3>
                <p className="text-sm text-muted mb-4 flex-grow">SEO, ads, website, or all three.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mb-4">
                  <span>Next</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2] mt-auto">
                <img src="/process_strategy_photo.png" alt="Strategy stage" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 3: Launch */}
            <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Launch</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">We execute and optimize constantly</h3>
                <p className="text-sm text-muted mb-4 flex-grow">Real work starts here, real results follow.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mb-4">
                  <span>Next</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2] mt-auto">
                <img src="/process_launch_photo.png" alt="Launch stage" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 4: Grow */}
            <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Grow</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">We measure, report, and scale what works</h3>
                <p className="text-sm text-muted mb-4 flex-grow">More leads, better rankings, stronger business.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline mb-4">
                  <span>Done</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2] mt-auto">
                <img src="/process_grow_photo.png" alt="Grow stage" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <TestimonialSection
        title="Real results"
        description="Hear from businesses we've helped grow"
        testimonials={formattedTestimonials}
      />

      {/* FAQs */}
      <FAQSection
        title="Questions"
        description="Everything you need to know about working with VASP Digital"
        items={genericFAQs.slice(0, 5)}
      />

      {/* Bottom CTA Footer */}
      <CTASection
        title="Ready to grow your business?"
        description="Let's talk about what's possible for your business. Book a call or get a free audit."
        primaryCta={{ label: "Book a call", href: "/contact" }}
        secondaryCta={{ label: "Free audit", href: "/services/seo" }}
      />

      {/* Trusted By Section (Custom 2-Column with logo SVGs) */}
      <section className="py-16 md:py-24 bg-brand-coral text-white border-t border-brand-coral-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left Side */}
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="text-h2 text-white leading-tight mb-4">Trusted by London and GTA businesses</h2>
                <p className="text-body-lg text-white/95 mb-8 max-w-xl">
                  We've earned recognition for delivering real results for local businesses.
                </p>
                <div className="flex items-center gap-5">
                  <Button href="/about" variant="white">
                    Learn more
                  </Button>
                  <ArrowLink href="/about" light>
                    Certifications
                  </ArrowLink>
                </div>
              </Reveal>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-12 gap-y-8">
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
