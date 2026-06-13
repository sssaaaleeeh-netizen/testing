"use client";
export const dynamic = "force-dynamic";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight, Star, Download, ShoppingCart,
  CheckCircle, Monitor, FileSpreadsheet, ChevronRight
} from "lucide-react";
import { getProductById, getBadgeStyle, categories, products, currency } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product?.id);

  if (!product) return notFound();

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-700 transition-colors">الرئيسية</Link>
        <ChevronRight size={12} />
        <Link href="/products" className="hover:text-gray-700 transition-colors">الأدوات</Link>
        <ChevronRight size={12} />
        <span className="text-gray-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left — visual */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl h-80 lg:h-auto flex items-center justify-center relative overflow-hidden border border-gray-100">
          <div className="absolute inset-0 opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute border-b border-gray-400" style={{ top: `${(i + 1) * 8}%`, left: 0, right: 0 }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute border-r border-gray-400" style={{ left: `${(i + 1) * 10}%`, top: 0, bottom: 0 }} />
            ))}
          </div>
          <div className="relative text-center">
            <div className="text-8xl mb-4">{product.icon || "📊"}</div>
            <div className="flex items-center gap-2 justify-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <FileSpreadsheet size={14} className="text-emerald-500" />
              <span className="text-xs font-medium text-gray-700">ملف .xlsx</span>
            </div>
          </div>
          {product.badge && (
            <span className={`absolute top-5 right-5 text-xs font-semibold px-3 py-1.5 rounded-full ${getBadgeStyle(product.badgeColor)}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Right — details */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <span>{category?.icon}</span>
            <span>{category?.name}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews} تقييم)</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.longDescription}</p>

          {/* Features */}
          <div className="mb-7">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">ما يشمله المنتج</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility */}
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-xl px-4 py-3 mb-7 border border-gray-100">
            <Monitor size={14} />
            <span>متوافق مع: {product.compatible}</span>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center gap-5 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{product.price} {currency}</span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">{product.originalPrice} {currency}</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
                وفّر {product.originalPrice - product.price} {currency}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => addToCart(product)}
              disabled={inCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                inCart
                  ? "bg-emerald-100 text-emerald-700 cursor-default"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {inCart ? (
                <><Download size={16} /> تمت الإضافة للسلة</>
              ) : (
                <><ShoppingCart size={16} /> أضف للسلة</>
              )}
            </button>
            {inCart && (
              <Link
                href="/cart"
                className="flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-gray-400 px-5 py-3.5 rounded-xl text-sm font-medium transition-all"
              >
                عرض السلة
              </Link>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
            <Download size={12} />
            تحميل فوري بعد الدفع · دفع آمن عبر Stripe
          </p>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">المزيد من {category?.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
