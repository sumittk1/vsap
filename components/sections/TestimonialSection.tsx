"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

export default function TestimonialSection({
  title = "Results",
  description = "See what our clients achieved with VASP Digital.",
  testimonials,
  bg = "coral",
}: {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  bg?: "coral" | "purple" | "lavender";
}) {
  const bgClasses = {
    coral: "bg-brand-coral text-white",
    purple: "bg-brand-purple text-white",
    lavender: "bg-brand-lavender text-foreground",
  };

  const cardBg = bg === "lavender" ? "bg-white" : "bg-white/10 backdrop-blur-sm border border-white/15";

  return (
    <section className={`py-16 md:py-24 ${bgClasses[bg]}`}>
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 mb-3">{title}</h2>
          <p className={bg === "lavender" ? "text-muted" : "text-white/80"}>{description}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`rounded-card p-6 h-full flex flex-col ${cardBg}`}>
                <div className="flex gap-1 mb-4 text-white">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-white/95 text-sm md:text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-white/20`}
                    >
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-white/70">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
