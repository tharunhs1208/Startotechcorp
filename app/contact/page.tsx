"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Sparkles,
  Clock,
  Layers,
  Calendar,
  Check,
  ChevronRight,
  ChevronLeft,
  Sliders,
  Send,
  Shield,
  FileText
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const PROJECT_TYPES = [
  { id: "saas", title: "SaaS Platform", desc: "Multi-tenant cloud platform with billing & auth" },
  { id: "webapp", title: "Web Application", desc: "Custom web portal, dashboard, or workflow app" },
  { id: "mobile", title: "Mobile App", desc: "Native or cross-platform iOS & Android solution" },
  { id: "ai", title: "AI & Automation Agent", desc: "Voice AI, LLM pipelines, automated agents" },
  { id: "design", title: "UI/UX Design System", desc: "High-fidelity Figma system, tokens & component library" },
  { id: "enterprise", title: "Enterprise Internal Tool", desc: "Ops platforms, settlement, CRM or ERP integration" },
];

const SCOPE_OPTIONS = [
  { id: "uiux", label: "UI/UX Design & Prototyping" },
  { id: "frontend", label: "Frontend Engineering (Next.js/React)" },
  { id: "backend", label: "Backend API & Microservices" },
  { id: "database", label: "Database Schema & Architecture" },
  { id: "auth", label: "Auth, SSO & RBAC Security" },
  { id: "integrations", label: "3rd-Party API & Payment Integrations" },
  { id: "admin", label: "Admin & Analytics Dashboard" },
  { id: "devops", label: "Cloud Deployment (AWS/Vercel/CI/CD)" },
  { id: "maintenance", label: "Post-Launch SLA Maintenance" },
];

