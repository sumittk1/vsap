import type { Metadata } from "next";
import FeatureSection from "@/components/sections/FeatureSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { testimonials } from "@/data/content";
import { 
  Search, Shield, Cpu, BarChart2, Link2, Sparkles, Award, Target, ChevronRight, CheckCircle2 
} from "lucide-react";
import { Reveal, scaleIn } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "SEO Services | SEO Agency for Local Businesses",
  description:
    "Rank higher, get found, and grow consistently with VASP Digital's SEO services — technical SEO, on-page optimization, content strategy, and link building.",
  alternates: { canonical: "/services/seo" },
};

const seoFAQs = [
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy. Most businesses see meaningful results in three to six months, with significant growth by month nine to twelve. The timeline depends on competition, current site health, and your industry. We'll give you a realistic estimate during your strategy call.",
  },
  {
    question: "What's included in each package?",
    answer:
      "Starter includes technical audits and on-page optimization. Growth adds content strategy and link building. Dominance includes everything plus aggressive link building, competitor analysis, and a dedicated account manager. See the pricing section for full details.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We track keyword rankings, organic traffic, and lead volume. You'll get a monthly report showing progress on all metrics. We also set baseline goals during onboarding so you know exactly what success looks like.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "We offer flexible terms. Most clients commit to three to six months to see real results, but we're happy to discuss what works best for your situation. There's no lock-in if you're not seeing progress.",
  },
  {
    question: "Can you guarantee rankings?",
    answer:
      "No one can guarantee specific rankings. What we guarantee is a strategic, ethical approach based on proven SEO principles. We focus on sustainable growth, not shortcuts that could hurt your site.",
  },
];

