import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import CityPageTemplate from "@/components/templates/CityPageTemplate";
import LondonClient from "@/components/templates/LondonClient";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const locations = await payload.find({
    collection: "locations",
    limit: 100,
  });
  return locations.docs.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const locations = await payload.find({
    collection: "locations",
    where: { slug: { equals: slug } },
  });
  const loc = locations.docs[0];
  if (!loc) return {};
  return {
    title: `Digital Marketing in ${loc.name}`,
    description: `SEO, Local SEO, Paid Ads & Web Design for local businesses in ${loc.name}. Get found, get leads, and grow with VASP Digital.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  
  const locations = await payload.find({
    collection: "locations",
    where: { slug: { equals: slug } },
  });
  const loc = locations.docs[0];
  if (!loc) notFound();

  if (loc.isCustom || loc.slug === "london") {
    return <LondonClient />;
  }

  const formattedConfig = {
    name: loc.name,
    slug: loc.slug,
    population: loc.population,
    blurb: loc.blurb,
  };

  return <CityPageTemplate config={formattedConfig} />;
}
