"use client";

import React, { useState } from "react";
import { 
  Mic, 
  LayoutGrid, 
  Shield, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Activity, 
  Users, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Lock, 
  Server, 
  TrendingUp,
  Cpu,
  BarChart3,
  Globe2,
  FileCheck2,
  Terminal,
  Radio
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveEcosystemProps {
  onOpenDemo?: (product?: string) => void;
}

export default function InteractiveEcosystem({ onOpenDemo }: InteractiveEcosystemProps) {
  // Mode: "personas" or "solutions"
  const [tabMode, setTabMode] = useState<"personas" | "solutions">("personas");
  const [activePersonaIdx, setActivePersonaIdx] = useState<number>(0);
  const [activeSolutionIdx, setActiveSolutionIdx] = useState<number>(0);

  // 1. PERSONAS DATA (Drospecta-inspired Role Tabs)
  const personas = [
    {
      id: "sales-leaders",
      role: "Enterprise & Revenue Leaders",
      badge: "Commercial Acceleration",
      title: "Transform Every High-Intent Signal Into Immediate Revenue",
      tagline: "Outbound and inbound autonomous pipeline management without manual SDR bottlenecks.",
      description: "Equip your global revenue organization with autonomous voice qualification and synchronized multi-tenant CRM orchestration. Convert buyer intent at the exact moment of peak interest.",
      highlights: [
        {
          title: "Zero-Latency Voice Intake",
          desc: "Zobay engages prospective clients within 280ms, conducting full discovery and booking executive meetings.",
        },
        {
          title: "Autonomous CRM & Pipeline Dispatch",
          desc: "StartOne auto-provisions deal rooms, writes executive summaries, and updates revenue forecasts in real time.",
        },
        {
          title: "Predictive Opportunity Scoring",
          desc: "Machine intelligence scores intent signals across 14 enterprise parameters before human reps step in.",
        },
      ],
      metrics: [
        { label: "Pipeline Velocity", value: "+340%", change: "vs legacy SDR workflows" },
        { label: "Voice Lead Turnaround", value: "< 280ms", change: "instant human-grade audio" },
        { label: "Meeting Conversion", value: "68.4%", change: "verified qualified rate" },
      ],
      preview: {
        title: "Executive Revenue Intelligence Hub",
        badge: "Live Telemetry • Active Mesh",
        statsTitle: "Enterprise Opportunity Flow",
        graphLabel: "Intent Conversion Velocity",
        bars: [35, 52, 68, 85, 96, 120, 145, 180, 210, 245],
        log: [
          "[INBOUND] Inbound Voice Stream Connected via Zobay SIP Gateway",
          "[QUALIFIED] Entity: Apex Global • Intent: Enterprise Core • Score: 98.4%",
          "[CRM_SYNC] Created StartOne Deal Room #DL-9402 • Account Exec Assigned",
        ],
      },
    },
    {
      id: "architects",
      role: "Solutions & AI Architects",
      badge: "Deep Infrastructure",
      title: "Deploy Air-Gapped Private Clusters With Zero Cloud Lock-In",
      tagline: "Sub-millisecond inference engines built on sovereign distributed compute nodes.",
      description: "Maintain complete operational sovereignty over your weights, customer audio streams, and financial ledgers with our SOC-2 Type II hardened multi-region Kubernetes topology.",
      highlights: [
        {
          title: "Dedicated Private VPC Compute",
          desc: "Run containerized speech models and contract parsers directly within your own AWS, GCP, or Azure VPC.",
        },
        {
          title: "High-Throughput WebRTC Mesh",
          desc: "Sub-40ms internal packet transit with end-to-end TLS 1.3 cryptographic verification.",
        },
        {
          title: "Custom LLM Fine-Tuning",
          desc: "Train domain-specific acoustic voice cloning and bespoke legal classification playbooks securely.",
        },
      ],
      metrics: [
        { label: "Uptime SLA", value: "99.99%", change: "carrier-grade redundancy" },
        { label: "Encryption", value: "AES-256", change: "TLS 1.3 zero-trust mesh" },
        { label: "Global Edge Nodes", value: "38 POPS", change: "worldwide low latency" },
      ],
      preview: {
        title: "VPC Cluster Telemetry & Health",
        badge: "SOC-2 Type II Verified",
        statsTitle: "Distributed Compute Node Load",
        graphLabel: "Packet Transit (ms)",
        bars: [12, 14, 18, 15, 12, 16, 13, 11, 14, 12],
        log: [
          "[MESH] 38 Global Edge Nodes Synchronized • Latency avg: 14.2ms",
          "[SECURITY] Zero-Trust Enclave Verified • 0 Policy Violations Detected",
          "[COMPUTE] Dedicated H100 Cluster Active • Memory Utilization 41.2%",
        ],
      },
    },
    {
      id: "legal-officers",
      role: "Legal & Compliance Officers",
      badge: "Governance & Risk",
      title: "Autonomous Contract Auditing & Machine-Speed Governance",
      tagline: "4-second full contract audits with automated redlines and regulatory checks.",
      description: "Eliminate costly legal review delays and compliance oversights. LegalX flags indemnification exposures, cross-checks jurisdictional statutes, and generates pristine redlines before signature packets circulate.",
      highlights: [
        {
          title: "4-Second Semantic Agreement Audit",
          desc: "Deep NLP parsing scans 100+ page enterprise MSAs, NDAs, and DPAs for critical risk vectors.",
        },
        {
          title: "Cross-Jurisdiction Law Engine",
          desc: "Continuous updates against US, EU (GDPR), UK, and APAC corporate compliance standards.",
        },
        {
          title: "Automated Redline & Signature Flow",
          desc: "Instant DOCX redline output with suggested fallback clauses approved by your general counsel.",
        },
      ],
      metrics: [
        { label: "Audit Turnaround", value: "4.2s", change: "average for 50-page MSA" },
        { label: "Risk Detection Rate", value: "99.8%", change: "comprehensive clause check" },
        { label: "Legal Cost Reduction", value: "74%", change: "fewer external billable hours" },
      ],
      preview: {
        title: "Autonomous Legal Governance Sentinel",
        badge: "Multi-Jurisdiction Engine",
        statsTitle: "Risk Vector Analysis Matrix",
        graphLabel: "Clauses Parsed Per Sec",
        bars: [120, 180, 240, 310, 420, 510, 680, 790, 880, 950],
        log: [
          "[LEGALX] MSA Document #MSA-2026-X parsed in 1.4 seconds",
          "[AUDIT] 14 Standard clauses approved • 1 Non-standard Indemnity flagged",
          "[REDLINE] Replacement clause generated with 99.8% compliance score",
        ],
      },
    },
    {
      id: "operations-leads",
      role: "Operations & Scale Teams",
      badge: "Unified Execution",
      title: "End-to-End Synergy Across Voice, Ledgers & Execution",
      tagline: "One corporate nervous system eliminating disconnected SaaS software silos.",
      description: "Break down the walls between client intake, operations, accounting, and legal. FortuneTechCorp unites every tier into one cohesive, automated execution flywheel.",
      highlights: [
        {
          title: "Synchronized Event Bus",
          desc: "Every telephony call, task handoff, and document signature triggers downstream automations automatically.",
        },
        {
          title: "Multi-Entity Cloud Ledger",
          desc: "Automated multi-currency billing, intercompany reconciliations, and instant P&L updates.",
        },
        {
          title: "Real-Time Operational Cockpit",
          desc: "Unified glassmorphic telemetry dashboard giving C-suite visibility into every business division.",
        },
      ],
      metrics: [
        { label: "Operational Velocity", value: "10x", change: "faster cycle from lead to close" },
        { label: "Data Handoff Errors", value: "0.00%", change: "fully validated schema bus" },
        { label: "Resource Efficiency", value: "+82%", change: "reclaimed administrative time" },
      ],
      preview: {
        title: "Enterprise Synergy Ecosystem Cockpit",
        badge: "Multi-Entity Active",
        statsTitle: "Cross-System Event Throughput",
        graphLabel: "Autonomous Events / min",
        bars: [420, 580, 710, 890, 1120, 1340, 1590, 1820, 2150, 2400],
        log: [
          "[STARTONE] Ledger Reconciled: 14 Entities • $1.2M Batch Processed",
          "[INTEGRATION] Real-time webhook dispatch to 12 Enterprise Endpoints",
          "[STATUS] Corporate Nervous System operating at 100% nominal throughput",
        ],
      },
    },
  ];

  // 2. SOLUTIONS DATA (Drospecta-inspired Feature Tabs)
  const solutions = [
    {
      id: "zobay-voice",
      product: "Zobay",
      badge: "Voice Telephony AI",
      title: "Sub-280ms Conversational Voice Intelligence",
      tagline: "Human-grade telephony agents answering and qualifying enterprise inbound & outbound calls at scale.",
      description: "Zobay handles mission-critical enterprise calls with ultra-low latency, dynamic voice cloning, real-time sentiment analysis, and instant workflow triggering.",
      highlights: [
        {
          title: "Sub-280ms Response Latency",
          desc: "Instant conversational turnaround eliminating robotic pauses and awkward dead air.",
        },
        {
          title: "Native SIP & WebRTC Trunks",
          desc: "Direct integration with Twilio, Cisco, Genesys, and traditional telephony backbones.",
        },
        {
          title: "Autonomous Entity Extraction",
          desc: "Captures pricing constraints, timeline needs, and contact credentials directly into StartOne.",
        },
      ],
      metrics: [
        { label: "Latency", value: "< 280ms", change: "real-time speech turnaround" },
        { label: "Call Capacity", value: "10,000+", change: "concurrent active channels" },
        { label: "Speech Clarity", value: "99.6%", change: "neural acoustic synthesis" },
      ],
      preview: {
        title: "Zobay Neural Audio Telemetry",
        badge: "Sub-280ms Edge Stream",
        statsTitle: "Audio Waveform & Latency Monitor",
        graphLabel: "Decibel & Acoustic Waveform",
        bars: [22, 65, 95, 45, 80, 110, 60, 95, 40, 75],
        log: [
          "[ZOBAY] Call #ZB-84920 Connected (16kHz PCM WebRTC)",
          "[SYNTHESIS] Neural voice agent responding with 230ms turnaround",
          "[INTENT] Extracted Enterprise SLA agreement requirement • Dispatched",
        ],
      },
    },
    {
      id: "startone-os",
      product: "StartOne",
      badge: "Enterprise Workspace OS",
      title: "Zero-Friction Operating System For Modern Enterprises",
      tagline: "Multi-tenant workspace orchestration, distributed ledgers, and intelligent task routing.",
      description: "StartOne consolidates task management, multi-entity accounting, client collaboration, and project workflows into a hyper-responsive enterprise platform.",
      highlights: [
        {
          title: "Multi-Entity Financial Ledger",
          desc: "Autonomous invoice creation, ledger reconciliations, and tax compliance across entities.",
        },
        {
          title: "Dynamic Task Orchestrator",
          desc: "Auto-routes incoming projects to the best-suited engineering or sales units automatically.",
        },
        {
          title: "Role-Based Security Matrix",
          desc: "Granular permissions, SSO integration, and SOC-2 Type II certified data isolation.",
        },
      ],
      metrics: [
        { label: "Task Throughput", value: "140K+", change: "daily automated actions" },
        { label: "Ledger Accuracy", value: "100%", change: "zero-reconciliation errors" },
        { label: "Setup Time", value: "< 10 mins", change: "instant workspace onboarding" },
      ],
      preview: {
        title: "StartOne Workspace Orchestrator",
        badge: "Multi-Tenant Cloud",
        statsTitle: "Operational Task Pipeline",
        graphLabel: "Tasks Executed / hour",
        bars: [140, 210, 320, 480, 620, 780, 920, 1100, 1280, 1420],
        log: [
          "[STARTONE] Auto-provisioned Organization: Starlight Cloud Tech",
          "[INVOICE] Generated Recurring MSA Contract Invoice: $48,000/yr",
          "[ROUTING] Dispatched 6 initial deliverables to allocated team squads",
        ],
      },
    },
    {
      id: "legalx-audit",
      product: "LegalX",
      badge: "Autonomous Legal Tech",
      title: "Machine-Speed Contract Intelligence & Redline Generation",
      tagline: "Analyze complex enterprise agreements and generate attorney-grade redlines in under 4 seconds.",
      description: "LegalX uses specialized legal LLMs to review contracts, enforce indemnification caps, detect risky liabilities, and ensure complete regulatory alignment.",
      highlights: [
        {
          title: "4-Second Deep Document Audit",
          desc: "Instantly ingests PDF and DOCX files, cross-referencing clauses against your enterprise playbook.",
        },
        {
          title: "Automated Redline Suggestions",
          desc: "Generates precise track-changes markup with plain-language legal justifications.",
        },
        {
          title: "Continuous Regulatory Tracking",
          desc: "Automatically adapts review rules to new statutory requirements across global jurisdictions.",
        },
      ],
      metrics: [
        { label: "Audit Time", value: "4.2s", change: "instantaneous analysis" },
        { label: "Accuracy", value: "99.8%", change: "benchmark against legal teams" },
        { label: "Clause Library", value: "50,000+", change: "pre-approved enterprise clauses" },
      ],
      preview: {
        title: "LegalX Autonomous Contract Sentinel",
        badge: "Neural Clause Analyzer",
        statsTitle: "Clause Risk Distribution Matrix",
        graphLabel: "Audit Velocity Index",
        bars: [80, 140, 210, 340, 490, 620, 780, 890, 940, 990],
        log: [
          "[PARSER] Master Services Agreement ingested (32 pages, 14,200 words)",
          "[RISK_CHECK] 12 Standard clauses approved • 1 Indemnity clause redlined",
          "[OUTPUT] Final track-changes DOCX ready for DocuSign dispatch",
        ],
      },
    },
    {
      id: "socan-stream",
      product: "SOCAN Media",
      badge: "Media Intelligence",
      title: "Global Acoustic Audio Telemetry & Rights Settlement",
      tagline: "Real-time acoustic fingerprinting and automated royalty settlements across 120+ countries.",
      description: "High-throughput audio recognition scanning 450M+ daily streams, tracking broadcasts, and guaranteeing 99.9% accuracy for digital music rights distribution.",
      highlights: [
        {
          title: "Millisecond Acoustic Fingerprinting",
          desc: "Recognizes compressed, pitch-shifted, or noisy audio tracks in under 80 milliseconds.",
        },
        {
          title: "Automated Royalty Distribution",
          desc: "Calculates complex multi-party splits and writes immutable payment ledgers automatically.",
        },
        {
          title: "Global Broadcast Telemetry",
          desc: "Monitors thousands of radio, TV, and streaming channels simultaneously across the globe.",
        },
      ],
      metrics: [
        { label: "Daily Streams", value: "450M+", change: "scanned continuously" },
        { label: "Territories", value: "120+", change: "global regulatory coverage" },
        { label: "Accuracy", value: "99.9%", change: "fingerprint precision" },
      ],
      preview: {
        title: "SOCAN Global Stream Telemetry Engine",
        badge: "450M+ Streams / Day",
        statsTitle: "Real-time Acoustic Match Stream",
        graphLabel: "Streams Processed / sec",
        bars: [1500, 2400, 3200, 4100, 4800, 5600, 6200, 6900, 7400, 8200],
        log: [
          "[STREAM] Ingested 14,800 live broadcast streams across North America",
          "[MATCH] Acoustic match confirmed: Track #SC-9824 • Confidence: 99.94%",
          "[LEDGER] Dispatched royalty distribution credit to rights holder account",
        ],
      },
    },
  ];

  const currentData = tabMode === "personas" ? personas[activePersonaIdx] : solutions[activeSolutionIdx];

  return (
    <section id="ecosystem-section" className="py-24 md:py-32 relative z-20 bg-slate-50/50 border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        
        {/* Section Header with Drospecta-style Pill Mode Switcher - Left Aligned */}
        <div className="w-full flex flex-col items-start justify-start text-left max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> High Precision Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 mb-4 text-left">
            Built For Category Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl text-left mb-8">
            Experience our unified ecosystem designed to eliminate silos and power high-growth enterprises with machine-speed autonomous intelligence.
          </p>

          {/* Drospecta Dual Mode Switcher: By Persona vs By Solution */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-sm gap-1">
            <button
              onClick={() => setTabMode("personas")}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                tabMode === "personas"
                  ? "text-white bg-slate-900 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              By Persona &amp; Role
            </button>
            <button
              onClick={() => setTabMode("solutions")}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                tabMode === "solutions"
                  ? "text-white bg-slate-900 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              By Flagship Solution
            </button>
          </div>
        </div>

        {/* Drospecta Interactive Pill Tab Bar */}
        <div className="flex justify-start mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="inline-flex flex-nowrap sm:flex-wrap items-center justify-start p-1.5 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-sm gap-1.5">
            {tabMode === "personas"
              ? personas.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePersonaIdx(idx)}
                    className={`relative px-5 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      activePersonaIdx === idx
                        ? "text-white bg-slate-900 font-bold shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activePersonaIdx === idx ? "bg-emerald-400" : "bg-slate-300"}`} />
                    <span>{p.role}</span>
                  </button>
                ))
              : solutions.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSolutionIdx(idx)}
                    className={`relative px-5 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      activeSolutionIdx === idx
                        ? "text-white bg-slate-900 font-bold shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeSolutionIdx === idx ? "bg-emerald-400" : "bg-slate-300"}`} />
                    <span>{s.badge}</span>
                  </button>
                ))}
          </div>
        </div>

        {/* Drospecta-style Active Tab Content Container (Split Layout) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tabMode}-${tabMode === "personas" ? activePersonaIdx : activeSolutionIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left"
          >
            {/* Left Column: Narrative, Value Proposition & Highlight Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                {currentData.badge}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
                  {currentData.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide font-mono">
                  {currentData.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentData.description}
              </p>

              {/* 3 Highlight Cards with Icons */}
              <div className="space-y-3 pt-2">
                {currentData.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/40 shadow-sm transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5">{h.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenDemo && onOpenDemo(currentData.badge)}
                  className="redstone-btn"
                >
                  <span>Request Interactive Sandbox</span>
                  <div className="btn-icon-circle">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Framer-style SaaS Interactive Dashboard Preview & Telemetry Panel */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden text-left">
                {/* Radial Accent Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Dashboard Window Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-700 ml-2">
                      {currentData.preview.title}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                    {currentData.preview.badge}
                  </div>
                </div>

                {/* 3 Metric Cards Grid (Drospecta-style KPI Blocks) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 relative z-10">
                  {currentData.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 font-semibold">
                        {m.label}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Dynamic Data Stream & Visualizer Bar Chart */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                        {currentData.preview.statsTitle}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {currentData.preview.graphLabel}
                    </span>
                  </div>

                  {/* Animated Bar Visualizer */}
                  <div className="flex items-end justify-between gap-2 h-28 pt-4 pb-1 px-2 border-b border-slate-200">
                    {currentData.preview.bars.map((val, bIdx) => (
                      <div key={bIdx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.min(100, (val / Math.max(...currentData.preview.bars)) * 100)}%` }}
                          transition={{ duration: 0.6, delay: bIdx * 0.04, ease: "easeOut" }}
                          className={`w-full rounded-t-md transition-all ${
                            bIdx === currentData.preview.bars.length - 1
                              ? "bg-gradient-to-t from-emerald-500 to-teal-400 shadow-sm"
                              : "bg-slate-300 group-hover:bg-slate-400"
                          }`}
                        />
                        <span className="text-[9px] font-mono text-slate-500">{bIdx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Real-time Execution Log Console (Drospecta-style Terminal) */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 relative z-10">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Live Event Telemetry Log</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase">Streaming Nominal</span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    {currentData.preview.log.map((line, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-slate-300">
                        <span className="text-emerald-400 select-none">&gt;</span>
                        <span className={lIdx === currentData.preview.log.length - 1 ? "text-white font-semibold" : "text-slate-400"}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
