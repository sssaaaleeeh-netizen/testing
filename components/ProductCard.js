"use client";
import Link from "next/link";
import { Star, ShoppingCart, Download } from "lucide-react";
import { getBadgeStyle, currency } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
      {/* Card top visual */}
      <div className="relative h-48 overflow-hidden">
        <ProductVisual product={product} />
        {product.badge && (
          <span className={`absolute top-3 right-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle(product.badgeColor)}`}>
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
              <><Download size={13} />تمت الإضافة</>
            ) : (
              <><ShoppingCart size={13} />أضف للسلة</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
