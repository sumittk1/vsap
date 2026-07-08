import type { Metadata } from "next";
import { Fragment } from "react";
import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import ImageFeatureGridSection from "@/components/sections/ImageFeatureGridSection";
import PricingSection from "@/components/sections/PricingSection";
import PricingComparisonSection from "@/components/sections/PricingComparisonSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import LocalSeoContactForm from "@/components/sections/LocalSeoContactForm";
import { testimonials } from "@/data/content";
import Button from "@/components/ui/Button";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO | Dominate Google Maps & Local Search",
  description:
    "VASP Digital helps London & GTA businesses get more calls, visits, and leads from nearby customers with Local SEO, GBP optimization, and citation management.",
  alternates: { canonical: "/services/local-seo" },
};

const faqs = [
  { question: "How long until I rank?", answer: "Local SEO takes time. Most businesses see meaningful movement in their first 60 to 90 days. Google Business Profile optimization can show results faster. Full local authority and consistent top rankings typically take 4 to 6 months of consistent work." },
  { question: "What's included in each package?", answer: "Starter covers the basics: profile setup and foundational citations. Growth adds local landing pages and review management. Dominator includes multi-location management, competitor tracking, and weekly strategy calls. See the pricing section above for full details." },
  { question: "Do you require a contract?", answer: "We work on month-to-month terms. No long-term contracts. If local SEO isn't delivering results, you're free to leave. We're confident in our work and prefer to earn your business every month." },
  { question: "How do you measure results?", answer: "We track keyword rankings, Google Maps visibility, local search impressions, and most importantly, leads and calls from local search. You get monthly reports showing exactly where you rank and how your visibility is growing." },
  { question: "Can you help multi-location businesses?", answer: "Yes. Our Dominator package is built for multi-location businesses. We manage separate local SEO strategies for each location, ensuring each one ranks for nearby searches and drives foot traffic independently." },
];

