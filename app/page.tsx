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

import ServicesList from "@/components/ServicesList";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";

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
        <AnimatedSection delay={0.1}>
          <ProductShowcase onOpenDemo={handleOpenDemo} />
        </AnimatedSection>

        {/* 3. Redstone Numbered Core Services (01 - 05) */}
        <AnimatedSection delay={0.1}>
          <ServicesList onOpenDemo={handleOpenDemo} />
        </AnimatedSection>

        {/* 4. Redstone Services & Interactive Ecosystem Synergy */}
        <AnimatedSection delay={0.1}>
          <InteractiveEcosystem />
        </AnimatedSection>

        {/* 4. Redstone 'Join the Best' Continuous Marquee & 'Our Technologies' 3-Tier Grid */}
        <AnimatedSection delay={0.1}>
          <TechStack onOpenDemo={() => handleOpenDemo()} />
        </AnimatedSection>

        {/* 5. Enterprise Architecture Bento Grid */}
        <AnimatedSection delay={0.1}>
          <BentoGrid />
        </AnimatedSection>

        {/* 6. Verified Enterprise Testimonials & Client Reviews */}
        <AnimatedSection delay={0.1}>
          <Testimonials />
        </AnimatedSection>

        {/* 7. Redstone FAQ & 'Let's talk' Executive Card */}
        <AnimatedSection delay={0.1}>
          <FAQ onOpenDemo={() => handleOpenDemo()} />
        </AnimatedSection>
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
