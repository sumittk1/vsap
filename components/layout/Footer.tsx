import Link from "next/link";
import { footerLinks, socialLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Primitives";

const socialIcons: Record<string, () => React.ReactElement> = {
  Facebook: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  X: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 0 0-2.11 2.107C0 8.051 0 12 0 12s0 3.949.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.949 24 12 24 12s0-3.949-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white border-t border-white/10">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + contact */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-3xl font-bold italic tracking-tight">
                  VASP<span className="text-brand-coral">.</span>
                </span>
              </Link>
            </div>
            <div className="space-y-4 text-sm text-white/75">
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>London, Ontario and Greater Toronto Area</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Contact</p>
                <p>
                  <a href="mailto:hello@vaspdigital.com" className="underline hover:text-white transition-colors">
                    hello@vaspdigital.com
                  </a>
                </p>
                <p>
                  <Link href="/contact" className="underline hover:text-white transition-colors">
                    Book a call
                  </Link>
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-semibold mb-4 text-white">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-semibold mb-4 text-white">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} VASP Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies Settings</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
