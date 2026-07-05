export default function robots() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://seedaal.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout", "/cart", "/success"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
