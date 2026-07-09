# VASP Digital — Website (Next.js 15 / App Router)

A production-ready marketing website for VASP Digital, built from the provided Figma design and Relume sitemap.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, page transitions, mega menu, mobile nav, count-up stats
- **Lenis** — smooth scrolling
- **Lucide React** — icons.
## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/                     Routes (one folder per page, App Router)
  page.tsx               Home
  about/, team/, contact/, thank-you/
  services/              Services overview + all service sub-pages
  industries/            Industries overview + 6 industry pages
  locations/             Locations overview + 11 city pages (incl. London landing page)
  blog/                  Blog listing + 6 articles
  case-studies/          Case studies listing + 4 case studies
  terms/, privacy/, cookies/
  sitemap.ts, robots.ts  SEO

components/
  layout/                Header (mega menu, mobile nav) & Footer
  sections/              Reusable page sections (Hero, FeatureSection, FAQ, Pricing,
                         Testimonials, Stats, HowItWorks, CTA, ContactForm, etc.)
  templates/             Shared templates for Industry / City / Blog / Case Study pages
  animations/            Reveal, PageTransition, CountUp, SmoothScrollProvider
  ui/                     Button, Container, Section and other primitives
  seo/                    JSON-LD structured data (Organization, LocalBusiness, FAQ, Breadcrumb)

data/
  content.ts             Shared content: testimonials, FAQs, services, industries, locations, blog, case studies
  navigation.ts           Header/footer nav structure
```

## Design system

Brand tokens are defined in `app/globals.css` under `@theme` (Tailwind v4):

- `brand-purple` (#6B3FF3) — hero sections
- `brand-coral` (#FF5A3C) — CTA sections
- `brand-lavender` (#EEE9FF) — light alternating sections
- `brand-navy` — reserved for dark sections
- Custom type scale: `text-hero`, `text-h1`, `text-h2`, `text-h3`, `text-body-lg`

## Notes / next steps

- All imagery is currently placeholder (`ImagePlaceholder` component) — replace with real
  assets via `next/image` once available.
- Forms currently redirect to `/thank-you` on submit (client-side only). Wire up to your
  backend / CMS / email provider of choice.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt` automatically.
- JSON-LD structured data (Organization, LocalBusiness) is injected globally in `app/layout.tsx`.
  Add `FAQJsonLd` / `BreadcrumbJsonLd` (in `components/seo/JsonLd.tsx`) to individual pages as needed.
- Update `metadataBase` / canonical URLs in `app/layout.tsx` and `app/sitemap.ts` once the
  production domain is finalized.
