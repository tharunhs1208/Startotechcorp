"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles, DollarSign, Clock, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Counter from "./Counter";

interface RoiCalculatorProps {
  onOpenDemo?: (productName?: string) => void;
}

export default function RoiCalculator({ onOpenDemo }: RoiCalculatorProps) {
  const [monthlyCalls, setMonthlyCalls] = useState(15000);
  const [teamSize, setTeamSize] = useState(40);
  const [saasTools, setSaasTools] = useState(8);

  // ROI Calculations
  // Avg call cost manually: $2.40 per call vs Zobay: $0.35 per call
  const currentVoiceCost = monthlyCalls * 2.40;
  const zobayVoiceCost = monthlyCalls * 0.35;
  const annualVoiceSavings = Math.round((currentVoiceCost - zobayVoiceCost) * 12);

  // Admin hours saved per employee with StartOne: 6 hrs/week = 312 hrs/year
  const totalHoursSavedAnnual = teamSize * 312;

  // SaaS redundancy reduction: $140/user/mo across fragmented tools replaced by StartOne ($55/user/mo)
  const saasSavingsAnnual = Math.round(teamSize * (saasTools * 28) * 12 * 0.60);

  const totalAnnualSavings = annualVoiceSavings + saasSavingsAnnual;

  return (
    <section className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-[120px]">
        {/* Left-Aligned Header */}
        <div className="text-left max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" /> Quantifiable Impact
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-6 text-left">
            Enterprise ROI Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl text-left">
            Simulate your organization&apos;s annual cost savings, reclaimed engineering hours, and operational velocity by migrating to StartoTech sovereign autonomous systems.
          </p>
        </div>

        {/* Interactive Calculator Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8 text-left">
            <div>
              {/* Slider 1: Monthly Voice & Inbound Calls */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Monthly Voice &amp; Telephony Calls
                  </label>
                  <span className="text-sm font-mono font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    {monthlyCalls.toLocaleString()} calls/mo
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                  <span>1,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 2: Organization / Team Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    Team &amp; Operations Headcount
                  </label>
                  <span className="text-sm font-mono font-black text-teal-800 bg-teal-50 px-3 py-1 rounded-xl border border-teal-200">
                    {teamSize} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-200 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                  <span>5</span>
                  <span>250</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Slider 3: Fragmented SaaS Tools Replaced */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Disconnected SaaS Tools Replaced
                  </label>
                  <span className="text-sm font-mono font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    {saasTools} Tools
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={25}
                  step={1}
                  value={saasTools}
                  onChange={(e) => setSaasTools(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-200 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
                  <span>2 Tools</span>
                  <span>12 Tools</span>
                  <span>25+ Tools</span>
                </div>
              </div>
            </div>

            {/* Value Pillars List */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Per-Seat Penalty Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Carrier-Grade 99.99% SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Projected Real-time Results Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase mb-1 block">
                Estimated Enterprise Impact
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
                Projected Savings
              </h3>

              {/* Total Estimated Dollar Savings */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <div className="text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider">
                  Total Projected Annual Savings
                </div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                  <Counter value={totalAnnualSavings} prefix="$" decimals={0} />
                </div>
                <div className="text-xs font-semibold text-emerald-700 mt-2 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Up to 78% reduction vs legacy SaaS silos</span>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 font-medium">Hours Reclaimed</div>
                  <div className="text-xl font-black text-slate-900 mt-1">
                    <Counter value={totalHoursSavedAnnual} suffix=" hrs/yr" decimals={0} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 font-medium">Telephony Saved</div>
                  <div className="text-xl font-black text-emerald-600 mt-1">
                    <Counter value={annualVoiceSavings} prefix="$" suffix="/yr" decimals={0} />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onOpenDemo && onOpenDemo("Custom ROI Assessment")}
                className="w-full redstone-btn text-xs sm:text-sm py-4 cursor-pointer justify-center shadow-lg"
              >
                <span>Get Full Custom ROI Audit</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
