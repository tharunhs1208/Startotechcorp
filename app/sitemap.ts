import { MetadataRoute } from "next";
import {
  SERVICES_DATA,
  PROJECTS_DATA,
  INDUSTRIES_DATA,
  BLOG_POSTS,
  JOBS_DATA,
} from "@/data/siteData";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stratotechcorp.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/products`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/products/salesx`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/products/meetingx`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/industries`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/careers`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/faq`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Dynamic Service pages
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Project / Case Study pages
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Industry pages
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((ind) => ({
    url: `${BASE_URL}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Blog pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Careers pages
  const careerRoutes: MetadataRoute.Sitemap = JOBS_DATA.map((job) => ({
    url: `${BASE_URL}/careers/${job.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...careerRoutes,
  ];
}
