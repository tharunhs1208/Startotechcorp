"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { MoreVertical } from "lucide-react";
import { TechIcon } from "@/components/TechBadge";

interface FloatingTechNode {
  name: string;
  positionClass: string;
  yAnim: number[];
  duration: number;
  delay: number;
}

const FLOATING_TECH_NODES: FloatingTechNode[] = [
  // Top Left: Next.js
  {
    name: "Next.js",
    positionClass: "top-[4%] left-[10%] sm:top-[6%] sm:left-[14%] lg:left-[16%]",
    yAnim: [-4, 4, -4],
    duration: 4.5,
    delay: 0,
  },
  // Top Right: TypeScript
  {
    name: "TypeScript",
    positionClass: "top-[4%] right-[10%] sm:top-[6%] sm:right-[14%] lg:right-[16%]",
    yAnim: [5, -5, 5],
    duration: 5,
    delay: 0.4,
  },
  // Mid Left: React
  {
    name: "React",
    positionClass: "top-1/2 -translate-y-1/2 left-[2%] sm:left-[4%] lg:left-[6%]",
    yAnim: [-5, 5, -5],
    duration: 5.2,
    delay: 0.8,
  },
  // Mid Right: AWS
  {
    name: "AWS",
    positionClass: "top-1/2 -translate-y-1/2 right-[2%] sm:right-[4%] lg:right-[6%]",
    yAnim: [-5, 5, -5],
    duration: 5.5,
    delay: 0.6,
  },
  // Lower Left: Python
  {
    name: "Python",
    positionClass: "bottom-[6%] left-[12%] sm:bottom-[8%] sm:left-[16%] lg:left-[18%]",
    yAnim: [4, -4, 4],
    duration: 4.8,
    delay: 0.2,
  },
  // Lower Right: Docker
  {
    name: "Docker",
    positionClass: "bottom-[6%] right-[12%] sm:bottom-[8%] sm:right-[16%] lg:right-[18%]",
    yAnim: [4, -4, 4],
    duration: 4.2,
    delay: 0.9,
  },
  // Bottom Left: Node.js (Tablet & Desktop)
  {
    name: "Node.js",
    positionClass: "hidden sm:flex -bottom-2 left-[28%] lg:left-[30%]",
    yAnim: [5, -5, 5],
    duration: 5.1,
    delay: 0.7,
  },
  // Bottom Right: PostgreSQL (Tablet & Desktop)
  {
    name: "PostgreSQL",
    positionClass: "hidden sm:flex -bottom-2 right-[28%] lg:right-[30%]",
    yAnim: [-4, 4, -4],
    duration: 4.6,
    delay: 0.3,
  },
];

