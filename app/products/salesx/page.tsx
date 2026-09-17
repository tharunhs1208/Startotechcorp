"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, User, Phone, Mail, DollarSign, Calendar, Filter, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";

interface DealCard {
  id: string;
  contactName: string;
  company: string;
  value: string;
  stage: "New" | "Qualified" | "Proposal" | "Won";
  priority: "High" | "Medium" | "Low";
  lastActivity: string;
}

const INITIAL_DEALS: DealCard[] = [
  {
    id: "deal-1",
    contactName: "Marcus Sterling",
    company: "Apex Global Logistics",
    value: "$48,000",
    stage: "New",
    priority: "High",
    lastActivity: "Inbound form submitted (10m ago)",
  },
  {
    id: "deal-2",
    contactName: "Sarah Chen",
    company: "Vanguard Tech Corp",
    value: "$120,000",
    stage: "Qualified",
    priority: "High",
    lastActivity: "Discovery call completed",
  },
  {
    id: "deal-3",
    contactName: "David Reynolds",
    company: "Novus Financial Group",
    value: "$85,000",
    stage: "Proposal",
    priority: "Medium",
    lastActivity: "MSA contract draft sent",
  },
  {
    id: "deal-4",
    contactName: "Elena Rostova",
    company: "Meridian Cloud",
    value: "$64,000",
    stage: "Won",
    priority: "High",
    lastActivity: "Contract executed · Onboarding",
  },
];

