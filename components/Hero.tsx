"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Star, 
  Mic, 
  LayoutGrid, 
  Shield, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Award, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Zap, 
  Server,
  Briefcase,
  Clock,
  Globe2,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDemo: (product?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Hero({ onOpenDemo, onSelectProduct }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative pt-32 pb-6 md:pt-36 md:pb-10 overflow-hidden bg-slate-50/60 border-b border-slate-200/80">
      {/* Ambient background glow & grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[360px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[320px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px] relative z-10">
        
        {/* 2-Column Hero Grid: Left = StartoTech Overview & Project Stats, Right = Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-8">
          
          {/* LEFT SIDE: StartoTech Overview & Value Propositions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Top Sub-heading Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shadow-sm shadow-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                StartoTech Enterprise Platform
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Autonomous OS v2.4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-[4.2rem] font-black text-slate-900 tracking-tight uppercase leading-[1.08] text-left">
              Architecting The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900">
                Autonomous
              </span>{" "}
              Enterprise
            </h1>

            {/* Deep Overview Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-left">
              <strong className="text-slate-900 font-semibold">StartoTech</strong> unites conversational voice AI, multi-tenant cloud workspaces, autonomous task orchestration, and machine-speed legal auditing into one unified corporate nervous system.
            </p>

            {/* Feature Highlights Checklist */}
            <div className="space-y-3 pt-1 text-left">
              {[
                { title: "Sub-280ms Voice Telephony", desc: "Real-time AI voice qualification connected directly to your pipeline." },
                { title: "Multi-Entity Cloud Ledger", desc: "Automated billing, reconciliation, and team workspace management." },
                { title: "Autonomous Contract Auditing", desc: "4-second MSA compliance analysis and automatic redline generation." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 mr-1.5">{item.title}:</span>
                    <span className="text-xs sm:text-sm text-slate-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Delivery & Operations Stats Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Completed</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">280+</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Projects Delivered</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase text-amber-700 font-bold">Ongoing</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">42+</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Active In-Flight</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Clients</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">150+</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Global Enterprises</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-bold">Success</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">99.9%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">On-Time SLA</div>
              </div>
            </div>

            {/* Action Buttons & Rating Row */}
            <div className="pt-2 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenDemo("StartoTech Suite")}
                  className="redstone-btn"
                >
                  <span>Request Live Sandbox</span>
                  <div className="btn-icon-circle">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>

                <Link href="/portfolio">
                  <div className="redstone-btn-secondary cursor-pointer">
                    <span>Explore Architecture</span>
                    <div className="btn-icon-circle">
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Trust & Enterprise Rating Indicator */}
              <div className="flex items-center gap-6 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="font-extrabold text-slate-900 text-xs ml-1">5.0 / 5.0</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Audited by Tier-1 Enterprise Institutions
                    </div>
                  </div>
                </div>

                <div className="h-7 w-[1px] bg-slate-200 hidden sm:block" />

                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900">SOC-2 Type II Certified</span>
                  <span className="text-[11px] text-slate-500">Carrier-Grade 99.99% SLA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Video Showcase & Live Telemetry Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Container with Glow and Glass Border */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-3 sm:p-4 shadow-xl overflow-hidden group">
              
              {/* Radial Light Accent behind the card */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Video Window Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 mb-2 bg-slate-100/90 rounded-2xl border border-slate-200/70">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-700 ml-2">
                    startotech-core-runtime.mp4
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-[10px] font-mono font-bold text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                    LIVE 60FPS
                  </span>
                </div>
              </div>

              {/* Video Media Box */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/validsoft.mp4" type="video/mp4" />
                </video>

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top-Right Floating Live Audio/Mute & Play Controls */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Bottom-Left Floating Telemetry Badge */}
                <div className="absolute bottom-3 left-3 z-20 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 max-w-[240px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-white">StartoTech Live Sync</span>
                  </div>
                  <p className="text-[10px] text-slate-300 font-mono leading-tight">
                    Multi-Tenant Workspace & Voice Pipeline Active
                  </p>
                </div>
              </div>

              {/* Bottom Telemetry Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-mono text-slate-500 font-medium">Node Latency</div>
                  <div className="text-sm font-black text-slate-900">&lt; 280ms</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-mono text-slate-500 font-medium">Ledger Status</div>
                  <div className="text-sm font-black text-emerald-600">100% Real-Time</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs font-mono text-slate-500 font-medium">Cloud Clusters</div>
                  <div className="text-sm font-black text-slate-900">38 Edge Nodes</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 3 Product Interactive Switch Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto p-2 bg-white border border-slate-200/90 rounded-2xl shadow-lg mb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Zobay Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-slate-50/80 hover:bg-purple-50/50 border border-slate-200/70 hover:border-purple-300 transition-all duration-200 text-left cursor-pointer group h-full shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-900 text-base group-hover:text-purple-700">Zobay</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                    Voice AI
                  </span>
                </div>
                <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed">
                  Autonomous conversational phone agents & CRM syncing.
                </p>
              </motion.div>
            </Link>

            {/* StartOne Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-slate-50/80 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 transition-all duration-200 text-left cursor-pointer group h-full shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-900 text-base group-hover:text-emerald-700">StartOne</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Enterprise OS
                  </span>
                </div>
                <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed">
                  Unified business ops, multi-org accounting & team spaces.
                </p>
              </motion.div>
            </Link>

            {/* LegalX Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-slate-50/80 hover:bg-amber-50/50 border border-slate-200/70 hover:border-amber-300 transition-all duration-200 text-left cursor-pointer group h-full shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-900 text-base group-hover:text-amber-700">LegalX</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Legal Tech
                  </span>
                </div>
                <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed">
                  AI risk audits, contract redlining & governance analysis.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
