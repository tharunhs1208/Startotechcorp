"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white flex flex-col justify-between">
      <Navbar />

      <section className="pt-40 pb-28 text-center px-4 sm:px-8 max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#0070f3] font-semibold mb-4">
          Error 404
        </div>
        <div className="font-display text-7xl sm:text-9xl font-black text-zinc-300 mb-4 select-none">
          404
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved to a new route.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-6 py-3.5 inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/projects"
            className="btn-pill btn-ghost text-xs sm:text-sm font-semibold px-6 py-3.5 border-black/15 text-zinc-900 inline-flex items-center gap-2"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
