import { posts, services } from "@/lib/data";

export default function sitemap() {
  const base = "https://inkvary.com";
  const staticRoutes = ["", "/about", "/services", "/blog", "/contact", "/privacy-policy", "/terms"].map((path) => ({
    url: `${base}${path}`,
  }));
  return [
    ...staticRoutes,
    ...services.map((item) => ({ url: `${base}/services/${item.slug}` })),
    ...posts.map((item) => ({ url: `${base}/blog/${item.slug}` })),
  ];
}
