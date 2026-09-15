import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TERMS_SECTIONS = [
  {
    num: "01",
    title: "Introduction",
    desc: "These Terms of Service govern your use of the StratoTechCorp website and engineering services. By accessing our platform or engaging our services, you agree to these terms in full.",
  },
  {
    num: "02",
    title: "Services",
    desc: "StratoTechCorp provides bespoke software engineering, UI/UX design, product consulting, and artificial intelligence integration services as outlined in individual Statements of Work (SOW).",
  },
  {
    num: "03",
    title: "User Responsibilities",
    desc: "Clients and website visitors agree to provide accurate information and refrain from unauthorized vulnerability probing, reverse engineering, or disruptive network operations.",
  },
  {
    num: "04",
    title: "Intellectual Property",
    desc: "All client deliverables, custom software builds, and proprietary assets created under agreed contracts transfer to the client upon receipt of full payment, unless specified otherwise.",
  },
  {
    num: "05",
    title: "Payments",
    desc: "Payment schedules, retainer fees, and milestone invoices are governed by the applicable Master Services Agreement (MSA) and executed project proposals.",
  },
  {
    num: "06",
    title: "Limitation of Liability",
    desc: "StratoTechCorp shall not be liable for indirect, incidental, or consequential damages resulting from third-party outages or force majeure events beyond reasonable technical control.",
  },
  {
    num: "07",
    title: "Contact",
    desc: "For questions regarding these terms, please contact legal@stratotechcorp.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container max-w-4xl">
          <span className="eyebrow text-[#0070f3] font-semibold block mb-4">Legal</span>
          <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl text-zinc-900 uppercase">
            TERMS OF SERVICE
          </h1>
          <p className="mt-4 font-mono text-xs text-zinc-500">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="page-container max-w-4xl space-y-12">
          {TERMS_SECTIONS.map((sec) => (
            <div key={sec.num} className="pb-10 border-b border-black/[0.06]">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm font-bold text-[#0070f3]">
                  {sec.num}
                </span>
                <h2 className="display-lg text-xl sm:text-2xl text-zinc-900 uppercase">
                  {sec.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pl-8">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
