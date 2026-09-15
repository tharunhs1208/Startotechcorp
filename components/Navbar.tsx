"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const MOBILE_NAV_LINKS = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.08] shadow-xs"
            : "bg-transparent"
        }`}
      >
        <div className="page-container flex items-center justify-between py-4 sm:py-5">
          {/* LOGO */}
          <Link
            href="/"
            className="font-display text-base sm:text-lg font-bold tracking-wider uppercase text-zinc-900 hover:text-[#0070f3] transition-colors"
          >
            STRATOTECHCORP
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#0070f3] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-pill btn-accent-c hidden md:inline-flex px-5 py-2.5 sm:px-6 sm:py-3 !text-[0.7rem] font-bold shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden grid h-10 w-10 place-items-center rounded-full border transition-colors cursor-pointer ${
                menuOpen
                  ? "border-black/30 text-zinc-900 bg-black/5"
                  : "border-black/15 text-zinc-800 hover:bg-black/5"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      {menuOpen && (
        <div className="menu-enter md:hidden fixed inset-0 z-40 flex flex-col justify-between bg-white pt-24 pb-10 px-6 sm:px-8 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {MOBILE_NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl sm:text-4xl font-bold uppercase text-zinc-900 hover:text-[#0070f3] transition-colors py-2 flex items-center justify-between group border-b border-black/[0.06]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-[#0070f3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-pill btn-accent-c w-full justify-center !py-4 text-xs font-bold uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}