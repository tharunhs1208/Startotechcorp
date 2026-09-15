export interface ServiceItem {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: { title: string; desc: string }[];
  challenge: string;
  solution: string;
  process: { step: string; title: string; desc: string }[];
  benefits: { metric: string; label: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "UI/UX" | "Cloud";
  industry: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: { metric: string; label: string }[];
  image: string;
  gallery: string[];
  testimonial: { quote: string; author: string; role: string; company: string };
}

export interface IndustryItem {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  technologies: string[];
  caseStudySlug: string;
  benefits: string[];
}

export interface JobItem {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: "Technology" | "AI" | "Design" | "Business" | "Cloud";
  readTime: string;
  publishDate: string;
  author: { name: string; role: string; avatar: string };
  excerpt: string;
  image: string;
  content: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  metric: string;
}

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

/* =========================================================================
   SERVICES DATA
   ========================================================================= */
export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "code",
    tagline: "Build scalable, responsive and high-performance web applications.",
    shortDescription: "Engineered with modern frameworks like Next.js, React, and Node.js for lightning-fast speeds and flawless reliability.",
    fullDescription: "We build enterprise-grade web applications designed for scale, speed, and rock-solid security. From mission-critical SaaS dashboards to high-converting public portals, our engineering team adheres to clean architecture, automated testing, and performance optimization.",
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "GraphQL", "Docker"],
    features: [
      { title: "Custom SaaS Architectures", desc: "Multi-tenant platforms with role-based access control, automated billing, and real-time sockets." },
      { title: "High-Performance SSR & SSG", desc: "Sub-second initial load times with Next.js Turbopack, optimized Core Web Vitals, and edge caching." },
      { title: "API Integrations & Microservices", desc: "Seamless bi-directional syncing with CRM, ERP, payment gateways, and custom backend APIs." },
      { title: "Automated CI/CD & DevOps", desc: "Zero-downtime deployment pipelines with GitHub Actions, Vercel, AWS, and automated unit/e2e testing." },
    ],
    challenge: "Modern enterprises struggle with sluggish legacy monoliths, high maintenance costs, poor mobile responsiveness, and fragile release cycles.",
    solution: "We re-architect your digital systems into modular, component-driven web applications with modern micro-frontends and scalable cloud APIs.",
    process: [
      { step: "01", title: "Discovery & Scope", desc: "Technical feasibility audit, user persona mapping, and architectural blueprinting." },
      { step: "02", title: "UI/UX & Wireframing", desc: "Design systems in Figma with interactive prototypes and accessibility verification." },
      { step: "03", title: "Agile Development", desc: "Two-week sprint delivery with continuous client previews and automated code linting." },
      { step: "04", title: "QA & Security Audit", desc: "Cross-browser testing, penetration testing, performance audits, and SEO optimization." },
      { step: "05", title: "Production Deployment", desc: "Edge CDN configuration, SSL hardening, telemetry tracking, and zero-downtime cutover." },
      { step: "06", title: "24/7 SLA & Evolution", desc: "Continuous monitoring, security patches, performance tuning, and feature scaling." },
    ],
    benefits: [
      { metric: "3.2x", label: "Faster Load Times", desc: "Optimized asset streaming and modern SSR rendering." },
      { metric: "+45%", label: "Conversion Rate", desc: "Frictionless UX workflows and responsive layouts." },
      { metric: "99.99%", label: "Uptime Reliability", desc: "Distributed edge infrastructure with automated failover." },
    ],
    faqs: [
      { question: "What technologies do you recommend for our web application?", answer: "We primarily build with Next.js, React, TypeScript, and Node.js for maximum performance, SEO indexability, and rich ecosystem support." },
      { question: "Can you migrate our existing legacy platform without data loss?", answer: "Yes. We execute phased zero-downtime database migrations with automated synchronization and fallback rollback mechanisms." },
      { question: "Do you offer post-launch support and SLA guarantees?", answer: "Absolutely. We provide flexible SLA packages covering 24/7 uptime monitoring, security patching, and dedicated sprint enhancements." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    icon: "smartphone",
    tagline: "Native and cross-platform mobile apps that delight users.",
    shortDescription: "Intuitive iOS and Android apps powered by React Native and Flutter with native performance and offline sync.",
    fullDescription: "We design and build engaging mobile applications that users love. Leveraging React Native, Flutter, Swift, and Kotlin, our team crafts pixel-perfect native experiences with biometric authentication, push notifications, and background processing.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux Toolkit", "Fastlane"],
    features: [
      { title: "Cross-Platform Efficiency", desc: "Single codebase delivering authentic native iOS and Android performance with 40% lower cost." },
      { title: "Offline-First Synchronization", desc: "Local SQLite/WatermelonDB storage ensuring smooth workflows even without an active cellular connection." },
      { title: "Biometrics & Deep Hardware Access", desc: "FaceID, TouchID, GPS geofencing, Bluetooth BLE, camera scanning, and NFC integration." },
      { title: "App Store Publishing & Compliance", desc: "End-to-end Apple App Store and Google Play Store review approval and compliance management." },
    ],
    challenge: "Developing separate native apps for iOS and Android inflates engineering budgets, slows down feature releases, and creates fragmented user experiences.",
    solution: "We build unified cross-platform mobile apps with native UI components and shared business logic, ensuring rapid time-to-market without compromising performance.",
    process: [
      { step: "01", title: "Mobile Strategy", desc: "Platform selection, feature prioritization, and device compatibility matrix." },
      { step: "02", title: "Mobile UX Design", desc: "Human Interface Guidelines (HIG) and Material Design 3 compliant interactive prototypes." },
      { step: "03", title: "App Engineering", desc: "Clean modular architecture, native bridge modules, and robust state management." },
      { step: "04", title: "Device Farm Testing", desc: "Automated testing across 50+ real physical Android and iOS phone/tablet models." },
      { step: "05", title: "Store Submission", desc: "App Store & Play Store metadata, screenshot generation, review compliance, and live launch." },
      { step: "06", title: "Telemetry & Updates", desc: "Crashlytics monitoring, OTA bug fixes via CodePush, and app review optimization." },
    ],
    benefits: [
      { metric: "-40%", label: "Development Cost", desc: "Unified codebase across iOS and Android platforms." },
      { metric: "4.8★", label: "Average App Rating", desc: "Fluid animations, 60 FPS rendering, and crash-free sessions." },
      { metric: "2x", label: "Faster Feature Rollouts", desc: "Over-the-air updates and shared component modules." },
    ],
    faqs: [
      { question: "Should we build with React Native, Flutter, or pure Native?", answer: "For 90% of business applications, React Native or Flutter offers identical performance to native apps while saving 40-50% in engineering time and cost." },
      { question: "How do you manage App Store approvals?", answer: "We handle the entire submission lifecycle, adhering strictly to Apple and Google guidelines to secure first-pass approvals." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "layout",
    tagline: "User-centric design that captivates and converts.",
    shortDescription: "Intuitive digital interfaces, comprehensive Figma design systems, and data-driven user experience blueprints.",
    fullDescription: "Great design is not just how it looks, but how it works. We conduct user research, establish scalable Figma token systems, map customer journey blueprints, and craft visually striking interfaces that elevate your brand and drive measurable conversions.",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing", "Tailwind Tokens", "A/B Testing"],
    features: [
      { title: "Design System Architecture", desc: "Modular component libraries with atomic design tokens for seamless Figma-to-code parity." },
      { title: "User Journey & Persona Mapping", desc: "Empathy maps, user workflows, and wireframes targeting key conversion and retention funnels." },
      { title: "Interactive Micro-Interactions", desc: "Subtle physics-based animations that guide attention and provide satisfying tactile feedback." },
      { title: "Accessibility Standards (WCAG 2.1)", desc: "AA/AAA contrast compliance, keyboard navigability, and screen reader-friendly structures." },
    ],
    challenge: "Cluttered interfaces, confusing navigation, and visual inconsistency lead to high bounce rates, frustrated users, and lost revenue.",
    solution: "We redesign user flows with clean visual hierarchy, modern aesthetics, intuitive patterns, and continuous usability testing.",
    process: [
      { step: "01", title: "User Research & Audit", desc: "Heuristic evaluation, competitive benchmarking, and stakeholder interviews." },
      { step: "02", title: "Information Architecture", desc: "Sitemaps, user flow diagrams, and low-fidelity structural wireframes." },
      { step: "03", title: "Visual Design & Systems", desc: "Typography scales, color harmony palettes, iconography, and high-fidelity mockups." },
      { step: "04", title: "Interactive Prototyping", desc: "Clickable Figma prototypes with realistic transition logic and user testing." },
      { step: "05", title: "Developer Handoff", desc: "Complete token documentation, CSS export, and pairing with frontend engineers." },
      { step: "06", title: "Usability Optimization", desc: "Heatmap analysis, session recordings, and A/B test iterations." },
    ],
    benefits: [
      { metric: "+65%", label: "User Engagement", desc: "Intuitive flows and clear calls-to-action." },
      { metric: "-50%", label: "Dev Handoff Time", desc: "Complete design token systems synced directly to code." },
      { metric: "100%", label: "WCAG 2.1 Compliant", desc: "Universal accessibility across all devices." },
    ],
    faqs: [
      { question: "What deliverables do we receive at the end of a UI/UX project?", answer: "You receive a complete Figma design file with responsive components, design token variables, user flow maps, interactive prototypes, and developer specs." },
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: "cpu",
    tagline: "Empower your business with smart intelligence and automation.",
    shortDescription: "Custom LLM solutions, retrieval-augmented generation (RAG), conversational agents, and predictive analytics pipelines.",
    fullDescription: "Harness the transformative power of modern Artificial Intelligence. We build custom conversational AI agents, private enterprise RAG pipelines, computer vision systems, and automated predictive intelligence models tailored to your proprietary data.",
    technologies: ["OpenAI APIs", "LangChain", "Llama 3", "Pinecone", "pgvector", "Python", "PyTorch", "FastAPI"],
    features: [
      { title: "Enterprise RAG Pipelines", desc: "Semantic vector search across proprietary documentation with zero data leakage guarantees." },
      { title: "Autonomous Voice & Chat Agents", desc: "Sub-300ms conversational agents equipped with CRM integration and natural tone empathy." },
      { title: "Predictive Analytics & Forecasting", desc: "Machine learning models predicting customer churn, inventory demand, and financial anomalies." },
      { title: "Air-Gapped Private LLM Hosting", desc: "Dedicated self-hosted open-source models (Llama 3, Mistral) with strict SOC-2/HIPAA isolation." },
    ],
    challenge: "Off-the-shelf AI models hallucinate, lack private business context, and raise severe data privacy and compliance concerns.",
    solution: "We deploy fine-tuned domain-specific AI workflows with grounded vector search, deterministic safety guardrails, and enterprise access governance.",
    process: [
      { step: "01", title: "AI Opportunity Audit", desc: "Identifying high-ROI workflows, data readiness evaluation, and compliance boundaries." },
      { step: "02", title: "Data Pipeline & Cleaning", desc: "Chunking, metadata tagging, embedding generation, and vector database indexing." },
      { step: "03", title: "Model Fine-Tuning & RAG", desc: "Prompt engineering, agentic tool-calling workflows, and safety guardrails." },
      { step: "04", title: "Evaluation Benchmarks", desc: "Automated regression testing against hallucination benchmarks and latency limits." },
      { step: "05", title: "Secure API Integration", desc: "Deploying high-throughput FastAPI microservices into your existing tech stack." },
      { step: "06", title: "Continuous Learning", desc: "Reinforcement learning from user feedback (RLHF) and ongoing accuracy refinement." },
    ],
    benefits: [
      { metric: "10x", label: "Speedup in Operations", desc: "Automating repetitive data synthesis and customer interactions." },
      { metric: "99.4%", label: "RAG Retrieval Accuracy", desc: "Hybrid semantic & keyword reranking pipelines." },
      { metric: "100%", label: "Data Sovereignty", desc: "Zero training on private corporate intellectual property." },
    ],
    faqs: [
      { question: "Will our proprietary company data be safe with your AI solutions?", answer: "Yes. We implement private zero-retention API contracts or deploy 100% self-hosted open-source models inside your isolated private VPC." },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "cloud",
    tagline: "Scalable, secure and reliable cloud infrastructure.",
    shortDescription: "AWS, Azure, and GCP architecture, automated Kubernetes clusters, serverless pipelines, and SOC-2 compliance.",
    fullDescription: "Modernize your infrastructure for infinite scalability and minimal cloud expenditure. We architect multi-region Kubernetes clusters, automated CI/CD deployment pipelines, serverless microservices, and airtight cybersecurity controls.",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Cloudflare", "Datadog"],
    features: [
      { title: "Infrastructure as Code (IaC)", desc: "100% reproducible environments configured with Terraform, Ansible, and Helm charts." },
      { title: "Multi-Region High Availability", desc: "Automated geo-replication with 99.99% SLA and instant disaster recovery cutover." },
      { title: "Cost Optimization & FinOps", desc: "Right-sizing workloads, spot instances, and auto-scaling rules cutting cloud bills by 30-50%." },
      { title: "Zero Trust Security & SOC-2", desc: "Encrypted payloads at rest and in transit with IAM least-privilege policies and SIEM monitoring." },
    ],
    challenge: "Monolithic cloud setups lead to runaway AWS bills, single points of failure, slow manual deployments, and security vulnerabilities.",
    solution: "We transition your workloads to automated cloud-native architectures with automated scaling, strict security boundaries, and FinOps optimization.",
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Cost analysis, vulnerability scanning, and performance bottleneck diagnosis." },
      { step: "02", title: "Architecture Blueprint", desc: "VPC topology, Kubernetes cluster design, and data replication blueprints." },
      { step: "03", title: "Terraform Automation", desc: "Writing modular Infrastructure-as-Code for multi-environment staging and prod." },
      { step: "04", title: "Workload Migration", desc: "Phased zero-downtime container migration with blue-green deployment strategies." },
      { step: "05", title: "Observability & Alerting", desc: "Datadog, Prometheus, and Grafana telemetry with automated 24/7 incident paging." },
      { step: "06", title: "FinOps Continuous Tuning", desc: "Monthly cost audits, reserved instance optimization, and security compliance verification." },
    ],
    benefits: [
      { metric: "-45%", label: "Cloud Spend Reduced", desc: "Eliminated idle resources and optimized container densities." },
      { metric: "99.99%", label: "Guaranteed SLA", desc: "Multi-availability zone redundancy and self-healing pods." },
      { metric: "15 min", label: "Disaster Recovery RTO", desc: "Automated point-in-time database restoration and failover." },
    ],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "We support AWS, Google Cloud, and Microsoft Azure depending on your existing tech ecosystem, compliance requirements, and budget targets." },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation & Consulting",
    icon: "briefcase",
    tagline: "Strategic tech consulting to modernize legacy operations.",
    shortDescription: "End-to-end technical roadmap consulting, legacy code refactoring, enterprise ERP/CRM integration, and process automation.",
    fullDescription: "Accelerate your company's digital maturity. We partner with executive leadership to audit technical debt, replace obsolete manual spreadsheets with unified business operating systems, and implement automated enterprise workflows.",
    technologies: ["Enterprise Architecture", "Microservices", "ERP/CRM", "BPMN Workflows", "GraphQL", "Legacy Migration", "Security"],
    features: [
      { title: "Legacy System Modernization", desc: "Safe incremental migration from outdated monolithic codebases to modular microservices." },
      { title: "Process Automation & Integration", desc: "Eliminating manual data re-entry with automated Zapier/Make/custom API webhooks." },
      { title: "CTO & Architecture Advisory", desc: "Executive fractional technical leadership, vendor evaluation, and code due diligence." },
      { title: "Compliance & Security Roadmap", desc: "Preparation for SOC-2 Type II, ISO 27001, HIPAA, and GDPR audit accreditation." },
    ],
    challenge: "Disparate legacy tools create operational silos, human errors, slow customer response times, and ballooning operational costs.",
    solution: "We design a clear multi-phase technical roadmap that unifies your software stack into an automated, high-velocity digital nervous system.",
    process: [
      { step: "01", title: "Enterprise Systems Audit", desc: "Mapping all software tools, data pipelines, manual handoffs, and operational bottlenecks." },
      { step: "02", title: "Digital Roadmap Creation", desc: "Prioritizing high-impact quick wins alongside long-term architectural upgrades." },
      { step: "03", title: "Pilot Prototype Delivery", desc: "Rapid 4-week proof-of-concept demonstrating measurable ROI before full rollout." },
      { step: "04", title: "Core Platform Build", desc: "Unified enterprise operating system connecting accounting, CRM, tasks, and inventory." },
      { step: "05", title: "Change Management & Training", desc: "Hands-on team workshops, comprehensive documentation, and video tutorials." },
      { step: "06", title: "Quarterly ROI Review", desc: "Tracking cost savings, hours saved per employee, and system velocity metrics." },
    ],
    benefits: [
      { metric: "64%", label: "SaaS Overhead Cut", desc: "Consolidated fragmented single-purpose tools into unified software." },
      { metric: "32 hrs", label: "Saved Per Week / Team", desc: "Automated manual spreadsheets and data reconciliations." },
      { metric: "100%", label: "Audit Readiness", desc: "Immutable digital audit logs for enterprise compliance." },
    ],
    faqs: [
      { question: "How long does a digital transformation initiative take?", answer: "We deliver measurable pilot prototypes in 4-6 weeks, with full phased rollouts completing in 3 to 6 months without interrupting daily operations." },
    ],
  },
];

/* =========================================================================
   PROJECTS / CASE STUDIES DATA
   ========================================================================= */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "zobay-voice-ai",
    title: "Zobay Autonomous Voice AI",
    category: "AI",
    industry: "Telecommunications & Customer Service",
    tagline: "Ultra-low latency conversational AI phone agents with human emotion & reasoning.",
    overview: "A groundbreaking voice intelligence platform enabling Fortune 500 enterprises to handle millions of inbound customer calls and outbound sales appointments with sub-280ms audio latency and real-time CRM synchronization.",
    challenge: "Legacy IVR menus and robotic voice bots forced customers through frustrating keypad trees with 2-second awkward pauses that destroyed call conversion rates.",
    solution: "We engineered a direct streaming speech-to-speech neural pipeline with predictive audio turn-taking and emotion-aware acoustic pacing.",
    features: [
      "Sub-280ms voice turn-taking latency across global telephony gateways",
      "Multilingual fluency across 40+ languages with dynamic accent adaptation",
      "Bi-directional biometrics and automated CRM/calendar scheduling",
      "Real-time sentiment scoring and automated human escalation routing",
    ],
    technologies: ["Python", "FastAPI", "WebSockets", "PyTorch", "Next.js", "Redis", "SIP Telephony", "Docker"],
    results: [
      { metric: "92.4%", label: "First-Call Resolution" },
      { metric: "-85%", label: "Cost Per Minute" },
      { metric: "< 280ms", label: "Streaming Latency" },
      { metric: "1.2M+", label: "Calls Handled / Month" },
    ],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "Zobay transformed our contact center operations. We scaled our inbound call capacity 4x while saving over 80% on support staffing costs.",
      author: "Elena Rostova",
      role: "VP of Customer Operations",
      company: "Apex Global Telephony",
    },
  },
  {
    slug: "startone-enterprise-os",
    title: "StartOne Enterprise Cloud OS",
    category: "Web",
    industry: "Fintech & Enterprise Operations",
    tagline: "The all-in-one execution layer for modern companies, finances, and multi-tenant operations.",
    overview: "A unified enterprise operating platform that consolidated 8 disconnected SaaS tools into a single high-performance workspace covering multi-entity accounting, automated approvals, and real-time team analytics.",
    challenge: "Mid-market corporations were spending $40,000+ monthly on fragmented SaaS licenses while employees wasted hundreds of hours reconciling spreadsheets across isolated tools.",
    solution: "We engineered StartOne with a multi-tenant distributed ledger, drag-and-drop workflow builder, and instantaneous real-time dashboard analytics.",
    features: [
      "Multi-entity double-entry ledger with instant currency conversion",
      "Automated procurement and expense approval pipelines",
      "Granular role-based permissions with Single Sign-On (SSO)",
      "Interactive executive dashboards with sub-second SQL queries",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Node.js", "Redis", "AWS"],
    results: [
      { metric: "-64%", label: "SaaS Licensing Cut" },
      { metric: "32 hrs", label: "Admin Saved / Week" },
      { metric: "99.99%", label: "System Uptime" },
      { metric: "15,000+", label: "Active Daily Users" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "StartOne allowed us to retire 6 standalone tools in our first month. Our finance and operations teams are moving 3x faster with zero data drift.",
      author: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Vanguard Logistics Group",
    },
  },
  {
    slug: "legalx-contract-sentinel",
    title: "LegalX Autonomous Contract Intel",
    category: "AI",
    industry: "Legal & Regulatory Compliance",
    tagline: "Machine-speed contract intelligence, automated redlines, and continuous regulatory compliance.",
    overview: "An enterprise AI platform that audits Master Services Agreements, NDAs, and procurement vendor contracts in under 10 seconds, scoring risk across 50+ clause categories.",
    challenge: "In-house legal teams faced a 3-week backlog reviewing complex commercial contracts, stalling enterprise sales cycles and risking overlooked liability clauses.",
    solution: "We built a private RAG pipeline powered by custom fine-tuned legal LLMs that flags risky indemnifications and proposes playbook-aligned redlines.",
    features: [
      "10-second multi-party contract risk scoring across 50+ vectors",
      "Automated clause redlining matching company risk tolerances",
      "SOC-2 Type II, HIPAA, and GDPR air-gapped data guarantees",
      "Immutable audit trails for M&A and regulatory due diligence",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "pgvector", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      { metric: "10x", label: "Review Speedup" },
      { metric: "99.8%", label: "Risk Catch Rate" },
      { metric: "-70%", label: "Legal Overhead" },
      { metric: "250,000+", label: "Contracts Processed" },
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "LegalX has cut our deal closing cycles from 21 days to under 48 hours. The automated redlining is remarkably accurate and trustworthy.",
      author: "Sarah Jenkins, Esq.",
      role: "General Counsel",
      company: "Meridian Cloud Solutions",
    },
  },
  {
    slug: "baseone-treasury-settlement",
    title: "BaseOne High-Frequency Treasury",
    category: "Cloud",
    industry: "Fintech & Banking",
    tagline: "High-frequency treasury orchestration, multi-currency liquidity, and automated clearing.",
    overview: "An institutional-grade payment clearing and treasury management platform facilitating sub-50ms transaction settlements with ISO 20022 compliance.",
    challenge: "Cross-border corporate transactions suffered from 3-day correspondent banking delays and opaque FX conversion markups.",
    solution: "We built BaseOne with an immutable double-entry distributed ledger and algorithmic FX liquidity routing across global clearing nodes.",
    features: [
      "Sub-50ms transaction finality across 28 global currencies",
      "Automated liquidity rebalancing and multi-currency pooling",
      "ISO 20022 messaging compliance and AML sanction checks",
      "Zero-knowledge cryptographic audit trail for central bank compliance",
    ],
    technologies: ["Go", "Rust", "gRPC", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"],
    results: [
      { metric: "< 50ms", label: "Settlement Finality" },
      { metric: "+40%", label: "Liquidity Efficiency" },
      { metric: "$1.4B+", label: "Monthly Volume" },
      { metric: "Zero", label: "Reconciliation Errors" },
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "BaseOne gave our enterprise treasury instant visibility and real-time clearing across our European and Asian subsidiaries.",
      author: "Arthur Sterling",
      role: "Head of Treasury Operations",
      company: "Novus Financial Capital",
    },
  },
  {
    slug: "validsoft-biometric-defense",
    title: "ValidSoft Acoustic Biometric Shield",
    category: "AI",
    industry: "Cybersecurity & Identity",
    tagline: "Acoustic voice biometric authentication and deepfake intrusion defense.",
    overview: "A cybersecurity engine analyzing micro-frequency vocal tract resonance to detect synthetic AI voice clones and biometric spoofing in under 150 milliseconds.",
    challenge: "Sophisticated deepfake audio scams were breaching telephone banking authentication and CEO impersonation wire transfers.",
    solution: "We developed a hardware-accelerated spectrogram neural network that verifies biological vocal physics independent of language or audio compression.",
    features: [
      "99.8% synthetic voice clone rejection accuracy",
      "Sub-150ms real-time audio spectrogram analysis",
      "Zero passphrase authentication with continuous threat telemetry",
      "FIDO2 and NIST 800-63B biometric compliance standard",
    ],
    technologies: ["C++", "Python", "TensorFlow", "WebRTC", "CUDA", "Linux Edge Nodes"],
    results: [
      { metric: "99.8%", label: "Rejection Accuracy" },
      { metric: "< 150ms", label: "Detection Latency" },
      { metric: "100%", label: "Deepfake Defense" },
      { metric: "4.5M+", label: "Biometric Scans" },
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "ValidSoft blocked over 1,400 synthetic audio attacks in our first quarter of deployment. It is indispensable for modern telephony security.",
      author: "David Chen",
      role: "Chief Information Security Officer",
      company: "SecureTrust Bank",
    },
  },
  {
    slug: "socan-royalty-mesh",
    title: "SOCAN AI Media Stream & Royalty",
    category: "Mobile",
    industry: "Media, Entertainment & Music",
    tagline: "Automated media licensing, acoustic fingerprinting, and global royalty distribution.",
    overview: "A real-time audio stream recognition and smart-contract royalty routing platform monitoring broadcast media across 140+ digital channels.",
    challenge: "Independent music creators and rightsholders lost millions annually in uncollected royalties due to fragmented streaming logs and manual payout spreadsheets.",
    solution: "We engineered an acoustic fingerprint index of 1.2 billion tracks with automated micro-payment splits executed via smart contracts.",
    features: [
      "1.2 Billion track acoustic fingerprint index with 0.2s matching",
      "Continuous live stream audio monitoring across 140+ platforms",
      "Automated multi-stakeholder micro-royalty payout routing",
      "Transparent rightsholder portal with real-time play counts",
    ],
    technologies: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Redis", "Solidity", "AWS"],
    results: [
      { metric: "0.2s", label: "Audio Match Speed" },
      { metric: "100%", label: "Payout Accuracy" },
      { metric: "140+", label: "Stream Channels" },
      { metric: "$85M+", label: "Royalties Distributed" },
    ],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    ],
    testimonial: {
      quote: "The transparency and speed of royalty payouts through this system has revolutionized how our artist roster gets compensated.",
      author: "Maya Lin",
      role: "Managing Director",
      company: "Sonic Rights Collective",
    },
  },
];

/* =========================================================================
   INDUSTRIES DATA
   ========================================================================= */
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "heart-pulse",
    tagline: "HIPAA-compliant telemedicine, electronic health records, and clinical AI workflows.",
    description: "We engineer secure digital healthcare solutions that streamline patient intake, automate clinical transcription, and maintain rigorous HIPAA compliance.",
    challenges: [
      "Strict data privacy regulations (HIPAA/HITECH) and legacy EHR data silos.",
      "Physician burnout caused by excessive manual administrative charting.",
      "Fragmented patient scheduling and billing reconciliation delays.",
    ],
    solutions: [
      "End-to-end encrypted telehealth and remote patient monitoring portals.",
      "Autonomous conversational intake and voice-driven clinical note generation.",
      "FHIR and HL7 interoperability layers connecting legacy hospital systems.",
    ],
    features: ["HIPAA-compliant encryption", "FHIR API integration", "AI clinical documentation", "Telehealth video consultations"],
    technologies: ["Next.js", "Python", "FastAPI", "WebRTC", "PostgreSQL", "AWS HealthLake"],
    caseStudySlug: "validsoft-biometric-defense",
    benefits: ["-50% Physician Charting Time", "100% HIPAA Compliance", "+35% Patient Retention"],
  },
  {
    slug: "finance",
    name: "Financial Services & Fintech",
    icon: "banknote",
    tagline: "High-frequency payment clearing, algorithmic treasury, and fraud prevention.",
    description: "Transform banking and wealth management operations with sub-50ms transaction settlements, automated AML checks, and SOC-2 certified infrastructure.",
    challenges: [
      "Slow multi-day cross-border settlement times and high foreign exchange fees.",
      "Increasingly sophisticated deepfake and account takeover fraud threats.",
      "Complex multi-jurisdictional compliance reporting requirements.",
    ],
    solutions: [
      "Sub-50ms real-time gross settlement ledgers with ISO 20022 messaging.",
      "Acoustic and behavioral biometric defenses stopping synthetic identity theft.",
      "Automated regulatory compliance audit trails with real-time telemetry.",
    ],
    features: ["Real-time settlement ledger", "Biometric deepfake shield", "ISO 20022 compliance", "Multi-currency pooling"],
    technologies: ["Go", "Rust", "PostgreSQL", "Kafka", "Docker", "AWS"],
    caseStudySlug: "baseone-treasury-settlement",
    benefits: ["< 50ms Settlement Speed", "99.8% Fraud Detection", "Zero Reconciliation Errors"],
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    icon: "building",
    tagline: "Automated property management, virtual leasing agents, and lease accounting.",
    description: "Streamline tenant lifecycle management, automated contract redlining, and digital rent collection across commercial and residential portfolios.",
    challenges: [
      "High tenant acquisition costs and slow manual lease agreement drafting.",
      "Manual rent reconciliation across hundreds of property entities.",
      "Disorganized maintenance ticket dispatching and vendor tracking.",
    ],
    solutions: [
      "AI phone leasing agents booking property tours 24/7 with zero human intervention.",
      "Automated lease contract extraction and compliance scoring in 10 seconds.",
      "Unified multi-property financial dashboards with automated ACH collection.",
    ],
    features: ["24/7 AI leasing agent", "Lease contract redlining", "Multi-entity accounting", "Tenant portal app"],
    technologies: ["Next.js", "React Native", "Python", "PostgreSQL", "Stripe Connect"],
    caseStudySlug: "legalx-contract-sentinel",
    benefits: ["4x Faster Lease Turnaround", "92% Tour Booking Rate", "100% On-Time Rent Settlement"],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    icon: "graduation-cap",
    tagline: "Adaptive learning platforms, virtual classrooms, and automated grading pipelines.",
    description: "Empower educational institutions with personalized learning pathways, interactive virtual classrooms, and scalable student management systems.",
    challenges: [
      "One-size-fits-all curricula failing to address individual student learning paces.",
      "Heavy teacher administrative grading workloads reducing 1-on-1 student time.",
      "Incompatible legacy school information systems (SIS).",
    ],
    solutions: [
      "AI-driven adaptive tutoring adapting difficulty in real-time to student performance.",
      "Automated essay scoring and code evaluation with instant rubric feedback.",
      "Unified mobile and web campus portal integrating schedules, grades, and tuition.",
    ],
    features: ["Adaptive AI tutoring", "Interactive live video classrooms", "Automated grading engine", "Parent/Student mobile app"],
    technologies: ["React", "Node.js", "WebRTC", "Python", "PostgreSQL", "AWS"],
    caseStudySlug: "zobay-voice-ai",
    benefits: ["+40% Student Retention", "-60% Grading Overhead", "4.9★ Student Satisfaction"],
  },
  {
    slug: "e-commerce",
    name: "E-Commerce & Retail",
    icon: "shopping-bag",
    tagline: "High-conversion storefronts, dynamic pricing, and automated inventory sync.",
    description: "Build ultra-fast Next.js storefronts with headless CMS architectures, personalized recommendation engines, and seamless global payment gateways.",
    challenges: [
      "Slow page load speeds causing catastrophic shopping cart drop-offs.",
      "Inventory desynchronization across multi-channel marketplaces (Amazon, Shopify).",
      "Generic product recommendations failing to boost average order value (AOV).",
    ],
    solutions: [
      "Headless Next.js storefronts achieving sub-second page transitions and 99+ Lighthouse scores.",
      "Real-time event-driven inventory synchronization across all warehouses and channels.",
      "Vector-based semantic search and personalized AI upsell recommendations.",
    ],
    features: ["Sub-second Headless UI", "Multi-currency checkout", "Real-time inventory sync", "AI product recommendations"],
    technologies: ["Next.js", "Shopify Plus", "Algolia", "Tailwind CSS", "Stripe", "PostgreSQL"],
    caseStudySlug: "startone-enterprise-os",
    benefits: ["+52% Conversion Rate", "0.4s Page Load Time", "+28% Higher AOV"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    icon: "factory",
    tagline: "IoT sensor telemetry, predictive maintenance, and supply chain visibility.",
    description: "Modernize shop-floor operations with real-time IoT device streaming, automated defect vision analysis, and integrated ERP supply chain tracking.",
    challenges: [
      "Unplanned machine downtime costing millions in lost factory production.",
      "Manual quality assurance inspections prone to human error.",
      "Opaque supply chain dependencies causing inventory bottlenecks.",
    ],
    solutions: [
      "Edge IoT sensor telemetry alerting engineers before critical hardware failures.",
      "Computer vision models inspecting manufactured parts at 60 FPS on assembly lines.",
      "Real-time digital twin dashboards providing end-to-end supply visibility.",
    ],
    features: ["Predictive IoT telemetry", "Computer vision QA", "Supply chain digital twin", "Air-gapped on-premise VPC"],
    technologies: ["Python", "C++", "MQTT", "TimescaleDB", "Next.js", "Docker"],
    caseStudySlug: "startone-enterprise-os",
    benefits: ["-38% Unplanned Downtime", "99.9% Defect Detection", "+25% Overall Equipment Efficiency"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: "truck",
    tagline: "Route optimization, real-time fleet dispatch, and automated freight audit.",
    description: "Optimize complex transportation networks with AI-driven route planning, automated freight document OCR, and live GPS fleet tracking.",
    challenges: [
      "Fluctuating fuel costs and inefficient delivery routing wasting operational capital.",
      "Delayed paper bills of lading and dispute-prone manual freight auditing.",
      "Lack of real-time shipment visibility for enterprise freight customers.",
    ],
    solutions: [
      "Algorithmic dynamic route optimization cutting vehicle fuel consumption by 22%.",
      "Instant OCR document processing digitizing bills of lading in under 5 seconds.",
      "Customer tracking portal with live GPS milestones and predictive ETA updates.",
    ],
    features: ["Dynamic route solver", "Automated freight OCR", "Live GPS telemetry", "Automated carrier settlement"],
    technologies: ["Go", "Next.js", "React Native", "PostgreSQL", "Google Maps API", "Redis"],
    caseStudySlug: "startone-enterprise-os",
    benefits: ["-22% Fuel Spend", "10x Faster Freight Audits", "99.4% On-Time Delivery"],
  },
  {
    slug: "technology",
    name: "Technology & SaaS Startups",
    icon: "terminal",
    tagline: "High-velocity MVP engineering, multi-tenant cloud OS, and developer APIs.",
    description: "We partner with high-growth technology companies to build scalable product architectures, clean design systems, and rock-solid developer APIs.",
    challenges: [
      "Slow development cycles burning through venture capital runways.",
      "Technical debt preventing enterprise customer onboarding and SOC-2 compliance.",
      "Inconsistent UI design hurting product adoption and retention.",
    ],
    solutions: [
      "Rapid sprint delivery of production-ready SaaS architectures with clean code.",
      "Comprehensive Figma design systems ensuring pixel-perfect interface polish.",
      "Airtight SOC-2 Type II compliant cloud infrastructure on AWS and Vercel.",
    ],
    features: ["Multi-tenant SaaS starter", "Figma design system tokens", "Automated CI/CD pipelines", "SOC-2 Type II architecture"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"],
    caseStudySlug: "zobay-voice-ai",
    benefits: ["3x Faster Time to Market", "Zero Technical Debt", "SOC-2 Audit Ready"],
  },
];

/* =========================================================================
   CAREERS & JOBS DATA
   ========================================================================= */
export const JOBS_DATA: JobItem[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Bengaluru, India (Hybrid / Remote)",
    type: "Full Time",
    experience: "4+ Years",
    about: "We are seeking an exceptional Senior Frontend Engineer to build world-class web applications, design systems, and responsive customer-facing portals using Next.js, React, TypeScript, and Tailwind CSS.",
    responsibilities: [
      "Architect and build high-performance, accessible, and responsive user interfaces with Next.js and TypeScript.",
      "Collaborate closely with UI/UX designers to translate Figma design tokens into reusable component systems.",
      "Optimize Core Web Vitals, client-side bundle sizes, and state management workflows.",
      "Mentor junior developers and participate in rigorous code reviews to maintain top-tier code quality.",
    ],
    requirements: [
      "4+ years of professional frontend development experience with React and TypeScript.",
      "Deep expertise in Next.js (App Router, Server Components, SSR/SSG) and modern Tailwind CSS.",
      "Strong understanding of browser rendering performance, WebSockets, and REST/GraphQL APIs.",
      "Proven track record of delivering clean, well-tested code using Jest/Playwright.",
    ],
    niceToHave: [
      "Experience with Framer Motion physics animations.",
      "Contributions to open-source developer libraries.",
      "Knowledge of micro-frontends and state machines (XState).",
    ],
    benefits: [
      "Competitive compensation + equity stock options.",
      "Flexible hybrid/remote working arrangements.",
      "Annual $2,000 learning and conference stipend.",
      "Comprehensive health, vision, and dental insurance for you & family.",
      "Top-of-the-line Apple M-series MacBook Pro setup.",
    ],
    process: [
      { step: "01", title: "Application Review", desc: "Our engineering leadership reviews your GitHub, portfolio, and experience." },
      { step: "02", title: "Initial Screen (30 mins)", desc: "A casual video chat discussing your background, projects, and role expectations." },
      { step: "03", title: "Technical Architecture (60 mins)", desc: "Pair programming or live system architecture session solving a realistic frontend problem." },
      { step: "04", title: "Cultural Alignment (45 mins)", desc: "Meeting the cross-functional team and leadership." },
      { step: "05", title: "Formal Offer", desc: "Competitive compensation package delivered within 48 hours." },
    ],
  },
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend / Cloud Engineer",
    department: "Engineering",
    location: "Bengaluru, India (Hybrid / Remote)",
    type: "Full Time",
    experience: "5+ Years",
    about: "Join our core infrastructure team to design distributed backend microservices, high-throughput database schemas, and event-driven pipelines supporting millions of real-time requests.",
    responsibilities: [
      "Design and maintain scalable distributed APIs in Node.js, Go, or Python.",
      "Architect relational and vector database schemas (PostgreSQL, Redis, pgvector).",
      "Implement automated CI/CD deployment pipelines on AWS and Kubernetes.",
      "Ensure airtight data security, payload encryption, and SOC-2 compliance standards.",
    ],
    requirements: [
      "5+ years of backend engineering experience building distributed microservices.",
      "Deep proficiency in Node.js/TypeScript, Go, or Python with asynchronous event loops.",
      "Strong database engineering skills (query optimization, indexing, ACID transactions).",
      "Hands-on experience with Docker, Kubernetes, Terraform, and cloud platforms (AWS/GCP).",
    ],
    niceToHave: [
      "Experience with Kafka, RabbitMQ, or Redis Pub/Sub.",
      "Knowledge of AI/LLM vector databases and embedding search.",
    ],
    benefits: [
      "Top-tier compensation and equity grants.",
      "Comprehensive medical coverage for employee and dependents.",
      "Flexible work hours and remote allowance.",
      "Annual team offsites in premier locations.",
    ],
    process: [
      { step: "01", title: "Application Review", desc: "Review of backend projects and code samples." },
      { step: "02", title: "Introductory Call", desc: "Technical background and cultural alignment chat." },
      { step: "03", title: "System Design Interview", desc: "Whiteboard distributed database and API scaling challenges." },
      { step: "04", title: "Executive Interview", desc: "Conversation with our CTO and VP of Engineering." },
      { step: "05", title: "Offer Extended", desc: "Formal offer package with clear growth trajectory." },
    ],
  },
  {
    slug: "lead-ui-ux-designer",
    title: "Lead UI/UX Product Designer",
    department: "Design",
    location: "Bengaluru, India (Hybrid / Remote)",
    type: "Full Time",
    experience: "4+ Years",
    about: "We are looking for a creative Lead Product Designer to champion our design system, craft intuitive digital product experiences, and turn complex technical workflows into delightful interfaces.",
    responsibilities: [
      "Lead end-to-end product design from user research and wireframing to high-fidelity Figma components.",
      "Establish and maintain comprehensive design systems with scalable design tokens.",
      "Collaborate daily with frontend developers to ensure 100% implementation accuracy.",
      "Conduct user testing sessions, synthesize usability feedback, and iterate on interfaces.",
    ],
    requirements: [
      "4+ years of professional UI/UX design experience for SaaS web and mobile products.",
      "Mastery of Figma (auto-layout, component variants, variable tokens, interactive prototyping).",
      "Strong portfolio demonstrating user-centric problem solving and impeccable aesthetic taste.",
      "Solid understanding of frontend constraints (HTML/CSS/Tailwind, responsive breakpoints).",
    ],
    niceToHave: [
      "Experience with Framer, After Effects, or 3D Spline design.",
      "Knowledge of design-to-code automation tools.",
    ],
    benefits: [
      "Competitive compensation package + equity.",
      "Creative freedom and direct influence on company design standards.",
      "Generous hardware budget (Studio Display, MacBook Pro, accessories).",
      "Flexible remote schedule and annual wellness stipend.",
    ],
    process: [
      { step: "01", title: "Portfolio Review", desc: "Detailed review of your case studies and visual craft." },
      { step: "02", title: "Design Discovery Call", desc: "Discussing design philosophy, process, and past projects." },
      { step: "03", title: "Design Challenge Walkthrough", desc: "Reviewing a past design problem and your solution approach." },
      { step: "04", title: "Team Fit Chat", desc: "Meeting product managers and frontend engineers." },
      { step: "05", title: "Offer Rollout", desc: "Formal offer letter and welcoming to the team." },
    ],
  },
  {
    slug: "ai-machine-learning-engineer",
    title: "AI / ML Solutions Engineer",
    department: "AI & Innovation",
    location: "Bengaluru, India (Hybrid / Remote)",
    type: "Full Time",
    experience: "3+ Years",
    about: "Build the future of enterprise intelligence. You will design retrieval-augmented generation (RAG) pipelines, fine-tune open-source LLMs, and deploy low-latency voice and conversational AI microservices.",
    responsibilities: [
      "Develop and deploy enterprise RAG pipelines using LangChain, pgvector, and Pinecone.",
      "Fine-tune and evaluate LLMs (Llama 3, Mistral) for domain-specific accuracy and safety.",
      "Build high-throughput async Python/FastAPI microservices connected to speech-to-speech models.",
      "Implement automated hallucination benchmarks and continuous evaluation telemetry.",
    ],
    requirements: [
      "3+ years of software engineering experience with deep specialization in Python and AI/ML.",
      "Hands-on experience with OpenAI APIs, LangChain/LlamaIndex, and vector databases.",
      "Strong background in PyTorch or TensorFlow, embeddings, and NLP concepts.",
      "Familiarity with deploying ML services using Docker and GPU cloud instances.",
    ],
    niceToHave: [
      "Experience with speech processing, WebRTC audio streams, or acoustic models.",
      "Published research papers or open-source AI repos.",
    ],
    benefits: [
      "Industry-leading salary and equity grants.",
      "Unlimited GPU compute cloud credits for research and experimentation.",
      "Full health coverage and international conference sponsorships.",
    ],
    process: [
      { step: "01", title: "Application & Code Review", desc: "Review of GitHub repositories and ML projects." },
      { step: "02", title: "AI Technical Screen", desc: "Deep dive into vector search, embeddings, and prompt architecture." },
      { step: "03", title: "Live Architecture Challenge", desc: "Designing a high-throughput RAG or voice streaming pipeline." },
      { step: "04", title: "Leadership Interview", desc: "Discussion on AI ethics, vision, and team impact." },
      { step: "05", title: "Offer Delivery", desc: "Formal offer package." },
    ],
  },
];

