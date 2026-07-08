"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Globe, MapPin, Target, Layout, Hammer, Heart, Scale, Home, BookOpen, Compass } from "lucide-react";
import { navLinks, socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe: Globe,
  MapPin: MapPin,
  Target: Target,
  Layout: Layout,
  Hammer: Hammer,
  Heart: Heart,
  Scale: Scale,
  Home: Home,
  BookOpen: BookOpen,
  Compass: Compass,
};

export default function Header({
  locations,
  industries,
}: {
  locations?: { label: string; desc: string; href: string }[];
  industries?: { label: string; desc: string; href: string }[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dynamicNavLinks = navLinks.map((link) => {
    if (link.label === "Locations" && locations) {
      return {
        ...link,
        columns: [
          {
            title: "By location",
            items: [
              { label: "Locations Overview", desc: "Explore all Ontario coverage", href: "/locations", icon: "MapPin" },
              ...locations.map((loc) => ({
                label: loc.label,
                desc: loc.desc,
                href: loc.href,
                icon: "MapPin",
              })),
            ],
          },
        ],
      };
    }
    if (link.label === "Industries" && industries) {
      const industryIcons: Record<string, string> = {
        Contractors: "Hammer",
        Clinics: "Heart",
        "Legal services": "Scale",
        "Real estate": "Home",
      };
      return {
        ...link,
        columns: [
          {
            title: "By industry",
            items: [
              { label: "Industries Overview", desc: "See how we adapt to your sector", href: "/industries", icon: "Globe" },
              ...industries.map((ind) => ({
                label: ind.label,
                desc: ind.desc,
                href: ind.href,
                icon: (industryIcons[ind.label] || "Globe") as any,
              })),
            ],
          },
        ],
      };
    }
    return link;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(null);
    setActiveMega(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMega(label);
  };
  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMega(null), 150);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-lg shadow-nav"
            : "bg-brand-lavender"
        )}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10">
              <span
                className="text-2xl md:text-3xl font-bold italic tracking-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                VASP<span className="text-brand-purple">.</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {dynamicNavLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(link.label)}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2.5 rounded-btn text-sm font-medium transition-colors",
                      "hover:bg-black/5",
                      pathname.startsWith(link.href) && link.href !== "/"
                        ? "text-brand-purple"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                    {link.mega && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeMega === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega menu dropdown */}
                  <AnimatePresence>
                    {link.mega && activeMega === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50",
                          link.label === "Services"
                            ? "w-[900px] max-w-[95vw]"
                            : "w-[300px] max-w-[90vw]"
                        )}
                      >
                        <div className={cn(
                          "bg-white rounded-card shadow-dropdown border border-border p-6",
                          link.label === "Services"
                            ? "grid grid-cols-1 md:grid-cols-3 gap-8"
                            : "flex flex-col gap-4"
                        )}>
                          {link.columns?.map((col) => (
                            <div key={col.title}>
                              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                                {col.title}
                              </p>
                              <ul className="space-y-1">
                                {col.items.map((item: any) => {
                                  const IconComponent = item.icon ? iconMap[item.icon] : null;
                                  return (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className={cn(
                                          "group/item block px-3 py-2 rounded-md transition-colors hover:bg-brand-lavender",
                                          item.indent && "ml-4 pl-3 border-l border-brand-purple/20 rounded-l-none"
                                        )}
                                      >
                                        <div className={cn(
                                          "flex items-center gap-2 text-foreground group-hover/item:text-brand-purple",
                                          item.indent ? "font-semibold text-[13px]" : "font-bold text-sm"
                                        )}>
                                          {IconComponent && <IconComponent size={item.indent ? 14 : 16} className="text-brand-purple/70 group-hover/item:text-brand-purple shrink-0" />}
                                          <span>{item.label}</span>
                                        </div>
                                        {item.desc && (
                                          <p className="text-xs text-muted mt-0.5 font-normal">
                                            {item.desc}
                                          </p>
                                        )}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="/contact" variant="secondary" size="sm">
                Contact
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Book call
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-btn hover:bg-black/5 z-10"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-lavender lg:hidden pt-16 md:pt-20 overflow-y-auto"
          >
            <div className="container-max py-8 flex flex-col min-h-[calc(100vh-4rem)]">
              <nav className="flex flex-col gap-1">
                {dynamicNavLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-black/10"
                  >
                    <button
                      className="w-full flex items-center justify-between py-4 text-2xl font-bold"
                      onClick={() =>
                        setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={22}
                        className={cn(
                          "transition-transform duration-300",
                          mobileSubOpen === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubOpen === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 flex flex-col gap-4">
                            {link.columns?.map((col) => (
                              <div key={col.title}>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                                  {col.title}
                                </p>
                                <ul className="flex flex-col gap-1">
                                  {col.items.map((item: any) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className={cn(
                                          "flex items-center justify-between py-2 text-foreground/80 transition-colors hover:text-brand-purple",
                                          item.indent
                                            ? "ml-4 pl-3 border-l border-brand-purple/20 text-sm font-medium"
                                            : "text-base font-medium"
                                        )}
                                      >
                                        <span>{item.label}</span>
                                        <ArrowRight size={item.indent ? 14 : 16} className="text-muted" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button href="/contact" variant="secondary" size="lg" className="w-full">
                  Contact
                </Button>
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Book call
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto pt-8 flex gap-4"
              >
                {socialLinks.map((s) => (
                  <span
                    key={s.name}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-xs font-bold text-brand-purple"
                  >
                    {s.name[0]}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
