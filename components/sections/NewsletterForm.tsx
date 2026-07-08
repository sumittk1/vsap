"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder="you@business.com"
        className="flex-1 rounded-btn border border-border-dark bg-white px-4 py-3 text-base focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-colors min-h-[48px]"
      />
      <button
        type="submit"
        className="btn-primary inline-flex items-center justify-center rounded-btn font-semibold bg-brand-purple text-white px-6 py-3 min-h-[48px]"
      >
        Subscribe
      </button>
    </form>
  );
}
