"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, CheckCircle2, Mic, LayoutGrid, Shield, Send, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function DemoModal({ isOpen, onClose, defaultProduct }: DemoModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(defaultProduct || "Fortune Suite");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setSelectedProduct(defaultProduct);
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#8b5cf6", "#10b981", "#f59e0b"],
        });
      } catch (err) {
        console.warn("Confetti error:", err);
      }
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setCompany("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#11131c] border border-white/10 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> FortuneTechCorp Access Key
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request Private Enterprise Access
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Experience dedicated sandbox instances of Zobay, StartOne, and LegalX.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection Chips */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-2">
                  Select Focus Platform
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "Zobay", label: "Zobay (Voice AI)", icon: <Mic className="w-3.5 h-3.5 text-purple-400" /> },
                    { id: "StartOne", label: "StartOne (Enterprise OS)", icon: <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" /> },
                    { id: "LegalX", label: "LegalX (Legal Intel)", icon: <Shield className="w-3.5 h-3.5 text-amber-400" /> },
                    { id: "Fortune Suite", label: "Full Fortune Suite", icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedProduct(item.id)}
                      className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                        selectedProduct === item.id
                          ? "bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-md shadow-indigo-600/20"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      {item.icon}
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                  Corporate Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Global Ltd"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <span>Generate Sandbox Key for {selectedProduct}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Access Request Registered!
            </h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{fullName}</span>. An invitation token for{" "}
              <span className="text-indigo-400 font-bold">{selectedProduct}</span> has been dispatched to{" "}
              <span className="text-white font-mono">{email}</span>.
            </p>
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl max-w-sm mx-auto font-mono text-xs text-gray-400">
              API Sandbox Cluster: <span className="text-emerald-400">us-east-cluster-04</span>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Return to FortuneTechCorp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
