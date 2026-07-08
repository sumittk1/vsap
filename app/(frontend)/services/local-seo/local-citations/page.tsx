import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Local Citations | NAP Consistency & Directory Management | VASP Digital",
  description:
    "Strengthen your local presence with consistent directory listings. VASP Digital builds and manages citations that boost credibility, trust, and rankings.",
  alternates: { canonical: "/services/local-seo/local-citations" },
};

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    billing: "per year",
    features: [
      "25 local directory listings",
      "NAP consistency audit",
      "One-time setup only"
    ]
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    billing: "per year",
    featured: true,
    features: [
      "50 premium directory placements",
      "Quarterly consistency monitoring",
      "Error correction and updates",
      "Local authority building support"
    ]
  },
  {
    name: "Authority",
    price: "$49",
    period: "/mo",
    billing: "per year",
    features: [
      "100+ high-authority directory listings",
      "Full cleanup & corrections",
      "Ongoing monitoring & reporting",
      "Priority support",
      "Monthly search insights"
    ]
  }
];

const faqs = [
  {
    question: "What exactly are citations?",
    answer: "Citations are online mentions of your business name, address, and phone number across directories, maps, and local platforms. They act as trust signals to Google and customers. Consistent citations across the web tell search engines your business is real, established, and worth ranking higher in local results."
  },
  {
    question: "How long until I see results?",
    answer: "Most citations go live within 2 to 4 weeks, though some high-authority directories take longer. You'll start seeing ranking improvements within 6 to 8 weeks as Google recognizes the consistency and authority. We monitor everything and keep you updated on progress."
  },
  {
    question: "Which directories do you use?",
    answer: "We build citations on Google Business Profile, Apple Maps, Bing, industry-specific directories, and local business platforms relevant to your industry and location. Your plan determines how many directories we target. We focus on high-authority sources that actually drive traffic and trust."
  },
  {
    question: "Can you fix existing citation errors?",
    answer: "Yes. We audit all your current citations, identify inconsistencies and duplicates, and correct them. If previous agencies left your information scattered or wrong, we clean it up and rebuild it correctly. This is part of our audit and correction process."
  },
  {
    question: "Do citations really improve rankings?",
    answer: "Absolutely. Citations are a core local SEO ranking factor. Google uses them to verify your business exists, confirm your location, and assess your local authority. Combined with reviews and a strong Google Business Profile, consistent citations push you higher in local search results and maps."
  }
];

export default function LocalCitationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-foreground overflow-hidden py-10 md:py-16">
        <Container>
          <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start text-white">
                <Reveal>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white/60 block mb-4">
                    Local Citations
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Strengthen your <br />
                    local presence <br />
                    with consistent <br />
                    citations
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Your business needs to appear consistently across directories and local listings. VASP Digital builds and manages citations that boost credibility, trust, and your local search rankings.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white">
                      Strengthen
                    </Button>
                    <Button href="/contact" variant="white">
                      Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="Local Citations" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Foundation Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Foundation
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  What local citations actually are
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  A citation is any online mention of your business name, address, and phone number. They live on Google Maps, Yelp, industry directories, and local platforms. Think of them as digital proof that your business exists and operates where you say it does.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Consistent information across all platforms</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Trust signals that Google recognizes and rewards</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Local authority that helps you rank higher</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Learn more
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Explore <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="What are local citations" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Why consistency matters" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Trust
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Why consistency matters across the web
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  When your business information matches everywhere, Google trusts you more. Customers find you easier. Confused or conflicting data kills rankings and loses leads before they start.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Explore
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Accuracy Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Accuracy
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  NAP consistency builds real credibility
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Your name, address, and phone number need to be identical everywhere. One typo or variation across directories and Google gets confused about which version is real. Consistent NAP data stops lost calls and strengthens your local authority.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Discover
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Read <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="NAP consistency" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Control Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Manage your presence" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Control
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Manage your presence on every platform
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  We find every directory where your business should appear, claim what exists, and build what's missing. Then we keep everything updated and accurate. No more scattered listings or duplicate profiles working against you.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Review
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Explore <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Visibility Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Visibility
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Citations lift you higher in maps and search
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  When your citations are complete and consistent, Google sees a business worth ranking. You show up stronger in the Local Pack, on Maps, and in organic results. More visibility means more calls, more traffic, more leads.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Explore
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="How citations support SEO" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Plans
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Citation packages
              </h2>
              <p className="text-body-lg text-muted">
                Choose the right plan for your business
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan) => (
              <Reveal key={plan.name} className="flex">
                <div className={`w-full bg-white rounded-card p-8 shadow-sm flex flex-col justify-between border ${
                  plan.featured ? "border-brand-purple border-2 relative transform lg:-translate-y-2 shadow-md" : "border-border"
                }`}>
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
                    </div>
                    <div className="flex items-baseline mb-1">
                      <span className="font-display font-extrabold text-5xl text-foreground">{plan.price}</span>
                      <span className="font-sans text-sm text-muted ml-1">{plan.period}</span>
                    </div>
                    <p className="font-sans text-xs text-muted mb-6">{plan.billing}</p>
                    
                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-foreground/80">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button href="/contact" variant={plan.featured ? "primary" : "white"} className="w-full">
                      Get started
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Questions Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start">
              <Reveal>
                <div>
                  <h2 className="text-h2 text-foreground leading-tight mb-4">
                    Questions
                  </h2>
                  <p className="text-body-lg text-muted mb-8">
                    Find answers about local citations and how they strengthen your business
                  </p>
                </div>
                <Button href="/contact" variant="primary">
                  Contact us
                </Button>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={faq.question} delay={idx * 0.05}>
                  <details className="group bg-white border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-brand-purple/20 transition-all duration-300">
                    <summary className="flex items-center justify-between text-foreground list-none">
                      <span className="font-display font-bold text-base pr-4">{faq.question}</span>
                      <span className="transition duration-300 group-open:rotate-45 shrink-0">
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
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to build real local authority?"
        description="Consistent citations are the foundation of local search trust. Let's get your business listed right."
        primaryCta={{ label: "Strengthen my local presence", href: "/contact" }}
        secondaryCta={{ label: "Get a free audit", href: "/contact" }}
      />
    </>
  );
}

