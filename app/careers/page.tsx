"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import TextMaskReveal from "@/components/TextMaskReveal";
import { JOBS_DATA } from "@/data/siteData";

import ScrollCardTransition from "@/components/ScrollCardTransition";

const WHY_JOIN = [
  { num: "01", title: "Build Real Products", desc: "Ship software used by businesses worldwide daily, not temporary throwaway decks." },
  { num: "02", title: "Modern Tech Stack", desc: "Next.js, TypeScript, LLMs, Vector DBs, WebRTC, Edge CDNs, and clean modular systems." },
  { num: "03", title: "High-Autonomy Culture", desc: "Work closely with senior engineers and architects who design, write code, and ship features." },
  { num: "04", title: "Durable Engineering", desc: "Tackle sub-millisecond voice streams, high-frequency ledgers, and reliable distributed systems." },
];

const LIFE_PHOTOS = [
  {
    title: "Design Sprints",
    category: "Design",
    desc: "Rapid iterative prototyping, token architecture, and high-fidelity interaction design in Figma.",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Engineering Sync",
    category: "Engineering",
    desc: "Collaborative pair programming, sub-280ms neural audio benchmarks, and distributed microservices.",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Studio Workspace",
    category: "Workplace",
    desc: "Ergonomic, natural-light studio located in Shivajinagar, Bengaluru built for deep creative focus.",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hackathons & R&D",
    category: "Innovation",
    desc: "Explorations into generative AI speech pipelines, WebRTC protocols, and edge compute algorithms.",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#111111] antialiased selection:bg-[#82FFCD] selection:text-black">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Careers" }]} />
          </div>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              CAREERS &amp; ROLES
            </span>
            <TextMaskReveal
              text="Join the Studio"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              We are looking for exceptional engineers, systems architects, and product designers to build durable software in Bengaluru.
            </p>
          </div>
        </section>

        {/* ── 2. CULTURE & WORKING ENVIRONMENT ─────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                PRINCIPLES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Why StratoTech?
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm font-normal">
              A studio environment optimized for craftsmanship, autonomy, and shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {WHY_JOIN.map((item) => (
              <div
                key={item.num}
                className="border-t border-black/[0.08] pt-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[13px] text-[#86868b] block mb-2">
                    {item.num}
                  </span>
                  <h3 className="font-display text-lg font-medium text-[#1d1d1f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. STUDIO GALLERY (Intentional Visual Cards) ────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                WORKSPACE &amp; R&amp;D
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Life at the Studio
              </h2>
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm font-normal">
              Located in Shivajinagar, Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFE_PHOTOS.map((photo, i) => (
              <ScrollCardTransition key={i} index={i}>
                <article className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] font-mono uppercase text-[#86868b] block mb-2 font-medium">
                        0{i + 1} · {photo.category}
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#111111] mb-2 tracking-tight">
                        {photo.title}
                      </h3>
                      <p className="text-[13px] text-zinc-600 leading-relaxed font-normal">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 4. OPEN POSITIONS ────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                OPENINGS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Available Positions
              </h2>
            </div>
            <span className="text-[12px] font-mono text-[#86868b]">
              {JOBS_DATA.length} Open Roles
            </span>
          </div>

          <div className="space-y-4">
            {JOBS_DATA.map((job, jIdx) => (
              <ScrollCardTransition key={job.slug} index={jIdx}>
                <article className="group bg-white border border-black/[0.08] rounded-xl p-6 sm:p-7 hover:border-black/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#86868b] mb-2 uppercase tracking-wider">
                      <span className="font-semibold text-[#111]">0{jIdx + 1}</span>
                      <span>·</span>
                      <span>{job.department}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#111111] group-hover:text-black transition-colors tracking-tight">
                      <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                    </h3>
                    <p className="text-[14px] text-zinc-600 mt-1 max-w-2xl">
                      {job.about}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center pt-2 sm:pt-0">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
                    >
                      <span>View role</span>
                      <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 5. GENERAL APPLICATION CTA ───────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-8 sm:pt-16">
          <div className="border-t border-black/[0.08] pt-12 sm:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight">
                Don&apos;t see your specific role?
              </h2>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                We are always interested in meeting exceptional people. Send us your GitHub or portfolio.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
