import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "How Hamilton HVAC Pros Reached #1 in the Map Pack",
  description: "How consistent citations and local SEO took this HVAC company to #1 in the map pack.",
  alternates: { canonical: "/case-studies/hamilton-home-services-local-seo" },
};

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      config={{
        client: "Hamilton HVAC Pros",
        industry: "Home Services",
        location: "Hamilton",
        services: ["Local SEO", "Local Citations"],
        headline: "How Hamilton HVAC Pros Reached #1 in the Local Map Pack",
        subheadline: "Consistent citations and local SEO turned this HVAC company into the top result for emergency searches.",
        overview: "Hamilton HVAC Pros provides heating and cooling installation, repair, and maintenance services across Hamilton and surrounding areas.",
        challenge: "Years of using different agencies had left their business listings inconsistent across the web — different phone numbers, outdated addresses, and duplicate listings were actively confusing both customers and Google.",
        strategy: "We conducted a full citation audit and cleanup, consolidating duplicate listings and correcting NAP information across 50+ directories, paired with ongoing Google Business Profile optimization.",
        execution: "Over four months, we systematically cleaned up citations, optimized their GBP with seasonal posts and service updates, and built a review generation process that increased their review count significantly.",
        stats: [
          { value: 1, prefix: "#", label: "Local Map Ranking" },
          { value: 85, suffix: "%", label: "Increase in calls" },
          { value: 50, suffix: "+", label: "Citations corrected" },
          { value: 4, suffix: " mo", label: "To #1 ranking" },
        ],
        testimonialQuote: "Our organic traffic tripled in a year. We're no longer dependent on paid ads to fill our pipeline.",
        testimonialName: "David Park",
        testimonialRole: "Owner, Hamilton HVAC Pros",
      }}
    />
  );
}
