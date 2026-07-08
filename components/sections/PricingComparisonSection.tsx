import { Check } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export interface ComparisonPlan {
  name: string;
  price: string;
  period?: string;
  cta: string;
  href?: string;
}

export interface ComparisonGroup {
  title: string;
  rows: { label: string; values: (boolean | string)[] }[];
}

export default function PricingComparisonSection({
  eyebrow = "Focused",
  title,
  description,
  plans,
  groups,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  plans: ComparisonPlan[];
  groups: ComparisonGroup[];
}) {
  return (
    <Section bg="lavender">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        {/* Plan headers + CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="hidden sm:block" />
          {plans.map((plan) => (
            <div key={plan.name} className="text-center">
              <p className="font-semibold mb-1">{plan.name}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted text-sm">{plan.period}</span>}
              </div>
              <p className="text-xs text-muted mb-3">per month</p>
              <Button href={plan.href ?? "/contact"} variant="secondary" size="sm" className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Comparison groups */}
        <div className="space-y-8">
          {groups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="font-semibold text-base mb-3">{group.title}</h3>
              <div className="bg-white rounded-card border border-border overflow-hidden">
                {group.rows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-4 px-5 py-3 text-sm ${
                      i !== group.rows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-foreground/80">{row.label}</span>
                    {row.values.map((v, j) => (
                      <span key={j} className="text-center font-medium">
                        {v === true ? (
                          <Check size={16} className="inline text-brand-purple" />
                        ) : v === false ? (
                          <span className="text-border-dark">—</span>
                        ) : (
                          v
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTAs */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="hidden sm:block" />
          {plans.map((plan) => (
            <StaggerItemDiv key={plan.name}>
              <Button href={plan.href ?? "/contact"} variant="primary" className="w-full justify-center">
                {plan.cta}
              </Button>
            </StaggerItemDiv>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
