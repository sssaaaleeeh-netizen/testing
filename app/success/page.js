"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Download, ArrowLeft, XCircle, Loader2, FileSpreadsheet } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";

function SuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const success = searchParams.get("success"); // Paymob sends "true"/"false"
  const paymentId = searchParams.get("id");
  const { clearCart } = useCart();

  const [productIds, setProductIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const isPaid = status === "paid" || success === "true";

  useEffect(() => {
    if (!isPaid) { setLoading(false); return; }
    clearCart();

    if (!paymentId) { setLoading(false); return; }

    fetch(`/api/payment?id=${paymentId}`)
      .then(r => r.json())
      .then(data => {
        if (data.productIds) setProductIds(data.productIds);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isPaid, paymentId]);

  // ─── Failed Payment ───────────────────────────────────────────
  if (!isPaid) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <XCircle size={40} className="text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">لم تتم عملية الدفع</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          {status === "failed"
            ? "فشلت عملية الدفع. يرجى التحقق من بيانات بطاقتك والمحاولة مجدداً."
            : "تم إلغاء عملية الدفع. يمكنك المحاولة مجدداً في أي وقت."}
        </p>
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          العودة للسلة والمحاولة مجدداً <ArrowLeft size={16} />
        </Link>
      </div>
    );
  }

  // ─── Success Page ─────────────────────────────────────────────
  const products = productIds.map(id => getProductById(id)).filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      {/* Icon */}
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-emerald-500" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">تمّت عملية الدفع بنجاح!</h1>
      <p className="text-gray-500 text-sm mb-10 leading-relaxed">
        شكراً لثقتك — أدواتك جاهزة للتحميل الفوري أدناه.
      </p>

      {/* Download Section */}
      {loading ? (
        <div className="flex items-center justify-center gap-2 text-gray-400 py-10">
          <Loader2 size={20} className="animate-spin" />
          <span className="text-sm">جارٍ تجهيز الملفات...</span>
        </div>
      ) : products.length > 0 ? (
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-5 text-right">ملفاتك جاهزة للتحميل</h2>
          <div className="flex flex-col gap-3">
            {products.map(product => (
              <a
                key={product.id}
                href={`/api/download?product=${product.id}&payment=${paymentId}`}
                className="flex items-center justify-between gap-4 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-2xl p-5 transition-all group text-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                    <FileSpreadsheet size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{product.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">ملف Excel — .xlsx</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex-shrink-0">
                  <Download size={14} />
                  تحميل
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-5">
            ⚠️ احتفظ بهذه الروابط — الملفات متاحة مباشرةً بعد الدفع.
          </p>
        </div>
      ) : (
        /* Fallback if productIds couldn't be fetched */
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-right">
          <div className="font-semibold text-amber-800 text-sm mb-1">الملفات ستُرسَل لبريدك الإلكتروني</div>
          <div className="text-xs text-amber-600">
            رقم الطلب: <span className="font-mono">{paymentId}</span>
          </div>
        </div>
      )}

      {paymentId && (
        <p className="text-xs text-gray-400 mb-8">
          رقم الطلب: <span className="font-mono">{paymentId}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/products"
          className="flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          تصفح المزيد من الأدوات <ArrowLeft size={16} />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl text-sm font-medium hover:border-gray-400 transition-all"
        >
          الذهاب للرئيسية
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">جارٍ التحميل...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
