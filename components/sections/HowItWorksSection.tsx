import { Section, Container, SectionHeader } from "@/components/ui/Primitives";
import { StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

export default function HowItWorksSection({
  eyebrow = "Process",
  title = "How it works",
  description,
  steps,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
}) {
  return (
    <Section bg="lavender">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <StaggerItemDiv key={step.title}>
              <div className="card-hover relative bg-white rounded-card p-6 h-full border border-border">
                <span className="text-4xl font-bold text-brand-purple/20 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            </StaggerItemDiv>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
