import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About VASP Digital",
  description:
    "VASP Digital helps small businesses in London, Ontario and the GTA get found on Google and turn searches into customers through SEO, paid ads, and websites that work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
