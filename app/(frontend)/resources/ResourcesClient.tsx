'use client';

import React from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, BookOpen, Target, Heart, Globe } from "lucide-react";

export default function ResourcesClient() {
  const resourceCards = [
    {
      title: "Case Studies",
      eyebrow: "Results & Proof",
      description: "See the exact numbers, strategies, and growth metrics we delivered for local service businesses and clinics.",
      href: "/case-studies",
      icon: Target,
      color: "bg-brand-coral/10 text-brand-coral border-brand-coral/20",
      cta: "View Case Studies",
      index: "01"
    },
    {
      title: "Latest Blog Insights",
      eyebrow: "Guides & Strategy",
      description: "Practical digital marketing tips, Google Business Profile checklists, and local SEO strategies designed for business owners.",
      href: "/blog",
      icon: BookOpen,
      color: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
      cta: "Read Blog",
      index: "02"
    },
    {
      title: "About VASP Digital",
      eyebrow: "Our Mission",
      description: "Learn about our founding story, our ROI-focused philosophy, and why we are dedicated to helping local businesses grow.",
      href: "/about",
      icon: Globe,
      color: "bg-brand-lavender-mid/20 text-brand-purple border-brand-lavender/30",
      cta: "Our Story",
      index: "03"
    },
    {
      title: "Meet the Team",
      eyebrow: "The Experts",
      description: "Get to know the technical SEOs, high-ROI paid media buyers, and modern WordPress developers behind our clients' success.",
      href: "/team",
      icon: Heart,
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      cta: "Meet Us",
      index: "04"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>Resources</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">Insights, proof, <br />and strategies</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                Explore our local marketing knowledge hub. From detailed client success stories to practical step-by-step ranking guides, we share the resources that help Ontario businesses scale.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                  id="resources-hero-cta-call"
                >
                  Book a Strategy Call
                </Link>
                <Link 
                  href="#explore-resources" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                  id="resources-hero-cta-explore"
                >
                  Explore Resources
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Grid Cards Section */}
      <Section id="explore-resources" bg="white" className="py-20 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Resource Hub</span>
              <h2 className="text-h2 text-foreground mb-4">Where would you like to start?</h2>
              <p className="text-body text-muted">
                Select a category below to browse our library of insights, case studies, team backgrounds, or values.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resourceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <StaggerItemDiv key={idx}>
                  <Link 
                    href={card.href}
                    className="flex flex-col bg-white border border-border/70 rounded-[24px] p-8 h-full group hover:border-border/100 hover:shadow-card transition-all duration-350 relative overflow-hidden"
                    id={`resource-card-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {/* Index number overlay */}
                    <span className="absolute top-6 right-8 font-sans font-bold text-sm text-muted-foreground/30">
                      {card.index}
                    </span>

                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${card.color}`}>
                      <Icon size={22} />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                          {card.eyebrow}
                        </span>
                        <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-brand-purple transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed mb-8">
                          {card.description}
                        </p>
                      </div>

                      {/* CTA link */}
                      <span className="font-sans font-bold text-xs uppercase tracking-wider text-foreground group-hover:text-brand-purple inline-flex items-center gap-1.5 transition-colors">
                        {card.cta} 
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItemDiv>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Newsletter signup section (consistent brand elements) */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden border-t border-brand-coral-dark">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container className="max-w-4xl text-center relative z-10">
          <Reveal>
            <h2 className="text-h2 text-white mb-2 leading-tight">Get weekly marketing tips</h2>
            <p className="text-body-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              Strategies and insights delivered straight to your inbox every week.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-[14px]"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-lavender text-brand-purple font-semibold hover:opacity-95 transition shrink-0 text-[14px] cursor-pointer shadow-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-white/70 mt-3 text-center">
                We respect your privacy. Unsubscribe anytime. See our{' '}
                <Link href="/privacy" className="underline hover:text-white">
                  Privacy policy
                </Link>.
              </p>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
