"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/cinematic/CTASection";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { INDUSTRIES_DATA, PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const relatedProject = PROJECTS_DATA.find((p) => p.slug === industry.caseStudySlug) || PROJECTS_DATA[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* BREADCRUMBS & HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/industries" className="hover:text-blue-600 transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{industry.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Industry Sector</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            {industry.name}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            {industry.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm sm:text-base px-7 py-4 inline-flex items-center gap-2">
              <span>Request Industry Architecture Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CHALLENGES & SOLUTIONS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="card-blueprint p-8 sm:p-10 bg-rose-50/50 border-rose-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-2">
                Industry Headwinds
              </span>
              <h3 className="text-2xl font-black text-slate-950 mb-4">Sector Challenges</h3>
              <ul className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-blueprint p-8 sm:p-10 bg-emerald-50/50 border-emerald-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Engineering Approach
              </span>
              <h3 className="text-2xl font-black text-slate-950 mb-4">Our Tailored Solutions</h3>
              <ul className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CASE STUDY HIGHLIGHT */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block mb-2">
                Featured Case Study
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 mb-3">
                {relatedProject.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {relatedProject.overview}
              </p>
            </div>

            <Link
              href={`/projects/${relatedProject.slug}`}
              className="btn-primary text-white shrink-0 text-sm px-6 py-3.5"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
