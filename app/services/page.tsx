"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Smartphone,
  Cloud,
  Layout,
  Shield,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TechBadge from "@/components/TechBadge";
import { SERVICES_DATA } from "@/data/siteData";

const SERVICE_ICONS: Record<string, any> = {
  "web-development": Code2,
  "ui-ux-design": Layout,
  "mobile-apps": Smartphone,
  "ai-machine-learning": Cpu,
  "cloud-solutions": Cloud,
  cybersecurity: Shield,
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDist = rect.height - windowHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));
      const index = Math.min(
        SERVICES_DATA.length - 1,
        Math.floor(progress * SERVICES_DATA.length)
      );
      setActiveIdx(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentService = SERVICES_DATA[activeIdx] || SERVICES_DATA[0];
  const Icon = SERVICE_ICONS[currentService.slug] || Code2;

  const jumpToService = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollableDist = rect.height - windowHeight;
    const targetScroll = (index / SERVICES_DATA.length) * scrollableDist;
    const targetY = window.scrollY + rect.top + targetScroll + 10;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Capabilities</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Our Services
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              End-to-end product design, full-stack software engineering, and intelligent AI systems designed for scale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PINNED SCROLL VIEW (SINGLE CARD VISIBLE AT A TIME) ───────── */}
      <section
        ref={containerRef}
        className="relative h-[360vh] bg-[#fafafa]"
      >
        <div className="sticky top-16 sm:top-20 min-h-[calc(100vh-5rem)] flex items-center py-2 sm:py-4">
          <div className="page-container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Enhanced dynamic heading card with progress & metrics */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.slug + "-left"}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Active practice badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                      <span>Practice 0{activeIdx + 1} of 0{SERVICES_DATA.length}</span>
                    </div>

                    {/* Main dynamic heading */}
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                      {currentService.title}
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-md">
                      {currentService.tagline}
                    </p>

                    {/* Segmented scroll progress bar */}
                    <div className="pt-0.5">
                      <div className="flex items-center gap-1.5 max-w-xs">
                        {SERVICES_DATA.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                              i === activeIdx
                                ? "bg-[#0070f3]"
                                : i < activeIdx
                                ? "bg-zinc-300"
                                : "bg-zinc-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Performance highlight pill */}
                    {currentService.benefits && currentService.benefits[0] && (
                      <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border border-black/[0.08] bg-white shadow-xs max-w-sm">
                        <div className="w-6 h-6 rounded-lg bg-[#0070f3]/10 flex items-center justify-center text-[#0070f3]">
                          <Zap className="w-3 h-3" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-900 leading-tight">
                            {currentService.benefits[0].metric}
                          </div>
                          <div className="text-[11px] text-zinc-500 font-light">
                            {currentService.benefits[0].label}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-1">
                      <Link
                        href={`/services/${currentService.slug}`}
                        className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-5 py-2.5 inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Explore {currentService.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: ONLY CURRENT CARD VISIBLE (Smooth Crossfade & Slide) */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.slug}
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-xl shadow-black/5 hover:border-[#0070f3]/40 transition-all p-2 sm:p-2.5"
                  >
                    {/* Media Banner with Video Preview & Metric Pill */}
                    <div className="relative h-36 sm:h-44 rounded-xl sm:rounded-2xl bg-zinc-950 overflow-hidden">
                      <video
                        src={currentService.video || "/videos/startone.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                        <div className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs flex items-center gap-1.5">
                          <Icon className="w-3 h-3" />
                          <span>SERVICE 0{activeIdx + 1}</span>
                        </div>
                      </div>

                      {/* Performance Metric Badge on Media */}
                      {currentService.benefits && currentService.benefits[0] && (
                        <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white border border-white/20 shadow-md flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-[#38bdf8]" />
                          <span className="font-bold text-[#38bdf8]">{currentService.benefits[0].metric}</span>
                          <span className="text-zinc-300 font-light text-[10px]">{currentService.benefits[0].label}</span>
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div className="p-4 sm:p-5 space-y-3.5 sm:space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block">
                            Practice Overview
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                            {currentService.title}
                          </h3>
                        </div>
                        <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f8fafc] border border-black/[0.06] text-[11px] font-mono text-zinc-500">
                          <Layers className="w-3 h-3 text-[#0070f3]" />
                          <span>{currentService.features.length} Deliverables</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-light line-clamp-2">
                        {currentService.shortDescription || currentService.fullDescription}
                      </p>

                      {/* Key Capabilities */}
                      <div className="pt-2.5 border-t border-black/[0.06]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                          Core Capabilities & Solutions
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {currentService.features.slice(0, 4).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-2.5 rounded-xl border border-black/[0.05] bg-[#f8fafc] hover:bg-white hover:border-[#0070f3]/30 hover:shadow-xs transition-all"
                            >
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                                <CheckCircle2 className="w-3 h-3 text-[#0070f3] shrink-0" />
                                <span className="line-clamp-1">{feat.title}</span>
                              </div>
                              <p className="text-[11px] text-zinc-500 font-light mt-0.5 leading-snug line-clamp-1">
                                {feat.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Tools */}
                      <div className="pt-2.5 border-t border-black/[0.06]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                          Technologies & Tools
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentService.technologies.slice(0, 6).map((t) => (
                            <TechBadge key={t} name={t} className="!px-2 !py-0.5 !text-[10px]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Need a custom technical roadmap?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              Schedule a 30-minute discovery call with our engineering partners.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5 shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
