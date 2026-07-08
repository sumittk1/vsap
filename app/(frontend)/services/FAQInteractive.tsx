"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQInteractive() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Which service should I choose?",
      answer: "Start with your goal. Need organic visibility? SEO. Want local customers? Local SEO. Need immediate traffic? Google Ads. Building or fixing your site? Web design. Most businesses benefit from combining services so each one amplifies the others."
    },
    {
      question: "How long until I see results?",
      answer: "Paid ads deliver traffic in days. SEO takes three to six months to show real momentum. Web design impacts conversion immediately. We're honest about timelines and focus on sustainable growth, not shortcuts."
    },
    {
      question: "Do you work with my industry?",
      answer: "We've worked with clinics, contractors, legal firms, real estate, hospitality, and home services. If you serve local customers and want more leads from Google, we know how to help."
    },
    {
      question: "What's included in a strategy call?",
      answer: "We review your current visibility, competition, and goals. You'll leave with a clear picture of what's working, what isn't, and what we'd do differently. No pressure, just honest insight."
    },
    {
      question: "How do you measure success?",
      answer: "Leads, calls, and revenue. We track every campaign, report monthly, and adjust strategy based on what the data shows. Your growth is our only metric that matters."
    }
  ];

  return (
    <div className="lg:col-span-7 space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <Reveal key={faq.question}>
            <div className="bg-white border border-gray-border/50 rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-start gap-4 text-left p-6 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <h3 className="font-bold text-[#080e0c] text-[15px] md:text-base pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <span className="text-dark/60 group-hover:text-dark focus:outline-none shrink-0 mt-0.5 transition-transform duration-200">
                  {isOpen ? <X size={18} className="rotate-45" /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-6 text-xs md:text-sm text-dark/70 leading-relaxed border-t border-gray-border/30 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
