export const metadata = { title: "سياسة الخصوصية", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">سياسة الخصوصية</h1>
      <p className="text-sm text-gray-400 mb-10">آخر تحديث: يونيو 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">المعلومات التي نجمعها</h2>
          <p>عند إجراء عملية شراء، نجمع اسمك وعنوان بريدك الإلكتروني ومعلومات الدفع. تتم معالجة بيانات الدفع بالكامل عبر Stripe — لا نحتفظ أبداً بتفاصيل بطاقتك.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">كيف نستخدم معلوماتك</h2>
          <p>نستخدم بريدك الإلكتروني فقط لإرسال تأكيد الشراء وروابط التحميل. لا نبيع معلوماتك الشخصية أو نشاركها أو نؤجرها لأطراف ثالثة.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">ملفات تعريف الارتباط (Cookies)</h2>
          <p>نستخدم ملفات تعريف ارتباط محدودة للحفاظ على سلة التسوق عبر زيارات الصفحات. لا نستخدم ملفات تتبع أو إعلانات.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">تواصل معنا</h2>
          <p>لأي استفسارات تتعلق بالخصوصية، راسلنا على <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
