"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TechBadge from "@/components/TechBadge";
import { SERVICES_DATA, PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const WORK_PROCESS = [
  { num: "01", title: "Discover & Scope", desc: "Stakeholder mapping, technical feasibility review, and architecture definition." },
  { num: "02", title: "UI/UX & Design Tokens", desc: "Interactive Figma prototypes, design tokens, and user flow validation." },
  { num: "03", title: "Agile Development", desc: "Two-week sprints shipping clean, test-driven TypeScript code with automated pipelines." },
  { num: "04", title: "QA & Security Hardening", desc: "Cross-platform QA, load testing, and penetration security audits." },
  { num: "05", title: "Production Deployment", desc: "Zero-downtime cutover, edge CDN telemetry, and continuous 24/7 SLA support." },
];

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const selectedProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal delay={0.05} y={16}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-[#0070f3] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
              Service Capability
            </span>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed">
              {service.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OVERVIEW & FEATURES ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal y={20}>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Scope
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  What We Deliver
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {service.fullDescription}
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.map((feat, i) => (
                <ScrollReveal key={i} delay={i * 0.08} y={24}>
                  <div className="p-6 rounded-2xl border border-black/[0.08] bg-white shadow-xs h-full">
                    <span className="font-mono text-xs font-bold text-[#0070f3]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 mt-3 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK (PROCESS) ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Process
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                How We Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_PROCESS.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.08} y={24}>
                <div className="p-6 rounded-xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[200px] h-full">
                  <div>
                    <span className="font-mono text-sm font-bold text-[#0070f3]">
                      {p.num}
                    </span>
                    <h3 className="font-display text-base font-bold text-zinc-900 mt-4 mb-2">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <ScrollReveal y={20}>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Stack
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  Technologies & Tools
                </h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {service.technologies.map((t, i) => (
                <ScrollReveal key={t} delay={i * 0.04} y={12}>
                  <TechBadge name={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED WORK ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Portfolio
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  Featured Case Studies
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-[#0070f3] transition-colors"
              >
                <span>All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedProjects.map((proj, i) => (
              <ScrollReveal key={proj.slug} delay={i * 0.1} y={28}>
                <Link
                  href={`/projects/${proj.slug}`}
                  className="group rounded-2xl border border-black/[0.08] bg-white overflow-hidden hover:border-black/20 shadow-xs hover:shadow-md transition-all block"
                >
                  <div className="relative aspect-video bg-[#f5f5f7] overflow-hidden border-b border-black/[0.04]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#0070f3] border border-black/10 font-semibold shadow-xs">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-600 line-clamp-2 font-light">
                      {proj.overview}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Ready to build with {service.title}?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              Let&apos;s evaluate your requirements and scope a delivery plan.
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
