import { ImageResponse } from "next/og";
import { getProductById, currency } from "@/lib/products";
import { loadCairoFont } from "@/lib/og-font";

export const dynamic = "force-dynamic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  const fonts = await loadCairoFont();
  const bg = { background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" };

  if (!product) {
    return new ImageResponse(
      <div style={{ ...bg, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cairo" }}>
        <span style={{ fontSize: 80, fontWeight: 700, color: "#34d399" }}>سيدال</span>
      </div>,
      { ...size, fonts }
    );
  }

  const fontSize = product.name.length > 28 ? 52 : product.name.length > 20 ? 60 : 68;

  return new ImageResponse(
    <div style={{ ...bg, width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "56px 80px", fontFamily: "Cairo", direction: "rtl" }}>

      {/* Brand bar */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: "#34d399" }}>سيدال</span>
        <span style={{ width: 1, height: 20, background: "#334155", margin: "0 16px" }} />
        <span style={{ fontSize: 18, color: "#64748b" }}>أدوات إكسل الاحترافية</span>
      </div>

      {/* Product name */}
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <span style={{ fontSize, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.4 }}>
          {product.name}
        </span>
      </div>

      {/* Price + rating */}
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", background: "#065f46", borderRadius: 14, padding: "12px 24px", gap: 10 }}>
          <span style={{ fontSize: 36, fontWeight: 700, color: "#ffffff" }}>{product.price}</span>
          <span style={{ fontSize: 22, color: "#6ee7b7" }}>{currency}</span>
          {product.originalPrice && (
            <span style={{ fontSize: 20, color: "#6ee7b7", textDecoration: "line-through", marginRight: 8 }}>
              {product.originalPrice} {currency}
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 28, color: "#fbbf24" }}>★</span>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#f1f5f9" }}>{product.rating}</span>
          <span style={{ fontSize: 20, color: "#64748b" }}>({product.reviews})</span>
        </div>
      </div>

    </div>,
    { ...size, fonts }
  );
}
