export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VASP Digital",
    url: "https://www.vaspdigital.com",
    logo: "https://www.vaspdigital.com/logo.png",
    description:
      "VASP Digital helps local and small businesses in London, Ontario and the Greater Toronto Area get found, generate more leads, and grow with SEO, paid ads, and high-converting websites.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: ["London, ON", "Toronto", "Mississauga", "Brampton", "Oakville", "Hamilton", "Burlington", "Milton", "Kitchener", "Waterloo", "Cambridge"],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "VASP Digital",
    image: "https://www.vaspdigital.com/logo.png",
    "@id": "https://www.vaspdigital.com",
    url: "https://www.vaspdigital.com",
    email: "hello@vaspdigital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "Place",
      name: "London, Ontario and Greater Toronto Area",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
