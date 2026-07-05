import ProductsFilter from "@/components/ProductsFilter";
import { products, categories } from "@/lib/products";

const BASE = "https://seedaal.store";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "جميع الأدوات", item: `${BASE}/products` },
  ],
};

export const metadata = {
  title: "جميع أدوات إكسل",
  description: `تصفّح ${products.length} أداة إكسل احترافية بالعربي — مخططات الميزانية، تحليل الاستثمار، إدارة الأعمال، العقارات وأكثر. تحميل فوري بعد الشراء.`,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "جميع أدوات إكسل | سيدال",
    description: `${products.length} أداة إكسل احترافية بالعربي — تحميل فوري بعد الشراء.`,
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">جميع أدوات إكسل</h1>
          <p className="text-gray-500 text-sm">
            {products.length} أداة إكسل احترافية بالعربي — تحميل فوري بعد الشراء
          </p>
        </div>
        <ProductsFilter products={products} categories={categories} />
      </div>
    </>
  );
}
