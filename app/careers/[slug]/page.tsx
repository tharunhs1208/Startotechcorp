"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { JOBS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function JobDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const job = JOBS_DATA.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    portfolio: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container">
          <ScrollReveal>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-[#0070f3] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Openings</span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-xs text-[#0070f3] mb-3 font-semibold">
              <span>{job.department}</span>
              <span>·</span>
              <span>{job.location}</span>
              <span>·</span>
              <span>{job.type}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
              {job.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── JOB DETAILS & APPLICATION ───────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Job Details */}
            <div className="lg:col-span-7 space-y-12">
              <ScrollReveal delay={0.1}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                    Overview
                  </span>
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                    About the Role
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                    {job.about}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                    Responsibilities
                  </span>
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                    What You&apos;ll Do
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                    Qualifications
                  </span>
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                    What We&apos;re Looking For
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] mt-2 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <ScrollReveal delay={0.25}>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Bonus
                    </span>
                    <h2 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                      Nice to Have
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {job.niceToHave.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl border border-black/[0.08] bg-white text-xs font-mono text-zinc-700 shadow-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Right: Application Card */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="sticky top-28 p-8 rounded-2xl border border-black/[0.08] bg-white shadow-md">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                    Apply Now
                  </span>
                  <h3 className="font-display text-2xl font-bold text-zinc-900 mb-6">
                    Submit Application
                  </h3>

                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <CheckCircle2 className="w-12 h-12 text-[#0070f3] mx-auto" />
                      <h4 className="font-display text-lg font-bold text-zinc-900">
                        Application Submitted
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Thank you for applying. We will review your submission and reach out soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tharun Kumar"
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tharun@example.com"
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Resume / CV URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.resume}
                          onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                          placeholder="https://drive.google.com/..."
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Portfolio / GitHub
                        </label>
                        <input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          placeholder="https://github.com/..."
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Note / Cover Message
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly introduce yourself..."
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-pill btn-accent-c w-full justify-center !py-3.5 text-xs font-semibold mt-2 cursor-pointer shadow-xs"
                      >
                        <span>Submit Application</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
