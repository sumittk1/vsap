import type { MetadataRoute } from "next";
import { locationsList, blogPosts, caseStudies, industries } from "@/data/content";

const base = "https://www.vaspdigital.com";

const staticPaths = [
  "",
  "/about",
  "/team",
  "/contact",
  "/services",
  "/services/seo",
  "/services/local-seo",
  "/services/local-seo/gbp-optimisation",
  "/services/local-seo/local-citations",
  "/services/brand-visibility-ai",
  "/services/paid-ads",
  "/services/paid-ads/google-ads",
  "/services/paid-ads/meta-ads",
  "/services/paid-ads/lead-generation-ads",
  "/services/web-design-development",
  "/services/web-design-development/wordpress",
  "/industries",
  "/locations",
  "/case-studies",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  industries.forEach((ind) => {
    entries.push({ url: `${base}${ind.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  locationsList.forEach((loc) => {
    entries.push({ url: `${base}${loc.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  caseStudies.forEach((cs) => {
    entries.push({ url: `${base}/case-studies/${cs.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  });

  blogPosts.forEach((post) => {
    entries.push({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly", priority: 0.6 });
  });

  return entries;
}
