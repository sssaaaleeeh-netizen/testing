"use client";
import Link from "next/link";
import { Star, ShoppingCart, Download } from "lucide-react";
import { getBadgeStyle, currency } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
      {/* Card top visual */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute border-b border-gray-400" style={{ top: `${(i + 1) * 16}%`, left: 0, right: 0 }} />
          ))}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute border-r border-gray-400" style={{ left: `${(i + 1) * 12}%`, top: 0, bottom: 0 }} />
          ))}
        </div>
        <div className="relative z-10 text-5xl">{product.icon || "📊"}</div>
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle(product.badgeColor)}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews} تقييم)</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug hover:text-gray-600 transition-colors mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-gray-900">{product.price} {currency}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{product.originalPrice} {currency}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-all ${
              inCart
                ? "bg-emerald-100 text-emerald-700 cursor-default"
                : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
            disabled={inCart}
          >
            {inCart ? (
              <>
                <Download size={13} />
                تمت الإضافة
              </>
            ) : (
              <>
                <ShoppingCart size={13} />
                أضف للسلة
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
