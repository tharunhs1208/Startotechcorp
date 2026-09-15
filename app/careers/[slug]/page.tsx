"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, MapPin, Clock, Briefcase, Award } from "lucide-react";
import { JOBS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const job = JOBS_DATA.find((j) => j.slug === slug);

  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* BREADCRUMBS & HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{job.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{job.department} Position</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600" />
              {job.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              {job.type}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-purple-600" />
              {job.experience}
            </span>
          </div>
        </div>

        {/* MAIN BODY & APPLICATION FORM */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* LEFT: JOB DETAILS */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">About The Role</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{job.about}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Requirements &amp; Experience</h3>
                <ul className="space-y-2.5">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Nice to Have</h3>
                <ul className="space-y-2.5">
                  {job.niceToHave.map((nth, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>{nth}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Benefits &amp; Perks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((b, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      ✓ {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* HIRING PROCESS */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">Our 5-Stage Hiring Process</h3>
                <div className="space-y-3">
                  {job.process.map((p, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {p.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE APPLICATION FORM */}
            <div className="lg:col-span-5">
              <div className="card-blueprint p-8 sm:p-10 sticky top-28">
                <h3 className="text-2xl font-black text-slate-950 mb-2">Apply For This Position</h3>
                <p className="text-xs text-slate-500 mb-6">Complete the details below to submit your application.</p>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Application Received</h4>
                    <p className="text-xs text-slate-600">
                      Our hiring team will review your profile and contact you within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        required
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Why are you excited about this role?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Brief summary of your background and achievements..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider mt-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
