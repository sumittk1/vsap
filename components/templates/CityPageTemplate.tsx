import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturesListSection from "@/components/sections/FeaturesListSection";
import { Section, Container, ArrowLink, ImagePlaceholder, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export interface CityConfig {
  name: string;
  slug: string;
  population: string;
  blurb: string;
}

export default function CityPageTemplate({ config }: { config: CityConfig }) {
  const resultsCards = [
    {
      location: 'London',
      title: 'Contractors getting 150% more calls',
      desc: 'See how local contractors dominate search',
      url: '/locations/london',
    },
    {
      location: 'Toronto',
      title: 'Legal firms ranking for high-intent searches',
      desc: 'See how law practices win local clients',
      url: '/locations/toronto',
    },
    {
      location: 'GTA',
      title: 'Real estate agents closing more deals',
      desc: 'See how agents capture local market share',
      url: '/locations/mississauga',
    },
    {
      location: 'Beyond',
      title: 'Clinics and service businesses scaling fast',
      desc: 'See how local businesses break through noise',
      url: '/locations/hamilton',
    },
  ];

  return (
    <>
      <Hero
        title={`Grow Your ${config.name} Business with Digital Marketing That Works`}
        description={`SEO, Local SEO, Paid Ads & High-Converting Websites for Local Businesses in ${config.name}.`}
        actions={[
          { label: `Book a Call in ${config.name}`, href: "/contact", variant: "secondary" },
          { label: "Get a Free Audit", href: "/contact", variant: "primary" },
        ]}
        imageLabel={config.name}
      />

      <FeatureSection
        eyebrow="Local opportunity"
        title={`Why digital marketing matters in ${config.name}`}
        description={`Local competition, search habits, and unique opportunities all shape what works in ${config.name}. We build strategies around how your customers actually search.`}
        imageLabel={`Digital marketing in ${config.name}`}
      />

      <FeaturesListSection
        eyebrow="Services"
        title={`Services available in ${config.name}`}
        description="Each service is tailored with a city-specific angle for your market."
        bg="lavender"
        items={[
          { title: "Local SEO", description: `Rank higher on Google Maps in ${config.name}.`, icon: "MapPin", href: "/services/local-seo" },
          { title: "GBP Optimization", description: "Maximize calls and direction requests.", icon: "Building2", href: "/services/local-seo/gbp-optimisation" },
          { title: "Paid Ads", description: "Google & Meta campaigns targeted to your area.", icon: "Target", href: "/services/paid-ads" },
          { title: "Web Design & Development", description: "Websites built to convert your local audience.", icon: "Code2", href: "/services/web-design-development" },
          { title: "WordPress Development", description: "Easy-to-manage sites for local businesses.", icon: "Globe", href: "/services/web-design-development/wordpress" },
        ]}
        columns={3}
      />

      <FeatureSection
        eyebrow="Local proof"
        title={`Understanding ${config.name}'s business landscape`}
        description={`We understand local search trends and how VASP Digital tailors strategies for the ${config.name} market — built on real local data, not guesswork.`}
        bg="coral"
        imageReversed
        imageLabel="Local proof & strategy"
      />

      <Section bg="lavender">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>About {config.name}</Eyebrow>
            <h2 className="text-h2 mb-4">A snapshot of {config.name}</h2>
            <p className="text-body-lg text-muted mb-2">
              Population: <span className="font-semibold text-foreground">{config.population}</span>
            </p>
            <p className="text-body-lg text-muted">{config.blurb}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Results Section ("Where we've won") */}
      <Section bg="lavender" className="py-20 border-y border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-purple block">
                Results
              </span>
              <h2 className="text-h2 text-foreground mb-4">
                Where we've won
              </h2>
              <p className="text-body-lg text-muted leading-relaxed font-sans">
                Real businesses, real growth across Ontario and the GTA
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {resultsCards.map((card, idx) => (
              <Reveal delay={idx * 0.1} key={card.location}>
                <div className="bg-white border border-border rounded-card p-6 flex flex-col justify-between hover:shadow-card transition-all h-full group">
                  <div className="flex flex-col flex-grow mb-6">
                    <span className="text-xs font-semibold text-brand-purple uppercase tracking-wider block mb-2 font-display">
                      {card.location}
                    </span>
                    <h3 className="text-base font-bold text-foreground leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-sans mb-4">
                      {card.desc}
                    </p>
                    <ArrowLink
                      href={card.url}
                      className="text-brand-purple text-xs hover:text-brand-purple-dark mt-auto"
                    >
                      Explore
                    </ArrowLink>
                  </div>
                  <ImagePlaceholder ratio="aspect-square" label={card.location} className="bg-[#e6e6e6]" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ready to Grow locally CTA Section */}
      <Section bg="coral" className="py-20 text-center">
        <Container className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
          <Reveal>
            <h2 className="text-h2 text-white mb-4">
              Ready to grow locally
            </h2>
            <p className="text-body-lg text-white/90 mb-8 font-sans max-w-xl">
              We've built real results across the GTA and beyond. Pick your city and see what's possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/locations" variant="white" className="!text-brand-coral !border-white !shadow-none hover:!bg-white/90">
                Explore
              </Button>
              <Button href="tel:+15195550147" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                Call us
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
