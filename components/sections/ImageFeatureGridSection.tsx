import { Section, Container, ImagePlaceholder, ArrowLink } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv, slideInLeft, slideInRight } from "@/components/animations/Reveal";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MiniFeature {
  title: string;
  description: string;
  icon?: keyof typeof Icons;
  href?: string;
}

export default function ImageFeatureGridSection({
  items,
  imageReversed = false,
  bg = "coral",
  imageLabel,
}: {
  items: MiniFeature[];
  imageReversed?: boolean;
  bg?: "coral" | "purple" | "white" | "lavender" | "gray";
  imageLabel?: string;
}) {
  const isDark = bg === "coral" || bg === "purple";
  const imageOrder = imageReversed ? "lg:order-2" : "lg:order-1";
  const gridOrder = imageReversed ? "lg:order-1" : "lg:order-2";

  return (
    <Section bg={bg}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant={imageReversed ? slideInRight : slideInLeft} className={imageOrder}>
            <ImagePlaceholder ratio="aspect-[4/3]" label={imageLabel} />
          </Reveal>

          <StaggerGroup className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6", gridOrder)}>
            {items.map((item) => {
              const Icon = (item.icon ? Icons[item.icon] : Icons.Sparkles) as LucideIcon;
              return (
                <StaggerItemDiv key={item.title}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 border border-current/20">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className={cn("font-semibold text-base md:text-lg mb-1.5", isDark && "text-white")}>
                    {item.title}
                  </h3>
                  <p className={cn("text-sm mb-3", isDark ? "text-white/75" : "text-muted")}>
                    {item.description}
                  </p>
                  <ArrowLink href={item.href ?? "/contact"} light={isDark}>
                    Arrow
                  </ArrowLink>
                </StaggerItemDiv>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </Section>
  );
}
