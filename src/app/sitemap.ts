import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wisdom-portfolio-rho.vercel.app";
  return [
    { url: base, priority: 1 },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, priority: 0.8 })),
  ];
}
