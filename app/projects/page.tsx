"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    linkHref: "/projects/startone-enterprise-os",
    layout: "visual-right",
  },
  {
    number: "02",
    id: "zobay-voice-ui",
    discipline: "UI / UX & STREAMING",
    productName: "Zobay",
    category: "ENGINEERING",
    year: "2026",
    scopeSummary: "Designing and engineering a voice-led conversational experience with sub-280ms audio turn-taking and real-time visual telemetry.",
    deliverables: ["Direct Spectrogram Neural Pipeline", "WebRTC Audio Gateway", "Acoustic Sentiment Visualizer"],
    mediaType: "video",
    mediaSrc: "/videos/zobay.mp4",
    linkHref: "/projects/zobay-voice-ai",
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
    deliverables: ["WebRTC Media Pipeline", "Next.js App Router Client", "Multi-Participant Room Mesh"],
    mediaType: "video",
    mediaSrc: "/videos/hero-pinterest.mp4",
    linkHref: "/contact?subject=MeetingX+Case+Study",
    layout: "visual-right",
  },
  {
    number: "04",
    id: "baseone-systems",
    discipline: "DISTRIBUTED SYSTEMS",
    productName: "BaseOne",
    category: "ENGINEERING",
    year: "2025",
    scopeSummary: "Engineering a high-frequency multi-currency settlement ledger with sub-50ms transaction clearing and double-entry accounting reconciliation.",
    deliverables: ["Lock-Free Memory Queues", "ISO 20022 Compliance Engine", "Multi-Currency Routing Matrix"],
    mediaType: "video",
    mediaSrc: "/videos/baseone.mp4",
    linkHref: "/projects/baseone-treasury-settlement",
    layout: "visual-left",
  },
  {
    number: "05",
    id: "startone-arch",
    discipline: "ENTERPRISE ARCHITECTURE",
    productName: "StartOne",
    category: "PRODUCT",
    year: "2025",
    scopeSummary: "Architecting a unified multi-tenant cloud workspace consolidating fragmented spreadsheets, approval chains, and resource management.",
    deliverables: ["Multi-Tenant RBAC Security", "Real-Time Executive Dashboards", "Workflow Automation Hooks"],
    mediaType: "video",
    mediaSrc: "/videos/startone.mp4",
    linkHref: "/projects/startone-enterprise-os",
    layout: "visual-right",
  },
  {
    number: "06",
    id: "legalx-ai",
    discipline: "CONTRACT INTELLIGENCE",
    productName: "LegalX",
    category: "RESEARCH",
    year: "2025",
    scopeSummary: "Engineering a deterministic document review pipeline that audits Master Services Agreements and flags liability risks in under 10 seconds.",
    deliverables: ["Private Document Embeddings", "Deterministic Risk Scoring Engine", "SOC-2 Air-Gapped Sandbox"],
    mediaType: "video",
    mediaSrc: "/videos/legalx.mp4",
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
      {/* ── WORK HERO ───────────────────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              WORK
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.15] max-w-2xl">
              The work behind the products.
            </h1>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
            Design, development, engineering, and product work that turns business requirements into working digital products.
          </p>
        </div>

        {/* Categories Navigation (Simple text filters) */}
        <div className="mt-10 pt-6 border-t border-black/[0.06] flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md transition-colors shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#1d1d1f] text-white font-medium"
                  : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── WORK CASE-STUDY ENTRIES ─────────────────────────────────── */}
      <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
        <div className="space-y-16 sm:space-y-24">
          {filtered.map((work) => {
            const isVisualLeft = work.layout === "visual-left";

            return (
              <article
                key={work.id}
                className="group border-b border-black/[0.08] pb-16 sm:pb-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Media Visual Container */}
                  <div
                    className={`lg:col-span-7 overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.06] ${
                      isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
                    }`}
                  >
                    <Link href={work.linkHref} className="block overflow-hidden">
                      {work.mediaType === "video" ? (
                        <video
                          src={work.mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={work.mediaSrc}
                          alt={work.productName}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      )}
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
                      <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-3 uppercase tracking-wider">
                        <span className="font-semibold text-[#1d1d1f]">{work.number}</span>
                        <span>—</span>
                        <span className="text-[#1d1d1f]">{work.discipline}</span>
                        <span>·</span>
                        <span>{work.year}</span>
                      </div>

                      {/* Product Title */}
                      <h2 className="text-3xl font-display font-medium text-[#1d1d1f] tracking-tight mb-3">
                        <Link href={work.linkHref} className="hover:underline underline-offset-4">
                          {work.productName}
                        </Link>
                      </h2>

                      {/* Scope Summary */}
                      <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-6 font-normal">
                        {work.scopeSummary}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-1.5 mb-8 text-[12px] font-mono text-[#1d1d1f]">
                        {work.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-[#86868b]">↳</span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={work.linkHref}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                      >
                        <span>View work</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-[14px] font-mono text-[#6e6e73] uppercase mb-4">
                No work items found for the {activeCategory} category.
              </p>
              <button
                onClick={() => setActiveCategory("ALL")}
                className="text-[13px] font-medium text-[#1d1d1f] underline underline-offset-4 cursor-pointer"
              >
                View all work
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <Suspense fallback={<div className="py-24 text-center text-[#6e6e73]">Loading work...</div>}>
          <WorkContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
