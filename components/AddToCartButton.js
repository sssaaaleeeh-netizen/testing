"use client";
import { ShoppingCart, Download } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
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
  );
}
