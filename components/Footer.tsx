"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

interface FooterProps {
  onOpenDemo?: (product?: string) => void;
}

export default function Footer({ onOpenDemo }: FooterProps = {}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-12 relative z-20 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRE-FOOTER CTA CARD */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block mb-2">
              Start Your Digital Transformation
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Ready to Turn Your Ideas Into Real Products?
            </h3>
            <p className="text-sm text-blue-100 mt-2 leading-relaxed">
              Partner with our team of elite engineers and designers to build scalable, high-performance software tailored to your goals.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-xl hover:bg-blue-50 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* 4 MAIN COLUMNS MATCHING BLUEPRINT (LIGHT THEME) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200 text-left">
          
          {/* LOGO & COMPANY DESCRIPTION (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-blue-500/20">
                S
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900 uppercase">
                STARTO<span className="text-blue-600">TECH</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              We help businesses transform their ideas into powerful digital products, scalable cloud architectures, and intelligent autonomous experiences.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-600 font-semibold">
                Available for New Enterprise Projects
              </span>
            </div>
          </div>

          {/* COLUMN 1: COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition-colors block">
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-600 transition-colors block">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600 transition-colors block">
                  Careers &amp; Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {SERVICES_DATA.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-blue-600 transition-colors block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: RESOURCES & CONTACT */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Resources &amp; Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors block">
                  Tech Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors block">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <a href="mailto:hello@startotech.com" className="font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                  hello@startotech.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-medium text-slate-700">+91 (80) 4129-8800</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-medium text-slate-700">Bengaluru, India • Global Edge</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 StartoTech Systems. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms &amp; Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer font-medium ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
