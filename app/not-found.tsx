"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-40 pb-28 px-4 flex-1 flex items-center justify-center text-center">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Page Not Found</span>
          </div>

          <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            404
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
            Oops! This Page Does Not Exist
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn-primary text-sm px-6 py-3.5 inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link href="/services" className="btn-secondary text-sm px-6 py-3.5 inline-flex items-center gap-2">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
