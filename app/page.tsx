"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import InteractiveEcosystem from "@/components/InteractiveEcosystem";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import DemoModal from "@/components/DemoModal";
import Footer from "@/components/Footer";

import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<string>("Fortune Suite");

  const handleOpenDemo = (productName?: string) => {
    setSelectedDemoProduct(productName || "Fortune Suite");
    setDemoModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="relative">
        {/* 1. Redstone-inspired Hero Section with Kinetic Headline & Video Capsule */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onSelectProduct={handleSelectProduct}
        />

        {/* 2. Redstone-style Project Portfolio Showcase (Zobay, StartOne, LegalX) */}
        <ProductShowcase onOpenDemo={handleOpenDemo} />

        {/* 3. Redstone Services & Interactive Ecosystem Synergy */}
        <InteractiveEcosystem />

        {/* 4. Redstone 'Join the Best' Continuous Marquee & 'Our Technologies' 3-Tier Grid */}
        <TechStack onOpenDemo={() => handleOpenDemo()} />

        {/* 5. Enterprise Architecture Bento Grid */}
        <BentoGrid />

        {/* 6. Verified Enterprise Testimonials & Client Reviews */}
        <Testimonials />

        {/* 7. Redstone FAQ & 'Let's talk' Executive Card */}
        <FAQ onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Demo & Sandbox Key Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultProduct={selectedDemoProduct}
      />
    </div>
  );
}
