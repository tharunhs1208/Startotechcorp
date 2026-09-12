"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Mic, LayoutGrid, Shield, Sparkles, Code, Cpu, Database, Server, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesListProps {
  onOpenDemo?: (serviceName?: string) => void;
}

export default function ServicesList({ onOpenDemo }: ServicesListProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      title: "Autonomous Voice AI Agents (Zobay)",
      category: "Voice & Speech Engine",
      desc: "Human-cadence conversational telephony agents operating with sub-280ms latency across 38 global edge POPs. Features multi-turn memory, emotion adaptation, and bi-directional CRM syncing.",
      tags: ["Speech-to-Speech", "WebRTC/SIP", "Voice Cloning", "Real-Time Interruption"],
      product: "Zobay",
      accent: "from-purple-500 to-indigo-500",
      accentColor: "#8b5cf6",
    },
    {
      num: "02",
      title: "Enterprise Cloud Operating System (StartOne)",
      category: "Infrastructure & Ops",
      desc: "All-in-one unified workspace replacing fragmented SaaS stacks. Orchestrates multi-entity ledgers, real-time fiscal reconciliation, automated employee pipelines, and drag-and-drop workflow graphs.",
      tags: ["Multi-Tenant Mesh", "Fiscal Ledger", "Pipeline Automation", "SSO / RBAC"],
      product: "StartOne",
      accent: "from-emerald-400 to-teal-500",
      accentColor: "#10b981",
    },
    {
      num: "03",
      title: "AI Contract & Regulatory Intelligence (LegalX)",
      category: "Legal Tech & Governance",
      desc: "Machine-speed clause auditing, high-risk indemnity detection, and automated playbook redlining. Scans complex 100+ page enterprise agreements in under 4 seconds with zero data leakage.",
      tags: ["50+ Clause Audits", "Playbook Redlines", "SOC-2 / GDPR", "Precedent RAG"],
      product: "LegalX",
      accent: "from-amber-400 to-rose-500",
      accentColor: "#f59e0b",
    },
    {
      num: "04",
      title: "Cross-System Workflow Orchestration",
      category: "Enterprise Mesh",
      desc: "Direct autonomous handoffs linking caller intents from Zobay into StartOne operational tasks, triggering LegalX compliance checks and issuing auto-executed procurement packets.",
      tags: ["Zero-Touch Mesh", "Event Streaming", "Webhook Fabric", "Automated Billing"],
      product: "Fortune Suite",
      accent: "from-blue-500 to-cyan-400",
      accentColor: "#3b82f6",
    },
    {
      num: "05",
      title: "Air-Gapped VPC & Dedicated Deployment",
      category: "Security & Sovereignty",
      desc: "Single-tenant isolated clusters, on-premises private clouds, or sovereign data VPCs for defense, government, healthcare, and Tier-1 financial institutions.",
      tags: ["Air-Gapped", "ISO 27001", "HIPAA Ready", "Dedicated GPUs"],
      product: "Fortune Enterprise",
      accent: "from-red-500 to-orange-500",
      accentColor: "#e70000",
    },
  ];

  return (
    <section id="services-section" className="py-24 relative z-20 bg-[#0a0c13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e70000] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Enterprise Services
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Architected to eliminate organizational friction and deploy production-ready AI workflows within weeks.
          </p>
        </div>

        {/* Numbered Service Accordion Rows */}
        <div className="border-t border-white/10">
          {services.map((svc, idx) => {
            const isHovered = hoveredService === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredService(idx)}
                className="border-b border-white/10 group relative transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div className="py-8 px-4 sm:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-6 lg:w-1/2">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-gray-500 group-hover:text-[#e70000] transition-colors duration-300">
                      {svc.num}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                        {svc.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle: Description & Tags */}
                  <div className="lg:w-5/12 text-left">
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA Arrow Button */}
                  <div className="lg:w-1/12 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: -45 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onOpenDemo && onOpenDemo(svc.product)}
                      className="w-12 h-12 rounded-full border border-white/15 group-hover:border-[#e70000] group-hover:bg-[#e70000] flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-lg"
                      aria-label={`Learn more about ${svc.title}`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Animated Bottom Glow Accent */}
                {isHovered && (
                  <motion.div
                    layoutId="serviceGlow"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e70000] to-transparent shadow-[0_0_15px_#e70000]"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
