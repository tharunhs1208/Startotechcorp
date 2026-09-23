"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[#82FFCD] selection:text-black">
      {/* ── 1. TOP NAVBAR WITH STRATOTECH LOGO ON LEFT & GLASS PILL MENU ON RIGHT ── */}
      <Navbar />

      <main className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 mb-4 sm:mb-8">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-bold tracking-[0.12em] text-white hover:opacity-80 transition-opacity uppercase"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 2. HERO: "Let's Talk" + Metadata Row ── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center pt-2 sm:pt-4">
          <h1 className="text-6xl sm:text-8xl lg:text-[116px] font-display font-bold text-white tracking-[-0.04em] leading-none mb-6 sm:mb-8">
            Let's Talk
          </h1>

          {/* Contact Details Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-white mb-10 sm:mb-14">
            <a
              href="mailto:contact@stratotechcorp.in"
              className="underline underline-offset-4 hover:text-[#82FFCD] transition-colors"
            >
              contact@stratotechcorp.in
            </a>
            <span className="text-zinc-400">·</span>
            <span className="text-white font-mono">
              +91 (80) 4120-8900
            </span>
            <span className="text-zinc-400">·</span>
            <span className="text-white">
              Bengaluru, Karnataka, India
            </span>
          </div>
        </section>

        {/* ── 3. WIDE CHARCOAL CONTACT FORM (Exact Screenshot 111602.png) ── */}
        <section className="max-w-[1140px] mx-auto px-5 sm:px-8">
          {submitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-[#222222] border border-white/10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#82FFCD] text-black font-bold text-xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Thank You!</h2>
              <p className="text-zinc-300 text-sm max-w-md mx-auto">
                Your inquiry has been received. Our engineering team will contact you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", source: "", message: "" });
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-[#82FFCD] cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name* & Email* (Wide 2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="dark-input w-full px-5 py-4 text-sm rounded-xl h-14"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="dark-input w-full px-5 py-4 text-sm rounded-xl h-14"
                  />
                </div>
              </div>

              {/* Row 2: Phone & How did you hear (Wide 2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="dark-input w-full px-5 py-4 text-sm rounded-xl h-14"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                    className="dark-input w-full px-5 py-4 text-sm rounded-xl h-14"
                  />
                </div>
              </div>

              {/* Row 3: Message* (Wide Full Width Textarea) */}
              <div>
                <textarea
                  rows={6}
                  required
                  placeholder="Message*"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="dark-input w-full px-5 py-4 text-sm rounded-xl resize-none h-40"
                />
              </div>

              {/* Row 4: Centered Mint Send Message Button */}
              <div className="pt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-3.5 rounded-full bg-[#82FFCD] hover:bg-[#68f5b8] text-black font-semibold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* ── 4. FOOTER ── */}
      <Footer />
    </div>
  );
}
