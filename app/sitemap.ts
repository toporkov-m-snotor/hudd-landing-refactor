import { type MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://about.hudd.no";

const pages = [
  { path: "", priority: 1.0 },
  { path: "/hudd-vs-others", priority: 0.8 },
  { path: "/privacy-policy", priority: 0.8 },
  { path: "/terms-of-use", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date("2025-09-23"),
        changeFrequency: "monthly",
        priority: page.priority,
      });
    }
  }

  return entries;
}
