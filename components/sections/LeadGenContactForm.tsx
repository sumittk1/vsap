"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function LeadGenContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: (formData.get("message") as string) || "Interested in Lead Generation services.",
      source: "lead-gen",
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full rounded-[8px] border border-black/80 bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-[8px] border border-black/80 bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us more"
          className="w-full rounded-[8px] border border-black/80 bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="privacy-policy"
          type="checkbox"
          required
          className="w-4 h-4 rounded border-black/80 text-brand-purple focus:ring-brand-purple/20 cursor-pointer"
        />
        <label htmlFor="privacy-policy" className="text-sm text-foreground/80 cursor-pointer select-none">
          I agree to the privacy policy
        </label>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="white" className="px-8 py-3" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
