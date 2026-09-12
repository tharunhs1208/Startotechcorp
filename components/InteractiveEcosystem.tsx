"use client";

import React, { useState } from "react";
import { Mic, LayoutGrid, Shield, ArrowRight, Zap, RefreshCw, Layers, CheckCircle2, ChevronRight } from "lucide-react";

export default function InteractiveEcosystem() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 1,
      title: "Voice Capture & Qualification",
      product: "Zobay",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30",
      description: "A customer or prospective buyer calls. Zobay's autonomous voice agent answers instantly with sub-280ms human speech, extracts intent, and confirms commercial agreement terms.",
      actionLabel: "Automated Voice Intelligence",
    },
    {
      step: 2,
      title: "Enterprise Operations Sync",
      product: "StartOne",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
      description: "Zobay dispatches real-time structured payloads into StartOne. The enterprise OS automatically updates pipelines, assigns team tasks, records invoicing, and launches operational workflows.",
      actionLabel: "Instant Workflow Orchestration",
    },
    {
      step: 3,
      title: "Automated Contract & Compliance Audit",
      product: "LegalX",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
      description: "StartOne triggers LegalX to scan the enterprise agreement. LegalX flags indemnification thresholds, runs regulatory compliance checks, and generates redlines within 4 seconds.",
      actionLabel: "Autonomous Legal Governance",
    },
  ];

  return (
    <section id="ecosystem-section" className="py-20 md:py-32 relative z-20 bg-[#0c0e15] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" /> Unified Execution Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Autonomous Synergy Loop
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            How Zobay, StartOne, and LegalX interconnect into a singular corporate nervous system. Click through each phase to inspect live data handoffs.
          </p>
        </div>

        {/* Interactive 3-Stage Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {steps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                activeStep === idx
                  ? `${s.bgColor} shadow-2xl scale-[1.02]`
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                  PHASE 0{s.step}
                </span>
                <span className={`text-xs font-semibold ${s.color}`}>
                  Powered by {s.product}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {s.description}
              </p>

              {/* Active Step Indicator Line */}
              {activeStep === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Interactive Live Data Packet Inspection Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#08090e] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-sm font-mono text-gray-300 font-semibold">
                Live Data Pipeline Stream • Phase {activeStep + 1} Active
              </span>
            </div>
            <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Latency: 42ms • TLS 1.3 Mesh
            </div>
          </div>

          {/* Dynamic Content Based on Active Step */}
          {activeStep === 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Zobay Telephony Gateway Node</div>
                  <div className="text-xs text-gray-400">Incoming call connected via WebRTC SIP trunking</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs text-purple-300 space-y-1.5">
                <div>&gt; [AUDIO_STREAM] Real-time audio input received (16kHz PCM)</div>
                <div>&gt; [NLP_ENTITY] Detected: Intent = "Enterprise License Inquiry" (Confidence: 0.994)</div>
                <div>&gt; [AUTOMATION] Generated StartOne Task Token: #TK-84920</div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">StartOne Enterprise Core Orchestrator</div>
                  <div className="text-xs text-gray-400">Workflow trigger confirmed from Zobay voice intake</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 font-mono text-xs text-emerald-300 space-y-1.5">
                <div>&gt; [WORKFLOW] Provisioned Tenant Org: "Starlight Corp Ltd"</div>
                <div>&gt; [LEDGER] Created Pending Invoice: $48,000 / yr (Automated Reconciliation)</div>
                <div>&gt; [DISPATCH] Handed Off MSA Draft to LegalX AI Auditor Engine</div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LegalX Autonomous Compliance Sentinel</div>
                  <div className="text-xs text-gray-400">Deep semantic audit against enterprise risk playbooks</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 font-mono text-xs text-amber-300 space-y-1.5">
                <div>&gt; [DOCUMENT] 24-page Master Services Agreement parsed in 1.4s</div>
                <div>&gt; [RISK_CHECK] 14 Standard clauses approved; 1 non-standard indemnity redlined</div>
                <div>&gt; [STATUS] Final Approved Signature Packet generated & dispatched to DocuSign</div>
              </div>
            </div>
          )}

          {/* Step Progression Buttons */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 2))}
              className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Previous Phase
            </button>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStep === i ? "w-6 bg-indigo-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))}
              className="text-xs text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Next Phase</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
