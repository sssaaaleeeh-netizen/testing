import Link from "next/link";
import { ArrowLeft, Target, Heart, Award } from "lucide-react";

export const metadata = {
  title: "من نحن",
  description: "سيدال — منصة سعودية متخصصة في قوالب وأدوات إكسل الاحترافية بالعربي. نساعد الأفراد والشركات في المملكة العربية السعودية على إدارة أموالهم وأعمالهم بكفاءة.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          نبني أدوات إكسل احترافية تساعد الشركات بجميع أحجامها على توفير الوقت وتقليل الأخطاء واتخاذ قرارات أفضل — دون الحاجة لمعرفة معادلة واحدة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <Target size={22} className="text-blue-500" />,
            title: "مهمتنا",
            desc: "تبسيط عمليات الأعمال وجعلها أكثر كفاءة من خلال توفير أدوات إكسل جاهزة ومصممة باحترافية يمكن لأي شخص استخدامها فوراً.",
          },
          {
            icon: <Heart size={22} className="text-red-500" />,
            title: "من نخدم",
            desc: "الشركات الصغيرة والناشئات والمؤسسات الكبيرة والمستقلين والمحاسبين ومتخصصي الموارد البشرية — كل من يعمل بالبيانات ويريد العمل بذكاء.",
          },
          {
            icon: <Award size={22} className="text-amber-500" />,
            title: "وعدنا",
            desc: "كل أداة مختبرة، كل معادلة موثّقة، وكل منتج مصمم مع وضع المستخدم النهائي في الاعتبار. نقف خلف ما نبيعه.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">قصتنا</h2>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            وُلدت سيدال من واقع إحباط حقيقي. إدارة الأعمال تعني الغرق في جداول البيانات — تتبع الميزانية، الرواتب، المخزون، تقارير المبيعات — ومعظم الناس إما يبنون شيئاً فوضوياً من الصفر أو ينفقون الآلاف على برامج لا يستخدمون 10٪ منها.
          </p>
          <p>
            بدأنا بإنشاء هذه الأدوات لاستخدامنا الخاص. وبعد مشاركتها مع بعض الأصدقاء الذين يديرون أعمالهم الخاصة ورؤية مقدار الوقت الذي وفّرته لهم، قررنا بناء متجر احترافي وإتاحتها للجميع.
          </p>
          <p>
            كل نموذج في كتالوجنا مبني مع وضع سيناريوهات الأعمال الحقيقية في الاعتبار. اختبرناها في شركات فعلية، حسّنّاها بناءً على التغذية الراجعة، وجعلناها مصقولة بما يكفي لمشاركتها مع العملاء أو الإدارة العليا.
          </p>
          <p>
            اليوم، تعتمد مئات الشركات في المملكة العربية السعودية والمنطقة على أدوات سيدال. نفخر بذلك، ونواصل تطويرها.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          تصفح أدواتنا <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}
