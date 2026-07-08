'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star, Mail, Phone, MapPin, Globe } from "lucide-react";

const XIcon = () => (
  <svg className="w-4 h-4 fill-current text-muted-foreground/60 hover:text-foreground transition-colors" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function TeamClient() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const members = [
    {
      name: 'Sarah Mitchell',
      role: 'SEO strategist',
      bio: 'Ten years optimizing local search. Focuses on what moves the results.',
      initials: 'SM',
    },
    {
      name: 'James Chen',
      role: 'Lead developer',
      bio: 'Builds fast, clean websites that convert. Wordpress and custom solutions.',
      initials: 'JC',
    },
    {
      name: 'Emma Rodriguez',
      role: 'PPC specialist',
      bio: 'Manages Google Ads budgets that work. Focused on ROI, not impressions.',
      initials: 'ER',
    },
    {
      name: 'Michael Thompson',
      role: 'Local SEO expert',
      bio: 'Maps strategy and citations. Understands the GTA market inside out.',
      initials: 'MT',
    },
  ];

  const teamTestimonials = [
    {
      quote: '"VASP Digital didn\'t just promise results. They delivered them. Our leads doubled in four months."',
      name: 'Robert Myers',
      role: 'Owner, Myers Dental',
      initials: 'RM',
    },
    {
      quote: '"The team understands local business. They\'re not pushing generic tactics, they listen first."',
      name: 'Jennifer Wu',
      role: 'Principal, Wu Legal',
      initials: 'JW',
    },
    {
      quote: '"Our website was costing us business. Now it\'s bringing it in. Worth every dollar."',
      name: 'Marcus Thompson',
      role: 'Manager, Thompson contracting',
      initials: 'MT',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>Team</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">Meet the VASP Digital team</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                We're a group of strategists, developers, and marketers who know
                how to get results for local businesses. Every person here
                understands what it takes to turn searches into customers.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Connect
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

      {/* Team Grid Section */}
      <Section bg="white" className="py-20 md:py-24">
        <Container>
          <div className="mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Team</span>
              <h2 className="text-h2 text-foreground mb-3">Meet the team</h2>
              <p className="text-body text-muted max-w-xl">
                Strategists and developers who deliver
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
            {members.map((member, idx) => (
              <StaggerItemDiv key={idx}>
                <div className="flex flex-col items-start">
                  {/* Round Placeholder Avatar */}
                  <div className="w-16 h-16 rounded-full bg-[#d9d9d9] flex items-center justify-center mb-6 shadow-inner">
                    <svg
                      className="w-6 h-6 text-foreground/20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-sm text-brand-purple font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted leading-relaxed max-w-md mb-4">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a href="mailto:hello@vaspdigital.com" className="p-1 rounded bg-muted/30 hover:bg-muted/70 text-muted-foreground/60 hover:text-foreground transition-colors">
                      <Mail size={16} />
                    </a>
                    <a href="#" className="p-1 rounded bg-muted/30 hover:bg-muted/70 flex items-center justify-center transition-colors">
                      <XIcon />
                    </a>
                    <a href="#" className="p-1 rounded bg-muted/30 hover:bg-muted/70 text-muted-foreground/60 hover:text-foreground transition-colors">
                      <Globe size={16} />
                    </a>
                  </div>
                </div>
              </StaggerItemDiv>
            ))}
          </StaggerGroup>

          {/* We're Hiring Section */}
          <div className="border-t border-border pt-12">
            <Reveal>
              <h3 className="font-semibold text-lg text-foreground mb-1">We're hiring</h3>
              <p className="text-sm text-muted mb-6">Content manager</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
              >
                View positions
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Coral Section: Partners Recognition, Testimonials, and Grow CTA */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          
          {/* Recognition block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left pb-16 border-b border-white/10">
            <div className="lg:col-span-7">
              <h2 className="text-h2 text-white mb-4 leading-tight">Certified partners and industry recognition</h2>
              <p className="text-body text-white/80 max-w-xl">
                Trusted by Google and proven by results
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl bg-white text-brand-coral hover:bg-white/95 transition-all shadow-sm"
                >
                  Learn more
                </Link>
                <Link 
                  href="/services" 
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 flex items-center gap-1 group cursor-pointer"
                >
                  View all <ArrowRight size={14} className="inline-block transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Testimonial slider header */}
          <Reveal className="mt-20">
            <h2 className="text-h2 text-white mb-2">What clients say</h2>
            <p className="text-body-lg text-white/80 mb-12">Real feedback from real businesses</p>
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
              {teamTestimonials.map((t, idx) => (
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

          {/* Grow CTA */}
          <div className="mt-24 text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your business</h2>
              <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
                Talk to our team about what's possible
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
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Member</span>
                <h2 className="text-h2 text-foreground mb-3">Get in touch</h2>
                <p className="text-sm text-muted">
                  Serving London, Ontario and the Greater Toronto Area
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
                    <p className="text-xs text-muted mb-1">London, Ontario and Greater Toronto Area</p>
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
