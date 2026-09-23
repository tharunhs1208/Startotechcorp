"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarinoInterwovenHero from "@/components/hero/MarinoInterwovenHero";
import LogoPartnersTicker from "@/components/LogoPartnersTicker";
import MarinoIntroStatement from "@/components/MarinoIntroStatement";
import MarinoSelectedWork from "@/components/MarinoSelectedWork";
import MarinoServicesList from "@/components/MarinoServicesList";
import MarinoTrustCtaBanner from "@/components/MarinoTrustCtaBanner";
import StratoTechBlogSection from "@/components/StratoTechBlogSection";
import StratoTechFaqSection from "@/components/StratoTechFaqSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#111111] antialiased selection:bg-[#82FFCD] selection:text-black">
      {/* ── 1. NAVBAR (Exact Marino Floating Pill & Header) ── */}
      <Navbar />

      <main className="pt-0 pb-0">
        {/* ── SECTION 1: HERO (Interwoven Editorial Layout + Embedded Videos) ── */}
        <MarinoInterwovenHero />

        {/* ── SECTION 2: LOGO TICKER (White Strip Partner Marquee) ── */}
        <LogoPartnersTicker />

        {/* ── SECTION 3: MANIFESTO / ABOUT (Text Reveal & Scroll Highlights) ── */}
        <MarinoIntroStatement />

        {/* ── SECTION 4: OUR LATEST WORK (Black Section with Interactive Showcase) ── */}
        <MarinoSelectedWork />

        {/* ── SECTION 5: OUR SERVICES (Interactive Capability List & Visual Stage) ── */}
        <MarinoServicesList />

        {/* ── SECTION 6: TICKER & FOUNDER CTA (Double Marquee & Callout Pills) ── */}
        <MarinoTrustCtaBanner />

        {/* ── SECTION 7: WHAT'S HAPPENING? (Black Section with Editorial Articles) ── */}
        <StratoTechBlogSection />

        {/* ── SECTION 8: FREQUENTLY ASKED QUESTIONS (Minimalist Accordion) ── */}
        <StratoTechFaqSection />
      </main>

      {/* ── SECTION 10: FOOTER (Black Luxury Editorial Footer) ── */}
      <Footer />
    </div>
  );
}