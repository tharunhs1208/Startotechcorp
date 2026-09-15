"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, User, ArrowRight, Zap, Shield, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  latency: "Zobay Voice AI operates at a guaranteed sub-280ms full-duplex turn-taking latency across 38 global edge clusters. It uses custom Rust WebRTC telephony gateways paired with domain-quantized SpeechLLM models for human-like emotional inflection.",
  security: "All StartoTech systems are SOC-2 Type II certified and ISO 27001 compliant. We enforce end-to-end TLS 1.3 encryption, hardware-isolated multi-tenant databases, and zero-trust acoustic biometric defenses with ValidSoft.",
  startone: "StartOne replaces 10+ disjointed SaaS tools with a unified Enterprise Operating System. It integrates multi-entity financial ledgers, automated cross-departmental approval chains, employee lifecycles, and real-time execution dashboards under one roof.",
  pricing: "StartoTech pricing is designed with zero per-seat usage penalty fees. We offer multi-tenant cloud tiers and dedicated sovereign on-premise VPC licenses. You can use our ROI Estimator on the homepage to simulate exact cost reductions.",
  sandbox: "You can request instant 72-hour sandbox API keys by clicking 'Book Live Demo' or using the command `startotech auth --provision` in our interactive CLI sandbox."
};

export default function AiAssistantBot({ onOpenDemo }: { onOpenDemo?: (product?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "Hello! I am StartoTech Core AI. How can I assist you with our autonomous voice, cloud OS, or compliance platforms?",
      timestamp: "Just now"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (queryText?: string) => {
    const query = queryText || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Our engineering teams deploy custom sovereign software infrastructure tailored to your exact throughput and compliance requirements. Would you like to request an engineering architecture brief?";
      const lower = query.toLowerCase();

      if (lower.includes("latency") || lower.includes("speed") || lower.includes("zobay") || lower.includes("voice")) {
        botResponse = KNOWLEDGE_BASE.latency;
      } else if (lower.includes("security") || lower.includes("soc") || lower.includes("compliance") || lower.includes("validsoft")) {
        botResponse = KNOWLEDGE_BASE.security;
      } else if (lower.includes("startone") || lower.includes("cloud") || lower.includes("os") || lower.includes("replace")) {
        botResponse = KNOWLEDGE_BASE.startone;
      } else if (lower.includes("pricing") || lower.includes("cost") || lower.includes("roi") || lower.includes("save")) {
        botResponse = KNOWLEDGE_BASE.pricing;
      } else if (lower.includes("sandbox") || lower.includes("api") || lower.includes("key") || lower.includes("demo")) {
        botResponse = KNOWLEDGE_BASE.sandbox;
      }

      const botMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "bot",
        text: botResponse,
        timestamp: "Just now"
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button at Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-full bg-white hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 shadow-xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center cursor-pointer group hover:scale-105"
          aria-label="Toggle StartoTech AI Assistant"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-slate-800 group-hover:text-white" />
          ) : (
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-xs font-mono font-bold tracking-wider group-hover:text-white">
                StartoTech AI
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Floating Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-6 z-50 w-[92vw] sm:w-[380px] h-[520px] rounded-3xl bg-white border border-slate-200 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden text-left text-slate-900"
          >
            {/* Header */}
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>StartoTech Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">SOC-2 Verified Runtime</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex gap-1.5 overflow-x-auto text-[10px] font-mono scrollbar-none">
              {[
                { label: "Voice Latency", query: "What is Zobay voice turn-around latency?" },
                { label: "Security & SOC-2", query: "How does SOC-2 compliance work?" },
                { label: "StartOne OS", query: "How does StartOne replace SaaS tools?" },
                { label: "Sandbox Keys", query: "How do I get API sandbox keys?" },
              ].map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(p.query)}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 whitespace-nowrap border border-slate-200 transition-colors cursor-pointer shadow-sm"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs bg-slate-50/50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      m.sender === "user"
                        ? "bg-slate-900 text-white font-semibold rounded-br-none"
                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-none leading-relaxed shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-500 rounded-bl-none flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Input Box */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask technical question..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
