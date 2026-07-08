"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Container, SectionHeader, ImagePlaceholder } from "@/components/ui/Primitives";
import { Reveal } from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function ContactFormSection({
  title = "Get in touch",
  description = "Fill out the form and one of our digital growth experts will reach out within 1 business day.",
  prefilledService,
  bg = "white",
  imageLabel,
}: {
  title?: string;
  description?: string;
  prefilledService?: string;
  bg?: "white" | "lavender";
  imageLabel?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const serviceName = formData.get("service") ? `Service Interest: ${formData.get("service")}` : "";
    const userMessage = formData.get("message") as string;
    const combinedMessage = [userMessage, serviceName].filter(Boolean).join("\n\n");

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("business") as string,
      phone: formData.get("phone") as string,
      message: combinedMessage || "No message provided.",
      source: "general",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit lead");
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("There was an error sending your message. Please try again.");
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-btn border border-border-dark bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]";

  return (
    <Section bg={bg}>
      <Container className={imageLabel ? "max-w-5xl" : "max-w-2xl"}>
        <div className={imageLabel ? "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" : ""}>
          <div>
            <Reveal>
              <SectionHeader title={title} description={description} align="left" className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-card border border-border p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="you@business.com" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="business">
                    Business name
                  </label>
                  <input id="business" name="business" type="text" className={inputClass} placeholder="Business name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" inputMode="tel" className={inputClass} placeholder="(555) 555-5555" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="service">
                    Service interest
                  </label>
                  <select id="service" name="service" defaultValue={prefilledService ?? ""} className={inputClass}>
                    <option value="">Select a service</option>
                    <option value="seo">SEO Services</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="paid-ads">Paid Ads</option>
                    <option value="web-design">Web Design &amp; Development</option>
                    <option value="brand-visibility">Brand Visibility – AI &amp; Beyond</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your business goals" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={submitting}>
                    {submitting ? "Sending..." : "Send message"}
                  </Button>
                  <p className="text-xs text-muted mt-3 text-center">
                    We respect your privacy. Your information is never shared.
                  </p>
                </div>
              </motion.form>
            </Reveal>
          </div>
          {imageLabel && (
            <Reveal delay={0.15} className="hidden lg:block">
              <ImagePlaceholder ratio="aspect-[4/5]" label={imageLabel} />
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
