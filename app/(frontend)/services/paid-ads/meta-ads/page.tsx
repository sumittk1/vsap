import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { CheckCircle2, Mail, Phone, Sparkles, Target, Users, ChevronRight, Eye, Heart, MousePointerClick, ClipboardList, Package } from "lucide-react";
import Button from "@/components/ui/Button";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import MetaAdsContactForm from "@/components/sections/MetaAdsContactForm";

export const metadata: Metadata = {
  title: "Meta Ads | Facebook & Instagram Advertising | VASP Digital",
  description:
    "Reach and convert local audiences with Meta Ads. Drive awareness, retarget website visitors, and generate leads across Facebook and Instagram.",
  alternates: { canonical: "/services/paid-ads/meta-ads" },
};

const objectives = [
  {
    title: "Awareness",
    tagline: "Build brand recognition",
    desc: "Introduce your business to new audiences and stay top of mind in your market.",
    icon: Eye
  },
  {
    title: "Engagement",
    tagline: "Drive interaction",
    desc: "Get likes, comments, shares, and messages. Build community and test messaging before committing to conversions.",
    icon: Heart
  },
  {
    title: "Traffic",
    tagline: "Send visitors to your website",
    desc: "Drive qualified clicks to your site. Perfect for showcasing services, booking pages, or product catalogs.",
    icon: MousePointerClick
  },
  {
    title: "Leads",
    tagline: "Capture leads",
    desc: "Use instant lead forms to collect names, emails, and phone numbers. No friction, no lost prospects.",
    icon: ClipboardList
  }
];

const packages = [
  {
    name: "Starter plan",
    price: "$19",
    period: "/mo",
    features: [
      "Campaign setup and management",
      "Basic audience targeting",
      "Monthly performance reporting"
    ],
    buttonText: "Start campaign"
  },
  {
    name: "Growth plan",
    price: "$29",
    period: "/mo",
    features: [
      "Advanced audience segmentation",
      "Retargeting and lead generation",
      "Creative testing and optimization",
      "Bi-weekly strategy reviews"
    ],
    buttonText: "Start campaign"
  },
  {
    name: "Premium plan",
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
    question: "How much should I budget?",
    answer: "Most local businesses see results with a daily budget of $10 to $50, depending on competition and goals. We recommend starting with $500 to $1,000 per month to test messaging and audience. Adjust based on performance and ROI."
  },
  {
    question: "Can I target specific neighborhoods?",
    answer: "Yes. Meta Ads let you target by location, radius, postal code, and even specific neighborhoods. This is powerful for local service businesses, clinics, and restaurants that serve a defined area."
  },
  {
    question: "How long until I see leads?",
    answer: "Most campaigns generate leads within the first week. However, the first two to three weeks are a learning phase where Meta optimizes your audience and messaging. Expect better results and lower costs after 30 days."
  },
  {
    question: "What's the difference between awareness and conversion?",
    answer: "Awareness campaigns build brand recognition and reach new audiences. Conversion campaigns target people ready to act, like visiting your website or filling out a form. Most successful strategies use both."
  },
  {
    question: "How do you measure campaign success?",
    answer: "We track cost per lead, conversion rate, return on ad spend (ROAS), and lead quality. You'll get monthly reports showing exactly where your money goes and what results you're getting."
  }
];

