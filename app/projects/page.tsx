"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type WorkCategory = "ALL" | "DESIGN" | "DEVELOPMENT" | "ENGINEERING" | "INTEGRATION" | "PRODUCT" | "RESEARCH";

interface WorkEntry {
  number: string;
  id: string;
  discipline: string;
  productName: string;
  category: WorkCategory;
  year: string;
  scopeSummary: string;
  deliverables: string[];
  mediaType: "video" | "image";
  mediaSrc: string;
  linkHref: string;
  layout: "visual-right" | "visual-left";
}

const WORK_ITEMS: WorkEntry[] = [
  {
    number: "01",
    id: "salesx-design",
    discipline: "PRODUCT DESIGN",
    productName: "SalesX",
    category: "DESIGN",
    year: "2026",
    scopeSummary: "Designing the complete end-to-end interface and workflow system for sales pipeline tracking, lead triage, and client follow-ups.",
    deliverables: ["User Workflow Mapping", "Figma Design System", "Interactive Prototype", "Design Handoff"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/salesx",
    layout: "visual-right",
  },
  {
    number: "02",
    id: "aura-fintech-design",
    discipline: "UX & DESIGN SYSTEM",
    productName: "Aura Wealth",
    category: "DESIGN",
    year: "2026",
    scopeSummary: "Crafting a luxury financial interface with fluid 120Hz micro-interactions, dark-mode design tokens, and accessible candlestick charting.",
    deliverables: ["Design Token Architecture", "120Hz Micro-Interactions", "Mobile Onboarding Flow", "WCAG 2.1 AAA Accessibility"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/aura-fintech-design-system",
    layout: "visual-left",
  },
  {
    number: "03",
    id: "meetingx-dev",
    discipline: "WEB DEVELOPMENT",
    productName: "MeetingX",
    category: "DEVELOPMENT",
    year: "2026",
    scopeSummary: "Building a responsive meeting experience with low-latency peer-to-peer screen sharing, audio synchronization, and collaborative chat.",
    deliverables: ["WebRTC Media Pipeline", "Next.js App Router Client", "Multi-Participant Room Mesh", "Live AI Transcriptions"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/meetingx",
    layout: "visual-right",
  },
  {
    number: "04",
    id: "socan-royalty-mesh",
    discipline: "STREAMING & FULL-STACK",
    productName: "SOCAN Media",
    category: "DEVELOPMENT",
    year: "2025",
    scopeSummary: "Full-stack development of a real-time broadcast media stream monitor indexing 1.2 billion tracks with automated micro-payment splits.",
    deliverables: ["Live Audio Stream Sniffer", "Next.js Rightsholder Dashboard", "Smart-Contract Payout Gateway", "Multi-Tenant API"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/socan-royalty-mesh",
    layout: "visual-left",
  },
  {
    number: "05",
    id: "zobay-voice-ui",
    discipline: "UI / UX & STREAMING",
    productName: "Zobay Voice AI",
    category: "ENGINEERING",
    year: "2026",
    scopeSummary: "Designing and engineering a voice-led conversational experience with sub-280ms audio turn-taking and real-time visual telemetry.",
    deliverables: ["Direct Spectrogram Neural Pipeline", "WebRTC Audio Gateway", "Acoustic Sentiment Visualizer", "SIP Telephony Trunking"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/zobay-voice-ai",
    layout: "visual-right",
  },
  {
    number: "06",
    id: "baseone-systems",
    discipline: "DISTRIBUTED SYSTEMS",
    productName: "BaseOne Treasury",
    category: "ENGINEERING",
    year: "2025",
    scopeSummary: "Engineering a high-frequency multi-currency settlement ledger with sub-50ms transaction clearing and double-entry accounting reconciliation.",
    deliverables: ["Lock-Free Memory Queues", "ISO 20022 Compliance Engine", "Multi-Currency Routing Matrix", "Zero-Knowledge Audit Logs"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/baseone-treasury-settlement",
    layout: "visual-left",
  },
  {
    number: "07",
    id: "enterprise-erp-bridge",
    discipline: "DATA & SYSTEM INTEGRATION",
    productName: "Enterprise Cloud Mesh",
    category: "INTEGRATION",
    year: "2026",
    scopeSummary: "Architecting real-time bi-directional integration meshes connecting SAP S/4HANA, Stripe Billing, Salesforce CRM, and AWS distributed data pipelines.",
    deliverables: ["Bi-Directional Event Sinks", "Sub-100ms Webhook Orchestrator", "Automated Conflict Resolution Engine", "Zero-Downtime Data Replay"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/baseone-treasury-settlement",
    layout: "visual-right",
  },
  {
    number: "08",
    id: "validsoft-shield-integration",
    discipline: "SECURITY API INTEGRATION",
    productName: "ValidSoft Biometric Gateway",
    category: "INTEGRATION",
    year: "2025",
    scopeSummary: "Integrating an acoustic voice biometric authentication shield and real-time deepfake defense API across banking telephony and identity verification endpoints.",
    deliverables: ["Sub-150ms Biometric Auth Gateway", "FIDO2 / NIST Compliance Connectors", "Telephony Interceptor Hooks", "Live Threat Telemetry"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/validsoft-biometric-defense",
    layout: "visual-left",
  },
  {
    number: "09",
    id: "startone-arch",
    discipline: "ENTERPRISE ARCHITECTURE",
    productName: "StartOne OS",
    category: "PRODUCT",
    year: "2025",
    scopeSummary: "Architecting a unified multi-tenant cloud workspace consolidating fragmented spreadsheets, approval chains, and resource management.",
    deliverables: ["Multi-Tenant RBAC Security", "Real-Time Executive Dashboards", "Workflow Automation Hooks", "Single Sign-On (SSO)"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/startone-enterprise-os",
    layout: "visual-right",
  },
  {
    number: "10",
    id: "novus-spatial-product",
    discipline: "SPATIAL PRODUCT ENGINE",
    productName: "Novus Spatial 3D",
    category: "PRODUCT",
    year: "2026",
    scopeSummary: "Building an immersive WebGL-powered 3D spatial product configurator with dynamic materials, lighting, and real-time checkout synchronization.",
    deliverables: ["WebGL Render Pipeline", "Interactive Swatch System", "Apple Pay 1-Click Checkout", "Mobile Gesture Controls"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/novus-spatial-3d-ux",
    layout: "visual-left",
  },
  {
    number: "11",
    id: "legalx-ai",
    discipline: "CONTRACT INTELLIGENCE",
    productName: "LegalX Sentinel",
    category: "RESEARCH",
    year: "2025",
    scopeSummary: "Engineering a deterministic document review pipeline that audits Master Services Agreements and flags liability risks in under 10 seconds.",
    deliverables: ["Private Document Embeddings", "Deterministic Risk Scoring Engine", "SOC-2 Air-Gapped Sandbox", "Automated Redline Playbooks"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/legalx-contract-sentinel",
    layout: "visual-right",
  },
  {
    number: "12",
    id: "neuro-rag-research",
    discipline: "NEURAL VECTOR RAG",
    productName: "NeuroGraph Search",
    category: "RESEARCH",
    year: "2026",
    scopeSummary: "Researching and developing deterministic multi-hop neural retrieval algorithms combining vector graphs and semantic clustering for enterprise data.",
    deliverables: ["Vector Graph Traversal Algorithm", "Deterministic Latency Benchmarks", "Sub-50ms Semantic Caching", "Citation Precision Evaluation"],
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/legalx-contract-sentinel",
    layout: "visual-left",
  },
];

function WorkContent() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("ALL");

  const categories: WorkCategory[] = [
    "ALL",
    "DESIGN",
    "DEVELOPMENT",
    "ENGINEERING",
    "INTEGRATION",
    "PRODUCT",
    "RESEARCH",
  ];

  const filtered = WORK_ITEMS.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <>
      {/* ── WORK HERO WITH STAGGERED REVEAL TRANSITIONS ─────────────── */}
      <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              FEATURED WORK & CASE STUDIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.15] max-w-2xl">
              The engineering behind the products.
            </h1>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
            Design, development, distributed engineering, and product architecture that turns complex requirements into high-performing digital systems.
          </p>
        </motion.div>

        {/* Categories Navigation with Springy Animated Active Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 pt-6 border-t border-black/[0.06] flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative text-[11px] sm:text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md shrink-0 cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "text-[#1d1d1f] font-semibold"
                    : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="workActiveCategoryPill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-black/[0.08] border border-black/[0.06] rounded-md -z-10"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── WORK CASE-STUDY CARDS WITH SILKY INTERACTIVE TRANSITIONS ── */}
      <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
        <motion.div layout className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((work, idx) => {
              const isVisualLeft = work.layout === "visual-left";

              return (
                <motion.article
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 36, scale: 0.98 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.65,
                      delay: Math.min(idx * 0.05, 0.25),
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{
                    opacity: 0,
                    y: -24,
                    scale: 0.98,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  transition={{
                    layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="group rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-9 lg:p-10 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_54px_-12px_rgba(0,0,0,0.08)] transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Media Visual Container with Slow Zoom */}
                    <div
                      className={`lg:col-span-7 overflow-hidden rounded-xl bg-zinc-100 border border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 ${
                        isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
                      }`}
                    >
                      <Link href={work.linkHref} className="block overflow-hidden relative group/media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={work.mediaSrc}
                          alt={work.productName}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover/media:translate-y-0 transition-transform duration-300 inline-flex items-center gap-1.5">
                            <span>Explore Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Scope & Details Container */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between ${
                        isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
                      }`}
                    >
                      <div>
                        {/* Number & Discipline Metadata */}
                        <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-mono text-[#6e6e73] mb-3 uppercase tracking-[0.16em]">
                          <span className="font-bold text-[#1d1d1f]">{work.number}</span>
                          <span>/</span>
                          <span className="text-[#1d1d1f] font-medium">{work.discipline}</span>
                          <span>·</span>
                          <span>{work.year}</span>
                        </div>

                        {/* Product Title */}
                        <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] tracking-tight mb-3">
                          <Link href={work.linkHref} className="hover:text-black transition-colors inline-block relative link-underline">
                            {work.productName}
                          </Link>
                        </h2>

                        {/* Scope Summary */}
                        <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-6 font-light">
                          {work.scopeSummary}
                        </p>

                        {/* Deliverables with Animated Checklist */}
                        <div className="space-y-2 mb-8 text-[12px] font-mono text-[#1d1d1f]">
                          {work.deliverables.map((deliv, i) => (
                            <div key={i} className="flex items-center gap-2 text-zinc-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                        <Link
                          href={work.linkHref}
                          className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1d1d1f] hover:text-emerald-700 transition-colors"
                        >
                          <span className="link-underline">View Project Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-emerald-600" />
                        </Link>

                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                          {work.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {filtered.length === 0 && (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="py-24 text-center rounded-2xl border border-black/[0.08] bg-white p-12"
              >
                <Layers className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                <p className="text-[13px] font-mono text-[#6e6e73] uppercase mb-4">
                  No projects found under the {activeCategory} category.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("ALL")}
                  className="text-xs font-semibold uppercase tracking-wider text-black underline underline-offset-4 cursor-pointer"
                >
                  View all projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


      </section>
    </>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <Suspense fallback={<div className="py-24 text-center text-[#6e6e73]">Loading work...</div>}>
          <WorkContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
