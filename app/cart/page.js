"use client";
export const dynamic = "force-dynamic";
import Link from "next/link";
import { Trash2, ShoppingCart, ArrowLeft, FileSpreadsheet, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { currency } from "@/lib/products";

export default function CartPage() {
  const { cart, removeFromCart, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShoppingCart size={28} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">سلتك فارغة</h1>
        <p className="text-gray-500 text-sm mb-8">تصفح أدوات الإكسل الاحترافية وأضف ما تريده إلى سلتك.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          تصفح الأدوات <ArrowLeft size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        سلتك ({itemCount} {itemCount === 1 ? "منتج" : "منتجات"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-colors">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                <span className="text-2xl">{product.icon || "📊"}</span>
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${product.id}`} className="font-medium text-sm text-gray-900 hover:text-gray-600 transition-colors line-clamp-2">
                  {product.name}
                </Link>
                <div className="flex items-center gap-1.5 mt-1">
                  <FileSpreadsheet size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-400">.xlsx — تحميل فوري</span>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="font-bold text-gray-900">{product.price} {currency}</span>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-5">ملخص الطلب</h2>
            <div className="space-y-2.5 mb-5">
              {cart.map((p) => (
                <div key={p.id} className="flex justify-between text-sm">
                  <span className="text-gray-600 truncate ml-4 flex-1">{p.name}</span>
                  <span className="text-gray-900 font-medium flex-shrink-0">{p.price} {currency}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">الإجمالي</span>
                <span className="font-bold text-xl text-gray-900">{total} {currency}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors mb-3"
            >
              المتابعة للدفع <ArrowLeft size={16} />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center w-full text-gray-500 text-sm py-2 hover:text-gray-700 transition-colors"
            >
              مواصلة التسوق
            </Link>
            <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Shield size={12} />
              دفع آمن · MyFatoorah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
