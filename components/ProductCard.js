import Link from "next/link";
import { Star } from "lucide-react";
import { getBadgeStyle, currency } from "@/lib/products";
import ProductVisual from "./ProductVisual";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <ProductVisual product={product} />
        {product.badge && (
          <span className={`absolute top-3 right-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle(product.badgeColor)}`}>
            {product.badge}
          </span>
        )}
      </div>

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

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-gray-900">{product.price} {currency}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{product.originalPrice} {currency}</span>
            )}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
