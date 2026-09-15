"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#b7ff4a] transition-colors";

  const selectClass =
    "w-full bg-[#0a0a0a] border border-white/15 rounded-xl px-5 py-4 text-sm text-white/80 focus:outline-none focus:border-[#b7ff4a] transition-colors cursor-pointer appearance-none";

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <VideoLayer src="/videos/legalx.mp4" overlay="scrim-center" />
        <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-10 lg:px-20 pt-28">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-4 sm:mb-6">Get in Touch</div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-none uppercase break-words">
              LET&apos;S MAKE
              <br />
              <span className="text-outline">SOMETHING</span>
              <br />
              GREAT.
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-6 sm:mt-10 max-w-xl text-sm sm:text-lg text-white/50 leading-relaxed">
              Have a vision? We build the technology that brings it to life —
              from first brief to final launch.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="eyebrow text-[10px]">Scroll</span>
          <div className="w-px h-8 sm:h-10 bg-white/40" />
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* LEFT — Contact Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <div className="eyebrow mb-4 sm:mb-6">Contact</div>
                <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl leading-tight mb-8 sm:mb-16 uppercase break-words">
                  START A<br />PROJECT.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6 sm:space-y-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Mail className="w-3.5 h-3.5 text-[#b7ff4a]" />
                      <div className="eyebrow text-[10px]">Email</div>
                    </div>
                    <a
                      href="mailto:hello@fortunetech.com"
                      className="text-base sm:text-lg text-white hover:text-[#b7ff4a] transition-colors duration-300"
                    >
                      hello@fortunetech.com
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Phone className="w-3.5 h-3.5 text-[#b7ff4a]" />
                      <div className="eyebrow text-[10px]">Phone</div>
                    </div>
                    <a
                      href="tel:+910000000000"
                      className="text-base sm:text-lg text-white hover:text-[#b7ff4a] transition-colors duration-300"
                    >
                      +91 00000 00000
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#b7ff4a]" />
                      <div className="eyebrow text-[10px]">Location</div>
                    </div>
                    <p className="text-base sm:text-lg text-white/80">Bengaluru, India</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <Clock className="w-3.5 h-3.5 text-[#b7ff4a]" />
                      <div className="eyebrow text-[10px]">Office Hours</div>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                      Monday – Friday<br />9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-16 hidden lg:block">
                  <div className="w-12 h-[2px] bg-[#b7ff4a] mb-4" />
                  <p className="text-xs text-white/30 leading-relaxed max-w-[260px]">
                    We partner with teams of every scale — from seed-stage
                    startups to global enterprises.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.15}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
                    <div className="w-20 h-20 rounded-full border border-[#b7ff4a]/40 flex items-center justify-center">
                      <ArrowUpRight className="w-8 h-8 text-[#b7ff4a]" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                      Message Sent.
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                      Thanks for reaching out. Our team will review your message
                      and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setForm(initialForm);
                        setSubmitted(false);
                      }}
                      className="mt-4 btn-pill btn-ghost text-sm"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="eyebrow block mb-2 text-[10px]">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-2 text-[10px]">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">Project Type</label>
                      <div className="relative">
                        <select
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          <option value="" className="bg-[#050505]">Select a type</option>
                          <option value="web" className="bg-[#050505]">Web Development</option>
                          <option value="mobile" className="bg-[#050505]">Mobile App</option>
                          <option value="ai" className="bg-[#050505]">AI &amp; Automation</option>
                          <option value="design" className="bg-[#050505]">UI/UX Design</option>
                          <option value="cloud" className="bg-[#050505]">Cloud &amp; DevOps</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 7L11 1" stroke="#b7ff4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">Budget</label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          <option value="" className="bg-[#050505]">Select budget range</option>
                          <option value="5-15k" className="bg-[#050505]">$5k – $15k</option>
                          <option value="15-50k" className="bg-[#050505]">$15k – $50k</option>
                          <option value="50-100k" className="bg-[#050505]">$50k – $100k</option>
                          <option value="100k+" className="bg-[#050505]">$100k+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 7L11 1" stroke="#b7ff4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow block mb-2 text-[10px]">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className={inputClass + " resize-none"}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-pill btn-accent-c py-5 justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="border-t border-white/10 py-12 text-center">
        <p className="text-white/40 text-sm">
          We typically respond within 24 hours during business days.
        </p>
      </div>

      <Footer />
    </main>
  );
}
