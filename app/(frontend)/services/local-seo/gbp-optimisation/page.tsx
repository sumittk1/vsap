import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturesListSection from "@/components/sections/FeaturesListSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Business Profile Optimisation",
  description:
    "Boost your calls, map visibility, and reputation with a trusted Google Business Profile setup from VASP Digital.",
  alternates: { canonical: "/services/local-seo/gbp-optimisation" },
};

const faqs = [
  {
    question: "How long does optimization take?",
    answer: "Most profiles show improvement within two to four weeks. We handle the setup immediately, but Google takes time to crawl and index changes. You'll see the real gains in map visibility and call volume over the first month."
  },
  {
    question: "What if I already have a profile?",
    answer: "We audit what's there and fix it. Most profiles are incomplete or poorly optimized. We'll fill in missing details, correct inaccurate information, add photos and services, and set up a posting schedule."
  },
  {
    question: "Do you manage reviews and responses?",
    answer: "Yes. Our Growth and Premium plans include review monitoring and response management. We reply to reviews professionally and help build your reputation over time."
  },
  {
    question: "Can you help with multiple locations?",
    answer: "Absolutely. We manage profiles for multi-location businesses. Each location gets its own optimization strategy based on local demand and competition."
  },
  {
    question: "Will this improve my local search rankings?",
    answer: "A strong GBP profile is one of the biggest factors in local search rankings. Combined with on-site SEO, it's how you get found first. We track rankings and visibility monthly."
  }
];

