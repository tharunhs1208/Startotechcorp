"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Sparkles, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { renderProductMockup } from "@/components/ui-mockups/ProductUIMockups";

interface HeroShowcaseItem {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  href: string;
  bgGradient: string;
  image: string;
  department: string;
}

const SHOWCASE_ITEMS: HeroShowcaseItem[] = [
  {
    id: "salesx",
    badge: "01 / SALES PLATFORM",
    name: "SalesX CRM",
    tagline: "Autonomous Inbound Triage & Revenue Acceleration",
    metric: "< 5 mins",
    metricLabel: "Lead Response Time",
    href: "/products/salesx",
    bgGradient: "from-zinc-900 to-black",
    image: "/images/products/salesx_custom.jpg",
    department: "Revenue Operations",
  },
  {
    id: "zobay",
    badge: "02 / VOICE AI ENGINE",
    name: "Zobay Voice",
    tagline: "Sub-140ms Acoustic Turn-Taking Telephony",
    metric: "140ms",
    metricLabel: "Acoustic Speech Latency",
    href: "/projects/zobay-voice-ai",
    bgGradient: "from-zinc-900 to-black",
    image: "/images/products/zobay_custom.jpg",
    department: "Enterprise Telephony",
  },
  {
    id: "meetingx",
    badge: "03 / SPATIAL WEBRTC",
    name: "MeetingX",
    tagline: "Low-Latency 4K Spatial Video Rooms & Live Diarization",
    metric: "38ms",
    metricLabel: "SFU Round-Trip",
    href: "/products/meetingx",
    bgGradient: "from-zinc-900 to-black",
    image: "/images/products/meetingx_pinterest.jpg",
    department: "Collaboration",
  },
];

export default function MarinoEditorialHero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"ui" | "visual">("ui");

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [selectedIndex]);

  const currentItem = SHOWCASE_ITEMS[selectedIndex];

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#F3F3F3]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Top Studio Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#82FFCD] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold tracking-widest text-black uppercase">
              STRATOTECH STUDIO · BENGALURU
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[12px] font-mono text-[#555555]">
            <span>SYSTEMS ARCHITECTURE</span>
            <span>·</span>
            <span>DIGITAL PRODUCTS</span>
            <span>·</span>
            <span>VOICE AI</span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl mb-8 sm:mb-12">
          <h1 className="text-[10vw] sm:text-[7vw] lg:text-[72px] font-display font-extrabold tracking-[-0.035em] text-[#000000] leading-[0.98] uppercase">
            WE BUILD DIGITAL <br className="hidden sm:inline" />
            PRODUCTS <span className="amp font-normal italic lowercase text-black/60">&amp;</span> SYSTEMS.
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
            <p className="text-base sm:text-xl text-[#444444] font-normal leading-relaxed max-w-xl">
              We engineer mission-critical digital products, autonomous telephony agents, and high-throughput enterprise software built around real operational requirements.
            </p>

            {/* CTAs matching Marino Pill Design */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/products"
                className="btn-marino"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black bg-transparent text-black text-[13px] font-semibold hover:bg-black hover:text-white transition-all duration-350"
              >
                <span>Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── CINEMATIC PRODUCT SHOWCASE STAGE ── */}
        <div className="mt-10 sm:mt-14 bg-black text-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-black/[0.1] shadow-2xl">
          {/* Stage Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-7 border-b border-white/10 bg-zinc-950">
            {/* Interactive Product Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
              {SHOWCASE_ITEMS.map((item, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold font-mono tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#82FFCD] text-black shadow-xs"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Stage Mode Switcher (Interactive Console UI vs Real Interface Mockup) */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="flex items-center bg-white/10 p-1 rounded-full text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab("ui")}
                  className={`px-3 py-1 rounded-full font-semibold transition-all ${
                    activeTab === "ui" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Live Console
                </button>
                <button
                  onClick={() => setActiveTab("visual")}
                  className={`px-3 py-1 rounded-full font-semibold transition-all ${
                    activeTab === "visual" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Product UI
                </button>
              </div>
            </div>
          </div>

          {/* Main Showcase Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px] bg-zinc-950">
            {/* Left Detail Rail */}
            <div className="lg:col-span-4 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#82FFCD] tracking-widest uppercase block mb-3 font-semibold">
                  {currentItem.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
                  {currentItem.name}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-zinc-400 leading-relaxed font-normal mb-6">
                  {currentItem.tagline}
                </p>

                {/* Metric Box */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    {currentItem.metricLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#82FFCD]">
                    {currentItem.metric}
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  href={currentItem.href}
                  className="btn-marino w-full sm:w-auto"
                >
                  <span>Open {currentItem.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Viewport */}
            <div className="lg:col-span-8 relative p-4 sm:p-8 flex items-center justify-center overflow-hidden bg-black/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentItem.id}-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center relative rounded-2xl overflow-hidden border border-white/10"
                >
                  {activeTab === "ui" ? (
                    <div className="w-full h-full p-2 sm:p-4 bg-zinc-950/80">
                      {renderProductMockup(currentItem.id, true)}
                    </div>
                  ) : (
                    <div className="w-full h-full relative">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.name}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white flex items-center justify-between">
                        <span>Production Interface</span>
                        <span className="text-[#82FFCD] font-bold">Live 2026 Engine</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
