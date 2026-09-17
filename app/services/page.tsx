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

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-development": Code2,
  "ui-ux-design": Layout,
  "mobile-apps": Smartphone,
  "ai-machine-learning": Cpu,
  "cloud-solutions": Cloud,
  cybersecurity: Shield,
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselScrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [carouselActiveIdx, setCarouselActiveIdx] = useState(0);

  // Desktop Pinned Scroll Handler
  const goToService = (index: number) => {
    if (index < 0 || index >= SERVICES_DATA.length) return;
    setDirection(index >= activeIdx ? 1 : -1);
    setActiveIdx(index);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDist = rect.height - windowHeight;
      if (scrollableDist > 0) {
        const targetScroll = (index / (SERVICES_DATA.length - 1)) * scrollableDist;
        const targetY = window.scrollY + rect.top + targetScroll + 10;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  const nextService = () => {
    if (activeIdx < SERVICES_DATA.length - 1) {
      goToService(activeIdx + 1);
    }
  };

  const prevService = () => {
    if (activeIdx > 0) {
      goToService(activeIdx - 1);
    }
  };

  useEffect(() => {
    let lastIndex = activeIdx;
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
      if (index !== lastIndex) {
        setDirection(index >= lastIndex ? 1 : -1);
        lastIndex = index;
        setActiveIdx(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tablet & Mobile Horizontal Carousel Handler
  const handleCarouselScroll = () => {
    if (!carouselScrollRef.current) return;
    const { scrollLeft, clientWidth } = carouselScrollRef.current;
    const cardWidth = clientWidth > 640 ? 540 : clientWidth * 0.86;
    const index = Math.round(scrollLeft / (cardWidth + 16));
    setCarouselActiveIdx(Math.min(SERVICES_DATA.length - 1, Math.max(0, index)));
  };

  const scrollCarouselTo = (index: number) => {
    if (!carouselScrollRef.current) return;
    const clientWidth = carouselScrollRef.current.clientWidth;
    const cardWidth = clientWidth > 640 ? 540 : clientWidth * 0.86;
    carouselScrollRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setCarouselActiveIdx(index);
  };

  const currentService = SERVICES_DATA[activeIdx] || SERVICES_DATA[0];

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

      {/* ── DESKTOP: PINNED CONSTANT SCREEN (CONTENT CHANGES ON SCROLL) ─ */}
      <section
        ref={containerRef}
        className="hidden lg:block relative h-[300vh] bg-[#fafafa]"
      >
        <div className="sticky top-20 min-h-[calc(100vh-5rem)] flex items-center py-8 lg:py-12">
          <div className="page-container w-full">
            <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Practice details on the left */}
              <div className="col-span-5 flex flex-col justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentService.slug + "-left"}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -24 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5 lg:space-y-6"
                  >
                    {/* Active practice badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                      <span>Practice 0{activeIdx + 1} of 0{SERVICES_DATA.length}</span>
                    </div>

                    {/* Main dynamic heading */}
                    <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                      {currentService.title}
                    </h2>

                    <p className="text-base lg:text-lg text-zinc-600 font-light leading-relaxed max-w-md">
                      {currentService.tagline}
                    </p>

                    {/* Segmented scroll progress bar + Arrow Controls */}
                    <div className="pt-1 flex items-center justify-between gap-3 max-w-sm">
                      <div className="flex items-center gap-1.5 flex-1">
                        {SERVICES_DATA.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => goToService(i)}
                            className="h-4 flex-1 flex items-center group cursor-pointer focus:outline-hidden"
                            aria-label={`Jump to practice 0${i + 1}`}
                          >
                            <span
                              className={`h-1.5 w-full rounded-full transition-all duration-300 group-hover:bg-[#0070f3]/70 ${
                                i === activeIdx
                                  ? "bg-[#0070f3]"
                                  : i < activeIdx
                                  ? "bg-zinc-300"
                                  : "bg-zinc-200"
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      {/* Arrow Navigation Buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => prevService()}
                          disabled={activeIdx === 0}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                          aria-label="Previous Practice"
                        >
                          <ChevronLeft className="w-4 h-4 text-zinc-700" />
                        </button>
                        <button
                          onClick={() => nextService()}
                          disabled={activeIdx === SERVICES_DATA.length - 1}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                          aria-label="Next Practice"
                        >
                          <ChevronRight className="w-4 h-4 text-zinc-700" />
                        </button>
                      </div>
                    </div>

                    {/* Performance highlight pill */}
                    {currentService.benefits && currentService.benefits[0] && (
                      <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-black/[0.08] bg-white shadow-xs max-w-sm">
                        <div className="w-7 h-7 rounded-lg bg-[#0070f3]/10 flex items-center justify-center text-[#0070f3] shrink-0">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-zinc-900 leading-tight">
                            {currentService.benefits[0].metric}
                          </div>
                          <div className="text-xs text-zinc-500 font-light">
                            {currentService.benefits[0].label}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-1 flex items-center gap-3">
                      <Link
                        href={`/services/${currentService.slug}`}
                        className="btn-pill btn-accent-c text-sm font-semibold px-6 py-3 inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Explore {currentService.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Cards change with transition from right to left */}
              <div className="col-span-7">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentService.slug}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -50, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-xl shadow-black/5 hover:border-[#0070f3]/40 transition-all p-3 relative"
                  >
                    {/* Media Banner with Video Preview & Metric Pill */}
                    <div className="relative h-56 lg:h-64 rounded-2xl bg-zinc-950 overflow-hidden">
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
                      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                        <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs flex items-center gap-1.5">
                          {React.createElement(SERVICE_ICONS[currentService.slug] || Code2, { className: "w-3.5 h-3.5" })}
                          <span>SERVICE 0{activeIdx + 1}</span>
                        </div>
                      </div>

                      {/* Performance Metric Badge on Media */}
                      {currentService.benefits && currentService.benefits[0] && (
                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-mono text-white border border-white/20 shadow-md flex items-center gap-1.5 z-10">
                          <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
                          <span className="font-bold text-[#38bdf8]">{currentService.benefits[0].metric}</span>
                          <span className="text-zinc-300 font-light text-[11px]">{currentService.benefits[0].label}</span>
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div className="p-5 lg:p-6 space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block">
                            Practice Overview
                          </span>
                          <h3 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 leading-tight">
                            {currentService.title}
                          </h3>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8fafc] border border-black/[0.06] text-xs font-mono text-zinc-500">
                          <Layers className="w-3.5 h-3.5 text-[#0070f3]" />
                          <span>{currentService.features.length} Deliverables</span>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-600 leading-relaxed font-light line-clamp-2">
                        {currentService.shortDescription || currentService.fullDescription}
                      </p>

                      {/* Key Capabilities */}
                      <div className="pt-3 border-t border-black/[0.06]">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2.5">
                          Core Capabilities & Solutions
                        </span>
                        <div className="grid grid-cols-2 gap-2.5">
                          {currentService.features.slice(0, 4).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-3 rounded-xl border border-black/[0.05] bg-[#f8fafc] hover:bg-white hover:border-[#0070f3]/30 hover:shadow-xs transition-all"
                            >
                              <div className="flex items-center gap-2 text-[13px] font-semibold text-zinc-900">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0070f3] shrink-0" />
                                <span className="line-clamp-1">{feat.title}</span>
                              </div>
                              <p className="text-xs text-zinc-500 font-light mt-1 leading-snug line-clamp-1">
                                {feat.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Tools */}
                      <div className="pt-3 border-t border-black/[0.06]">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2.5">
                          Technologies & Tools
                        </span>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex flex-wrap gap-2">
                            {currentService.technologies.slice(0, 6).map((t) => (
                              <TechBadge key={t} name={t} className="!px-2.5 !py-1 !text-xs" />
                            ))}
                          </div>
                          <Link
                            href={`/services/${currentService.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070f3] hover:text-[#005bb5] transition-colors group ml-auto"
                          >
                            <span>Explore Practice</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </Link>
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

      {/* ── TABLET & MOBILE: RIGHT-TO-LEFT HORIZONTAL SWIPE / SCROLL CAROUSEL ─── */}
      <section className="block lg:hidden py-12 sm:py-16 bg-[#fafafa]">
        <div className="page-container mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#0070f3] font-semibold">
              Practice 0{carouselActiveIdx + 1} of 0{SERVICES_DATA.length}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
              {SERVICES_DATA[carouselActiveIdx]?.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarouselTo(Math.max(0, carouselActiveIdx - 1))}
              disabled={carouselActiveIdx === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 bg-white hover:bg-zinc-100 disabled:opacity-30 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4 text-zinc-700" />
            </button>
            <button
              onClick={() => scrollCarouselTo(Math.min(SERVICES_DATA.length - 1, carouselActiveIdx + 1))}
              disabled={carouselActiveIdx === SERVICES_DATA.length - 1}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 bg-white hover:bg-zinc-100 disabled:opacity-30 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4 text-zinc-700" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track from right to left */}
        <div
          ref={carouselScrollRef}
          onScroll={handleCarouselScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 sm:px-8 md:px-12 pb-4"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = SERVICE_ICONS[service.slug] || Code2;
            return (
              <div
                key={service.slug}
                className="w-[86vw] sm:w-[500px] md:w-[560px] shrink-0 snap-center rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-lg shadow-black/5 p-3 sm:p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Media Video */}
                  <div className="relative aspect-video rounded-xl sm:rounded-2xl bg-zinc-950 overflow-hidden">
                    <video
                      src={service.video || "/videos/startone.mp4"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                      <div className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold text-[#0070f3] border border-black/10 shadow-xs flex items-center gap-1.5">
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>SERVICE 0{idx + 1}</span>
                      </div>
                    </div>

                    {service.benefits && service.benefits[0] && (
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white border border-white/20 shadow-md flex items-center gap-1.5 z-10">
                        <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span className="font-bold text-[#38bdf8]">{service.benefits[0].metric}</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5 space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                        {service.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500 bg-[#f8fafc] px-2.5 py-0.5 rounded-full border border-black/[0.06] shrink-0">
                        {service.features.length} Deliverables
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 font-light line-clamp-2 leading-relaxed">
                      {service.shortDescription || service.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="pt-3 border-t border-black/[0.06] space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070f3] shrink-0" />
                          <span className="line-clamp-1 font-medium">{feat.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="pt-3 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 5).map((t) => (
                        <TechBadge key={t} name={t} className="!px-2 !py-0.5 !text-[10px] sm:!text-xs" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link */}
                <div className="p-4 sm:p-5 pt-0 flex justify-end">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0070f3] hover:text-[#005bb5] transition-colors group"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {SERVICES_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollCarouselTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === carouselActiveIdx ? "w-8 bg-[#0070f3]" : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={20}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Need a custom technical roadmap?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              Schedule a 30-minute discovery call with our engineering partners.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5 shadow-xs hover:scale-105 transition-transform duration-200"
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
