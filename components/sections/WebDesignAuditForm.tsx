"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function WebDesignAuditForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push("/thank-you");
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-[8px] border border-black/80 bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]"
        />
        <Button type="submit" variant="primary" disabled={submitting} className="whitespace-nowrap">
          {submitting ? "Sending..." : "Send audit"}
        </Button>
      </div>
      <p className="font-sans text-xs text-muted mt-4 text-center">
        We don't spam. One email with your audit results. That's it.
      </p>
    </form>
  );
}
