import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Meet the VASP Digital Team",
  description: "Meet the team behind VASP Digital — local experts in SEO, paid ads, web development, and client success in London & the GTA.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return <TeamClient />;
}

