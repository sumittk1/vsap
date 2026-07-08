"use client";

import { Check } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Primitives";
import { StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export default function PricingSection({
  eyebrow = "Plans",
  title,
  description,
  plans,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
}) {
  return (
    <Section bg="white">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <StaggerItemDiv key={plan.name}>
              <div
                className={cn(
                  "card-hover h-full rounded-card border p-6 md:p-8 flex flex-col",
                  plan.featured
                    ? "border-brand-purple bg-brand-lavender shadow-card scale-[1.02]"
                    : "border-border bg-white"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-h3">{plan.name}</h3>
                  <div className="w-9 h-9 rounded-lg bg-brand-lavender-mid flex items-center justify-center text-brand-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-1 mt-4">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted mb-6">per month</p>

                <hr className="border-border mb-6" />

                <p className="text-sm font-semibold mb-4">Includes</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="text-brand-purple shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </StaggerItemDiv>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