export default function MetaAdsPage() {
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
                    Meta Ads
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Reach and <br />
                    convert local <br />
                    audiences with <br />
                    Meta Ads
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Drive awareness, retarget website visitors, and generate leads across Facebook and Instagram with targeted advertising campaigns from VASP Digital. Build demand where your customers already spend their time.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#contact-lead" variant="white">
                      Start
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
                  <ImagePlaceholder ratio="aspect-square" label="Meta Ads" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Meta Ads Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Why
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Why Meta Ads work for local businesses
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Facebook and Instagram reach billions of people daily. Meta's targeting tools let you find customers by location, interests, behavior, and intent. You pay only for results, making it cost-effective for businesses of any size.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Reach local audiences at scale</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Retarget website visitors and past customers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Generate leads with built-in lead forms</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Graphic/Placeholder Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Why Meta Ads" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Targeting Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">
                Targeting
              </span>
              <h2 className="text-h2 text-foreground leading-[1.1] mb-4">
                Find your customers where they are
              </h2>
              <p className="text-body text-muted leading-relaxed">
                Meta's targeting goes deep. Location, age, interests, behaviors, purchase history. You reach the right people at the right time, not just anyone scrolling.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Precision targeting" />
              </Reveal>
            </div>
            
            {/* Right Card Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-white border border-border rounded-card p-8 md:p-12 w-full shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">
                      Precision
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                      Geographic and demographic precision
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      Target by neighborhood, postal code, or radius. Reach homeowners, parents, business owners, or anyone matching your ideal customer profile.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button href="#contact-lead" variant="white">
                      Explore
                    </Button>
                    <a 
                      href="#contact-lead"
                      className="inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-purple hover:text-brand-purple/80 transition-colors cursor-pointer"
                    >
                      Arrow <ChevronRight className="w-4 h-4 text-brand-purple" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral text-white border-b border-white/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-2">
                Objectives
              </span>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Choose your campaign goal
              </h2>
              <p className="text-body-lg text-white/80">
                Every campaign has a purpose. Pick the one that matches your business need and let Meta optimize toward that outcome.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, idx) => {
              return (
                <Reveal key={obj.title} delay={idx * 0.1}>
                  <div className="bg-white/10 border border-white/20 rounded-card p-6 flex flex-col justify-between min-h-[300px] shadow-sm text-white">
                    <div>
                      <ImagePlaceholder ratio="aspect-square" label={obj.title} className="mb-6 bg-white/10" />
                      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1">
                        {obj.title}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white mb-3">{obj.tagline}</h3>
                      <p className="font-sans text-xs text-white/80 leading-relaxed">{obj.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <a href="#contact-lead" className="font-sans text-xs font-semibold text-white hover:text-white/85 cursor-pointer transition-colors inline-flex items-center gap-1">
                        Arrow <ChevronRight className="w-3.5 h-3.5 text-white" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Creative Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Creative & Copywriting" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Creative
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Visuals and copy that stop the scroll
                </h2>
                <p className="text-body text-muted leading-relaxed mb-4">
                  We build ads that match your brand and speak to your audience. Strong visuals, clear messaging, and a single clear action. That's what converts.
                </p>
                


                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
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

      {/* Retargeting Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Retargeting
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Bring back visitors who almost converted
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Someone visited your site but didn't book or buy. Retargeting ads remind them why they need you. Second chances turn into customers.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Retarget website visitors with relevant offers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Reach people who engaged with your ads but didn't convert</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Capture leads with instant forms, no redirects needed</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    Arrow <ChevronRight className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Image Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Meta Retargeting" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Reporting Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/40 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Analytics & Reporting" />
              </Reveal>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Reporting
                </span>
                <h2 className="text-h2 text-foreground leading-[1.1] mb-6">
                  Know exactly what your ads are doing
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  No guessing. You get clear monthly reports showing cost per lead, conversion rates, and ROI. We optimize based on data, not hunches.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Monthly performance reports with clear metrics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Continuous optimization to lower costs and improve results</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-semibold text-muted/60 shrink-0">-</span>
                    <span className="text-sm text-foreground/80">Transparent tracking of every lead and every dollar spent</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#contact-lead" variant="white">
                    Learn more
                  </Button>
                  <a 
                    href="#contact-lead"
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

      {/* Simple Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 lg:py-28 bg-brand-lavender border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                Packages
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Simple pricing
              </h2>
              <p className="text-body-lg text-muted">
                Choose the right plan for your business growth
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
                      <Package className="w-6 h-6 text-foreground shrink-0" />
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="font-display font-extrabold text-5xl text-foreground">{pkg.price}</span>
                      <span className="font-sans text-sm text-muted ml-1">{pkg.period}</span>
                    </div>
                    <p className="text-xs text-muted mb-6">per month</p>
                    
                    <div className="space-y-3 pt-6 border-t border-border">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-2">Includes:</h4>
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-muted">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <Button href="#contact-lead" variant="primary" className="w-full text-xs">
                      {pkg.buttonText}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#F2F2F2] border-b border-border">
        <Container>
          <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
            {/* FAQ List */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="text-h2 text-foreground leading-tight mb-2">
                  Questions
                </h2>
                <p className="text-body-lg text-muted mb-8">
                  Get answers about Meta Ads campaigns, targeting, and results.
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

            {/* Still have questions? */}
            <div className="pt-8 border-t border-border/60">
              <Reveal>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Still have questions?
                </h3>
                <p className="text-body text-muted mb-6">
                  Reach out and we'll walk you through it.
                </p>
                <Button href="#contact-lead" variant="white">
                  Contact us
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Ready to grow Section */}
      <section className="py-16 md:py-24 bg-brand-coral text-white border-y border-brand-coral-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight">
                Ready to grow with Meta Ads?
              </h2>
              <p className="text-body-lg text-white/85 max-w-xl mx-auto">
                Let's build a campaign that reaches your customers where they are
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button href="#contact-lead" variant="white">
                  Start my campaign
                </Button>
                <Button 
                  href="#contact-lead" 
                  variant="outline" 
                  className="!text-white border-white/30 hover:border-white hover:bg-white/10"
                >
                  Get a free audit
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