export default function LocalSEOPage() {
  return (
    <>
      <section className="bg-white text-foreground overflow-hidden py-10 md:py-16">
        <Container>
          <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start text-white">
                <Reveal>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white/60 block mb-4">
                    Local SEO
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Get found locally <br />
                    with Local SEO, <br />
                    dominate Google Maps.
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    VASP Digital helps London and GTA businesses get more calls, visits, and leads from nearby customers searching on Google Maps and local search. Your business deserves to be visible when people are looking for what you offer.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white">
                      Improve my local rankings
                    </Button>
                    <Button href="/contact" variant="white">
                      Get a free audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-[4/3]" label="Local SEO" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  foundation
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Why local SEO matters for your business
                </h2>
                <p className="text-body-lg text-muted leading-relaxed max-w-xl">
                  Local search is where customers find you. When someone searches for your service nearby, they expect to see you. Local SEO puts your business in front of these high-intent customers at the exact moment they're ready to buy.
                </p>



                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Column */}
            <div className="w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Why local SEO matters" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Discovery
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                How customers find you online
              </h2>
              <p className="text-body-lg text-muted">
                Most local searches happen on Google Maps, in the local pack, and through voice search. Your customers are already looking. The question is whether they find you.
              </p>
            </Reveal>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-border rounded-card p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 w-full">
                <ImagePlaceholder ratio="aspect-[4/3]" label="How customers find you" />
              </div>
              <div className="lg:col-span-6 flex flex-col items-start gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Channels
                </span>
                <h3 className="text-h3 text-foreground leading-tight">
                  Google Maps searches
                </h3>
                <p className="text-body text-muted leading-relaxed max-w-md">
                  Customers searching for your service nearby see the map pack first. Being visible here is everything.
                </p>
                <div className="flex flex-wrap gap-4 items-center mt-4">
                  <Button href="/contact" variant="white">
                    Learn
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Local SEO services (Coral Grid) */}
      <section className="py-24 md:py-32 bg-[#ff6f43] text-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal>
                <div className="border border-white/20 rounded-card overflow-hidden">
                  <ImagePlaceholder ratio="aspect-square" label="Main Local SEO services" className="bg-white/10 text-white" />
                </div>
              </Reveal>
            </div>

            {/* Right Grid Column */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {/* Item 1 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Google Business Profile optimization</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    Complete profile setup, photo optimization, and category refinement to rank higher in maps.
                  </p>
                  <a href="/services/local-seo/gbp-optimisation" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Local citations and directories</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    Consistent business listings across industry directories and local platforms build authority.
                  </p>
                  <a href="/services/local-seo/local-citations" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Review generation and management</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    More reviews mean higher rankings and more customer trust. We help you get them consistently.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Local landing pages</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    Dedicated pages for each service area capture neighborhood searches and build local relevance.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Short heading here</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Button <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col items-start text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Short heading here</h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                    Button <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep Dive 1: Google Maps Pack */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-6 w-full">
              <Reveal>
                <ImagePlaceholder ratio="aspect-square" label="Rank in the Google Maps pack" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block">
                  Visibility
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mt-2 mb-4">
                  Rank in the Google Maps pack
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  The map pack is where local customers look first. We get you there through strategic optimization and consistent local authority building.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                    <span className="text-sm text-foreground">Complete profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                    <span className="text-sm text-foreground">Strategic keyword placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                    <span className="text-sm text-foreground">Photo and review strategy</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Learn
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep Dive 2: Landing Pages */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block">
                  Authority
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mt-2 mb-4">
                  Build local authority with landing pages
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  We create dedicated local landing pages for each neighborhood and service you offer. These pages capture "near me" searches and signal to Google that you serve these areas.
                </p>
                


                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Learn
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-6 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Build local authority" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Packages Section */}
      <section id="pricing" className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Plans
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Local SEO packages
              </h2>
              <p className="text-body-lg text-muted">
                Choose the plan that fits your business
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$19",
                period: "/mo",
                features: [
                  "Google Business Profile setup",
                  "Initial local citations",
                  "Monthly ranking reports",
                ],
                buttonText: "Get started",
              },
              {
                name: "Growth",
                price: "$29",
                period: "/mo",
                features: [
                  "Everything in Starter",
                  "Local landing pages",
                  "Review generation strategy",
                  "Bi-weekly strategy calls",
                ],
                buttonText: "Get started",
              },
              {
                name: "Dominator",
                price: "$49",
                period: "/mo",
                features: [
                  "Everything in Growth",
                  "Feature text goes here",
                  "Feature text goes here",
                  "Feature text goes here",
                  "Feature text goes here",
                ],
                buttonText: "Get started",
              },
            ].map((pkg, idx) => (
              <Reveal key={pkg.name} delay={idx * 0.1}>
                <div className="bg-white border border-black/80 rounded-2xl p-8 flex flex-col justify-between min-h-[480px] shadow-sm">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-display font-bold text-xl text-foreground">{pkg.name}</h3>
                      <div className="w-8 h-8 rounded-lg bg-brand-lavender/40 flex items-center justify-center text-brand-purple">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="font-display font-extrabold text-5xl text-foreground">{pkg.price}</span>
                      <span className="font-sans text-sm text-muted ml-1">{pkg.period}</span>
                    </div>
                    <p className="font-sans text-xs text-muted mb-6">per month</p>
                    
                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="font-sans text-xs text-foreground/80">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <Button
                      href="/contact"
                      variant="primary"
                      className="w-full"
                    >
                      {pkg.buttonText}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialized Solutions Comparison Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Focused
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Specialized solutions
              </h2>
              <p className="text-body-lg text-muted">
                Choose what your business needs most
              </p>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="w-1/2 text-left pb-8 font-display font-semibold text-lg text-foreground"></th>
                  <th className="w-1/4 pb-8 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-display font-bold text-lg text-foreground mb-2">Profile</span>
                      <span className="font-display font-extrabold text-3xl text-foreground">$199</span>
                      <span className="font-sans text-xs text-muted mt-1 mb-4">per month</span>
                      <Button href="/services/local-seo/gbp-optimisation" variant="primary" size="sm" className="min-w-[120px]">
                        Learn more
                      </Button>
                    </div>
                  </th>
                  <th className="w-1/4 pb-8 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-display font-bold text-lg text-foreground mb-2">Citations</span>
                      <span className="font-display font-extrabold text-3xl text-foreground">$149</span>
                      <span className="font-sans text-xs text-muted mt-1 mb-4">per month</span>
                      <Button href="/services/local-seo/local-citations" variant="primary" size="sm" className="min-w-[120px]">
                        Learn more
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    title: "Google Business Profile",
                    rows: [
                      { label: "Complete optimization", profile: "Yes", citations: "Yes" },
                      { label: "Photo strategy and updates", profile: true, citations: true },
                      { label: "Monthly profile audits", profile: true, citations: true },
                      { label: "Category and keyword refinement", profile: false, citations: true },
                    ],
                  },
                  {
                    title: "Local authority building",
                    rows: [
                      { label: "Citation setup and management", profile: "Yes", citations: "Yes" },
                      { label: "Directory submissions", profile: true, citations: true },
                      { label: "Consistency monitoring", profile: true, citations: true },
                      { label: "Industry-specific listings", profile: false, citations: true },
                    ],
                  },
                  {
                    title: "Support and reporting",
                    rows: [
                      { label: "Monthly ranking reports", profile: "Yes", citations: "Yes" },
                      { label: "Email support included", profile: true, citations: true },
                      { label: "Quarterly strategy review", profile: true, citations: true },
                      { label: "Performance tracking dashboard", profile: false, citations: true },
                    ],
                  },
                ].map((group) => (
                  <Fragment key={group.title}>
                    {/* Group Header Row */}
                    <tr>
                      <td colSpan={3} className="pt-8 pb-4 text-left font-display font-bold text-base text-foreground border-b border-black/5">
                        {group.title}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-black/5 hover:bg-black/[0.01]">
                        <td className="py-4 text-left font-sans text-sm text-foreground/80">
                          {row.label}
                        </td>
                        <td className="py-4 text-center">
                          {typeof row.profile === "string" ? (
                            <span className="font-sans text-sm font-semibold text-foreground">{row.profile}</span>
                          ) : row.profile ? (
                            <svg className="w-4 h-4 text-brand-purple mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : null}
                        </td>
                        <td className="py-4 text-center">
                          {typeof row.citations === "string" ? (
                            <span className="font-sans text-sm font-semibold text-foreground">{row.citations}</span>
                          ) : row.citations ? (
                            <svg className="w-4 h-4 text-brand-purple mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
                {/* Bottom Buttons Row */}
                <tr>
                  <td className="py-8"></td>
                  <td className="py-8 text-center">
                    <Button href="/contact" variant="primary" size="sm" className="min-w-[120px]">
                      Get started
                    </Button>
                  </td>
                  <td className="py-8 text-center">
                    <Button href="/contact" variant="primary" size="sm" className="min-w-[120px]">
                      Get started
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Real results from real businesses
              </h2>
              <p className="text-body-lg text-muted">
                See how local SEO transformed these companies
              </p>
            </Reveal>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Left arrow */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden xl:flex">
              <button className="w-10 h-10 rounded-[8px] border border-black/10 hover:border-black/30 flex items-center justify-center bg-white shadow-sm transition-all cursor-pointer">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* Right arrow */}
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden xl:flex">
              <button className="w-10 h-10 rounded-[8px] border border-black/10 hover:border-black/30 flex items-center justify-center bg-white shadow-sm transition-all cursor-pointer">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: '"We went from invisible to the top of Google Maps. Calls increased by 40% in the first three months."',
                  author: "Sarah Mitchell",
                  role: "Owner, dental practice"
                },
                {
                  quote: '"VASP Digital got us ranking for every neighborhood we serve. Our service area expanded without spending more on ads."',
                  author: "James Chen",
                  role: "Founder, home services"
                },
                {
                  quote: '"Local SEO felt like magic. We\'re now the first result people see when they search for our services nearby."',
                  author: "Emma Rodriguez",
                  role: "Manager, legal firm"
                }
              ].map((t, idx) => (
                <Reveal key={t.author} delay={idx * 0.1}>
                  <div className="bg-[#f0edff]/30 border border-black/5 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm hover:border-brand-purple/20 transition-all duration-300">
                    <div>
                      {/* 5 Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-foreground fill-current" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-sans text-base leading-relaxed text-foreground/80 italic mb-8">
                        {t.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-black/5">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-foreground/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-foreground">
                          {t.author}
                        </h4>
                        <span className="font-sans text-xs text-muted block mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-2.5 h-2.5 rounded-full bg-foreground" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
            </div>
          </div>
        </Container>
      </section>

      <FAQSection
        title="Questions"
        description="Everything you need to know about local SEO."
        items={faqs}
      />

      <CTASection
        title="Ready to dominate local search?"
        description="Let's build your local authority and get you ranking where your customers are searching."
        primaryCta={{ label: "Improve my local rankings", href: "/contact" }}
        secondaryCta={{ label: "Get a free audit", href: "/contact" }}
      />

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Form Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block">
                  Start
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mt-2 mb-4">
                  Get in touch
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Tell us about your business and we'll show you exactly what local SEO can do for you
                </p>

                <LocalSeoContactForm />
              </Reveal>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-6 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Get in touch" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
