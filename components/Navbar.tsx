"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Shield, Mic, LayoutGrid, ChevronDown } from "lucide-react";

import Link from "next/link";

interface NavbarProps {
  onOpenDemo: (product?: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Redstone-style Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <span className="font-black text-2xl tracking-tighter text-white uppercase flex items-center">
              FORTUNE<span className="text-[#e70000]">TECH</span>
              <span className="w-2 h-2 rounded-full bg-[#e70000] ml-1 inline-block animate-pulse"></span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-[#e70000]" : ""
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#12141d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-1">
                    <Link
                      href="/portfolio"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
                          Zobay
                        </div>
                        <div className="text-xs text-gray-400">
                          Autonomous Voice AI & Phone Agents
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/portfolio"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">
                          StartOne
                        </div>
                        <div className="text-xs text-gray-400">
                          Unified Cloud Enterprise OS
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/portfolio"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">
                          LegalX
                        </div>
                        <div className="text-xs text-gray-400">
                          AI Contract & Compliance Intelligence
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Portfolio
            </Link>

            {/* Services Link */}
            <Link
              href="/services"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </Link>

            {/* Technologies Link */}
            <Link
              href="/technologies"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Technologies
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>

            {/* Awards Link */}
            <Link
              href="/awards"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Awards
            </Link>

            {/* Contact Us Link */}
            <Link
              href="/contacts"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contacts
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contacts"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              Contact Us
            </Link>

            <button
              onClick={() => onOpenDemo()}
              className="redstone-btn"
            >
              <span>Let's talk</span>
              <div className="btn-icon-circle">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">
              Navigation
            </div>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Portfolio</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Services</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Technologies</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>About Us</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
            <Link
              href="/contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
            >
              <span>Contacts</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#e70000] text-white font-semibold text-center text-sm shadow-lg shadow-[#e70000]/30"
            >
              Request Private Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
