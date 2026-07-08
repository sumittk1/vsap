'use client';

import React from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star } from "lucide-react";

export default function ThankYouClient() {
  const thankYouTestimonials = [
    {
      quote: '"They took our Google presence seriously and delivered leads we could actually close."',
      name: 'Marcus Chen',
      role: 'Owner, dental clinic',
      initials: 'MC',
    },
    {
      quote: '"Our website went from invisible to the first page. The work speaks for itself."',
      name: 'Sarah Mitchell',
      role: 'Contractor, home services',
      initials: 'SM',
    },
    {
      quote: '"We stopped wasting money on ads that didn\'t work. VASP Digital fixed it."',
      name: 'James Kowalski',
      role: 'Principal, legal firm',
      initials: 'JK',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>Confirmed</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">We got it</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                Your request is in our hands now. We'll review what you've sent and
                reach out within one business day to discuss your next steps.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Services
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What Happens Now Section (Lavender background) */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container>
          <div className="mb-12 text-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Next</span>
              <h2 className="text-h2 text-foreground mb-3">What happens now</h2>
              <p className="text-body text-muted max-w-xl mx-auto">
                One of our digital growth experts will reach out within one business day.
              </p>
            </Reveal>
          </div>

          {/* Expect Details Card */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/80 rounded-[24px] overflow-hidden bg-white shadow-sm">
              
              {/* Left Column: Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  Here's what to expect
                </span>
                <h3 className="text-h3 text-foreground mb-4 leading-tight">Initial review</h3>
                <p className="text-body text-muted leading-relaxed mb-8">
                  We'll analyze what you sent and identify the biggest opportunities for your business. No surprises, just honest assessment.
                </p>
                
                <div className="flex items-center gap-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    Strategy call
                  </Link>
                  <Link 
                    href="/services"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group"
                  >
                    Learn more <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Square Placeholder Image */}
              <div className="aspect-square lg:aspect-auto bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
                <svg
                  className="w-20 h-20 text-foreground/15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Coral Section: Testimonials & Keep building CTA */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          
          <Reveal>
            <h2 className="text-h2 text-white mb-2">Real results</h2>
            <p className="text-body-lg text-white/80 mb-12">What clients say</p>
          </Reveal>

          {/* Testimonial Cards */}
          <Reveal className="relative px-1 md:px-10">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 hidden md:flex items-center justify-center bg-white/10 hover:bg-white/25 transition-colors cursor-pointer z-10">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {thankYouTestimonials.map((t, idx) => (
                <div key={idx} className="bg-transparent border border-white/20 rounded-[20px] p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px] shadow-sm">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-white text-white" />
                      ))}
                    </div>
                    
                    <p className="text-body text-white leading-relaxed mb-8 text-[14px]">
                      {t.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                    {/* Avatar circle with initials */}
                    <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white leading-tight">{t.name}</p>
                      <p className="text-xs text-white/70 leading-tight mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 hidden md:flex items-center justify-center bg-white/10 hover:bg-white/25 transition-colors cursor-pointer z-10">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Reveal>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/20'}`} />
            ))}
          </div>

          {/* Keep building your growth CTA */}
          <div className="mt-24 text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-h2 text-white mb-3 leading-tight">Keep building your growth</h2>
              <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
                Explore case studies and insights to see what's possible for your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-coral hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Case studies
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-coral hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Read blog
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
