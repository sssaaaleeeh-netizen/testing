"use client";

import Link from "next/link";
import ProductVisual from "./ProductVisual";
import { products } from "@/lib/products";

const ROW1_IDS = [
  "personal-budget-planner",
  "loan-bank-comparison",
  "restaurant-management",
  "tadawul-stocks-analysis",
  "ecommerce-analytics",
  "business-docs-bundle",
];
const ROW2_IDS = [
  "rental-property-management",
  "engineering-project-bundle",
  "freelancer-tools",
  "vat-tax-planning",
  "retirement-fire-planner",
  "investment-portfolio",
];

const CARD_W = 252;
const CARD_H = 316;
const GAP = 14;

function BannerCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      style={{
        width: CARD_W, height: CARD_H,
        flexShrink: 0, borderRadius: 18,
        overflow: "hidden", position: "relative",
        display: "block",
        marginInlineEnd: GAP,
      }}
      className="banner-card"
    >
      <ProductVisual product={product} />
    </Link>
  );
}

function ScrollRow({ ids, reverse = false }) {
  const prods = ids.map(id => products.find(p => p.id === id)).filter(Boolean);
  const doubled = [...prods, ...prods];
  const cls = reverse ? "scroll-track scroll-track-rev" : "scroll-track";

  return (
    <div
      className="scroll-row"
      style={{
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}
    >
      <div className={cls} style={{ display: "flex", width: "fit-content" }}>
        {doubled.map((product, i) => (
          <BannerCard key={`${product.id}-${i}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function MarketingBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg,#050507 0%,#09090f 100%)",
        padding: "68px 0 72px",
        overflow: "hidden",
        direction: "rtl",
        fontFamily: "'Cairo','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .scroll-track {
          animation: scrollLeft 30s linear infinite;
        }
        .scroll-track-rev {
          animation: scrollRight 34s linear infinite;
        }
        .scroll-row:hover .scroll-track,
        .scroll-row:hover .scroll-track-rev {
          animation-play-state: paused;
        }
        .banner-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .banner-card:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.6);
          z-index: 10;
          position: relative;
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 48,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: "#404050",
            letterSpacing: "3px",
            marginBottom: 14,
          }}
        >
          ✦ معاينة حية للأدوات ✦
        </div>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: "white",
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          شاهد ماذا ستحصل عليه
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            maxWidth: 360,
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}
        >
          24 أداة احترافية بالعربية الكاملة — محققة ومجربة، جاهزة للتحميل الفوري
        </p>
        <Link
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "10px 24px",
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          تصفح جميع الأدوات ←
        </Link>
      </div>

      {/* Two scrolling rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <ScrollRow ids={ROW1_IDS} />
        <ScrollRow ids={ROW2_IDS} reverse />
      </div>
    </section>
  );
}
