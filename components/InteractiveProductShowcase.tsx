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
} from "lucide-react";

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
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
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
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
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
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    icon: Video,
  },
];

export default function InteractiveProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance card every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeProduct = SHOWCASE_PRODUCTS[activeIndex];

  return (
    <div className="w-full max-w-[1100px] mx-auto">
      {/* ── 1. SELECTOR TABS BAR (Clean Minimal Tabs) ───────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
        {SHOWCASE_PRODUCTS.map((prod, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={prod.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-center py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-white border-black/[0.14] shadow-[0_4px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05]"
                  : "bg-black/[0.02] hover:bg-black/[0.04] border-black/[0.05]"
              }`}
            >
              <h4 className={`text-sm sm:text-base font-display font-semibold transition-colors ${
                isActive ? "text-black" : "text-zinc-500"
              }`}>
                {prod.name}
              </h4>
            </button>
          );
        })}
      </div>

      {/* ── 2. FULL RICH CARD WITH PHOTO (Instant Click & 5s Transition) ── */}
      <AnimatePresence mode="wait">
        <motion.article
          key={activeProduct.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px] items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Metric Badge */}
                <div className="flex items-center gap-2 text-xs font-mono mb-3.5">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    {activeProduct.metricLabel}: {activeProduct.metricValue}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#111111] tracking-tight mb-2">
                  <Link href={activeProduct.linkHref} className="hover:text-black transition-colors">
                    {activeProduct.name}
                  </Link>
                </h3>

                {/* Headline & Description */}
                <p className="text-[14px] sm:text-[15px] text-[#333333] font-medium leading-snug mb-2">
                  {activeProduct.headline}
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#666666] leading-relaxed mb-5 font-normal">
                  {activeProduct.description}
                </p>

                {/* Concrete Supporting Notes */}
                <div className="pt-3.5 border-t border-black/[0.06] space-y-2 text-[12px] sm:text-[13px]">
                  <div className="flex items-start gap-2 text-[#222]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{activeProduct.beforeAfterSummary}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#666]">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 flex-shrink-0" />
                    <span>{activeProduct.supportingLine}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href={activeProduct.linkHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 text-[13px] font-semibold transition-all group/btn shadow-xs"
                >
                  <span>{activeProduct.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column (Photo with Telemetry Overlay) */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-zinc-100 border-t lg:border-t-0 lg:border-l border-black/[0.06] overflow-hidden">
              <Image
                src={activeProduct.mediaSrc}
                alt={activeProduct.name}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-md text-xs font-mono text-[#111] flex items-center justify-between">
                <span className="font-semibold">{activeProduct.name} Telemetry</span>
                <span className="text-emerald-700 font-bold">{activeProduct.metricValue}</span>
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
