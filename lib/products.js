export const currency = "ر.س";

export const categories = [
  { id: "personal-finance", name: "المالية الشخصية", icon: "💰" },
  { id: "investment", name: "الاستثمار", icon: "📈" },
  { id: "restaurant", name: "المطاعم والمقاهي", icon: "🍽️" },
  { id: "ecommerce", name: "التجارة الإلكترونية", icon: "🛒" },
];

export const products = [
  {
    id: "bank-loan-calculator",
    name: "حاسبة القروض ومقارنة البنوك",
    category: "personal-finance",
    price: 49,
    originalPrice: 99,
    description:
      "معظم الناس يختارون البنك بناءً على الأقرب من البيت، لا بناءً على APR الحقيقي. حاسبة مقارنة البنوك تبيّن الفرق بالأرقام — فرق قد يصل لـ 18,400 ريال.",
    longDescription:
      "نفس المبلغ. نفس المدة. فرق يصل لـ 18 ألف ريال. لأن APR الحقيقي يختلف من بنك لآخر، وهذه الأداة تكشف لك الفرق بوضوح. قارن بين عروض البنوك السعودية في ثوانٍ، واعرف كم ستوفر إذا اخترت البنك الأنسب.",
    features: [
      "مقارنة حتى 5 عروض بنكية في وقت واحد",
      "حساب APR الحقيقي لكل عرض",
      "إظهار الفرق الفعلي بالريال",
      "جدول سداد تفصيلي",
      "يعمل مع القروض الشخصية والعقارية",
      "نتائج فورية بدون معادلات",
    ],
    icon: "🏦",
    image: "/images/products/bank-calculator.png",
    badge: "الأكثر مبيعاً",
    badgeColor: "emerald",
    rating: 4.9,
    reviews: 214,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "personal-budget",
    name: "مخطط الميزانية الشخصية",
    category: "personal-finance",
    price: 49,
    originalPrice: null,
    description:
      "7 من كل 10 أشخاص بدون ميزانية واضحة. 90% لا يعرفون صافي ثروتهم الحقيقية. المشكلة ليست في الراتب — بل في النظام.",
    longDescription:
      "لماذا تختفي فلوسك كل شهر؟ مخطط الميزانية الشخصية يساعدك على تتبع كل ريال تنفقه، حساب صافي ثروتك الحقيقية، وبناء نظام مالي واضح يناسب حياتك. بدون تعقيد، بدون معادلات — فقط أدخل أرقامك واكتشف أين تذهب فلوسك.",
    features: [
      "تتبع الدخل والمصاريف الشهرية",
      "حساب صافي الثروة الحقيقية",
      "تصنيف المصاريف تلقائياً",
      "مقارنة الميزانية بالإنفاق الفعلي",
      "خطة ادخار شهرية",
      "رسوم بيانية واضحة للأنماط المالية",
    ],
    icon: "📊",
    image: "/images/products/personal-budget.png",
    badge: "جديد",
    badgeColor: "blue",
    rating: 4.8,
    reviews: 178,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "saudi-investor-bundle",
    name: "حزمة المستثمر السعودي",
    category: "investment",
    price: 149,
    originalPrice: 249,
    description:
      "كل ما تحتاجه لقرار استثماري صح: تحليل أسهم تداول، حاسبة عقارات، محفظة استثمار متكاملة، وحاسبة FIRE — كل الصيغ محققة آلياً، صفر أخطاء.",
    longDescription:
      "الحزمة الأشمل للمستثمر السعودي. تشمل: فارز أسهم تداول مع فحص شرعي وتحليل أساسي، حاسبة العقارات (Cap Rate, NOI, DSCR، شراء أم إيجار)، محفظة الاستثمار المتكاملة (أسهم + ذهب + عقار)، وحاسبة FIRE للتقاعد المبكر. كل الصيغ محققة آلياً — صفر أخطاء.",
    features: [
      "فارز أسهم تداول + فحص شرعي",
      "تحليل أساسي للأسهم",
      "حاسبة عقارات (Cap Rate, NOI, DSCR)",
      "مقارنة شراء أم إيجار بالأرقام",
      "محفظة استثمار (أسهم + ذهب + عقار)",
      "حاسبة FIRE للتقاعد المبكر",
    ],
    icon: "💼",
    image: "/images/products/saudi-investor.png",
    badge: "حزمة مميزة",
    badgeColor: "amber",
    rating: 5.0,
    reviews: 96,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "restaurant-tools",
    name: "أدوات إدارة المطعم والمقهى",
    category: "restaurant",
    price: 79,
    originalPrice: 149,
    description:
      "يشتغل كثير ويربح قليل؟ المشكلة في الأرقام، لا في العمل. أداة تعطيك food cost لكل طبق، هامش ربح واضح، نقطة تعادل محسوبة، وجدول ورديات منظم.",
    longDescription:
      "صاحب المطعم قبل الأداة: يسعّر بالحدس، ما يعرف food cost، يشتغل كثير يربح قليل. بعد الأداة: food cost لكل طبق، هامش ربح واضح، نقطة تعادل محسوبة، جدول ورديات منظم. أداة متكاملة لإدارة مطعمك أو مقهاك بأرقام حقيقية.",
    features: [
      "حساب food cost لكل طبق",
      "هامش ربح تلقائي",
      "نقطة التعادل المحسوبة",
      "جدول الورديات والموظفين",
      "تتبع المشتريات والمخزون",
      "تقرير الأرباح الشهري",
    ],
    icon: "🍽️",
    image: "/images/products/restaurant-tools.png",
    badge: "الأكثر طلباً",
    badgeColor: "violet",
    rating: 4.9,
    reviews: 143,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "ecommerce-tools",
    name: "أدوات التجارة الإلكترونية",
    category: "ecommerce",
    price: 79,
    originalPrice: null,
    description:
      "أي منتج يحقق 80% من ربحك؟ تحليل ABC يكشف المنتجات الذهبية — وتحليل RFM يبيّن من هم عملاؤك الحقيقيون.",
    longDescription:
      "أداة متكاملة لأصحاب المتاجر الإلكترونية. اكتشف المنتجات التي تحقق أكبر ربح بتحليل ABC، تعرّف على عملاءك الأكثر قيمة بتحليل RFM، أدر مخزونك بدقة، وضع خطة نمو مبنية على بيانات حقيقية.",
    features: [
      "تحليل ABC لتصنيف المنتجات",
      "تحليل RFM لتقسيم العملاء",
      "إدارة المخزون التفصيلية",
      "خطة نمو مبنية على البيانات",
      "تقرير المبيعات والأرباح",
      "مؤشرات الأداء الرئيسية",
    ],
    icon: "🛒",
    image: "/images/products/ecommerce-tools.png",
    badge: "الأكثر طلباً",
    badgeColor: "violet",
    rating: 4.8,
    reviews: 112,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getBadgeStyle(color) {
  const styles = {
    emerald: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
    amber: "bg-amber-100 text-amber-700",
  };
  return styles[color] || "bg-gray-100 text-gray-700";
}
