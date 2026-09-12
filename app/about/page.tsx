"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import BentoGrid from "@/components/BentoGrid";
import { Sparkles, Award, Shield, CheckCircle2, ArrowRight, Target, Zap, Users, Cpu, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      <main className="pt-36 pb-28">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Company & Governance
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Architecting The Autonomous Enterprise
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            FortuneTechCorp was founded on a singular conviction: modern companies shouldn't be held back by disconnected software silos. We engineer high-velocity autonomous infrastructure uniting <strong className="text-white">Zobay Voice AI</strong>, <strong className="text-white">StartOne Enterprise OS</strong>, and <strong className="text-white">LegalX Contract Intelligence</strong> under one unified corporate nervous system.
          </p>
        </div>

        {/* Story & Visual Media Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] block">
                The FortuneTechCorp Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                Where Elite Design Meets Deep Machine Intelligence
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Today, every enterprise operates in an interconnected digital economy. Thanks to our deep specialization in telephony streaming, multi-tenant distributed ledgers, and semantic document analysis, we’ve developed an architectural standard that delivers quantifiable ROI.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                The synergy of three core pillars — <strong className="text-white">Low-Latency Voice Turnaround</strong>, <strong className="text-white">Zero-Friction Enterprise Workflows</strong>, and <strong className="text-white">Autonomous Legal Governance</strong> — is what sets FortuneTechCorp platforms apart from legacy SaaS vendors.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="redstone-btn"
                >
                  <span>Request Engineering Brief</span>
                  <div className="btn-icon-circle">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Photo & Media Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="FortuneTechCorp Engineering Center"
                  className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-gray-400">Global Engineering Operations</div>
                      <div className="text-sm font-bold text-white">Distributed Across 38 Edge Nodes</div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Numbers */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#12141d]/90 border border-white/10 text-center">
            <div>
              <div className="text-4xl font-black text-white">150+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#e70000]">99.99%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Uptime Availability</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-400">&lt; 280ms</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Edge Voice Turnaround</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400">SOC-2 Type II</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Certified Compliant</div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars (Redstone-style Feature Grid) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Our 3 Operational Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#12141d]/80 border border-white/10 hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cognitive Latency Reduction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By bypassing text conversion bottlenecks and leveraging direct streaming speech models, Zobay matches natural human conversational pacing without awkward pauses.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#12141d]/80 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Continuous Operational Mesh</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                StartOne unifies multi-entity accounting, payroll dispatches, and team execution pipelines into a single source of truth, cutting SaaS overhead by 64%.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#12141d]/80 border border-white/10 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero-Leakage Legal AI</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                LegalX provides machine-speed contract auditing across 50+ clause categories under strict air-gapped parameters with full SOC-2 and HIPAA isolation.
              </p>
            </div>
          </div>
        </div>

        <BentoGrid />
      </main>

      <Footer onOpenDemo={() => setDemoModalOpen(true)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

