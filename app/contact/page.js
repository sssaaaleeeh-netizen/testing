import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata = {
  title: "تواصل معنا",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">تواصل معنا</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          هل لديك سؤال عن منتج، تحتاج أداة إكسل مخصصة، أو تواجه مشكلة في التحميل؟ نحن هنا للمساعدة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-5">
          <h2 className="font-semibold text-gray-900 text-lg">كيف تتواصل معنا</h2>
          {[
            {
              icon: <Mail size={18} className="text-blue-500" />,
              title: "البريد الإلكتروني",
              value: "hello@seedaal.com",
              desc: "نردّ على جميع الرسائل خلال 24 ساعة.",
            },
            {
              icon: <Clock size={18} className="text-amber-500" />,
              title: "وقت الاستجابة",
              value: "خلال 24 ساعة",
              desc: "من الأحد إلى الخميس، 9 صباحاً – 6 مساءً.",
            },
            {
              icon: <MessageSquare size={18} className="text-emerald-500" />,
              title: "أدوات مخصصة",
              value: "نبني حلول إكسل مخصصة",
              desc: "هل تحتاج حلاً مخصصاً؟ تواصل معنا للحصول على عرض سعر.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                {item.icon}
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-700 font-medium mt-0.5">{item.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-2xl p-7">
          <h2 className="font-semibold text-gray-900 mb-5">أرسل لنا رسالة</h2>
          <form action="mailto:hello@seedaal.com" method="post" className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">الاسم</label>
              <input
                type="text"
                name="name"
                required
                placeholder="اسمك الكامل"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">الموضوع</label>
              <select
                name="subject"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              >
                <option>سؤال عن منتج</option>
                <option>مشكلة في التحميل</option>
                <option>طلب أداة إكسل مخصصة</option>
                <option>سؤال عن الفاتورة</option>
                <option>أخرى</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">الرسالة</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="أخبرنا كيف يمكننا مساعدتك..."
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
