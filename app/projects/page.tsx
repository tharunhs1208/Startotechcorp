"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Completed" | "Ongoing";
  image: string;
  tags: string[];
  href: string;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "schedular",
    title: "Schedular",
    subtitle: "Enterprise intelligent calendar orchestration & multi-timezone scheduling AI",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Completed", "Scheduling AI", "SaaS", "Enterprise"],
    href: "/projects/schedular",
  },
  {
    id: "meetingx",
    title: "MeetingX",
    subtitle: "AI meeting copilot with automated live transcripts, summaries & action items",
    status: "Completed",
    image: "/images/products/meetingx_pinterest.jpg",
    tags: ["Completed", "Voice AI", "Summarization", "SaaS"],
    href: "/products/meetingx",
  },
  {
    id: "hirex",
    title: "HireX",
    subtitle: "Autonomous AI talent acquisition, semantic resume parsing & technical screening",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Completed", "AI Recruitment", "HRTech", "SaaS"],
    href: "/projects/hirex",
  },
  {
    id: "salesx",
    title: "SalesX",
    subtitle: "AI outbound pipeline generation, intent scoring & sales intelligence engine",
    status: "Completed",
    image: "/images/products/salesx_custom.jpg",
    tags: ["Completed", "Sales AI", "Outbound", "CRM"],
    href: "/products/salesx",
  },
  {
    id: "zobay-voice-ai",
    title: "Zobay Voice AI",
    subtitle: "Ultra-low latency conversational AI voice phone agents & enterprise telephony",
    status: "Completed",
    image: "/images/products/zobay_custom.jpg",
    tags: ["Completed", "Voice AI", "Sub-280ms", "Telephony"],
    href: "/projects/zobay-voice-ai",
  },
  {
    id: "legalx",
    title: "LegalX",
    subtitle: "Autonomous contract intelligence, instant redlines & regulatory compliance sentinel",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Completed", "Legal AI", "Contract RAG", "Compliance"],
    href: "/projects/legalx",
  },
  {
    id: "naksha-ai",
    title: "Naksha AI",
    subtitle: "Geospatial satellite computer vision, land-use segmentation & spatial mapping",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
    tags: ["Completed", "Geospatial AI", "Satellite CV", "Mapping"],
    href: "/projects/naksha-ai",
  },
  {
    id: "cashero",
    title: "Cashero",
    subtitle: "Next-gen autonomous treasury, smart expense orchestration & corporate financial OS",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    tags: ["Ongoing", "Fintech OS", "Treasury", "Smart Expense"],
    href: "/projects/cashero",
  },
  {
    id: "maya-ai",
    title: "Maya AI",
    subtitle: "Voice Assistant: Multimodal real-time voice assistant like Google Assistant with ambient reasoning & tool execution",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
    tags: ["Ongoing", "Voice Assistant", "Google-like AI", "Multimodal"],
    href: "/projects/maya-ai",
  },
];

const FILTER_SERVICES = ["All", "Completed", "Ongoing", "Voice AI", "SaaS & Enterprise"];

