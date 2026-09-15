"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Eye, Compass, ShieldCheck, Zap, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MissionVisionProps {
  onOpenDemo?: () => void;
}

export default function MissionVision({ onOpenDemo }: MissionVisionProps) {
  return (
    <section className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Top Header Badge & Left-Aligned Title */}
        <div className="text-left max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Purpose &amp; Direction
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-6 text-left">
            Mission &amp; Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl text-left">
            StartoTech is engineered to eliminate legacy enterprise friction. We build sovereign, high-speed autonomous software systems that empower global organizations to execute, transact, and scale with carrier-grade perfection.
          </p>
        </div>

        {/* Dual Pillar: Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-slate-50/70 border border-slate-200/90 p-8 sm:p-10 shadow-lg overflow-hidden group hover:border-emerald-500/50 hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase">
                  Our Fundamental Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
                  Accelerate Autonomy
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              To replace fragmented, high-latency enterprise software with unified machine-intelligent infrastructure. We build sovereign tools that automate telephony, financial ledgers, and legal compliance—unlocking exponential productivity for every enterprise.
            </p>

            {/* Mission Key Benchmarks */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-mono text-slate-500">Response Speed</div>
                <div className="text-lg font-black text-slate-900">&lt; 280ms Audio</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-mono text-slate-500">SLA Standard</div>
                <div className="text-lg font-black text-emerald-600">99.99% Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl bg-slate-50/70 border border-slate-200/90 p-8 sm:p-10 shadow-lg overflow-hidden group hover:border-teal-500/50 hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 border border-teal-300 flex items-center justify-center text-teal-700 shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-teal-700 uppercase">
                  Long-Term Horizon
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
                  The Zero-Friction Enterprise
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              A world where every corporate workflow—from global voice communication to cross-border treasury settlements and continuous regulatory adherence—executes autonomously, instantly, and with zero manual overhead.
            </p>

            {/* Vision Key Benchmarks */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-mono text-slate-500">Sovereign Cloud</div>
                <div className="text-lg font-black text-slate-900">SOC-2 Type II</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-mono text-slate-500">Edge Reach</div>
                <div className="text-lg font-black text-teal-600">38 Global Nodes</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">
              Hyper-Velocity Execution
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Eliminating latency at every tier—from millisecond conversational audio turn-around to instant fiscal reconciliations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center text-teal-700 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">
              Zero-Trust Security
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Carrier-grade encryption, acoustic voice biometric verification, and automated SOC-2 compliance built directly into runtime cores.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-700 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">
              Autonomous Intelligence
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deep machine intelligence trained on enterprise operations, eliminating human bottlenecks in repetitive mission-critical tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
