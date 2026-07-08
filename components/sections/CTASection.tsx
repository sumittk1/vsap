import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export default function CTASection({
  title,
  description,
  primaryCta = { label: "Book a call", href: "/contact" },
  secondaryCta,
}: {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-brand-coral text-white py-16 md:py-24 border-t border-brand-coral-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-6 text-left">
            <Reveal>
              <h2 className="text-h2 text-white leading-tight mb-0">{title}</h2>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal>
              {description && <p className="text-body-lg text-white/90 mb-6 max-w-xl">{description}</p>}
              <div className="flex flex-wrap gap-4">
                <Button href={primaryCta.href} variant="white">
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="white">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
