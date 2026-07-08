import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, ChevronRight, AlertTriangle, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Paid Ads | Google & Meta Advertising for Local Businesses | VASP Digital",
  description:
    "Get more leads from Google & Meta — track every dollar, see measurable returns with VASP Digital's paid ads management.",
  alternates: { canonical: "/services/paid-ads" },
};

const problems = [
  {
    title: "Faster",
    desc: "Organic takes time. Paid ads put you in front of customers today."
  },
  {
    title: "Measurable",
    desc: "Target by location, intent, and behavior. No wasted spend on wrong audiences."
  }
];

const channels = [
  {
    label: "Google",
    title: "Google Ads for search and discovery",
    desc: "Reach customers actively searching for your service",
    href: "/services/paid-ads/google-ads"
  },
  {
    label: "Meta",
    title: "Meta Ads for awareness and targeting",
    desc: "Build brand awareness and reach specific audiences",
    href: "/services/paid-ads/meta-ads"
  },
  {
    label: "Lead",
    title: "Lead generation campaigns built to convert",
    desc: "Capture leads directly from your ads",
    href: "/services/paid-ads/lead-generation-ads"
  }
];

const testimonials = [
  {
    quote: '"We went from zero leads to booking five consultations a week within the first month."',
    author: "Sarah Mitchell",
    role: "Owner, Legal Services"
  },
  {
    quote: '"The tracking showed us exactly which ads were working. We cut waste and doubled our ROI in six weeks."',
    author: "James Chen",
    role: "Manager, Home Renovation"
  },
  {
    quote: '"Finally, a clear picture of what we\'re spending and what we\'re getting back. No guessing."',
    author: "Maria Gonzalez",
    role: "Owner, Dental Clinic"
  }
];

const faqs = [
  {
    question: "What's the minimum budget?",
    answer: "Start with $500 to $2,000 monthly. Consistency beats size. We scale budgets based on what works."
  },
  {
    question: "When do leads start coming in?",
    answer: "Two weeks is typical for qualified leads. Some campaigns produce results in days. Optimization improves performance over time."
  },
  {
    question: "Google or Meta, which one?",
    answer: "Google catches active searchers. Meta builds awareness and targets specific audiences. Run both together for best results."
  },
  {
    question: "What do you actually handle?",
    answer: "Strategy, setup, daily optimization, landing pages, and tracking. Monthly reports show spend, leads, and cost per lead."
  },
  {
    question: "How often do I see reports?",
    answer: "Monthly reports break down spend and ROI. Weekly updates track campaign performance. Real-time data is always available to you."
  }
];

