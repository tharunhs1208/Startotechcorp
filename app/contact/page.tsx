"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* HERO */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Communication Channel</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Have a project in mind, need custom cloud architecture, or looking to automate your enterprise workflows? Let&apos;s discuss it with our principal engineers.
          </p>
        </div>

        {/* 2-COLUMN CONTACT INFO & FORM (TEMPLATE #14) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* LEFT: CONTACT INFORMATION */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-slate-900 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-3">
                  Contact Information
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950 mb-4">
                  StartoTech Headquarters
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Serving high-growth startups and Fortune 500 enterprises with sovereign software engineering and 24/7 global SLA support.
                </p>

                <div className="space-y-6 text-sm text-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Email Us</div>
                      <a href="mailto:hello@startotech.com" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        hello@startotech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Call Directly</div>
                      <div className="font-bold text-slate-900">+91 (80) 4129-8800</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Engineering Centers</div>
                      <div className="font-bold text-slate-900">Bengaluru • San Francisco • Frankfurt</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Response SLA</div>
                      <div className="font-bold text-emerald-700">&lt; 2 Hours for Enterprise Inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 mt-8 relative z-10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs text-slate-500 font-medium">
                  Mutual NDA Executed by Default • SOC-2 Type II Certified
                </span>
              </div>
            </div>

            {/* RIGHT: SEND US A MESSAGE FORM */}
            <div className="lg:col-span-7 card-blueprint p-8 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-2">
                Send Us A Message
              </h3>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the project scope details below and our technical leads will reach out within 2 hours.
              </p>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our principal systems architect will review your technical specifications and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                        Company Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Global Enterprises Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                        Service of Interest
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none cursor-pointer">
                        {SERVICES_DATA.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                        <option>Full Sovereign Platform Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Project Scope &amp; Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your goals, throughput targets, compliance boundaries, or timeline expectations..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-blue-600 focus:bg-white focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider shadow-xl shadow-blue-500/25"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* INTERACTIVE MAP CARD PLACEHOLDER */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-center flex flex-col items-center justify-center h-64">
            <MapPin className="w-10 h-10 text-blue-600 mb-3 animate-bounce" />
            <h4 className="text-lg font-bold text-slate-950">Global Engineering Operations</h4>
            <p className="text-xs text-slate-500 mt-1">Bengaluru Tech Park, Karnataka, India • 38 Sovereign Edge Clusters Worldwide</p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
