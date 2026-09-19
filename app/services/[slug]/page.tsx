"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import StartProjectButton from "@/components/StartProjectButton";
import { SERVICES_DATA, PROJECTS_DATA } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const WORK_PROCESS = [
  { num: "01", title: "Discovery & Architecture", desc: "Stakeholder requirements, technical feasibility review, and system architecture planning." },
  { num: "02", title: "Design Systems & Tokens", desc: "Figma tokens, responsive wireframes, and production-aligned interaction design." },
  { num: "03", title: "Agile Development", desc: "Two-week sprint cycles shipping clean, test-driven TypeScript code with automated CI/CD." },
  { num: "04", title: "QA & Security Hardening", desc: "End-to-end integration testing, performance load benchmarks, and compliance reviews." },
  { num: "05", title: "Production Deployment", desc: "Zero-downtime cutover, edge CDN telemetry, and continuous SLA support." },
];

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const selectedProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── HEADER ──────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Services</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-3 font-semibold">
              SERVICE CAPABILITY
            </span>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* ── SCOPE & DELIVERABLES ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                SCOPE &amp; APPROACH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                What We Deliver
              </h2>
              <p className="mt-4 text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                {service.fullDescription}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.map((feat, i) => (
                <ScrollCardTransition key={i} index={i}>
                  <article className="group bg-white border border-black/[0.08] rounded-xl p-6 sm:p-7 hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-[12px] text-[#86868b] block mb-3 uppercase tracking-wider font-medium">
                        0{i + 1} · Capability
                      </span>
                      <h3 className="font-sans text-lg font-semibold text-[#111111] mb-2 tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </article>
                </ScrollCardTransition>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK (PROCESS) ───────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                EXECUTION LIFECYCLE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                How We Work
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Standardized agile engineering workflows applied to every project engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_PROCESS.map((p) => (
              <div
                key={p.num}
                className="border-t border-black/[0.08] pt-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[12px] text-[#6e6e73] block mb-2">
                    {p.num}
                  </span>
                  <h3 className="font-display text-base font-medium text-[#1d1d1f] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGY STACK ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-14 sm:py-20 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                TOOLING &amp; FOUNDATIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                Technologies &amp; Tools
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {service.technologies.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED WORK (Intentional Project Cards) ─────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex items-center justify-between pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                SELECTED CASE STUDIES
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f]">
                Related Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group/link"
            >
              <span>View all work</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {selectedProjects.map((proj, pIdx) => (
              <ScrollCardTransition key={proj.slug} index={pIdx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                      <Link href={`/projects/${proj.slug}`} className="block w-full h-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      </Link>
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="text-[12px] font-mono text-[#86868b] mb-3 uppercase tracking-wider">
                        <span className="font-semibold text-[#111]">0{pIdx + 1}</span>
                        <span> · </span>
                        <span>{proj.category}</span>
                        <span> · </span>
                        <span>{proj.industry}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#111111] tracking-[-0.02em] mb-2.5">
                        <Link href={`/projects/${proj.slug}`} className="hover:text-black transition-colors">
                          {proj.title}
                        </Link>
                      </h3>
                      <p className="text-[14px] text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                        {proj.overview}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-black/[0.06]">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                    >
                      <span>View project</span>
                      <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Ready to build with {service.title}?
              </h2>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                Let&apos;s evaluate your requirements and scope a delivery plan.
              </p>
            </div>
            <div className="shrink-0">
              <StartProjectButton size="lg" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
