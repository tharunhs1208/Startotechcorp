"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Code, Smartphone, Layout, Cpu, Cloud, Briefcase } from "lucide-react";
import { SERVICES_DATA, PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* 1. BREADCRUMBS & HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{service.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Service Capability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm sm:text-base px-7 py-4 inline-flex items-center gap-2">
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/projects" className="btn-secondary text-sm sm:text-base px-7 py-4">
              View Related Case Studies
            </Link>
          </div>
        </div>

        {/* 2. THE CHALLENGE & OUR SOLUTION */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="card-blueprint p-8 sm:p-10 bg-rose-50/50 border-rose-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-2">
                The Core Challenge
              </span>
              <h3 className="text-2xl font-black text-slate-950 mb-4">
                What Holds Companies Back
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.challenge}
              </p>
            </div>

            <div className="card-blueprint p-8 sm:p-10 bg-emerald-50/50 border-emerald-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Our Engineered Solution
              </span>
              <h3 className="text-2xl font-black text-slate-950 mb-4">
                How We Deliver Results
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>

        {/* 3. WHAT WE OFFER (4 FEATURES) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              What We Offer in {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div key={idx} className="card-blueprint p-8 text-left flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1 font-mono font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-950 mb-2">{feat.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TECHNOLOGIES USED */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 mb-6">
              Modern Tooling &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-mono font-bold text-slate-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5. DEVELOPMENT PROCESS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <span className="text-2xl font-mono font-black text-blue-600 block mb-2">{step.step}</span>
                <h4 className="text-base font-bold text-slate-950 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. QUANTIFIABLE BENEFITS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="card-blueprint p-8 bg-blue-50/50 border-blue-200">
                <div className="text-4xl font-black text-blue-600 mb-2">{b.metric}</div>
                <div className="text-base font-bold text-slate-950 mb-1">{b.label}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. RELATED PROJECTS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                Proof of Execution
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
                Related Case Studies
              </h3>
            </div>
            <Link href="/projects" className="btn-secondary text-xs font-bold uppercase tracking-wider">
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <div key={proj.slug} className="card-blueprint p-6 flex flex-col justify-between">
                <div>
                  <img src={proj.image} alt={proj.title} className="w-full h-48 rounded-xl object-cover mb-4" />
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {proj.industry}
                  </span>
                  <h4 className="text-xl font-bold text-slate-950 mt-2 mb-1">{proj.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{proj.overview}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link href={`/projects/${proj.slug}`} className="text-xs font-bold text-blue-600 flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. FAQ */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Common Questions About {service.title}
            </h3>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-950 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
