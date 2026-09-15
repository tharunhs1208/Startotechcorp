"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sparkles, Activity, ShieldCheck, Zap, Server, Wifi, ArrowUpRight } from "lucide-react";
import Counter from "./Counter";

interface EdgeNode {
  id: string;
  city: string;
  region: "Americas" | "Europe" | "APAC" | "Middle East";
  latency: number;
  status: "Optimal" | "Synced";
  workload: string;
  bandwidth: string;
}

const EDGE_NODES: EdgeNode[] = [
  { id: "node-fra", city: "Frankfurt (FRA-01)", region: "Europe", latency: 14, status: "Optimal", workload: "Voice Mesh + ZK Ledger", bandwidth: "100 Gbps" },
  { id: "node-iad", city: "N. Virginia (IAD-02)", region: "Americas", latency: 18, status: "Optimal", workload: "StartOne Core OS + Legal LLM", bandwidth: "200 Gbps" },
  { id: "node-lhr", city: "London (LHR-01)", region: "Europe", latency: 16, status: "Optimal", workload: "Telephony Gateway + SOC-2", bandwidth: "100 Gbps" },
  { id: "node-sin", city: "Singapore (SIN-01)", region: "APAC", latency: 22, status: "Optimal", workload: "Cross-Border Settlement", bandwidth: "100 Gbps" },
  { id: "node-hnd", city: "Tokyo (HND-01)", region: "APAC", latency: 24, status: "Optimal", workload: "Acoustic Biometrics Shield", bandwidth: "100 Gbps" },
  { id: "node-sjc", city: "San Jose (SJC-01)", region: "Americas", latency: 19, status: "Optimal", workload: "AI Neural Pipeline", bandwidth: "200 Gbps" },
  { id: "node-dxb", city: "Dubai (DXB-01)", region: "Middle East", latency: 29, status: "Synced", workload: "Regional Sovereign Mesh", bandwidth: "50 Gbps" },
  { id: "node-gru", city: "São Paulo (GRU-01)", region: "Americas", latency: 42, status: "Synced", workload: "Latin America Clearing", bandwidth: "50 Gbps" },
  { id: "node-syd", city: "Sydney (SYD-01)", region: "APAC", latency: 38, status: "Synced", workload: "Oceania Voice Ingest", bandwidth: "50 Gbps" },
];

export default function GlobalLatencyMap() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | "Americas" | "Europe" | "APAC" | "Middle East">("All");

  const filteredNodes = EDGE_NODES.filter(
    (node) => selectedRegion === "All" || node.region === selectedRegion
  );

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl overflow-hidden relative text-left">
      {/* Subtle Glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Region Pills */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-widest text-emerald-800 mb-2">
            <Wifi className="w-3.5 h-3.5" /> 38 Sovereign Edge Clusters
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950">
            Global Edge Topology &amp; Latency Matrix
          </h3>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {(["All", "Americas", "Europe", "APAC", "Middle East"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedRegion === region
                  ? "bg-slate-950 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Live Global Edge Metric Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 text-center">
        <div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Average Edge Ping</div>
          <div className="text-lg font-black text-emerald-600 mt-0.5">18.4ms</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Total Mesh Throughput</div>
          <div className="text-lg font-black text-slate-950 mt-0.5">2.4 Tbps</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Active Gateways</div>
          <div className="text-lg font-black text-indigo-600 mt-0.5">38 PoPs</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Packet Loss</div>
          <div className="text-lg font-black text-emerald-600 mt-0.5">0.000%</div>
        </div>
      </div>

      {/* Node Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredNodes.map((node) => (
            <motion.div
              key={node.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {node.city}
                  </span>
                </div>
                <span className="text-xs font-mono font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {node.latency}ms
                </span>
              </div>

              <div className="text-[11px] text-slate-600 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Routing Workload:</span>
                  <span className="text-slate-800 font-semibold truncate max-w-[140px]">{node.workload}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Capacity:</span>
                  <span className="text-slate-900 font-bold">{node.bandwidth}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
