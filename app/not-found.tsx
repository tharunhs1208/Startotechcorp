"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NotFound() {
  const handleOpenSearch = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 max-w-[1240px] w-full mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <Breadcrumbs items={[{ label: "404 Not Found" }]} className="mb-10" />

        <div className="max-w-2xl">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#86868b] block mb-3 font-semibold">
            ERROR 404
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-6 leading-[1.08]">
            The page you are looking for doesn&apos;t exist.
          </h1>
          <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed mb-10 max-w-xl">
            The link you followed may be broken, or the URL might have changed. Use the links below to find what you need.
          </p>

          {/* Quick Action Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-all shadow-xs group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={handleOpenSearch}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-black/[0.1] hover:border-black/30 text-[#1d1d1f] text-[14px] font-medium transition-all shadow-xs cursor-pointer group"
            >
              <Search className="w-4 h-4 text-[#86868b] group-hover:text-black" />
              <span>Search site (⌘K)</span>
            </button>
          </div>

          {/* Suggested Navigation Links */}
          <div className="pt-10 border-t border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#86868b] block mb-4 font-semibold">
              Popular Pages
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "Engineering Services", href: "/services" },
                { title: "Case Studies", href: "/projects" },
                { title: "Products & Tools", href: "/products" },
                { title: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-xl bg-white border border-black/[0.06] hover:border-black/25 text-[13px] font-medium text-[#1d1d1f] transition-all flex items-center justify-between group"
                >
                  <span className="truncate">{link.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-black group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
