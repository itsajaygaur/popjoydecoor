import type { MetadataRoute } from "next";
import { LANDING_PATH, LEGAL_LINKS, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}${LANDING_PATH}`, changeFrequency: "weekly", priority: 1 },
    ...LEGAL_LINKS.map(({ href }) => ({ url: `${SITE.url}${href}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
