import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Section bg="white">
      <Container className="max-w-2xl">
        <Reveal>
          <h1 className="text-h1 mb-6">Terms of Service</h1>
          <div className="space-y-4 text-muted text-body-lg">
            <p>
              This is placeholder content for the Terms of Service page. Replace with finalized
              legal copy covering data collection, usage, cookies, and user rights as
              applicable to VASP Digital&apos;s services.
            </p>
            <p>
              Last updated: June 2026. For questions about this policy, contact us at{" "}
              <a href="mailto:hello@vaspdigital.com" className="text-brand-purple underline">
                hello@vaspdigital.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
