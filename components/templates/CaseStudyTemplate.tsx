"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section, Container, Eyebrow, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import StatsSection, { type StatItem } from "@/components/sections/StatsSection";
import { Star, ArrowRight } from "lucide-react";

export interface CaseStudyConfig {
  client: string;
  industry: string;
  location: string;
  services: string[];
  headline: string;
  subheadline: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  stats: StatItem[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
}

export default function CaseStudyTemplate({ config }: { config: CaseStudyConfig }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <>
      <Section bg="purple">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow light>
              {config.industry} · {config.location}
            </Eyebrow>
            <h1 className="text-hero text-white mb-4">{config.headline}</h1>
            <p className="text-body-lg text-white/80 mb-6">{config.subheadline}</p>
            <Link href="/contact" className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 transition-all shadow-sm">
              Talk to Us About Similar Results
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container className="max-w-4xl">
          <Reveal>
            <ImagePlaceholder ratio="aspect-[16/8]" label={config.client} />
          </Reveal>
        </Container>
      </Section>

      <Section bg="lavender">
        <Container className="max-w-3xl space-y-12">
          <Reveal>
            <Eyebrow>Client Overview</Eyebrow>
            <h2 className="text-h2 mb-3">About {config.client}</h2>
            <p className="text-body-lg text-muted">{config.overview}</p>
            <p className="text-sm text-muted mt-3">
              Services: <span className="font-medium text-foreground">{config.services.join(", ")}</span>
            </p>
          </Reveal>

          <Reveal variant={slideInLeft}>
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="text-h2 mb-3">The challenge</h2>
            <p className="text-body-lg text-muted">{config.challenge}</p>
          </Reveal>

          <Reveal variant={slideInRight}>
            <Eyebrow>Strategy</Eyebrow>
            <h2 className="text-h2 mb-3">The strategy</h2>
            <p className="text-body-lg text-muted">{config.strategy}</p>
          </Reveal>

          <Reveal variant={slideInLeft}>
            <Eyebrow>Execution</Eyebrow>
            <h2 className="text-h2 mb-3">Execution</h2>
            <p className="text-body-lg text-muted">{config.execution}</p>
          </Reveal>
        </Container>
      </Section>

      <StatsSection title="Results" description="Visual before-and-after metrics from this engagement." stats={config.stats} bg="purple" />

      {/* Testimonial slider / Grow CTA orange Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-2">Client wins</h2>
            <p className="text-body-lg text-white/80 mb-12">What our clients say</p>
          </Reveal>

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

          {/* Grow CTA inside the same section */}
          <div className="mt-24 text-center max-w-2xl mx-auto">
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
          </div>
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
                        placeholder="Tell us your Industry"
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
