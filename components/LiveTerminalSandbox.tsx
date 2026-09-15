"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Play, RotateCcw, Check, Sparkles, Copy, Shield, Cpu, Activity, Zap } from "lucide-react";

interface CommandPreset {
  id: string;
  name: string;
  command: string;
  response: {
    status: string;
    runtime: string;
    payload: Record<string, any>;
  };
}

const PRESETS: CommandPreset[] = [
  {
    id: "voice",
    name: "Voice Stream AI",
    command: "startotech pipeline --module=zobay-voice --audio=stream-full-duplex --latency-target=250ms",
    response: {
      status: "STREAM_INITIALIZED_200_OK",
      runtime: "WebRTC + Rust Node @ 38 Edge Gateways",
      payload: {
        latency: "234ms",
        packet_loss: "0.00%",
        turn_taking_jitter: "1.2ms",
        language_detected: "EN-US (Confidence: 99.8%)",
        emotion_vector: "Empathetic / Problem-Solving",
        bi_directional_crm_sync: "ACTIVE_POSTGRES_CDC"
      }
    }
  },
  {
    id: "ledger",
    name: "Fiscal Ledger Audit",
    command: "startotech os --module=startone-ledger --reconcile --entities=all --strict-mode",
    response: {
      status: "RECONCILIATION_COMPLETE",
      runtime: "PostgreSQL + ZK-Rollup Settlement",
      payload: {
        total_accounts_reconciled: 4120,
        unbalanced_entries: 0,
        multi_currency_fx_delta: "$0.00000000",
        soc2_audit_trail_hash: "0x8f9c...4a2b (IMMUTABLE)",
        real_time_burn_accuracy: "100.0%"
      }
    }
  },
  {
    id: "legal",
    name: "Contract Redline Diff",
    command: "startotech legalx --diff --source=msa_v3.docx --jurisdiction=delaware-commercial",
    response: {
      status: "DIFF_AND_REDLINE_SYNTHESIZED",
      runtime: "LegalLLM 70B Quantized Engine",
      payload: {
        clauses_analyzed: 84,
        indemnification_risk_score: "LOW (0.04)",
        liability_cap_matched: "$5,000,000.00",
        suggested_redlines: 3,
        turnaround_time_elapsed: "1.42s"
      }
    }
  },
  {
    id: "biometric",
    name: "Acoustic Shield Check",
    command: "startotech security --module=validsoft --scan-audio --threat-level=high",
    response: {
      status: "VOICE_SPECTRUM_VERIFIED",
      runtime: "Acoustic Spectrogram CNN Inferencer",
      payload: {
        voiceprint_confidence: "99.94%",
        deepfake_synthetic_score: "0.001% (AUTHENTIC)",
        liveness_micro_frequency: "VERIFIED_ORGANIC",
        intrusion_defense_action: "GRANT_ACCESS_TIER_1"
      }
    }
  }
];

export default function LiveTerminalSandbox() {
  const [selectedPreset, setSelectedPreset] = useState<CommandPreset>(PRESETS[0]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [outputLog, setOutputLog] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const runCommand = (preset: CommandPreset) => {
    setSelectedPreset(preset);
    setIsExecuting(true);
    setOutputLog([`$ ${preset.command}`, "Connecting to StartoTech Global Runtime Mesh...", "Handshake verified with 38 edge clusters."]);

    setTimeout(() => {
      setOutputLog((prev) => [
        ...prev,
        `Status: ${preset.response.status}`,
        `Engine: ${preset.response.runtime}`,
        `Payload: \n${JSON.stringify(preset.response.payload, null, 2)}`,
        "Execution finished with 0 warnings."
      ]);
      setIsExecuting(false);
    }, 450);
  };

  useEffect(() => {
    runCommand(PRESETS[0]);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPreset.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 bg-slate-50/50 border-t border-slate-200/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Left-Aligned Header */}
        <div className="text-left max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" /> Interactive Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-6 text-left">
            Live Command Telemetry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl text-left">
            Test the StartoTech CLI and runtime engine directly in your browser. Trigger real-time simulations for voice turn-around, ledger audits, contract diffs, and biometric verification.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
          {/* Top Bar with Window Controls and Preset Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-100 border-b border-slate-200">
            {/* macOS / Window Dots */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 ml-3">
                startotech-runtime-v4.2.sh
              </span>
            </div>

            {/* Presets / Command Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => runCommand(preset)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    selectedPreset.id === preset.id
                      ? "bg-slate-900 text-white shadow-sm font-bold"
                      : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Command Execution Bar */}
          <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-200 overflow-x-auto">
              <span className="text-emerald-400 font-bold">startotech@core:~$</span>
              <span className="text-slate-100">{selectedPreset.command}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => runCommand(selectedPreset)}
                disabled={isExecuting}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Re-run command"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isExecuting ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Output Screen */}
          <div className="p-6 font-mono text-xs text-slate-300 min-h-[260px] bg-slate-950 overflow-x-auto space-y-2 text-left">
            {outputLog.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: idx * 0.05 }}
                className={`${
                  line.startsWith("$")
                    ? "text-emerald-400 font-bold"
                    : line.startsWith("Status:")
                    ? "text-teal-400 font-bold"
                    : line.startsWith("Payload:")
                    ? "text-purple-300"
                    : line.startsWith("Execution")
                    ? "text-emerald-400 font-semibold pt-2"
                    : "text-slate-400"
                } whitespace-pre-wrap leading-relaxed`}
              >
                {line}
              </motion.div>
            ))}

            {isExecuting && (
              <div className="flex items-center gap-2 text-emerald-400 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Streaming telemetry packets...
              </div>
            )}
          </div>

          {/* Terminal Footer Telemetry */}
          <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Cluster: Global Mesh (38 Nodes)
              </span>
              <span className="hidden sm:inline">TLS 1.3 / Rust 1.80 Engine</span>
            </div>
            <div className="text-emerald-400 font-bold">
              Latency: &lt; 280ms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
