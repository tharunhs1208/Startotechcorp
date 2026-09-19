"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Mic,
  Video,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Activity,
  Zap,
  Globe2,
} from "lucide-react";
import StartProjectButton from "@/components/StartProjectButton";

type HeroPlatformId = "salesx" | "zobay" | "meetingx";

interface HeroPlatform {
  id: HeroPlatformId;
  name: string;
  tag: string;
  badge: string;
  headline: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  linkHref: string;
  icon: React.ElementType;
}

const HERO_PLATFORMS: HeroPlatform[] = [
  {
    id: "salesx",
    name: "SalesX",
    tag: "Sales Automation",
    badge: "<500ms Lead Routing",
    headline: "Automated Inbound Triage & Pipeline Velocity",
    description: "Routes incoming inbound leads directly to account executives based on territory and company size, then triggers follow-up cadences without spreadsheet triage.",
    metricLabel: "Response Latency",
    metricValue: "< 5 mins",
    linkHref: "/products/salesx",
    icon: TrendingUp,
  },
  {
    id: "zobay",
    name: "Zobay Voice AI",
    tag: "Conversational AI",
    badge: "Sub-280ms Acoustic Turn-Taking",
    headline: "Zero-Latency Telephony & Appointment Engine",
    description: "Answers customer phone calls and qualifies inbound inquiries with fluid speech pacing that adapts to caller interruptions and writes structured CRM notes.",
    metricLabel: "Turn-Taking Speed",
    metricValue: "238ms",
    linkHref: "/projects/zobay-voice-ai",
    icon: Mic,
  },
  {
    id: "meetingx",
    name: "MeetingX",
    tag: "Real-Time Video",
    badge: "Sub-50ms Global SFU",
    headline: "Browser-Based Video Collaboration & Synthesis",
    description: "Multi-participant video collaboration with adaptive selective forwarding, real-time shared canvases, and automated live transcript synthesis.",
    metricLabel: "Global Round-Trip",
    metricValue: "38ms",
    linkHref: "/products/meetingx",
    icon: Video,
  },
];

