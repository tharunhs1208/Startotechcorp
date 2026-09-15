"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, Target, Eye, ShieldCheck, Zap, Users, HeartHandshake, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_VALUES, COMPANY_STATS } from "@/data/siteData";

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Vikram Sethi",
      role: "Chief Executive Officer & Founder",
      bio: "Former VP of Distributed Systems. Over 15 years leading enterprise engineering teams and architecting cloud platforms.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Aanya Sharma",
      role: "Head of Product Design & Research",
      bio: "Former Principal Design Lead. Specializes in atomic design token systems, accessibility, and high-conversion UX.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Rahul Verma",
      role: "Principal Systems Architect",
      bio: "Specializes in high-frequency payment ledgers, Kubernetes cluster orchestration, and sub-300ms voice pipelines.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Arthur Sterling",
      role: "VP of Security & Compliance",
      bio: "Certified Information Systems Auditor. Led SOC-2 Type II, ISO 27001, and HIPAA compliance audits for tier-1 institutions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const timeline = [
    { year: "2021", title: "Company Inception", desc: "StartoTech founded in Bengaluru with a core team of 4 senior distributed systems engineers." },
    { year: "2023", title: "Launch of StartOne OS", desc: "Unified enterprise operating platform adopted by over 50 fast-growing mid-market companies." },
    { year: "2024", title: "Zobay Voice & Legal AI", desc: "Breakthrough sub-280ms speech-to-speech voice pipeline and autonomous legal contract redlining." },
    { year: "2026", title: "Global Sovereign Mesh", desc: "38 global edge nodes, SOC-2 Type II certification, and over 150 enterprise software deployments worldwide." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>About StartoTech</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Technology With Purpose
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            We are a team of passionate software engineers, product designers, and AI specialists dedicated to crafting high-performance digital products and scalable cloud platforms for global enterprises.
          </p>
        </div>

        {/* 2. COMPANY STORY & IMAGE */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Our Story &amp; Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
                Built By Engineers For Modern Businesses
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                StartoTech was founded on a singular conviction: modern institutions shouldn&apos;t be held back by disconnected software silos, fragile legacy codebases, and sluggish manual workflows.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                By uniting modern web frameworks, low-latency conversational AI models, distributed multi-tenant ledgers, and zero-trust cybersecurity, we engineer software solutions that deliver immediate operational clarity and quantifiable business ROI.
              </p>

              <div className="pt-2">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3.5 inline-flex items-center gap-2">
                  <span>Work With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="StartoTech Team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. MISSION & VISION CARDS */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="card-blueprint p-8 sm:p-10 bg-gradient-to-br from-blue-50/80 to-white border-blue-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To empower forward-thinking enterprises with sovereign, zero-friction software architectures that automate repetitive operations, eliminate technical debt, and accelerate sustainable commercial growth.
              </p>
            </div>

            <div className="card-blueprint p-8 sm:p-10 bg-gradient-to-br from-emerald-50/80 to-white border-emerald-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To be the world&apos;s premier engineering partner for autonomous business platforms — setting global standards for speed, security, design elegance, and verifiable machine intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* 4. CORE VALUES */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Our 4 Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div key={idx} className="card-blueprint p-7 flex flex-col justify-between text-left">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 text-slate-800 font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. COMPANY TIMELINE */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Milestones &amp; Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
                <span className="text-2xl font-mono font-black text-blue-600 block mb-2">{item.year}</span>
                <h4 className="text-base font-bold text-slate-950 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. LEADERSHIP & TEAM */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Meet The Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, idx) => (
              <div key={idx} className="card-blueprint overflow-hidden flex flex-col justify-between text-left">
                <div className="h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 mb-0.5">{member.name}</h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">{member.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. ACHIEVEMENTS STATS BAR */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-blue-600">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
