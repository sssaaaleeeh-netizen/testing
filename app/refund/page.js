export const metadata = { title: "سياسة الاسترجاع" };

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">سياسة الاسترجاع</h1>
      <p className="text-sm text-gray-400 mb-10">آخر تحديث: يونيو 2025</p>
      <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">سياسة المنتجات الرقمية</h2>
          <p>نظراً لأن منتجاتنا ملفات رقمية تصبح متاحة فور الشراء، لا نقدم عموماً استرجاع الأموال. بمجرد تحميل الملف، لا يمكننا التحقق من حذفه من جهازك.</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">حالات الاسترجاع المقبولة</h2>
          <p>سنعيد المبلغ كاملاً في الحالات التالية:</p>
          <ul className="list-disc pr-5 space-y-1 mt-2">
            <li>الملف تالف ولا يمكن فتحه.</li>
            <li>المنتج لا يتطابق بشكل كبير مع وصفه.</li>
            <li>تم خصم المبلغ ولم تستلم رابط التحميل.</li>
            <li>حدوث تكرار في الخصم بسبب خطأ تقني.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">كيفية طلب الاسترجاع</h2>
          <p>راسلنا على <a href="mailto:hello@seedaal.com" className="text-gray-900 underline">hello@seedaal.com</a> خلال 7 أيام من الشراء مع رقم الطلب وسبب الطلب. نستهدف الرد خلال 24 ساعة.</p>
        </section>
      </div>
    </div>
  );
}
