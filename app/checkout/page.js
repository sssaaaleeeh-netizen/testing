"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { Shield, Lock, ArrowRight, FileSpreadsheet } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, total, itemCount } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Could not create checkout session. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  if (itemCount === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-gray-500 mb-6">Your cart is empty.</p>
        <Link href="/products" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors">
          Browse Products <ArrowRight size={15} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Order review */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-5">Order Review</h2>
          <div className="space-y-3 mb-6">
            {cart.map((p) => (
              <div key={p.id} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <span className="text-xl">{p.icon || "📊"}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <FileSpreadsheet size={11} className="text-gray-400" />
                    <span className="text-xs text-gray-400">Digital download</span>
                  </div>
                </div>
                <span className="font-semibold text-gray-900 flex-shrink-0">${p.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between mb-2 text-sm text-gray-600">
              <span>Subtotal ({itemCount} item{itemCount > 1 ? "s" : ""})</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span>Tax</span>
              <span>Calculated at payment</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-5">Payment</h2>
          <div className="bg-white border border-gray-100 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6 text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <Lock size={15} className="text-blue-500 flex-shrink-0" />
              <span>You'll be securely redirected to Stripe to complete payment.</span>
            </div>

            <div className="space-y-3 mb-8 text-sm text-gray-600">
              {[
                "Accepted: Visa, Mastercard, Amex, and more",
                "256-bit SSL encryption",
                "No card details stored on our servers",
                "Instant download after successful payment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Shield size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl p-4 mb-5">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all ${
                loading
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  Redirecting to Stripe...
                </>
              ) : (
                <>
                  <Lock size={16} />
                  Pay ${total} Securely
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