const ITEMS_PER_PAGE = 5;

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on active filter
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Completed") return p.status === "Completed";
    if (activeFilter === "Ongoing") return p.status === "Ongoing";
    if (activeFilter === "Voice AI") {
      return (
        p.id === "zobay-voice-ai" ||
        p.id === "maya-ai" ||
        p.id === "meetingx" ||
        p.tags.some((t) => t.toLowerCase().includes("voice"))
      );
    }
    if (activeFilter === "SaaS & Enterprise") {
      return (
        p.id === "schedular" ||
        p.id === "hirex" ||
        p.id === "salesx" ||
        p.id === "legalx" ||
        p.id === "cashero" ||
        p.id === "naksha-ai"
      );
    }
    return p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const row1Projects = currentProjects.slice(0, 3);
  const row2Projects = currentProjects.slice(3, 5);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#231F20] antialiased selection:bg-[#82FFCD] selection:text-black">
      {/* ── 1. NAVBAR (Blurred on scroll) ── */}
      <Navbar />

      <main className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 2. HERO SECTION ── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20 border-b border-black/[0.08]">
          {/* Top Row: Left Pill Breadcrumb + Right Mint Pill Badge */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-black/10 text-xs sm:text-sm font-semibold text-black shadow-xs hover:bg-black/5 transition-all"
            >
              <span>→</span>
              <span>Work</span>
            </Link>

            <span className="px-6 py-2.5 rounded-full bg-[#82FFCD] text-black text-xs sm:text-sm font-semibold shadow-xs">
              Autonomous Systems &amp; AI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            {/* Left Col: Giant Heading + Clean Description */}
            <div className="lg:col-span-8">
              <h1 className="text-6xl sm:text-8xl lg:text-[104px] font-display font-extrabold text-black tracking-tight leading-none mb-6">
                Latest Work
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
                <p className="text-[15px] sm:text-[17px] text-[#444444] font-normal leading-relaxed max-w-2xl">
                  Explore our portfolio of flagship autonomous AI software products, speech-to-speech voice intelligence, and next-generation enterprise platforms engineered to deliver unprecedented scale.
                </p>
              </div>
            </div>

            {/* Right Col: Team Snapshot & Contact Details */}
            <div className="lg:col-span-4 flex flex-col items-end gap-3">
              <div className="w-full max-w-[320px] sm:max-w-[380px] aspect-[16/11] rounded-[28px] overflow-hidden bg-zinc-200 border border-black/[0.08] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                  alt="Stratotech Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right text-xs font-medium text-black flex items-center justify-end gap-4 mt-1">
                <a href="mailto:contact@stratotechcorp.in" className="hover:underline font-semibold block">
                  contact@stratotechcorp.in
                </a>
                <span className="font-mono text-[#555] block">
                  Bengaluru · Global AI Engineering
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PROJECTS GRID (Exact Screenshot 111226.png: 3 in Row 1, 2 in Row 2) ── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">
          {/* Row 1: 3 Columns Grid */}
          {row1Projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-6 sm:gap-y-7">
              {row1Projects.map((proj) => (
                <Link
                  key={proj.id}
                  href={proj.href}
                  className="group relative rounded-3xl overflow-hidden bg-black text-white aspect-[16/11] border border-black/[0.08] shadow-md flex flex-col justify-end transition-all duration-300 hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                  <div className="relative z-10 p-5 sm:p-7">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                      {proj.title}
                    </h2>
                    <p className="text-xs font-mono text-zinc-300 mb-4 flex items-center gap-2">
                      <span>View work</span>
                      <svg className="w-8 h-2.5 text-zinc-300 group-hover:text-[#82FFCD] transition-colors shrink-0" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5H30M30 5L25 1M30 5L25 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-[11px] font-mono text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Row 2: 2 Asymmetric Columns (7 cols + 5 cols matching Vislink + PortSwigger in screenshot 111226) */}
          {row2Projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-stretch">
              {row2Projects.map((proj, idx) => {
                const colSpanClass = row2Projects.length === 1 ? "md:col-span-12" : idx === 0 ? "md:col-span-7" : "md:col-span-5";
                return (
                  <Link
                    key={proj.id}
                    href={proj.href}
                    className={`group relative rounded-3xl overflow-hidden bg-black text-white h-[360px] sm:h-[440px] lg:h-[480px] w-full border border-black/[0.08] shadow-md flex flex-col justify-end transition-all duration-300 hover:shadow-xl cursor-pointer ${colSpanClass}`}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                    <div className="relative z-10 p-5 sm:p-7">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                        {proj.title}
                      </h2>
                      <p className="text-xs font-mono text-zinc-300 mb-4 flex items-center gap-2">
                        <span>View work</span>
                        <svg className="w-8 h-2.5 text-zinc-300 group-hover:text-[#82FFCD] transition-colors shrink-0" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 5H30M30 5L25 1M30 5L25 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-[11px] font-mono text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ── 4. PAGINATION CONTROLS (< 1 2 >) ── */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-black text-white shadow-xs"
                        : "border border-black/20 text-black hover:bg-black/5"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </section>

        {/* ── 5. FILTER BY STATUS & SERVICE SECTION ── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-black mb-8">
            Filter our work
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {FILTER_SERVICES.map((serv) => {
              const isSelected = activeFilter === serv;
              return (
                <button
                  key={serv}
                  onClick={() => handleFilterChange(serv)}
                  className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-black text-white border-black shadow-sm"
                      : "bg-white text-black border-black/15 hover:border-black hover:bg-black/5"
                  }`}
                >
                  {serv}
                </button>
              );
            })}
          </div>
        </section>

      </main>

      {/* ── 6. FOOTER ── */}
      <Footer />
    </div>
  );
}
