import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Proven Results for Local Businesses",
  description: "See how VASP Digital drives real growth through SEO, paid ads, and web design for small businesses in London, Ontario & the GTA.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
