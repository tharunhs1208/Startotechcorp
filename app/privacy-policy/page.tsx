"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Shield, Lock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Governance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-500 font-mono mb-12">
            Last Updated: March 15, 2026 • Version 4.2
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">1. Information We Collect</h2>
              <p>
                StartoTech collects information necessary to provide, optimize, and secure our enterprise software development and AI engineering services. This includes contact details submitted through forms (name, corporate email, phone, organization name) and technical telemetry (IP addresses, browser type, edge node latency metrics).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">2. How We Use Collected Information</h2>
              <p>
                We use collected information solely to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to technical project inquiries and schedule architecture discovery sessions.</li>
                <li>Fulfill contractual software engineering, maintenance, and 24/7 SLA obligations.</li>
                <li>Monitor global network performance, uptime telemetry, and prevent unauthorized intrusion.</li>
                <li>Comply with SOC-2 Type II, ISO 27001, HIPAA, and GDPR regulatory compliance standards.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">3. Data Security &amp; Sovereignty</h2>
              <p>
                All customer data and project specifications are protected with strict Zero-Trust boundaries. We utilize AES-256 payload encryption at rest and TLS 1.3 in transit. Our client databases operate in dedicated private VPCs with strict role-based access control (RBAC). We guarantee 100% data sovereignty with zero retention on third-party AI training sets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">4. Cookies &amp; Tracking</h2>
              <p>
                We only use essential session cookies required for core site functionality and anonymous performance monitoring. We do not sell, rent, or monetize your personal or business data to third-party ad networks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">5. User Rights &amp; Data Deletion</h2>
              <p>
                Under GDPR, CCPA, and applicable global privacy laws, you have the right to request access to, rectification of, or permanent deletion of any personal data stored on our systems. To exercise these rights, contact privacy@startotech.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">6. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or our security protocols, please reach out to our compliance team at privacy@startotech.com.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
