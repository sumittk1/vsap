import Link from "next/link";
import { Section, Container, SectionHeader, ArrowLink } from "@/components/ui/Primitives";
import { StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureCardItem {
  title: string;
  description: string;
  icon?: keyof typeof Icons;
  href?: string;
}

export default function FeaturesListSection({
  eyebrow,
  title,
  description,
  items,
  bg = "white",
  columns = 3,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureCardItem[];
  bg?: "white" | "lavender" | "gray";
  columns?: 2 | 3 | 4;
}) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <Section bg={bg}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <StaggerGroup className={`grid grid-cols-1 ${colClass} gap-6`}>
          {items.map((item) => {
            const Icon = (item.icon ? Icons[item.icon] : Icons.Sparkles) as LucideIcon;
            const Card = (
              <div className="card-hover h-full bg-white rounded-card border border-border p-6 group">
                <div className="w-11 h-11 rounded-lg bg-brand-lavender flex items-center justify-center text-brand-purple mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted mb-3">{item.description}</p>
                {item.href && (
                  <ArrowLink href={item.href}>Learn more</ArrowLink>
                )}
              </div>
            );

            return (
              <StaggerItemDiv key={item.title}>
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </StaggerItemDiv>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
