"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TechBadge from "@/components/TechBadge";
import { PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIdx = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIdx + 1) % PROJECTS_DATA.length];

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal delay={0.05} y={16}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-[#0070f3] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-xs text-[#0070f3] mb-3 font-semibold">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.industry}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed">
              {project.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN MEDIA SHOWCASE ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="page-container">
          <ScrollReveal delay={0.15} y={28}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.08] bg-zinc-950 shadow-xl shadow-black/5">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OVERVIEW & CHALLENGE & SOLUTION ─────────────────────────── */}
      <section className="py-12 sm:py-16 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal y={20}>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Overview
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  The Project Scope
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <ScrollReveal delay={0.1} y={20}>
                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
                  {project.overview}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <ScrollReveal delay={0.15} y={24}>
                  <div className="p-6 rounded-xl border border-black/[0.08] bg-white h-full shadow-xs">
                    <h3 className="font-display text-base font-bold text-zinc-900 mb-2">
                      The Challenge
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                      {project.challenge}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25} y={24}>
                  <div className="p-6 rounded-xl border border-black/[0.08] bg-white h-full shadow-xs">
                    <h3 className="font-display text-base font-bold text-zinc-900 mb-2">
                      The Solution
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                      {project.solution}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Capabilities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Key Features & Architecture
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 0.08} y={24}>
                <div className="p-6 rounded-xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[160px] h-full">
                  <span className="font-mono text-xs font-bold text-[#0070f3]">
                    0{i + 1}
                  </span>
                  <p className="font-display text-base font-semibold text-zinc-900 mt-4">
                    {feat}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS & TECH STACK ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal y={20}>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Impact
                </span>
                <h2 className="font-display text-3xl font-bold text-zinc-900 mb-8">
                  Measurable Results
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-6">
                {project.results.map((res, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} y={20}>
                    <div className="p-6 rounded-xl border border-black/[0.08] bg-white shadow-xs">
                      <div className="font-display text-3xl sm:text-4xl font-bold text-[#0070f3]">
                        {res.metric}
                      </div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-medium">
                        {res.label}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal y={20}>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Technologies
                </span>
                <h2 className="font-display text-3xl font-bold text-zinc-900 mb-8">
                  Engineered With
                </h2>
              </ScrollReveal>

              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((t, i) => (
                  <ScrollReveal key={t} delay={i * 0.04} y={12}>
                    <TechBadge name={t} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT NAVIGATOR ──────────────────────────────────── */}
      <section className="py-16 border-t border-black/[0.08]">
        <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <ScrollReveal y={16}>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-medium">
                Next Case Study
              </span>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 hover:text-[#0070f3] transition-colors inline-flex items-center gap-3"
              >
                <span>{nextProject.title}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={16}>
            <Link
              href="/contact"
              className="btn-pill btn-accent-c text-xs font-semibold px-6 py-3 shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
