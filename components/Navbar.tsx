"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Code, 
  Smartphone, 
  Layout, 
  Cpu, 
  Cloud, 
  Briefcase,
  Globe,
  Building,
  HeartPulse,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck
} from "lucide-react";
import { SERVICES_DATA, INDUSTRIES_DATA } from "@/data/siteData";

interface NavbarProps {
  onOpenDemo?: (product?: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code": return <Code className="w-4 h-4 text-blue-600" />;
      case "smartphone": return <Smartphone className="w-4 h-4 text-emerald-600" />;
      case "layout": return <Layout className="w-4 h-4 text-purple-600" />;
      case "cpu": return <Cpu className="w-4 h-4 text-amber-600" />;
      case "cloud": return <Cloud className="w-4 h-4 text-cyan-600" />;
      default: return <Briefcase className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-slate-900 uppercase">
                STARTO<span className="text-blue-600">TECH</span>
              </span>
              <span className="text-[10px] font-bold text-slate-600 tracking-wider -mt-1 uppercase">
                Innovate • Build • Grow
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors py-2">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600 transition-colors py-2">
              About
            </Link>

            {/* SERVICES MEGA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[680px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl shadow-slate-900/10 grid grid-cols-2 gap-3">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-left flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {getServiceIcon(srv.icon)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {srv.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-500 font-medium">Explore all enterprise technology capabilities</span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INDUSTRIES MEGA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <Link
                href="/industries"
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 cursor-pointer"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesDropdownOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </Link>

              {industriesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl shadow-slate-900/10 grid grid-cols-2 gap-2.5">
                    {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        onClick={() => setIndustriesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-left flex items-center justify-between group"
                      >
                        <span className="font-semibold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                          {ind.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-500 font-medium">Tailored sector-specific software solutions</span>
                      <Link
                        href="/industries"
                        onClick={() => setIndustriesDropdownOpen(false)}
                        className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>Explore All Industries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="hover:text-blue-600 transition-colors py-2">
              Projects
            </Link>

            <Link href="/careers" className="hover:text-blue-600 transition-colors py-2">
              Careers
            </Link>

            <Link href="/blog" className="hover:text-blue-600 transition-colors py-2">
              Blog
            </Link>
          </nav>

          {/* CONTACT US CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary py-2.5 px-5 text-xs font-bold rounded-xl"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
              Navigation
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>About Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Services (6 Capabilities)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Industries</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Projects &amp; Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Careers</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Blog &amp; Insights</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>FAQ</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-center text-sm shadow-lg shadow-blue-600/20 cursor-pointer block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