export default function PaidAdsPage() {
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
                    Paid Advertising
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Paid ads that <br />
                    generate <br />
                    qualified leads
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Get more leads from Google and Meta faster than organic alone. Track every dollar spent and see exactly which ads convert into customers.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white">
                      Request
                    </Button>
                    <Button href="/contact" variant="white">
                      Audit
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="Paid Ads" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Paid Ads Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Why
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Paid ads work faster than organic alone
                </h2>
                <p className="text-body text-muted leading-relaxed mb-8">
                  Organic search takes months to build. Paid ads put you in front of customers today. You control the budget, the audience, and the message. Every click is tracked, every lead is counted.
                </p>
                
                {/* Sub-cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                  {problems.map((prob) => (
                    <div key={prob.title} className="flex flex-col gap-2">
                      <h3 className="font-display font-bold text-2xl text-foreground">
                        {prob.title}
                      </h3>
                      <p className="font-sans text-xs text-muted leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <Button href="/contact" variant="primary">
                  Schedule a Call
                </Button>
              </Reveal>
            </div>
            {/* Right Graphic/Placeholder Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Paid Ads Strategy" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Where Ads Run Section */}
      <section id="channels" className="py-16 md:py-24 lg:py-28 bg-brand-lavender border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Platforms
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Where your ads run
              </h2>
              <p className="text-body-lg text-muted">
                Choose the right channel for your audience
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((chan, idx) => (
              <Reveal key={chan.title} delay={idx * 0.1}>
                <div className="bg-white border border-border rounded-card overflow-hidden hover:border-brand-purple/20 transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[420px]">
                  <div className="p-8 pb-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-purple uppercase tracking-wider block mb-2">
                        {chan.label}
                      </span>
                      <h3 className="font-display font-bold text-xl text-foreground mb-4 leading-snug">
                        {chan.title}
                      </h3>
                      <p className="font-sans text-xs text-muted leading-relaxed">
                        {chan.desc}
                      </p>
                    </div>
                    <div className="mt-6">
                      <a 
                        href={chan.href} 
                        className="font-sans text-xs font-semibold text-brand-purple hover:text-brand-purple/85 cursor-pointer transition-colors inline-flex items-center gap-1"
                      >
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Image placeholder at the bottom of each card */}
                  <div className="border-t border-border bg-[#e3e3e3]">
                    <ImagePlaceholder ratio="aspect-[16/10]" label={`${chan.label} Ads`} className="border-none rounded-none" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Targeting Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Targeting
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Reach the right people at the right time
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  We target by location, behavior, and intent. Your ads show to people most likely to become customers. Geo-targeting keeps your budget focused on your service area. Custom audiences mean no wasted clicks.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">High-intent keyword placement triggers ads only for real searches</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Geographic bounding keeps budget in your service area</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Negative keywords filter out job-seekers and info-queries</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Learn More
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    —&gt;
                  </a>
                </div>
              </Reveal>
            </div>
            
            {/* Right Graphic/Placeholder Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Targeting" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Landing Pages Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral text-white border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Landing page support" className="bg-white/10" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
                  Conversion
                </span>
                <h2 className="text-h2 text-white leading-[1.1] mb-6">
                  Landing pages built to convert clicks
                </h2>
                <p className="text-body text-white/85 leading-relaxed mb-6">
                  Your ad is only half the battle. A landing page matched to your message and optimized for conversion turns clicks into qualified leads. We design fast, mobile-friendly pages with clear forms and focused CTAs that guide visitors toward action.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Single-topic conversion layouts with zero leaks</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">Mobile fast loading to prevent drop-off rates</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Explore
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-white hover:text-white/80 transition-colors cursor-pointer"
                  >
                    —&gt;
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Reporting Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Reporting" />
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple border border-brand-purple/20 mb-4">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Know exactly what's working with real data
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Every click, call, and conversion is tracked and reported. We show you the numbers that matter—cost per lead, conversion rate, and actual ROI—so you know your ads are working hard for your business.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="white">
                    Review
                  </Button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Details <ChevronRight className="w-4 h-4" />
                  </a>
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
              <p className="text-body-lg text-white/80">
                Businesses getting leads
              </p>
            </Reveal>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 md:px-12">
            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex">
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex">
              <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <Reveal key={t.author} delay={idx * 0.1}>
                  <div className="bg-white/5 border border-white/20 rounded-card p-8 flex flex-col justify-between min-h-[260px] hover:bg-white/10 transition-all duration-300 shadow-sm text-white">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white fill-white" />
                        ))}
                      </div>
                      <p className="font-sans text-sm leading-relaxed text-white/90 italic mb-6">
                        {t.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* FAQ / Answers Section */}
      <section className="py-16 md:py-24 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start">
              <Reveal>
                <div>
                  <h2 className="text-h2 text-foreground leading-tight mb-4">
                    Answers
                  </h2>
                  <p className="text-body-lg text-muted mb-8">
                    Get clarity on paid ads, budgets, and what to expect.
                  </p>
                </div>
                <Button href="/contact" variant="white">
                  Ask
                </Button>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6">
              {faqs.map((faq, idx) => (
                <Reveal key={faq.question} delay={idx * 0.05}>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white text-center border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Start generating leads this week
              </h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-xl">
                Stop waiting for organic results. Let paid ads bring qualified leads to your door now.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/contact" variant="white">
                  Call
                </Button>
                <Button href="/contact" variant="white">
                  Learn
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