/* =========================================================================
   BLOG POSTS DATA
   ========================================================================= */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-ai-is-changing-modern-businesses",
    title: "How Autonomous AI is Reshaping Enterprise Operations in 2026",
    category: "AI",
    readTime: "6 min read",
    publishDate: "March 12, 2026",
    author: {
      name: "Dr. Vikram Sethi",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    excerpt: "Explore how sub-300ms conversational agents, private enterprise RAG pipelines, and automated legal audits are fundamentally replacing legacy manual workflows.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    tags: ["Artificial Intelligence", "Autonomous Systems", "Enterprise Tech", "Future of Work"],
    content: [
      "The narrative around artificial intelligence has shifted dramatically over the past eighteen months. Where businesses previously experimented with generic chatbots, modern enterprises are now deploying mission-critical autonomous agents capable of independent multi-step execution.",
      "At StartoTech, we observe three definitive pillars defining the new enterprise AI architecture: cognitive latency elimination, deterministic safety guardrails, and air-gapped data sovereignty.",
      "Sub-300ms Conversational Latency: Human conversations occur with an average turn-taking delay of 250 to 300 milliseconds. When AI systems exceed this threshold, the interaction feels robotic and frustrating. By bypassing text intermediaries and streaming audio directly through spectrogram models, systems like Zobay achieve natural conversational cadence.",
      "Private Enterprise RAG: Generic LLMs lack private business context and are prone to hallucinations. Enterprise Retrieval-Augmented Generation (RAG) connects proprietary knowledge bases with semantic vector embeddings, ensuring every response is grounded in verifiable company data with zero data leakage.",
      "Autonomous Compliance & Auditing: In legal and regulatory domains, AI models can now scan 100-page contracts in under 10 seconds, scoring liability vectors against 50+ clause categories and generating precision redlines.",
      "The companies adopting these autonomous layers today are cutting operational overhead by up to 64% while delivering instant, 24/7 service to their global customers.",
    ],
  },
  {
    slug: "building-scalable-design-systems-with-figma-and-nextjs",
    title: "Building Scalable Design Systems: From Figma Tokens to Next.js Components",
    category: "Design",
    readTime: "5 min read",
    publishDate: "March 5, 2026",
    author: {
      name: "Aanya Sharma",
      role: "Head of Product Design",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    },
    excerpt: "A practical guide to bridging the gap between designers and developers using atomic token variables, Tailwind CSS, and modular React component architectures.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tags: ["UI/UX Design", "Design Systems", "Figma", "Next.js", "Tailwind CSS"],
    content: [
      "One of the greatest sources of friction in digital product development is the handoff between design and engineering. Disconnected color codes, arbitrary spacing values, and inconsistent component variations slow down releases and degrade visual quality.",
      "Establishing a unified design token system resolves this permanently. In Figma, we define design variables for colors, typography scales, spacing, border radiuses, and elevation shadows.",
      "These tokens map 1:1 into Tailwind CSS utility classes and TypeScript theme interfaces, creating a shared vocabulary between designers and frontend engineers.",
      "Key benefits of our atomic design system approach: 50% faster feature development sprints, guaranteed accessibility compliance across all components, and effortless global theme updates.",
    ],
  },
  {
    slug: "nextjs-turbopack-high-performance-web-apps",
    title: "Engineering High-Performance Web Apps with Next.js & Turbopack",
    category: "Technology",
    readTime: "8 min read",
    publishDate: "February 28, 2026",
    author: {
      name: "Rahul Verma",
      role: "Principal Systems Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    excerpt: "How modern Server Components, streaming SSR, and edge caching deliver sub-second page loads and near-perfect Core Web Vitals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Web Development", "Next.js", "Performance", "React", "DevOps"],
    content: [
      "In the modern web economy, every 100 milliseconds of latency translates to a measurable drop in conversion rate. Traditional single-page applications (SPAs) often ship heavy JavaScript bundles that delay first contentful paint on mobile devices.",
      "With Next.js App Router and Turbopack, React Server Components render directly on edge servers, sending zero client-side JavaScript for static content.",
      "By combining streaming HTML with selective client hydration, our applications render critical above-the-fold content in under 400 milliseconds, achieving 99+ Lighthouse scores consistently.",
    ],
  },
  {
    slug: "zero-trust-cloud-security-best-practices",
    title: "Zero-Trust Cloud Security: Protecting Multi-Tenant Enterprise Data",
    category: "Cloud",
    readTime: "7 min read",
    publishDate: "February 18, 2026",
    author: {
      name: "Arthur Sterling",
      role: "VP of Cloud & Security",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    excerpt: "Architectural strategies for implementing least-privilege IAM, payload encryption at rest, and automated SOC-2 compliance monitoring.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    tags: ["Cybersecurity", "Cloud Architecture", "SOC-2", "AWS", "Zero Trust"],
    content: [
      "Perimeter-based cybersecurity is obsolete. In modern cloud environments, enterprises must adopt a Zero-Trust posture: never trust, always verify.",
      "Every microservice call, database query, and administrative action must be authenticated, authorized, and logged with cryptographic immutability.",
      "We detail practical strategies for implementing automated IAM least-privilege policies, mTLS encryption between Kubernetes pods, and continuous audit telemetry.",
    ],
  },
];

/* =========================================================================
   TESTIMONIALS DATA
   ========================================================================= */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "StartoTech transformed our entire digital infrastructure. Their engineering rigor, sub-300ms voice AI, and flawless Next.js delivery helped us scale from 10,000 to over 500,000 active users with zero downtime.",
    author: "Elena Rostova",
    role: "VP of Product Engineering",
    company: "Apex Global Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    metric: "+320% User Growth",
  },
  {
    id: "test-2",
    quote: "The unified StartOne platform eliminated 6 legacy SaaS subscriptions and saved our operations team over 30 hours each week. It is by far the highest-ROI software investment our company has made.",
    author: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Vanguard Logistics Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    metric: "-64% SaaS Overhead",
  },
  {
    id: "test-3",
    quote: "LegalX reduced our contract review cycle from 3 weeks to under 48 hours. The automated redlining and compliance verification is astonishingly accurate and has accelerated our sales velocity.",
    author: "Sarah Jenkins, Esq.",
    role: "General Counsel",
    company: "Meridian Cloud Corp",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    metric: "10x Audit Speed",
  },
  {
    id: "test-4",
    quote: "Working with their design and development team felt like having an elite Silicon Valley product squad. Their attention to detail, performance benchmarks, and speed of delivery exceeded all expectations.",
    author: "David Chen",
    role: "Chief Information Officer",
    company: "SecureTrust Financial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    metric: "99.99% Reliability",
  },
];

