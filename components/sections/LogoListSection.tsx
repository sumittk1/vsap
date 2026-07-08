import { Section, Container } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";

export default function LogoListSection({
  title,
  logos,
  bg = "white",
}: {
  title?: string;
  logos: string[];
  bg?: "white" | "lavender" | "gray";
}) {
  return (
    <Section bg={bg} className="!py-12 md:!py-16">
      <Container>
        {title && (
          <Reveal className="text-center mb-8">
            <p className="text-sm font-semibold text-muted uppercase tracking-wider">{title}</p>
          </Reveal>
        )}
        <StaggerGroup className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <StaggerItemDiv key={logo}>
              <div className="h-10 px-6 flex items-center justify-center rounded-md bg-white border border-border text-muted font-bold text-sm tracking-wide">
                {logo}
              </div>
            </StaggerItemDiv>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
