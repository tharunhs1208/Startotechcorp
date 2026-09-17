"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  ArrowRight,
  RotateCcw
} from "lucide-react";

interface ActionButton {
  label: string;
  href: string;
}

interface Message {
  id: string;
  sender: "assistant" | "user";
  text: string;
  actions?: ActionButton[];
}

const SUGGESTED_ACTIONS = [
  { label: "Our Products", query: "What products do you build?" },
  { label: "Our Work", query: "Show me your work" },
  { label: "Services", query: "What services do you provide?" },
  { label: "About StratoTech", query: "What does StratoTech do?" },
  { label: "Talk to the Team", query: "I want to work with you" },
];

interface KnowledgeEntry {
  matcher: (q: string) => boolean;
  reply: string;
  actions?: ActionButton[];
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // 1. Company Overview / What does StratoTech do?
  {
    matcher: (q) =>
      q.includes("stratotech") ||
      q.includes("fortunetech") ||
      q.includes("what does") ||
      q.includes("who are you") ||
      q.includes("about") ||
      q.includes("company") ||
      q.includes("what do you do") ||
      q.includes("studio") ||
      q.includes("overview"),
    reply:
      "StratoTech is a digital product engineering studio based in Bengaluru. We partner with founders, growing teams, and enterprises to design, architect, and ship high-performance software, intelligent voice systems, and scalable web platforms.",
    actions: [
      { label: "About StratoTech →", href: "/about" },
      { label: "Our Products →", href: "/products" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 2. Products List
  {
    matcher: (q) =>
      q.includes("what products") ||
      q.includes("products you build") ||
      q.includes("all products") ||
      q.includes("our products") ||
      q.includes("product catalog") ||
      q.includes("product list") ||
      q.includes("platforms") ||
      (q.includes("products") && !q.includes("salesx") && !q.includes("meetingx")),
    reply:
      "We build digital products designed around real business needs:\n\n• SalesX — Sales teams, lead management, and deal workflows\n• MeetingX — Low-latency video conferencing & collaboration\n• Zobay — Autonomous voice AI phone agent\n• StartOne — Unified enterprise operations cloud OS\n• BaseOne — High-frequency treasury & multi-currency settlement\n• LegalX — Automated contract intelligence & compliance review",
    actions: [
      { label: "View all products →", href: "/products" },
      { label: "View SalesX →", href: "/products/salesx" },
      { label: "View MeetingX →", href: "/products/meetingx" },
    ],
  },

  // 3. SalesX
  {
    matcher: (q) =>
      q.includes("salesx") ||
      (q.includes("sales") && (q.includes("tool") || q.includes("crm") || q.includes("platform") || q.includes("lead"))),
    reply:
      "SalesX is a digital platform built to support sales teams, lead management, customer follow-ups, and sales workflows. It includes automated inbound lead triage, scheduled follow-up cadences, two-way CRM syncing, and pipeline velocity forecasting.",
    actions: [
      { label: "View product →", href: "/products/salesx" },
      { label: "Start a conversation →", href: "/contact?subject=Inquiry+regarding+SalesX" },
    ],
  },

  // 4. MeetingX
  {
    matcher: (q) =>
      q.includes("meetingx") ||
      q.includes("meeting") ||
      q.includes("video") ||
      q.includes("webrtc") ||
      q.includes("conferencing"),
    reply:
      "MeetingX is a high-fidelity meeting and collaboration platform engineered for low latency and clear communication. It is built on a geo-distributed WebRTC SFU mesh with sub-50ms latency, adaptive 48kHz Opus audio, 60 FPS screen sharing, and automated meeting transcription.",
    actions: [
      { label: "View product →", href: "/products/meetingx" },
      { label: "Start a conversation →", href: "/contact?subject=MeetingX+Inquiry" },
    ],
  },

  // 5. Zobay / Zobay Voice
  {
    matcher: (q) =>
      q.includes("zobay") ||
      q.includes("voice") ||
      q.includes("speech") ||
      q.includes("phone agent") ||
      q.includes("call agent") ||
      q.includes("telephony"),
    reply:
      "Zobay is our autonomous voice AI phone agent engineered for enterprise communication. It features sub-280ms speech-to-speech neural streaming, emotion-aware acoustic pacing, multilingual fluency across 40+ languages, and automated CRM calendar booking.",
    actions: [
      { label: "View product →", href: "/projects/zobay-voice-ai" },
      { label: "Start a conversation →", href: "/contact?subject=Zobay+Voice+AI" },
    ],
  },

  // 6. StartOne
  {
    matcher: (q) => q.includes("startone") || q.includes("operations os") || q.includes("internal tool"),
    reply:
      "StartOne is an enterprise cloud operations platform that consolidates financial approvals, team resource tracking, and day-to-day business coordination into a single executive dashboard.",
    actions: [
      { label: "View product →", href: "/projects/startone-enterprise-os" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 7. BaseOne
  {
    matcher: (q) => q.includes("baseone") || q.includes("treasury") || q.includes("settlement") || q.includes("ledger"),
    reply:
      "BaseOne is a high-frequency treasury settlement engine built to manage multi-currency balances, transactions, and account reconciliation with sub-50ms clearing and ISO 20022 compliance.",
    actions: [
      { label: "View product →", href: "/projects/baseone-treasury-settlement" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 8. LegalX
  {
    matcher: (q) => q.includes("legalx") || q.includes("legal") || q.includes("contract") || q.includes("msa"),
    reply:
      "LegalX is an autonomous contract review platform that audits Master Services Agreements and vendor contracts in under 10 seconds, scoring risk across 50+ clause categories and suggesting playbook-aligned redlines.",
    actions: [
      { label: "View product →", href: "/projects/legalx-contract-sentinel" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 9. Services & Capabilities
  {
    matcher: (q) =>
      q.includes("service") ||
      q.includes("capabilities") ||
      q.includes("what can you do") ||
      q.includes("offer") ||
      q.includes("practices"),
    reply:
      "We provide full-lifecycle digital product engineering across six core practices:\n\n• Web Development — Next.js, React, Node.js, and scalable cloud APIs\n• UI/UX Design Systems — Figma token systems, user research, and wireframes\n• Mobile Development — Native and cross-platform iOS & Android apps\n• AI & Machine Learning — Conversational agents, RAG, and LLM pipelines\n• Cloud Solutions — AWS/GCP, Kubernetes, CI/CD, and DevOps\n• Cybersecurity & Identity — Zero-trust security, biometrics, and SOC-2",
    actions: [
      { label: "View all services →", href: "/services" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 10. Our Work / Case Studies / Portfolio
  {
    matcher: (q) =>
      q.includes("work") ||
      q.includes("case study") ||
      q.includes("case studies") ||
      q.includes("projects") ||
      q.includes("portfolio") ||
      q.includes("show me your work") ||
      q.includes("client"),
    reply:
      "Our work spans end-to-end design, development, and distributed systems for modern products:\n\n• Zobay Autonomous Voice AI (Sub-280ms Speech AI)\n• StartOne Enterprise Cloud OS (Operations Platform)\n• BaseOne High-Frequency Treasury (Real-Time Settlement)\n• LegalX Contract Sentinel (Automated Compliance)\n• MeetingX WebRTC Pipeline (Low-Latency Video)",
    actions: [
      { label: "View all work →", href: "/projects" },
      { label: "Browse product archive →", href: "/archive" },
    ],
  },

  // 11. Contact / Start a Project / Work with you / Hire
  {
    matcher: (q) =>
      q.includes("work with you") ||
      q.includes("have a project") ||
      q.includes("start a project") ||
      q.includes("contact") ||
      q.includes("talk to") ||
      q.includes("hire") ||
      q.includes("quote") ||
      q.includes("pricing") ||
      q.includes("cost") ||
      q.includes("email") ||
      q.includes("reach") ||
      q.includes("location") ||
      q.includes("address") ||
      q.includes("bengaluru") ||
      q.includes("office"),
    reply:
      "We partner with teams via dedicated 2-week continuous delivery sprints. All engagements include an upfront mutual NDA and 100% intellectual property ownership transfer.\n\n• Email: hr@stratotechcorp.com\n• Studio HQ: Queens Road, Shivajinagar, Bengaluru\n• Response SLA: Under 24 business hours",
    actions: [
      { label: "Start a conversation →", href: "/contact" },
    ],
  },

  // 12. Sprints & Process
  {
    matcher: (q) =>
      q.includes("sprint") ||
      q.includes("process") ||
      q.includes("timeline") ||
      q.includes("duration") ||
      q.includes("how you work") ||
      q.includes("methodology"),
    reply:
      "We deliver all work in focused 2-week continuous delivery cycles:\n\n• 1 Sprint (2 Weeks) — Architecture Spec & Clickable Figma Prototype\n• 2 Sprints (4 Weeks) — Production-Ready MVP (Auth, DB, Workflows)\n• 4 Sprints (8 Weeks) — Comprehensive Enterprise Platform\n• 6+ Sprints — Dedicated Continuous Engineering Squad",
    actions: [
      { label: "Configure sprint scope →", href: "/contact" },
      { label: "Working principles →", href: "/about" },
    ],
  },

  // 13. Tech Stack
  {
    matcher: (q) =>
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("technologies") ||
      q.includes("framework") ||
      q.includes("language"),
    reply:
      "Our engineering stack is built on modern, type-safe, low-latency technologies:\n\n• Frontend: Next.js, React, TypeScript, Tailwind CSS\n• Systems: Node.js, Python, FastAPI, Go, Rust\n• Real-Time: WebRTC SFU, WebSockets, Opus 48kHz\n• Data: PostgreSQL, Prisma, Supabase, Redis\n• Cloud: Docker, Kubernetes, AWS, Vercel",
    actions: [
      { label: "Explore services →", href: "/services" },
      { label: "About StratoTech →", href: "/about" },
    ],
  },

  // 14. Careers / Hiring
  {
    matcher: (q) =>
      q.includes("career") ||
      q.includes("job") ||
      q.includes("hiring") ||
      q.includes("open roles") ||
      q.includes("join"),
    reply:
      "We're always looking for talented engineers and product designers to join our studio in Bengaluru and distributed teams.",
    actions: [
      { label: "View open roles →", href: "/careers" },
    ],
  },

  // 15. FAQ
  {
    matcher: (q) => q.includes("faq") || q.includes("question"),
    reply:
      "Find answers regarding our 2-week sprint model, IP ownership, security standards, and SLA guarantees in our FAQ section.",
    actions: [
      { label: "View FAQ →", href: "/faq" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  },
];

function getBotReply(query: string): { reply: string; actions?: ActionButton[] } {
  const normalized = query.toLowerCase().trim();

  for (const entry of KNOWLEDGE_BASE) {
    if (entry.matcher(normalized)) {
      return { reply: entry.reply, actions: entry.actions };
    }
  }

  return {
    reply:
      "I’m not sure about that yet. I can help you explore our products, work, services, or connect you with the team.",
    actions: [
      { label: "Our Products →", href: "/products" },
      { label: "Our Work →", href: "/projects" },
      { label: "Services →", href: "/services" },
      { label: "Start a conversation →", href: "/contact" },
    ],
  };
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi, what would you like to explore?",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard Shortcuts (⌘J / Ctrl+J, Esc) & Custom Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-ai-assistant", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-ai-assistant", handleCustomOpen);
    };
  }, [isOpen]);

  // Auto-scroll and auto-focus when opened or when messages change
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsTyping(true);

    // Subtle, fast response
    setTimeout(() => {
      const { reply, actions } = getBotReply(text);

      const botMessage: Message = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: reply,
        actions,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 320);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "assistant",
        text: "Hi, what would you like to explore?",
      },
    ]);
  };

  return (
    <>
      {/* ── MINIMAL FLOATING BUTTON (Ask us) ─────────────────────────── */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ask us"
            className="group flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-[#1d1d1f] hover:bg-black text-white text-[12px] font-medium shadow-[0_4px_20px_rgba(0,0,0,0.14)] border border-black/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-300 transition-transform duration-200 group-hover:scale-105" />
            <span>Ask us</span>
          </button>
        </div>
      )}

      {/* ── MINIMAL CHAT PANEL ──────────────────────────────────────── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="StratoTech Assistant"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[390px] h-[520px] max-h-[calc(100vh-32px)] sm:max-h-[580px] rounded-2xl bg-white text-[#1d1d1f] border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-black/[0.06] bg-[#fafafa] flex items-center justify-between shrink-0">
            <div>
              <div className="text-[13px] font-semibold text-[#1d1d1f] tracking-tight">
                StratoTech
              </div>
              <div className="text-[11px] text-[#6e6e73] font-normal">
                How can we help?
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#86868b]">
              <button
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 hover:text-[#1d1d1f] hover:bg-black/[0.04] rounded-md transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                aria-label="Close chat"
                className="p-1.5 hover:text-[#1d1d1f] hover:bg-black/[0.04] rounded-md transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-[13px] bg-white">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-[#1d1d1f] text-white rounded-br-xs"
                      : "bg-[#f5f5f7] text-[#1d1d1f] rounded-bl-xs font-normal"
                  }`}
                >
                  {m.text}
                </div>

                {/* Suggested Action links */}
                {m.actions && m.actions.length > 0 && (
                  <div className="mt-2.5 flex flex-col items-start gap-1.5 pl-1">
                    {m.actions.map((action, idx) => (
                      <Link
                        key={idx}
                        href={action.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0071e3] hover:underline underline-offset-2 transition-colors py-0.5"
                      >
                        <span>{action.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Suggested actions chips (shown when starting a conversation) */}
            {messages.length === 1 && (
              <div className="pt-2">
                <div className="text-[11px] text-[#86868b] font-medium mb-2 pl-0.5">
                  Suggested topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_ACTIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(item.query)}
                      className="text-[12px] text-[#1d1d1f] bg-[#f5f5f7] hover:bg-[#ebebee] border border-black/[0.04] hover:border-black/[0.1] rounded-full px-3 py-1.5 transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-[#86868b] bg-[#f5f5f7] rounded-2xl rounded-bl-xs px-3.5 py-2.5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-pulse [animation-delay:150ms]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-pulse [animation-delay:300ms]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-black/[0.06] bg-[#fafafa] flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-white border border-black/[0.08] rounded-xl px-3.5 py-2 text-[13px] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#1d1d1f] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              aria-label="Send"
              className="p-2 rounded-xl bg-[#1d1d1f] hover:bg-black disabled:opacity-30 disabled:hover:bg-[#1d1d1f] text-white transition-colors cursor-pointer shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
