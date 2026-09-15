"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/siteData";

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "AI", "Cloud", "Mobile"];

  const filtered = activeFilter === "All"
    ? PROJECTS_DATA.slice(0, 4)
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* HEADING & FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
              Featured Case Studies &amp; Products
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Ideas we&apos;ve turned into real products with measurable performance and commercial impact.
            </p>
          </div>

          {/* FILTER PILLS */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 2x2 PROJECT GRID MATCHING BLUEPRINT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-blueprint overflow-hidden flex flex-col justify-between group"
            >
              {/* IMAGE SHOWCASE */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">{project.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
                    {project.overview}
                  </p>

                  {/* RESULTS STAT PILLS */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    {project.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx}>
                        <div className="text-lg font-black text-blue-600">{res.metric}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2"
          >
            <span>Explore All Projects &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
