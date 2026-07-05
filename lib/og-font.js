export async function loadCairoFont() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; Next.js)" } }
    ).then((r) => r.text());

    const urls = [...css.matchAll(/src: url\(([^)]+)\) format\('woff2'\)/g)].map((m) => m[1]);
    if (!urls.length) return [];

    const buffers = await Promise.all(urls.map((u) => fetch(u).then((r) => r.arrayBuffer())));
    return buffers.map((data) => ({ name: "Cairo", data, weight: 700, style: "normal" }));
  } catch {
    return [];
  }
}
