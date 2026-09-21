"use client";

import React, { useState } from "react";
import {
  ArrowRight,
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
import ScrollCardTransition from "@/components/ScrollCardTransition";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
        throw new Error(data.error || "Failed to submit message.");
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
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. HEADER ────────────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-8 sm:pb-10 border-b border-black/[0.08]">
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6" />

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              GET IN TOUCH
            </span>
            <TextMaskReveal
              text="Contact Us"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Have a project in mind or want to learn more about our software products? Send us a message and we will get back to you within 24 business hours.
            </p>
          </div>
        </section>

        {/* ── 2. MAIN CONTACT SECTION (Matched Equal Heights) ──────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
          {submitted ? (
            <ScrollCardTransition>
              <div className="max-w-xl mx-auto p-8 sm:p-12 rounded-2xl border border-black/[0.08] bg-white text-center space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                  Message Sent Successfully
                </h2>
                <p className="text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                  Thank you for reaching out, <span className="text-[#1d1d1f] font-semibold">{form.name}</span>. Your message has been sent to our team at <span className="font-mono text-[#1d1d1f] font-medium">tharun.hs@stratotechcorp.in</span>. We will review your inquiry and reply promptly.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-black/[0.12] bg-white text-[#1d1d1f] text-xs font-semibold hover:bg-black/[0.03] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            </ScrollCardTransition>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Form Card */}
              <div className="lg:col-span-7 h-full flex flex-col">
                <ScrollCardTransition className="h-full flex flex-col">
                  <div className="h-full flex flex-col justify-between bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    <div>
                      <div className="mb-6">
                        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-1 font-semibold">
                          SEND A MESSAGE
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
                          How can we help?
                        </h2>
                      </div>

                      {errorMessage && (
                        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Phone & Company Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                              Company
                            </label>
                            <input
                              type="text"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              placeholder="Acme Inc."
                              className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                            Subject
                          </label>
                          <input
                            type="text"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder="Project Inquiry / SalesX / MeetingX / Custom Development"
                            className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] mb-1.5 font-medium">
                            Message *
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your project, goals, or questions..."
                            className="w-full bg-[#fbfbfb] border border-black/[0.08] focus:border-black focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 bg-[#111111] text-white hover:bg-zinc-800 disabled:opacity-75 disabled:cursor-not-allowed py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-sm"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Sending Message...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </ScrollCardTransition>
              </div>

              {/* Right Column: Studio Info & Location Card (Matches Exact Height) */}
              <div className="lg:col-span-5 h-full flex flex-col">
                <ScrollCardTransition index={1} className="h-full flex flex-col">
                  <div className="h-full flex flex-col justify-between bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    {/* Top Details */}
                    <div className="space-y-6">
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
                              Queens Road, Shivajinagar, Bengaluru, India
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 border-t border-black/[0.06]">
                        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                          DIRECT INBOX
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
                          <span>Response within 24 business hours guaranteed</span>
                        </div>
                      </div>
                    </div>

                    {/* Studio Visual (Fills remaining height seamlessly) */}
                    <div className="mt-8 flex-1 min-h-[190px] rounded-xl overflow-hidden border border-black/[0.08] bg-[#e5e5ea] relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                        alt="StratoTech Engineering Studio"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </ScrollCardTransition>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
