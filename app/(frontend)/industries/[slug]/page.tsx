import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const industries = await payload.find({
    collection: "industries",
    limit: 100,
  });
  return industries.docs.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const industries = await payload.find({
    collection: "industries",
    where: { slug: { equals: slug } },
  });
  const ind = industries.docs[0];
  if (!ind) return {};
  return {
    title: `Digital Marketing for ${ind.name}s`,
    description: `Get more qualified leads for your ${ind.name.toLowerCase()} business with SEO, local SEO, paid ads, and high-converting websites from VASP Digital.`,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  
  const industries = await payload.find({
    collection: "industries",
    where: { slug: { equals: slug } },
  });
  const ind = industries.docs[0];
  if (!ind) notFound();

  const formattedConfig = {
    name: ind.name,
    pain: ind.pain,
    searches: ind.searches.map(s => s.query),
    challenges: ind.challenges.map(c => c.challenge),
    bestFitServices: ind.bestFitServices?.map(s => ({
      title: s.title,
      description: s.description,
      icon: s.icon,
      href: s.href,
    })) || [],
    testimonialQuote: ind.testimonialQuote,
    testimonialName: ind.testimonialName,
    testimonialRole: ind.testimonialRole,
    faqs: ind.faqs.map(f => ({
      question: f.question,
      answer: f.answer,
    })),
  };

  return <IndustryPageTemplate config={formattedConfig} />;
}
