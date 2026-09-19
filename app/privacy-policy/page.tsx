import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRIVACY_SECTIONS = [
  {
    num: "01",
    title: "Information We Collect",
    desc: "We collect information you provide directly to us through contact inquiries, project scoping questionnaires, and career applications (e.g., name, work email, company, and project requirements). We also collect basic telemetry analytics to optimize site performance.",
  },
  {
    num: "02",
    title: "How We Use Information",
    desc: "We use the information we collect to communicate with prospective clients, deliver software engineering services, evaluate employment candidates, and continuously improve our digital products.",
  },
  {
    num: "03",
    title: "Data Security",
    desc: "We implement industry-standard encryption, strict access controls, and secure edge infrastructure to protect your personal and proprietary data from unauthorized access or disclosure.",
  },
  {
    num: "04",
    title: "Cookies",
    desc: "We use essential cookies and minimal session identifiers to maintain application state, improve response latency, and analyze anonymous traffic flows.",
  },
  {
    num: "05",
    title: "Third-Party Services",
    desc: "We may employ trusted third-party providers (e.g., cloud hosting, analytics, email delivery) that process information strictly on our behalf under compliant data processing agreements.",
  },
  {
    num: "06",
    title: "Your Rights",
    desc: "You have the right to request access to, correction of, or deletion of your personal data stored with StratoTechCorp at any time.",
  },
  {
    num: "07",
    title: "Contact",
    desc: "For any privacy-related inquiries, please contact our data governance team directly at privacy@stratotechcorp.in.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              LEGAL &amp; COMPLIANCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-[#86868b] font-mono">
              Last updated: January 2026
            </p>
          </div>
        </section>

        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="divide-y divide-black/[0.08]">
            {PRIVACY_SECTIONS.map((sec) => (
              <div key={sec.num} className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="font-mono text-[12px] text-[#86868b]">{sec.num}</span>
                  <h2 className="font-display text-lg sm:text-xl font-medium text-[#1d1d1f]">
                    {sec.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
