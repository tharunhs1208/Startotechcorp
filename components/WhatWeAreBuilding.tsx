"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Cpu, Shield, Zap, Globe, ArrowRight, CheckCircle2, Clock, Terminal } from "lucide-react";
import Link from "next/link";

interface WhatWeAreBuildingProps {
  onOpenDemo?: (productName?: string) => void;
}

interface BuildingItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  status: "In Production" | "Rolling Out" | "R&D Lab";
  statusColor: string;
  progress: number;
  description: string;
  capabilities: string[];
  techStack: string[];
}

const BUILDING_PIPELINE: BuildingItem[] = [
  {
    id: "pipeline-voice",
    category: "Conversational Telephony",
    title: "Zobay Autonomous Voice Mesh",
    tagline: "Sub-280ms human-cadence conversational agents powering enterprise call centers.",
    status: "In Production",
    statusColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    progress: 100,
    description: "Full-duplex real-time voice streaming engine capable of handling tens of thousands of concurrent phone calls with natural empathy and bi-directional CRM syncing.",
    capabilities: ["Sub-280ms turn-taking latency", "40+ native language neural models", "Emotion-aware dynamic pitch modulation", "Instant telephony trunking & SIP integration"],
    techStack: ["WebRTC", "Rust Audio Core", "Custom SpeechLLM", "SIP Trunking"]
  },
  {
    id: "pipeline-os",
    category: "Enterprise Operating System",
    title: "StartOne Cloud OS",
    tagline: "The all-in-one execution layer uniting multi-entity ledgers, workflows, and teams.",
    status: "In Production",
    statusColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    progress: 100,
    description: "Replaces 10+ disjointed SaaS tools with a single unified operational dashboard. Real-time multi-currency bookkeeping, automated approvals, and role-based permissions.",
    capabilities: ["Multi-entity fiscal balance sheets", "Drag-and-drop workflow builder", "Automated compliance logging", "Unified team chat and task execution"],
    techStack: ["PostgreSQL Multi-Tenant", "Turbopack Next.js", "Redis Mesh", "SOC-2 Engine"]
  },
  {
    id: "pipeline-legal",
    category: "Regulatory & Legal Tech",
    title: "LegalX Autonomous Contract Core",
    tagline: "Instant redlining, contract risk assessment, and continuous compliance audit.",
    status: "Rolling Out",
    statusColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    progress: 88,
    description: "Domain-adapted legal reasoning engine trained on commercial contracts, NDAs, Master Service Agreements, and global regulatory mandates.",
    capabilities: ["10-second contract risk scoring", "Automated multi-party redlines", "Multi-jurisdiction compliance matrix", "Real-time clause anomaly detection"],
    techStack: ["Semantic Vector Search", "LegalLLM 70B", "Docx Diff Engine", "Audit Vault"]
  },
  {
    id: "pipeline-ledger",
    category: "Financial Infrastructure",
    title: "BaseOne High-Frequency Settlement",
    tagline: "Ultra-low latency liquidity orchestration and automated cross-border clearing.",
    status: "Rolling Out",
    statusColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    progress: 82,
    description: "Institutional-grade payment clearing network designed for high-volume enterprises, dynamic treasury management, and multi-currency instant conversion.",
    capabilities: ["Sub-50ms transaction finality", "Automated multi-currency liquidity pooling", "ISO 20022 messaging standard", "Immutable zero-knowledge audit trail"],
    techStack: ["C++ Matching Engine", "ZK-Rollups", "SWIFT/SEPA APIs", "Distributed Cache"]
  },
  {
    id: "pipeline-security",
    category: "Cybersecurity & Defense",
    title: "ValidSoft Acoustic Biometric Shield",
    tagline: "Real-time voice biometric authentication and deepfake intrusion defense.",
    status: "R&D Lab",
    statusColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    progress: 74,
    description: "Micro-frequency vocal tract analysis detecting synthetic audio, voice cloning, and biometric spoofing in under 150 milliseconds of speech.",
    capabilities: ["99.8% synthetic voice rejection rate", "Hardware-accelerated acoustic spectrogram analysis", "Frictionless authentication without passphrases", "Continuous threat intelligence telemetry"],
    techStack: ["Audio Spectrogram CNNs", "Edge AI Inferencing", "WASM Runtime", "TLS 1.3"]
  },
  {
    id: "pipeline-media",
    category: "Licensing & Media Mesh",
    title: "SOCAN AI Media Licensing Engine",
    tagline: "Acoustic fingerprinting and automated global royalty distribution network.",
    status: "R&D Lab",
    statusColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    progress: 68,
    description: "Instantaneous media recognition across millions of digital streams with automated smart-contract royalty allocation to creators and rightsholders.",
    capabilities: ["1.2B track acoustic fingerprint index", "Automated micro-royalty routing", "Real-time stream monitoring across 140+ platforms", "Multi-stakeholder payout splits"],
    techStack: ["Audio Waveform Hash Mesh", "Smart Contracts", "Distributed Kafka", "Global Edge"]
  }
];

export default function WhatWeAreBuilding({ onOpenDemo }: WhatWeAreBuildingProps) {
  const [filter, setFilter] = useState<"All" | "In Production" | "Rolling Out" | "R&D Lab">("All");

  const filteredItems = BUILDING_PIPELINE.filter(
    (item) => filter === "All" || item.status === filter
  );

  return (
    <section className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Left-Aligned Header */}
        <div className="text-left max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Engineering Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-6 text-left">
            What We Are Building
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl text-left">
            A comprehensive overview of the active products, rolling deployments, and next-generation R&amp;D systems comprising the StartoTech Autonomous Enterprise Stack.
          </p>
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex items-center gap-2 mb-12 flex-wrap text-left">
          {(["All", "In Production", "Rolling Out", "R&D Lab"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab
                  ? "bg-slate-900 text-white font-bold shadow-md"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl bg-slate-50/70 border border-slate-200/90 p-7 flex flex-col justify-between shadow-sm group hover:border-emerald-500/50 hover:shadow-lg hover:bg-white transition-all text-left"
              >
                <div>
                  {/* Card Status & Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-5">
                    {item.tagline}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                      <span>Deployment Readiness</span>
                      <span className="text-slate-900 font-bold">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    {item.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
              Ready To Deploy Sovereign Autonomous Systems?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Connect directly with our engineering leadership to explore sandbox API keys, custom on-premise deployments, or custom architecture briefs.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {onOpenDemo && (
              <button
                onClick={() => onOpenDemo("StartoTech Ecosystem")}
                className="redstone-btn text-xs sm:text-sm px-6 py-3 cursor-pointer shadow-lg"
              >
                <span>Request Sandbox Access</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            )}
            <Link href="/portfolio">
              <div className="redstone-btn-secondary text-xs sm:text-sm px-6 py-3 cursor-pointer bg-white text-slate-900 border border-slate-300 hover:bg-slate-100">
                <span>View Live Products</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
