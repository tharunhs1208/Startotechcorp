"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Shield,
  Activity,
  Cpu,
  BarChart3,
  Layers,
  Lock,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import ScrollCardTransition from "@/components/ScrollCardTransition";

const MARKET_TABLE_DATA = [
  {
    id: "btc",
    pair: "BTC / USDT",
    name: "Bitcoin Core",
    price: "$89,420.50",
    change24h: "+8.42%",
    isPositive: true,
    volume24h: "$42.8B",
    high24h: "$90,150.00",
    low24h: "$82,300.00",
    sparkline: "M 0 20 Q 20 5, 40 18 T 80 8 T 120 2",
  },
  {
    id: "eth",
    pair: "ETH / USDT",
    name: "Ethereum Smart Layer",
    price: "$3,640.20",
    change24h: "+5.16%",
    isPositive: true,
    volume24h: "$18.4B",
    high24h: "$3,710.00",
    low24h: "$3,450.00",
    sparkline: "M 0 22 Q 25 15, 50 19 T 90 10 T 120 4",
  },
  {
    id: "sol",
    pair: "SOL / USDT",
    name: "Solana High-Throughput",
    price: "$214.80",
    change24h: "+14.85%",
    isPositive: true,
    volume24h: "$8.9B",
    high24h: "$218.00",
    low24h: "$186.50",
    sparkline: "M 0 24 Q 20 20, 45 10 T 85 6 T 120 1",
  },
  {
    id: "strato",
    pair: "STRATO / USD",
    name: "Strato Tech AI Index",
    price: "$1,450.00",
    change24h: "+24.30%",
    isPositive: true,
    volume24h: "$4.1B",
    high24h: "$1,490.00",
    low24h: "$1,160.00",
    sparkline: "M 0 25 Q 30 18, 60 12 T 95 5 T 120 0",
  },
];

const TRADING_FEATURES = [
  {
    id: "engine",
    title: "Sub-0.018ms Execution Engine",
    tag: "Ultra-Low Latency",
    description: "Custom FPGA-accelerated order matching engine collocated directly in low-latency financial exchanges worldwide with zero mempool front-running.",
    metric: "0.018ms Latency",
    metricColor: "#00f298",
    icon: Zap,
  },
  {
    id: "ai-signals",
    title: "Neural Alpha Signals & Predictive AI",
    tag: "Automated Strategy",
    description: "Multi-layered transformer models analyze liquidity depth, order book imbalance, and cross-exchange arbitrage opportunities in real time.",
    metric: "99.4% Precision",
    metricColor: "#38bdf8",
    icon: Activity,
  },
  {
    id: "security",
    title: "Multi-Sig MPC Vault & Cold Security",
    tag: "Institutional Custody",
    description: "Hardware security modules (HSM) with threshold cryptography, automated anomaly circuit-breakers, and 100% segregated asset reserves.",
    metric: "$42.8B Insured",
    metricColor: "#818cf8",
    icon: Shield,
  },
  {
    id: "liquidity",
    title: "Deep Liquidity Smart Order Routing",
    tag: "Zero Slippage",
    description: "Aggregates over 28 Tier-1 liquidity venues and decentralized market makers to guarantee minimal spread and zero price slippage on large tickets.",
    metric: "28+ Connected Pools",
    metricColor: "#00f298",
    icon: Layers,
  },
];

export default function TradingFeaturesSection() {
  const [filter, setFilter] = useState<"ALL" | "HOT" | "GAINERS">("ALL");

  return (
    <section className="relative w-full py-20 bg-[#07090e] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,242,152,0.06),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* ── 1. LIVE MARKETS TABLE ─────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#00f298] uppercase block mb-1 font-bold">
                ● LIVE MARKET FLOW
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Institutional-Grade Liquidity
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06]">
              {(["ALL", "HOT", "GAINERS"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    filter === f ? "bg-white/15 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0d111c]/90 border border-white/[0.08] backdrop-blur-xl overflow-x-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.06] text-[11px] font-mono text-zinc-400 uppercase tracking-wider bg-white/[0.02]">
                  <th className="py-4 px-6">Asset Pair</th>
                  <th className="py-4 px-6">Price (USD)</th>
                  <th className="py-4 px-6">24h Change</th>
                  <th className="py-4 px-6">24h High / Low</th>
                  <th className="py-4 px-6">24h Volume</th>
                  <th className="py-4 px-6">7d Trend</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-[13px] font-mono">
                {MARKET_TABLE_DATA.map((row) => (
                  <tr key={row.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                          {row.pair.split(" ")[0]}
                        </div>
                        <div>
                          <span className="font-bold text-white block">{row.pair}</span>
                          <span className="text-[11px] text-zinc-500">{row.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-bold text-white text-[14px]">{row.price}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 font-bold text-[#00f298] bg-[#00f298]/10 px-2 py-0.5 rounded">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        {row.change24h}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-300">
                      <span className="text-white block">{row.high24h}</span>
                      <span className="text-zinc-500 text-[11px]">{row.low24h}</span>
                    </td>
                    <td className="py-4 px-6 text-zinc-300">{row.volume24h}</td>
                    <td className="py-4 px-6">
                      <svg width="120" height="28" className="overflow-visible">
                        <path
                          d={row.sparkline}
                          fill="none"
                          stroke="#00f298"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="px-3.5 py-1.5 rounded-lg bg-[#00f298]/10 hover:bg-[#00f298] text-[#00f298] hover:text-black font-bold text-xs transition-all border border-[#00f298]/30">
                        Trade Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 2. FEATURE ARCHITECTURE CARDS (Vino Costa Motion Pattern) ── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#38bdf8] uppercase block mb-1 font-bold">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Engineered for Maximum Alpha
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRADING_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollCardTransition key={feature.id} index={i}>
                  <div className="h-full rounded-2xl bg-[#0d111c]/80 border border-white/[0.08] p-6 flex flex-col justify-between backdrop-blur-xl hover:border-white/20 transition-all group shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#00f298]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold block mb-2">
                        {feature.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2.5 font-display group-hover:text-[#00f298] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] text-zinc-400 leading-relaxed font-normal">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#00f298]">{feature.metric}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </ScrollCardTransition>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
