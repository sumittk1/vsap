import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, Mail, Phone, Search, Sparkles, Target, Laptop, ChevronRight, Package, Globe, Check } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Google Ads Management for Local Businesses | VASP Digital",
  description:
    "Get qualified leads fast with Google Ads. Put your business in front of ready-to-buy customers searching today.",
  alternates: { canonical: "/services/paid-ads/google-ads" },
};

const featureList = [
  {
    title: "Instant Google visibility",
    desc: "Your ads appear at the top of search results the moment someone looks for your services. No waiting for rankings to build.",
    icon: Search
  },
  {
    title: "Pay only for real clicks",
    desc: "You're charged when someone actually clicks your ad, not for impressions or views. Every dollar goes toward potential customers.",
    icon: Target
  },
  {
    title: "Scale what works fast",
    desc: "Find a winning keyword or audience and increase your budget immediately. Growth happens in days, not months.",
    icon: Sparkles
  }
];

const packages = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    features: [
      "Campaign setup and launch",
      "Monthly performance reporting",
      "Basic bid management"
    ],
    buttonText: "Get started"
  },
  {
    name: "Growth",
    price: "$29",
    period: "/mo",
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here"
    ],
    buttonText: "Get started"
  },
  {
    name: "Enterprise plan",
    price: "$49",
    period: "/mo",
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here"
    ],
    buttonText: "Get started"
  }
];

const faqs = [
  {
    question: "How fast do results appear?",
    answer: "Your ads go live within 24 to 48 hours of approval. You'll see traffic and clicks immediately, though it takes a few weeks to gather enough data to optimize properly. We track everything from day one."
  },
  {
    question: "What's the minimum monthly budget?",
    answer: "We recommend starting with at least $1,200 per month to run meaningful campaigns and gather reliable data. Smaller budgets spread too thin across keywords don't generate the volume needed to test and improve."
  },
  {
    question: "Can I pause or change my campaign?",
    answer: "Yes. You can adjust your budget, pause campaigns, or change keywords anytime. We'll work with you to make changes that make sense for your business goals and current performance."
  },
  {
    question: "Do you require a long-term contract?",
    answer: "No long-term contracts. We work month to month. If you're not seeing results or the fit isn't right, you can stop anytime. We focus on proving our value every single month."
  },
  {
    question: "How do you measure success?",
    answer: "We track leads, phone calls, form submissions, and sales depending on your business. Every campaign has clear conversion goals. You'll see detailed reports showing cost per lead, ROI, and which keywords are working."
  }
];

