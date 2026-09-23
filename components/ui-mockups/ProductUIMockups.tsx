"use client";

import React from "react";
import {
  Mic,
  Video,
  Share2,
  PhoneOff,
  MoreVertical,
  Activity,
  BarChart2,
  TrendingUp,
  Cpu,
  Server,
  Layers,
  Radio,
  Terminal,
  Shield,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Zap,
  FileText,
  Lock,
  PieChart,
  Fingerprint,
  Check,
} from "lucide-react";

/**
 * 1. REAL MEETINGX 4K SPATIAL CONFERENCING UI
 * Authentic WebRTC multi-participant video conference interface inspired by reference
 */
export function MeetingXUIMockup({ compact = false }: { compact?: boolean }) {
  const participants = [
    { name: "Han Hieu", initial: "H", isMuted: true, isSpeaking: false, color: "bg-blue-600/40 text-blue-200" },
    { name: "1. Song An", initial: "SA", isMuted: true, isSpeaking: true, color: "bg-rose-600/40 text-rose-200", hasHeart: true },
    { name: "8. Bui Dinh Huy", initial: "BH", isMuted: true, isSpeaking: false, color: "bg-amber-600/40 text-amber-200" },
    { name: "6. Diem Hang", initial: "DH", isMuted: true, isSpeaking: false, color: "bg-emerald-600/40 text-emerald-200" },
    { name: "39. Huynh Minh Thy", initial: "HT", isMuted: true, isSpeaking: false, color: "bg-purple-600/40 text-purple-200" },
    { name: "36. Dao Phuong Uyen", initial: "DP", isMuted: true, isSpeaking: false, color: "bg-cyan-600/40 text-cyan-200" },
    { name: "35. Thai Tuan", initial: "TT", isMuted: true, isSpeaking: false, color: "bg-indigo-600/40 text-indigo-200" },
    { name: "+30 others", initial: "+30", isMuted: true, isSpeaking: false, color: "bg-zinc-700/60 text-zinc-300" },
    { name: "You (Host)", initial: "You", isMuted: false, isSpeaking: false, color: "bg-rose-500/50 text-white", hasHeart: true },
  ];

  return (
    <div className="w-full h-full bg-[#202124] text-white flex flex-col justify-between overflow-hidden select-none font-sans border border-white/10 rounded-xl relative shadow-2xl">
      {/* Top Browser Chrome Address Bar */}
      <div className="px-3 py-1.5 bg-[#2d2f34] border-b border-black/40 flex items-center justify-between text-[9px] font-mono text-white/70">
        <div className="flex items-center gap-1.5 truncate">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-1 text-white/40">|</span>
          <span className="text-white/90 bg-[#1c1d20] px-2 py-0.5 rounded border border-white/5 truncate">
            meet.fortune.io/meetingx-spatial-live
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px]">
          <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-mono font-bold">
            1080p 60FPS AV1
          </span>
        </div>
      </div>

      {/* 3x3 Video Participant Tiles Grid */}
      <div className="p-1.5 flex-1 grid grid-cols-3 gap-1.5 bg-[#17181b]">
        {participants.map((p, idx) => (
          <div
            key={idx}
            className={`relative rounded-lg bg-[#28292c] border flex flex-col items-center justify-center p-1 transition-all overflow-hidden ${
              p.isSpeaking
                ? "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                : "border-white/5 hover:border-white/20"
            }`}
          >
            {/* Mute badge top right */}
            <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-black/60 flex items-center justify-center text-[7px] text-white/80">
              <Mic className="w-2 h-2 text-white/60" />
            </div>

            {/* Avatar Circle */}
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${p.color} font-bold text-[9px] sm:text-[10px] flex items-center justify-center border border-white/20 shadow-inner`}
            >
              {p.initial}
            </div>

            {/* Heart emote badge if active */}
            {p.hasHeart && (
              <span className="absolute top-2 left-2 text-[8px] animate-bounce">❤️</span>
            )}

            {/* Participant Name bottom left */}
            <div className="absolute bottom-1 left-1.5 text-[8px] font-sans text-white/80 truncate max-w-[85%]">
              {p.name}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Meeting Control Bar */}
      <div className="px-3 py-1.5 bg-[#1e1f23] border-t border-black/40 flex items-center justify-between text-[9px] font-sans">
        <div className="flex items-center gap-2 text-white/80 text-[9px] font-mono">
          <span className="font-bold">14:44</span>
          <span className="text-white/30">|</span>
          <span className="truncate max-w-[90px] sm:max-w-none text-white/90">MeetingX Spatial</span>
          <span className="px-1.5 py-0.2 rounded bg-rose-500 text-white font-bold text-[8px] hidden sm:inline">
            Recording
          </span>
        </div>

        {/* Center Meeting Button Icons */}
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center cursor-pointer">
            <Mic className="w-2.5 h-2.5" />
          </div>
          <div className="w-5 h-5 rounded-full bg-zinc-700 text-white flex items-center justify-center cursor-pointer">
            <Video className="w-2.5 h-2.5" />
          </div>
          <div className="w-5 h-5 rounded-full bg-zinc-700 text-white flex items-center justify-center cursor-pointer hidden sm:flex">
            <Share2 className="w-2.5 h-2.5" />
          </div>
          <div className="w-6 h-5 rounded-full bg-red-600 text-white flex items-center justify-center cursor-pointer">
            <PhoneOff className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-1.5 text-white/60 text-[8px] font-mono">
          <span>39 Active</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. REAL ZOBAY NEURAL VOICE AI CONSOLE UI
 * Authentic Voice AI Developer interface with live acoustic turn-taking meters & token flow
 */
export function ZobayVoiceUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#0a0a0d] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      {/* Top Header */}
      <div className="px-3 py-1.5 bg-[#12131a] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3 h-3 text-[#e9fba8] animate-pulse" />
          <span className="font-bold text-white">ZOBAY NEURAL ENGINE</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-[#e9fba8]/15 text-[#e9fba8] font-bold text-[9px]">
          140ms FULL-DUPLEX
        </span>
      </div>

      {/* Waveform Canvas & Model Stats */}
      <div className="p-3 flex-1 flex flex-col justify-between bg-[#06070a] space-y-2">
        {/* Latency & Turn-Taking Gauge */}
        <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
          <div className="bg-white/5 p-1.5 rounded border border-white/5">
            <div className="text-white/40 text-[8px]">INFERENCE</div>
            <div className="text-[#e9fba8] font-bold text-[11px]">138ms</div>
          </div>
          <div className="bg-white/5 p-1.5 rounded border border-white/5">
            <div className="text-white/40 text-[8px]">PROSODY</div>
            <div className="text-emerald-400 font-bold text-[11px]">99.4%</div>
          </div>
          <div className="bg-white/5 p-1.5 rounded border border-white/5">
            <div className="text-white/40 text-[8px]">MODEL</div>
            <div className="text-cyan-400 font-bold text-[11px]">70B MoE</div>
          </div>
        </div>

        {/* Live Acoustic Wave Visualizer */}
        <div className="bg-black/60 rounded-lg p-2 border border-white/5 space-y-1">
          <div className="flex justify-between text-[8px] text-white/50">
            <span>Acoustic VAD Stream</span>
            <span className="text-[#e9fba8]">Human Cadence Sync</span>
          </div>
          <div className="flex items-end justify-between gap-1 h-10">
            {[25, 45, 80, 95, 60, 100, 85, 40, 70, 90, 50, 65, 30].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-emerald-500 via-[#e9fba8] to-white rounded-xs animate-pulse"
                style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Live Token Dialog Stream */}
        <div className="bg-[#111218] p-2 rounded border border-white/5 text-[9px] leading-tight space-y-1">
          <div className="text-white/40 flex items-center justify-between text-[8px]">
            <span>USER STREAM</span>
            <span>0.02s</span>
          </div>
          <div className="text-white/90">&ldquo;Reschedule Q3 architecture review to 4 PM.&rdquo;</div>
          <div className="text-[#e9fba8] text-[8px] pt-0.5">&gt; Zobay: &ldquo;Updated and calendar invites dispatched.&rdquo;</div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1 bg-[#12131a] border-t border-white/10 flex items-center justify-between text-[8px] text-white/40">
        <span>Zero-VAD Latency Pipeline</span>
        <span className="text-emerald-400">Audio 48kHz Stereo</span>
      </div>
    </div>
  );
}

/**
 * 3. REAL SALESX PREDICTIVE CRM PIPELINE UI
 * Authentic Sales Dashboard Web Portal with browser frame
 */
export function SalesXUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#181a20] text-white flex flex-col justify-between overflow-hidden select-none font-sans border border-white/10 rounded-xl relative shadow-2xl">
      {/* Top Browser Chrome Address Bar */}
      <div className="px-3 py-1.5 bg-[#252830] border-b border-black/40 flex items-center justify-between text-[9px] font-mono text-white/70">
        <div className="flex items-center gap-1.5 truncate">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-1 text-white/40">|</span>
          <span className="text-white/90 bg-[#191b22] px-2 py-0.5 rounded border border-white/5 truncate">
            salesx.fortune.io/analytics-portal/live-pipeline
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px]">
          <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-mono font-bold">
            94.2% WIN RATE
          </span>
        </div>
      </div>

      {/* Main Content: High-Resolution Dashboard Portal Image */}
      <div className="flex-1 relative overflow-hidden bg-white group flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/salesx_custom.jpg"
          alt="SalesX Analytics Web Portal"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Bottom Status Bar */}
      <div className="px-3 py-1.5 bg-[#1e2027] border-t border-black/40 flex items-center justify-between text-[9px] font-mono text-white/70">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 font-bold">$1,482,900 Predicted ARR</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-white/50">
          <span>Stripe &amp; HubSpot Synced</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. REAL STARTONE CLUSTER OS ARCHITECTURE UI
 * Authentic Vercel/Kubernetes-grade cluster health dashboard
 */
export function StartOneUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#0d0a14] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      {/* Top Header */}
      <div className="px-3 py-1.5 bg-[#151022] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <Server className="w-3 h-3 text-violet-400" />
          <span className="font-bold text-white">STARTONE EDGE MESH</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-violet-500/20 text-violet-300 font-bold text-[9px]">
          99.999% SLA
        </span>
      </div>

      {/* Cluster Node Matrix */}
      <div className="p-3 flex-1 flex flex-col justify-between bg-[#08060e] space-y-2">
        <div className="flex justify-between items-center text-[9px]">
          <span className="text-white/50">CLUSTER ORCHESTRATION</span>
          <span className="text-emerald-400 font-bold">16 / 16 HEALTHY</span>
        </div>

        {/* 8-Node Health Badges */}
        <div className="grid grid-cols-4 gap-1">
          {[
            { name: "us-east", lat: "8ms" },
            { name: "us-west", lat: "14ms" },
            { name: "eu-cent", lat: "18ms" },
            { name: "eu-west", lat: "12ms" },
            { name: "ap-south", lat: "22ms" },
            { name: "ap-east", lat: "24ms" },
            { name: "sa-east", lat: "32ms" },
            { name: "af-south", lat: "38ms" },
          ].map((n, i) => (
            <div
              key={i}
              className="bg-[#181228] p-1 rounded border border-violet-500/20 flex flex-col items-center justify-center text-[8px]"
            >
              <span className="text-white/80 font-bold">{n.name}</span>
              <span className="text-emerald-400 text-[7px]">{n.lat}</span>
            </div>
          ))}
        </div>

        {/* Deployment Status */}
        <div className="bg-[#130f1e] p-1.5 rounded border border-white/5 text-[8px] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white/90">Zero-Downtime Hot Migration Active</span>
          </div>
          <span className="text-violet-300">0.00ms drop</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1 bg-[#151022] border-t border-white/10 flex items-center justify-between text-[8px] text-white/40">
        <span>Global Anycast IP Mesh</span>
        <span className="text-violet-400">Auto-Scaling Live</span>
      </div>
    </div>
  );
}

/**
 * 5. REAL AI SYSTEMS STUDIO UI
 * Neural weights & fine-tuned RAG context inspector
 */
export function AIStudioUIMockup() {
  return (
    <div className="w-full h-full bg-[#0a0f12] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      <div className="px-3 py-1.5 bg-[#10181d] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-amber-400" />
          <span className="font-bold text-white">AI NEURAL STUDIO</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold text-[9px]">
          128k CONTEXT
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between bg-[#060a0c] space-y-2 text-[9px]">
        <div className="flex justify-between items-center">
          <span className="text-white/50">FINE-TUNED RAG PIPELINE</span>
          <span className="text-amber-400 font-bold">114 tokens/sec</span>
        </div>

        <div className="bg-[#10181f] p-2 rounded border border-white/5 space-y-1">
          <div className="flex justify-between text-[8px] text-white/40">
            <span>Vector Embeddings</span>
            <span className="text-cyan-400">Cosine 0.992</span>
          </div>
          <div className="text-white/80 line-clamp-2">
            &gt; Model retrieved 14 architectural context chunks across enterprise knowledge graph.
          </div>
        </div>

        <div className="flex justify-between text-[8px] text-white/50 pt-1 border-t border-white/5">
          <span>Determinism Guardrails: ON</span>
          <span className="text-emerald-400">Zero Hallucinations</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. REAL BASEONE TREASURY LEDGER UI
 * High-frequency settlement verification terminal
 */
export function BaseOneUIMockup() {
  return (
    <div className="w-full h-full bg-[#090b0d] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      <div className="px-3 py-1.5 bg-[#12161a] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-[#e9fba8]" />
          <span className="font-bold text-white">BASEONE LEDGER</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-[#e9fba8]/20 text-[#e9fba8] font-bold text-[9px]">
          SUB-MS FINALITY
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between bg-[#050709] space-y-2 text-[9px]">
        <div className="flex justify-between items-center">
          <span className="text-white/50">BLOCK VERIFICATION</span>
          <span className="text-emerald-400 font-bold">#891,402 VALID</span>
        </div>

        <div className="bg-[#0e1318] p-2 rounded border border-white/5 space-y-1 text-[8px]">
          <div className="flex justify-between text-white/60">
            <span>TX Hash</span>
            <span className="text-white/40">0x7F2a...981c</span>
          </div>
          <div className="flex justify-between text-white/60">
            <span>Treasury Volume</span>
            <span className="text-[#e9fba8] font-bold">$8,420,000 USD</span>
          </div>
        </div>

        <div className="flex justify-between text-[8px] text-white/50 pt-1 border-t border-white/5">
          <span>Multi-Currency Settlement</span>
          <span className="text-[#e9fba8]">100% Cryptographic Audit</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. REAL LEGALX CONTRACT REDLINE UI
 */
export function LegalXContractUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#0a0c10] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      <div className="px-3 py-1.5 bg-[#12161f] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-amber-400" />
          <span className="font-bold text-white">LEGALX SENTINEL</span>
          <span className="text-white/30">|</span>
          <span className="text-amber-400">MSA_v4.2.pdf</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold text-[9px]">
          3 REDLINES FLAGGED
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between bg-[#08090d] space-y-2 text-[9px]">
        <div className="bg-[#141722] p-2 rounded border border-red-500/20 space-y-1">
          <div className="flex justify-between items-center text-[8px]">
            <span className="text-red-400 font-bold">§ 14.2 INDEMNITY RISK</span>
            <span className="text-white/40">Auto-Resolved</span>
          </div>
          <div className="line-through text-red-300/60 text-[8px] font-sans">
            &ldquo;Provider shall hold Customer harmless for unlimited consequential damages...&rdquo;
          </div>
          <div className="text-emerald-400 text-[8px] font-sans flex items-center gap-1">
            <Check className="w-2.5 h-2.5" />
            <span>Fallback Clause: &ldquo;Liability capped at 12 months fees paid.&rdquo;</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[8px] text-white/50 pt-1 border-t border-white/5">
          <span>Deterministic Risk Audit</span>
          <span className="text-emerald-400 font-bold">0.4s Verification</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 8. REAL GROWTHX ATTRIBUTION ENGINE UI
 */
export function GrowthXAnalyticsUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#0a0d14] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      <div className="px-3 py-1.5 bg-[#101622] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <PieChart className="w-3 h-3 text-sky-400" />
          <span className="font-bold text-white">GROWTHX REVENUE ATTRIBUTION</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 font-bold text-[9px]">
          MULTI-TOUCH RAG
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between bg-[#070a10] space-y-2 text-[9px]">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#121724] p-1.5 rounded border border-white/5">
            <div className="text-[7px] text-white/40">BLENDED CAC</div>
            <div className="text-white font-bold text-[11px]">$412</div>
          </div>
          <div className="bg-[#121724] p-1.5 rounded border border-white/5">
            <div className="text-[7px] text-white/40">PAYBACK</div>
            <div className="text-emerald-400 font-bold text-[11px]">3.1 mo</div>
          </div>
          <div className="bg-[#121724] p-1.5 rounded border border-white/5">
            <div className="text-[7px] text-white/40">LTV/CAC</div>
            <div className="text-sky-400 font-bold text-[11px]">8.4x</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[8px] text-white/60 bg-[#0f1420] p-1.5 rounded border border-white/5">
          <span>First-Party Pipeline Sync</span>
          <span className="text-emerald-400 font-bold">100% Cookieless</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 9. REAL VALIDSOFT BIOMETRIC DEFENSE UI
 */
export function ValidSoftBiometricUIMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full h-full bg-[#080b0f] text-white flex flex-col justify-between overflow-hidden select-none font-mono border border-white/10 rounded-xl relative">
      <div className="px-3 py-1.5 bg-[#0e141c] border-b border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <Fingerprint className="w-3 h-3 text-violet-400" />
          <span className="font-bold text-white">VALIDSOFT ACOUSTIC DEFENSE</span>
        </div>
        <span className="px-1.5 py-0.2 rounded bg-violet-500/20 text-violet-300 font-bold text-[9px]">
          SYNTHETIC DETECTED
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between bg-[#05070a] space-y-2 text-[9px]">
        <div className="flex justify-between items-center">
          <span className="text-white/50">VOCAL TRACT RESONANCE</span>
          <span className="text-emerald-400 font-bold">99.98% AUTHENTICITY</span>
        </div>

        <div className="bg-[#111722] p-2 rounded border border-white/5 space-y-1">
          <div className="flex justify-between text-[8px] text-white/60">
            <span>Acoustic Liveness Score</span>
            <span className="text-violet-400 font-bold">PASS (BIOLOGICAL)</span>
          </div>
          <div className="flex justify-between text-[8px] text-white/60">
            <span>Edge Gateway Gatekeeper</span>
            <span className="text-white/40">&lt; 12ms Latency</span>
          </div>
        </div>

        <div className="flex justify-between text-[8px] text-white/50 pt-1 border-t border-white/5">
          <span>Zero-Knowledge Telephony</span>
          <span className="text-violet-400">No Audio Stored</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Helper to dynamically render the corresponding authentic vector UI mockup by product ID
 */
export function renderProductMockup(id: string, compact = false) {
  switch (id) {
    case "meetingx":
      return <MeetingXUIMockup compact={compact} />;
    case "zobay":
    case "zobay-voice-ai":
      return <ZobayVoiceUIMockup compact={compact} />;
    case "salesx":
      return <SalesXUIMockup compact={compact} />;
    case "startone":
    case "startone-enterprise-os":
      return <StartOneUIMockup compact={compact} />;
    case "ai-systems":
    case "ai-studio":
    case "ai":
    case "socan":
      return <AIStudioUIMockup />;
    case "baseone":
    case "baseone-treasury-settlement":
      return <BaseOneUIMockup />;
    case "legalx":
    case "legalx-contract-sentinel":
      return <LegalXContractUIMockup compact={compact} />;
    case "growthx":
      return <GrowthXAnalyticsUIMockup compact={compact} />;
    case "validsoft":
    case "validsoft-core":
    case "validsoft-biometric-defense":
      return <ValidSoftBiometricUIMockup compact={compact} />;
    default:
      return <MeetingXUIMockup compact={compact} />;
  }
}
