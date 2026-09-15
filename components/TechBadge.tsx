"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Terminal,
  Shield,
  Smartphone,
  Server,
  Zap,
  Boxes,
  Lock,
  GitBranch,
  Search,
  Radio,
  FileCode,
  LineChart,
  Layers,
  Sparkles,
  Workflow,
  Eye,
  Palette,
  Compass,
} from "lucide-react";

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const n = name.toLowerCase().trim();

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#0a0a0a" />
        <path d="M149.5 159.2L68.6 54H54V126H66.2V70.7L139.7 165.6C143.1 163.7 146.4 161.6 149.5 159.2Z" fill="white" />
        <path d="M115 54H127.2V126H115V54Z" fill="white" />
      </svg>
    );
  }

  // React / React.js / React Native
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#0070f3" />
        <g stroke="#0070f3" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#0070f3" />
        <path d="M42 66.5V108H30V66.5H12V56H60V66.5H42Z" fill="white" />
        <path d="M72 101.5C75.2 105.8 81 109 88.5 109C96.5 109 101.5 105 101.5 98.5C101.5 83.5 69.5 89.5 69.5 69C69.5 59.5 77 53 88 53C95.5 53 101.5 55.5 106 59.5L100.5 68C97 65 92.5 63 88 63C82 63 78.5 65.5 78.5 69.5C78.5 83.5 110.5 78 110.5 98.5C110.5 109.5 101.5 118 88.5 118C79.5 118 70.5 113.5 66 107.5L72 101.5Z" fill="white" />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0L240 64V192L128 256L16 192V64L128 0Z" fill="#16a34a" />
        <path d="M128 50L198 90V166L128 206L58 166V90L128 50Z" fill="white" />
      </svg>
    );
  }

  // Python
  if (n.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.5 12C41.8 12 43.2 21.4 43.2 21.4L43.3 31.1H64.2V34.2H35.3C23.9 34.2 14 42.6 14 63.8C14 85 24 84.7 24 84.7H31.7V73.4C31.7 60.5 42.6 60.5 42.6 60.5H63.6C74.6 60.5 74.5 49.9 74.5 49.9V21.4C74.5 21.4 75.3 12 63.5 12ZM54 22.8C56.6 22.8 58.7 24.9 58.7 27.5C58.7 30.1 56.6 32.2 54 32.2C51.4 32.2 49.3 30.1 49.3 27.5C49.3 24.9 51.4 22.8 54 22.8Z" fill="#0070f3" />
        <path d="M64.5 116C86.2 116 84.8 106.6 84.8 106.6L84.7 96.9H63.8V93.8H92.7C104.1 93.8 114 85.4 114 64.2C114 43 104 43.3 104 43.3H96.3V54.6C96.3 67.5 85.4 67.5 85.4 67.5H64.4C53.4 67.5 53.5 78.1 53.5 78.1V106.6C53.5 106.6 52.7 116 64.5 116ZM74 105.2C71.4 105.2 69.3 103.1 69.3 100.5C69.3 97.9 71.4 100.5 74 100.5C76.6 100.5 78.7 97.9 78.7 100.5C78.7 103.1 76.6 105.2 74 105.2Z" fill="#eab308" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06b6d4" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes("postgres") || n.includes("sql")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 12C35.3 12 12 35.3 12 64C12 92.7 35.3 116 64 116C92.7 116 116 92.7 116 64C116 35.3 92.7 12 64 12Z" fill="#336791" />
        <path d="M44 44H84V84H44V44Z" fill="white" />
      </svg>
    );
  }

  // Docker
  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185z" fill="#0284c7" />
        <path d="M23.977 12.016c-.285-.205-.75-.3-1.396-.28-.103-.538-.38-.97-.831-1.295-.678-.49-1.63-.585-2.831-.282-.36.09-.705.234-1.025.424-.46-1.78-1.898-3.09-3.64-3.09h-.442v3.66h.442c.87 0 1.574.705 1.574 1.575v.234c-1.33.064-2.83.18-4.407.393H.222C.084 13.9.004 14.44.004 15c0 5.523 4.477 10 10 10 7.848 0 13.996-5.46 13.996-10 0-1.033-.284-2.03-.023-2.984z" fill="#0284c7" />
      </svg>
    );
  }

  // Figma
  if (n.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    );
  }

  // AWS / Cloud
  if (n.includes("aws") || n.includes("amazon") || n.includes("cloud")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7 13.8C18.1 13.3 17.2 13 16.1 13C14.7 13 13.7 13.5 13.1 14.4V13.2H11.5V20H13.1V16.3C13.1 15.3 13.8 14.6 14.8 14.6C15.8 14.6 16.4 15.3 16.4 16.3V20H18V15.7C18 14.9 18.2 14.2 18.7 13.8Z" fill="#ea580c" />
        <path d="M2.5 15.5C4.5 17.5 8.5 19.5 14 19.5C18.5 19.5 21.5 17.8 22.5 16.5C22.7 16.3 22.5 16 22.2 16.2C20.8 17.2 17.5 18.5 14 18.5C9.2 18.5 5.5 16.8 3.5 14.8C3.2 14.5 2.8 14.9 2.5 15.5Z" fill="#ea580c" />
      </svg>
    );
  }

  // PyTorch / AI
  if (n.includes("pytorch")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2.5C12.3 2.5 12.1 2.6 12 2.7L7.5 7.2C6.9 7.8 6.5 8.6 6.5 9.5C6.5 10.4 6.9 11.2 7.5 11.8L10 14.3V10.5C10 9.7 10.7 9 11.5 9C12.3 9 13 9.7 13 10.5V17.3L12 18.3C10.9 19.4 9.1 19.4 8 18.3L6.9 17.2C6.5 16.8 6 16.8 5.6 17.2C5.2 17.6 5.2 18.1 5.6 18.5L6.7 19.6C8.5 21.4 11.5 21.4 13.3 19.6L16.5 16.4C17.1 15.8 17.5 15 17.5 14.1C17.5 13.2 17.1 12.4 16.5 11.8L12.5 7.8V2.5Z" fill="#ea580c" />
      </svg>
    );
  }

  // OpenAI / LLM / AI
  if (n.includes("openai") || n.includes("gpt") || n.includes("llm") || n.includes("ai")) {
    return <Sparkles className={`${className} text-[#0070f3]`} />;
  }

  // GraphQL
  if (n.includes("graphql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L21.5 7.5V18.5L12 24L2.5 18.5V7.5L12 2Z" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="12" cy="2" r="2" fill="#ec4899" />
        <circle cx="21.5" cy="7.5" r="2" fill="#ec4899" />
        <circle cx="21.5" cy="18.5" r="2" fill="#ec4899" />
        <circle cx="12" cy="24" r="2" fill="#ec4899" />
        <circle cx="2.5" cy="18.5" r="2" fill="#ec4899" />
        <circle cx="2.5" cy="7.5" r="2" fill="#ec4899" />
      </svg>
    );
  }

  // Redis
  if (n.includes("redis")) {
    return <Database className={`${className} text-[#dc2626]`} />;
  }

  // Kubernetes
  if (n.includes("kubernetes")) {
    return <Boxes className={`${className} text-[#2563eb]`} />;
  }

  // Mobile / iOS / Android / Swift / Kotlin / Flutter
  if (n.includes("ios") || n.includes("swift") || n.includes("android") || n.includes("kotlin") || n.includes("flutter") || n.includes("mobile")) {
    return <Smartphone className={`${className} text-[#0070f3]`} />;
  }

  // WebRTC / Audio / Streaming
  if (n.includes("webrtc") || n.includes("stream") || n.includes("voice") || n.includes("audio") || n.includes("whisper")) {
    return <Radio className={`${className} text-[#0284c7]`} />;
  }

  // Security / Auth / Vault / Pen Test
  if (n.includes("auth") || n.includes("security") || n.includes("vault") || n.includes("shield") || n.includes("cyber")) {
    return <Shield className={`${className} text-[#16a34a]`} />;
  }

  // Design / Research / Wireframing / Prototyping
  if (n.includes("design") || n.includes("prototype") || n.includes("research") || n.includes("wireframe") || n.includes("tokens")) {
    return <Palette className={`${className} text-[#8b5cf6]`} />;
  }

  // CI/CD / Git / GitHub / DevOps
  if (n.includes("git") || n.includes("ci/cd") || n.includes("devops") || n.includes("pipeline")) {
    return <GitBranch className={`${className} text-[#f97316]`} />;
  }

  // Vector / Pinecone / LangChain / Data
  if (n.includes("vector") || n.includes("pinecone") || n.includes("langchain") || n.includes("data")) {
    return <Cpu className={`${className} text-[#0070f3]`} />;
  }

  // Default fallback
  return <Code2 className={`${className} text-[#0070f3]`} />;
}

export default function TechBadge({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/[0.08] bg-white text-xs font-semibold text-zinc-800 shadow-xs hover:border-[#0070f3]/30 hover:shadow-sm transition-all ${className}`}
    >
      <TechIcon name={name} className="w-3.5 h-3.5 shrink-0" />
      <span>{name}</span>
    </span>
  );
}
