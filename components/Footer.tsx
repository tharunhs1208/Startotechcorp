import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.08] bg-[#f8fafc] text-zinc-900">
      <div className="page-container py-16 sm:py-24">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-black/[0.08]">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            <Link
              href="/"
              className="font-display text-2xl sm:text-3xl font-bold tracking-wider uppercase text-zinc-900 hover:text-[#0070f3] transition-colors inline-block"
            >
              STRATOTECHCORP
            </Link>
            <p className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-zinc-800 max-w-md leading-tight">
              BUILDING DIGITAL PRODUCTS WITH TECHNOLOGY, DESIGN AND AI.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
              Bengaluru · India
            </p>
          </div>

          {/* SITEMAP LINKS */}
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6 text-[10px] text-zinc-400">Navigation</div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { label: "Work", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Industries", href: "/industries" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 hover:text-[#0070f3] transition-colors py-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0070f3]" />
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div className="lg:col-span-2">
            <div className="eyebrow mb-6 text-[10px] text-zinc-400">Connect</div>
            <div className="flex flex-col space-y-3">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "GitHub", href: "https://github.com" },
                { label: "Instagram", href: "https://instagram.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 hover:text-[#0070f3] transition-colors py-1"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-[#0070f3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500">
          <div>© 2026 StratoTechCorp. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-zinc-900 transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}