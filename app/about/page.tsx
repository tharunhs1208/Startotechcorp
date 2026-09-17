"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import { TEAM_MEMBERS } from "@/data/siteData";

const DISCIPLINES = [
  {
    number: "01",
    title: "Product Engineering",
    description: "We write clean, modular, scalable TypeScript and Rust backends with automated test suites and high-throughput databases.",
  },
  {
    number: "02",
    title: "Design Systems & Craft",
    description: "We design complete Figma variable token systems and intuitive user interfaces that bridge the gap between design and production code.",
  },
  {
    number: "03",
    title: "Intelligent Systems",
    description: "We build sub-300ms neural voice pipelines, deterministic agentic tools, and private enterprise retrieval-augmented generation systems.",
  },
  {
    number: "04",
    title: "Cloud & Reliability",
    description: "We deploy secure, multi-region edge infrastructure with automated CI/CD pipelines, ISO 27001 readiness, and 99.99% uptime SLAs.",
  },
];

const WORKING_PRINCIPLES = [
  {
    title: "Less design. Better design.",
    desc: "We avoid unnecessary decorative noise. Every layout decision, typographic scale, and interaction exists to solve a real user and business need.",
  },
  {
    title: "Direct engineering collaboration.",
    desc: "You work directly with senior architects and product designers who write code and ship features daily. No bureaucratic layers.",
  },
  {
    title: "Speed with structural rigor.",
    desc: "We ship functional production increments every two weeks, pairing rapid sprint velocity with clean architectural boundaries.",
  },
  {
    title: "Durable software.",
    desc: "We engineer software meant to last years in production without accumulating tech debt or fragile dependencies.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        {/* ── 1. EDITORIAL HERO ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              ABOUT US
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.1] mb-6">
              We build digital products around the way businesses actually work.
            </h1>
            <p className="text-lg text-[#6e6e73] font-normal leading-relaxed max-w-2xl">
              StratoTech is a product engineering studio based in Bengaluru. We partner with founders, growing teams, and enterprises to design, architect, and ship high-performance software.
            </p>
          </div>
        </section>

        {/* ── 2. WHAT WE DO & HOW WE OPERATE ─────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-black/[0.08]">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-2">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f]">
                Engineering with clarity and restraint.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[15px] sm:text-[16px] text-[#6e6e73] font-normal leading-relaxed">
              <p>
                Modern software often suffers from excessive complexity, bloated dependencies, and over-designed interfaces. We take the opposite approach: building clean, focused tools that solve specific operational problems.
              </p>
              <p>
                Whether developing an internal sales platform like SalesX, an AI voice tool like Zobay, or an operational execution layer like StartOne, our goal is always the same: make complex workflows simple, reliable, and fast.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. DISCIPLINES ─────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1">
                PRACTICE AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                What We Build
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Core technical disciplines applied across our client and internal products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-14 border-b border-black/[0.08]">
            {DISCIPLINES.map((d) => (
              <div key={d.number} className="border-t border-black/[0.08] pt-6">
                <span className="text-[12px] font-mono text-[#6e6e73] block mb-2">{d.number}</span>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f] mb-2">{d.title}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>

          {/* Technology Stack Grid */}
          <div className="pt-10 pb-20 border-b border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              ENGINEERING STACK &amp; TOOLING
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "Python",
                "PostgreSQL",
                "Prisma",
                "Supabase",
                "Docker",
                "Kubernetes",
                "AWS",
                "WebRTC",
                "Redis",
                "Tailwind CSS",
                "Figma",
                "PyTorch",
                "OpenAI",
                "GraphQL"
              ].map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WORKING PRINCIPLES ──────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1">
                STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                How We Work
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              The foundational principles guiding every sprint and architectural choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 border-b border-black/[0.08]">
            {WORKING_PRINCIPLES.map((p, idx) => (
              <div key={idx} className="border-t border-black/[0.08] pt-6">
                <h3 className="text-xl font-display font-medium text-[#1d1d1f] mb-2">{p.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. TEAM DIRECTORY ──────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1">
                LEADERSHIP & ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                Team
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm">
              Engineers, designers, and systems architects based out of Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="border-t border-black/[0.08] pt-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#e5e5ea] mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f]">{member.name}</h3>
                <p className="text-[12px] font-mono text-[#0071e3] uppercase mb-2">{member.role}</p>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed line-clamp-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
