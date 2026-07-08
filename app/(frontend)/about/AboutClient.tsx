'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star, Mail, Phone, MapPin } from "lucide-react";

export default function AboutClient() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const values = [
    { num: "01", title: "Transparency first", desc: "We solve real problems for real businesses. No fluff, no empty promises." },
    { num: "02", title: "ROI focus", desc: "Every recommendation is tied back to leads, calls, and revenue — not vanity metrics." },
    { num: "03", title: "Practical solutions", desc: "We use proven, practical tactics rather than chasing trends or shortcuts." },
    { num: "04", title: "Local expertise", desc: "Deep understanding of London & GTA markets, customers, and competition." },
  ];

  const testimonials = [
    {
      quote: '"VASP Digital transformed how we show up on Google. We\'re getting calls we never got before."',
      name: 'Sarah Mitchell',
      role: 'Owner, dental clinic',
      initials: 'SM',
    },
    {
      quote: '"They understood our business from day one. The strategy worked and the leads kept coming."',
      name: 'James Chen',
      role: 'Contractor, home services',
      initials: 'JC',
    },
    {
      quote: '"No fluff, no long contracts. Just honest work that delivered measurable results for our firm."',
      name: 'Rebecca Walsh',
      role: 'Partner, legal practice',
      initials: 'RW',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>Growth</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">We build local businesses</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                VASP Digital helps small businesses in London, Ontario and the
                GTA get found on Google and turn searches into customers. We do
                this through SEO, local search optimization, paid advertising, and
                websites that work.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Start here
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Learn more
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section bg="white" className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start gap-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Our story</span>
                <h2 className="text-h2 text-foreground mb-4 leading-tight">
                  Built for local businesses who want real results
                </h2>
                <p className="text-body text-muted leading-relaxed max-w-xl">
                  VASP Digital started because we saw small businesses getting lost in the noise. They had good services, good intentions, but nobody could find them online. We decided to change that. We focus on what actually works—SEO that brings qualified leads, local search visibility that puts you on the map, and websites built to convert. No shortcuts, no empty promises. Just practical strategy and solid execution for businesses in London, Ontario and the GTA.
                </p>



                {/* Actions */}
                <div className="flex items-center gap-4 mt-8">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    Learn more
                  </Link>
                  <Link 
                    href="/services" 
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="w-3.5 h-3.5 flex items-center justify-center border border-foreground rounded-full text-[8px] font-bold group-hover:border-brand-purple group-hover:text-brand-purple transition-colors">&gt;</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Square Placeholder Image */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full aspect-square bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
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
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container>
          <StaggerGroup className="space-y-20">
            {values.map((item, i) => (
              <StaggerItemDiv key={item.num}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Square placeholder with index number overlay */}
                  <div className="relative w-full aspect-square bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
                    <svg
                      className="w-16 h-16 text-foreground/15"
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
                    <span className="absolute top-4 right-4 bg-foreground/10 px-2 py-0.5 rounded text-xs font-bold text-foreground/50">
                      {item.num.replace(/^0/, '')}
                    </span>
                  </div>

                  {/* Right Column: Values content */}
                  <div>
                    {i === 0 ? (
                      <>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Why</span>
                        <h2 className="text-h2 text-foreground mb-4">What sets us apart</h2>
                        <p className="text-body-lg text-muted mb-6">
                          We don't chase trends or oversell solutions. We focus on what moves the needle for your business.
                        </p>
                        <div className="flex items-center gap-4 mb-12">
                          <Link 
                            href="/services" 
                            className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-150 shadow-sm cursor-pointer"
                          >
                            Learn
                          </Link>
                          <Link 
                            href="/services" 
                            className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple flex items-center gap-1 group cursor-pointer"
                          >
                            Explore <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                        
                        {/* 01 Value */}
                        <h3 className="text-h3 text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted text-body-lg">{item.desc}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-h3 text-foreground mb-3">{item.num}. {item.title}</h3>
                        <p className="text-muted text-body-lg">{item.desc}</p>
                      </>
                    )}
                  </div>

                </div>
              </StaggerItemDiv>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Coral Section: Testimonial Wins, Recognition block, and Grow CTA */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          
          {/* Testimonial slider header */}
          <Reveal>
            <h2 className="text-h2 text-white mb-2">What clients say</h2>
            <p className="text-body-lg text-white/80 mb-12">Real results from real businesses</p>
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
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-transparent border border-white/20 rounded-[20px] p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px] shadow-sm">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-white text-white" />
                      ))}
                    </div>
                    
                    <p className="text-body text-white leading-relaxed mb-8">
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

          {/* Recognition block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left mt-24 pt-16 border-t border-white/10">
            <div className="lg:col-span-7">
              <h2 className="text-h2 text-white mb-4 leading-tight">Recognized for digital excellence and local impact</h2>
              <p className="text-body text-white/80 max-w-xl">
                Our work has earned recognition from industry leaders and clients who trust our approach.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl bg-white text-brand-coral hover:bg-white/95 transition-all shadow-sm"
                >
                  View
                </Link>
                <Link 
                  href="/services" 
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 flex items-center gap-1 group cursor-pointer"
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center border border-white rounded-full text-[8px] font-bold group-hover:border-white/80 group-hover:text-white/80 transition-colors">&gt;</span>
                </Link>
              </div>
            </div>
            

          </div>

          {/* Grow CTA */}
          <div className="mt-24 text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your business?</h2>
              <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
                Let's talk about what's possible for your business. No pressure, just honest strategy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-coral hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Book a call
                </Link>
                <Link 
                  href="/contact?type=audit" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-coral hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Get a free audit
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Connect / Get in touch Lavender Section */}
      <Section bg="lavender" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Connect</span>
                <h2 className="text-h2 text-foreground mb-3">Get in touch</h2>
                <p className="text-sm text-muted">
                  Let's talk about your business and what's possible
                </p>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-brand-purple shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Email</p>
                    <p className="text-xs text-muted mb-1">Reach us at</p>
                    <a href="mailto:hello@vaspdigital.com" className="text-xs text-brand-purple font-semibold underline">
                      hello@vaspdigital.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-brand-purple shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Phone</p>
                    <p className="text-xs text-muted mb-1">Call us at</p>
                    <a href="tel:+15195550147" className="text-xs text-brand-purple font-semibold underline">
                      +1 (519) 555-0147
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-brand-purple shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Office</p>
                    <p className="text-xs text-muted mb-1">123 King Street, London, Ontario N6A 1A1</p>
                    <a href="#" className="text-xs text-brand-purple font-semibold underline inline-flex items-center gap-0.5">
                      Get directions <ArrowRight size={12} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Map Image Placeholder */}
            <div className="lg:col-span-7 w-full flex items-center justify-center">
              <div className="w-full aspect-[16/10] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center relative shadow-inner">
                {/* Map Pin Pinpoint Icon */}
                <div className="relative">
                  <MapPin size={48} className="text-foreground/20 fill-foreground/5 animate-bounce" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
