"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/siteData";
import TechBadge from "@/components/TechBadge";
import { SoftwareAppJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <SoftwareAppJsonLd
        name={project.title}
        applicationCategory={`${project.category} Application, ${project.industry}`}
        description={project.overview || project.tagline}
        url={`https://stratotechcorp.in/projects/${project.slug}`}
        features={project.features}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://stratotechcorp.in" },
          { name: "Projects", item: "https://stratotechcorp.in/projects" },
          { name: project.title, item: `https://stratotechcorp.in/projects/${project.slug}` },
        ]}
      />
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-10 sm:pb-16">
        {/* ── BREADCRUMB & HEADER ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 border-b border-black/[0.08]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Work</span>
          </Link>

          <div className="flex items-center gap-3 text-[12px] font-mono text-[#6e6e73] mb-3 uppercase tracking-wider">
            <span className="font-semibold text-[#1d1d1f]">PRODUCT</span>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.industry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.1] mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-[#6e6e73] font-normal leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </section>

        {/* ── LARGE PRODUCT VISUAL ───────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="overflow-hidden rounded-xl bg-[#e5e5ea] border border-black/[0.06]">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            )}
          </div>
        </section>

        {/* ── EDITORIAL CASE-STUDY CONTENT (Problem, Product, Work) ── */}
        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-8 space-y-16">
          {/* Overview */}
          <div className="border-t border-black/[0.08] pt-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-3 font-semibold">
              01 · Overview
            </span>
            <h2 className="text-2xl font-display font-medium text-[#1d1d1f] mb-4">
              What the product does.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* The Problem */}
          <div className="border-t border-black/[0.08] pt-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-3 font-semibold">
              02 · The Challenge
            </span>
            <h2 className="text-2xl font-display font-medium text-[#1d1d1f] mb-4">
              The business problem it was designed to address.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* The Product & Solution */}
          <div className="border-t border-black/[0.08] pt-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-3 font-semibold">
              03 · The Product & Engineering
            </span>
            <h2 className="text-2xl font-display font-medium text-[#1d1d1f] mb-4">
              How the product works.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-normal mb-8">
              {project.solution}
            </p>

            {/* Key Features */}
            <div className="space-y-3 pt-2">
              <h3 className="text-[14px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold">
                Key Features
              </h3>
              <ul className="space-y-2 text-[14px] text-[#6e6e73] font-mono">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#86868b] shrink-0">↳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stacks */}
          <div className="border-t border-black/[0.08] pt-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-3 font-semibold">
              04 · Technology
            </span>
            <h2 className="text-2xl font-display font-medium text-[#1d1d1f] mb-4">
              Core technologies used.
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </div>

          {/* Testimonial / Outcome */}
          {project.testimonial && (
            <div className="border-t border-black/[0.08] pt-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73] block mb-3 font-semibold">
                05 · Client Partner Review
              </span>
              <blockquote className="text-lg sm:text-xl font-display text-[#1d1d1f] leading-relaxed mb-4">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-[13px] font-mono text-[#6e6e73]">
                {project.testimonial.author} · {project.testimonial.role}, {project.testimonial.company}
              </div>
            </div>
          )}
        </section>

        {/* ── NEXT CASE STUDY NAVIGATION ─────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16">
          <div className="border-t border-black/[0.08] pt-12 flex items-center justify-between">
            <Link
              href="/projects"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              ← Back to all work
            </Link>

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
              >
                <span>Next Project: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
