"use client";
export const dynamic = "force-dynamic";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      {/* Success icon */}
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle size={40} className="text-emerald-500" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
      <p className="text-gray-500 text-base mb-10 leading-relaxed">
        Thank you for your purchase. Your Excel tools are ready to download. We've also sent you a confirmation email with your download links.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-left">
        {[
          {
            icon: <CheckCircle size={20} className="text-emerald-500" />,
            title: "1. Payment confirmed",
            desc: "Your payment was processed successfully.",
          },
          {
            icon: <Mail size={20} className="text-blue-500" />,
            title: "2. Email sent",
            desc: "Check your inbox for your download links.",
          },
          {
            icon: <Download size={20} className="text-violet-500" />,
            title: "3. Download & use",
            desc: "Open with Excel and start right away.",
          },
        ].map((step) => (
          <div key={step.title} className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="mb-3">{step.icon}</div>
            <div className="font-semibold text-sm text-gray-900 mb-1">{step.title}</div>
            <div className="text-xs text-gray-500">{step.desc}</div>
          </div>
        ))}
      </div>

      {sessionId && (
        <p className="text-xs text-gray-400 mb-8">
          Order reference: <span className="font-mono">{sessionId}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/products"
          className="flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          Browse More Tools <ArrowRight size={16} />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-all"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
