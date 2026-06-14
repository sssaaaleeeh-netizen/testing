"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { Search, Wallet, TrendingUp, Home, Building2, Wrench, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const CATEGORY_ICONS = {
  "personal-finance": <Wallet size={13} strokeWidth={2} />,
  "investment":       <TrendingUp size={13} strokeWidth={2} />,
  "real-estate":      <Home size={13} strokeWidth={2} />,
  "business":         <Building2 size={13} strokeWidth={2} />,
  "specialized":      <Wrench size={13} strokeWidth={2} />,
  "life-events":      <Heart size={13} strokeWidth={2} />,
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      query === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">جميع أدوات إكسل</h1>
        <p className="text-gray-500 text-sm">
          {products.length} أداة إكسل احترافية بالعربي — تحميل فوري بعد الشراء
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن أداة..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pr-9 pl-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
          />
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
              activeCategory === "all"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {CATEGORY_ICONS[cat.id]}
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">لا توجد أدوات تطابق بحثك.</p>
          <button onClick={() => { setQuery(""); setActiveCategory("all"); }} className="mt-4 text-sm text-gray-600 underline">
            مسح الفلاتر
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