export default function SEOServicesPage() {
  const problems = [
    { title: "You're invisible in search", desc: "Potential customers can't find you online. Your competitors dominate the top results while you lose qualified leads every month." },
    { title: "Leads are inconsistent", desc: "Without a predictable lead source, your pipeline stays unpredictable. You rely on referrals or expensive paid ads instead of organic growth." },
    { title: "Marketing spend is wasted", desc: "You're paying for ads or trying tactics that don't move the needle. A solid SEO strategy creates a sustainable, cost-effective lead channel." }
  ];

  const pageTestimonials = [
    {
      quote: '"We went from page three to page one in six months. The leads have been consistent and qualified."',
      author: "Sarah Mitchell",
      role: "Owner, dental clinic"
    },
    {
      quote: '"Our organic traffic tripled in a year. We\'re no longer dependent on paid ads to fill our pipeline."',
      author: "James Chen",
      role: "Founder, home services"
    },
    {
      quote: '"Rankings improved across all our target keywords. The ROI on SEO is way better than what we were spending on Google Ads."',
      author: "Emma Rodriguez",
      role: "Director, legal firm"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="bg-brand-purple border-2 border-white rounded-[32px] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <Reveal>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-white/60 block mb-4">
                    SEO services
                  </span>
                  <h1 className="text-h1 text-white mb-6">
                    Rank higher. Get found. <br />Grow consistently.
                  </h1>
                  <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    SEO is the foundation for local business lead generation. It drives qualified traffic from search and builds long-term growth without relying on paid ads.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#pricing"
                      className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                    >
                      Packages
                    </a>
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                    >
                      Audit
                    </a>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-[#e3e3e3] rounded-2xl w-full aspect-[4/3] flex items-center justify-center border border-border/20">
                    <svg className="w-16 h-16 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-purple block mb-3 text-center">
                Problem
              </span>
              <h2 className="text-h2 text-foreground text-center mb-4">
                What SEO solves for your business
              </h2>
              <p className="font-sans text-base md:text-lg text-muted leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Most local businesses struggle to be found in search. Without visibility, you lose leads to competitors who rank higher. SEO fixes this by making your business discoverable when customers search for what you offer.
              </p>
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="#pricing"
                  className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                >
                  Learn
                </a>
                <a 
                  href="#pricing"
                  className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                >
                  Arrow <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mt-16">
            <div className="flex flex-col justify-center">
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  {problems.map((prob) => (
                    <div 
                      key={prob.title}
                      className="border-b border-foreground/10 pb-6"
                    >
                      <h3 className="text-h3 text-foreground mb-2">
                        {prob.title}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="w-full h-full">
              <Reveal delay={0.4} className="h-full">
                <div className="bg-[#e3e3e3] rounded-3xl w-full h-full min-h-[350px] lg:min-h-full flex items-center justify-center border border-border/20">
                  <svg className="w-24 h-24 text-foreground/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 md:py-32 bg-white border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-purple block text-center mb-3">
                Included
              </span>
              <h2 className="text-h2 text-foreground text-center mb-4">
                What's included
              </h2>
              <p className="font-sans text-base text-muted text-center max-w-2xl mx-auto">
                Every SEO package includes the core work needed to improve rankings and drive qualified leads.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Column 1 */}
            <div className="space-y-6">
              <Reveal variant={scaleIn} delay={0.05}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <Cpu className="w-10 h-10 text-foreground mb-4" />
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      Technical SEO audits and fixes
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                      Site speed, mobile optimization, crawlability improvements.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal variant={scaleIn} delay={0.1}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-xs font-semibold text-muted uppercase mb-2 block">
                      Technical
                    </span>
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      On-page optimization and keyword targeting
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                      Metadata, headings, content alignment with search intent.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="bg-[#e3e3e3] rounded-xl aspect-[16/9] w-full flex items-center justify-center border border-border/20 mt-6">
                    <svg className="w-10 h-10 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <Reveal variant={scaleIn} delay={0.15}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-xs font-semibold text-muted uppercase mb-2 block">
                      OnPage
                    </span>
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      Content strategy and internal linking
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                      High-quality, optimized content that ranks and converts.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal variant={scaleIn} delay={0.2}>
                <div className="bg-[#e3e3e3] rounded-[20px] aspect-[4/3] w-full flex items-center justify-center border border-border/20">
                  <svg className="w-12 h-12 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>

              <Reveal variant={scaleIn} delay={0.25}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between">
                  <div>
                    <Link2 className="w-10 h-10 text-foreground mb-4" />
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      Link building and authority growth
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                      Ethical, local-focused backlinks that boost domain authority.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <Reveal variant={scaleIn} delay={0.3}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between">
                  <div>
                    <BarChart2 className="w-10 h-10 text-foreground mb-4" />
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      Monthly reporting and performance tracking
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6 font-sans">
                      Transparent dashboards showing rankings, traffic, and lead growth.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal variant={scaleIn} delay={0.35}>
                <div className="bg-white border border-[#e3e3e3] rounded-[20px] p-6 flex flex-col justify-between font-sans">
                  <div>
                    <span className="font-sans text-xs font-semibold text-muted uppercase mb-2 block">
                      Reporting
                    </span>
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                      Ongoing strategy and optimization
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                      We adapt based on results and market changes to keep you ahead.
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-xs font-semibold text-foreground hover:text-brand-purple cursor-pointer transition-colors inline-flex items-center gap-1">
                      Learn <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal variant={scaleIn} delay={0.4}>
                <div className="bg-[#e3e3e3] rounded-[20px] aspect-[4/3] w-full flex items-center justify-center border border-border/20">
                  <svg className="w-12 h-12 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 1: Technical SEO */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Info Column */}
            <div className="flex flex-col gap-4 justify-center">
              <Reveal>
                <span className="font-display font-semibold text-xs uppercase tracking-wider text-dark">
                  Foundation
                </span>
                <h2 className="text-h2 text-foreground mb-4">
                  Technical SEO creates the foundation
                </h2>
                <p className="font-sans text-base text-muted leading-relaxed mt-2">
                  Search engines need to crawl, index, and understand your site. Technical SEO removes barriers and ensures your site performs well on all devices.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Site speed optimization for better rankings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Mobile-first indexing and responsive design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Crawl errors, indexation, and XML sitemap fixes</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Learn
                  </a>
                  <a 
                    href="#pricing"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            
            {/* Right Graphic/Placeholder Column */}
            <div className="w-full h-full">
              <Reveal delay={0.2} className="h-full">
                <div className="bg-[#e3e3e3] rounded-3xl w-full h-full min-h-[350px] lg:min-h-full flex items-center justify-center border border-border/20">
                  <svg className="w-24 h-24 text-foreground/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: On-Page SEO */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Graphic Column */}
            <div className="w-full h-full order-last lg:order-first">
              <Reveal delay={0.2} className="h-full">
                <div className="bg-[#e3e3e3] rounded-3xl w-full h-full min-h-[350px] lg:min-h-full flex items-center justify-center border border-border/20">
                  <svg className="w-24 h-24 text-foreground/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="flex flex-col gap-4 justify-center">
              <Reveal>
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-dark">
                  Relevance
                </span>
                <h2 className="text-h2 text-foreground mb-4">
                  On-page SEO drives relevance and rankings
                </h2>
                <p className="font-sans text-base text-muted leading-relaxed mt-2">
                  Every page needs to target the right keywords and send clear signals to search engines. On-page optimization aligns your content with what customers are searching for.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Keyword research and targeting strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Title tags, meta descriptions, and header optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Local signals and schema markup implementation</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Learn
                  </a>
                  <a 
                    href="#pricing"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: Content and Internal Linking */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Info Column */}
            <div className="flex flex-col gap-4 justify-center">
              <Reveal>
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-dark">
                  Authority
                </span>
                <h2 className="text-h2 text-foreground mb-4">
                  Content and internal linking build authority
                </h2>
                <p className="font-sans text-base text-muted leading-relaxed mt-2">
                  Quality content attracts links and keeps visitors engaged. Strategic internal linking distributes authority across your site and guides users to conversion pages.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Optimized content that ranks and converts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Link2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Strategic internal linking for better crawlability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Content clusters that establish topical authority</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Learn
                  </a>
                  <a 
                    href="#pricing"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: Content and Internal Linking */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Info Column */}
            <div className="flex flex-col gap-4 justify-center">
              <Reveal>
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-dark">
                  Authority
                </span>
                <h2 className="text-h2 text-foreground mb-4">
                  Content and internal linking build authority
                </h2>
                <p className="font-sans text-base text-muted leading-relaxed mt-2">
                  Quality content attracts links and keeps visitors engaged. Strategic internal linking distributes authority across your site and guides users to conversion pages.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Optimized content that ranks and converts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Link2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Strategic internal linking for better crawlability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-foreground/80">Content clusters that establish topical authority</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    Learn
                  </a>
                  <a 
                    href="#pricing"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            
            {/* Right Graphic Column */}
            <div className="w-full h-full">
              <Reveal delay={0.2} className="h-full">
                <div className="bg-[#e3e3e3] rounded-3xl w-full h-full min-h-[350px] lg:min-h-full flex items-center justify-center border border-border/20">
                  <svg className="w-24 h-24 text-foreground/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        eyebrow="Trust"
        title="Link building establishes trust and authority"
        description="Backlinks act as votes of confidence. We pursue ethical, relevant links from local business directories and industry sources to boost your domain authority and rankings."
        bullets={[
          "Local business directory and citation building",
          "Relevant industry and niche backlink outreach",
          "Competitor analysis and link gap identification",
        ]}
        bg="coral"
        imageLabel="Link building"
      />

      {/* Transparent Reporting Section */}
      <section className="py-24 md:py-32 bg-brand-lavender/60 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-purple block mb-3 text-center">
                Growth
              </span>
              <h2 className="text-h2 text-foreground text-center mb-4">
                Transparent reporting
              </h2>
              <p className="font-sans text-base text-muted text-center">
                You'll see exactly what's working and where you're headed.
              </p>
            </Reveal>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-border/20 rounded-[24px] p-8 md:p-12 shadow-sm group hover:border-brand-purple/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col items-start gap-4">
                <Reveal>
                  <span className="font-display font-semibold text-xs uppercase tracking-wider text-brand-purple block mb-2">
                    Monthly
                  </span>
                  <h3 className="text-h3 text-foreground mb-3">
                    Monthly ranking and traffic reports
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed max-w-md mb-6">
                    We track keyword positions, organic traffic growth, and lead volume. You'll see progress in a clear, easy-to-understand dashboard.
                  </p>
                  <div className="flex items-center gap-6">
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white text-foreground font-display font-semibold text-sm px-6 py-2.5 rounded-lg border border-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                    >
                      View
                    </a>
                    <a 
                      href="#pricing"
                      className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                    >
                      Arrow <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              </div>
              <div className="w-full">
                <Reveal delay={0.2}>
                  <div className="bg-[#e3e3e3] rounded-2xl w-full aspect-[4/3] flex items-center justify-center border border-border/20">
                    <svg className="w-16 h-16 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-white border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-purple block mb-3 text-center">
                Plans
              </span>
              <h2 className="text-h2 text-foreground text-center mb-4">
                SEO pricing
              </h2>
              <p className="font-sans text-base text-muted text-center">
                Choose the package that fits your business goals and growth stage.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$19",
                period: "/mo",
                cta: "Choose package",
                features: [
                  "Technical SEO audit and fixes",
                  "On-page optimization for core pages",
                  "Monthly reporting and tracking",
                ],
              },
              {
                name: "Growth",
                price: "$29",
                period: "/mo",
                cta: "Choose package",
                features: [
                  "Everything in Starter plus",
                  "Content strategy and creation",
                  "Internal linking and site structure",
                  "Local link building campaign",
                ],
              },
              {
                name: "Dominance",
                price: "$49",
                period: "/mo",
                cta: "Get started",
                features: [
                  "Everything in Growth plus",
                  "Feature text goes here",
                  "Feature text goes here",
                  "Feature text goes here",
                  "Feature text goes here",
                ],
              },
            ].map((pkg, idx) => (
              <Reveal key={pkg.name} delay={idx * 0.1}>
                <div className="bg-brand-lavender/30 border border-border/40 rounded-2xl p-8 flex flex-col justify-between min-h-[480px] hover:border-brand-purple/30 transition-all duration-300">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-display font-bold text-xl text-foreground">{pkg.name}</h3>
                      <div className="w-8 h-8 rounded-lg bg-brand-lavender-mid/40 flex items-center justify-center text-brand-purple">
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
                    
                    <div className="space-y-3 pt-6 border-t border-border/20">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="font-sans text-xs text-foreground/75">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full bg-brand-lavender-mid text-foreground border border-black/80 font-display font-semibold text-sm px-6 py-3 rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.85)] transition-all cursor-pointer"
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Results Section */}
      <section className="py-24 md:py-32 bg-brand-coral text-white border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <span className="font-display font-semibold text-xs uppercase tracking-wider text-white block mb-3 text-center">
                Results
              </span>
              <h2 className="text-h2 text-white text-center mb-4">
                See what our clients achieved with SEO
              </h2>
            </Reveal>
          </div>

          <div className="relative max-w-5xl mx-auto px-12">
            {/* Navigation Arrows */}
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pageTestimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 0.1}>
                  <div className="bg-white/5 border border-white/25 rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 text-white text-lg">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <p className="font-sans text-sm md:text-base leading-relaxed text-white">
                        {t.quote}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-sm text-white leading-tight">
                          {t.author}
                        </h4>
                        <span className="font-sans text-xs text-white/60 block mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-8">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="FAQ"
        description="Common questions about our SEO services and process."
        items={seoFAQs}
      />

      <CTASection
        title="Ready to grow your business?"
        description="Choose the right SEO package and start generating consistent, qualified leads from search."
        primaryCta={{ label: "Choose package", href: "#pricing" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />
    </>
  );
}
