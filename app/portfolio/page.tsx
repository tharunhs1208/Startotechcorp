"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { PRODUCTS } from "@/components/ProductShowcase";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Filter, Shield, Mic, LayoutGrid, Check } from "lucide-react";

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Fortune Suite");

  const handleOpenDemo = (pName?: string) => {
    setSelectedProduct(pName || "Fortune Suite");
    setDemoModalOpen(true);
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "product-zobay", label: "Voice AI & Telephony" },
    { id: "product-startone", label: "Enterprise OS & Workspaces" },
    { id: "product-legalx", label: "Legal Tech & Compliance" },
  ];

  const filtered = selectedFilter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.id === selectedFilter);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white selection:bg-[#e70000] selection:text-white">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="pt-36 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Product Portfolio
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-6">
            Autonomous Solutions In Production
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the flagship platforms deployed by FortuneTechCorp across enterprise voice automation, operating systems, and machine-speed legal intelligence.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat.id
                    ? "bg-[#e70000] text-white shadow-lg shadow-[#e70000]/30"
                    : "bg-white/[0.04] text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((prod) => (
              <motion.div
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard
                  product={prod}
                  onOpenDemo={handleOpenDemo}
                  onExpandDetails={() => handleOpenDemo(prod.name)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
}