const SPRINT_DURATIONS = [
  {
    id: "1-sprint",
    sprints: "1 Sprint (2 Weeks)",
    type: "Discovery & Prototype",
    desc: "Architecture specification, clickable Figma prototype, or technical audit.",
  },
  {
    id: "2-sprints",
    sprints: "2 Sprints (4 Weeks)",
    type: "MVP Launchpad",
    desc: "Production-ready core feature set, database, auth, and deployment.",
  },
  {
    id: "4-sprints",
    sprints: "4 Sprints (8 Weeks)",
    type: "Full Product Build",
    desc: "Comprehensive platform with complete frontend, backend, integrations & QA.",
  },
  {
    id: "custom",
    sprints: "6+ Sprints (Dedicated)",
    type: "Enterprise Continuous",
    desc: "Dedicated cross-functional team scaling long-term product roadmaps.",
  },
];

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState<"configurator" | "quick">("configurator");

  // Configurator state
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>("saas");
  const [selectedScope, setSelectedScope] = useState<string[]>([
    "uiux",
    "frontend",
    "backend",
    "database",
  ]);
  const [selectedSprint, setSelectedSprint] = useState<string>("2-sprints");
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "Immediate (within 2 weeks)",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Quick form state
  const [quickForm, setQuickForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const toggleScope = (id: string) => {
    setSelectedScope((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfiguratorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType);
  const currentSprintObj = SPRINT_DURATIONS.find((s) => s.id === selectedSprint);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 w-full max-w-full overflow-x-hidden">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-40 pb-10 sm:pb-16 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              Start a Project
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed px-2 sm:px-0">
              Configure your project scope, sprint timeline, and technical requirements, or submit a direct inquiry. We reply within 24 hours.
            </p>

            {/* Mode Switcher */}
            <div className="mt-8 inline-flex p-1 rounded-full border border-black/[0.08] bg-white shadow-xs">
              <button
                type="button"
                onClick={() => setActiveMode("configurator")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeMode === "configurator"
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sprint Configurator</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode("quick")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeMode === "quick"
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Quick Inquiry</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <section className="py-10 sm:py-20 lg:py-24">
        <div className="page-container max-w-6xl">
          {submitted ? (
            <div className="max-w-xl mx-auto p-8 sm:p-12 rounded-2xl border border-black/[0.08] bg-white shadow-xs text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0070f3] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950">
                Project Brief Received
              </h2>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Thank you for submitting your technical requirements. Our engineering team is reviewing your scope and will send a detailed sprint roadmap within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 rounded-full border border-black/[0.12] bg-white text-zinc-800 text-xs font-semibold hover:bg-black/[0.03] transition-colors"
                >
                  Configure Another Project
                </button>
              </div>
            </div>
          ) : activeMode === "configurator" ? (
            /* ─────────────────────────────────────────────────────────── */
            /* 5-STEP PROJECT SCOPE & SPRINT CONFIGURATOR                  */
            /* ─────────────────────────────────────────────────────────── */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Interactive Wizard Steps */}
              <div className="lg:col-span-8">
                <div className="p-6 sm:p-10 rounded-2xl border border-black/[0.08] bg-white shadow-xs space-y-8">
                  {/* Step progress pills */}
                  <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStep(s)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                            step === s
                              ? "bg-zinc-950 text-white shadow-xs"
                              : step > s
                              ? "bg-emerald-500 text-white"
                              : "bg-black/[0.04] text-zinc-500 hover:bg-black/[0.08]"
                          }`}
                        >
                          {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      Step {step} of 5
                    </span>
                  </div>

                  {/* ── STEP 1: PROJECT TYPE ───────────────────────────── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
                          1. Select Project Type
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                          Choose the category that best matches your target digital product.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {PROJECT_TYPES.map((type) => (
                          <div
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                              selectedType === type.id
                                ? "border-[#0070f3] ring-1 ring-[#0070f3] bg-blue-50/20"
                                : "border-black/[0.08] hover:border-black/[0.18] bg-[#fbfbfd]"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <h3 className="text-sm font-semibold text-zinc-900">
                                {type.title}
                              </h3>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  selectedType === type.id
                                    ? "border-[#0070f3] bg-[#0070f3]"
                                    : "border-zinc-300"
                                }`}
                              >
                                {selectedType === type.id && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                              {type.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2: SCOPE & CAPABILITIES ──────────────────── */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
                          2. Configure Scope & Modules
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                          Select all architectural and development capabilities needed for this engagement.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SCOPE_OPTIONS.map((item) => {
                          const isChecked = selectedScope.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleScope(item.id)}
                              className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#0070f3] bg-blue-50/30 text-zinc-950"
                                  : "border-black/[0.08] bg-[#fbfbfd] text-zinc-700 hover:border-black/[0.18]"
                              }`}
                            >
                              <span>{item.label}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                  isChecked
                                    ? "border-[#0070f3] bg-[#0070f3] text-white"
                                    : "border-zinc-300 bg-white"
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3: SPRINT DURATION ────────────────────────── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
                          3. Estimated Sprint Velocity
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                          Our engineering team works in dedicated 2-week continuous delivery cycles.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {SPRINT_DURATIONS.map((dur) => (
                          <div
                            key={dur.id}
                            onClick={() => setSelectedSprint(dur.id)}
                            className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                              selectedSprint === dur.id
                                ? "border-[#0070f3] ring-1 ring-[#0070f3] bg-blue-50/20"
                                : "border-black/[0.08] hover:border-black/[0.18] bg-[#fbfbfd]"
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-zinc-950">
                                  {dur.sprints}
                                </span>
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-zinc-600">
                                  {dur.type}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-500 font-light">{dur.desc}</p>
                            </div>

                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                selectedSprint === dur.id
                                  ? "border-[#0070f3] bg-[#0070f3]"
                                  : "border-zinc-300"
                              }`}
                            >
                              {selectedSprint === dur.id && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── STEP 4: CONTACT & DETAILS ─────────────────────── */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
                          4. Project Details & Contact
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                          Tell us about your organization and target milestones.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={clientDetails.name}
                              onChange={(e) =>
                                setClientDetails({ ...clientDetails, name: e.target.value })
                              }
                              placeholder="Alex Rivera"
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={clientDetails.email}
                              onChange={(e) =>
                                setClientDetails({ ...clientDetails, email: e.target.value })
                              }
                              placeholder="alex@company.com"
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              value={clientDetails.company}
                              onChange={(e) =>
                                setClientDetails({ ...clientDetails, company: e.target.value })
                              }
                              placeholder="Vanguard Technologies"
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                              Target Kickoff
                            </label>
                            <select
                              value={clientDetails.timeline}
                              onChange={(e) =>
                                setClientDetails({ ...clientDetails, timeline: e.target.value })
                              }
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                            >
                              <option value="Immediate (within 2 weeks)">Immediate (within 2 weeks)</option>
                              <option value="Next month">Next month</option>
                              <option value="Next quarter">Next quarter</option>
                              <option value="Exploring possibilities">Exploring possibilities</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                            Brief Overview & Objectives
                          </label>
                          <textarea
                            rows={3}
                            value={clientDetails.description}
                            onChange={(e) =>
                              setClientDetails({ ...clientDetails, description: e.target.value })
                            }
                            placeholder="Describe any existing tech stack, target audience, key integrations, or performance requirements..."
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3] resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 5: REVIEW & CONFIRMATION ─────────────────── */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
                          5. Review & Submit Project Brief
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light mt-1">
                          Review your configured specifications prior to submitting for sprint allocation.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-black/[0.08] bg-[#fbfbfd] space-y-4 text-xs font-mono">
                        <div className="flex justify-between pb-2 border-b border-black/[0.06]">
                          <span className="text-zinc-500 uppercase">Product Type</span>
                          <span className="font-bold text-zinc-900">{currentTypeObj?.title}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-black/[0.06]">
                          <span className="text-zinc-500 uppercase">Duration</span>
                          <span className="font-bold text-zinc-900">{currentSprintObj?.sprints}</span>
                        </div>
                        <div className="pb-2 border-b border-black/[0.06]">
                          <span className="text-zinc-500 uppercase block mb-1.5">Selected Modules ({selectedScope.length})</span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedScope.map((id) => {
                              const s = SCOPE_OPTIONS.find((opt) => opt.id === id);
                              return (
                                <span
                                  key={id}
                                  className="px-2 py-0.5 rounded bg-black/[0.04] text-[11px] text-zinc-700 font-sans"
                                >
                                  {s?.label}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-black/[0.06]">
                          <span className="text-zinc-500 uppercase">Contact</span>
                          <span className="text-zinc-900 font-sans">{clientDetails.name || "Alex Rivera"} ({clientDetails.email || "alex@company.com"})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500 uppercase">Timeline</span>
                          <span className="text-zinc-900 font-sans">{clientDetails.timeline}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Wizard Bottom Controls */}
                  <div className="pt-4 flex items-center justify-between border-t border-black/[0.06]">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/[0.12] bg-white text-xs font-medium text-zinc-800 hover:bg-black/[0.02] transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s + 1)}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleConfiguratorSubmit}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0070f3] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-xs cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Project Brief</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Configuration Summary Card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl border border-black/[0.08] bg-white shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0070f3] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      Live Scope Brief
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      ESTIMATE READY
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-zinc-500 text-[11px] block">Selected Product</span>
                      <span className="font-semibold text-zinc-900 text-sm">
                        {currentTypeObj?.title}
                      </span>
                    </div>

                    <div>
                      <span className="text-zinc-500 text-[11px] block">Sprint Cadence</span>
                      <span className="font-semibold text-zinc-900">
                        {currentSprintObj?.sprints}
                      </span>
                    </div>

                    <div>
                      <span className="text-zinc-500 text-[11px] block mb-1">
                        Active Modules ({selectedScope.length})
                      </span>
                      <div className="space-y-1">
                        {selectedScope.slice(0, 4).map((id) => {
                          const s = SCOPE_OPTIONS.find((opt) => opt.id === id);
                          return (
                            <div key={id} className="flex items-center gap-1.5 text-zinc-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0070f3]"></div>
                              <span>{s?.label}</span>
                            </div>
                          );
                        })}
                        {selectedScope.length > 4 && (
                          <div className="text-[11px] text-zinc-500 pl-3">
                            + {selectedScope.length - 4} more modules selected
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.08] space-y-2 text-xs text-zinc-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0070f3]" />
                      <span>Kickoff available within 10 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#0070f3]" />
                      <span>Enterprise NDA & IP ownership signed upfront</span>
                    </div>
                  </div>
                </div>

                {/* Studio Direct Contact Box */}
                <div className="p-6 rounded-2xl border border-black/[0.08] bg-[#fbfbfd] space-y-4 text-xs">
                  <div>
                    <span className="font-semibold text-zinc-900 block mb-1">Direct Engineering Contact</span>
                    <p className="text-zinc-600 leading-relaxed font-light">
                      Prefer direct communication? Send specifications or RFPs directly to our team:
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[#0070f3]">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:hr@stratotechcorp.com" className="hover:underline">
                      hr@stratotechcorp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ─────────────────────────────────────────────────────────── */
            /* QUICK INQUIRY FORM                                          */
            /* ─────────────────────────────────────────────────────────── */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-10 rounded-2xl border border-black/[0.08] bg-white shadow-xs">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 mb-6">
                    Direct Inquiry
                  </h2>
                  <form onSubmit={handleQuickSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        placeholder="Tharun Kumar"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={quickForm.email}
                          onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                          placeholder="tharun@company.com"
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          value={quickForm.company}
                          onChange={(e) => setQuickForm({ ...quickForm, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={quickForm.subject}
                        onChange={(e) => setQuickForm({ ...quickForm, subject: e.target.value })}
                        placeholder="Inquiry regarding custom platform build"
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={quickForm.message}
                        onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                        placeholder="Tell us about the project goals, target timeline, and key requirements..."
                        className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#0070f3] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-zinc-950 text-white hover:bg-zinc-800 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right: Studio Location Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Studio Headquarters
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0070f3] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-zinc-900">
                          StratoTechCorp
                        </div>
                        <div className="text-xs text-zinc-600 mt-0.5">
                          Queens road, Shivajinagar Bengaluru
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Email Inquiries
                    </span>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <a
                        href="mailto:hr@stratotechcorp.com"
                        className="text-xs sm:text-sm text-zinc-900 hover:text-[#0070f3] transition-colors"
                      >
                        hr@stratotechcorp.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                      Guaranteed SLA
                    </span>
                    <div className="flex items-center gap-3 text-xs text-zinc-600">
                      <Clock className="w-5 h-5 text-[#0070f3] shrink-0" />
                      <span>Response time within 24 business hours</span>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.08] bg-[#f5f5f7] shadow-xs">
                  <video
                    src="/videos/legalx.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
