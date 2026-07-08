import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "How Reliable Roofing Co. Doubled Leads with Google Ads",
  description: "A Toronto roofing contractor doubled qualified leads with targeted Google Ads campaigns.",
  alternates: { canonical: "/case-studies/toronto-contractor-paid-ads" },
};

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      config={{
        client: "Reliable Roofing Co.",
        industry: "Contractors",
        location: "Toronto",
        services: ["Google Ads", "Lead Generation Ads"],
        headline: "How Reliable Roofing Co. Doubled Qualified Leads with Google Ads",
        subheadline: "A Toronto roofing contractor turned ad spend into a predictable pipeline of booked jobs.",
        overview: "Reliable Roofing Co. is a residential roofing contractor serving the Greater Toronto Area, specializing in repairs, replacements, and emergency services.",
        challenge: "Reliable Roofing relied heavily on referrals and had an inconsistent lead flow. Their previous ad campaigns lacked proper tracking, making it impossible to know which keywords or ads were actually generating jobs.",
        strategy: "We restructured their Google Ads account around high-intent search campaigns segmented by service type and location, paired with dedicated landing pages and full call and form tracking.",
        execution: "We launched campaigns for emergency repairs, full roof replacements, and seasonal maintenance, each with tailored ad copy and landing pages. Call tracking numbers and conversion tracking were implemented from day one, with weekly optimization based on lead quality data.",
        stats: [
          { value: 120, suffix: "%", label: "Increase in leads" },
          { value: 3, suffix: "x", label: "Return on ad spend" },
          { value: 45, suffix: "%", label: "Lower cost per lead" },
          { value: 14, suffix: " days", label: "To first qualified lead" },
        ],
        testimonialQuote: "We're no longer dependent on referrals alone. The phone rings with qualified jobs every week now.",
        testimonialName: "James Chen",
        testimonialRole: "Founder, Reliable Roofing Co.",
      }}
    />
  );
}
