"use client";

import React from "react";
import { Sparkles, ArrowRight, Mic, LayoutGrid, Shield, ChevronRight, Play, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenDemo: (product?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Hero({ onOpenDemo, onSelectProduct }: HeroProps) {
  const scrollToProducts = () => {
    const el = document.getElementById("products-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background Grid Pattern & Floating Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[300px] bg-purple-600/12 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Innovation Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-all duration-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            FortuneTechCorp Innovation Suite 2026
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-xs text-indigo-400 font-medium flex items-center gap-1">
            Explore Ecosystem <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          Architecting the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">
            Intelligent Enterprise
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          FortuneTechCorp pioneers high-velocity autonomous infrastructure. Seamlessly orchestrate{" "}
          <span className="text-purple-300 font-medium">Zobay Voice AI</span>,{" "}
          <span className="text-emerald-300 font-medium">StartOne Enterprise OS</span>, and{" "}
          <span className="text-amber-300 font-medium">LegalX Contract Intelligence</span> under a single secure umbrella.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenDemo()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-indigo-200 group-hover:rotate-12 transition-transform" />
            <span>Launch Suite Demo</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/10 hover:border-white/20 font-semibold text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore 3 Flagship Products</span>
          </button>
        </div>

        {/* Interactive Product Ticker Quick Switches */}
        <div className="max-w-4xl mx-auto p-2 bg-[#12141d]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Zobay Pill */}
            <div
              onClick={() => onSelectProduct("product-zobay")}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 transition-all duration-200 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="font-bold text-white text-sm">Zobay</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 ml-auto">
                  Voice AI
                </span>
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Human-grade conversational phone agents & CRM workflows.
              </p>
            </div>

            {/* StartOne Pill */}
            <div
              onClick={() => onSelectProduct("product-startone")}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all duration-200 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <span className="font-bold text-white text-sm">StartOne</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 ml-auto">
                  Enterprise OS
                </span>
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Unified business ops, multi-org accounting & team workspaces.
              </p>
            </div>

            {/* LegalX Pill */}
            <div
              onClick={() => onSelectProduct("product-legalx")}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30 transition-all duration-200 text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-bold text-white text-sm">LegalX</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 ml-auto">
                  Legal Intel
                </span>
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Instant risk clause scanning & automated contract redlines.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Trust Stats Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">99.99%</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Global Uptime SLA</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">&lt; 280ms</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Zobay Voice Latency</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">$120M+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">StartOne Processed Vol.</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">10x Faster</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">LegalX Contract Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
