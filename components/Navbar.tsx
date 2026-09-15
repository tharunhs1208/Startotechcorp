"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Products", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar({ onOpenDemo }: { onOpenDemo?: (productName?: string) => void } = {}) {
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
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:px-20 py-4 sm:py-5">
          {/* LOGO */}
          <Link
            href="/"
            className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#f2f2ec]"
          >
            Fortune<span className="text-[#b7ff4a]">Tech</span>
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#b7ff4a] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-pill btn-accent-c hidden md:inline-flex px-5 py-2.5 sm:px-6 sm:py-3 !text-[0.7rem]"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border transition-colors cursor-pointer ${
                menuOpen
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/20 text-white"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      {menuOpen && (
        <div className="menu-enter md:hidden fixed inset-0 z-40 flex flex-col justify-between bg-[#050505] pt-24 pb-8 px-6 sm:px-8 overflow-y-auto">
          <nav className="flex flex-col gap-1 sm:gap-2">
            {[
              { label: "Home", href: "/" },
              ...NAV_LINKS,
              { label: "Industries", href: "/industries" },
              { label: "Blog", href: "/blog" },
              { label: "FAQ", href: "/faq" },
            ].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="menu-item-enter font-display text-3xl sm:text-4xl font-bold uppercase text-white/90 hover:text-[#b7ff4a] transition-colors py-2 flex items-center justify-between group break-words"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#b7ff4a]" />
              </Link>
            ))}
          </nav>

          <div className="menu-item-enter pt-6 border-t border-white/10 mt-6" style={{ animationDelay: "450ms" }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-pill btn-accent-c w-full justify-center py-3.5 text-xs font-bold"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}