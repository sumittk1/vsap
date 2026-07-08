import type { Metadata } from "next";
import Link from "next/link";
import { Play, RefreshCw, FilePlus2, Briefcase, Package } from "lucide-react";
import { Container, Section, ImagePlaceholder, ArrowLink, SectionHeader } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "WordPress Development for Local Businesses",
  description:
    "Custom WordPress websites tailored for local service businesses — fast, secure, mobile-optimized, and easy to manage.",
  alternates: { canonical: "/services/web-design-development/wordpress" },
};

const faqs = [
  { question: "How much does it cost?", answer: "WordPress site costs depend on what you need. A basic site for a local service business runs between $3,000 and $8,000. More complex builds with custom features cost more. We'll give you a clear price before we start." },
  { question: "How long does it take?", answer: "Most WordPress sites launch in four to eight weeks. We move fast, but we don't cut corners. The timeline depends on how much content you have ready and how many revisions you want along the way." },
  { question: "Is WordPress secure?", answer: "Yes. WordPress itself is secure when it's built right and kept updated. We handle security from day one - proper hosting, SSL certificates, regular backups, and plugin management. Your site stays protected." },
  { question: "Can I update it myself?", answer: "That's the whole point. WordPress is built for business owners who want control. We train you on how to update content, add pages, and manage basic settings. No coding required." },
  { question: "Do you own my site?", answer: "You own it. We build it, you keep it. You own the domain, the hosting account, and all the content. If you ever want to move or work with someone else, you can. It's yours." },
];

const wpTestimonials = [
  {
    quote: "Our site went live in three weeks and we started getting calls within days.",
    name: "Sarah Mitchell",
    role: "Owner, dental clinic",
  },
  {
    quote: "Finally have a website I can actually update myself without calling someone.",
    name: "James Chen",
    role: "Contractor, home services",
  },
  {
    quote: "The site loads fast and people find us on Google now. That's what matters.",
    name: "Rachel Thompson",
    role: "Principal, legal firm",
  },
];

