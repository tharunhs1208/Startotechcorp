"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  Mic,
  Video,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { renderProductMockup } from "@/components/ui-mockups/ProductUIMockups";

export interface ShowcaseProduct {
  id: string;
  number: string;
  name: string;
  departmentLabel: string;
  headline: string;
  description: string;
  beforeAfterSummary: string;
  supportingLine: string;
  metricLabel: string;
  metricValue: string;
  linkHref: string;
  ctaLabel: string;
  mediaSrc: string;
  icon: React.ElementType;
}

const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    id: "salesx",
    number: "01",
    name: "SalesX",
    departmentLabel: "Sales Platform",
    headline: "Automated Inbound Triage & Pipeline Acceleration",
    description: "Routes incoming inbound leads directly to account executives based on territory and company size, then triggers follow-up cadences without spreadsheet triage.",
    beforeAfterSummary: "Teams cut first-response times from over 4 hours down to under 5 minutes without manual spreadsheet triage.",
    supportingLine: "Every conversation and stage change syncs directly with Salesforce and HubSpot records in real time.",
    metricLabel: "First Response",
    metricValue: "< 5 mins",
    linkHref: "/products/salesx",
    ctaLabel: "See how lead routing works",
    mediaSrc: "/images/products/salesx_custom.jpg",
    icon: TrendingUp,
  },
  {
    id: "zobay",
    number: "02",
    name: "Zobay Voice AI",
    departmentLabel: "Voice AI",
    headline: "Zero-Latency Acoustic Turn-Taking & Telephony Engine",
    description: "Answers customer phone calls and qualifies inbound inquiries with fluid speech pacing that adapts to caller interruptions and conversational pauses.",
    beforeAfterSummary: "Callers experience natural back-and-forth conversation without the awkward 2-second delays of traditional phone trees.",
    supportingLine: "On hang-up, the system writes structured meeting notes and places appointments directly onto rep calendars.",
    metricLabel: "Speech Latency",
    metricValue: "238ms",
    linkHref: "/projects/zobay-voice-ai",
    ctaLabel: "Listen to live turn-taking",
    mediaSrc: "/images/products/zobay_custom.jpg",
    icon: Mic,
  },
  {
    id: "meetingx",
    number: "03",
    name: "MeetingX",
    departmentLabel: "Communication",
    headline: "Low-Latency Browser Video Rooms & Live Transcription",
    description: "Browser-based video collaboration with adaptive selective forwarding, real-time shared canvases, and automated live transcript synthesis.",
    beforeAfterSummary: "Distributed product teams run multi-participant reviews with clear 1080p video, even on constrained bandwidth.",
    supportingLine: "Action items and summaries are organized during the call and pushed directly to project management boards.",
    metricLabel: "SFU Round-Trip",
    metricValue: "38ms",
    linkHref: "/products/meetingx",
    ctaLabel: "See how rooms connect",
    mediaSrc: "/images/products/meetingx_pinterest.jpg",
    icon: Video,
  },
];

