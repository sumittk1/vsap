import Link from "next/link";
import { Section, Container, Eyebrow, ImagePlaceholder, ArrowLink } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import { testimonials } from "@/data/content";
import { ReactNode } from "react";

export interface BlogPostConfig {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  body: ReactNode;
  related?: {
    slug: string;
    title: string;
    category: string;
  }[];
}

export default function BlogPostTemplate({ config }: { config: BlogPostConfig }) {
  const related = config.related || [];
  const formattedDate = new Date(config.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Section bg="lavender" className="!pb-0">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>{config.category}</Eyebrow>
            <h1 className="text-h1 mb-4">{config.title}</h1>
            <p className="text-sm text-muted mb-8">
              By {config.author} · {formattedDate}
            </p>
          </Reveal>
        </Container>
        <Container className="max-w-4xl pb-12">
          <Reveal delay={0.1}>
            <ImagePlaceholder ratio="aspect-[16/8]" label={config.title} />
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container className="max-w-3xl prose-content">
          <Reveal>
            <div className="space-y-6 text-body-lg text-foreground/85">{config.body}</div>
          </Reveal>
        </Container>
      </Section>

      <TestimonialSection
        title="What clients say"
        description="A quick word from a client who's seen results."
        testimonials={testimonials.general.slice(0, 1).concat(testimonials.general.slice(3, 5))}
        bg="coral"
      />

      <Section bg="lavender">
        <Container>
          <Reveal className="mb-8">
            <h2 className="text-h2">Further reading</h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((post) => (
              <StaggerItemDiv key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card-hover block bg-white rounded-card border border-border overflow-hidden h-full">
                  <ImagePlaceholder ratio="aspect-[16/10]" label={post.category} className="rounded-none" />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-brand-purple uppercase tracking-wider mb-2">{post.category}</p>
                    <h3 className="font-semibold mb-2 text-sm">{post.title}</h3>
                    <ArrowLink href={`/blog/${post.slug}`}>Read more</ArrowLink>
                  </div>
                </Link>
              </StaggerItemDiv>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CTASection
        title="Ready to put this into action?"
        description="Book a strategy call or get a free audit and we'll show you what's possible."
        primaryCta={{ label: "Book a strategy call", href: "/contact" }}
        secondaryCta={{ label: "Get a free audit", href: "/services/seo" }}
      />
    </>
  );
}
