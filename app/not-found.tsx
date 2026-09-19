"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-40 pb-28 text-center px-5 sm:px-8 max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#86868b] font-semibold mb-3">
          Error 404
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#1d1d1f] tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-[15px] text-[#6e6e73] font-normal max-w-md mb-8">
          The requested route does not exist or has been relocated within the directory.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] text-[#1d1d1f] hover:bg-[#f5f5f7] text-[14px] font-medium transition-colors"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