export default function OrbitalHero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Cycle the floating card stack slightly every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pt-16 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-28 bg-[#ffffff] text-[#111111] overflow-hidden selection:bg-black selection:text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10 w-full">
        
        {/* ── 1. CENTER HERO HEADLINE ─────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto pt-4 sm:pt-6 px-2 sm:px-0 relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-6xl md:text-[64px] font-display font-semibold tracking-[-0.03em] text-[#111111] leading-[1.12] sm:leading-[1.08]"
          >
            Software built for<br />
            strategic growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-[#666666] font-normal leading-relaxed max-w-xl mx-auto"
          >
            We design, engineer, and deploy high-performance digital products and intelligent workflows that turn complex business operations into scalable software.
          </motion.p>
        </div>

        {/* ── 2. ORBITAL HERO STAGE (Concentric Rings + Floating Tech Badges + Cards) ── */}
        <div className="relative my-8 sm:my-12 max-w-2xl mx-auto flex items-center justify-center min-h-[340px] sm:min-h-[460px] lg:min-h-[500px]">
          
          {/* Concentric Rings Background (Framed around cards and badges) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Ring 1 (Inner) */}
            <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border border-black/[0.06]" />
            
            {/* Ring 2 (Middle) */}
            <div className="absolute w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] lg:w-[640px] lg:h-[640px] rounded-full border border-black/[0.05]" />

            {/* Ring 3 (Outer - The Last Circle) */}
            <div className="absolute w-[440px] h-[440px] sm:w-[700px] sm:h-[700px] lg:w-[820px] lg:h-[820px] rounded-full border border-black/[0.04]" />

            {/* Partial Arc Accents */}
            <svg className="absolute w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] lg:w-[640px] lg:h-[640px] pointer-events-none opacity-40">
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                stroke="url(#arcGradient1)"
                strokeWidth="1.5"
                strokeDasharray="100 600"
                strokeDashoffset="140"
              />
              <circle
                cx="50%"
                cy="50%"
                r="34%"
                fill="none"
                stroke="url(#arcGradient2)"
                strokeWidth="1.5"
                strokeDasharray="70 450"
                strokeDashoffset="35"
              />
              <defs>
                <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="arcGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Center Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[420px] h-[160px] sm:h-[240px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.15),rgba(147,197,253,0.08),transparent_70%)] blur-2xl pointer-events-none" />
          </div>

          {/* Floating Tech Badges on the Orbit */}
          {FLOATING_TECH_NODES.map((node) => (
            <motion.div
              key={node.name}
              animate={shouldReduceMotion ? {} : { y: node.yAnim }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
              className={`absolute ${node.positionClass} flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] sm:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-black/[0.08] hover:scale-110 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer group z-30`}
              title={node.name}
            >
              <TechIcon name={node.name} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:block absolute -bottom-7 scale-0 group-hover:scale-100 transition-all text-[11px] font-mono bg-black text-white px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap shadow-sm z-50">
                {node.name}
              </span>
            </motion.div>
          ))}

          {/* Central Stacked Product Cards */}
          <div className="relative w-full max-w-[90%] sm:max-w-md mx-auto h-[170px] sm:h-[190px] flex items-center justify-center z-20">
            {/* Card 3 (MeetingX) */}
            <motion.div
              animate={{
                y: activeCardIndex === 2 ? 0 : 24,
                scale: activeCardIndex === 2 ? 1 : 0.92,
                opacity: activeCardIndex === 2 ? 1 : 0.6,
                zIndex: activeCardIndex === 2 ? 30 : 10,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-xl flex items-center gap-3 sm:gap-3.5"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 flex-shrink-0">
                MX
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#111]">MeetingX Video Room</span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded">38ms RTT</span>
                </div>
                <p className="text-[11px] sm:text-[12px] text-[#666] truncate mt-0.5">
                  Encrypted canvas sync &amp; live AI transcript active
                </p>
              </div>
            </motion.div>

            {/* Card 2 (Zobay Voice) */}
            <motion.div
              animate={{
                y: activeCardIndex === 1 ? 0 : activeCardIndex === 0 ? 12 : 24,
                scale: activeCardIndex === 1 ? 1 : activeCardIndex === 0 ? 0.96 : 0.92,
                opacity: activeCardIndex === 1 ? 1 : activeCardIndex === 0 ? 0.85 : 0.6,
                zIndex: activeCardIndex === 1 ? 30 : 20,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl flex items-center justify-between gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    ZB
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-[13px] font-semibold text-[#111]">Zobay Voice Agent</span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">&lt;280ms</span>
                  </div>
                  <span className="text-[11px] sm:text-[12px] text-[#777] block mt-0.5 truncate">
                    Qualified inbound inquiry &middot; <span className="text-[#3b82f6]">Calendar Synced</span>
                  </span>
                </div>
              </div>
              <button className="text-zinc-400 hover:text-zinc-700 p-1 shrink-0">
                <MoreVertical className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Card 1 (SalesX) */}
            <motion.div
              animate={{
                y: activeCardIndex === 0 ? 0 : activeCardIndex === 1 ? -12 : 0,
                scale: activeCardIndex === 0 ? 1 : 0.96,
                opacity: activeCardIndex === 0 ? 1 : 0.85,
                zIndex: activeCardIndex === 0 ? 30 : 10,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_20px_48px_rgba(0,0,0,0.10)] backdrop-blur-2xl flex items-center gap-3 sm:gap-3.5 cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                  SX
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold border-2 border-white">
                  ✓
                </span>
              </div>
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#111]">SalesX</span>
                  <span className="text-[12px] sm:text-[13px] text-[#555] truncate">routed Lead to</span>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#111]">Tier-1 AE</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#888] block mt-0.5 truncate">
                  First response under 5 minutes &middot; CRM Synced
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── 3. TRUSTED PROOF & LOGOS (Comes cleanly AFTER the last circle) ── */}
        <div className="mt-4 sm:mt-10 text-center relative z-20">
          <p className="text-xs font-medium text-[#888888] tracking-wide mb-6 sm:mb-8">
            Trusted by 200,000+ users worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-display font-semibold text-base sm:text-xl text-[#555] tracking-tight">
              Google
            </span>
            <span className="font-sans font-bold text-base sm:text-xl text-[#555] tracking-tighter">
              airbnb
            </span>
            <span className="font-sans font-bold text-sm sm:text-lg text-[#555] tracking-tight">
              coinbase
            </span>
            <div className="flex items-center gap-1.5 font-bold text-sm sm:text-lg text-[#555]">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-[#555] flex items-center justify-center text-[10px] sm:text-xs">N</span>
              <span>Notion</span>
            </div>
            <span className="font-mono font-bold text-sm sm:text-lg text-[#555] tracking-wider">
              GUMROAD
            </span>
            <span className="font-sans font-bold italic text-base sm:text-xl text-[#555]">
              PayPal
            </span>
            <span className="font-sans font-bold text-base sm:text-xl text-[#555] lowercase tracking-tight">
              upwork
            </span>
            <span className="font-sans font-bold text-sm sm:text-lg text-[#555]">
              shopify
            </span>
            <span className="font-sans font-bold text-base sm:text-xl text-[#555]">
              stripe
            </span>
            <span className="font-sans font-bold text-base sm:text-xl text-[#555]">
              zoom
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
