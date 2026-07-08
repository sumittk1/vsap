import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "How Bright Smile Dental Doubled Local Leads in 90 Days",
  description: "How a London dental clinic doubled new patient inquiries through local SEO and GBP optimization.",
  alternates: { canonical: "/case-studies/london-dental-clinic-seo" },
};

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      config={{
        client: "Bright Smile Dental",
        industry: "Clinics",
        location: "London, ON",
        services: ["Local SEO", "GBP Optimisation"],
        headline: "How Bright Smile Dental Doubled Local Leads in 90 Days with VASP Digital",
        subheadline: "A London dental clinic went from page three to the Map Pack — and new patient inquiries followed.",
        overview: "Bright Smile Dental is a family dental practice in London, Ontario, offering general and cosmetic dentistry to the local community.",
        challenge: "Despite strong reviews from existing patients, Bright Smile Dental was nearly invisible in local search. Their Google Business Profile was incomplete, citations were inconsistent across directories, and they were ranking on page three for key local searches like 'dentist near me'.",
        strategy: "We implemented a full Local SEO overhaul: complete Google Business Profile optimization, citation cleanup and building across 40+ directories, and the creation of locally-optimized service pages targeting key procedures and neighborhoods.",
        execution: "Over the first 90 days, we corrected NAP inconsistencies across the web, optimized GBP categories and services, added a steady stream of photos and posts, and launched a review generation process for happy patients.",
        stats: [
          { value: 180, suffix: "%", label: "Increase in leads" },
          { value: 1, prefix: "#", label: "Local Map Ranking" },
          { value: 3, suffix: "x", label: "Website conversions" },
          { value: 90, suffix: " days", label: "To meaningful results" },
        ],
        testimonialQuote: "We went from page three to page one in six months. The leads have been consistent and qualified.",
        testimonialName: "Sarah Mitchell",
        testimonialRole: "Owner, Bright Smile Dental",
      }}
    />
  );
}
