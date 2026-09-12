"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Mic, LayoutGrid, Shield, Sparkles, Play, Pause, Award } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDemo: (product?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Hero({ onOpenDemo, onSelectProduct }: HeroProps) {
  const [capsulePlaying, setCapsulePlaying] = useState(true);

  const scrollToProducts = () => {
    const el = document.getElementById("products-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Ambient background grid pattern & red/indigo glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#e70000]/15 blur-[140px] rounded-full pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Redstone-style Top Sub-heading Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-[#e70000]/40 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
              FortuneTechCorp Flagship Ecosystem
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-xs font-medium text-gray-400">
              Autonomous Infrastructure
            </span>
          </div>
        </motion.div>

        {/* Redstone Iconic Giant Kinetic Headline with Inline Media Capsule */}
        <div className="text-center max-w-6xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black text-white tracking-tight uppercase leading-[1.08] sm:leading-[1.05]"
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              VOICE.
            </motion.span>{" "}
            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              OS.
            </motion.span>
            
            {/* Embedded Redstone Video Capsule Pill with real video stream */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="headline-capsule inline-flex items-center justify-center group cursor-pointer align-middle select-none mx-2 sm:mx-3 border-2 border-white/20 hover:border-[#e70000] transition-colors shadow-lg shadow-[#e70000]/20 relative overflow-hidden"
            >
              {/* Background Video Simulation with Redstone stream */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
              >
                <source
                  src="https://redstone.software/video/video-banner4.mp4"
                  type="video/mp4"
                />
              </video>
              
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-purple-950/40 to-black/60 pointer-events-none" />

              {/* Live interactive audio visualizer overlay */}
              <div className="relative z-10 flex items-center gap-1 sm:gap-1.5 px-3">
                {[24, 48, 75, 40, 90, 55, 30, 70, 35, 60, 25].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-[#e70000] to-white transition-all duration-300 shadow-[0_0_8px_#e70000]"
                    style={{
                      height: capsulePlaying ? `${h}px` : "8px",
                      maxHeight: "34px",
                      animation: capsulePlaying ? `pulse 1.2s ease-in-out ${i * 0.1}s infinite alternate` : "none",
                    }}
                  />
                ))}
              </div>

              {/* Play / Pause toggle badge overlay */}
              <button
                type="button"
                onClick={() => setCapsulePlaying(!capsulePlaying)}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold"
                aria-label="Toggle visualizer"
              >
                {capsulePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
            </motion.span>

            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              AI.
            </motion.span>{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              LEGAL TECH.
            </span>
          </motion.h1>
        </div>

        {/* Clean Redstone Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-gray-400 max-w-3xl mx-auto text-center font-normal leading-relaxed mb-12"
        >
          FortuneTechCorp pioneers high-velocity autonomous infrastructure. Seamlessly orchestrate{" "}
          <strong className="text-white font-semibold">Zobay Voice AI</strong>,{" "}
          <strong className="text-white font-semibold">StartOne Enterprise OS</strong>, and{" "}
          <strong className="text-white font-semibold">LegalX Contract Intelligence</strong> under one roof.
        </motion.p>

        {/* Redstone Bottom Content Bar: Trust badges + 5.0 Star Rating + CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
        >
          {/* Left: Rating & Trust */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-white text-sm ml-1.5">5.0</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  Trusted by 150+ Enterprise Clients
                </div>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-white font-bold text-sm">Fortune 500 Ready</span>
              <span className="text-xs text-gray-400">SOC-2 Type II Certified</span>
            </div>
          </div>

          {/* Right: Redstone Signature CTA Pills */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="redstone-btn-secondary cursor-pointer"
              >
                <span>Explore 3 Products</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </Link>

            <Link href="/contacts">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="redstone-btn cursor-pointer"
              >
                <span>Let's talk</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* 3 Product Interactive Switch Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto p-2 bg-[#12141d]/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Zobay Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 transition-all duration-200 text-left cursor-pointer group h-full"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-white text-base group-hover:text-purple-300">Zobay</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                    Voice AI
                  </span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  Autonomous conversational phone agents & CRM syncing.
                </p>
              </motion.div>
            </Link>

            {/* StartOne Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all duration-200 text-left cursor-pointer group h-full"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-white text-base group-hover:text-emerald-300">StartOne</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    Enterprise OS
                  </span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  Unified business ops, multi-org accounting & team spaces.
                </p>
              </motion.div>
            </Link>

            {/* LegalX Switch */}
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30 transition-all duration-200 text-left cursor-pointer group h-full"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-white text-base group-hover:text-amber-300">LegalX</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                    Legal Tech
                  </span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  AI risk audits, contract redlining & governance analysis.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Global SLA Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="text-3xl font-black text-white">99.99%</div>
            <div className="text-xs text-gray-400 font-medium mt-0.5">High-Availability SLA</div>
          </div>
          <div>
            <div className="text-3xl font-black text-purple-400">&lt; 280ms</div>
            <div className="text-xs text-gray-400 font-medium mt-0.5">Zobay Audio Latency</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">$120M+</div>
            <div className="text-xs text-gray-400 font-medium mt-0.5">StartOne Ledger Volume</div>
          </div>
          <div>
            <div className="text-3xl font-black text-amber-400">10x Speed</div>
            <div className="text-xs text-gray-400 font-medium mt-0.5">LegalX Redlines</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

