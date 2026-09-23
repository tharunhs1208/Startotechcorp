"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextMaskReveal from "@/components/TextMaskReveal";
import ProductCard, { ProductData } from "@/components/ProductCard";

import ScrollCardTransition from "@/components/ScrollCardTransition";

type DepartmentFilter = "ALL" | "SALES" | "COMMUNICATION" | "OPERATIONS" | "ACCOUNTS" | "MARKETING" | "TECHNOLOGY";

interface ProductCatalogItem extends ProductData {
  department: DepartmentFilter;
}

const PRODUCTS: ProductCatalogItem[] = [
  {
    number: "01",
    id: "schedular",
    name: "Schedular",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2026",
    description: "Enterprise intelligent calendar orchestration, multi-timezone scheduling, and automated meeting routing without human calendar ping-pong.",
    beforeAfterSummary: "Teams cut multi-party scheduling turnaround from 6 days down to instant booking with automated resource reservations.",
    supportingLine: "Bi-directionally synchronizes with Google Workspace, Microsoft 365, and Apple iCloud in real time.",
    linkHref: "/projects/schedular",
    mediaSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Inspect calendar orchestration",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "meetingx",
    name: "MeetingX",
    department: "COMMUNICATION",
    departmentLabel: "Communication",
    year: "2026",
    description: "Browser-based executive AI copilot with sub-500ms live transcription, real-time action items, and automated Jira/Slack sync.",
    beforeAfterSummary: "Distributed product teams capture 100% of meeting decisions without writing manual follow-up recaps.",
    supportingLine: "Action items and summaries are organized during the call and pushed directly to project management boards.",
    linkHref: "/products/meetingx",
    mediaSrc: "/images/products/meetingx_pinterest.jpg",
    ctaLabel: "See how rooms connect",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "hirex",
    name: "HireX",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2026",
    description: "Autonomous candidate sourcing, semantic resume intelligence, and adaptive conversational technical screening interviews.",
    beforeAfterSummary: "Recruiting teams screen thousands of applicants in minutes and conduct bias-free technical assessments on autopilot.",
    supportingLine: "Integrates natively with Greenhouse, Lever, Workday, and custom HR management systems.",
    linkHref: "/projects/hirex",
    mediaSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Explore candidate screening",
    layout: "text-left-visual-right",
  },
  {
    number: "04",
    id: "salesx",
    name: "SalesX",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "Autonomous B2B prospect research, buying intent signal scoring, and multi-channel outreach pipeline automation.",
    beforeAfterSummary: "Teams cut first-response times from over 4 hours down to under 5 minutes without manual spreadsheet triage.",
    supportingLine: "Every conversation and stage change syncs directly with Salesforce and HubSpot records in real time.",
    linkHref: "/products/salesx",
    mediaSrc: "/images/products/salesx_custom.jpg",
    ctaLabel: "See how lead routing works",
    layout: "visual-left-text-right",
  },
  {
    number: "05",
    id: "zobay",
    name: "Zobay Voice AI",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "Answers customer phone calls and qualifies inbound inquiries with fluid sub-280ms speech pacing that adapts to caller interruptions.",
    beforeAfterSummary: "Callers experience natural back-and-forth conversation without the awkward 2-second delays of traditional phone trees.",
    supportingLine: "On hang-up, the system writes structured meeting notes and places appointments directly onto rep calendars.",
    linkHref: "/projects/zobay-voice-ai",
    mediaSrc: "/images/products/zobay_custom.jpg",
    ctaLabel: "Listen to live turn-taking",
    layout: "text-left-visual-right",
  },
  {
    number: "06",
    id: "legalx",
    name: "LegalX Contract Sentinel",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    description: "Scans commercial agreements and vendor contracts against standard legal playbooks to flag non-standard liability terms in under 10 seconds.",
    beforeAfterSummary: "In-house legal teams resolve contract review backlogs in minutes instead of losing weeks to manual page-by-page redlines.",
    supportingLine: "Replaces risky indemnity clauses with approved company fallback language before agreements go out for signature.",
    linkHref: "/projects/legalx",
    mediaSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Review the redline editor",
    layout: "visual-left-text-right",
  },
  {
    number: "07",
    id: "naksha-ai",
    name: "Naksha AI Geospatial",
    department: "TECHNOLOGY",
    departmentLabel: "Technology",
    year: "2026",
    description: "High-resolution satellite computer vision, automated land-use segmentation, and geospatial vector mapping intelligence.",
    beforeAfterSummary: "Replaces months of manual terrain surveying with instant sub-meter satellite change detection.",
    supportingLine: "Outputs cloud-native GeoJSON endpoints compatible with QGIS, ArcGIS, and custom web maps.",
    linkHref: "/projects/naksha-ai",
    mediaSrc: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Inspect satellite intelligence",
    layout: "text-left-visual-right",
  },
  {
    number: "08",
    id: "cashero",
    name: "Cashero Financial OS",
    department: "ACCOUNTS",
    departmentLabel: "Accounts",
    year: "2026",
    description: "Ongoing next-generation corporate treasury, smart expense orchestration, and multi-currency liquidity operating system.",
    beforeAfterSummary: "Corporate finance teams settle cross-border payments in seconds and automate invoice reconciliation with zero data drift.",
    supportingLine: "Features programmable virtual cards and real-time cash positioning across 100+ global corporate bank accounts.",
    linkHref: "/projects/cashero",
    mediaSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Discover autonomous treasury",
    layout: "visual-left-text-right",
  },
  {
    number: "09",
    id: "maya-ai",
    name: "Maya AI Voice Assistant",
    department: "TECHNOLOGY",
    departmentLabel: "Technology",
    year: "2026",
    description: "Ongoing flagship multimodal real-time voice assistant like Google Assistant with ambient reasoning, visual context, and autonomous tool calling.",
    beforeAfterSummary: "Delivers effortless, human-like voice conversations that adapt to natural interruptions and execute complex workflows.",
    supportingLine: "Perceives live camera feeds and connects with calendar, smart devices, email, and external APIs.",
    linkHref: "/projects/maya-ai",
    mediaSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Experience Maya AI voice",
    layout: "text-left-visual-right",
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
    <div className="min-h-screen bg-[#F3F3F3] text-[#000000] antialiased selection:bg-[#82FFCD] selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-10 sm:pb-16">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── PRODUCTS HERO ─────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 sm:pb-14 border-b border-black/[0.1]">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Products" }]} />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#555555] uppercase block mb-3 font-semibold">
                PRODUCTS
              </span>
              <TextMaskReveal
                text="Products built around real business needs."
                as="h1"
                once={false}
                className="text-3xl sm:text-5xl font-display font-bold tracking-[-0.03em] text-[#000000] leading-[1.12]"
              />
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#555555] max-w-md font-normal leading-relaxed">
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
                  className={`relative text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full shrink-0 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-[#666666] hover:text-[#000000] hover:bg-black/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="productActiveFilterPill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-[#82FFCD] rounded-full -z-10 shadow-xs"
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
                <ScrollCardTransition key={prod.id} index={idx}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.97,
                      transition: {
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    transition={{
                      layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.05, 0.25) },
                      y: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.05, 0.25) },
                      scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.05, 0.25) },
                    }}
                  >
                    <ProductCard product={prod} />
                  </motion.div>
                </ScrollCardTransition>
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
