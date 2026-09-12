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
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-indigo-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="relative">
        {/* Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onSelectProduct={handleSelectProduct}
        />

        {/* The 3 Flagship Products Showcase with 3D Tilt & Animated Simulations */}
        <ProductShowcase onOpenDemo={handleOpenDemo} />

        {/* Interactive Ecosystem: Zobay + StartOne + LegalX Synergy Loop */}
        <InteractiveEcosystem />

        {/* Enterprise Architecture Bento Grid */}
        <BentoGrid />

        {/* Verified Enterprise Testimonials */}
        <Testimonials />
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
