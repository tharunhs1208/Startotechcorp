"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { PROJECTS_DATA } from "@/data/siteData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "AI", "WEB", "MOBILE", "CLOUD", "UI/UX"];

  const filtered =
    activeFilter === "ALL"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (p) => p.category.toUpperCase() === activeFilter.toUpperCase()
        );

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Studies & Product Showcase</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Selected Work
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              A showcase of digital platforms, AI systems, and SaaS products we&apos;ve designed, built, and launched.
            </p>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal delay={0.35} y={20}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === f
                      ? "bg-[#0070f3] text-white shadow-md shadow-[#0070f3]/25"
                      : "bg-black/[0.04] text-zinc-600 hover:text-zinc-900 hover:bg-black/[0.08] border border-black/[0.06]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECTS GRID ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((proj, idx) => (
              <ScrollReveal key={proj.slug} delay={idx * 0.08} y={32}>
                <div className="group rounded-2xl border border-black/[0.08] bg-white overflow-hidden hover:border-black/20 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div>
                    {/* Media */}
                    <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                      {proj.video ? (
                        <video
                          src={proj.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#0070f3] border border-black/10 font-semibold shadow-xs">
                        {proj.category}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 sm:p-8">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1 font-semibold">
                        {proj.industry}
                      </span>
                      <h2 className="font-display text-2xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {proj.title}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light line-clamp-2">
                        {proj.overview}
                      </p>

                      {/* Results / Tech */}
                      {proj.results && proj.results.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-6">
                          {proj.results.slice(0, 2).map((res, i) => (
                            <div key={i}>
                              <div className="font-display text-lg font-bold text-[#0070f3]">
                                {res.metric}
                              </div>
                              <div className="text-[10px] text-zinc-400 uppercase font-medium">
                                {res.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="btn-pill btn-ghost w-full justify-between text-xs font-semibold !py-3 border-black/15 hover:border-black text-zinc-900"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Have a project in mind? Let&apos;s build it.
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We partner with ambitious teams to engineer products that convert and scale.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5 shadow-xs"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
