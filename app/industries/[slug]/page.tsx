"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TechBadge from "@/components/TechBadge";
import { INDUSTRIES_DATA, PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const selectedProject =
    PROJECTS_DATA.find((p) => p.slug === industry.caseStudySlug) ||
    PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-[#0070f3] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Industries</span>
            </Link>

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
              Industry Domain
            </span>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              {industry.name}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed">
              {industry.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SOLUTIONS & CAPABILITIES ─────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
                  Expertise
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  What We Build for {industry.name}
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {industry.description}
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industry.solutions.map((sol, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl border border-black/[0.08] bg-white shadow-xs hover:shadow-md transition-all h-full">
                    <span className="font-mono text-xs font-bold text-[#0070f3]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 mt-3 mb-2">
                      {sol}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-light">
                      Engineered for high security, data privacy, and rapid user workflows in {industry.name.toLowerCase()}.
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ─────────────────────────────────────── */}
      {selectedProject && (
        <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
          <div className="page-container">
            <ScrollReveal>
              <div className="mb-12">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
                  Case Study
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  Featured {industry.name} Project
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-[#f5f5f7] border-b lg:border-b-0 lg:border-r border-black/[0.04]">
                    <video
                      src={selectedProject.video || "/videos/startone.mp4"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#0070f3]">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-zinc-900 mt-2">
                        {selectedProject.title}
                      </h3>
                      <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                        {selectedProject.overview}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-black/[0.08]">
                      <Link
                        href={`/projects/${selectedProject.slug}`}
                        className="w-full py-2.5 px-4 rounded-full bg-[#0a0a0a] hover:bg-black text-white transition-all flex items-center justify-between text-xs font-medium shadow-xs active:scale-95"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── TECH STACK ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="page-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <ScrollReveal>
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] font-semibold block mb-2">
                Stack
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                Domain Tech Stack
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {industry.technologies.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Build something for {industry.name}?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We are ready to design and engineer your next platform.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white px-8 py-3.5 text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-95"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
