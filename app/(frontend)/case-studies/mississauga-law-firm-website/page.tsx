import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "How Hart & Associates Tripled Website Conversions",
  description: "A complete website redesign and SEO overhaul tripled conversion rates for this Mississauga law firm.",
  alternates: { canonical: "/case-studies/mississauga-law-firm-website" },
};

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      config={{
        client: "Hart & Associates",
        industry: "Legal Services",
        location: "Mississauga",
        services: ["Web Design", "SEO Services"],
        headline: "How Hart & Associates Tripled Website Conversions with a Redesign",
        subheadline: "A modern, fast website paired with on-page SEO transformed this Mississauga law firm's online presence.",
        overview: "Hart & Associates is a family and personal injury law firm based in Mississauga, serving clients across the western GTA.",
        challenge: "Their existing website was outdated, slow to load on mobile, and difficult for visitors to find the right practice area or contact information — resulting in a high bounce rate and very few consultation requests.",
        strategy: "We designed and built a new WordPress website with clear practice area pages, prominent calls to action, and a streamlined consultation request form — paired with on-page SEO targeting their core practice areas and service locations.",
        execution: "The new site was built mobile-first with optimized images and fast load times. We restructured navigation around practice areas, added attorney bio pages, and implemented schema markup for local business and legal services.",
        stats: [
          { value: 3, suffix: "x", label: "Website conversions" },
          { value: 65, suffix: "%", label: "Faster page load" },
          { value: 200, suffix: "%", label: "Increase in qualified leads" },
          { value: 40, suffix: "%", label: "Lower bounce rate" },
        ],
        testimonialQuote: "Rankings improved across all our target keywords. The ROI on SEO is way better than what we were spending on Google Ads.",
        testimonialName: "Emma Rodriguez",
        testimonialRole: "Director, Hart & Associates",
      }}
    />
  );
}
