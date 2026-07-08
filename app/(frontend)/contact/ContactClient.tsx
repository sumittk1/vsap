'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star, Mail, Phone, MapPin, Plus, X } from "lucide-react";

export default function ContactClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How fast will you respond?",
      answer: "We aim to respond to all inquiries within 24 business hours. Most of the time, you'll hear from us much sooner. If it's urgent, call us directly."
    },
    {
      question: "What happens after I submit this form?",
      answer: "We'll review your information and reach out to schedule a brief call. This is where we listen, understand your business, and discuss what's possible for your growth."
    },
    {
      question: "Do you work outside the GTA?",
      answer: "We primarily serve London, Ontario and the Greater Toronto Area. If you're outside this region, contact us anyway. We may be able to help or recommend someone who can."
    },
    {
      question: "Is there a cost for the strategy call?",
      answer: "No, the strategy call is completely free. We use it to understand your business and show you what we can do. No obligation, no hidden agenda."
    },
    {
      question: "How do you protect my information?",
      answer: "Your privacy matters to us. All information you share is kept confidential and used only to help you. We never sell or share your data with third parties."
    }
  ];

  const contactTestimonials = [
    {
      quote: '"VASP Digital took our Google presence seriously and delivered leads we could actually convert. They didn\'t just promise results, they showed us the work."',
      name: 'Sarah Mitchell',
      role: 'Owner, dental clinic',
      initials: 'SM',
    },
    {
      quote: '"Our website was costing us business. After the redesign and SEO work, we\'re seeing real traffic and real inquiries. Worth every penny."',
      name: 'James Chen',
      role: 'Contractor, home services',
      initials: 'JC',
    },
    {
      quote: '"They explained everything in plain language. No jargon, no BS. Just honest advice about what would actually move the needle for us."',
      name: 'Rebecca Torres',
      role: 'Real estate agent, London',
      initials: 'RT',
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
              <Eyebrow light>Connect</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">Let's talk growth</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                Tell us about your business and what you need. We'll listen, ask the
                right questions, and show you how we can help generate more
                leads through search and paid advertising. No pitch. Just honest
                conversation about what's possible.
              </p>
              <div className="flex gap-3">
                <a 
                  href="tel:+15190000000" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Call
                </a>
                <Link 
                  href="#message-form" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Message
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Reach / Get in Touch Section */}
      <Section bg="white" className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Reach</span>
                <h2 className="text-h2 text-foreground mb-3">Get in touch</h2>
                <p className="text-sm text-muted">
                  We're based in London, Ontario and serve the GTA.
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
                    <p className="text-xs text-muted mb-1">Send us a message anytime.</p>
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
                    <p className="text-xs text-muted mb-1">Call us during business hours.</p>
                    <a href="tel:+15190000000" className="text-xs text-brand-purple font-semibold underline">
                      +1 (519) 000-0000
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

      {/* Send us a message Form Section (Lavender background) */}
      <Section id="message-form" bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Form */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Let's talk</span>
                <h2 className="text-h2 text-foreground mb-3">Send us a message</h2>
                <p className="text-sm text-muted">
                  Fill out the form below and we'll get back to you within 24 hours. Tell us about your business, your goals, and what brings you here.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-brand-lavender-mid/5 border border-border text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-brand-lavender-mid/5 border border-border text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-lavender-mid/5 border border-border text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 text-sm"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="policy" 
                    className="rounded text-brand-purple focus:ring-brand-purple/20 cursor-pointer"
                    required
                  />
                  <label htmlFor="policy" className="text-xs text-muted cursor-pointer select-none">
                    I agree to the privacy policy.
                  </label>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Square/Vertical placeholder image */}
            <div className="w-full flex items-center justify-center min-h-[350px]">
              <div className="w-full h-full min-h-[350px] bg-[#d9d9d9] rounded-[24px] flex items-center justify-center relative shadow-inner">
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

      {/* Grow CTA Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your business?</h2>
            <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
              Book a strategy call with our team and let's map out your path forward.
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
        </Container>
      </section>

      {/* FAQ Accordion Section (Lavender bg) */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-h2 text-foreground mb-3">Questions</h2>
              <p className="text-body text-muted">
                Find answers to what you need to know about working with us.
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
              <p className="text-sm text-muted mb-6">Reach out directly and we'll clear things up.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer"
              >
                Contact us
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What clients say Section (Coral bg) */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-6xl text-center">
          
          <Reveal>
            <h2 className="text-h2 text-white mb-2">What clients say</h2>
            <p className="text-body-lg text-white/80 mb-12">Real results from real businesses we've worked with.</p>
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
              {contactTestimonials.map((t, idx) => (
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
    </>
  );
}
