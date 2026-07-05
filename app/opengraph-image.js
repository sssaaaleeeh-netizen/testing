import { ImageResponse } from "next/og";
import { loadCairoFont } from "@/lib/og-font";
import { products } from "@/lib/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadCairoFont();
  const tags = ["التمويل الشخصي", "الاستثمار", "العقارات", "الأعمال", "القطاعات", "الحياة"];

  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Cairo", padding: "60px 80px" }}>

      <span style={{ fontSize: 100, fontWeight: 700, color: "#34d399", marginBottom: 16 }}>سيدال</span>
      <span style={{ fontSize: 32, color: "#94a3b8", marginBottom: 52 }}>أدوات إكسل الاحترافية بالعربي</span>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", direction: "rtl" }}>
        {tags.map((tag) => (
          <div key={tag} style={{ background: "#1e3a5f", borderRadius: 28, padding: "10px 22px", fontSize: 22, color: "#93c5fd" }}>
            {tag}
          </div>
        ))}
      </div>

      <span style={{ fontSize: 20, color: "#475569", marginTop: 40 }}>{products.length} أداة جاهزة للتحميل</span>
    </div>,
    { ...size, fonts }
  );
}
