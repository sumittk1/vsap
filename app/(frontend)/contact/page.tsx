import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact VASP Digital",
  description: "Reach out to VASP Digital for a strategy call, audit, or proposal. Serving London, Ontario and the Greater Toronto Area.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}

