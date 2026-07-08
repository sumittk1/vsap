import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import PageTransition from "@/components/animations/PageTransition";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata: Metadata = {
  title: {
    default: "VASP Digital | Digital Marketing for Local Businesses in London & GTA",
    template: "%s | VASP Digital",
  },
  description:
    "VASP Digital helps local and small businesses in London, Ontario and the Greater Toronto Area get found, generate more leads, and grow with SEO, paid ads, and high-converting websites.",
  metadataBase: new URL("https://www.vaspdigital.com"),
  openGraph: {
    title: "VASP Digital | Digital Marketing for Local Businesses",
    description:
      "SEO, Local SEO, Paid Ads, Web Design and AI Brand Visibility for local businesses in London & the GTA.",
    url: "https://www.vaspdigital.com",
    siteName: "VASP Digital",
    locale: "en_CA",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch Locations
  const locationsRes = await payload.find({
    collection: "locations",
    limit: 100,
  });
  
  // Fetch Industries
  const industriesRes = await payload.find({
    collection: "industries",
    limit: 100,
  });
  
  const locations = locationsRes.docs.map((loc) => ({
    label: loc.name.split(',')[0],
    desc: `Digital marketing for ${loc.name.split(',')[0]} businesses`,
    href: `/locations/${loc.slug}`,
  }));

  const industries = industriesRes.docs.map((ind) => ({
    label: ind.name,
    desc: `Get more qualified leads`,
    href: `/industries/${ind.slug}`,
  }));

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <SmoothScrollProvider>
          <Header locations={locations} industries={industries} />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