export default function SalesXProductPage() {
  const [deals, setDeals] = useState<DealCard[]>(INITIAL_DEALS);
  const [selectedDealId, setSelectedDealId] = useState<string>("deal-2");
  const [activeStageFilter, setActiveStageFilter] = useState<string>("ALL");

  const selectedDeal = deals.find((d) => d.id === selectedDealId) || deals[0];

  const advanceStage = (dealId: string) => {
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id !== dealId) return d;
        const stages: DealCard["stage"][] = ["New", "Qualified", "Proposal", "Won"];
        const nextIdx = (stages.indexOf(d.stage) + 1) % stages.length;
        return { ...d, stage: stages[nextIdx], lastActivity: "Stage advanced just now" };
      })
    );
  };

  const capabilities = [
    {
      title: "Automated Lead Triage",
      desc: "Instant inbound routing, intent categorization, and automated deal allocation across sales representatives.",
    },
    {
      title: "Scheduled Follow-up Cadence",
      desc: "Structured email and telephony follow-up sequences with zero dropped client interactions.",
    },
    {
      title: "Two-Way CRM Synchronization",
      desc: "Real-time bi-directional data pipelines syncing contacts, activities, and contract stages with existing enterprise databases.",
    },
    {
      title: "Pipeline Analytics & Forecasting",
      desc: "Clean pipeline visibility with real-time conversion rates, deal velocity tracking, and revenue forecasting.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Lead Capture",
      desc: "Captures inbound inquiries across web portals, forms, and email channels.",
    },
    {
      step: "02",
      title: "Qualification",
      desc: "Verifies budget, authority, need, and project timeline with structured criteria.",
    },
    {
      step: "03",
      title: "Communication",
      desc: "Coordinates walkthroughs, sends tailored proposals, and manages follow-ups.",
    },
    {
      step: "04",
      title: "Conversion",
      desc: "Executes digital agreements and initiates immediate customer onboarding.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-4 uppercase tracking-wider">
              <span className="font-semibold text-[#1d1d1f]">PRODUCT</span>
              <span>·</span>
              <span>SALES · PLATFORM</span>
              <span>·</span>
              <span>2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-[-0.035em] text-[#1d1d1f] leading-[1.05] mb-6">
              SalesX
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mb-10">
              A digital platform built to support sales teams, lead management, customer follow-ups, and sales workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?subject=Inquiry+regarding+SalesX"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Inquire about SalesX</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#preview"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-black/[0.08] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                <span>Explore live preview</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT SALESX DOES ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20 border-b border-black/[0.08]">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                PURPOSE & VALUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] leading-snug">
                Built for sales velocity and execution.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed">
              <p>
                SalesX eliminates spreadsheet fragmentation by giving sales teams a structured, real-time command center for lead capture, deal qualification, follow-up scheduling, and contract signing.
              </p>
              <p>
                Engineered with instant search, minimal interface clutter, and automated task reminders, SalesX keeps sales representatives focused on closing deals rather than updating manual logs.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. INTERACTIVE PRODUCT PREVIEW ─────────────────────────── */}
        <section id="preview" className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-8 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                INTERACTIVE PREVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Pipeline & Lead Management Canvas
              </h2>
            </div>
            <span className="text-[12px] font-mono text-[#86868b]">
              Click any deal to view details or advance stage
            </span>
          </div>

          {/* Realistic SalesX App Window */}
          <div className="rounded-xl border border-black/[0.08] bg-white shadow-md overflow-hidden">
            {/* Top Toolbar */}
            <div className="px-5 py-3.5 bg-[#f8fafc] border-b border-black/[0.06] flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#1d1d1f]">SalesX Workspace</span>
                <span className="text-[#86868b]">/</span>
                <span className="text-[#6e6e73]">Q1 Enterprise Pipeline</span>
              </div>

              <div className="flex items-center gap-2">
                {["ALL", "New", "Qualified", "Proposal", "Won"].map((stg) => (
                  <button
                    key={stg}
                    onClick={() => setActiveStageFilter(stg)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      activeStageFilter === stg
                        ? "bg-[#1d1d1f] text-white"
                        : "bg-white border border-black/[0.06] text-[#6e6e73] hover:text-[#1d1d1f]"
                    }`}
                  >
                    {stg}
                  </button>
                ))}
              </div>
            </div>

            {/* Pipeline Grid & Detail Drawer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08]">
              {/* Deals List */}
              <div className="lg:col-span-7 p-4 sm:p-6 space-y-3">
                {deals
                  .filter((d) => activeStageFilter === "ALL" || d.stage === activeStageFilter)
                  .map((deal) => {
                    const isSelected = deal.id === selectedDealId;

                    return (
                      <div
                        key={deal.id}
                        onClick={() => setSelectedDealId(deal.id)}
                        className={`p-4 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#f8fafc] border-[#0071e3]/40 shadow-xs ring-1 ring-[#0071e3]/20"
                            : "bg-white border-black/[0.06] hover:bg-[#fafafa]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-[14px] text-[#1d1d1f]">
                            {deal.contactName}
                          </span>
                          <span className="font-mono font-semibold text-[13px] text-[#1d1d1f]">
                            {deal.value}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[12px] text-[#6e6e73]">
                          <span>{deal.company}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                              deal.stage === "Won"
                                ? "bg-emerald-50 text-emerald-700"
                                : deal.stage === "Proposal"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-black/[0.04] text-[#1d1d1f]"
                            }`}
                          >
                            {deal.stage}
                          </span>
                        </div>

                        <div className="mt-2 text-[11px] font-mono text-[#86868b]">
                          {deal.lastActivity}
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Deal Inspector Side Panel */}
              <div className="lg:col-span-5 p-6 bg-[#fafafa] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] font-semibold">
                      Deal Details
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-black/[0.06] text-[#0071e3] font-semibold">
                      Priority: {selectedDeal.priority}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-[#1d1d1f] mb-1">
                    {selectedDeal.contactName}
                  </h3>
                  <p className="text-[13px] text-[#6e6e73] mb-5">{selectedDeal.company}</p>

                  <div className="space-y-3 text-[12px] font-mono mb-6">
                    <div className="flex items-center justify-between p-2.5 rounded bg-white border border-black/[0.06]">
                      <span className="text-[#86868b]">Pipeline Value:</span>
                      <strong className="text-[#1d1d1f]">{selectedDeal.value}</strong>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded bg-white border border-black/[0.06]">
                      <span className="text-[#86868b]">Current Stage:</span>
                      <strong className="text-[#0071e3]">{selectedDeal.stage}</strong>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded bg-white border border-black/[0.06]">
                      <span className="text-[#86868b]">Activity Status:</span>
                      <span className="text-[#1d1d1f] truncate max-w-[160px]">{selectedDeal.lastActivity}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06] space-y-2">
                  <button
                    onClick={() => advanceStage(selectedDeal.id)}
                    className="w-full py-2.5 rounded-lg bg-[#1d1d1f] text-white text-[13px] font-medium hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Advance Pipeline Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href={`/contact?subject=SalesX+Inquiry+for+${encodeURIComponent(selectedDeal.company)}`}
                    className="w-full py-2 rounded-lg bg-white border border-black/[0.08] text-[#1d1d1f] text-[12px] font-medium hover:bg-[#f5f5f7] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Custom SalesX Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. KEY CAPABILITIES ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                PLATFORM MODULES
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Key Capabilities
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Core functionalities built to support modern high-velocity sales teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-black/[0.08]">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="border-t border-black/[0.08] pt-6">
                <span className="text-[12px] font-mono text-[#6e6e73] block mb-2">0{idx + 1}</span>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{cap.title}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SALES WORKFLOW ──────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                THE PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Sales Execution Flow
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              How SalesX guides opportunities from initial inquiry to closed agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-black/[0.08]">
            {workflowSteps.map((step) => (
              <div key={step.step} className="border-t border-black/[0.08] pt-6">
                <span className="text-[12px] font-mono text-[#6e6e73] block mb-2">{step.step}</span>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{step.title}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5.5 TECHNOLOGY STACK ──────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                INFRASTRUCTURE & TECH
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Core Technologies
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Engineered with modern, reactive, low-latency enterprise frameworks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pb-20 border-b border-black/[0.08]">
            {["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis", "Docker", "AWS", "WebSockets"].map((t, idx) => (
              <TechBadge key={idx} name={t} />
            ))}
          </div>
        </section>

        {/* ── 6. FINAL CTA ───────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-2 font-semibold">
                DEPLOYMENT
              </span>
              <h3 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] mb-3">
                Ready to deploy SalesX in your business?
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
                We configure and customize SalesX around your specific sales pipeline, CRM schemas, and team structure.
              </p>
            </div>

            <div>
              <Link
                href="/contact?subject=SalesX+Custom+Deployment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Discuss SalesX</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
