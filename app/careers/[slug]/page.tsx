"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import CTASection from "@/components/cinematic/CTASection";
import { JOBS_DATA } from "@/data/siteData";

/* ─── Page props ─────────────────────────────────────────────────────────── */
interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function CareerDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const job = JOBS_DATA.find((j) => j.slug === slug);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });

  if (!job) {
    notFound();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <VideoLayer
          src={
            (
              {
                "senior-frontend-engineer": "/videos/startone.mp4",
                "senior-backend-engineer": "/videos/baseone.mp4",
                "lead-ui-ux-designer": "/videos/validsoft.mp4",
                "ai-machine-learning-engineer": "/videos/zobay.mp4",
              } as Record<string, string>
            )[job.slug] ?? "/videos/socan.mp4"
          }
          overlay="scrim-bottom"
        />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 pb-20">
          {/* Breadcrumb */}
          <Reveal delay={0.05}>
            <div className="flex items-center gap-2 text-white/40 text-xs mb-6 font-mono">
              <Link
                href="/"
                className="hover:text-[#b7ff4a] transition-colors duration-200"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/careers"
                className="hover:text-[#b7ff4a] transition-colors duration-200"
              >
                Careers
              </Link>
              <span>/</span>
              <span className="text-white/70">{job.title}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow mb-4">
              {job.department}&nbsp;·&nbsp;{job.location}&nbsp;·&nbsp;{job.type}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="display-xl text-[12vw] sm:text-[8vw] lg:text-[6vw] leading-none">
              {job.title.toUpperCase()}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── 2. JOB INFO BAR ──────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-8">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(
              [
                ["Location", job.location],
                ["Type", job.type],
                ["Experience", job.experience],
                ["Department", job.department],
              ] as [string, string][]
            ).map(([label, value]) => (
              <div key={label}>
                <div className="eyebrow mb-1">{label}</div>
                <div className="text-white text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT & RESPONSIBILITIES ──────────────────────────────────── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* About */}
            <div>
              <Reveal delay={0.05}>
                <div className="eyebrow mb-6">About The Role</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-lg text-3xl sm:text-4xl leading-tight mb-6">
                  What you'll
                  <br />
                  be doing.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-white/50 text-base leading-relaxed">
                  {job.about}
                </p>
              </Reveal>
            </div>

            {/* Responsibilities */}
            <div>
              <Reveal delay={0.1}>
                <div className="eyebrow mb-6">Responsibilities</div>
              </Reveal>
              <div className="space-y-0 divide-y divide-white/10">
                {job.responsibilities.map((r, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <div className="flex items-start gap-4 py-5 group">
                      <span className="text-[#b7ff4a] font-mono text-lg shrink-0 mt-0.5">
                        —
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                        {r}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. REQUIREMENTS & NICE TO HAVE ───────────────────────────────── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Requirements */}
            <div>
              <Reveal delay={0.05}>
                <div className="eyebrow mb-6">Requirements</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-lg text-3xl sm:text-4xl leading-tight mb-8">
                  What you
                  <br />
                  need.
                </h2>
              </Reveal>
              <ol className="space-y-4">
                {job.requirements.map((req, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <li className="flex items-start gap-4">
                      <span className="text-[#b7ff4a] font-mono text-xs mt-1 shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {req}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Nice to Have */}
            <div>
              <Reveal delay={0.1}>
                <div className="eyebrow mb-6">Nice To Have</div>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="display-lg text-3xl sm:text-4xl leading-tight mb-8">
                  Bonus
                  <br />
                  points.
                </h2>
              </Reveal>
              <ul className="space-y-4">
                {job.niceToHave.map((nth, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <li className="flex items-start gap-4">
                      <span className="text-[#b7ff4a] font-mono text-lg shrink-0 mt-0.5">
                        +
                      </span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {nth}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal delay={0.05}>
            <div className="eyebrow mb-6">Benefits & Perks</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg text-4xl sm:text-5xl leading-tight mb-12">
              What we offer.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {job.benefits.map((b) => (
                <span
                  key={b}
                  className="px-5 py-2.5 rounded-full border border-[#b7ff4a]/30 text-[#b7ff4a] text-sm hover:bg-[#b7ff4a]/10 transition-colors duration-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. HIRING PROCESS ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal delay={0.05}>
            <div className="eyebrow mb-6">Hiring Process</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg text-4xl sm:text-5xl leading-tight mb-16">
              How it works.
            </h2>
          </Reveal>

          <div className="divide-y divide-white/10">
            {job.process.map((step, i) => (
              <Reveal key={i} delay={0.05 + i * 0.07}>
                <div className="reveal-row py-8 group flex items-start gap-8 cursor-default">
                  <span className="text-[#b7ff4a] font-mono text-xl shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h4 className="display-lg text-2xl text-white/70 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h4>
                    {step.desc && (
                      <p className="text-white/40 text-sm mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#b7ff4a] transition-colors duration-300 shrink-0 mt-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. APPLY FORM ────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal>
            <h2 className="display-xl text-[10vw] sm:text-[6vw] lg:text-[4vw] leading-none mb-16">
              APPLY NOW.
            </h2>
          </Reveal>

          <div className="max-w-2xl">
            {submitted ? (
              /* Success state */
              <Reveal delay={0.1}>
                <div className="py-20 flex flex-col items-start gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#b7ff4a] flex items-center justify-center">
                    <span className="text-[#b7ff4a] text-xl font-bold">✓</span>
                  </div>
                  <h3 className="display-lg text-3xl text-white">
                    Application Received
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    Our hiring team will review your profile and reach out
                    within 48 hours. We appreciate your interest in joining
                    FortuneTech Corp.
                  </p>
                  <Link href="/careers" className="btn-pill btn-ghost mt-2">
                    Back to Careers{" "}
                    <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                  </Link>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <Reveal delay={0.05}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="eyebrow">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Mercer"
                      className="bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200"
                    />
                  </div>
                </Reveal>

                {/* Email */}
                <Reveal delay={0.08}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="eyebrow">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200"
                    />
                  </div>
                </Reveal>

                {/* Phone */}
                <Reveal delay={0.1}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="eyebrow">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200"
                    />
                  </div>
                </Reveal>

                {/* Resume */}
                <Reveal delay={0.12}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="resume" className="eyebrow">
                      Resume / CV
                    </label>
                    <div className="relative">
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white/50 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border file:border-[#b7ff4a]/40 file:bg-transparent file:text-[#b7ff4a] file:text-xs file:cursor-pointer focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Portfolio */}
                <Reveal delay={0.14}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="portfolio" className="eyebrow">
                      Portfolio / LinkedIn URL
                    </label>
                    <input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://yourportfolio.com"
                      className="bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200"
                    />
                  </div>
                </Reveal>

                {/* Message */}
                <Reveal delay={0.16}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="eyebrow">
                      Why are you excited about this role?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background, achievements, and why FortuneTech Corp excites you…"
                      className="bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#b7ff4a] transition-colors duration-200 resize-none"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <button
                    type="submit"
                    className="btn-pill btn-accent-c w-full py-5 flex items-center justify-center gap-2 mt-2"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Reveal>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Not the right fit? See all openings."
        actionLabel="View All Roles"
        href="/careers"
        video="/videos/baseone.mp4"
      />

      <Footer />
    </main>
  );
}
