'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star, Plus, X, DollarSign, MessageSquare, HelpCircle, UserCheck, Flame, ShieldAlert, Award } from "lucide-react";

export default function LondonClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do you work locally?",
      answer: "Yes. We're based in London, Ontario and work exclusively with businesses in London and the GTA. We understand the local market, the competition, and what actually works here."
    },
    {
      question: "Can we meet in person?",
      answer: "Absolutely. We offer in-person strategy calls and consultations at our London office. We also work virtually if that suits your schedule better."
    },
    {
      question: "How long until we see results?",
      answer: "SEO typically shows meaningful results in three to six months. Google Ads can drive leads immediately. We'll set realistic timelines during your strategy call based on your specific situation."
    },
    {
      question: "What if we're not ready yet?",
      answer: "Get a free audit of your current online presence. It shows exactly where you stand and what's holding you back. No obligation, no pressure."
    },
    {
      question: "Do you work with my industry?",
      answer: "We've worked with dentists, contractors, lawyers, real estate agents, clinics, and hospitality businesses in London. If you serve local customers, we can help."
    }
  ];

  const londonTestimonials = [
    {
      quote: '"They understood our market immediately and delivered leads we could actually close."',
      name: 'Sarah Mitchell',
      role: 'Owner, dental clinic',
      initials: 'SM',
    },
    {
      quote: '"Our Google visibility went from nowhere to the top three in six months."',
      name: 'James Kowalski',
      role: 'Contractor, home services',
      initials: 'JK',
    },
    {
      quote: '"Finally, someone who knows London and actually cares about our growth."',
      name: 'Michele Torres',
      role: 'Manager, legal firm',
      initials: 'MT',
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>London</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">Digital growth experts</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                We're based right here in London, Ontario, helping local businesses
                get found on Google, Maps, and paid ads. Our team knows this
                market because we live in it.
              </p>
              <div className="flex gap-3">
                <a 
                  href="tel:+15190000000" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Call
                </a>
                <Link 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>



      {/* Why choose VASP Digital Section */}
      <Section bg="lavender" className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Column */}
            <div className="flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2 font-display">Why</span>
                <h2 className="text-h2 text-foreground mb-4 leading-tight">Why London businesses choose VASP Digital</h2>
                <p className="text-body text-muted leading-relaxed mb-8 max-w-xl">
                  We're not a distant agency. We live here, work here, and understand the London market inside out. Your success is our success.
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    See our work
                  </Link>
                  <Link 
                    href="/about"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group"
                  >
                    Learn more <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Placeholder */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full aspect-square max-w-[480px] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
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

          {/* What we do for London (Services Section) */}
          <div className="border-t border-border/50 pt-20">
            <div className="text-center mb-16">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2 font-display">Services</span>
                <h2 className="text-h2 text-foreground mb-3">What we do for London</h2>
                <p className="text-body text-muted">
                  Everything your business needs to win online
                </p>
              </Reveal>
            </div>

            {/* Responsive grid displaying services */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Column 1: SEO Services Large card */}
              <div className="lg:col-span-5 bg-white border border-border/70 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm">
                <div className="aspect-video bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
                  <svg className="w-12 h-12 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="p-8 flex flex-col items-start flex-grow justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2 font-display">SEO</span>
                  <h3 className="font-semibold text-xl text-foreground mb-3 leading-snug">Search engine optimization</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">Rank higher on Google and own your market</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link 
                      href="/services/seo"
                      className="inline-flex items-center justify-center font-display font-semibold text-[13px] px-5 py-2 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition shadow-sm cursor-pointer"
                    >
                      Learn
                    </Link>
                    <Link 
                      href="/services/seo"
                      className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1 group"
                    >
                      More <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column 2: Two smaller cards */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                {/* Paid Ads card */}
                <div className="bg-white border border-border/70 rounded-[24px] p-6 flex flex-col justify-center items-start shadow-sm flex-1">
                  <div className="w-10 h-10 rounded-xl bg-brand-lavender border border-border flex items-center justify-center text-brand-purple mb-4">
                    <DollarSign size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">Paid ads that work</h3>
                  <p className="text-xs text-muted leading-relaxed">Google Ads and paid search drive leads and sales starting this...</p>
                </div>
                {/* More card */}
                <div className="bg-white border border-border/70 rounded-[24px] p-6 flex flex-col justify-center items-start shadow-sm flex-1">
                  <div className="w-10 h-10 rounded-xl bg-brand-lavender border border-border flex items-center justify-center text-brand-purple mb-4">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">More</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link 
                    href="/services"
                    className="font-sans font-bold text-[10px] uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1 group"
                  >
                    Button <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Column 3: Horizontal Local card and Web design card */}
              <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
                {/* Local SEO horizontal card */}
                <div className="bg-white border border-border/70 rounded-[24px] overflow-hidden flex shadow-sm p-4 gap-4 items-center flex-1">
                  <div className="w-20 aspect-square bg-[#d9d9d9] rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                    <svg className="w-8 h-8 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5 font-display">Local</span>
                    <h3 className="font-semibold text-sm text-foreground mb-1 leading-snug">Local SEO and Google Maps</h3>
                    <p className="text-[11px] text-muted leading-relaxed mb-2">Get found when customers search nearby</p>
                    <Link 
                      href="/services/local-seo"
                      className="font-sans font-bold text-[10px] uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1 group"
                    >
                      More <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Web Design card with image */}
                <div className="bg-white border border-border/70 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm flex-grow">
                  <div className="h-28 bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
                    <svg className="w-8 h-8 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div className="p-6 flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1 font-display">Web</span>
                    <h3 className="font-semibold text-sm text-foreground mb-1 leading-snug">Website design and development</h3>
                    <p className="text-[11px] text-muted leading-relaxed mb-4">A website that converts visitors into customers</p>
                    <div className="flex items-center gap-3">
                      <Link 
                        href="/services/web-design-development"
                        className="inline-flex items-center justify-center font-display font-semibold text-[11px] px-4 py-1.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition shadow-sm cursor-pointer"
                      >
                        Explore
                      </Link>
                      <Link 
                        href="/services/web-design-development"
                        className="font-sans font-bold text-[10px] uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1 group"
                      >
                        More <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* Industries winning in London Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2 font-display">Results</span>
              <h2 className="text-h2 text-white mb-3">Industries winning in London</h2>
              <p className="text-body text-white/80">
                Real growth across every sector
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Clinics */}
            <div className="bg-[#fafafa]/5 border border-white/10 rounded-[24px] overflow-hidden flex shadow-sm items-stretch">
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block mb-2 font-display">Dental</span>
                  <h3 className="font-semibold text-lg text-white mb-2 leading-snug">Clinics and dental practices</h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">3x more new patient appointments monthly</p>
                </div>
                <Link 
                  href="/industries/clinics"
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 inline-flex items-center gap-1.5 group/link"
                >
                  View <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
              {/* Vertical Placeholder */}
              <div className="w-1/3 bg-[#d9d9d9]/20 flex items-center justify-center shrink-0 border-l border-white/10 relative">
                <svg className="w-6 h-6 text-white/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>

            {/* Column 2: Contractors */}
            <div className="bg-[#fafafa]/5 border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block mb-2 font-display">Home</span>
                <h3 className="font-semibold text-lg text-white mb-2 leading-snug">Contractors and home services</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">Ranked number one in Google Maps locally</p>
                <Link 
                  href="/industries/home-services"
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 inline-flex items-center gap-1.5 group/link"
                >
                  View <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
              {/* Horizontal placeholder */}
              <div className="h-28 bg-[#d9d9d9]/20 border-t border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>

            {/* Column 3: Legal */}
            <div className="bg-[#fafafa]/5 border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block mb-2 font-display">Legal</span>
                <h3 className="font-semibold text-lg text-white mb-2 leading-snug">Law firms and legal services</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">200% percent increase in qualified leads</p>
                <Link 
                  href="/industries/legal-services"
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 inline-flex items-center gap-1.5 group/link"
                >
                  View <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
              {/* Horizontal placeholder */}
              <div className="h-28 bg-[#d9d9d9]/20 border-t border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How London businesses grew with us (Lavender background) */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left Column: Image */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full aspect-square max-w-[480px] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
                <svg className="w-20 h-20 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>

            {/* Right Column: Stories */}
            <div className="flex flex-col items-start">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2 font-display">Stories</span>
                <h2 className="text-h2 text-foreground mb-6 leading-tight">How London businesses grew with us</h2>
                <p className="text-sm text-muted leading-relaxed mb-8 max-w-xl">
                  See what's possible when strategy meets execution. These are real London businesses, real results.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">Dental clinic expansion</h4>
                    <p className="text-xs text-muted">From struggling to book patients to turning away appointments in six months.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">Contractor dominance</h4>
                    <p className="text-xs text-muted">Home services business claimed the top spot in Google Maps across London.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">Legal firm growth</h4>
                    <p className="text-xs text-muted">Qualified leads tripled. Now they're selective about which cases they take.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    See all
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group"
                  >
                    More <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>

          {/* We know London benefits grid */}
          <div className="border-t border-border/50 pt-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: image */}
              <div className="w-full flex items-center justify-center lg:order-last">
                <div className="w-full aspect-square max-w-[480px] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
                  <svg className="w-20 h-20 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>

              {/* Right Column: 2x3 Grid benefits */}
              <div className="flex flex-col items-start">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-10 text-left">
                  
                  {/* Item 1 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <HelpCircle size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">We know London</h4>
                    <p className="text-xs text-muted leading-relaxed">We live here, work here, and understand your market deeply.</p>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <UserCheck size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">In-person meetings</h4>
                    <p className="text-xs text-muted leading-relaxed">Strategy calls at our London office or wherever suits you best.</p>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <Flame size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">Fast response</h4>
                    <p className="text-xs text-muted leading-relaxed">Same-day turnaround on questions and strategy adjustments.</p>
                  </div>

                  {/* Item 4 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <Award size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">Local expertise</h4>
                    <p className="text-xs text-muted leading-relaxed">We know your competition, your customers, and what actually works here.</p>
                  </div>

                  {/* Item 5 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <ShieldAlert size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">Short heading here</h4>
                    <p className="text-xs text-muted leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>

                  {/* Item 6 */}
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-3">
                      <ShieldAlert size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">Short heading here</h4>
                    <p className="text-xs text-muted leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>

                </div>

                <div className="flex items-center gap-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    Get started
                  </Link>
                  <Link 
                    href="/contact"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group"
                  >
                    More <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* How we grow London businesses (Process section) */}
          <div className="border-t border-border/50 pt-20">
            <div className="text-center mb-16">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2 font-display">Process</span>
                <h2 className="text-h2 text-foreground mb-3">How we grow London businesses</h2>
                <p className="text-body text-muted">
                  Three straightforward steps to real results
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Step 1 */}
              <div className="flex flex-col bg-white border border-border/70 rounded-[20px] overflow-hidden shadow-sm h-full group">
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2 font-display">One</span>
                  <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">Understand your London market</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">We audit your current presence and analyze what your competitors are doing.</p>
                  <Link 
                    href="/contact"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group/link"
                  >
                    More <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
                {/* Step Image */}
                <div className="h-32 bg-[#d9d9d9] flex items-center justify-center border-t border-border/50">
                  <svg className="w-8 h-8 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col bg-white border border-border/70 rounded-[20px] overflow-hidden shadow-sm h-full group">
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2 font-display">Two</span>
                  <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">Build your custom growth plan</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">Strategy tailored to London's market, your industry, and your goals.</p>
                  <Link 
                    href="/contact"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group/link"
                  >
                    More <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
                {/* Step Image */}
                <div className="h-32 bg-[#d9d9d9] flex items-center justify-center border-t border-border/50">
                  <svg className="w-8 h-8 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col bg-white border border-border/70 rounded-[20px] overflow-hidden shadow-sm h-full group">
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2 font-display">Three</span>
                  <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">Execute and report consistently</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">We deliver results and show you exactly what's working every month.</p>
                  <Link 
                    href="/contact"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group/link"
                  >
                    More <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
                {/* Step Image */}
                <div className="h-32 bg-[#d9d9d9] flex items-center justify-center border-t border-border/50">
                  <svg className="w-8 h-8 text-foreground/15" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </Container>
      </Section>

      {/* Real results Testimonials Section (Coral background) */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          
          <Reveal>
            <h2 className="text-h2 text-white mb-2">Real results</h2>
            <p className="text-body-lg text-white/80 mb-12">From London businesses</p>
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
              {londonTestimonials.map((t, idx) => (
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

        </Container>
      </section>

      {/* FAQ Accordion Section (Lavender bg) */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-h2 text-foreground mb-3">Questions</h2>
              <p className="text-body text-muted">
                Common questions from London business owners about our services and process.
              </p>
            </Reveal>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="flex flex-col gap-4 mb-20">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-border/80 rounded-[16px] bg-brand-lavender-mid/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 ml-4 p-1 rounded-full hover:bg-muted/50 transition">
                      {isOpen ? (
                        <X size={18} className="text-foreground/70" />
                      ) : (
                        <Plus size={18} className="text-foreground/70" />
                      )}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-border/40 text-sm text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="text-center max-w-xl mx-auto pt-8 border-t border-border/40">
            <Reveal>
              <h3 className="font-semibold text-lg text-foreground mb-2">Still have questions?</h3>
              <p className="text-sm text-muted mb-6">Reach out and let's talk.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
              >
                Contact
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Ready to grow your London business? CTA Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your London business?</h2>
            <p className="text-body-lg text-white/80 mb-8 leading-relaxed font-sans">
              Book a free strategy call with our team, in person or virtual, whatever works for you.
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
                Get audit
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Connect / Get in touch Section with Form (Orange/Coral background) */}
      <section id="contact-form" className="bg-brand-coral py-20 md:py-24 text-white border-t border-white/10 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Form */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2 font-display">Connect</span>
                <h2 className="text-h2 text-white mb-3">Get in touch</h2>
                <p className="text-sm text-white/70">
                  Tell us about your business and what you're trying to achieve. We'll be in touch within one business day.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="policy" 
                    className="rounded text-brand-coral border-white/20 focus:ring-white/20 cursor-pointer"
                    required
                  />
                  <label htmlFor="policy" className="text-xs text-white/80 cursor-pointer select-none">
                    I agree to the terms
                  </label>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-white/20 text-brand-coral bg-white hover:bg-white/95 transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Square/Vertical placeholder image */}
            <div className="w-full flex items-center justify-center min-h-[350px]">
              <div className="w-full h-full min-h-[350px] bg-white/10 border border-white/10 rounded-[24px] flex items-center justify-center relative shadow-inner">
                <svg
                  className="w-20 h-20 text-white/15"
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
      </section>
    </>
  );
}
