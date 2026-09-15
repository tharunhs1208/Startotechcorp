"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ onOpenDemo }: { onOpenDemo?: (productName?: string) => void } = {}) {
  return (
    <footer className="relative border-t border-white/10 bg-[#050505] text-[#f2f2ec]">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-bold uppercase tracking-tight"
            >
              Fortune<span className="text-[#b7ff4a]">Tech</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              WE BUILD DIGITAL EXPERIENCES. Digital products, intelligent systems,
              and real results — engineered in Bengaluru, shipped worldwide.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-5">Sitemap</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/projects" className="hover:text-[#b7ff4a] transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-[#b7ff4a] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#b7ff4a] transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-[#b7ff4a] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#b7ff4a] transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#b7ff4a] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b7ff4a]" />
                Bengaluru, India
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b7ff4a]" />
                hello@fortunetech.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b7ff4a]" />
                +91 00000 00000
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ff4a] hover:text-white transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} FortuneTech. All rights reserved.</span>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}