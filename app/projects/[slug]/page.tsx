"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/siteData";
import TechBadge from "@/components/TechBadge";
import Breadcrumbs from "@/components/Breadcrumbs";
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

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── BREADCRUMB & HEADER WITH SMOOTH FADE-IN ───────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 border-b border-black/[0.08]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Breadcrumbs
              items={[
                { label: "Work", href: "/projects" },
                { label: project.title },
              ]}
            />

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>All Projects</span>
            </Link>
          </div>

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

          <p className="text-lg text-[#6e6e73] font-light leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </motion.section>

        {/* ── LARGE PRODUCT VISUAL WITH ELEVATION ───────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 32, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1240px] mx-auto px-5 sm:px-8 py-12 sm:py-16"
        >
          <div className="overflow-hidden rounded-2xl bg-zinc-100 border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[16/10] sm:aspect-video object-cover"
            />
          </div>
        </motion.section>

        {/* ── EDITORIAL CASE-STUDY SECTIONS WITH SCROLL REVEALS ─────── */}
        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-8 space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.08] pt-8"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6e6e73] block mb-3 font-semibold">
              01 · Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-4">
              What the product does.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-light">
              {project.overview}
            </p>
          </motion.div>

          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.08] pt-8"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6e6e73] block mb-3 font-semibold">
              02 · The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-4">
              The business problem it was designed to address.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-light">
              {project.challenge}
            </p>
          </motion.div>

          {/* The Product & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.08] pt-8"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6e6e73] block mb-3 font-semibold">
              03 · The Product & Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-4">
              How the product works.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] leading-relaxed font-light mb-8">
              {project.solution}
            </p>

            {/* Key Features */}
            <div className="space-y-3 pt-2">
              <h3 className="text-[12px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold">
                Key Deliverables &amp; Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-black/[0.12] pl-3.5 py-1 text-[14px] text-zinc-700 leading-snug"
                  >
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technology Stacks */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/[0.08] pt-8"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6e6e73] block mb-3 font-semibold">
              04 · Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-4">
              Core technologies & frameworks used.
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </motion.div>

          {/* Testimonial / Outcome */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-black/[0.08] pt-8"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6e6e73] block mb-3 font-semibold">
                05 · Client Partner Review
              </span>
              <blockquote className="text-lg sm:text-xl font-display text-[#1d1d1f] leading-relaxed mb-4">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-[13px] font-mono text-[#6e6e73]">
                {project.testimonial.author} · {project.testimonial.role}, {project.testimonial.company}
              </div>
            </motion.div>
          )}
        </section>

        {/* ── NEXT CASE STUDY NAVIGATION ─────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16">
          <div className="border-t border-black/[0.08] pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/projects"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              ← Back to all work
            </Link>

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#1d1d1f] hover:text-emerald-700 transition-colors"
              >
                <span>Next Project: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
