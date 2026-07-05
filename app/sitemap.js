import { products } from "@/lib/products";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://seedaal.com";

  const staticRoutes = [
    { url: base, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
