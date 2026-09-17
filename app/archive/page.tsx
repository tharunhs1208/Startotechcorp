"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type DepartmentFilter = "ALL" | "SALES" | "MARKETING" | "OPERATIONS" | "ACCOUNTS" | "COMMUNICATION" | "TECHNOLOGY";

interface ProductArchiveItem {
  number: string;
  id: string;
  name: string;
  department: DepartmentFilter;
  departmentLabel: string;
  year: string;
  description: string;
  status?: "LIVE" | "IN DEVELOPMENT" | "INTERNAL";
  mediaType: "video" | "image";
  mediaSrc: string;
  linkHref: string;
  linkLabel: string;
  alignment: "text-left-visual-right" | "visual-left-text-right";
}

const PRODUCTS: ProductArchiveItem[] = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    status: "LIVE",
    description: "A digital product designed to support sales activities, lead management, customer follow-ups, and sales workflows.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/contact?subject=Inquiry+regarding+SalesX",
    linkLabel: "View product",
    alignment: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay",
    department: "SALES",
    departmentLabel: "Sales",
    year: "2026",
    status: "LIVE",
    description: "A voice-focused sales platform designed to support communication between sales teams and prospective customers.",
    mediaType: "video",
    mediaSrc: "/videos/zobay.mp4",
    linkHref: "/projects/zobay-voice-ai",
    linkLabel: "View product",
    alignment: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    department: "COMMUNICATION",
    departmentLabel: "Communication",
    year: "2026",
    status: "LIVE",
    description: "A meeting and collaboration platform designed to provide a simple digital experience for online communication.",
    mediaType: "video",
    mediaSrc: "/videos/hero-pinterest.mp4",
    linkHref: "/contact?subject=Inquiry+regarding+MeetingX",
    linkLabel: "View product",
    alignment: "text-left-visual-right",
  },
  {
    number: "04",
    id: "startone",
    name: "StartOne",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2026",
    status: "LIVE",
    description: "A centralized operational platform connecting company workflows, task execution, and team management in a single interface.",
    mediaType: "video",
    mediaSrc: "/videos/startone.mp4",
    linkHref: "/projects/startone-enterprise-os",
    linkLabel: "View product",
    alignment: "visual-left-text-right",
  },
  {
    number: "05",
    id: "baseone",
    name: "BaseOne",
    department: "ACCOUNTS",
    departmentLabel: "Accounts",
    year: "2025",
    status: "LIVE",
    description: "A financial settlement and treasury platform built to manage multi-currency balances, transactions, and account reconciliation.",
    mediaType: "video",
    mediaSrc: "/videos/baseone.mp4",
    linkHref: "/projects/baseone-treasury-settlement",
    linkLabel: "View product",
    alignment: "text-left-visual-right",
  },
  {
    number: "06",
    id: "legalx",
    name: "LegalX",
    department: "OPERATIONS",
    departmentLabel: "Operations",
    year: "2025",
    status: "LIVE",
    description: "A contract review and document verification platform designed to streamline compliance checks and contract workflows.",
    mediaType: "video",
    mediaSrc: "/videos/legalx.mp4",
    linkHref: "/projects/legalx-contract-sentinel",
    linkLabel: "View product",
    alignment: "visual-left-text-right",
  },
  {
    number: "07",
    id: "validsoft",
    name: "ValidSoft",
    department: "TECHNOLOGY",
    departmentLabel: "Technology",
    year: "2025",
    status: "INTERNAL",
    description: "A voice security and identity verification engine designed for authentic user authentication and fraud prevention.",
    mediaType: "video",
    mediaSrc: "/videos/validsoft.mp4",
    linkHref: "/projects/validsoft-biometric-defense",
    linkLabel: "View product",
    alignment: "text-left-visual-right",
  },
  {
    number: "08",
    id: "socan",
    name: "SOCAN Stream",
    department: "MARKETING",
    departmentLabel: "Marketing",
    year: "2024",
    status: "LIVE",
    description: "A digital media monitoring and stream calculation platform designed to track media playback and distribution records.",
    mediaType: "video",
    mediaSrc: "/videos/socan.mp4",
    linkHref: "/projects/socan-royalty-mesh",
    linkLabel: "View product",
    alignment: "visual-left-text-right",
  },
];

export default function ArchivePage() {
  const [activeDepartment, setActiveDepartment] = useState<DepartmentFilter>("ALL");

  const filterOptions: DepartmentFilter[] = [
    "ALL",
    "SALES",
    "MARKETING",
    "OPERATIONS",
    "ACCOUNTS",
    "COMMUNICATION",
    "TECHNOLOGY",
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeDepartment === "ALL") return true;
    return product.department === activeDepartment;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* ── HERO SECTION ──────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
                ARCHIVE
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.15] max-w-2xl">
                Products we&apos;ve built for the business.
              </h1>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#6e6e73] max-w-md font-normal leading-relaxed">
              A collection of digital products and platforms developed to support different teams, workflows, and business needs.
            </p>
          </div>

          {/* ── FILTER / DEPARTMENT NAVIGATION ──────────────────────── */}
          <div className="mt-10 pt-6 border-t border-black/[0.06] flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`text-[12px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-md transition-colors shrink-0 cursor-pointer ${
                  activeDepartment === dept
                    ? "bg-[#1d1d1f] text-white font-medium"
                    : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </section>

        {/* ── PRODUCT ARCHIVE (Editorial Asymmetrical Layout) ───────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
          <div className="space-y-16 sm:space-y-24">
            {filteredProducts.map((product) => {
              const isVisualLeft = product.alignment === "visual-left-text-right";

              return (
                <article
                  key={product.id}
                  className="group border-b border-black/[0.08] pb-16 sm:pb-24"
                >
                  {/* Desktop / Tablet Layout: 2-column alternating */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-7 overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.06] ${
                        isVisualLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"
                      }`}
                    >
                      <Link href={product.linkHref} className="block overflow-hidden">
                        {product.mediaType === "video" ? (
                          <video
                            src={product.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={product.mediaSrc}
                            alt={product.name}
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
                          <span className="font-semibold text-[#1d1d1f]">{product.number}</span>
                          <span>—</span>
                          <span className="text-[#1d1d1f]">{product.departmentLabel}</span>
                          <span>·</span>
                          <span>{product.year}</span>
                          {product.status && (
                            <>
                              <span>·</span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-black/[0.04] text-[#1d1d1f]">
                                {product.status}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Product Title (Main Focus) */}
                        <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight mb-4">
                          <Link href={product.linkHref} className="hover:underline underline-offset-4">
                            {product.name}
                          </Link>
                        </h2>

                        {/* Short Description */}
                        <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-8 max-w-md font-normal">
                          {product.description}
                        </p>
                      </div>

                      {/* Action Link */}
                      <div className="pt-2">
                        <Link
                          href={product.linkHref}
                          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                          <span>{product.linkLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-[14px] font-mono text-[#6e6e73] uppercase mb-4">
                  No products found for the {activeDepartment} department.
                </p>
                <button
                  onClick={() => setActiveDepartment("ALL")}
                  className="text-[13px] font-medium text-[#1d1d1f] underline underline-offset-4 cursor-pointer"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── FOOTER CTA ────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="border-t border-black/[0.08] pt-16 sm:pt-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[13px] font-mono text-[#6e6e73] uppercase tracking-wider mb-2">
                Have a product in mind?
              </p>
              <h3 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f]">
                Let&apos;s build it.
              </h3>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-black transition-colors group cursor-pointer"
              >
                <span>Start a project</span>
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
