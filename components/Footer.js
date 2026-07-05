import Link from "next/link";
import { FileSpreadsheet, Mail, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <FileSpreadsheet size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">سيدال</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              أدوات إكسل احترافية ونماذج جداول بيانات جاهزة للأعمال بجميع أحجامها. حمّل، أدخل بياناتك، ووفّر ساعات من العمل.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:hello@seedaal.com" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Mail size={14} className="text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Globe size={14} className="text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <ExternalLink size={14} className="text-gray-600" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">الأدوات</h4>
            <ul className="space-y-2.5">
              {["التمويل الشخصي والادخار", "الاستثمار والأسواق المالية", "العقارات", "الأعمال والشركات", "قطاعات متخصصة", "الحياة والمناسبات"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">الشركة</h4>
            <ul className="space-y-2.5">
              {[
                { label: "من نحن", href: "/about" },
                { label: "تواصل معنا", href: "/contact" },
                { label: "سياسة الخصوصية", href: "/privacy" },
                { label: "سياسة الاسترجاع", href: "/refund" },
                { label: "شروط الخدمة", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} سيدال. جميع الحقوق محفوظة.</p>
          <p className="text-xs text-gray-400">مدفوعات آمنة عبر MyFatoorah 🔒</p>
        </div>
      </div>
    </footer>
  );
}
