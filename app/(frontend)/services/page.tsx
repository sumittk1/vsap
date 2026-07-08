import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, SectionHeader, ArrowLink } from "@/components/ui/Primitives";
import FeatureSection from "@/components/sections/FeatureSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { genericFAQs } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import FAQInteractive from "./FAQInteractive";

export const metadata: Metadata = {
  title: "Services | SEO, Local SEO, Paid Ads, Web Design",
  description:
    "Explore VASP Digital's core services: SEO, Local SEO, Paid Ads, Web Design & Development, and AI-powered Brand Visibility for local businesses in London & the GTA.",
  alternates: { canonical: "/services" },
};

export default function ServicesOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <Container className="max-w-5xl">
          <Reveal>
            <div className="relative bg-[#7c7c7c] border-2 border-white/20 rounded-3xl p-8 md:p-16 text-center overflow-hidden flex flex-col items-center justify-center min-h-[500px] shadow-lg">
              {/* Faint background image icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none z-0 select-none">
                <svg
                  className="w-96 h-96 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

              {/* Content on top */}
              <div className="relative z-10 max-w-3xl flex flex-col items-center">
                <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-white leading-[1.15] mb-6">
                  Digital marketing <br />
                  services that drive local <br />
                  business growth
                </h1>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-2xl">
                  We help small businesses and service companies get found on Google, attract qualified leads, and grow revenue through SEO, local SEO, paid advertising, and modern web design. Every service is built to work together and deliver measurable results.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-sans font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-[#e4dbff] text-[#080e0c] border-2 border-[#080e0c] shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                  >
                    Talk
                  </Link>
                  <Link
                    href="/contact?type=audit"
                    className="inline-flex items-center justify-center font-sans font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-white text-[#080e0c] border-2 border-[#080e0c] shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                  >
                    Audit
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Intro Text Section */}
      <Section bg="white">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-bold text-3xl md:text-4xl text-[#080e0c] mb-4">
              Our services
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              The right digital strategy can transform your business. Explore our core services
              designed to deliver visibility, traffic, and leads for local businesses in London,
              the GTA, and beyond.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Services Overview Section */}
      <Section bg="lavender">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Four ways to grow"
            description="Pick your path or combine them all"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Left Card: SEO Services (Double Width, Double Height) */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Organic</span>
                <h3 className="font-bold text-2xl md:text-3xl mb-3 leading-tight">SEO services</h3>
                <p className="text-sm md:text-base text-muted mb-6">
                  Rank higher and own organic search results
                </p>
                <div className="flex items-center gap-5 mt-auto">
                  <Button href="/services/seo" variant="white">
                    Explore
                  </Button>
                  <ArrowLink href="/services/seo">
                    Explore
                  </ArrowLink>
                </div>
              </div>
              <div className="w-full bg-[#F2F2F2] border-t border-border/40 aspect-[16/10] md:aspect-auto md:h-64 flex items-center justify-center mt-auto">
                <svg className="w-10 h-10 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Top Right Card 1: Local SEO */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Local</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Local SEO</h3>
                <p className="text-xs text-muted mb-4 flex-grow">
                  Get found by customers searching near you
                </p>
                <ArrowLink href="/services/local-seo">
                  Explore
                </ArrowLink>
              </div>
              <div className="w-full bg-[#F2F2F2] border-t border-border/40 aspect-[16/10] flex items-center justify-center mt-auto">
                <svg className="w-7 h-7 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Top Right Card 2: Paid Ads */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Paid</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Google Ads and paid advertising</h3>
                <p className="text-xs text-muted mb-4 flex-grow">
                  Drive qualified traffic and leads immediately
                </p>
                <ArrowLink href="/services/paid-ads">
                  Explore
                </ArrowLink>
              </div>
              <div className="w-full bg-[#F2F2F2] border-t border-border/40 aspect-[16/10] flex items-center justify-center mt-auto">
                <svg className="w-7 h-7 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Card 1: Web Design */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Web</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Web design and development</h3>
                <p className="text-xs text-muted mb-4 flex-grow">
                  Build a site that converts visitors to clients
                </p>
                <ArrowLink href="/services/web-design-development">
                  Learn
                </ArrowLink>
              </div>
              <div className="w-full bg-[#F2F2F2] border-t border-border/40 aspect-[16/10] flex items-center justify-center mt-auto">
                <svg className="w-7 h-7 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Card 2: Growth */}
            <div className="md:col-span-1 bg-white rounded-card border border-border overflow-hidden flex flex-col h-full hover:shadow-card transition-all duration-300 group">
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-muted mb-2 block">Growth</span>
                <h3 className="font-bold text-lg mb-1.5 leading-snug">Rank in organic search</h3>
                <p className="text-xs text-muted mb-4 flex-grow">
                  Build a site that converts visitors to clients
                </p>
                <ArrowLink href="/services/brand-visibility-ai">
                  Explore
                </ArrowLink>
              </div>
              <div className="w-full bg-[#F2F2F2] border-t border-border/40 aspect-[16/10] flex items-center justify-center mt-auto">
                <svg className="w-7 h-7 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integration Section */}
      <Section bg="lavender" className="border-y border-border/40 py-20 md:py-24">
        <Container className="space-y-16 md:space-y-24">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Integration
                </span>
                <h2 className="font-bold text-4xl md:text-5xl text-[#080e0c] mt-2 mb-4 leading-tight">
                  Each service strengthens the others
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                  Visibility without traffic wastes potential. Traffic without conversion drains budget. A strong website means nothing if no one finds it. We build all three at once, so each service compounds the results of the others.
                </p>
                <div className="flex items-center gap-4 mb-12">
                  <Button href="/services" variant="white">
                    Explore
                  </Button>
                  <ArrowLink href="/services">
                    Learn
                  </ArrowLink>
                </div>

                <div className="border-t border-border/40 pt-8">
                  <h3 className="font-bold text-lg md:text-xl text-[#080e0c] mb-2">
                    01. Establish authority
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    A fast, modern website turns traffic into qualified leads, calls, and revenue.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] border border-border/20 rounded-card flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
                  <div className="relative">
                    <svg className="w-20 h-20 text-dark/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 bg-dark/20 text-white w-6 h-6 rounded-full border-2 border-[#e3e3e3] flex items-center justify-center text-xs font-bold font-sans select-none">
                      1
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                <h3 className="font-bold text-lg md:text-xl text-[#080e0c] mb-2">
                  02. Feature two
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] border border-border/20 rounded-card flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
                  <div className="relative">
                    <svg className="w-20 h-20 text-dark/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 bg-dark/20 text-white w-6 h-6 rounded-full border-2 border-[#e3e3e3] flex items-center justify-center text-xs font-bold font-sans select-none">
                      2
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                <h3 className="font-bold text-lg md:text-xl text-[#080e0c] mb-2">
                  03. Feature three
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] border border-border/20 rounded-card flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
                  <div className="relative">
                    <svg className="w-20 h-20 text-dark/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 bg-dark/20 text-white w-6 h-6 rounded-full border-2 border-[#e3e3e3] flex items-center justify-center text-xs font-bold font-sans select-none">
                      3
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                <h3 className="font-bold text-lg md:text-xl text-[#080e0c] mb-2">
                  04. Optimize relentlessly
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  We track every metric, report monthly, and adjust strategy based on real data
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] border border-border/20 rounded-card flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
                  <div className="relative">
                    <svg className="w-20 h-20 text-dark/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 bg-dark/20 text-white w-6 h-6 rounded-full border-2 border-[#e3e3e3] flex items-center justify-center text-xs font-bold font-sans select-none">
                      4
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who Section */}
      <section className="py-20 md:py-32 bg-[#fd7056] text-white">
        <Container className="max-w-5xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-2 block">
              who
            </span>
            <h2 className="font-bold text-4xl md:text-5xl text-white mt-2 mb-3 leading-tight">
              Built for local business owners
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-16 max-w-2xl mx-auto">
              Clinics, contractors, legal firms, real estate, hospitality, home services
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
            {/* Card 1 */}
            <Reveal>
              <div className="bg-[#737373] p-8 rounded-2xl flex flex-col justify-between min-h-[260px] h-full">
                <div>
                  <svg className="w-6 h-6 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                    Need more leads from Google search
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Rank higher in organic search results
                  </p>
                </div>
                <Link href="/services/seo" className="text-xs font-bold text-white hover:underline mt-6 inline-flex items-center gap-1">
                  Explore <span className="inline-block">&gt;</span>
                </Link>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal>
              <div className="bg-[#737373] p-8 rounded-2xl flex flex-col justify-between min-h-[260px] h-full">
                <div>
                  <svg className="w-6 h-6 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                    Want customers searching nearby
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Dominate local map and search results
                  </p>
                </div>
                <Link href="/services/local-seo" className="text-xs font-bold text-white hover:underline mt-6 inline-flex items-center gap-1">
                  Explore <span className="inline-block">&gt;</span>
                </Link>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal>
              <div className="bg-[#737373] p-8 rounded-2xl flex flex-col justify-between min-h-[260px] h-full">
                <div>
                  <svg className="w-6 h-6 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                    Ready for immediate qualified traffic
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Launch campaigns that convert fast
                  </p>
                </div>
                <Link href="/services/paid-ads" className="text-xs font-bold text-white hover:underline mt-6 inline-flex items-center gap-1">
                  Explore <span className="inline-block">&gt;</span>
                </Link>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal>
              <div className="bg-[#737373] p-8 rounded-2xl flex flex-col justify-between min-h-[260px] h-full">
                <div>
                  <svg className="w-6 h-6 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                    Building a site that closes deals
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Convert visitors into paying clients
                  </p>
                </div>
                <Link href="/services/web-design-development" className="text-xs font-bold text-white hover:underline mt-6 inline-flex items-center gap-1">
                  Explore <span className="inline-block">&gt;</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why Section */}
      <section className="py-20 md:py-32 bg-[#e4dbff] border-y border-gray-border/25">
        <Container className="max-w-7xl space-y-20 md:space-y-32">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full order-last lg:order-first">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] rounded-3xl aspect-[4/5] flex items-center justify-center relative p-8 shadow-sm">
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-dark/20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="absolute -top-3 -right-3 text-2xl font-bold text-dark/30 font-sans select-none leading-none">
                      1
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                  Why
                </span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mt-2 mb-4 leading-tight">
                  We deliver what matters most
                </h2>
                <p className="font-sans text-sm md:text-base text-dark/70 leading-relaxed mb-6">
                  VASP Digital knows London, the GTA, and what works for local businesses. We measure everything by leads and revenue, not vanity metrics. You get transparency, expertise, and results that stick.
                </p>
                <div className="flex items-center gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-sans font-semibold text-sm px-6 py-2.5 rounded-xl bg-white text-dark border-2 border-dark shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                  >
                    Start
                  </Link>
                  <Link
                    href="/about"
                    className="font-sans font-semibold text-sm text-dark hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    Learn <span className="inline-block transition-transform group-hover:translate-x-0.5">&gt;</span>
                  </Link>
                </div>

                <div className="mt-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-dark mb-2">
                    Local expertise
                  </h3>
                  <p className="font-sans text-sm md:text-base text-dark/70 leading-relaxed">
                    No jargon, no surprises, just honest strategy and clear reporting.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full order-last lg:order-first">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] rounded-3xl aspect-[4/5] flex items-center justify-center relative p-8 shadow-sm">
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-dark/20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="absolute -top-3 -right-3 text-2xl font-bold text-dark/30 font-sans select-none leading-none">
                      2
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal>
                <h3 className="font-display font-bold text-xl md:text-2xl text-dark mb-2">
                  02. Feature two
                </h3>
                <p className="font-sans text-sm md:text-base text-dark/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full order-last lg:order-first">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] rounded-3xl aspect-[4/5] flex items-center justify-center relative p-8 shadow-sm">
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-dark/20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="absolute -top-3 -right-3 text-2xl font-bold text-dark/30 font-sans select-none leading-none">
                      3
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal>
                <h3 className="font-display font-bold text-xl md:text-2xl text-dark mb-2">
                  03. Feature three
                </h3>
                <p className="font-sans text-sm md:text-base text-dark/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full order-last lg:order-first">
              <Reveal>
                <div className="w-full bg-[#e3e3e3] rounded-3xl aspect-[4/5] flex items-center justify-center relative p-8 shadow-sm">
                  <div className="relative flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-dark/20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="absolute -top-3 -right-3 text-2xl font-bold text-dark/30 font-sans select-none leading-none">
                      4
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal>
                <h3 className="font-display font-bold text-xl md:text-2xl text-dark mb-2">
                  Proven track record
                </h3>
                <p className="font-sans text-sm md:text-base text-dark/70 leading-relaxed">
                  Clinics, contractors, and service businesses trust us to deliver
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-bold text-4xl md:text-5xl text-[#080e0c] mb-4">
                  FAQ
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                  Have questions about our services or how we work? Find answers below.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sans font-semibold text-sm px-6 py-2.5 rounded-xl bg-white text-dark border-2 border-dark shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                >
                  Contact
                </Link>
              </Reveal>
            </div>

            {/* Right Column */}
            <FAQInteractive />
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#fd7056] py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <Container className="max-w-5xl">
          <Reveal>
            <div className="relative bg-[#7c7c7c] border-2 border-white/20 rounded-3xl p-8 md:p-16 text-center overflow-hidden flex flex-col items-center justify-center min-h-[400px] shadow-lg">
              {/* Faint background silhouette avatar icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none z-0 select-none">
                <svg
                  className="w-96 h-96 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              {/* Content on top */}
              <div className="relative z-10 max-w-3xl flex flex-col items-center">
                <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-white leading-[1.15] mb-4">
                  Ready to grow your business
                </h2>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-2xl">
                  Talk to an expert about the right strategy for your goals
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-sans font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-[#e4dbff] text-[#080e0c] border-2 border-[#080e0c] shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                  >
                    Talk
                  </Link>
                  <Link
                    href="/contact?type=audit"
                    className="inline-flex items-center justify-center font-sans font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-white text-[#080e0c] border-2 border-[#080e0c] shadow-[4px_4px_0_0_#080e0c] hover:shadow-[2px_2px_0_0_#080e0c] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
                  >
                    Audit
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
