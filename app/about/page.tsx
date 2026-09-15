"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { TEAM_MEMBERS, COMPANY_VALUES } from "@/data/siteData";

const APPROACH_STEPS = [
  { num: "01", title: "Understand", desc: "We study your business goals, user behavior, and technology requirements to map a clear path forward." },
  { num: "02", title: "Design", desc: "We craft intuitive user journeys, high-fidelity prototypes, and robust design systems in Figma." },
  { num: "03", title: "Engineer", desc: "We write clean, modular, scalable code using modern frameworks and rigorous automated testing." },
  { num: "04", title: "Launch", desc: "We ship seamlessly to global infrastructure with continuous telemetry, monitoring, and SLA support." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 max-w-3xl mx-auto">
              We design, build, and ship products that matter.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
              StratoTechCorp is a technology and product development company building digital experiences, software, and intelligent systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal y={20}>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Who We Are
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
                  A Product Engineering Studio
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
              <ScrollReveal delay={0.1} y={20}>
                <p>
                  Founded in Bengaluru, StratoTechCorp works with founders, fast-growing startups, and forward-thinking enterprises worldwide to turn complex challenges into elegant, high-impact digital products.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2} y={20}>
                <p>
                  We believe in extreme technical craft, clean architecture, and rapid agile delivery. We don&apos;t just deliver code—we partner with you to engineer durable software that scales effortlessly.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Methodology
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Our Approach
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08} y={24}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[220px] h-full">
                  <div>
                    <span className="font-mono text-sm font-bold text-[#0070f3]">
                      {step.num}
                    </span>
                    <h3 className="font-display text-xl font-bold text-zinc-900 mt-4 mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Principles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <ScrollReveal key={val.title} delay={idx * 0.08} y={24}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs h-full">
                  <div className="text-xs font-mono text-[#0070f3] font-semibold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-zinc-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                People Behind the Products
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08} y={28}>
                <div className="group rounded-2xl border border-black/[0.08] bg-white shadow-xs overflow-hidden h-full">
                  <div className="relative aspect-[4/5] bg-zinc-950 overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-zinc-900">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#0070f3] font-mono mt-1 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-xs text-zinc-600 mt-3 line-clamp-2 font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
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
              Let&apos;s build something useful together.
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We are always excited to collaborate on new ideas and ambitious technical products.
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
