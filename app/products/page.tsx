"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type DepartmentFilter = "ALL" | "SALES" | "COMMUNICATION" | "OPERATIONS" | "ACCOUNTS" | "MARKETING" | "TECHNOLOGY";

interface ProductItem {
  number: string;
  id: string;
  name: string;
  slug: string;
  department: DepartmentFilter;
  departmentLabel: string;
  year: string;
  description: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  linkHref: string;
  ctaLabel: string;
  layout: "text-left-visual-right" | "visual-left-text-right";
}

const PRODUCTS: ProductItem[] = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    slug: "salesx",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "A platform built to support sales teams, lead management, customer follow-ups, and sales workflows.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/salesx",
    ctaLabel: "View SalesX",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay",
    slug: "zobay-voice-ai",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    description: "A voice-focused platform designed around sales communication and customer conversations.",
    mediaType: "video",
    mediaSrc: "/videos/zobay.mp4",
    linkHref: "/projects/zobay-voice-ai",
    ctaLabel: "View Zobay",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    slug: "meetingx",
    department: "COMMUNICATION",
    departmentLabel: "Communication",
    year: "2026",
    description: "A meeting and collaboration platform designed for simple online communication.",
    mediaType: "video",
    mediaSrc: "/videos/hero-pinterest.mp4",
    linkHref: "/products/meetingx",
    ctaLabel: "View MeetingX",
    layout: "text-left-visual-right",
  },
  {
    number: "04",
    id: "startone",
    name: "StartOne",
    slug: "startone-enterprise-os",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2026",
    description: "An operational platform connecting financial approvals, team resource tracking, and day-to-day business coordination.",
    mediaType: "video",
    mediaSrc: "/videos/startone.mp4",
    linkHref: "/projects/startone-enterprise-os",
    ctaLabel: "View StartOne",
    layout: "visual-left-text-right",
  },
  {
    number: "05",
    id: "baseone",
    name: "BaseOne",
    slug: "baseone-treasury-settlement",
    department: "ACCOUNTS",
    departmentLabel: "Accounts",
    year: "2025",
    description: "A financial settlement and treasury platform built to manage multi-currency balances, transactions, and account reconciliation.",
    mediaType: "video",
    mediaSrc: "/videos/baseone.mp4",
    linkHref: "/projects/baseone-treasury-settlement",
    ctaLabel: "View BaseOne",
    layout: "text-left-visual-right",
  },
  {
    number: "06",
    id: "legalx",
    name: "LegalX",
    slug: "legalx-contract-sentinel",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    description: "A contract review and document verification platform designed to streamline compliance checks and contract workflows.",
    mediaType: "video",
    mediaSrc: "/videos/legalx.mp4",
    linkHref: "/projects/legalx-contract-sentinel",
    ctaLabel: "View LegalX",
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

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* ── PRODUCTS HERO ─────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
                PRODUCTS
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.15] max-w-2xl">
                Products built around real business needs.
              </h1>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
              Digital products designed and built to support the way different teams work.
            </p>
          </div>

          {/* Minimal Text Filter */}
          <div className="mt-10 pt-6 border-t border-black/[0.06] flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md transition-colors shrink-0 cursor-pointer ${
                  activeFilter === opt
                    ? "bg-[#1d1d1f] text-white font-medium"
                    : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </section>

        {/* ── EDITORIAL PRODUCT LIST ────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
          <div className="space-y-16 sm:space-y-24">
            {filtered.map((prod) => {
              const isVisualLeft = prod.layout === "visual-left-text-right";

              return (
                <article
                  key={prod.id}
                  className="group border-b border-black/[0.08] pb-16 sm:pb-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-7 overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.06] ${
                        isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
                      }`}
                    >
                      <Link href={prod.linkHref} className="block overflow-hidden">
                        {prod.mediaType === "video" ? (
                          <video
                            src={prod.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={prod.mediaSrc}
                            alt={prod.name}
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        )}
                      </Link>
                    </div>

                    {/* Content Container */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between ${
                        isVisualLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"
                      }`}
                    >
                      <div>
                        {/* Number & Department Metadata */}
                        <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-3 uppercase tracking-wider">
                          <span className="font-semibold text-[#1d1d1f]">{prod.number}</span>
                          <span>—</span>
                          <span className="text-[#1d1d1f]">{prod.departmentLabel}</span>
                          <span>·</span>
                          <span>{prod.year}</span>
                        </div>

                        {/* Product Title (Main Focus) */}
                        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight mb-4">
                          <Link href={prod.linkHref} className="hover:underline underline-offset-4">
                            {prod.name}
                          </Link>
                        </h2>

                        {/* Short Description */}
                        <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-8 max-w-md font-normal">
                          {prod.description}
                        </p>
                      </div>

                      {/* CTA Action */}
                      <div className="pt-2">
                        <Link
                          href={prod.linkHref}
                          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                          <span>{prod.ctaLabel}</span>
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
                  No products found for the {activeFilter} department.
                </p>
                <button
                  onClick={() => setActiveFilter("ALL")}
                  className="text-[13px] font-medium text-[#1d1d1f] underline underline-offset-4 cursor-pointer"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
