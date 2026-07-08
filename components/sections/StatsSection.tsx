import { Container } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export default function StatsSection({
  title,
  description,
  stats,
  bg = "purple",
}: {
  title?: string;
  description?: string;
  stats: StatItem[];
  bg?: "purple" | "white" | "lavender";
}) {
  const isDark = bg === "purple";
  const bgClass = bg === "purple" ? "bg-brand-purple text-white" : bg === "lavender" ? "bg-brand-lavender" : "bg-white";

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <Container>
        {(title || description) && (
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            {title && <h2 className="text-h2 mb-3">{title}</h2>}
            {description && <p className={isDark ? "text-white/80" : "text-muted"}>{description}</p>}
          </Reveal>
        )}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <StaggerItemDiv key={s.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className={`text-sm ${isDark ? "text-white/75" : "text-muted"}`}>{s.label}</p>
            </StaggerItemDiv>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
