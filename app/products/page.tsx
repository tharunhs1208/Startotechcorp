"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextMaskReveal from "@/components/TextMaskReveal";
import ProductCard, { ProductData } from "@/components/ProductCard";

type DepartmentFilter = "ALL" | "SALES" | "COMMUNICATION" | "OPERATIONS" | "ACCOUNTS" | "MARKETING" | "TECHNOLOGY";

interface ProductCatalogItem extends ProductData {
  department: DepartmentFilter;
}

const PRODUCTS: ProductCatalogItem[] = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    metricBadge: "⚡ 3.4x Faster Follow-up",
    description: "A high-velocity digital sales platform engineered to automate pipeline triaging, lead qualification, and multi-channel customer follow-ups.",
    highlights: [
      "Real-time pipeline routing and automated lead triage in <500ms.",
      "Predictive conversion score engine with custom cadence triggers.",
      "Bi-directional synchronization with Salesforce, HubSpot, and custom DBs.",
    ],
    capabilities: [
      { title: "Lead Intelligence", desc: "Automated scoring and enrichment in <500ms" },
      { title: "Pipeline Automation", desc: "Trigger multi-touch cadences dynamically" },
      { title: "Bi-directional Sync", desc: "Real-time sync with Salesforce & HubSpot" },
      { title: "Deal Velocity Insights", desc: "Live bottleneck detection across deal stages" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker"],
    architecture: "Event-driven edge architecture running on low-latency microservices with sub-50ms Redis caching and transactional PostgreSQL replication.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/salesx",
    ctaLabel: "View SalesX Details",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay Voice AI",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    metricBadge: "🎙️ <280ms Turn-Taking Latency",
    description: "A full-duplex voice AI platform engineered for natural, low-latency sales conversations, instantaneous qualification, and meeting bookings.",
    highlights: [
      "Sub-280ms full-duplex voice-to-voice neural pipeline.",
      "Interruption-aware speech synthesis with conversational tone nuance.",
      "Automated structured call notes and immediate calendar bookings.",
    ],
    capabilities: [
      { title: "Sub-280ms Loop", desc: "Full-duplex speech recognition & synthesis" },
      { title: "Interruption Aware", desc: "Natural back-and-forth conversational fluidity" },
      { title: "Contextual Memory", desc: "Maintains multi-turn context throughout calls" },
      { title: "Instant Summaries", desc: "Structured CRM record extraction on hang-up" },
    ],
    techStack: ["WebRTC", "Python", "PyTorch", "Next.js", "FastAPI", "Docker"],
    architecture: "Custom WebRTC media server pipeline streaming audio to deep acoustic neural models with optimized GPU kernel inference.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/zobay-voice-ai",
    ctaLabel: "View Zobay Demo",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    department: "COMMUNICATION",
    departmentLabel: "Communication",
    year: "2026",
    metricBadge: "🌐 99.99% Mesh Uptime",
    description: "A next-generation collaboration and real-time meeting platform engineered for crystal-clear video streaming and automated AI transcription summaries.",
    highlights: [
      "Adaptive SFU video routing optimized for low-bandwidth environments.",
      "Live speaker-differentiated transcription and automated action items.",
      "End-to-end encrypted rooms with granular role access controls.",
    ],
    capabilities: [
      { title: "Adaptive Bitrate", desc: "4K video streaming with selective forwarding unit" },
      { title: "Live Transcriptions", desc: "Speaker-differentiated speech-to-text in real time" },
      { title: "Interactive Canvas", desc: "Multiplayer whiteboarding with zero input lag" },
      { title: "Action Item Sync", desc: "Auto-extract tasks and push to Jira and Notion" },
    ],
    techStack: ["WebRTC", "Next.js", "TypeScript", "Node.js", "Redis", "AWS"],
    architecture: "Global distributed SFU mesh topology with WebAssembly audio processing and WebSocket state synchronization.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/meetingx",
    ctaLabel: "View MeetingX Details",
    layout: "text-left-visual-right",
  },
  {
    number: "04",
    id: "startone",
    name: "StartOne Enterprise OS",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2026",
    metricBadge: "🏢 60% Fewer Tool Silos",
    description: "An all-in-one operational operating system connecting financial approvals, team resource tracking, cross-departmental roadmaps, and day-to-day business coordination.",
    highlights: [
      "Unified operational workspace consolidating approval chains and task ownership.",
      "Real-time departmental capacity and financial burn rate dashboards.",
      "Role-based governance with enterprise SOC2 audit compliance.",
    ],
    capabilities: [
      { title: "Multi-Tier Approvals", desc: "Automated routing for capital expenses and contracts" },
      { title: "Resource Orchestration", desc: "Live workload balancing across engineering and design" },
      { title: "Audit Trail Sentinel", desc: "SOC2-compliant immutable logging for every record" },
      { title: "Unified Data Mesh", desc: "Aggregates disparate team tools into one single pane" },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS"],
    architecture: "Microservices backend communicating over gRPC with row-level security PostgreSQL multi-tenancy and encrypted data stores.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/startone-enterprise-os",
    ctaLabel: "View StartOne System",
    layout: "visual-left-text-right",
  },
  {
    number: "05",
    id: "baseone",
    name: "BaseOne Treasury",
    department: "ACCOUNTS",
    departmentLabel: "Accounts",
    year: "2025",
    metricBadge: "⚡ Instant Multi-Currency Settlement",
    description: "A financial settlement and treasury platform built to manage multi-currency balances, cross-border transactions, and instant account reconciliation.",
    highlights: [
      "Real-time liquidity forecasting and foreign exchange hedging.",
      "Automated ledger reconciliation with sub-second transaction validation.",
      "Bank-grade security with multi-signature authorization flows.",
    ],
    capabilities: [
      { title: "Multi-Currency Ledger", desc: "Double-entry bookkeeping supporting 40+ fiat & stable currencies" },
      { title: "Automated Reconciliation", desc: "99.8% auto-match rate on incoming bank settlements" },
      { title: "Liquidity Sentinel", desc: "Predictive cash flow shortfall alerts and runway analysis" },
      { title: "Multi-Sig Authorizations", desc: "Hardware-key verified release protocols for large wires" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Docker", "AWS"],
    architecture: "High-throughput event sourcing engine powered by Redis pub/sub and strict ACID-compliant double-entry ledger database.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/baseone-treasury-settlement",
    ctaLabel: "View BaseOne Platform",
    layout: "text-left-visual-right",
  },
  {
    number: "06",
    id: "legalx",
    name: "LegalX Contract Sentinel",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    metricBadge: "🛡️ 100% Automated Policy Verification",
    description: "An intelligent contract review and document verification platform designed to streamline compliance checks, clause comparison, and agreement execution.",
    highlights: [
      "Instant clause risk scoring and non-standard term detection.",
      "Side-by-side redline generation with regulatory compliance checklists.",
      "Seamless integration with e-signature and enterprise document storage.",
    ],
    capabilities: [
      { title: "Clause Risk Analyzer", desc: "Flags high-liability indemnities and jurisdiction risks" },
      { title: "Automated Redlining", desc: "Generates standard fallback clauses in seconds" },
      { title: "Regulatory Checkpoints", desc: "Validates GDPR, HIPAA, and custom vendor guidelines" },
      { title: "Contract Lifecycle Hub", desc: "Renewal alerts, obligation tracking, and secure vault" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AWS"],
    architecture: "LLM-assisted document parsing pipeline with vector similarity indexing and deterministic rule engine verification.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/legalx-contract-sentinel",
    ctaLabel: "View LegalX Sentinel",
    layout: "visual-left-text-right",
  },
  {
    number: "07",
    id: "growthx",
    name: "GrowthX Intelligence",
    department: "MARKETING",
    departmentLabel: "Marketing",
    year: "2026",
    metricBadge: "🎯 +180% Campaign ROI",
    description: "An autonomous marketing intelligence and revenue attribution engine providing continuous multi-touch campaign analytics and conversion optimization.",
    highlights: [
      "Multi-touch attribution across web, mobile, paid, and organic channels.",
      "Automated cohort retention modeling and CAC/LTV optimization.",
      "Instant visual dashboard and ad-spend synchronization with Meta and Google.",
    ],
    capabilities: [
      { title: "Multi-Touch Attribution", desc: "Track full-funnel customer journeys with zero cookies" },
      { title: "Cohort Modeling", desc: "Predict churn risk and lifetime value with ML models" },
      { title: "Automated Ad Optimization", desc: "Real-time budget reallocation based on ROAS" },
      { title: "Unified Campaign Hub", desc: "Live performance feeds across all paid channels" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "ClickHouse", "Redis", "AWS"],
    architecture: "Columnar ClickHouse analytics engine aggregating billions of raw telemetry events with sub-100ms SQL query execution.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/salesx",
    ctaLabel: "View GrowthX Engine",
    layout: "text-left-visual-right",
  },
  {
    number: "08",
    id: "validsoft-core",
    name: "ValidSoft Biometric Defense",
    department: "TECHNOLOGY",
    departmentLabel: "Technology",
    year: "2025",
    metricBadge: "🛡️ Sub-150ms Threat Shield",
    description: "A cybersecurity engine analyzing micro-frequency vocal tract resonance to detect synthetic AI voice clones and biometric spoofing in real time.",
    highlights: [
      "Sub-150ms spectrogram neural pipeline detecting deepfakes across telephony networks.",
      "Zero-knowledge biometric proofs with FIDO2 / NIST 800-63B standard compliance.",
      "Automated risk scoring and real-time security alerting for enterprise IT infrastructure.",
    ],
    capabilities: [
      { title: "Spectrogram Neural Analysis", desc: "Detects micro-frequency artifacts in cloned audio" },
      { title: "Low-Latency Edge SDK", desc: "Under 150ms inference on CPU and mobile devices" },
      { title: "Zero-Knowledge Biometrics", desc: "No raw voiceprints stored, cryptographic hashing only" },
      { title: "Threat Telemetry Gateway", desc: "Live SIEM integration with Splunk and Datadog" },
    ],
    techStack: ["C++", "Python", "TensorFlow", "WebRTC", "CUDA", "Linux"],
    architecture: "Hardware-accelerated edge inference clusters running CUDA-optimized acoustic models with millisecond threat telemetry.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/validsoft-biometric-defense",
    ctaLabel: "View Biometric Defense",
    layout: "visual-left-text-right",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<DepartmentFilter>("ALL");

  const filterOptions: DepartmentFilter[] = [
    "ALL",
    "SALES",
    "COMMUNICATION",
    "OPERATIONS",
    "ACCOUNTS",
    "MARKETING",
    "TECHNOLOGY",
  ];

  const filtered = PRODUCTS.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.department === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-10 sm:pb-16">
        {/* ── PRODUCTS HERO ─────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 sm:pb-14 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
                PRODUCTS
              </span>
              <TextMaskReveal
                text="Products built around real business needs."
                as="h1"
                once={false}
                className="text-3xl sm:text-5xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.12]"
              />
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
              Digital products designed and built to support the way different teams work.
            </p>
          </div>

          {/* Minimal Text Filter with Smooth Animated Active Pill */}
          <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setActiveFilter(opt)}
                  className={`relative text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md shrink-0 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-[#1d1d1f] font-semibold"
                      : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="productActiveDepartmentPill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-black/[0.08] border border-black/[0.06] rounded-md -z-10"
                    />
                  )}
                  <span className="relative z-10">{opt}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── EDITORIAL PRODUCT LIST WITH ELEVATED CARDS ──────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
          <motion.div layout className="space-y-8 sm:space-y-12">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((prod, idx) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 32, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.55,
                      delay: Math.min(idx * 0.04, 0.2),
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.98,
                    transition: {
                      duration: 0.32,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  transition={{
                    layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <ProductCard product={prod} />
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <motion.div
                  key="empty-products"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="py-24 text-center"
                >
                  <p className="text-[14px] font-mono text-[#6e6e73] uppercase mb-4">
                    No products found for the {activeFilter} department.
                  </p>
                  <button
                    onClick={() => setActiveFilter("ALL")}
                    className="text-[13px] font-medium text-[#1d1d1f] underline underline-offset-4 cursor-pointer"
                  >
                    View all products
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
