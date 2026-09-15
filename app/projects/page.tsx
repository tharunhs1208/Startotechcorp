"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/siteData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "AI", "Cloud"];

  const filtered = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* HERO SECTION MATCHING TEMPLATE #8 */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Engineering Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Our Projects &amp; Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Ideas we&apos;ve turned into real products. Discover how our web applications, mobile platforms, and AI systems deliver quantifiable commercial success for global institutions.
          </p>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-COLUMN PROJECT GRID */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filtered.map((proj) => (
              <div
                key={proj.slug}
                className="card-blueprint overflow-hidden flex flex-col justify-between group"
              >
                {/* PROJECT IMAGE */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow">
                      {proj.industry}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-mono font-bold mb-3">{proj.tagline}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {proj.overview}
                    </p>

                    {/* METRICS */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      {proj.results.slice(0, 2).map((res, i) => (
                        <div key={i}>
                          <div className="text-xl font-black text-blue-600">{res.metric}</div>
                          <div className="text-[11px] text-slate-500 font-medium">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
