export const metadata = { title: "شروط الخدمة", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">شروط الخدمة</h1>
      <p className="text-sm text-gray-400 mb-10">آخر تحديث: يونيو 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">الترخيص</h2>
          <p>عند شراء منتج من سيدال، تحصل على ترخيص لمستخدم واحد. يمكنك استخدام الملف للاستخدام الشخصي أو التجاري. لا يجوز لك إعادة بيع الملف أو توزيعه أو مشاركته مع أشخاص لم يشتروه.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">الملكية الفكرية</h2>
          <p>جميع المنتجات والتصاميم والمحتويات على هذا الموقع مملوكة لسيدال. يُحظر النسخ أو التوزيع غير المصرح به.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">إخلاء المسؤولية</h2>
          <p>تُقدَّم أدواتنا كما هي. بينما نبذل قصارى جهدنا لضمان الدقة، لسنا مسؤولين عن أي قرارات مالية أو تجارية تُتخذ بناءً على البيانات المدخلة في جداول البيانات الخاصة بنا.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">تواصل معنا</h2>
          <p>للاستفسارات: <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