export default function InteractiveProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<"ui" | "photo">("photo");

  // Auto-advance card every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelect = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const activeProduct = SHOWCASE_PRODUCTS[activeIndex];

  return (
    <div className="w-full max-w-[1140px] mx-auto">
      {/* ── 1. FLUID MORPHING SELECTOR TABS BAR ───────────────────────── */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 p-1.5 bg-[#EAEAEA] rounded-2xl sm:rounded-3xl border border-black/[0.06]">
        {SHOWCASE_PRODUCTS.map((prod, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={prod.id}
              onClick={() => handleSelect(idx)}
              className="relative text-center py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden group whitespace-nowrap"
            >
              {/* Fluid Spring Indicator Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeProductPill"
                  transition={{ type: "spring", stiffness: 460, damping: 34 }}
                  className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-black/[0.1] z-0"
                />
              )}

              <div className="relative z-10 flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                  isActive ? "bg-[#111111] scale-110" : "bg-black/25 group-hover:bg-black/50"
                }`} />
                <span className={`text-xs sm:text-[15px] font-display font-bold truncate transition-colors duration-200 ${
                  isActive ? "text-[#111111]" : "text-[#666666] group-hover:text-[#111111]"
                }`}>
                  {prod.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 2. CINEMATIC DIRECTIONAL TRANSITION CARD ─────────────────── */}
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-white border border-black/[0.08] shadow-[0_16px_56px_rgba(0,0,0,0.05)]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={activeProduct.id}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction * 24,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              x: direction * -24,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.38,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] items-stretch">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Top Metric & Department Badges */}
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="flex flex-wrap items-center gap-2 text-xs font-mono"
                  >
                    <span className="font-bold text-black bg-[#82FFCD] px-3.5 py-1 rounded-full text-[11px] shadow-2xs">
                      {activeProduct.metricLabel}: {activeProduct.metricValue}
                    </span>
                    <span className="font-semibold text-[#555555] bg-black/[0.05] px-3 py-1 rounded-full text-[11px]">
                      {activeProduct.departmentLabel}
                    </span>
                  </motion.div>

                  {/* Product Title */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight"
                  >
                    <Link href={activeProduct.linkHref} className="hover:text-black transition-colors">
                      {activeProduct.name}
                    </Link>
                  </motion.h3>

                  {/* Headline & Description */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-2"
                  >
                    <p className="text-[15px] sm:text-[16px] text-[#222222] font-semibold leading-snug">
                      {activeProduct.headline}
                    </p>
                    <p className="text-[13px] sm:text-[14px] text-[#555555] leading-relaxed font-normal">
                      {activeProduct.description}
                    </p>
                  </motion.div>

                  {/* Concrete Supporting Notes */}
                  <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-4 border-t border-black/[0.06] space-y-2 text-[12px] sm:text-[13px]"
                  >
                    <div className="flex items-start gap-2.5 text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0" />
                      <span>{activeProduct.beforeAfterSummary}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#666666]">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                      <span>{activeProduct.supportingLine}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Action CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-8"
                >
                  <Link
                    href={activeProduct.linkHref}
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black text-white hover:bg-[#82FFCD] hover:text-black font-bold text-[13px] sm:text-[14px] transition-all duration-300 group/btn shadow-sm"
                  >
                    <span>{activeProduct.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Visual Column */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-zinc-950 border-t lg:border-t-0 lg:border-l border-black/[0.06] overflow-hidden p-3.5 flex flex-col justify-between">
                {/* Mode Selector */}
                <div className="flex items-center justify-between z-10 mb-2">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-white/80 font-mono text-[10px] font-bold">
                    {activeProduct.name} Engine
                  </span>
                  <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg backdrop-blur-md">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setViewMode("ui");
                      }}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono flex items-center gap-1 transition-all ${
                        viewMode === "ui"
                          ? "bg-white text-black font-bold shadow-xs"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>Console</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setViewMode("photo");
                      }}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono flex items-center gap-1 transition-all ${
                        viewMode === "photo"
                          ? "bg-white text-black font-bold shadow-xs"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>Photo</span>
                    </button>
                  </div>
                </div>

                {/* Display Media Stage with Spring Zoom */}
                <div className="flex-1 relative rounded-xl overflow-hidden border border-white/10 bg-black/50">
                  <AnimatePresence mode="wait">
                    {viewMode === "ui" ? (
                      <motion.div
                        key="ui-console"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full min-h-[240px] p-2"
                      >
                        {renderProductMockup(activeProduct.id, false)}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`photo-${activeProduct.id}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative min-h-[240px]"
                      >
                        <Image
                          src={activeProduct.mediaSrc}
                          alt={activeProduct.name}
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center justify-between">
                          <span className="font-semibold">{activeProduct.name} Live Metric</span>
                          <span className="text-[#82FFCD] font-bold">{activeProduct.metricValue}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