export default function ModernHero() {
  const [activePlatform, setActivePlatform] = useState<HeroPlatformId>("salesx");
  const [audioWaveKey, setAudioWaveKey] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Subtle wave pulse cycle for voice AI preview
  useEffect(() => {
    const timer = setInterval(() => {
      setAudioWaveKey((prev) => prev + 1);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_PLATFORMS.find((p) => p.id === activePlatform) || HERO_PLATFORMS[0];

  return (
    <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* ── 1. AMBIENT BACKGROUND (Fine Blueprint Grid & Refractive Aura) ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Fine Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Soft Luminous Aurora Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.12),rgba(59,130,246,0.05),transparent_70%)] blur-3xl opacity-80" />
      </div>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* ── 2. EDITORIAL INTRO & HEADLINE ────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Live Studio Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-[12px] font-mono text-[#1d1d1f] mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[#6e6e73]">Studio &middot; Bengaluru</span>
            <span className="text-black/20">/</span>
            <span className="font-semibold text-[#111]">Engineering Scalable Systems</span>
          </motion.div>

          {/* Master Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-medium tracking-[-0.035em] text-[#111111] leading-[1.04]"
          >
            Strategic Clarity.<br />
            <span className="text-[#6e6e73] font-normal">Sustainable Growth.</span>
          </motion.h1>

          {/* Punchy Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We help ambitious businesses refine strategy, strengthen operations, and scale with confidence through data-driven consulting and practical digital execution.
          </motion.p>

          {/* Primary Action Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <StartProjectButton
              size="lg"
              text="Book a Strategy Call"
              href="/contact"
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] hover:border-black/25 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] group cursor-pointer"
            >
              <span>Explore Platform Suite</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* ── 3. INTERACTIVE HERO PRODUCT CONSOLE (2026 Modern Stage) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-18"
        >
          <div className="bg-white border border-black/[0.09] rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.07)] overflow-hidden transition-all duration-300 hover:border-black/25">
            {/* Console Navigation Header */}
            <div className="px-5 sm:px-7 py-3.5 bg-[#fafafa] border-b border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
              {/* Interactive Platform Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
                {HERO_PLATFORMS.map((platform) => {
                  const isActive = activePlatform === platform.id;
                  const Icon = platform.icon;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => setActivePlatform(platform.id)}
                      className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? "text-[#111111] font-semibold"
                          : "text-[#6e6e73] hover:text-[#111111] hover:bg-black/[0.03]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroPlatformTab"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          className="absolute inset-0 bg-white border border-black/[0.08] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] -z-10"
                        />
                      )}
                      <Icon className="w-3.5 h-3.5" />
                      <span>{platform.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Real-time Telemetry Status Bar */}
              <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Edge: Bengaluru / Mumbai</span>
                </span>
                <span className="text-black/15">|</span>
                <span className="font-semibold text-[#111]">{current.badge}</span>
              </div>
            </div>

            {/* Console Stage Body Grid */}
            <div className="p-6 sm:p-9 lg:p-11 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[380px]">
              {/* Left Column: Synchronized Product Synopsis */}
              <div className="lg:col-span-6 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] uppercase tracking-wider">
                      <span className="font-semibold text-[#111]">{current.tag}</span>
                      <span>·</span>
                      <span>Production Verified</span>
                      <span>·</span>
                      <span>2026</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight">
                      {current.headline}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal">
                      {current.description}
                    </p>

                    {/* Key Metric Indicator Card */}
                    <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#86868b] uppercase block">
                          {current.metricLabel}
                        </span>
                        <span className="text-xl sm:text-2xl font-mono font-semibold text-[#111]">
                          {current.metricValue}
                        </span>
                      </div>

                      <Link
                        href={current.linkHref}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 border border-black/[0.06] text-[13px] font-medium text-[#111111] transition-colors group/btn"
                      >
                        <span>Inspect Platform</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Live Interactive Interactive Simulation Stage */}
              <div className="lg:col-span-6 bg-zinc-950 text-white rounded-xl p-6 sm:p-7 border border-black/10 overflow-hidden relative min-h-[300px] flex flex-col justify-between shadow-inner">
                {/* Visual Canvas Content Switcher */}
                <AnimatePresence mode="wait">
                  {activePlatform === "salesx" && (
                    <motion.div
                      key="preview-salesx"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-2 text-emerald-400">
                          <Activity className="w-3.5 h-3.5 animate-pulse" />
                          <span>Inbound Stream Active</span>
                        </span>
                        <span>Routing Rule: Tier-1 Enterprise</span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-zinc-100 block">Acme Corp ($48k ACV)</span>
                            <span className="text-[11px] text-zinc-400 font-mono">Territory: US-East · 450 seats</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                            Auto-Allocated in 320ms
                          </span>
                        </div>

                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-zinc-100 block">Nordic Fintech ($90k ACV)</span>
                            <span className="text-[11px] text-zinc-400 font-mono">Territory: EU-Central · 1,200 seats</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-mono">
                            Follow-Up Scheduled
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5 text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Salesforce &amp; HubSpot Synced</span>
                        </span>
                        <span>0 lost leads</span>
                      </div>
                    </motion.div>
                  )}

                  {activePlatform === "zobay" && (
                    <motion.div
                      key="preview-zobay"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-2 text-emerald-400">
                          <Mic className="w-3.5 h-3.5" />
                          <span>Neural Acoustic Stream</span>
                        </span>
                        <span className="text-emerald-400">238ms Turn-Taking</span>
                      </div>

                      {/* Interactive Audio Wave Visualizer */}
                      <div className="py-4 flex items-center justify-center gap-1.5 h-20 bg-white/5 rounded-lg border border-white/10 px-4">
                        {[16, 32, 48, 24, 60, 42, 20, 56, 38, 18, 44, 28, 52, 34, 16].map((h, i) => (
                          <motion.span
                            key={`${audioWaveKey}-${i}`}
                            animate={{
                              height: [h * 0.4, h, h * 0.5],
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: i * 0.05,
                            }}
                            className="w-1.5 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>

                      <div className="p-2.5 bg-black/40 rounded-lg text-xs text-zinc-300 font-mono space-y-1">
                        <div className="text-zinc-500 text-[10px]">LIVE TRANSCRIPTION NOTE:</div>
                        <div>&ldquo;Confirmed product walkthrough for Thursday 3:00 PM EST with CTO.&rdquo;</div>
                      </div>
                    </motion.div>
                  )}

                  {activePlatform === "meetingx" && (
                    <motion.div
                      key="preview-meetingx"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-2 text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>E2E Encrypted Room</span>
                        </span>
                        <span>SFU Mesh: 38ms RTT</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex flex-col justify-between min-h-[70px]">
                          <span className="text-xs font-semibold text-zinc-200">Alex Rivera (Lead)</span>
                          <span className="text-[10px] font-mono text-emerald-400">● Speaking · 48kHz</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex flex-col justify-between min-h-[70px]">
                          <span className="text-xs font-semibold text-zinc-200">Elena Rostova</span>
                          <span className="text-[10px] font-mono text-zinc-400">1080p @ 60fps</span>
                        </div>
                      </div>

                      <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-300 flex items-center justify-between font-mono">
                        <span>Automated Minutes Engine</span>
                        <span className="text-[10px]">Instant Slack Dispatch</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Edge Node Badges */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>Architecture: Edge SFU + Next.js</span>
                  <span>Uptime: 99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 4. PROOF METRICS BAR ─────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <span className="text-2xl sm:text-3xl font-mono font-semibold text-[#111] block">
              &lt;280ms
            </span>
            <span className="text-[13px] text-[#6e6e73] font-normal">
              Neural acoustic voice latency
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-mono font-semibold text-[#111] block">
              38ms
            </span>
            <span className="text-[13px] text-[#6e6e73] font-normal">
              Median global WebRTC RTT
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-mono font-semibold text-[#111] block">
              100%
            </span>
            <span className="text-[13px] text-[#6e6e73] font-normal">
              TypeScript &amp; API contract safety
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-mono font-semibold text-[#111] block">
              2-Week
            </span>
            <span className="text-[13px] text-[#6e6e73] font-normal">
              Continuous sprint ship cadence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
