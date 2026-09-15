"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Sparkles, MessageSquare, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Digital Product / Web App",
    budget: "$25,000 - $50,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
              Start a Project
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              Have an idea or need to re-engineer an existing product? Tell us about it. We reply within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FORM & STUDIO DETAILS ───────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div className="p-8 sm:p-10 rounded-2xl border border-black/[0.08] bg-white shadow-xs">
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-6">
                    Project Inquiry
                  </h2>

                  {submitted ? (
                    <div className="py-16 text-center space-y-4">
                      <CheckCircle2 className="w-12 h-12 text-[#0070f3] mx-auto" />
                      <h3 className="font-display text-2xl font-bold text-zinc-900">
                        Message Received
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting StratoTechCorp. Our technical leadership will review your requirements and reach out within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Tharun Kumar"
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="tharun@company.com"
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                            Company / Organization
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Acme Corp"
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                            What are you building?
                          </label>
                          <select
                            value={form.projectType}
                            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3] cursor-pointer"
                          >
                            <option value="Digital Product / Web App">Digital Product / Web App</option>
                            <option value="AI & Machine Learning Agent">AI & Machine Learning Agent</option>
                            <option value="Mobile App (iOS / Android)">Mobile App (iOS / Android)</option>
                            <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                            <option value="UI/UX Design System">UI/UX Design System</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                            Budget Range
                          </label>
                          <select
                            value={form.budget}
                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3] cursor-pointer"
                          >
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                            <option value="$100,000+">$100,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Project Overview *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about the project goals, target timeline, and key requirements..."
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0070f3] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-pill btn-accent-c w-full justify-center !py-3.5 text-xs font-semibold cursor-pointer shadow-xs"
                      >
                        <span>Send Project Inquiry</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Direct Studio Info */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Studio Location
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0070f3] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-zinc-900">
                          StratoTechCorp Studio
                        </div>
                        <div className="text-xs text-zinc-600 mt-0.5">
                          Bengaluru, Karnataka, India
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Direct Inquiries
                    </span>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <a
                        href="mailto:hello@stratotechcorp.com"
                        className="text-xs sm:text-sm text-zinc-900 hover:text-[#0070f3] transition-colors"
                      >
                        hello@stratotechcorp.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Turnaround Time
                    </span>
                    <div className="flex items-center gap-3 text-xs text-zinc-600">
                      <Clock className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <span>Average response time under 24 business hours</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Video snippet */}
              <ScrollReveal delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.08] bg-zinc-950 shadow-xs">
                  <video
                    src="/videos/legalx.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
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
