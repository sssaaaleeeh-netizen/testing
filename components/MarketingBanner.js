"use client";

import Link from "next/link";
import ProductVisual from "./ProductVisual";
import { products } from "@/lib/products";

const ALL_IDS = [
  "personal-budget-planner",
  "loan-bank-comparison",
  "restaurant-management",
  "tadawul-stocks-analysis",
  "ecommerce-analytics",
  "business-docs-bundle",
  "rental-property-management",
  "engineering-project-bundle",
  "freelancer-tools",
  "vat-tax-planning",
  "retirement-fire-planner",
  "investment-portfolio",
];

const CARD_W = 248;
const CARD_H = 310;
const GAP = 14;

function BannerCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="banner-card"
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        display: "block",
        marginRight: GAP,
      }}
    >
      <ProductVisual product={product} />
    </Link>
  );
}

export default function MarketingBanner() {
  const prods = ALL_IDS.map(id => products.find(p => p.id === id)).filter(Boolean);
  // Triple for extra-smooth seamless loop on wide screens
  const tripled = [...prods, ...prods, ...prods];

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#050507 0%,#09090f 100%)",
        padding: "68px 0 72px",
        overflow: "hidden",
        fontFamily: "'Cairo','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @keyframes bannerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .banner-track {
          display: flex;
          width: fit-content;
          direction: ltr;
          animation: bannerScroll 40s linear infinite;
        }
        .banner-row:hover .banner-track {
          animation-play-state: paused;
        }
        .banner-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .banner-card:hover {
          transform: scale(1.04) translateY(-5px);
          box-shadow: 0 28px 56px rgba(0,0,0,0.65);
          position: relative;
          z-index: 10;
        }
      `}</style>

      {/* Header — RTL text */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 48,
          padding: "0 24px",
          direction: "rtl",
        }}
      >
        <div style={{ fontSize: 10, color: "#404050", letterSpacing: "3px", marginBottom: 14 }}>
          ✦ معاينة حية للأدوات ✦
        </div>
        <h2 style={{ fontSize: 30, fontWeight: 900, color: "white", marginBottom: 10, lineHeight: 1.3 }}>
          شاهد ماذا ستحصل عليه
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", maxWidth: 360, margin: "0 auto 28px", lineHeight: 1.7 }}>
          24 أداة احترافية بالعربية الكاملة — محققة ومجربة، جاهزة للتحميل الفوري
        </p>
        <Link
          href="/products"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "10px 24px", borderRadius: 12,
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}
        >
          تصفح جميع الأدوات ←
        </Link>
      </div>

      {/* Single infinite scrolling row — force LTR so overflow hides on the right */}
      <div
        className="banner-row"
        style={{
          overflow: "hidden",
          height: CARD_H,
          direction: "ltr",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:       "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="banner-track">
          {tripled.map((product, i) => (
            <BannerCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
