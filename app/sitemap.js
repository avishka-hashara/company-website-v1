import { SITE_URL } from "@/lib/seo";

// The eleven public routes. /api/contact is excluded (not a page) and so is the
// 404, which has no addressable URL.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-details", priority: 0.7, changeFrequency: "monthly" },
  { path: "/project", priority: 0.9, changeFrequency: "monthly" },
  { path: "/project-details", priority: 0.7, changeFrequency: "monthly" },
  { path: "/team", priority: 0.6, changeFrequency: "yearly" },
  { path: "/team-details", priority: 0.5, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog-details", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
