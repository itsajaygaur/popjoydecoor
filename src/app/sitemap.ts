import type { MetadataRoute } from "next";
import { LANDING_PATH, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}${LANDING_PATH}`, changeFrequency: "weekly", priority: 1 }];
}
