import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, ChevronRight, Star, Package } from "lucide-react";
import Button from "@/components/ui/Button";
import WebDesignAuditForm from "@/components/sections/WebDesignAuditForm";

export const metadata: Metadata = {
  title: "Web Design & Development for Local Businesses | VASP Digital",
  description:
    "Custom, ROI-driven website design and development for local businesses — fast, secure, SEO-optimized, and built to convert.",
  alternates: { canonical: "/services/web-design-development" },
};

const designFeatures = [
  {
    title: "Mobile-first approach",
    desc: "Most of your clients search on phones. We design for mobile first, then scale up. Fast loading, easy navigation, clear calls to action on every screen size."
  },
  {
    title: "Lead capture built in",
    desc: "Forms, contact buttons, and CTAs are strategically placed. We make it simple for interested prospects to reach you. No friction, no dead ends."
  },
  {
    title: "Speed and performance",
    desc: "Slow sites lose clients. We optimize images, code, and hosting. Your site loads fast on any connection. Google rewards it. Your visitors appreciate it."
  }
];

const foundationFeatures = [
  {
    title: "Code that performs",
    desc: "We write clean, efficient code. Your site loads fast on any device, any connection. Google sees it. Your visitors feel it."
  },
  {
    title: "Security from the start",
    desc: "SSL certificates, regular backups, and hardened hosting. Your client data stays safe. Your reputation stays intact."
  },
  {
    title: "SEO built in",
    desc: "Proper heading structure, schema markup, mobile optimization. We lay the groundwork so you can rank. The rest is strategy and time."
  }
];

const stats = [
  {
    value: "180+",
    label: "Sites launched",
    desc: "For local businesses across Ontario and beyond"
  },
  {
    value: "1.2s",
    label: "Average page speed",
    desc: "Mobile and desktop, optimized for every visitor"
  },
  {
    value: "34%",
    label: "Bounce rate reduction",
    desc: "Better design keeps people on your site longer"
  },
  {
    value: "98%",
    label: "Client satisfaction",
    desc: "Measured by referrals and repeat work"
  }
];

const testimonials = [
  {
    quote: '"They rebuilt our site and we went from zero leads to five a week. It actually works."',
    author: "Marcus Chen",
    role: "Contractor, Toronto"
  },
  {
    quote: '"Our old website was costing us business. This one brings clients in. Simple as that."',
    author: "Sarah Mitchell",
    role: "Dental clinic, London"
  },
  {
    quote: '"Fast, professional, and they actually explained what they were doing. No nonsense."',
    author: "James Rodriguez",
    role: "Real estate agent, GTA"
  }
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    billing: "One-time project",
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup"
    ]
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    billing: "One-time project",
    featured: true,
    features: [
      "10-page custom website",
      "Lead capture forms",
      "Google Business integration",
      "3 months support included"
    ]
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    billing: "One-time project",
    features: [
      "Unlimited pages, custom design",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here"
    ]
  }
];

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Most projects take 4 to 8 weeks from start to launch. We move fast without cutting corners. The timeline depends on scope and how quickly you can provide content and feedback."
  },
  {
    question: "Do you build on WordPress?",
    answer: "Yes. WordPress is our standard platform for most clients. It's flexible, secure, and easy to update. We also build custom solutions when the project demands it."
  },
  {
    question: "What about ongoing support?",
    answer: "Support is included in every package. We handle updates, backups, and security. If you need changes or additions, we're here. Monthly support plans are available after your initial period ends."
  },
  {
    question: "Will my site rank in Google?",
    answer: "We build with SEO in mind from day one. Every site gets proper structure, speed optimization, and local SEO setup. Ranking takes time and strategy, but your foundation will be solid."
  },
  {
    question: "Can you integrate with my CRM?",
    answer: "We integrate with most major platforms. HubSpot, Zapier, Google Sheets, email services — we connect your website to the tools you already use so leads flow directly to you."
  }
];

