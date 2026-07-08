import type { Metadata } from "next";
import { Container, Section, SectionHeader, ArrowLink, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItemDiv } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata: Metadata = {
  title: "Locations We Serve | London, ON & the GTA",
  description: "VASP Digital helps businesses in London, Ontario and the Greater Toronto Area get found, get leads, and grow with targeted marketing.",
  alternates: { canonical: "/locations" },
};

export default async function LocationsOverviewPage() {
  const payload = await getPayload({ config: configPromise });
  const locationsRes = await payload.find({
    collection: "locations",
    limit: 100,
  });
  const locationsList = locationsRes.docs;
  return (
    <>
      {/* Hero Section */}
      <Section bg="white" className="pt-28 pb-12">
        <Container>
          <Reveal>
            <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white p-8 md:p-12 lg:p-16 relative">
              {/* Ambient pattern */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
                <div className="lg:col-span-7">
                  <h1 className="text-hero text-white mb-6">
                    Your local digital <br />
                    growth experts
                  </h1>
                  <p className="text-body-lg text-white/90 mb-8 max-w-xl font-sans">
                    VASP Digital helps businesses in your city get found, get leads, and grow with targeted marketing and local expertise, and we know how to make Google work for you.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#markets" variant="white" className="!text-brand-purple !border-white !shadow-none hover:!bg-white/90">
                      Find your city
                    </Button>
                    <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                      Book a call
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none flex justify-center">
                  <ImagePlaceholder ratio="aspect-square" label="Local growth experts" className="max-w-[400px] bg-white/10 border-white/20 text-white/50 [&>svg]:text-white/60 [&>span]:bg-white/10 [&>span]:text-white/85" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Markets Section */}
      <Section id="markets" bg="white" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Serviced"
              title="Markets"
              description="We work across London, Ontario and the Greater Toronto Area."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locationsList.map((loc) => {
              return (
                <StaggerItemDiv key={loc.slug}>
                  <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col hover:shadow-card hover:border-border/100 transition-all duration-300 h-full group">
                    <div className="p-4 bg-[#F2F2F2]/50">
                      <ImagePlaceholder ratio="aspect-[4/3]" label={`${loc.name} growth`} className="rounded-card bg-[#d9d9d9]" />
                    </div>
                    <div className="p-6 bg-brand-lavender/10 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3 text-left">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-brand-purple transition-colors">{loc.name}</h3>
                          <span className="text-[10px] font-bold bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-full font-sans shrink-0">
                            Pop. {loc.population}
                          </span>
                        </div>
                        {loc.stat && (
                          <p className="text-xs font-bold text-brand-coral uppercase tracking-wider font-sans">
                            {loc.stat}
                          </p>
                        )}
                        <p className="text-sm text-muted font-sans leading-relaxed">
                          {loc.blurb}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border/60 text-left">
                        <ArrowLink href={`/locations/${loc.slug}`} className="text-foreground hover:text-brand-purple text-sm">
                          View City
                        </ArrowLink>
                      </div>
                    </div>
                  </div>
                </StaggerItemDiv>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Why Local Section */}
      <Section className="bg-brand-lavender/40 border-b border-border py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-purple block mb-4">
                  Why
                </span>
                <h2 className="text-h2 text-foreground mb-6">
                  Local strategy beats generic tactics
                </h2>
                <p className="text-body-lg text-muted mb-8 max-w-2xl font-sans">
                  Your competitors are fighting for the same customers. A real local strategy — one built on your city's search behavior, your market's pain points, and your competition's weaknesses — wins. Google rewards businesses that own their local presence.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Button href="/contact" variant="white" className="!shadow-none hover:!bg-gray-100">
                    Learn
                  </Button>
                  <ArrowLink href="/contact" className="text-foreground hover:text-brand-purple">
                    More
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none flex justify-center">
              <Reveal delay={0.2} className="w-full">
                <ImagePlaceholder ratio="aspect-square" label="Local Strategy" className="bg-[#d9d9d9]" />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services in City Section */}
      <Section bg="coral" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block">
                Services
              </span>
              <h2 className="text-h2 text-white mb-4">
                What we do in your city
              </h2>
              <p className="text-body-lg text-white/90 leading-relaxed font-sans">
                Every service is built for local markets
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1: SEO */}
            <Reveal>
              <div className="border border-white/20 rounded-card bg-white/5 overflow-hidden flex flex-col hover:shadow-card transition-all h-full group">
                <ImagePlaceholder ratio="aspect-[4/3]" label="SEO Service" className="rounded-none bg-white/10 border-b border-white/10 text-white/50 [&>svg]:text-white/60 [&>span]:bg-white/10 [&>span]:text-white/85" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block font-display">SEO</span>
                    <h3 className="text-base font-bold text-white leading-snug">Organic search built for your market</h3>
                    <p className="text-xs text-white/80 leading-relaxed font-sans">
                      Rank for the searches that matter in your city.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <ArrowLink href="/services/seo" className="text-white text-xs hover:text-white/80" light>Explore</ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Local */}
            <Reveal delay={0.1}>
              <div className="border border-white/20 rounded-card bg-white/5 overflow-hidden flex flex-col hover:shadow-card transition-all h-full group">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Local SEO" className="rounded-none bg-white/10 border-b border-white/10 text-white/50 [&>svg]:text-white/60 [&>span]:bg-white/10 [&>span]:text-white/85" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block font-display">Local</span>
                    <h3 className="text-base font-bold text-white leading-snug">Maps and local visibility dominate</h3>
                    <p className="text-xs text-white/80 leading-relaxed font-sans">
                      Get found when customers search nearby.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <ArrowLink href="/services/local-seo" className="text-white text-xs hover:text-white/80" light>Explore</ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Ads */}
            <Reveal delay={0.2}>
              <div className="border border-white/20 rounded-card bg-white/5 overflow-hidden flex flex-col hover:shadow-card transition-all h-full group">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Paid Ads" className="rounded-none bg-white/10 border-b border-white/10 text-white/50 [&>svg]:text-white/60 [&>span]:bg-white/10 [&>span]:text-white/85" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block font-display">Ads</span>
                    <h3 className="text-base font-bold text-white leading-snug">Paid search that drives qualified leads</h3>
                    <p className="text-xs text-white/80 leading-relaxed font-sans">
                      Fast results while organic builds momentum.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <ArrowLink href="/services/paid-ads" className="text-white text-xs hover:text-white/80" light>Explore</ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Web */}
            <Reveal delay={0.3}>
              <div className="border border-white/20 rounded-card bg-white/5 overflow-hidden flex flex-col hover:shadow-card transition-all h-full group">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Web Design" className="rounded-none bg-white/10 border-b border-white/10 text-white/50 [&>svg]:text-white/60 [&>span]:bg-white/10 [&>span]:text-white/85" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wider block font-display">Web</span>
                    <h3 className="text-base font-bold text-white leading-snug">Sites built to convert local traffic</h3>
                    <p className="text-xs text-white/80 leading-relaxed font-sans">
                      Your website is the engine behind everything.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <ArrowLink href="/services/web-design-development" className="text-white text-xs hover:text-white/80" light>Explore</ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
