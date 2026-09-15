"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { JOBS_DATA } from "@/data/siteData";

const WHY_JOIN = [
  { num: "01", title: "Build Real Products", desc: "Ship software used by businesses worldwide daily, not temporary throwaway decks." },
  { num: "02", title: "Modern Tech Stack", desc: "Next.js, TypeScript, LLMs, Vector DBs, WebRTC, Edge CDNs, and clean microservices." },
  { num: "03", title: "Learn Every Day", desc: "Work closely with senior engineers, designers, and architects in a high-autonomy culture." },
  { num: "04", title: "Solve Hard Problems", desc: "Tackle sub-millisecond audio streams, multi-tenant SaaS scaling, and autonomous AI agents." },
];

const LIFE_PHOTOS = [
  { title: "Design Sprint", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
  { title: "Engineering Sync", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" },
  { title: "Studio Space", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
  { title: "Collaborative Workshop", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join Our Team</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 max-w-3xl mx-auto">
              Build the future of digital products with us.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
              We are looking for exceptional engineers, designers, and problem solvers to build next-generation products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY STRATOTECHCORP ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Culture
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Why StratoTechCorp?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_JOIN.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.08} y={24}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[220px] h-full">
                  <div>
                    <span className="font-mono text-sm font-bold text-[#0070f3]">
                      {item.num}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 mt-4 mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT STRATOTECHCORP ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Studio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Life at StratoTechCorp
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFE_PHOTOS.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.08} y={24}>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/[0.08] bg-zinc-950 group shadow-xs">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {photo.title}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="page-container">
          <ScrollReveal y={20}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-black/[0.08] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Openings
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                  Available Positions
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 font-medium">
                {JOBS_DATA.length} Open Roles
              </span>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-black/[0.08]">
            {JOBS_DATA.map((job, idx) => (
              <ScrollReveal key={job.slug} delay={idx * 0.06} y={20}>
                <div className="group py-6 sm:py-8 transition-colors">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 font-mono text-xs text-zinc-500">
                        <span>{job.department}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                        <span>·</span>
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0070f3]">
                      <span>View Role</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION CTA ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Don&apos;t see your role?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We are always interested in meeting exceptional people. Send us your portfolio or GitHub profile.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-3.5 shadow-xs"
              >
                <span>Get in Touch</span>
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