export default function GBPOptimisationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-foreground overflow-hidden py-10 md:py-16">
        <Container>
          <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start text-white">
                <Reveal>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Get found locally <br />
                    with GBP <br />
                    optimization
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Your Google Business Profile is where customers find you first. We optimize every detail to boost calls, map visibility, and local trust.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white">
                      Optimize
                    </Button>
                    <Button href="/contact" variant="white">
                      Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="GBP Optimisation" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Foundation Section ("How visibility turns into calls") */}
      <section className="py-24 md:py-32 bg-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                Foundation
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                How visibility turns into calls
              </h2>
              <p className="text-body-lg text-muted">
                Your profile is the bridge between search and action. When customers find you on Google Maps, they decide in seconds whether to call, visit, or move on.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-16">
            {/* Left Card */}
            <div className="flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  The reality
                </span>
                <h3 className="text-h3 text-foreground leading-tight mb-4">
                  Most profiles leave money on the table
                </h3>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Incomplete information, missing photos, and weak descriptions cost you calls every single day. A properly optimized profile captures those moments when customers are ready to act.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Explore
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
            {/* Right Card */}
            <div className="w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Most profiles leave money on the table" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Included Section ("Everything we handle to get your profile right") */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block">
                  Included
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mt-2 mb-6">
                  Everything we handle to get your profile right
                </h2>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Learn
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="space-y-8 lg:col-span-6 lg:col-start-7">
              {[
                {
                  title: "Complete profile setup",
                  desc: "We fill every field with accurate, keyword-rich business information.",
                },
                {
                  title: "Categories that matter",
                  desc: "Right categories mean Google shows you to the right customers.",
                },
                {
                  title: "Photos and descriptions",
                  desc: "Visual proof of your work builds confidence before the first call.",
                },
                {
                  title: "Profile foundation",
                  desc: "Accurate business info, hours, contact details, and service areas filled completely.",
                },
              ].map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center shrink-0 text-brand-purple border border-brand-purple/20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-foreground mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Investment
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Simple pricing
              </h2>
              <p className="text-body-lg text-muted">
                One plan. Everything you need to dominate locally.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="max-w-md mx-auto bg-white border border-black/80 rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-xl text-foreground">GBP optimization</h3>
                <div className="w-8 h-8 rounded-lg bg-brand-lavender/40 flex items-center justify-center text-brand-purple border border-brand-purple/20">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
              </div>
              <div className="flex items-baseline mb-2 mt-4">
                <span className="font-display font-extrabold text-5xl text-foreground">$19</span>
                <span className="font-sans text-sm text-muted ml-1">/mo</span>
              </div>
              <p className="font-sans text-xs text-muted mb-6">One-time setup fee</p>
              
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                {[
                  "Complete profile setup",
                  "Category optimization",
                  "Photo and description work",
                  "Service area configuration",
                  "Initial posting schedule",
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="font-sans text-xs text-foreground/80">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6">
                <Button href="/contact" variant="primary" className="w-full">
                  Start optimization
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Levers That Convert Section */}
      <section className="py-24 md:py-32 bg-[#ff6f43] text-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-3">
                Leverage
              </span>
              <h2 className="text-h2 text-white leading-tight mb-4">
                The levers that convert
              </h2>
              <p className="text-body-lg text-white/80">
                These five areas drive calls, visibility, and customer action on your profile.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
            {/* Left Column (5 columns on desktop) */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="border border-white/20 rounded-card overflow-hidden">
                  <ImagePlaceholder ratio="aspect-[4/3]" label="The levers that convert" className="bg-white/10 text-white" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-white/15 border border-white/20 rounded-2xl p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-3">Posts</span>
                  <h3 className="font-display font-bold text-xl mb-4">Keep your profile active and fresh</h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                    Regular posts signal to Google that your business is alive and engaged.
                  </p>
                  <div className="flex gap-4 items-center">
                    <Button href="/contact" variant="white" size="sm">Learn</Button>
                    <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                      Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/15 border border-white/20 rounded-2xl p-6 text-white grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-4 border border-white/10 rounded-xl overflow-hidden aspect-square">
                    <ImagePlaceholder ratio="aspect-square" label="Reviews" className="bg-white/10 text-white text-[10px]" />
                  </div>
                  <div className="sm:col-span-8 flex flex-col items-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-1">Reviews</span>
                    <h4 className="font-display font-bold text-base mb-2">Build trust through customer feedback</h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
                      Positive reviews drive calls and conversions more than anything else.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                      Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column (7 columns on desktop) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Reveal>
                  <div className="bg-white/15 border border-white/20 rounded-2xl p-8 text-white min-h-[220px] flex flex-col justify-between">
                    <div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white mb-4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 15V9a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h8a2 2 0 0 0 2-2z" />
                      </svg>
                      <h4 className="font-display font-bold text-base mb-2">Questions answered before they call</h4>
                      <p className="font-sans text-xs text-white/70 leading-relaxed">
                        Q&A removes friction and gets customers to take action faster.
                      </p>
                    </div>
                    <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors mt-4">
                      Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="bg-white/15 border border-white/20 rounded-2xl p-8 text-white min-h-[220px] flex flex-col justify-between">
                    <div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white mb-4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <h4 className="font-display font-bold text-base mb-2">Right categories, right customers</h4>
                      <p className="font-sans text-xs text-white/70 leading-relaxed">
                        Proper categorization ensures Google shows you to the right local searches.
                      </p>
                    </div>
                    <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors mt-4">
                      Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="border border-white/20 rounded-card overflow-hidden">
                  <ImagePlaceholder ratio="aspect-[16/9]" label="The levers that convert" className="bg-white/10 text-white" />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white/15 border border-white/20 rounded-2xl p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-3">Offers</span>
                  <h3 className="font-display font-bold text-xl mb-4">Promotions that drive immediate calls</h3>
                  <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                    Limited-time offers create urgency and push customers to contact you now.
                  </p>
                  <div className="flex gap-4 items-center">
                    <Button href="/contact" variant="white" size="sm">Learn</Button>
                    <a href="/contact" className="inline-flex items-center gap-1 font-display text-xs font-semibold text-white hover:text-white/80 transition-colors">
                      Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* See What Optimization Actually Delivers Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <Reveal>
                <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple border border-brand-purple/20 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  See what optimization actually delivers
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Businesses we work with see more calls, more map visibility, and more customer actions. The numbers speak for themselves.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    View
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
            <div className="lg:col-span-6 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="See what optimization delivers" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="max-w-3xl mb-16">
            <Reveal>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Questions
              </h2>
              <p className="text-body-lg text-muted">
                Everything you need to know about optimizing your profile
              </p>
            </Reveal>
          </div>

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <details className="group bg-white border border-black/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between text-foreground">
                    <span className="font-display font-bold text-base">{faq.question}</span>
                    <span className="transition duration-300 group-open:rotate-45">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-sans text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Banner Section */}
      <section className="py-24 md:py-32 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <Reveal>
            <h2 className="text-h2 text-foreground leading-tight mb-4">
              Ready to grow locally?
            </h2>
            <p className="text-body-lg text-muted mb-8">
              Let's talk about your profile
            </p>
            <Button href="/contact" variant="white">
              Contact
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#ff6f43] text-white text-center border-b border-border">
        <Container>
          <Reveal>
            <h2 className="text-h2 text-white leading-tight mb-4">
              Ready to own your local market?
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              Start with a profile that actually converts
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="white">
                Optimize my GBP
              </Button>
              <Button href="/contact" variant="white">
                Book a call
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
