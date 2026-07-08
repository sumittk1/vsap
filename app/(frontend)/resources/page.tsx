import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Insights & Resources | VASP Digital Hub",
  description:
    "Explore our local SEO guides, client case studies, company mission, and meet the digital marketing experts at VASP Digital.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
