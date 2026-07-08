import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for reaching out to VASP Digital. We've received your request and will be in touch soon.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}