export default function WordPressPage() {
  return (
    <>
      {/* Hero Section */}
      <Section bg="white" className="pt-28 pb-12">
        <Container>
          <Reveal>
            <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white p-8 md:p-12 lg:p-16 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-lavender block mb-4">
                    Powerful
                  </span>
                  <h1 className="text-hero text-white mb-6">
                    WordPress built <br />
                    right
                  </h1>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pt-0">
                  <p className="text-body-lg text-white/90 mb-8">
                    WordPress powers more websites than any other platform. For local businesses, it means flexibility, control, and a site that grows with you. We build WordPress sites that convert visitors into customers.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="white" className="!text-brand-purple !border-white !shadow-none hover:!bg-white/90">
                      Propose
                    </Button>
                    <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                      Audit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Feature Section 1 */}
      <Section className="bg-brand-lavender/40 border-b border-border py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="w-12 h-12 rounded-card bg-white border border-border flex items-center justify-center mb-6 shadow-card text-brand-purple">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <h2 className="text-h2 text-foreground mb-6">
                  WordPress built for local service businesses
                </h2>
                <p className="text-body-lg text-muted mb-8 max-w-2xl">
                  We build WordPress sites that work. Fast loading, mobile-ready, secure, and easy to manage. Built to convert visitors into customers and to rank in Google search.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Button href="/contact" variant="white" className="!shadow-none hover:!bg-gray-100">
                    Learn more
                  </Button>
                  <ArrowLink href="/contact" className="text-brand-purple hover:text-brand-purple-dark">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Feature Image" />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Section 2 (Bento Grid) */}
      <Section bg="white" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Built"
              title="WordPress that ranks and converts"
              description="WordPress is built for search engines and built for business owners who want control"
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Wide (6 cols) */}
            <div className="lg:col-span-6 bg-[#737373] text-white rounded-card p-8 flex flex-col md:flex-row justify-between gap-6 shadow-card overflow-hidden">
              <Reveal className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block mb-2">
                    Fast
                  </span>
                  <h3 className="text-h3 text-white mb-4 leading-tight">
                    SEO-optimized from the ground up
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    Clean code, fast loading, structured for Google. Your site ranks because it's built right.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <Button href="/contact" variant="white" className="!shadow-none hover:!bg-white/90 py-2 px-4 text-xs !min-h-[36px]">
                    Learn
                  </Button>
                  <ArrowLink href="/contact" light className="text-white hover:text-white/80 text-xs">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
              <div className="w-full md:w-48 shrink-0 self-center">
                <Reveal delay={0.2}>
                  <ImagePlaceholder ratio="aspect-square" label="SEO Image" className="bg-[#5a5a5a]" />
                </Reveal>
              </div>
            </div>

            {/* Card 2: Narrow (3 cols) */}
            <div className="lg:col-span-3 bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[320px]">
              <Reveal className="flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center mb-6">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-h3 text-white mb-3 leading-snug">
                    Connected to Google where it matters
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Analytics, Maps, Reviews, Business Profile. Everything talks to Google so you see what works.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <ArrowLink href="/contact" light className="text-white hover:text-white/80 text-xs">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
            </div>

            {/* Card 3: Narrow (3 cols) */}
            <div className="lg:col-span-3 bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[320px]">
              <Reveal className="flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center mb-6">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-h3 text-white mb-3 leading-snug">
                    Grows with your business
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Start simple. Add features later. WordPress scales without rebuilding from scratch.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <ArrowLink href="/contact" light className="text-white hover:text-white/80 text-xs">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Section 3 */}
      <Section className="bg-brand-lavender/40 border-b border-border py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1">
              <Reveal>
                <ImagePlaceholder ratio="aspect-square" label="Management Image" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal delay={0.2}>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-purple block mb-2">
                  Yours
                </span>
                <h2 className="text-h2 text-foreground mb-4">
                  You manage it. No coding required.
                </h2>
                <p className="text-body-lg text-muted mb-6">
                  We build it, train you, and step back. Update your own content, add pages, manage your business. That's the point of WordPress.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-card bg-white border border-border text-brand-purple flex items-center justify-center shadow-card shrink-0">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <span className="text-body text-foreground">Update content anytime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-card bg-white border border-border text-brand-purple flex items-center justify-center shadow-card shrink-0">
                      <FilePlus2 className="w-4 h-4" />
                    </div>
                    <span className="text-body text-foreground">Add new pages yourself</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-card bg-white border border-border text-brand-purple flex items-center justify-center shadow-card shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-body text-foreground">Manage your own business</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <Button href="/contact" variant="white" className="!shadow-none hover:!bg-gray-100">
                    Get started
                  </Button>
                  <ArrowLink href="/contact" className="text-brand-purple hover:text-brand-purple-dark">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ready to Grow Section */}
      <Section className="bg-brand-coral text-white border-b border-white/10 py-16 md:py-24 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <Reveal>
              <h2 className="text-h2 text-white mb-3">
                Ready to grow your business?
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Let's build a WordPress site that brings in leads.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" className="!bg-brand-lavender-mid !text-foreground hover:!bg-brand-lavender transition-colors">
                  Propose
                </Button>
                <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                  Audit
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <TestimonialSection
        title="Real results"
        description="Hear from local businesses who got more leads."
        testimonials={wpTestimonials}
        bg="coral"
      />

      {/* Trusted Logos & Cases Banner */}
      <Section className="bg-brand-coral text-white border-t border-white/10 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="text-h2 text-white mb-4">
                  Trusted by local businesses across Ontario
                </h2>
                <p className="text-body-lg text-white/90 mb-8 max-w-xl">
                  Built for businesses that want to be found and want to stay in control
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Button href="/contact" variant="white" className="!shadow-none hover:!bg-white/90">
                    See our work
                  </Button>
                  <ArrowLink href="/contact" light className="text-white hover:text-white/80">
                    Arrow
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-12">
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FAQAccordion items={faqs} />

      {/* Let's Talk Section */}
      <Section className="bg-brand-lavender-mid/40 py-16 md:py-24 border-t border-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Reveal>
              <h2 className="text-h2 text-foreground mb-3">
                Let's talk about your site
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Tell us what you're looking for and we'll send over a proposal.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-card bg-brand-lavender border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand-purple text-sm md:text-base min-h-[44px]"
                  required
                />
                <Button type="submit" variant="white" className="w-full sm:w-auto shrink-0 !shadow-none hover:!bg-gray-100">
                  Send
                </Button>
              </form>
              <p className="text-xs text-muted mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
