"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  title = "FAQ",
  description,
  items,
  contactCta = true,
}: {
  title?: string;
  description?: string;
  items: FAQItem[];
  contactCta?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section bg="lavender">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Reveal>
              <h2 className="text-h2 leading-tight mb-4">{title}</h2>
              {description && <p className="text-body-lg text-muted mb-8">{description}</p>}
              {contactCta && (
                <Button href="/contact" variant="secondary">
                  Contact us
                </Button>
              )}
            </Reveal>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 w-full">
            <StaggerGroup className="space-y-3">
              {items.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <StaggerItemDiv key={i}>
                    <div className="bg-white rounded-card border border-border overflow-hidden hover:shadow-sm transition-all duration-300">
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
    </Section>
  );
}
