import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturesListSection from "@/components/sections/FeaturesListSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { testimonials } from "@/data/content";

export interface IndustryConfig {
  name: string;
  pain: string;
  searches: string[];
  challenges: string[];
  bestFitServices: { title: string; description: string; icon: string; href: string }[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
  faqs: { question: string; answer: string }[];
}

export default function IndustryPageTemplate({ config }: { config: IndustryConfig }) {
  return (
    <>
      <Hero
        title={`Get More Leads for Your ${config.name} Business`}
        description={`How VASP Digital delivers more ${config.pain.toLowerCase()} through SEO, local SEO, paid ads, and high-converting websites.`}
        actions={[{ label: `Get a ${config.name} Growth Plan`, href: "/contact", variant: "secondary" }]}
        imageLabel={config.name}
      />

      <FeatureSection
        eyebrow="Challenges"
        title={`Challenges for ${config.name.toLowerCase()} businesses`}
        description={`${config.name} businesses face unique digital marketing challenges — from standing out in a crowded market to ranking in Google Maps and outperforming local competitors.`}
        bullets={config.challenges}
        imageLabel="Industry challenges"
      />

      <FeaturesListSection
        eyebrow="Search behavior"
        title="What your customers are searching for"
        description="Understanding search intent is the foundation of an effective strategy."
        items={config.searches.map((s) => ({ title: s, description: "A high-intent search we help you rank for.", icon: "Search" as const }))}
        bg="lavender"
        columns={3}
      />

      <FeaturesListSection
        eyebrow="Services"
        title={`Best-fit services for ${config.name.toLowerCase()}`}
        description="The VASP Digital services that drive the most results for this vertical."
        items={config.bestFitServices.map((s) => ({ title: s.title, description: s.description, icon: s.icon as never, href: s.href }))}
      />

      <FeatureSection
        eyebrow="How we help"
        title="How we help"
        description="Discovery, strategy, implementation, and reporting — emphasizing ROI, transparency, and local expertise tailored to your industry."
        bg="coral"
        imageReversed
        imageLabel="How we help"
      />

      <TestimonialSection
        title={`${config.name} success stories`}
        description="Real results for real businesses in your industry."
        testimonials={[
          { quote: config.testimonialQuote, name: config.testimonialName, role: config.testimonialRole },
          ...testimonials.general.slice(0, 2),
        ]}
        bg="purple"
      />

      <FAQSection title="FAQ" description={`Common questions from ${config.name.toLowerCase()} owners.`} items={config.faqs} />

      <ContactFormSection
        title={`Get your ${config.name} growth plan`}
        description="Quick form — tell us about your business and we'll put together a tailored plan."
        bg="lavender"
      />

      <CTASection
        title={`Ready to Grow Your ${config.name} Business?`}
        description="Get a custom growth plan tailored to your industry and goals."
        primaryCta={{ label: "Get a Custom Growth Plan", href: "/contact" }}
      />
    </>
  );
}
