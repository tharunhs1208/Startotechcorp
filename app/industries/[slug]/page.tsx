"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import StartProjectButton from "@/components/StartProjectButton";
import { INDUSTRIES_DATA, PROJECTS_DATA } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Industries</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-3">
              INDUSTRY DOMAIN
            </span>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              {industry.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
              {industry.tagline}
            </p>
          </div>
        </section>

        {/* ── 2. SOLUTIONS & CAPABILITIES ─────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-2">
                EXPERTISE &amp; ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                What We Build for {industry.name}
              </h2>
              <p className="mt-4 text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                {industry.description}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industry.solutions.map((sol, i) => (
                <ScrollCardTransition key={i} index={i}>
                  <article className="group bg-white border border-black/[0.08] rounded-xl p-6 sm:p-7 hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-[12px] text-[#86868b] block mb-3 uppercase tracking-wider font-medium">
                        0{i + 1} · Solution Module
                      </span>
                      <h3 className="font-sans text-lg font-semibold text-[#111111] mb-2 tracking-tight">
                        {sol}
                      </h3>
                      <p className="text-[14px] text-zinc-600 leading-relaxed font-normal">
                        Engineered for high security, data privacy, and rapid user workflows in {industry.name.toLowerCase()}.
                      </p>
                    </div>
                  </article>
                </ScrollCardTransition>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FEATURED CASE STUDY (Large Feature Card) ─────────────── */}
        {selectedProject && (
          <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
            <div className="flex items-center justify-between pb-8 mb-12 border-b border-black/[0.08]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-semibold block mb-1">
                  CASE STUDY
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f]">
                  Featured {industry.name} Project
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group/link"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>

            <ScrollCardTransition>
              <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] items-stretch">
                  <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      <div className="text-[12px] font-mono text-[#86868b] mb-4 uppercase tracking-wider">
                        <span className="font-semibold text-[#111]">01</span>
                        <span> · </span>
                        <span>{selectedProject.category}</span>
                        <span> · </span>
                        <span>{selectedProject.industry}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight mb-3">
                        <Link href={`/projects/${selectedProject.slug}`} className="hover:text-black transition-colors">
                          {selectedProject.title}
                        </Link>
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed font-normal mb-6">
                        {selectedProject.overview}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-black/[0.06]">
                      <Link
                        href={`/projects/${selectedProject.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                      >
                        <span>View project</span>
                        <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-zinc-100 border-b lg:border-b-0 lg:border-l border-black/[0.06] relative min-h-[260px] sm:min-h-[320px] overflow-hidden order-1 lg:order-2">
                    <Link href={`/projects/${selectedProject.slug}`} className="block w-full h-full relative group/img overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedProject.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollCardTransition>
          </section>
        )}

        {/* ── 4. TECH STACK ────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-14 sm:py-20 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                DOMAINS &amp; ARCHITECTURES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                Domain Stack &amp; Standards
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {industry.technologies.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Ready to build for {industry.name}?
              </h2>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                Connect with our systems architects to design your domain software.
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
