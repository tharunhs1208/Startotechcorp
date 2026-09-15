"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust / Clients */}
        <TrustBar />

        {/* 4. About Preview */}
        <AboutPreview />

        {/* 5. Services (6 Core Cards) */}
        <ServicesSection />

        {/* 6. Why Choose Us (Expertise, Innovation, Quality, Support) */}
        <WhyChooseUs />

        {/* 7. Statistics */}
        <StatsSection />

        {/* 8. Process (Discover, Plan, Design, Develop, Test, Launch) */}
        <ProcessSection />

        {/* 9. Featured Projects */}
        <FeaturedProjects />

        {/* 10. Industries */}
        <IndustriesSection />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. CTA */}
        <CTASection />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