export default function GoogleAdsPage() {
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
                    Google Ads Management
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Get qualified <br />
                    leads fast with <br />
                    Google Ads
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Put your business in front of ready-to-buy customers searching on Google today. Stop waiting for leads and start capturing them from people actively looking for what you offer.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#contact-lead" variant="white">
                      Launch My Google Ads
                    </Button>
                    <Button href="#contact-lead" variant="white">
                      Request a Free Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="Google Ads" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Google Ads Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Why Google Ads
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Reach customers actively searching for your services
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Google Ads puts your business in front of high-intent prospects. These are people searching right now for what you offer. You pay only for clicks, and we make sure every click counts.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Immediate visibility above organic results</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Qualified leads from search intent matching</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Full control over budget and campaign timing</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Get a free audit
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn more <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Graphic/Placeholder Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Why Google Ads" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#f0edff]/60 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Campaigns
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Three ways to reach your customers
              </h2>
              <p className="text-body-lg text-muted">
                Each campaign type serves a different purpose in your lead generation strategy
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[#7E7D8C] rounded-card p-8 flex flex-col justify-between min-h-[320px] shadow-sm text-white">
                <div>
                  <Package className="w-6 h-6 text-white mb-6" />
                  <h3 className="font-display font-bold text-xl text-white mb-4">Search ads</h3>
                  <p className="font-sans text-xs text-white/85 leading-relaxed">
                    Appear at the top of Google search results when people look for your services.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <a href="#contact-lead" className="font-sans text-xs font-semibold text-white hover:text-white/80 cursor-pointer transition-colors inline-flex items-center gap-1">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#7E7D8C] rounded-card p-8 flex flex-col justify-between min-h-[320px] shadow-sm text-white">
                <div>
                  <Package className="w-6 h-6 text-white mb-6" />
                  <h3 className="font-display font-bold text-xl text-white mb-4">Display ads</h3>
                  <p className="font-sans text-xs text-white/85 leading-relaxed">
                    Build awareness across the web while people browse relevant sites and content.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <a href="#contact-lead" className="font-sans text-xs font-semibold text-white hover:text-white/80 cursor-pointer transition-colors inline-flex items-center gap-1">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[#7E7D8C] rounded-card p-8 flex flex-col justify-between min-h-[320px] shadow-sm text-white">
                <div>
                  <Package className="w-6 h-6 text-white mb-6" />
                  <h3 className="font-display font-bold text-xl text-white mb-4">Remarketing ads</h3>
                  <p className="font-sans text-xs text-white/85 leading-relaxed">
                    Re-engage visitors who showed interest but didn't convert on your site.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <a href="#contact-lead" className="font-sans text-xs font-semibold text-white hover:text-white/80 cursor-pointer transition-colors inline-flex items-center gap-1">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral text-white border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12 justify-center">
              {featureList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={idx * 0.1}>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">{item.title}</h3>
                        <p className="font-sans text-sm md:text-base text-white/85 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Features" className="bg-white/10 border-white/20" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Intent Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Intent
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Capture leads from people actively searching
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Google Ads reaches customers at the exact moment they're looking for what you offer. These aren't random clicks. They're people with intent, ready to take action.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <span className="text-foreground/60 shrink-0 font-bold font-sans select-none">-</span>
                    <span className="text-sm text-foreground/80">People searching for your exact services right now</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-foreground/60 shrink-0 font-bold font-sans select-none">-</span>
                    <span className="text-sm text-foreground/80">Lower cost per lead through precise keyword targeting</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-foreground/60 shrink-0 font-bold font-sans select-none">-</span>
                    <span className="text-sm text-foreground/80">Better conversion rates because of high buyer intent</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Get a free audit
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn more <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Image Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Search Intent" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Conversion Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Conversion tracking" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Conversion
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Turn clicks into customers with proper tracking
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  A dedicated landing page and solid conversion tracking are what separate wasted ad spend from profitable campaigns. We build pages designed to convert and track every lead.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Custom landing pages built to convert visitors into leads</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Complete conversion tracking for calls, forms, and sales</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Clear visibility into which ads and keywords generate real results</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Get a free audit
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn more <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Management Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Management
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Continuous improvement through testing and data
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  We don't set campaigns and forget them. Every month we test new approaches, refine targeting, and adjust bids based on real performance data. You get detailed reports showing exactly what's working.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Weekly optimization to improve lead quality and lower costs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">A/B testing on ad copy, landing pages, and audience targeting</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Monthly reports showing leads, cost per acquisition, and ROI</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Get a free audit
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Learn more <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Image Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Ad Management" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Simple Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Plans
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Simple pricing
              </h2>
              <p className="text-body-lg text-muted">
                Choose the right Google Ads package for your business
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <Reveal key={pkg.name} delay={idx * 0.1}>
                <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-between min-h-[480px] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display font-bold text-xl text-foreground">{pkg.name}</h3>
                      <Package className="w-5 h-5 text-foreground shrink-0" />
                    </div>
                    
                    <div className="flex items-baseline mb-1">
                      <span className="font-display font-extrabold text-5xl text-foreground">{pkg.price}</span>
                      <span className="font-sans text-sm text-muted ml-1">{pkg.period}</span>
                    </div>
                    <p className="font-sans text-xs text-muted mb-6">
                      {pkg.name === "Enterprise plan" ? "or $499 yearly" : "per month"}
                    </p>
                    
                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-foreground/80">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <Button href="/contact" variant="primary" className="w-full">
                      {pkg.buttonText}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Questions Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto mb-12">
            <Reveal>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Questions
              </h2>
              <p className="text-body-lg text-muted">
                Everything you need to know about running Google Ads with VASP Digital
              </p>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.question} delay={idx * 0.05}>
                <details className="group bg-white border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-brand-purple/20 transition-all duration-300">
                  <summary className="flex items-center justify-between text-foreground list-none">
                    <span className="font-display font-bold text-base md:text-lg pr-4">{faq.question}</span>
                    <span className="transition duration-300 group-open:rotate-45 shrink-0">
                      <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-sans text-sm md:text-base text-muted leading-relaxed border-t border-border/40 pt-4">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ready to talk Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-start gap-6">
            <Reveal>
              <h2 className="text-h2 text-foreground leading-tight mb-2">
                Ready to talk?
              </h2>
              <p className="text-body-lg text-muted mb-6">
                Have more questions about Google Ads or want to discuss your specific needs?
              </p>
              <Button href="/contact" variant="white">
                Contact us
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-brand-coral text-white py-16 md:py-24 border-t border-brand-coral-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-2">
                Ready for more qualified leads?
              </h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-xl mx-auto">
                Stop waiting for customers to find you. Let's launch your Google Ads campaign today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/contact" variant="white">
                  Launch my Google Ads
                </Button>
                <Button href="/contact" variant="white">
                  Request a free audit
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
