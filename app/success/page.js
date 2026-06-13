"use client";
export const dynamic = "force-dynamic";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Download, Mail, ArrowLeft } from "lucide-react";
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
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle size={40} className="text-emerald-500" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">تمّت عملية الدفع بنجاح!</h1>
      <p className="text-gray-500 text-base mb-10 leading-relaxed">
        شكراً لك على شرائك. أدوات الإكسل الخاصة بك جاهزة للتحميل. كما أرسلنا لك بريداً إلكترونياً يتضمن روابط التحميل.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-right">
        {[
          {
            icon: <CheckCircle size={20} className="text-emerald-500" />,
            title: "١. تأكيد الدفع",
            desc: "تمّت معالجة دفعتك بنجاح.",
          },
          {
            icon: <Mail size={20} className="text-blue-500" />,
            title: "٢. إرسال البريد",
            desc: "تحقق من بريدك الإلكتروني لروابط التحميل.",
          },
          {
            icon: <Download size={20} className="text-violet-500" />,
            title: "٣. تحميل واستخدام",
            desc: "افتح الملف بإكسل وابدأ فوراً.",
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
          رقم الطلب: <span className="font-mono">{sessionId}</span>
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
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-all"
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
