"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, CheckCircle2, Mic, LayoutGrid, Shield, Send, ArrowRight, ArrowLeft, Key, Terminal, Copy, Check, Server, Globe, Cpu } from "lucide-react";
import confetti from "canvas-confetti";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function DemoModal({ isOpen, onClose, defaultProduct }: DemoModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedProduct, setSelectedProduct] = useState<string>(defaultProduct || "StartoTech Suite");
  const [deploymentTarget, setDeploymentTarget] = useState<"edge" | "vpc" | "on-prem">("edge");
  const [slaTier, setSlaTier] = useState<"standard" | "carrier">("carrier");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedApiKey, setGeneratedApiKey] = useState("");
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setSelectedProduct(defaultProduct);
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleNextToStep2 = () => {
    setStep(2);
  };

  const handleBackToStep1 = () => {
    setStep(1);
  };

  const handleProvisionSandbox = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const mockKey = `st_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}_soc2`;
      setGeneratedApiKey(mockKey);
      setLoading(false);
      setStep(3);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#e70000", "#ff4d4d", "#a855f7", "#10b981", "#3b82f6"],
        });
      } catch (err) {
        console.warn("Confetti error:", err);
      }
    }, 1100);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(generatedApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const curlCommand = `curl -X POST https://api.startotech.com/v1/auth/provision \\\n  -H "Authorization: Bearer ${generatedApiKey || "st_live_sample"}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"target": "${deploymentTarget}", "sla": "${slaTier}", "module": "${selectedProduct}"}'`;

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleReset = () => {
    setStep(1);
    setFullName("");
    setEmail("");
    setCompany("");
    setGeneratedApiKey("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden text-left text-slate-900">
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-900" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Pills */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
            step >= 1 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
          }`}>
            <span>1</span>
            <span>Module</span>
          </div>
          <div className="w-4 h-[1px] bg-slate-200" />
          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
            step >= 2 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
          }`}>
            <span>2</span>
            <span>Architecture</span>
          </div>
          <div className="w-4 h-[1px] bg-slate-200" />
          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
            step === 3 ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
          }`}>
            <span>3</span>
            <span>Provisioned</span>
          </div>
        </div>

        {/* STEP 1: Select Platform Module */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Step 1 of 3: Sandbox Selection
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Select Platform Focus
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Choose the autonomous engine you want to provision in your dedicated sandbox.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { id: "Zobay", label: "Zobay (Voice AI)", desc: "Sub-280ms voice phone agents & CRM mesh", icon: <Mic className="w-4 h-4 text-purple-600" /> },
                { id: "StartOne", label: "StartOne (Enterprise OS)", desc: "Multi-entity ledgers & workflow cloud", icon: <LayoutGrid className="w-4 h-4 text-emerald-600" /> },
                { id: "LegalX", label: "LegalX (Legal Intel)", desc: "Instant clause redlining & SOC-2 compliance", icon: <Shield className="w-4 h-4 text-blue-600" /> },
                { id: "BaseOne", label: "BaseOne (Treasury Ledger)", desc: "High-frequency cross-border liquidity", icon: <Cpu className="w-4 h-4 text-amber-600" /> },
                { id: "ValidSoft", label: "ValidSoft (Biometrics)", desc: "Acoustic deepfake voice defense", icon: <Shield className="w-4 h-4 text-emerald-600" /> },
                { id: "StartoTech Suite", label: "Full StartoTech Stack", desc: "Unified autonomous enterprise deployment", icon: <Sparkles className="w-4 h-4 text-emerald-600" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedProduct(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedProduct === item.id
                      ? "bg-emerald-50 border-emerald-500 text-slate-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 leading-snug">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextToStep2}
                className="redstone-btn text-xs sm:text-sm px-6 py-3 cursor-pointer shadow-md"
              >
                <span>Continue to Architecture</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Architecture & Contact */}
        {step === 2 && (
          <form onSubmit={handleProvisionSandbox}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-semibold mb-2">
                <Server className="w-3.5 h-3.5 text-purple-600" /> Step 2 of 3: Cluster Configuration
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Deployment Architecture &amp; Credentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Configure deployment environment for <strong className="text-slate-900">{selectedProduct}</strong>.
              </p>
            </div>

            {/* Target Selector */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-700 block mb-2">
                Deployment Infrastructure
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "edge", label: "38-Node Edge Mesh" },
                  { id: "vpc", label: "Private Cloud VPC" },
                  { id: "on-prem", label: "Air-Gapped Sovereign" },
                ].map((target) => (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setDeploymentTarget(target.id as any)}
                    className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                      deploymentTarget === target.id
                        ? "bg-slate-900 border-slate-900 text-white font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {target.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Satya Nadella"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Organization / Company Name
              </label>
              <input
                type="text"
                required
                placeholder="Enterprise Corp"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBackToStep1}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="redstone-btn text-xs sm:text-sm px-6 py-3 cursor-pointer shadow-md"
              >
                <span>{loading ? "Provisioning Sandbox..." : "Generate Sandbox Key"}</span>
                <div className="btn-icon-circle">
                  {loading ? <Sparkles className="w-3.5 h-3.5 animate-spin" /> : <Key className="w-3.5 h-3.5 text-white" />}
                </div>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Sandbox Key & Code Snippet */}
        {step === 3 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sandbox Instance Active
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Sandbox Successfully Provisioned
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Your dedicated sandbox credentials have been generated and dispatched to <strong className="text-slate-900">{email}</strong>.
              </p>
            </div>

            {/* Generated API Key Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-500/40 mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Live Sandbox API Key
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-bold">
                  EXP: 72 HOURS
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-200 font-mono text-xs text-slate-900">
                <span className="truncate">{generatedApiKey}</span>
                <button
                  type="button"
                  onClick={handleCopyKey}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
                  title="Copy API key"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Terminal Curl Snippet */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] text-slate-400">Quick Test API Request</span>
                <button
                  type="button"
                  onClick={handleCopyCurl}
                  className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedCurl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCurl ? "Copied" : "Copy cURL"}</span>
                </button>
              </div>
              <pre className="text-slate-200 overflow-x-auto text-[11px] leading-relaxed">
                {curlCommand}
              </pre>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="redstone-btn text-xs sm:text-sm px-6 py-3 cursor-pointer"
              >
                <span>Done &amp; Close</span>
                <div className="btn-icon-circle">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
