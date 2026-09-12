"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, LayoutGrid, Shield, ArrowUp, Globe, Mail } from "lucide-react";

interface FooterProps {
  onOpenDemo: (product?: string) => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 pt-20 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Redstone signature 'Let's Move the World Together' CTA Banner */}
        <div className="text-center max-w-4xl mx-auto pb-20 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e70000]/10 border border-[#e70000]/25 text-[#ff4d4d] text-xs font-bold uppercase tracking-wider mb-6">
            FortuneTechCorp Executive Access
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8">
            Let's Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Autonomous Future
            </span>{" "}
            Together
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo()}
              className="redstone-btn text-base px-7 py-3.5"
            >
              <span>Schedule Enterprise Briefing</span>
              <div className="btn-icon-circle w-9 h-9">
                <ArrowUp className="w-4 h-4 text-white rotate-45" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-[2px]">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center font-black text-white text-lg">
                  F
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Fortune<span className="text-[#e70000]">Tech</span>CORP
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              REDSTONE doesn’t just create digital products — we transform businesses. Our goal is not just to complete a project, but to create an effective solution that fully meets the needs of the client and their customers.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">
                All Global Systems Operational
              </span>
            </div>
          </div>

          {/* Portfolio Links (12 items) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                "New projects",
                "Creative",
                "Real estate",
                "Marketing / Corporate",
                "Landing page",
                "Online store",
                "Food delivery",
                "Dentistry",
                "Manufacturers",
                "Branding",
                "Web solution",
                "Entertainment / Leisure",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="/portfolio" className="hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (9 items) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                "Website development",
                "Branding and design",
                "CRM system",
                "E-commerce",
                "Landing page",
                "Website support",
                "Redesign",
                "Application development",
                "Search engine optimisation",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="/services" className="hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/awards" className="hover:text-white transition-colors block">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-white transition-colors block">
                  Technologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="text-gray-300 font-medium leading-snug">
                Interested in cooperation?
              </div>
              <a
                href="mailto:office@redstone.software"
                className="text-white hover:text-[#e70000] font-mono transition-colors block"
              >
                office@redstone.software
              </a>
              <div className="pt-2">
                <button
                  onClick={() => onOpenDemo()}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#e70000] text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  Get in touch
                </button>
              </div>
              <div className="pt-4 text-gray-500">
                <Link href="/about" className="hover:text-gray-300 transition-colors block">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            @ 2026 All rights reserved. FORTUNETECHCORP.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Redstone Iconic Giant Fixed Wordmark in Footer */}
        <div className="pt-8 pb-4 border-t border-white/5 overflow-hidden select-none opacity-25 hover:opacity-50 transition-opacity text-center">
          <div className="text-[6.5vw] sm:text-[6.8vw] md:text-[7.2vw] font-black tracking-tighter uppercase text-white leading-none whitespace-nowrap">
            FORTUNETECHCORP
          </div>
        </div>
      </div>
    </footer>
  );
}
