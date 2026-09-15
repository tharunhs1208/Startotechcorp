"use client";

import React, { useState } from "react";
import { 
  Shield, 
  Lock, 
  Server, 
  Globe2, 
  Cpu, 
  Database, 
  Award, 
  CheckCircle2, 
  Smartphone, 
  Mic, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  Bell, 
  Wifi, 
  Battery, 
  Zap, 
  TrendingUp,
  FileCheck2,
  Play,
  Volume2
} from "lucide-react";
import { motion } from "framer-motion";

export default function BentoGrid() {
  const [mobileTab, setMobileTab] = useState<"voice" | "pipeline" | "legal">("voice");

  return (
    <section id="bento-features" className="py-20 md:py-32 relative z-20 bg-slate-50/50 border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        
        {/* Section Heading - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-4xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" /> Mobile &amp; Cloud Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 mb-4 text-left">
            Autonomous Systems In Your Pocket
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl text-left">
            Control your entire enterprise nervous system from our iOS &amp; Android mobile companion and unified cloud cockpit.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Interactive Mobile App Mockup (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all text-left"
          >
            {/* Top Info */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center font-bold shadow-sm">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                  iOS &amp; Android Live
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">
                StartoTech Mobile Companion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Real-time push alerts for voice call completions, instant executive contract approvals, and live revenue tracking on the go.
              </p>

              {/* Mobile Quick Filter Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 gap-1 mb-4">
                <button
                  onClick={() => setMobileTab("voice")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    mobileTab === "voice" ? "bg-slate-900 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Voice Agent
                </button>
                <button
                  onClick={() => setMobileTab("pipeline")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    mobileTab === "pipeline" ? "bg-slate-900 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Live Pipeline
                </button>
                <button
                  onClick={() => setMobileTab("legal")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    mobileTab === "legal" ? "bg-slate-900 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Legal Audits
                </button>
              </div>
            </div>

            {/* Realistic iPhone Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[280px] rounded-[38px] bg-slate-950 border-[5px] border-slate-800 p-3 shadow-2xl z-10">
              {/* Dynamic Island Notch */}
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-between px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
              </div>

              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-[9px] text-slate-400 px-2 mb-3 font-mono">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-2.5 h-2.5" />
                  <Battery className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Dynamic Screen Content Based on Tab */}
              {mobileTab === "voice" && (
                <div className="space-y-2.5 p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-purple-400 uppercase">Zobay Voice AI</span>
                    <span className="text-[9px] font-mono text-emerald-400">00:42 • Active</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    Inbound Call from Acme Corp VP
                  </div>
                  {/* Mini Waveform */}
                  <div className="flex items-center gap-1 h-6 py-1">
                    {[35, 75, 45, 90, 60, 100, 40, 80, 50, 70, 30].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-purple-400 rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="p-2 rounded-xl bg-black/40 text-[10px] text-slate-300 font-mono">
                    "Understood. I will dispatch the $48k Enterprise quote to your inbox."
                  </div>
                </div>
              )}

              {mobileTab === "pipeline" && (
                <div className="space-y-2 p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">StartOne OS</span>
                    <span className="text-[9px] font-mono text-slate-400">Live Sync</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                    <div className="text-[10px] text-slate-400 font-mono">New Deal Booked</div>
                    <div className="text-xs font-black text-white">$120,000 / yr</div>
                  </div>
                  <div className="p-2 rounded-xl bg-black/40 text-[10px] text-slate-300 font-mono flex items-center justify-between">
                    <span>Task #TK-84920</span>
                    <span className="text-emerald-400 font-bold">Auto-Routed</span>
                  </div>
                </div>
              )}

              {mobileTab === "legal" && (
                <div className="space-y-2 p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">LegalX Sentinel</span>
                    <span className="text-[9px] font-mono text-emerald-400">Audit Pass</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
                    <div className="text-[10px] text-slate-400 font-mono">Standard MSA Audit</div>
                    <div className="text-xs font-bold text-white">14 Clauses Verified in 3.8s</div>
                  </div>
                  <button className="w-full py-1.5 rounded-xl bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    Sign Via DocuSign
                  </button>
                </div>
              )}

              {/* Bottom Home Bar */}
              <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
            </div>
          </motion.div>

          {/* Right Column Bento Cards (7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Card 2: Zobay Acoustic Synthesis (1 col) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between group hover:border-purple-500/40 transition-all shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 text-purple-700 flex items-center justify-center mb-4">
                  <Mic className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900 mb-2">
                  Sub-280ms Voice Core
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Neural acoustic speech turnaround delivering human conversational nuance with zero lag.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-2">
                  <span>Latency Metric:</span>
                  <span className="text-purple-700 font-bold">214ms Edge</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-[88%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: LegalX 4-Second Document Sentinel (1 col) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between group hover:border-amber-500/40 transition-all shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900 mb-2">
                  4-Second Legal Audits
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Deep semantic contract checks enforcing indemnification caps and auto-generating redlines.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                  <span>Accuracy Score:</span>
                  <span className="text-amber-800 font-bold">99.8% Certified</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SOC-2 Type II Validated
                </div>
              </div>
            </motion.div>

            {/* Card 4: Multi-Tenant Ledger & Real-Time Sync (Full 2 cols on right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Database className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xl font-black uppercase text-slate-900">
                      Multi-Tenant Cloud Ledgers
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Automated multi-currency reconciliation across 14 enterprise entities.
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold shrink-0">
                  $120M+ Processed
                </div>
              </div>

              {/* Interactive Telemetry Sparkline & Stats Row */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Throughput</div>
                  <div className="text-base font-black text-slate-900 mt-0.5">140K/sec</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Uptime SLA</div>
                  <div className="text-base font-black text-emerald-600 mt-0.5">99.99%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Data Nodes</div>
                  <div className="text-base font-black text-slate-900 mt-0.5">38 POPs</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
