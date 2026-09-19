"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextMaskReveal from "@/components/TextMaskReveal";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white w-full max-w-full overflow-x-hidden pb-10 sm:pb-16">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-40 pb-12 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center max-w-4xl">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
            LET&apos;S BUILD TOGETHER
          </span>
          <TextMaskReveal
            text="Start a Project"
            as="h1"
            once={false}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
          />
          <p className="mt-3 text-base sm:text-lg text-[#6e6e73] max-w-xl mx-auto font-normal leading-relaxed">
            Tell us about your product goals, engineering requirements, and timeline. We reply within 24 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT (EQUAL HEIGHT BALANCED CARDS) ───────────────── */}
      <section className="py-12 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          {submitted ? (
            <div className="max-w-xl mx-auto p-8 sm:p-14 rounded-2xl border border-black/[0.08] bg-white shadow-xs text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center text-[#1d1d1f] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                Project Brief Received
              </h2>
              <p className="text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                Thank you for reaching out, <span className="text-[#1d1d1f] font-medium">{form.name}</span>. Your requirements have been forwarded directly to our engineering team at <span className="font-mono text-[#1d1d1f] font-medium">tharun.hs@stratotechcorp.in</span>. We will review your brief and reply within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", company: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full border border-black/[0.12] bg-white text-[#1d1d1f] text-xs font-semibold hover:bg-black/[0.03] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Direct Inquiry Card */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="p-6 sm:p-10 rounded-2xl border border-black/[0.08] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                      DIRECT INQUIRY
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f] mb-6">
                      Tell us what you&apos;re building
                    </h2>

                    {errorMessage && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Rivera"
                          className="w-full bg-[#fbfbfd] border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="alex@company.com"
                            className="w-full bg-[#fbfbfd] border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Acme Corp"
                            className="w-full bg-[#fbfbfd] border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                          Subject / Product Focus
                        </label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="Inquiry regarding custom platform build"
                          className="w-full bg-[#fbfbfd] border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5">
                          Message &amp; Requirements *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about the project goals, target timeline, and key requirements..."
                          className="w-full bg-[#fbfbfd] border border-black/[0.08] focus:border-black rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#1d1d1f] text-white hover:bg-black disabled:opacity-75 disabled:cursor-not-allowed py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending Brief...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Column: Studio Info + Integrated Video Card (Matching Left Card Height) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
                {/* Studio Information Box */}
                <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                      STUDIO HEADQUARTERS
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#1d1d1f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-[#1d1d1f]">
                          StratoTechCorp
                        </div>
                        <div className="text-xs text-[#6e6e73] mt-0.5">
                          Queens road, Shivajinagar Bengaluru
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-black/[0.06]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                      DIRECT EMAIL
                    </span>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                      <a
                        href="mailto:tharun.hs@stratotechcorp.in"
                        className="text-xs sm:text-sm text-[#1d1d1f] hover:underline font-mono"
                      >
                        tharun.hs@stratotechcorp.in
                      </a>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-black/[0.06]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                      GUARANTEED SLA
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#6e6e73]">
                      <Clock className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                      <span>Response time within 24 business hours</span>
                    </div>
                  </div>
                </div>

                {/* Studio Video Showreel - Flexes to fill exact remaining height perfectly */}
                <div className="flex-1 min-h-[200px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#e5e5ea] shadow-[0_2px_16px_rgba(0,0,0,0.02)] relative group">
                  <video
                    src="/videos/legalx.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-[12px] font-mono tracking-wider uppercase opacity-90">
                    StratoTech · Engineering Studio
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
