"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/cinematic/Reveal';
import VideoLayer from '@/components/cinematic/VideoLayer';
import CTASection from '@/components/cinematic/CTASection';
import { PROJECTS_DATA } from '@/data/siteData';

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
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        {project.video ? (
          <VideoLayer src={project.video} overlay="scrim-bottom" />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          </>
        )}
        <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-10 lg:px-20 pb-16 sm:pb-24">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-4">
              {project.industry} — {project.category}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-none break-words">
              {project.title.toUpperCase()}
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-4 sm:mt-6 text-white/60 max-w-xl text-xs sm:text-sm leading-relaxed">
              {project.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. PROJECT OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <div className="eyebrow mb-4">The Project</div>
              <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 leading-tight break-words">
                A MODERN<br />
                <span className="text-outline">DIGITAL</span>
                <br />
                EXPERIENCE.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                {project.overview}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-white/15 text-[10px] sm:text-[11px] text-white/50 uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM & SOLUTION ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Reveal>
              <div className="p-6 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.03] h-full">
                <div className="eyebrow text-red-400 mb-4">The Problem</div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="p-6 sm:p-10 rounded-2xl border border-[#b7ff4a]/20 bg-[#b7ff4a]/[0.03] h-full">
                <div className="eyebrow text-[#b7ff4a] mb-4">Our Solution</div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-8 sm:mb-12">Capabilities Built</div>
          </Reveal>
          <div>
            {project.features.map((feature, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="reveal-row py-6 sm:py-8 group">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-[#b7ff4a] font-mono text-base sm:text-xl shrink-0">
                      0{i + 1}
                    </span>
                    <span className="display-lg text-xl sm:text-3xl lg:text-4xl text-white/70 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RESULTS ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <VideoLayer src="/videos/baseone.mp4" overlay="scrim" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-8 sm:mb-12">Results</div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {project.results.map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <div className="display-xl text-3xl sm:text-5xl lg:text-6xl text-[#b7ff4a]">
                    {r.metric}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm mt-2">{r.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <blockquote>
              <div className="display-xl text-3xl sm:text-5xl text-white/30 mb-2">
                &ldquo;
              </div>
              <p className="display-lg text-xl sm:text-3xl lg:text-4xl max-w-4xl text-[#f2f2ec] mb-6 sm:mb-8">
                {project.testimonial.quote}
              </p>
              <cite className="not-italic">
                <div className="text-sm font-semibold text-[#b7ff4a]">
                  {project.testimonial.author}
                </div>
                <div className="text-xs text-white/40">
                  {project.testimonial.role}, {project.testimonial.company}
                </div>
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── 7. NEXT PROJECT ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group relative block min-h-[40vh] sm:min-h-[50vh] overflow-hidden"
        >
          <img
            src={nextProject.image}
            alt={nextProject.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-[#050505]/40 transition-colors duration-700" />
          <div className="relative z-10 flex h-full min-h-[40vh] sm:min-h-[50vh] items-end p-6 sm:p-12">
            <div>
              <div className="eyebrow mb-2 sm:mb-3">Next Project</div>
              <h3 className="display-xl text-3xl sm:text-5xl lg:text-6xl break-words">
                {nextProject.title.toUpperCase()}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b7ff4a]">
                View Case Study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── 8. GLOBAL CTA ───────────────────────────────────────────────────── */}
      <CTASection
        title="Your Project Could Be Next."
        actionLabel="Start a Project"
        href="/contact"
        video="/videos/hero-pinterest.mp4"
      />

      <Footer />
    </main>
  );
}
