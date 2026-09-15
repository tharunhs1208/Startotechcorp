"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Play, Volume2, VolumeX, Shield, Cpu, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"startone" | "zobay" | "legalx">("startone");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const productPreviews = {
    startone: {
      name: "StartOne Cloud OS",
      tag: "Enterprise Workspace v4.2",
      video: "/videos/startone.mp4",
      metric: "-64% SaaS Overhead",
      desc: "Unified multi-tenant accounting, execution pipelines & permissions.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    zobay: {
      name: "Zobay Voice AI",
      tag: "Conversational Phone AI",
      video: "/videos/zobay.mp4",
      metric: "Sub-280ms Latency",
      desc: "Autonomous voice agents with human emotion cadence & CRM synchronization.",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    legalx: {
      name: "LegalX Contract AI",
      tag: "Autonomous Compliance",
      video: "/videos/legalx.mp4",
      metric: "10x Audit Speed",
      desc: "Instant 50+ clause risk audits, playbook redlines & zero-leakage compliance.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
  };

  const current = productPreviews[activeTab];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP EYEBROW WITH IN/OUT SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Modern Enterprise Software &amp; AI Engineering</span>
          </div>
        </motion.div>

        {/* MAIN 2-COLUMN HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* LEFT: HEADLINE, DESCRIPTION, ACTION CTAS (SCROLL IN & OUT) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-[1.06]">
              Build Better. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                Grow Faster.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              We help businesses transform their ideas into powerful digital products, scalable cloud architectures, and autonomous AI experiences with guaranteed velocity.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-7 py-4"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="btn-secondary text-sm sm:text-base px-7 py-4"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* TRUST STATS ROW */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">150+</div>
                <div className="text-xs text-slate-500 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-blue-600">99.99%</div>
                <div className="text-xs text-slate-500 font-medium">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">SOC-2</div>
                <div className="text-xs text-slate-500 font-medium">AICPA Certified</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: INTERACTIVE HD VIDEO & DEVICE SHOWCASE (SCROLL IN & OUT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* PRODUCT SWITCHER TABS */}
            <div className="flex items-center justify-start gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl mb-4 w-fit shadow-inner">
              {(["startone", "zobay", "legalx"] as const).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tabKey
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {productPreviews[tabKey].name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* MAIN VIDEO SHOWCASE DEVICE CARD */}
            <div className="relative rounded-3xl bg-slate-950 border border-slate-200/80 shadow-2xl overflow-hidden group">
              
              {/* VIDEO HEADER BAR */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono font-bold text-slate-300 ml-2">
                    {current.name} • <span className="text-blue-400 font-normal">{current.tag}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Live Production
                  </span>
                </div>
              </div>

              {/* HD VIDEO CONTAINER */}
              <div className="relative h-[300px] sm:h-[360px] w-full bg-slate-950 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={current.video}
                    ref={videoRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover object-center"
                  >
                    <source src={current.video} type="video/mp4" />
                  </motion.video>
                </AnimatePresence>

                {/* Subtle Ambient Video Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* FLOATING FROSTED METRIC BADGE ON VIDEO */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-xs font-bold text-slate-900 shadow-xl flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{current.metric}</span>
                </motion.div>

                {/* BOTTOM OVERLAY INFO */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div className="text-left max-w-sm">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      {current.name}
                    </div>
                    <div className="text-[11px] text-slate-300 leading-snug mt-0.5 line-clamp-1">
                      {current.desc}
                    </div>
                  </div>

                  {/* SOUND TOGGLE */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                    title={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>
              </div>

            </div>

            {/* FLOATING BOTTOM STAT CHIP (SCROLL ANIMATED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-between text-xs text-slate-700"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900">38 Sovereign Edge Clusters</span>
                  <span className="text-slate-400 ml-1.5">• 2.4 Tbps Mesh Throughput</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md font-mono">
                18.4ms
              </span>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
