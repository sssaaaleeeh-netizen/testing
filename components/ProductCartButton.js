"use client";
import Link from "next/link";
import { Download, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCartButton({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
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
  );
}
