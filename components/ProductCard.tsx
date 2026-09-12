"use client";

import React, { useState, useRef } from "react";
import { 
  Mic, 
  LayoutGrid, 
  Shield, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Volume2, 
  TrendingUp, 
  FileText, 
  Activity, 
  Cpu, 
  Zap, 
  Layers, 
  AlertCircle,
  Clock,
  Play,
  Pause,
  ExternalLink
} from "lucide-react";

export interface ProductData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  badgeColor: string;
  accentGradient: string;
  glowClass: string;
  icon: "mic" | "grid" | "shield";
  features: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

interface ProductCardProps {
  product: ProductData;
  onOpenDemo: (productName: string) => void;
  onExpandDetails: (product: ProductData) => void;
}

export default function ProductCard({ product, onOpenDemo, onExpandDetails }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Live simulation states inside the cards
  const [zobayPlaying, setZobayPlaying] = useState(false);
  const [legalScanProgress, setLegalScanProgress] = useState(85);
  const [startoneViewMode, setStartoneViewMode] = useState<"kpi" | "tasks">("kpi");

  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const getProductIcon = () => {
    switch (product.icon) {
      case "mic":
        return <Mic className="w-6 h-6 text-purple-400" />;
      case "grid":
        return <LayoutGrid className="w-6 h-6 text-emerald-400" />;
      case "shield":
        return <Shield className="w-6 h-6 text-amber-400" />;
    }
  };

  const getBorderColor = () => {
    switch (product.id) {
      case "product-zobay":
        return "group-hover:border-purple-500/50";
      case "product-startone":
        return "group-hover:border-emerald-500/50";
      case "product-legalx":
        return "group-hover:border-amber-500/50";
      default:
        return "group-hover:border-indigo-500/50";
    }
  };

  return (
    <div
      id={product.id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl bg-[#10121a]/90 border border-white/10 ${getBorderColor()} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5`}
      style={{
        boxShadow: isHovered
          ? `0 20px 40px -15px ${
              product.id === "product-zobay"
                ? "rgba(139, 92, 246, 0.25)"
                : product.id === "product-startone"
                ? "rgba(16, 185, 129, 0.25)"
                : "rgba(245, 158, 11, 0.25)"
            }`
          : undefined,
      }}
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Top Banner Accent Line */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${product.accentGradient}`} />

      {/* Card Content Area */}
      <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col">
        {/* Header: Icon, Category Badge & Product Name */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-300`}>
              {getProductIcon()}
            </div>
            <div>
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                {product.category}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1 flex items-center gap-2">
                {product.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Tagline & Description */}
        <p className="text-sm font-semibold text-gray-200 mb-2">
          {product.tagline}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* ============================================================ */}
        {/* INTERACTIVE PRODUCT SIMULATION WIDGET                       */}
        {/* ============================================================ */}
        <div className="mb-6 rounded-2xl bg-[#090a0f]/90 border border-white/10 p-4 relative overflow-hidden backdrop-blur-md">
          {/* 1. Zobay Voice AI Simulation */}
          {product.id === "product-zobay" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-mono font-medium text-emerald-400">Agent: Sarah (Active)</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">240ms latency</span>
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="h-10 bg-purple-950/20 rounded-xl border border-purple-500/20 px-3 flex items-center justify-center gap-1">
                {[14, 28, 40, 18, 32, 45, 20, 36, 48, 22, 16, 38, 42, 19, 30].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-indigo-400 transition-all duration-300"
                    style={{
                      height: zobayPlaying ? `${(h * (i % 2 === 0 ? 1.2 : 0.8)).toFixed(0)}%` : `${(h * 0.4).toFixed(0)}%`,
                    }}
                  />
                ))}
              </div>

              {/* Live Transcript Stream */}
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] space-y-1.5">
                <div className="text-gray-400">
                  <span className="text-indigo-400 font-semibold">User:</span> "Can you reschedule my consultation to Thursday 2 PM?"
                </div>
                <div className="text-gray-200">
                  <span className="text-purple-400 font-semibold">Zobay:</span> "Done! I updated your appointment and sent a calendar invite."
                </div>
              </div>

              <button
                type="button"
                onClick={() => setZobayPlaying(!zobayPlaying)}
                className="w-full py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {zobayPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{zobayPlaying ? "Pause Live Voice Simulation" : "Simulate Live Agent Speech"}</span>
              </button>
            </div>
          )}

          {/* 2. StartOne Enterprise OS Simulation */}
          {product.id === "product-startone" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Enterprise Workspace Hub
                </span>
                <div className="flex rounded-md bg-white/5 p-0.5 text-[10px]">
                  <button
                    onClick={() => setStartoneViewMode("kpi")}
                    className={`px-2 py-0.5 rounded ${startoneViewMode === "kpi" ? "bg-emerald-500 text-white font-bold" : "text-gray-400"}`}
                  >
                    KPIs
                  </button>
                  <button
                    onClick={() => setStartoneViewMode("tasks")}
                    className={`px-2 py-0.5 rounded ${startoneViewMode === "tasks" ? "bg-emerald-500 text-white font-bold" : "text-gray-400"}`}
                  >
                    Pipelines
                  </button>
                </div>
              </div>

              {startoneViewMode === "kpi" ? (
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-lg bg-emerald-950/15 border border-emerald-500/20">
                    <div className="text-[10px] text-gray-400">Total Run-Rate</div>
                    <div className="text-base font-black text-white">$4.82M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">+28.4% YoY</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/15 border border-emerald-500/20">
                    <div className="text-[10px] text-gray-400">Automated Ops</div>
                    <div className="text-base font-black text-white">96.8%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">Zero-touch sync</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                    <span className="text-gray-300">Quarterly Financial Ledger Consolidation</span>
                    <span className="text-emerald-400 font-bold">Auto-completed</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                    <span className="text-gray-300">Multi-Org Payroll Dispatch</span>
                    <span className="text-emerald-400 font-bold">Synchronized</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-white/5">
                <span>Multi-Tenant Mesh</span>
                <span className="text-emerald-300 font-medium">SOC-2 Type II Verified</span>
              </div>
            </div>
          )}

          {/* 3. LegalX Contract AI Simulation */}
          {product.id === "product-legalx" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-gray-300">Master Services Agreement.pdf</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                  Risk Score: 98/100
                </span>
              </div>

              {/* Scanning Laser Animation Simulation */}
              <div className="relative p-2.5 rounded-lg bg-amber-950/15 border border-amber-500/20 text-[11px] space-y-1 overflow-hidden">
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b] animate-pulse" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">§ 14.2 Limitation of Liability</span>
                  <span className="text-emerald-400 font-semibold text-[10px]">Verified Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">§ 8.1 Mutual Indemnification</span>
                  <span className="text-amber-400 font-semibold text-[10px]">Clause Optimized</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">§ 21 Governing Jurisdiction</span>
                  <span className="text-emerald-400 font-semibold text-[10px]">Standard Delaware</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-white/5">
                <span>AI Precedents: 120,000+</span>
                <span className="text-amber-300 font-medium">Automatic Redline Ready</span>
              </div>
            </div>
          )}
        </div>

        {/* Feature Checkpoints */}
        <div className="space-y-2 mb-6">
          {product.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Product Metric Highlights */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 mb-6">
          {product.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-lg font-bold text-white">{m.value}</div>
              <div className="text-xs text-gray-400 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center gap-3 relative z-10">
        <button
          type="button"
          onClick={() => onExpandDetails(product)}
          className="flex-1 py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/10 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Deep Specs</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </button>

        <button
          type="button"
          onClick={() => onOpenDemo(product.name)}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            product.id === "product-zobay"
              ? "bg-purple-600 hover:bg-purple-500 shadow-purple-600/30"
              : product.id === "product-startone"
              ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
              : "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30"
          }`}
        >
          <span>Deploy {product.name}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
