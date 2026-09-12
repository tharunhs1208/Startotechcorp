"use client";

import { Mic, LayoutGrid, Shield, ArrowUp, Globe, Mail } from "lucide-react";

interface FooterProps {
  onOpenDemo: (product?: string) => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 pt-16 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-[2px]">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center font-black text-white text-lg">
                  F
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Fortune<span className="text-indigo-400">Tech</span>CORP
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Architecting the next century of autonomous enterprise infrastructure. Unified voice AI, modern business operating systems, and automated legal intelligence.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">
                All Global Clusters Operational (99.99%)
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("product-zobay")}
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Zobay Voice AI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("product-startone")}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>StartOne Enterprise OS</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("product-legalx")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>LegalX AI Counsel</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ecosystem-section")}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Autonomous Synergy
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions / Infrastructure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("bento-features")} className="hover:text-white transition-colors">
                  Zero-Trust Architecture
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("bento-features")} className="hover:text-white transition-colors">
                  Edge POP Topology
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("bento-features")} className="hover:text-white transition-colors">
                  Air-Gapped VPC Clusters
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDemo()} className="hover:text-white transition-colors">
                  Fortune Core SDK
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onOpenDemo()} className="hover:text-white transition-colors">
                  Request Sandbox Key
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDemo()} className="hover:text-white transition-colors">
                  Schedule Executive Briefing
                </button>
              </li>
              <li>
                <span className="text-xs font-mono text-gray-500">contact@fortunetechcorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} FortuneTechCorp, Inc. All rights reserved. Zobay, StartOne, and LegalX are registered trademarks.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
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
