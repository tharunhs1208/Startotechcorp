"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-10 border-b border-black/[0.08]">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Careers</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#6e6e73] mb-3 uppercase tracking-wider">
              <span className="font-semibold text-[#1d1d1f]">{job.department}</span>
              <span>·</span>
              <span>{job.location}</span>
              <span>·</span>
              <span>{job.type}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              {job.title}
            </h1>

            <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              {job.about}
            </p>
          </div>
        </section>

        {/* ── 2. JOB DETAILS & APPLICATION ─────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Job Details */}
            <div className="lg:col-span-7 space-y-12">
              <div className="border-t border-black/[0.08] pt-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                  RESPONSIBILITIES
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-[#1d1d1f] mb-4">
                  What You&apos;ll Do
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#6e6e73] leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black/[0.08] pt-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                  QUALIFICATIONS
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-[#1d1d1f] mb-4">
                  What We&apos;re Looking For
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#6e6e73] leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className="border-t border-black/[0.08] pt-6">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                    BONUS
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-medium text-[#1d1d1f] mb-4">
                    Nice to Have
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.niceToHave.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-white text-[12px] font-mono text-[#6e6e73]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-black/[0.08]">
              {formSubmitted ? (
                <div className="p-8 rounded-xl border border-black/[0.08] bg-white text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center text-[#1d1d1f] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#1d1d1f]">
                    Application Submitted
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    Thank you for applying, <span className="text-[#1d1d1f] font-medium">{formData.name}</span>. Our engineering team reviews candidates on a weekly rolling basis.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                      APPLICATION
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#1d1d1f]">
                      Apply for this role
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full bg-white border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-white border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                        Resume / CV Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.resume}
                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                        placeholder="https://drive.google.com/..."
                        className="w-full bg-white border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                        GitHub / Portfolio
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://github.com/..."
                        className="w-full bg-white border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                        Note / Introduction
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="A brief note on what you're interested in building..."
                        className="w-full bg-white border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1d1d1f] text-white hover:bg-black py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all cursor-pointer group"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
