"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Sparkles, ArrowRight, MapPin, Briefcase, Clock, CheckCircle2, Heart, Award, Zap, Users } from "lucide-react";
import { JOBS_DATA } from "@/data/siteData";

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", "Engineering", "Design", "AI & Innovation"];

  const filteredJobs = selectedDept === "All"
    ? JOBS_DATA
    : JOBS_DATA.filter((j) => j.department === selectedDept);

  const perks = [
    { title: "Competitive Pay & Equity", desc: "Top-tier salary packages with meaningful stock options.", icon: Award },
    { title: "Remote & Hybrid Flexibility", desc: "Work from our Bengaluru engineering center or from anywhere.", icon: Zap },
    { title: "Continuous Learning", desc: "$2,000 annual learning stipend for courses and conferences.", icon: Users },
    { title: "Comprehensive Health", desc: "Full health, vision, and dental coverage for you and your dependents.", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* HERO SECTION */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
            Build Your Future With Us
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Join a world-class team of engineers, designers, and systems architects building the next generation of autonomous enterprise software.
          </p>

          <a href="#open-positions" className="btn-primary text-sm sm:text-base px-7 py-4 inline-flex items-center gap-2">
            <span>View Open Positions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* WHY JOIN US & CULTURE */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Life at StartoTech
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Why Engineers &amp; Designers Thrive Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {perks.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="card-blueprint p-7 text-left flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CULTURE IMAGE */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl h-[360px] sm:h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="StartoTech Engineering Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* OPEN POSITIONS LISTING */}
        <div id="open-positions" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
                Open Positions
              </h2>
            </div>

            {/* DEPARTMENT FILTER */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.slug}
                className="card-blueprint p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-medium">{job.experience}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/careers/${job.slug}`}
                  className="btn-primary text-xs sm:text-sm px-6 py-3.5 shrink-0 inline-flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
