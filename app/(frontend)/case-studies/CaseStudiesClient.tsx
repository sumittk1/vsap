'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow, ImagePlaceholder, ArrowLink } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  slug: string;
  category: string;
  duration: string;
  title: string;
  desc: string;
  url: string;
};

export default function CaseStudiesClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      slug: 'dental-clinic',
      category: 'Dental',
      duration: '6 months',
      title: 'Dental clinic reaches first page in six months',
      desc: 'Local SEO strategy brought consistent patient inquiries and booked appointments.',
      url: '/case-studies/london-dental-clinic-seo',
    },
    {
      slug: 'home-services',
      category: 'Contractors',
      duration: '3 months',
      title: 'Home services contractor doubles lead volume',
      desc: 'Google Ads campaign targeted high-intent searches in service area.',
      url: '/case-studies/toronto-contractor-paid-ads',
    },
    {
      slug: 'legal-firm',
      category: 'Legal',
      duration: '4 months',
      title: 'Legal firm increases qualified leads by 140 percent',
      desc: 'SEO and local citations built authority and visibility in competitive market.',
      url: '/case-studies/mississauga-law-firm-website',
    }
  ];

  const testimonials = [
    {
      quote: '"They took our local visibility from nothing to the first page in six months."',
      name: 'Sarah Mitchell',
      role: 'Owner, dental clinic',
      initials: 'SM',
    },
    {
      quote: '"Our phone stopped ringing. Then VASP Digital fixed it. Now we\'re booked solid."',
      name: 'James Kowalski',
      role: 'Contractor, home services',
      initials: 'JK',
    },
    {
      quote: '"The ROI was clear within the first quarter. We\'ve doubled our leads since."',
      name: 'Michelle Chen',
      role: 'Manager, legal firm',
      initials: 'MC',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredCases = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      {/* Hero Section */}
      <Section bg="white" className="pt-24 pb-8">
        <Container>
          <Reveal>
            <div className="bg-brand-purple rounded-[32px] overflow-hidden text-white p-8 md:p-12 lg:p-16 relative shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col gap-6 items-start">
                <h1 className="text-hero text-white mb-0 leading-tight">
                  Proven results <br />
                  for local <br />
                  businesses
                </h1>
                <p className="text-body-lg text-white/80 leading-relaxed max-w-xl">
                  See how VASP Digital drives real growth through SEO, paid ads, and web design for small businesses in London, Ontario and the GTA. Our clients get more leads, better visibility, and measurable returns on their investment.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a 
                    href="#results" 
                    className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    Explore
                  </a>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Right Column: Square Placeholder */}
              <div className="lg:col-span-5 w-full flex items-center justify-center">
                <div className="w-full aspect-square bg-[#d9d9d9] rounded-2xl flex items-center justify-center shadow-inner">
                  <svg
                    className="w-20 h-20 text-brand-purple/20"
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
          </Reveal>
        </Container>
      </Section>

      {/* Case Studies / Results Section */}
      <Section id="results" bg="gray" className="border-t border-border">
        <Container className="max-w-3xl">
          
          {/* Centered Heading Content */}
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-purple">
              results
            </span>
            <h2 className="text-h2 text-foreground mb-2">
              Real growth, real numbers
            </h2>
            <p className="text-body-lg text-muted max-w-xl">
              Filter by industry or service to see how we've helped businesses like yours
            </p>
            
            {/* Filter Dropdown */}
            <div className="relative w-full max-w-[220px] mt-2">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-border hover:border-border-dark text-foreground text-sm font-semibold px-5 py-3 pr-10 rounded-xl cursor-pointer shadow-sm focus:outline-none transition-colors"
              >
                <option value="All">All services</option>
                <option value="Dental">Dental</option>
                <option value="Contractors">Contractors</option>
                <option value="Legal">Legal</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical Case Studies List */}
          <StaggerGroup className="flex flex-col gap-12">
            {filteredCases.map((cs) => (
              <StaggerItemDiv key={cs.title}>
                <div className="bg-white border border-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
                  
                  {/* Wide aspect-ratio image placeholder at the top */}
                  <ImagePlaceholder ratio="aspect-[16/9]" label={cs.title} className="rounded-none" />
                  
                  {/* Card Body */}
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      <span className="px-3 py-1 rounded-full border border-border bg-[#F2F2F2] text-foreground">
                        {cs.category}
                      </span>
                      <span>{cs.duration}</span>
                    </div>
                    
                    <h3 className="text-h3 text-foreground leading-tight group-hover:text-brand-purple transition-colors">
                      <Link href={cs.url}>{cs.title}</Link>
                    </h3>
                    
                    <p className="text-body text-muted leading-relaxed">
                      {cs.desc}
                    </p>
                    
                    <div className="pt-2">
                      <ArrowLink href={cs.url}>
                        Read case study
                      </ArrowLink>
                    </div>
                  </div>
                </div>
              </StaggerItemDiv>
            ))}
          </StaggerGroup>

        </Container>
      </Section>

      {/* Carousel Section ("What clients achieved") */}
      <Section bg="white" className="border-t border-border">
        <Container className="max-w-6xl text-center">
          <Reveal>
            <h2 className="text-h2 text-foreground mb-2">What clients achieved</h2>
            <p className="text-body-lg text-muted mb-12">These aren't promises. They're results.</p>
          </Reveal>

          <Reveal className="relative px-1 md:px-10 mt-6">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border hidden md:flex items-center justify-center bg-white hover:bg-[#F2F2F2] transition-colors cursor-pointer z-10">
              <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white border border-border rounded-[20px] p-6 md:p-8 flex flex-col justify-between h-full min-h-[320px] shadow-sm hover:shadow-md transition-shadow">
                  <div>

                    
                    <p className="text-body text-foreground leading-relaxed mb-8">
                      {t.quote}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 pt-6 border-t border-border/60">
                      {/* Avatar circle with initials */}
                      <div className="w-10 h-10 rounded-full bg-brand-lavender text-brand-purple flex items-center justify-center font-bold text-sm shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground leading-tight">{t.name}</p>
                        <p className="text-xs text-muted leading-tight mt-1">{t.role}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-1">
                      <Link href="/case-studies" className="text-xs font-bold text-brand-purple hover:underline inline-flex items-center gap-1">
                        View case study <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border hidden md:flex items-center justify-center bg-white hover:bg-[#F2F2F2] transition-colors cursor-pointer z-10">
              <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Reveal>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-purple' : 'bg-border'}`} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Proof Section */}
      <Section bg="lavender" className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-purple block mb-2">
                Proof
              </span>
              <h2 className="text-h2 text-foreground mb-4">
                The numbers speak for themselves
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <p className="text-body-lg text-muted max-w-xl">
                We measure what matters. Traffic, leads, and revenue growth. Our clients see real improvement in months, not years.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a 
                  href="#results" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-white border border-border text-foreground hover:bg-[#F9F9F9] transition-all duration-200 shadow-sm cursor-pointer"
                >
                  See all case studies
                </a>
                <a 
                  href="#" 
                  className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple transition-colors flex items-center gap-1 group"
                >
                  Download results <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Staggered Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
            {/* Col 1: Tall Card */}
            <div className="bg-white border border-border rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[350px] shadow-sm">
              <p className="text-sm font-semibold text-muted">Average traffic increase</p>
              <div>
                <p className="text-6xl md:text-7xl font-bold text-foreground mb-4 leading-none">125%</p>
                <p className="text-xs text-muted">Across all clients in first six months</p>
              </div>
            </div>

            {/* Col 2: Square Placeholder + Card */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#d9d9d9] aspect-[4/3] rounded-[24px] flex items-center justify-center min-h-[160px] shadow-inner">
                <svg className="w-12 h-12 text-foreground/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div className="bg-white border border-border rounded-[24px] p-8 flex flex-col justify-between flex-1 min-h-[220px] shadow-sm">
                <p className="text-sm font-semibold text-muted">Total leads generated</p>
                <div>
                  <p className="text-5xl font-bold text-foreground mb-4 leading-none">1,000+</p>
                  <p className="text-xs text-muted">For local businesses across Ontario and GTA</p>
                </div>
              </div>
            </div>

            {/* Col 3: Card + Square Placeholder */}
            <div className="flex flex-col gap-6">
              <div className="bg-brand-lavender-mid border border-border rounded-[24px] p-8 flex flex-col justify-between flex-1 min-h-[220px] shadow-sm">
                <p className="text-sm font-semibold text-muted">Average client rating</p>
                <div>
                  <p className="text-5xl font-bold text-foreground mb-4 leading-none">4.9</p>
                  <p className="text-xs text-muted">Stars on Google and review platforms</p>
                </div>
              </div>
              <div className="bg-[#d9d9d9] aspect-[4/3] rounded-[24px] flex items-center justify-center min-h-[160px] shadow-inner">
                <svg className="w-12 h-12 text-foreground/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Orange Filter Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Filter Card */}
            <div className="lg:col-span-5 bg-black/15 rounded-[24px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[350px]">
              {/* Image placeholder background (low opacity) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none z-0">
                <svg className="w-64 h-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2">Filter</span>
                <h2 className="text-h2 text-white mb-4">Find your industry</h2>
                <p className="text-sm text-white/85 leading-relaxed">
                  See how we've helped businesses in your field grow faster
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-6">
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-2.5 rounded-xl bg-white text-brand-coral hover:bg-white/95 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  View all
                </button>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-white/80 transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  Clear filters <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Two Coral Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
              
              {/* Dental clinics card */}
              <button 
                onClick={() => {
                  setActiveCategory('Dental');
                  document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-left bg-white/10 hover:bg-white/15 border border-white/20 rounded-[24px] p-6 flex items-start gap-4 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-white mb-1">Dental clinics</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-3">
                    Patient acquisition through local SEO and Google visibility
                  </p>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>

              {/* Home services card */}
              <button 
                onClick={() => {
                  setActiveCategory('Contractors');
                  document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-left bg-white/10 hover:bg-white/15 border border-white/20 rounded-[24px] p-6 flex items-start gap-4 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-white mb-1">Home services</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-3">
                    Lead generation for contractors, plumbers, electricians, and trades
                  </p>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>

            </div>

          </div>
        </Container>
      </section>

      {/* Grow CTA inside Section */}
      <section className="bg-brand-coral py-20 text-white border-t border-white/10">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your business?</h2>
            <p className="text-body-lg text-white/80 mb-8">Let's talk about what's possible for your business.</p>
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
        </Container>
      </section>

      {/* Find Your Case Study form Section */}
      <Section bg="lavender" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Next</span>
                <h2 className="text-h2 text-foreground mb-3">Find your case study</h2>
                <p className="text-body-lg text-muted mb-8">
                  Tell us about your business and we'll send you a relevant example.
                </p>

                {submitted ? (
                  <div className="p-6 bg-white border border-border rounded-[20px] text-brand-purple font-semibold">
                    ✓ Thank you! We will find a tailored case study for your business and email you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground">Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-border focus:border-brand-purple rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white border border-border focus:border-brand-purple rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground">Business</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        className="w-full bg-white border border-border focus:border-brand-purple rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                        placeholder="Tell us your industry"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id="agree"
                        checked={formData.agree}
                        onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                        className="w-4 h-4 rounded text-brand-purple focus:ring-brand-purple border-border cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-xs text-muted cursor-pointer select-none">
                        I agree to receive updates
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="self-start inline-flex items-center justify-center font-display font-semibold text-[15px] px-8 py-3 rounded-xl bg-white border border-border text-foreground hover:bg-[#F9F9F9] hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      Send
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className="w-full aspect-[4/5] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center shadow-inner">
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
    </>
  );
}
