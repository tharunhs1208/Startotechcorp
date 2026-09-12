"use client";

import React from "react";
import { Shield, Lock, Server, Globe2, Cpu, Database, Award, CheckCircle2 } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="bento-features" className="py-20 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Server className="w-3.5 h-3.5" /> Enterprise Grade Reliability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Global Fortune 500 Scale
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Uncompromising compliance, edge performance, and air-gapped security infrastructure across all FortuneTechCorp platforms.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Multi-Region Low Latency Edge (2 cols) */}
          <div className="md:col-span-2 rounded-3xl bg-[#10121a]/90 border border-white/10 p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Global Edge Data Highway
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Deployed across 38 global edge POPs ensuring Zobay voice latency remains under 280ms, StartOne multi-tenant workspaces sync instantaneously, and LegalX audits stream seamlessly.
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Average P99 Packet Latency:</span>
              <span className="text-indigo-400 font-bold">14.2ms Global</span>
            </div>
          </div>

          {/* Card 2: Security & SOC-2 Certification */}
          <div className="rounded-3xl bg-[#10121a]/90 border border-white/10 p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Zero-Trust Security
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              SOC-2 Type II, ISO 27001, and HIPAA compliant. End-to-end encryption across all voice streams and legal documents.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> End-to-End Encrypted
            </div>
          </div>

          {/* Card 3: Air-Gapped Dedicated Deployments */}
          <div className="rounded-3xl bg-[#10121a]/90 border border-white/10 p-8 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Private VPC & On-Prem
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Available as single-tenant dedicated instances, on-premises air-gapped clusters, or hybrid enterprise clouds.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Custom Data Isolation
            </div>
          </div>

          {/* Card 4: Unified FortuneTechCorp API Mesh (Full Width on 2 cols) */}
          <div className="md:col-span-2 rounded-3xl bg-[#10121a]/90 border border-white/10 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Unified FortuneCore API SDK
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A single TypeScript, Python, and Go SDK to control Zobay voice pipelines, StartOne business objects, and LegalX contract audits with type-safe schema definitions.
            </p>

            <div className="bg-black/50 rounded-xl p-3.5 border border-white/5 font-mono text-xs text-gray-300">
              <span className="text-purple-400 font-bold">import</span> &#123; FortuneCorp &#125; <span className="text-purple-400 font-bold">from</span> <span className="text-emerald-300">'@fortunetech/core'</span>;
              <br />
              <span className="text-gray-500">// Initialize unified autonomous client</span>
              <br />
              <span className="text-indigo-400">const</span> client = <span className="text-indigo-400">new</span> FortuneCorp(&#123; apiKey: process.env.FORTUNE_KEY &#125;);
            </div>
          </div>

          {/* Card 5: 99.99% High Availability Cluster (2 cols) */}
          <div className="md:col-span-2 rounded-3xl bg-[#10121a]/90 border border-white/10 p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Fault-Tolerant Redundancy
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Real-time active-active replication ensuring zero downtime even in multi-datacenter network degradation events. Backed by financial uptime guarantees.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
              <div className="p-2.5 rounded-lg bg-white/5">
                <span className="text-gray-400">Failover Time:</span> <span className="text-cyan-400 font-bold">&lt; 350ms</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5">
                <span className="text-gray-400">Replication:</span> <span className="text-cyan-400 font-bold">Triple Region</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
