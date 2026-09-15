"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Star, Quote } from "lucide-react";
import { PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* BREADCRUMBS & HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{project.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Case Study • {project.industry}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          {/* FULL HERO IMAGE BANNER */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl mb-16 h-[380px] sm:h-[480px]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* OVERVIEW, CHALLENGE, SOLUTION */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Project Overview</h2>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-4">Context &amp; Strategic Objectives</h3>
                <p className="text-base text-slate-600 leading-relaxed">{project.overview}</p>
              </div>

              <div className="p-8 rounded-3xl bg-rose-50/60 border border-rose-200">
                <h3 className="text-xl font-bold text-rose-900 mb-3">The Challenge</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Engineered Solution</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
              </div>

              {/* KEY FEATURES */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Capabilities Built</h2>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-6">Key Platform Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((f, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        0{i + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-700 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR: RESULTS & TECH STACK */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* MEASURABLE RESULTS */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-4">
                  Measurable Impact
                </span>
                <div className="space-y-6">
                  {project.results.map((res, i) => (
                    <div key={i} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className="text-3xl font-black text-blue-600">{res.metric}</div>
                      <div className="text-xs text-slate-500 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH STACK */}
              <div className="card-blueprint p-6 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CLIENT TESTIMONIAL */}
              <div className="card-blueprint p-6 text-left bg-blue-50/50 border-blue-200">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="text-xs font-bold text-slate-950">{project.testimonial.author}</div>
                  <div className="text-[10px] text-slate-500">{project.testimonial.role}, {project.testimonial.company}</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
