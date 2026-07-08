"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/Primitives";
import Button from "@/components/ui/Button";

interface Industry {
  id: string;
  label: string;
  title: string;
  desc: string;
}

const industries: Industry[] = [
  {
    id: "clinics",
    label: "Clinics",
    title: "More patient inquiries and consultations",
    desc: "Clinics need a steady flow of new patient inquiries. Lead generation ads target people actively searching for your services and convert them into appointment requests and calls."
  },
  {
    id: "contractors",
    label: "Contractors",
    title: "More booked jobs and quote requests",
    desc: "Contractors need qualified leads, not just clicks. We target homeowners looking for services and drive them to call or request a quote."
  },
  {
    id: "legal",
    label: "Legal",
    title: "High-value consults and cases",
    desc: "Build trust and capture serious inquiries. Our lead funnels pre-qualify prospects so your attorneys speak with high-intent clients."
  },
  {
    id: "real-estate",
    label: "Real estate",
    title: "Consistent buyer and seller leads",
    desc: "Showcase properties and generate listings. We target local home shoppers and sellers in your specific geographic territory."
  },
  {
    id: "home-services",
    label: "Home services",
    title: "Direct booking for repair jobs",
    desc: "Perfect for plumbers, electricians, and HVAC techs. We capture leads right when their need arises and get them booked."
  },
  {
    id: "consulting",
    label: "Consulting",
    title: "Qualified strategy session bookings",
    desc: "Attract corporate clients or professional inquiries. Position your expertise and get qualified calendar bookings."
  }
];

export default function IndustrySelector() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <div className="w-full space-y-12">
      {/* Tabs selector */}
      <div className="flex flex-wrap gap-2 justify-center pb-4 border-b border-border">
        {industries.map((ind) => {
          const isActive = activeTab.id === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind)}
              className={`px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "bg-brand-purple text-white shadow-md"
                  : "bg-white text-foreground border border-border hover:border-brand-purple/50"
              }`}
            >
              {ind.label}
            </button>
          );
        })}
      </div>

      {/* Tab panel display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-lavender/50 rounded-card p-6 md:p-10 border border-border">
        <div className="lg:col-span-7 flex flex-col items-start space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
            {activeTab.label}
          </span>
          <h3 className="text-h2 text-foreground leading-tight">
            {activeTab.title}
          </h3>
          <p className="text-body text-muted leading-relaxed">
            {activeTab.desc}
          </p>
          <div className="pt-4 flex items-center gap-4">
            <Button href="#contact-lead" variant="primary">
              Get started
            </Button>
            <a
              href="#contact-lead"
              className="inline-flex items-center gap-1 font-display text-sm font-semibold text-foreground hover:text-brand-purple transition-colors cursor-pointer"
            >
              Learn more <ChevronRight className="w-4 h-4 text-foreground" />
            </a>
          </div>
        </div>

        {/* Right side image placeholder */}
        <div className="lg:col-span-5 w-full">
          <ImagePlaceholder
            ratio="aspect-[4/3]"
            label={`${activeTab.label} Leads`}
            className="bg-white/50 border border-border/40 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
