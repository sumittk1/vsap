"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Container } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is AI visibility?",
    answer: "AI visibility means your business appears in AI-generated answers, search summaries, and emerging AI search experiences. When someone asks an AI tool a question related to your industry, your business should be cited as a credible source. This requires structured content, clear entity signals, and strong authority markers."
  },
  {
    question: "How is this different from SEO?",
    answer: "Traditional SEO focuses on ranking for keywords. Brand visibility is broader. It includes rankings, but also your presence on Maps, in local citations, across review platforms, in AI answers, and in branded search results. It's about being discoverable across the entire search ecosystem, not just organic rankings."
  },
  {
    question: "Why does my business need this now?",
    answer: "Search behavior is changing. People use Google, Maps, AI tools, and directories simultaneously. If your business isn't consistently represented across all these channels, you're invisible to half your potential customers. This service ensures you're present everywhere your customers are looking."
  },
  {
    question: "How long does visibility take to build?",
    answer: "Foundation work like citations and structured content shows results in 4 to 8 weeks. Deeper visibility across AI and authority signals takes 3 to 6 months. We focus on sustainable, compound growth that compounds over time."
  },
  {
    question: "What's included in this service?",
    answer: "We audit your current visibility across search, Maps, directories, and AI platforms. Then we build a strategy around citations, structured data, content optimization, brand consistency, and authority signals. The goal is to make your business easier for search engines and AI to understand and recommend."
  }
];

export default function BrandVisibilityFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Reveal>
              <h2 className="text-h2 leading-tight mb-4">Questions</h2>
              <p className="text-body-lg text-muted mb-8">
                Get clear answers about how modern visibility works and what it means for your business.
              </p>
            </Reveal>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 w-full">
            <StaggerGroup className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <StaggerItemDiv key={i}>
                    <div className="bg-brand-lavender/50 rounded-card border border-border overflow-hidden hover:shadow-sm transition-all duration-300">
                      <button
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5 cursor-pointer group"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-base md:text-lg group-hover:text-brand-purple transition-colors">
                          {faq.question}
                        </span>
                        <span className="shrink-0 mt-0.5 text-muted transition-transform duration-200">
                          {isOpen ? <X size={20} className="rotate-45" /> : <Plus size={20} />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 md:px-6 md:pb-6 text-muted text-sm md:text-base border-t border-border/40 pt-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </StaggerItemDiv>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
