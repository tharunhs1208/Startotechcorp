"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    id: "salesx",
    name: "SalesX",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "Routes incoming inbound leads directly to account executives based on territory and company size, then triggers follow-up cadences.",
    beforeAfterSummary: "Teams cut first-response times from over 4 hours down to under 5 minutes without manual spreadsheet triage.",
    supportingLine: "Every conversation and stage change syncs directly with Salesforce and HubSpot records in real time.",
    linkHref: "/products/salesx",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "See how lead routing works",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay Voice AI",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "Answers customer phone calls and qualifies inbound inquiries with fluid speech pacing that adapts to caller interruptions.",
    beforeAfterSummary: "Callers experience natural back-and-forth conversation without the awkward 2-second delays of traditional phone trees.",
    supportingLine: "On hang-up, the system writes structured meeting notes and places appointments directly onto rep calendars.",
    linkHref: "/projects/zobay-voice-ai",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Listen to live turn-taking",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    department: "COMMUNICATION",
    departmentLabel: "Communication",
    year: "2026",
    description: "Browser-based video collaboration with adaptive selective forwarding, real-time shared canvases, and live transcription.",
    beforeAfterSummary: "Distributed product teams run multi-participant reviews with clear 1080p video, even on constrained bandwidth.",
    supportingLine: "Action items and summaries are organized during the call and pushed directly to project management boards.",
    linkHref: "/products/meetingx",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "See how rooms connect",
    layout: "text-left-visual-right",
  },
  {
    number: "04",
    id: "startone",
    name: "StartOne Enterprise OS",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    description: "Connects internal financial approvals, team resource allocations, and cross-department milestones into one unified workspace.",
    beforeAfterSummary: "Replaces disconnected spreadsheets and standalone approval apps, giving leaders an accurate view of operational budgets.",
    supportingLine: "Every purchase request and contract review follows clear governance rules with a verifiable audit log.",
    linkHref: "/projects/startone-enterprise-os",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Inspect the operational workspace",
    layout: "visual-left-text-right",
  },
  {
    number: "05",
    id: "baseone",
    name: "BaseOne Treasury",
    department: "ACCOUNTS",
    departmentLabel: "Accounts",
    year: "2025",
    description: "Automates multi-currency clearing and bank reconciliation across international accounts with a double-entry ledger.",
    beforeAfterSummary: "Corporate finance teams settle cross-border supplier payments in seconds rather than waiting three banking days.",
    supportingLine: "Reconciles inbound bank transfers with internal invoices automatically to eliminate manual accounting discrepancies.",
    linkHref: "/projects/baseone-treasury-settlement",
    mediaSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Review multi-currency clearing",
    layout: "text-left-visual-right",
  },
  {
    number: "06",
    id: "legalx",
    name: "LegalX Contract Sentinel",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    description: "Scans commercial agreements and vendor contracts against standard legal playbooks to flag non-standard liability terms.",
    beforeAfterSummary: "In-house legal teams resolve contract review backlogs in minutes instead of losing weeks to manual page-by-page redlines.",
    supportingLine: "Replaces risky indemnity clauses with approved company fallback language before agreements go out for signature.",
    linkHref: "/projects/legalx-contract-sentinel",
    mediaSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Review the redline editor",
    layout: "visual-left-text-right",
  },
  {
    number: "07",
    id: "growthx",
    name: "GrowthX Intelligence",
    department: "MARKETING",
    departmentLabel: "Marketing",
    year: "2026",
    description: "Tracks customer acquisition journeys from first touchpoint to closed revenue without relying on third-party tracking cookies.",
    beforeAfterSummary: "Marketing leaders identify which specific campaigns drove revenue rather than guessing from aggregate ad clicks.",
    supportingLine: "Aggregates conversion data across web channels to calculate accurate payback periods and customer acquisition costs.",
    linkHref: "/products/salesx",
    mediaSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "See how attribution models work",
    layout: "text-left-visual-right",
  },
  {
    number: "08",
    id: "validsoft-core",
    name: "ValidSoft Biometric Defense",
    department: "TECHNOLOGY",
    departmentLabel: "Technology",
    year: "2025",
    description: "Analyzes vocal tract resonance during telephone authentication to detect synthetic voice clones and prevent account takeover fraud.",
    beforeAfterSummary: "Financial institutions stop unauthorized wire transfers by verifying callers using biological vocal acoustic physics.",
    supportingLine: "Operates directly on edge telephony gateways without storing or transmitting raw customer voice recordings.",
    linkHref: "/projects/validsoft-biometric-defense",
    mediaSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    ctaLabel: "Inspect biometric defense proofs",
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
                <ScrollCardTransition key={prod.id} index={idx}>
                  <motion.div
                    layout
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
