"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ onOpenDemo }: { onOpenDemo?: (productName?: string) => void } = {}) {
  return (
    <footer className="relative border-t border-white/10 bg-[#050505] text-[#f2f2ec]">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight"
            >
              Fortune<span className="text-[#b7ff4a]">Tech</span>
            </Link>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-white/50">
              WE BUILD DIGITAL EXPERIENCES. Digital products, intelligent systems,
              and real results — engineered in Bengaluru, shipped worldwide.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4 sm:mb-5">Sitemap</div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/60">
              <li><Link href="/projects" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">Products</Link></li>
              <li><Link href="/services" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">About</Link></li>
              <li><Link href="/careers" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#b7ff4a] transition-colors py-1 inline-block">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4 sm:mb-5">Contact</div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b7ff4a] shrink-0" />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-2 break-all">
                <Mail className="w-3.5 h-3.5 text-[#b7ff4a] shrink-0" />
                <a href="mailto:hello@fortunetech.com" className="hover:text-white transition-colors">hello@fortunetech.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b7ff4a] shrink-0" />
                <span>+91 00000 00000</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ff4a] hover:text-white transition-colors py-1"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 sm:pt-8 text-xs text-white/40 text-center sm:text-left">
          <span>© {new Date().getFullYear()} FortuneTech. All rights reserved.</span>
          <div className="flex gap-6 sm:gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors py-1">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}