/* =========================================================================
   FAQ DATA
   ========================================================================= */
export const FAQ_DATA: FAQItem[] = [
  {
    category: "General & Process",
    question: "How does your software development process work?",
    answer: "We follow a proven 6-stage delivery framework: 1. Discovery & Technical Scope, 2. UI/UX Wireframing & Design Systems, 3. Agile Sprint Development, 4. Automated Testing & Security Audits, 5. Zero-Downtime Production Deployment, and 6. 24/7 SLA Support and continuous optimization.",
  },
  {
    category: "General & Process",
    question: "What technologies and frameworks do you use?",
    answer: "We specialize in modern, high-performance tech stacks: Next.js, React, TypeScript, Node.js, Python, Go, Tailwind CSS, PostgreSQL, Docker, Kubernetes, AWS, and modern AI/LLM frameworks (OpenAI, LangChain, pgvector).",
  },
  {
    category: "Timeline & Pricing",
    question: "How long does a typical custom software project take?",
    answer: "Project timelines depend on scope: rapid proof-of-concepts and MVPs are typically delivered in 4 to 6 weeks, while comprehensive enterprise software platforms take between 2 to 4 months with continuous sprint releases.",
  },
  {
    category: "Timeline & Pricing",
    question: "Do you provide post-launch maintenance and SLA support?",
    answer: "Yes. Every client receives contractually guaranteed uptime SLAs, 24/7 incident monitoring, security patching, and dedicated sprint hours for continuous feature scaling.",
  },
  {
    category: "Security & Compliance",
    question: "How do you ensure data security, privacy, and compliance?",
    answer: "All our architectures follow strict Zero-Trust principles with end-to-end payload encryption (AES-256 / TLS 1.3), automated vulnerability scanning, and SOC-2 Type II, ISO 27001, HIPAA, and GDPR compliance standards.",
  },
  {
    category: "Engagement",
    question: "How can we start a project or request an architecture review?",
    answer: "You can click the 'Get Started' or 'Talk to an Expert' button anywhere on our website, or email enterprise@startotech.com. Our principal systems architect will schedule a discovery session within 2 hours.",
  },
];

