import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stratotechcorp.com";
  const now = new Date();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/products/salesx", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/products/meetingx", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/projects/salesx-pipeline", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/zobay-voice-ai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/meetingx-webrtc", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/startone-enterprise-os", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/baseone-treasury-settlement", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/legalx-contract-sentinel", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/archive", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
