import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { publishedProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...publishedProjects.map((project) => ({
      url: `${siteUrl}/realisations/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      ...(project.cover
        ? { images: [new URL(project.cover, siteUrl).toString()] }
        : {}),
    })),
  ];
}
