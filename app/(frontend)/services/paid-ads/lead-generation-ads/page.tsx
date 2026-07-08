import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, Mail, Phone, ChevronRight, Target, Laptop, Zap, Sparkles, Shield, BarChart2, Star, Activity, ImageIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import IndustrySelector from "@/components/sections/IndustrySelector";

export const metadata: Metadata = {
  title: "Lead Generation Ads for Local Businesses | VASP Digital",
  description:
    "Turn ad spend into real leads. Lead generation ads designed for local businesses who want more calls, form fills, and booked consultations.",
  alternates: { canonical: "/services/paid-ads/lead-generation-ads" },
};

const approachList = [
  {
    title: "Campaigns",
    tagline: "Targeted ads that reach ready buyers",
    desc: "We build campaigns that speak to people actively searching for your services, not just anyone in your area.",
    icon: Target
  },
  {
    title: "Pages",
    tagline: "Landing pages built for conversion",
    desc: "Custom landing pages remove distractions and guide visitors straight to your offer. Every element serves one purpose.",
    icon: Laptop
  },
  {
    title: "Funnels",
    tagline: "Strategic offers that people respond to",
    desc: "Whether it's a free consultation, lead magnet, or booking link, the offer is designed to get a commitment.",
    icon: Zap
  }
];

const refinementSteps = [
  {
    step: "01",
    title: "Split testing",
    desc: "We adjust audience targeting based on which segments produce the best quality leads and lowest costs."
  },
  {
    step: "02",
    title: "Creative testing",
    desc: "We continuously test new ad layouts, headlines, and call-to-action designs to maximize conversion rates."
  },
  {
    step: "03",
    title: "Lead qualification",
    desc: "We refine form questions and questionnaires to pre-screen inquiries and ensure high-quality leads."
  },
  {
    step: "04",
    title: "Transparent reporting",
    desc: "Monthly reports show exactly what's working, what's not, and what we're doing to improve results."
  }
];

const testimonialsList = [
  {
    quote: "We went from sporadic inquiries to a steady stream of qualified leads. The campaigns are built for conversion, not just clicks.",
    author: "Sarah Mitchell",
    role: "Clinic owner, Toronto"
  },
  {
    quote: "Within 60 days, we saw a 45% increase in qualified calls. The tracking and optimization made all the difference.",
    author: "James Chen",
    role: "Contractor, London"
  },
  {
    quote: "Finally, an agency that focuses on leads instead of vanity metrics. Our cost per inquiry dropped significantly.",
    author: "Rebecca Walsh",
    role: "Legal services, GTA"
  }
];

const faqs = [
  {
    question: "What makes lead generation ads different?",
    answer: "Lead generation ads are built from the ground up to capture inquiries. They skip the awareness phase and go straight for conversions — calls, form fills, and consultations. Every element, from ad copy to landing page to form design, is optimized for one thing: getting someone to raise their hand."
  },
  {
    question: "How much should I spend?",
    answer: "There's no one-size answer. We typically recommend starting with a budget that allows for 30 to 60 days of testing and optimization. Most local service businesses see meaningful results between $1,000 and $3,000 per month, but we'll audit your specific situation and recommend what makes sense for your goals."
  },
  {
    question: "What industries work best?",
    answer: "Lead generation ads excel for service-based businesses — clinics, contractors, legal services, real estate, home services, consulting, and similar fields. If your business model depends on qualified inquiries and consultations, this approach works. If you're selling low-ticket items, it may not be the best fit."
  },
  {
    question: "How long until I see results?",
    answer: "You'll typically see the first leads within 7 to 14 days. Real optimization happens over 30 to 60 days as we refine targeting, landing pages, and form flow based on actual performance data. Patience in the early phase pays off with better quality leads and lower costs later."
  },
  {
    question: "How do you track and measure success?",
    answer: "We set up call tracking, form submission tracking, and attribution reporting from day one. You'll see exactly where each lead came from, what it cost, and whether it converted to a customer. No guessing. No vanity metrics. Just real data on real business results."
  }
];

