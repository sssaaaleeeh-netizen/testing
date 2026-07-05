import { products } from "@/lib/products";

const BASE = "https://seedaal.store";

export default function sitemap() {
  const now = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    { url: BASE,                       changeFrequency: "weekly",  priority: 1.0, lastModified: now },
    { url: `${BASE}/products`,         changeFrequency: "weekly",  priority: 0.9, lastModified: now },
    { url: `${BASE}/about`,            changeFrequency: "yearly",  priority: 0.5, lastModified: now },
    { url: `${BASE}/contact`,          changeFrequency: "yearly",  priority: 0.4, lastModified: now },
    { url: `${BASE}/privacy`,          changeFrequency: "yearly",  priority: 0.3, lastModified: now },
    { url: `${BASE}/terms`,            changeFrequency: "yearly",  priority: 0.3, lastModified: now },
    { url: `${BASE}/refund`,           changeFrequency: "yearly",  priority: 0.3, lastModified: now },
  ];

  const productRoutes = products.map((p) => ({
    url: `${BASE}/products/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: now,
  }));

  return [...staticRoutes, ...productRoutes];
}
