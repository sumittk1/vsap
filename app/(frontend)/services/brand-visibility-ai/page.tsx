import type { Metadata } from "next";
import { Container, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import { ChevronRight, CheckCircle2, Layout, RefreshCw, Layers, Eye, Search, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import BrandVisibilityFAQ from "@/components/sections/BrandVisibilityFAQ";

export const metadata: Metadata = {
  title: "Brand Visibility – AI & Beyond | VASP Digital",
  description:
    "Strengthen your business's presence across Google, Maps, AI-driven answers, directories, and trusted sources. Build a future-ready brand.",
  alternates: { canonical: "/services/brand-visibility-ai" },
};

const optimizationAreas = [
  {
    title: "Website visibility and structure",
    desc: "We audit how search engines interpret your business and fix structural problems that hold you back. Clear site architecture means better rankings and easier discovery.",
    icon: Layout
  },
  {
    title: "Entity and brand consistency",
    desc: "Search engines need to understand who you are across every page and platform. We ensure your business name, location, and identity are consistent everywhere.",
    icon: RefreshCw
  },
  {
    title: "Structured content and topics",
    desc: "We organize your website content with structured data so search engines and AI tools can find and recommend your expertise. This is how you appear in AI answers.",
    icon: Layers
  },
  {
    title: "Citations and review presence",
    desc: "We identify where you're listed, where you're missing, and build a strategy to create consistent citations across Google, Yelp, and industry directories.",
    icon: Eye
  },
  {
    title: "Branded search and visibility",
    desc: "We strengthen how your brand appears when people search your name directly. This includes optimizing your Google Business Profile, website presence, and branded content.",
    icon: Search
  },
  {
    title: "Trust signals and authority",
    desc: "We build the credibility markers that make search engines and customers trust you. Reviews, citations, content quality, and topical authority all work together.",
    icon: ShieldCheck
  }
];

const processSteps = [
  {
    step: "01",
    title: "Audit your current visibility gaps",
    desc: "We map where you show up now and where you're missing entirely."
  },
  {
    step: "02",
    title: "Build your visibility roadmap",
    desc: "We create a clear plan for citations, content, profiles, and authority."
  },
  {
    step: "03",
    title: "Execute across every discovery channel",
    desc: "We optimize your presence everywhere customers search and find you."
  },
  {
    step: "04",
    title: "Track and refine what's working",
    desc: "We monitor visibility growth and adjust the strategy as search evolves."
  }
];

export default function BrandVisibilityPage() {
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
                    Brand Visibility - AI & Beyond
                  </span>
                  <h1 className="text-h1 lg:text-hero tracking-tight text-white leading-[1.1] mb-6">
                    Go beyond <br />
                    rankings, get <br />
                    discovered <br />
                    everywhere.
                  </h1>
                  <p className="text-body-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                    Strengthen your business's presence across Google, Maps, AI-driven answers, directories, and trusted sources. Build a future-ready brand that's easy to find and impossible to ignore.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#four-steps" variant="white">
                      Improve
                    </Button>
                    <Button href="#four-steps" variant="white">
                      Strategy
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-5 w-full">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-[4/3]" label="Brand Visibility" className="bg-white/10" />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Banner / Shift Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  The Shift
                </span>
                <h2 className="text-h2 text-foreground leading-tight">
                  Search changed, your presence didn't
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-body-lg text-muted leading-relaxed">
                  Your customers aren't just searching Google anymore. They're asking AI tools, checking Maps, reading reviews, and comparing across directories. If you're only ranking on page one, you're missing them everywhere else.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Beyond rankings" />
              </Reveal>
            </div>
            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Modern
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Beyond rankings to real discoverability
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Visibility today means being found across multiple discovery channels at once. Your business needs to show up in Google Search, Maps, AI answers, local directories, and review platforms—all working together as one cohesive presence.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Present in AI-powered search answers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Consistent across all business listings</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Trusted by search engines and customers</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#four-steps" variant="white">
                    Discover
                  </Button>
                  <a 
                    href="#four-steps"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    —&gt;
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategy / Optimization List Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-coral text-white border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
                Strategy
              </span>
              <h2 className="text-h2 text-white leading-tight mb-4">
                What we optimize across your entire presence
              </h2>
              <p className="text-body-lg text-white/80">
                We map your current visibility gaps and build a strategy to strengthen every channel where customers find you. From your website structure to AI discoverability, nothing gets missed.
              </p>
            </Reveal>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col">
            {optimizationAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={idx * 0.05}>
                  <div className="flex gap-6 py-8 border-t border-white/20 last:border-b">
                    <div className="shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-bold text-xl text-white leading-tight">
                        {area.title}
                      </h3>
                      <p className="font-sans text-sm text-white/80 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Integrated Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 w-full order-last lg:order-first">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Integrated SEO" />
              </Reveal>
            </div>
            {/* Right Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start lg:order-last">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Integrated
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  SEO and local SEO working as one system
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  Your website rankings, local presence, and brand authority aren't separate strategies. We connect them so every optimization feeds into your overall discoverability across search, Maps, and AI platforms.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Keywords that drive qualified local traffic</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Maps visibility and directory consistency</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Authority that AI tools recognize and cite</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#four-steps" variant="white">
                    Explore
                  </Button>
                  <a 
                    href="#four-steps"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    —&gt;
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Built For Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Ideal
                </span>
                <h2 className="text-h2 text-foreground leading-tight mb-4">
                  Built for businesses ready to be found
                </h2>
                <p className="text-body text-muted leading-relaxed mb-6">
                  This service works best for local and small business owners across London, Ontario and the GTA who know visibility matters. Whether you're already investing in SEO and ads or just starting to think about your online presence, this is for you.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Service businesses wanting consistent discovery</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Brands protecting and strengthening their reputation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">Teams building visibility that lasts beyond trends</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button href="#four-steps" variant="white">
                    Explore
                  </Button>
                  <a 
                    href="#four-steps"
                    className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    —&gt;
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right Graphic Column */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-[4/3]" label="Built for visibility" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Four Steps Section */}
      <section id="four-steps" className="py-16 md:py-24 lg:py-28 bg-brand-lavender/50 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                Strategy
              </span>
              <h2 className="text-h2 text-foreground leading-tight mb-4">
                Four steps to visibility that sticks
              </h2>
              <p className="text-body-lg text-muted">
                We start with what's broken, build what works, and prove it with results. No guesswork, no shortcuts.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.1}>
                <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-between min-h-[280px] hover:shadow-sm transition-all duration-300">
                  <div>
                    <span className="font-display font-bold text-3xl text-brand-purple/40 block mb-6">{step.step}</span>
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">{step.title}</h3>
                    <p className="font-sans text-xs text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Reveal>
              <div className="flex items-center gap-4">
                <Button href="/contact" variant="white">
                  Start
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
        </Container>
      </section>

      {/* FAQ Section */}
      <BrandVisibilityFAQ />

      {/* Ready to talk Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-brand-lavender/50 border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            <Reveal>
              <h2 className="text-h2 leading-[1.1] mb-4 text-foreground">
                Ready to talk?
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Let's discuss your visibility strategy.
              </p>
              <Button href="/contact" variant="white" className="px-8 py-3">
                Contact
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-brand-coral text-white relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <Container>
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-4">
                Own your brand presence everywhere
              </h2>
              <p className="text-body-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
                Stop being invisible where your customers are searching. Let's build a visibility strategy that works.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/contact" variant="white" className="px-8 py-3">
                  Improve
                </Button>
                <Button href="/contact" variant="white" className="px-8 py-3">
                  Strategy
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
