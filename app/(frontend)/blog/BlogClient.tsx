'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import { ArrowRight, Star, Mail, Phone, MapPin, Plus, X } from "lucide-react";

export interface BlogPostItem {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
}

export default function BlogClient({ posts = [] }: { posts?: BlogPostItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState('View all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = ['View all', 'Local SEO', 'Google Ads', 'Web Design', 'Strategy'];

  const faqItems = [
    {
      question: "How does SEO work?",
      answer: "SEO builds your visibility in Google search results by optimizing your website's content, structure, and authority. It takes time, but the leads that come from organic search tend to convert well because people are actively looking for what you offer."
    },
    {
      question: "What's the difference between SEO and local SEO?",
      answer: "Local SEO focuses on getting your business found in Google Maps and local search results for your area. It's essential for service businesses and clinics that serve specific neighborhoods or cities. Standard SEO casts a wider net."
    },
    {
      question: "When will I see results from Google Ads?",
      answer: "Google Ads can drive traffic within hours of launching a campaign. You pay per click, so you only pay when someone actually visits your site. Results depend on your industry, budget, and how well your ads are targeted."
    },
    {
      question: "Do I need a new website to get leads?",
      answer: "Not always. A good website helps, but the real issue is usually visibility and conversion. We can often improve your lead flow by fixing your Google Business Profile, running targeted ads, or optimizing what you already have."
    },
    {
      question: "How do you measure success?",
      answer: "We track leads, calls, form submissions, and revenue when possible. Every strategy we recommend has a clear metric tied to it. If it doesn't move the needle on leads or sales, we don't do it."
    }
  ];

  const featuredPost = posts[0] || {
    slug: 'how-to-rank-in-google-maps',
    category: 'SEO',
    readTime: '8 min read',
    title: 'How to rank higher in Google search results',
    summary: "The fundamentals of SEO haven't changed much, but the tactics have. Here's what actually works.",
  };

  const gridPosts = posts.length > 1 ? posts.slice(1) : [];

  const carouselPosts = posts.slice(0, 3);


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Filter posts based on selected category (strictly for UX visual filtering)
  const filteredPosts = gridPosts.filter(post => {
    if (selectedCategory === 'View all') return true;
    return post.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <>
      {/* Hero Section */}
      <Section bg="purple" className="pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal variant={slideInLeft}>
              <Eyebrow light>Resources</Eyebrow>
              <h1 className="text-hero text-white mb-0 leading-[1.05]">Digital marketing insights</h1>
            </Reveal>
            <Reveal variant={slideInRight} delay={0.1}>
              <p className="text-body-lg text-white/85 mb-8 leading-relaxed">
                Learn what works for local businesses in Ontario. We share proven
                strategies for SEO, Google Ads, and web design that drive real
                results.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="#featured" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl bg-white text-brand-purple hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Read
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-display font-semibold text-[15px] px-6 py-3 rounded-xl border border-white/30 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Call
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Featured Post Section */}
      <Section id="featured" bg="white" className="py-20 md:py-24">
        <Container>
          <div className="mb-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Featured</span>
              <h2 className="text-h2 text-foreground mb-3">What's working right now</h2>
              <p className="text-body text-muted max-w-xl">
                Strategies that drive real results for local businesses.
              </p>
            </Reveal>
          </div>

          {/* Featured Post Card */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/80 rounded-[24px] overflow-hidden bg-[#fafafa] shadow-sm mb-16">
              {/* Left Column: Image placeholder */}
              <div className="aspect-[4/3] lg:aspect-auto bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
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

              {/* Right Column: Text content */}
              <div className="p-8 md:p-12 flex flex-col justify-center items-start">
                <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-h3 text-foreground mb-4 leading-tight">{featuredPost.title}</h3>
                <p className="text-body text-muted leading-relaxed mb-8">{featuredPost.summary}</p>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group"
                >
                  Read more <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border/60 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans font-semibold text-xs px-4 py-2 rounded-full cursor-pointer transition ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background hover:opacity-90'
                    : 'border border-border text-muted-foreground hover:bg-muted/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* All Posts Grid */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <StaggerItemDiv key={idx}>
                <div className="flex flex-col bg-white border border-border/70 rounded-[20px] overflow-hidden shadow-sm h-full group hover:border-border/100 transition-all duration-200">
                  {/* Card Image Placeholder */}
                  <div className="aspect-[16/10] bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
                    <svg
                      className="w-12 h-12 text-foreground/15"
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

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="font-semibold text-lg text-foreground mb-3 leading-snug group-hover:text-brand-purple transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {post.summary}
                      </p>
                    </div>

                    <Link 
                      href={post.slug ? `/blog/${post.slug}` : '/blog'}
                      className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group/link"
                    >
                      Read more <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItemDiv>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Lavender carousel slider Section */}
      <Section bg="lavender" className="py-20 md:py-24 border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">Blog</span>
              <h2 className="text-h2 text-foreground mb-3">Short heading goes here</h2>
              <p className="text-body text-muted max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            
            <Link
              href="/blog"
              className="inline-flex items-center justify-center font-display font-semibold text-[14px] px-6 py-2.5 rounded-xl border border-border text-foreground bg-white hover:bg-[#F9F9F9] transition-all duration-155 shadow-sm cursor-pointer self-start md:self-auto"
            >
              View all
            </Link>
          </div>

          {/* Test slider Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carouselPosts.map((post, idx) => (
              <div key={idx} className="flex flex-col bg-white border border-border/70 rounded-[20px] overflow-hidden shadow-sm h-full group hover:border-border/100 transition-all duration-200">
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-[#d9d9d9] flex items-center justify-center relative shadow-inner">
                  <svg
                    className="w-12 h-12 text-foreground/15"
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

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3 leading-snug group-hover:text-brand-purple transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {post.summary}
                    </p>
                  </div>

                  <Link 
                    href="/blog"
                    className="font-sans font-bold text-xs uppercase tracking-wider text-foreground hover:text-brand-purple inline-flex items-center gap-1.5 group/link"
                  >
                    Read more <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots left */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-foreground' : 'bg-foreground/20'}`} />
              ))}
            </div>

            {/* Arrows right */}
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white hover:bg-muted/40 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white hover:bg-muted/40 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Orange Get Weekly Marketing Tips (Newsletter Form) */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-4xl text-center">
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
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-lavender text-brand-purple font-semibold hover:opacity-95 transition shrink-0 text-[14px] cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-white/70 mt-3 text-center">
                We respect your privacy. Unsubscribe anytime. See our{' '}
                <Link href="/privacy" className="underline hover:text-white">
                  privacy policy
                </Link>
                .
              </p>
            </form>
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
                Find answers to common questions about digital marketing and our approach.
              </p>
            </Reveal>
          </div>

          {/* Interactive Accordion */}
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
                  
                  {/* Expansion content */}
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
              <p className="text-sm text-muted mb-6">Reach out and let's talk about your business.</p>
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

      {/* Grow Leads CTA Section */}
      <section className="bg-brand-coral py-20 md:py-24 text-white relative overflow-hidden">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-3 leading-tight">Ready to grow your leads?</h2>
            <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
              Book a strategy call with our team and find out what's possible for your business.
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
    </>
  );
}