export default function LeadGenerationAdsPage() {
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
                    Turn ad spend <br />
                    into real leads
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Lead generation ads designed for local businesses who want more calls, form fills, and booked consultations. Stop chasing vanity metrics and start filling your pipeline with qualified inquiries.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#contact-lead" variant="white">
                      Generate
                    </Button>
                    <Button 
                      href="#contact-lead" 
                      variant="outline" 
                      className="!text-white border-white/30 hover:border-white hover:bg-white/10"
                    >
                      Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="Lead Generation" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Campaigns built for inquiries Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Leads
                </span>
                <h2 className="text-h2 text-foreground leading-tight">
                  Campaigns built for inquiries
                </h2>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Lead generation ads turn your ad budget into qualified calls, form submissions, and booked consultations. We build campaigns that measure what matters—real business results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="#contact-lead" variant="primary">
                    Generate
                  </Button>
                  <Button href="#contact-lead" variant="outline">
                    Audit
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Strategy
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Lead generation ads are built for conversion, not just reach
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Most ads chase impressions and clicks. Lead generation ads chase inquiries. We design campaigns that move people from awareness to action—calls, form submissions, and booked consultations.
                </p>

                {/* Sub-cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="bg-white border border-border rounded-card p-6 shadow-sm">
                    <div className="w-10 h-10 border border-black/80 bg-white rounded-lg flex items-center justify-center mb-4 text-foreground shadow-[2px_2px_0_0_rgba(0,0,0,0.85)]">
                      <Star className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      Conversion-focused
                    </h3>
                    <p className="font-sans text-xs text-muted leading-relaxed">
                      Every element is designed to turn interest into an inquiry. Landing pages, forms, and ad copy all work together.
                    </p>
                  </div>
                  <div className="bg-white border border-border rounded-card p-6 shadow-sm">
                    <div className="w-10 h-10 border border-black/80 bg-white rounded-lg flex items-center justify-center mb-4 text-foreground shadow-[2px_2px_0_0_rgba(0,0,0,0.85)]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      Measurable results
                    </h3>
                    <p className="font-sans text-xs text-muted leading-relaxed">
                      You see exactly what each lead costs and where it came from. No vanity metrics, just real business outcomes.
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-6">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-brand-purple" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Graphic Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Conversion Strategy" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Selector Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Industries
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Best fit for service businesses
              </h2>
              <p className="text-body-lg text-muted">
                Lead generation ads work best for businesses that sell services and rely on qualified inquiries. Select your industry to see how it works.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <IndustrySelector />
          </Reveal>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral border-b border-border text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
                Approach
              </span>
              <h2 className="text-h2 text-white leading-tight mb-4">
                How we build lead generation campaigns
              </h2>
              <p className="text-body-lg text-white/90">
                Three core elements work together to turn ad spend into inquiries
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachList.map((item, idx) => {
              return (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="bg-white/10 border border-white/20 rounded-card p-6 flex flex-col justify-between min-h-[300px] shadow-sm text-white">
                    <div>
                      <ImagePlaceholder ratio="aspect-square" label={item.title} className="mb-6 bg-white/10" />
                      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1">
                        {item.title}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white mb-3">{item.tagline}</h3>
                      <p className="font-sans text-xs text-white/80 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10">
                      <a href="#contact-lead" className="font-sans text-xs font-semibold text-white hover:text-white/85 cursor-pointer transition-colors inline-flex items-center gap-1">
                        Learn <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
                <ImagePlaceholder ratio="aspect-square" label="Conversion Layout" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Conversion
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Landing pages and form flow designed to convert
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  A good landing page removes friction. Simplified forms, clear offers, and strong CTAs guide prospects to take action without hesitation.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-brand-purple" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Attribution Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <div className="flex items-center gap-1.5 mb-6 text-foreground">
                  <ImageIcon className="w-8 h-8" />
                  <BarChart2 className="w-8 h-8" />
                </div>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Every lead is tracked and reported
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Call tracking, form attribution, and follow-up systems ensure nothing falls through the cracks. You see exactly where each inquiry came from and what it cost.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-brand-purple" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Graphic Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Attribution dashboard" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Refinement Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {refinementSteps.map((step, idx) => (
              <div key={step.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Image placeholder with step number */}
                <div className="lg:col-span-5 w-full">
                  <Reveal delay={0.2}>
                    <ImagePlaceholder ratio="aspect-square" label={`Refinement ${step.step}`} />
                  </Reveal>
                </div>

                {/* Right Column: Copy & Step text */}
                <div className="lg:col-span-7 flex flex-col items-start justify-center">
                  <Reveal>
                    {idx === 0 && (
                      <>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                          Refinement
                        </span>
                        <h2 className="text-h2 text-foreground leading-tight mb-4">
                          Ongoing optimization that improves results
                        </h2>
                        <p className="text-body text-muted leading-relaxed mb-8">
                          We don't set campaigns and forget them. We test ad creative, refine targeting, and improve landing pages based on real performance data.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center mb-12">
                          <Button href="#contact-lead" variant="white">
                            Learn more
                          </Button>
                          <a 
                            href="#contact-lead"
                            className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                          >
                            Arrow <ChevronRight className="w-4 h-4 text-brand-purple" />
                          </a>
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {step.step === "02" || step.step === "03" ? `${step.step}.` : step.step} {step.title}
                      </h3>
                      <p className="font-sans text-sm text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials / Real Results Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral text-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Real results
              </h2>
              <p className="text-body-lg text-white/90">
                Businesses across London, Ontario and the GTA have seen measurable growth
              </p>
            </Reveal>
          </div>

          <div className="relative w-full">
            {/* Slide Navigation Arrows */}
            <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-10 h-10 border border-white/30 rounded-full text-white hover:bg-white/10 cursor-pointer">
              <ChevronRight className="w-5 h-5 rotate-180 text-white" />
            </div>
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-10 h-10 border border-white/30 rounded-full text-white hover:bg-white/10 cursor-pointer">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsList.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 0.1}>
                  <div className="bg-white/10 border border-white/20 rounded-card p-6 flex flex-col justify-between min-h-[260px] shadow-sm text-white">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4 text-white">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <p className="font-sans text-sm leading-relaxed text-white italic mb-6">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <ImageIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          {t.author}
                        </h4>
                        <span className="font-sans text-xs text-white/70 block mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-1.5 mt-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
            {/* FAQ List */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="text-h2 text-foreground leading-tight mb-2">
                  FAQs
                </h2>
                <p className="text-body-lg text-muted mb-8">
                  Questions about lead generation campaigns, costs, and results
                </p>
              </Reveal>

              <div className="space-y-4">
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
            </div>

            {/* Ready to talk? */}
            <div className="pt-8 border-t border-border/60">
              <Reveal>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Ready to talk?
                </h3>
                <p className="text-body text-muted mb-6">
                  Get answers to your specific questions
                </p>
                <Button href="/contact" variant="white">
                  Contact
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white text-center border-b border-border relative overflow-hidden">
        <Container>
          <Reveal>
            <h2 className="text-h2 text-white leading-tight mb-4">
              Ready to fill your pipeline?
            </h2>
            <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's build a lead generation strategy that works for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="white">
                Generate
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
        </Container>
      </section>
    </>
  );
}
