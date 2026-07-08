import { ReactNode } from "react";
import { Section, Container, Eyebrow, ImagePlaceholder, ArrowLink } from "@/components/ui/Primitives";
import { Reveal, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageReversed?: boolean;
  bg?: "white" | "lavender" | "gray" | "coral" | "purple";
  imageLabel?: string;
  sectionNumber?: string;
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
}

export default function FeatureSection({
  eyebrow,
  title,
  description,
  bullets,
  ctaLabel = "Learn more",
  ctaHref = "/contact",
  imageReversed = false,
  bg = "white",
  imageLabel,
  sectionNumber,
  secondaryCta,
  imageSrc,
}: FeatureSectionProps) {
  const isDark = bg === "coral" || bg === "purple";
  // Mobile: text always first, image below.
  // Desktop: image on the left by default, or right when imageReversed.
  const imageOrder = imageReversed ? "lg:order-2" : "lg:order-1";
  const textOrder = imageReversed ? "lg:order-1" : "lg:order-2";

  return (
    <Section bg={bg}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal
            variant={imageReversed ? slideInLeft : slideInRight}
            className={textOrder}
          >
            {sectionNumber && (
              <p className={cn("text-sm font-semibold uppercase tracking-wider mb-2", isDark ? "text-white/60" : "text-muted")}>
                {sectionNumber}
              </p>
            )}
            {eyebrow && <Eyebrow light={isDark}>{eyebrow}</Eyebrow>}
            <h2 className={cn("text-h2 mb-4", isDark && "text-white")}>{title}</h2>
            <div className={cn("text-body-lg mb-6", isDark ? "text-white/80" : "text-muted")}>
              {description}
            </div>

            {bullets && bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                        isDark ? "bg-white" : "bg-brand-purple"
                      )}
                    />
                    <span className={cn("text-sm md:text-base", isDark ? "text-white/85" : "text-foreground/80")}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-5">
              <Button href={ctaHref} variant={isDark ? "white" : "primary"}>
                {ctaLabel}
              </Button>
              {secondaryCta ? (
                <ArrowLink href={secondaryCta.href} light={isDark}>
                  {secondaryCta.label}
                </ArrowLink>
              ) : (
                <ArrowLink href={ctaHref} light={isDark}>
                  Learn more
                </ArrowLink>
              )}
            </div>
          </Reveal>

          <Reveal
            variant={imageReversed ? slideInRight : slideInLeft}
            delay={0.1}
            className={imageOrder}
          >
            <ImagePlaceholder ratio="aspect-[4/3]" label={imageLabel} src={imageSrc} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