/* =========================================================================
   COMPANY VALUES & STATS
   ========================================================================= */
export const COMPANY_VALUES = [
  {
    title: "Innovation With Purpose",
    desc: "We push the boundaries of modern machine intelligence, real-time audio streaming, and cloud architectures to solve real business challenges.",
    icon: "zap",
  },
  {
    title: "Uncompromising Quality",
    desc: "From pixel-perfect Figma design tokens to zero-downtime database migrations, we uphold the highest engineering craft.",
    icon: "shield-check",
  },
  {
    title: "Customer First & Transparency",
    desc: "We operate with radical transparency, continuous sprint demos, and direct executive communication channels.",
    icon: "users",
  },
  {
    title: "Data Sovereignty & Integrity",
    desc: "We build air-gapped, zero-leakage security boundaries ensuring your corporate intellectual property remains 100% private.",
    icon: "lock",
  },
];

export const COMPANY_STATS = [
  { value: "150+", label: "Enterprise Projects Completed" },
  { value: "99.99%", label: "Uptime SLA Standard" },
  { value: "< 280ms", label: "Voice AI Streaming Latency" },
  { value: "40+", label: "Elite Engineers & Designers" },
];

export const CLIENT_LOGOS = [
  { name: "Apex Global", logo: "Apex" },
  { name: "Vanguard Logistics", logo: "Vanguard" },
  { name: "Meridian Cloud", logo: "Meridian" },
  { name: "SecureTrust Bank", logo: "SecureTrust" },
  { name: "Sonic Rights", logo: "Sonic" },
  { name: "Novus Financial", logo: "Novus" },
];