export default function WebDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-foreground overflow-hidden py-10 md:py-16">
        <Container>
          <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">
              <div className="lg:col-span-6 flex flex-col items-start text-white">
                <Reveal>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white/60 block mb-4">
                    Websites
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Sites that convert
                  </h1>
                </Reveal>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start lg:pt-8 text-white">
                <Reveal delay={0.1}>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    A good website does one thing well. It brings in clients. We build websites for local businesses that work harder than your competition, designed to turn visitors into leads and leads into revenue.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white">
                      Propose
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="outline" 
                      className="!text-white border-white/30 hover:border-white hover:bg-white/10"
                    >
                      Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Design Feature Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">
                Design
              </span>
              <h2 className="text-h2 text-foreground leading-[1.1] mb-4">
                Built to bring in clients, not just look good
              </h2>
              <p className="text-body text-muted leading-relaxed mb-8">
                A website is a tool. It needs to work. We design for conversion, not vanity. Every element serves a purpose—to move visitors closer to becoming clients.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <Button href="/contact" variant="white">
                  Audit
                </Button>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                >
                  Learn more <ChevronRight className="w-4 h-4 text-brand-purple" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Stacked text features */}
            <div className="lg:col-span-7 space-y-8">
              {designFeatures.map((feat, idx) => (
                <Reveal key={feat.title} delay={idx * 0.1}>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Right Column: Square Image Placeholder */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Design built for conversion" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Foundation Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">
                Foundation
              </span>
              <h2 className="text-h2 text-foreground leading-[1.1] mb-4">
                Fast, secure, and built for search
              </h2>
              <p className="text-body text-muted leading-relaxed mb-8">
                We build on solid ground. Every site gets clean code, security hardened from day one, and SEO structure that gives you a real chance to rank. No shortcuts.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <Button href="/contact" variant="white">
                  Learn
                </Button>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                >
                  Details <ChevronRight className="w-4 h-4 text-brand-purple" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Stacked text features */}
            <div className="lg:col-span-7 space-y-8">
              {foundationFeatures.map((feat, idx) => (
                <Reveal key={feat.title} delay={idx * 0.1}>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Right Column: Square Image Placeholder */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Foundation structure" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WordPress Management Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Management
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  WordPress built to grow with you
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  You own your site. You can edit it. WordPress is flexible enough to start small and scale up as your business grows. We stay with you.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/services/web-design-development/wordpress" variant="white">
                    Explore
                  </Button>
                  <a 
                    href="/services/web-design-development/wordpress"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                  >
                    Overview <ChevronRight className="w-4 h-4 text-brand-purple" />
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="WordPress growth" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Stats Section */}
      <section className="py-16 md:py-24 bg-brand-coral border-b border-border text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
                  Results
                </span>
                <h2 className="text-h2 text-white leading-tight mb-4">
                  What the numbers show
                </h2>
                <p className="text-body text-white/90 leading-relaxed mb-8">
                  Our clients see real improvements. Faster sites. More leads. Better rankings. Here's what we deliver.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Discover
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-white hover:text-white/80 transition-colors cursor-pointer"
                  >
                    More <ChevronRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 w-full">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {stats.map((st) => (
                    <div key={st.label} className="bg-white/10 border border-white/20 rounded-card p-6 shadow-sm text-white">
                      <div className="font-display font-extrabold text-4xl text-white mb-2">
                        {st.value}
                      </div>
                      <h4 className="font-display font-bold text-sm text-white mb-1">
                        {st.label}
                      </h4>
                      <p className="font-sans text-[11px] text-white/80 leading-normal">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials / Results Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Real results
              </h2>
              <p className="text-body-lg text-white/90">
                What our clients say
              </p>
            </Reveal>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 md:px-12">
            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex">
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-4 h-4 rotate-180 text-white" />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex">
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 0.1}>
                  <div className="bg-white/10 border border-white/20 rounded-card p-8 flex flex-col justify-between min-h-[260px] hover:bg-white/20 transition-all duration-300 shadow-sm text-white">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white fill-white" />
                        ))}
                      </div>
                      <p className="font-sans text-sm leading-relaxed text-white italic mb-6">
                        {t.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          {t.author}
                        </h4>
                        <span className="font-sans text-[11px] text-white/70 block mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} 
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing / Website Packages Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Investment
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Website packages
              </h2>
              <p className="text-body-lg text-muted">
                Choose the right fit for your business. Every project includes strategy, design, and ongoing support.
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
                      <Package className="w-6 h-6 text-foreground shrink-0" />
                    </div>
                    <div className="flex items-baseline mb-1">
                      <span className="font-display font-extrabold text-5xl text-foreground">{plan.price}</span>
                      {plan.period && <span className="font-sans text-sm text-muted ml-1">{plan.period}</span>}
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
                    <Button href="/contact" variant="primary" className="w-full">
                      Get started
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Middle CTA Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white text-center border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Ready to build something that works?
              </h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-xl">
                Let's talk about your business and what a better website could do for you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/contact" variant="white">
                  Book call
                </Button>
                <Button href="/contact" variant="white">
                  Propose
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Questions Section (FAQ) */}
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
                    Find answers about our web design process, timelines, and what happens after launch.
                  </p>
                </div>
                <Button href="/contact" variant="primary">
                  Contact
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

      {/* Still Have Questions Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Still have questions?
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Reach out and let's talk about your project.
              </h2>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Contact
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Get Your Audit Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Reveal>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Get your audit
              </h2>
              <p className="text-body-lg text-muted">
                See what's holding your site back. We'll review it and send you a real assessment.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <WebDesignAuditForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
