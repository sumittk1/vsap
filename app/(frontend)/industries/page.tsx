import type { Metadata } from "next";
import { Package, Search, Map, DollarSign, BadgeCheck, Play } from "lucide-react";
import { Container, Section, SectionHeader, ArrowLink, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "VASP Digital is the local agency that understands your industry — tailored digital marketing strategies for clinics, contractors, legal, real estate, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <Section bg="white" className="pt-28 pb-12">
        <Container>
          <Reveal>
            <div className="bg-brand-purple border-2 border-white rounded-card overflow-hidden shadow-card text-white p-8 md:p-12 lg:p-16 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <h1 className="text-hero text-white mb-6">
                    Digital growth <br />
                    built for your <br />
                    industry
                  </h1>
                  <p className="text-body-lg text-white/90 mb-8 max-w-xl">
                    Every business attracts customers differently. We build SEO, paid ads, and web strategies that match how your industry actually works. See what's possible for your sector.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="#markets" variant="white" className="!text-brand-purple !border-white !shadow-none hover:!bg-white/90">
                      Explore
                    </Button>
                    <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                      Call us
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
                  <ImagePlaceholder ratio="aspect-square" label="Industry Growth" />
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
              eyebrow="Markets"
              title="Who we work with"
              description="From healthcare to trades, we know what drives growth in your sector."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Healthcare (Taller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[380px] relative overflow-hidden">
                <Reveal className="flex flex-col justify-between h-full z-10">
                  <div>
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block mb-2">
                      Healthcare
                    </span>
                    <h3 className="text-h3 text-white mb-4 leading-tight">
                      Dental and medical practices
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      Patient searches happen locally and fast. We fill your chairs with qualified appointments.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ArrowLink href="/industries/clinics" light className="text-white hover:text-white/80 text-sm">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>

              {/* Card 4: Skilled trades (Smaller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[300px]">
                <Reveal className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center mb-6">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-h3 text-white mb-3 leading-snug">
                      Skilled trades
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Plumbers, electricians, and contractors need emergency visibility. We get you found first.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <ArrowLink href="/industries/contractors" light className="text-white hover:text-white/80 text-xs">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {/* Card 2: Professional services (Smaller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[300px]">
                <Reveal className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center mb-6">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-h3 text-white mb-3 leading-snug">
                      Professional services
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Lawyers and consultants win through authority. We build the credibility that attracts clients.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <ArrowLink href="/industries/legal-services" light className="text-white hover:text-white/80 text-xs">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>

              {/* Card 5: Real estate (Taller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[380px] relative overflow-hidden">
                <Reveal className="flex flex-col justify-between h-full z-10">
                  <div>
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block mb-2">
                      Property
                    </span>
                    <h3 className="text-h3 text-white mb-4 leading-tight">
                      Real estate agents and teams
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      Buyers search maps and listings. We put your properties in front of them.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ArrowLink href="/industries/real-estate" light className="text-white hover:text-white/80 text-sm">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {/* Card 3: Food and beverage (Taller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[380px] relative overflow-hidden">
                <Reveal className="flex flex-col justify-between h-full z-10">
                  <div>
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block mb-2">
                      Food and beverage
                    </span>
                    <h3 className="text-h3 text-white mb-4 leading-tight">
                      Restaurants, bars, and venues
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      Discovery drives reservations. We fill your tables through local search and targeted ads.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ArrowLink href="/industries/hospitality" light className="text-white hover:text-white/80 text-sm">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>

              {/* Card 6: Home and personal services (Smaller) */}
              <div className="bg-[#737373] text-white rounded-card p-8 flex flex-col justify-between shadow-card min-h-[300px]">
                <Reveal className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center mb-6">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-h3 text-white mb-3 leading-snug">
                      Home and personal services
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Cleaners, salons, and service providers need trust. We connect you with ready buyers.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <ArrowLink href="/industries/home-services" light className="text-white hover:text-white/80 text-xs">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges Section */}
      <Section className="bg-brand-lavender/40 border-b border-border py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <Reveal>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-purple block">
                Challenges
              </span>
              <h2 className="text-h2 text-foreground mb-4">
                What every industry faces
              </h2>
              <p className="text-body-lg text-muted mb-6">
                Your customers search for you online. The question is whether they find you or your competitors. We solve the problems that hold local businesses back from growth.
              </p>
              <div className="flex justify-center items-center gap-6">
                <Button href="/contact" variant="white" className="!shadow-none hover:!bg-gray-100">
                  Learn
                </Button>
                <ArrowLink href="/contact" className="text-brand-purple hover:text-brand-purple-dark">
                  More
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="border-b border-border pb-6">
                  <h3 className="text-h3 text-foreground mb-2">Losing visibility in search</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Your potential customers are searching for what you offer, but they're not seeing your business. Without a strong local search presence, you're invisible to the people ready to buy.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-b border-border pb-6">
                  <h3 className="text-h3 text-foreground mb-2">Attracting unqualified leads</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Not all traffic converts. Many businesses get clicks but not calls or bookings. The wrong audience costs time and money without moving the needle on revenue.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pb-6">
                  <h3 className="text-h3 text-foreground mb-2">Converting visitors into customers</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    A website that doesn't convert is just a brochure. Most small business websites fail to turn visitors into leads because they're not built around how your customers actually make decisions.
                  </p>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <Reveal delay={0.2}>
                <ImagePlaceholder ratio="aspect-square" label="Industry Challenges" />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Strategy Section */}
      <Section className="bg-brand-coral text-white border-b border-white/10 py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Reveal>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-white/70 block">
                Strategy
              </span>
              <h2 className="text-h2 text-white mb-4">
                How we build growth for your market
              </h2>
              <p className="text-body-lg text-white/90 leading-relaxed">
                Every industry has different buyers, different searches, and different competition. We don't use the same playbook for everyone. Your strategy is built around how your customers actually find and choose you.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-h3 text-white">SEO</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="text-h3 text-white">Local SEO</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-h3 text-white">Paid Ads</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-card bg-white/10 text-white flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <h3 className="text-h3 text-white">Brand Visibility</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section className="bg-brand-lavender/40 border-b border-border py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Results"
              title="Industries we've grown"
              description="Real growth. Real businesses. Real leads."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Card 1 */}
            <Reveal>
              <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col hover:shadow-sm transition-all h-full">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Dental Case Study" className="rounded-none" />
                <div className="p-6 bg-brand-lavender/30 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-h3 text-foreground">Dental practice</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Doubled new patient intake in six months through local SEO.
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">Local SEO</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">Patient acquisition</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">GTA</span>
                    </div>
                    <ArrowLink href="/case-studies/london-dental-clinic-seo" className="text-brand-purple text-xs">
                      View case
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col hover:shadow-sm transition-all h-full">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Plumbing Case Study" className="rounded-none" />
                <div className="p-6 bg-brand-lavender/30 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-h3 text-foreground">Plumbing contractor</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Increased emergency calls by 40% with Google Ads targeting.
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">Google Ads</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">Lead generation</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">London</span>
                    </div>
                    <ArrowLink href="/case-studies/toronto-contractor-paid-ads" className="text-brand-purple text-xs">
                      View case
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-card border border-border overflow-hidden flex flex-col hover:shadow-sm transition-all h-full">
                <ImagePlaceholder ratio="aspect-[4/3]" label="Real Estate Case Study" className="rounded-none" />
                <div className="p-6 bg-brand-lavender/30 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-h3 text-foreground">Real estate team</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Ranked top three for buyer searches in their market.
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">SEO</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">Buyer leads</span>
                      <span className="bg-brand-lavender-mid/60 text-foreground text-xs px-2.5 py-1 rounded-pill font-medium">GTA</span>
                    </div>
                    <ArrowLink href="/case-studies/mississauga-law-firm-website" className="text-brand-purple text-xs">
                      View case
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="text-center">
            <Button href="/case-studies" variant="white" className="!shadow-none hover:!bg-gray-100">
              All case studies
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Ready to Grow Section */}
      <Section className="bg-brand-coral text-white py-16 md:py-24 text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <Reveal>
              <h2 className="text-h2 text-white mb-3">
                Start your growth today
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Find your industry and book a free strategy call
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" className="!bg-brand-lavender-mid !text-foreground hover:!bg-brand-lavender transition-colors">
                  Book
                </Button>
                <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/10 hover:!text-white">
                  Call
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
