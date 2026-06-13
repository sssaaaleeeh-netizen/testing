import Link from "next/link";
import { ArrowRight, Download, Shield, Zap, Users, Star, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const featuredProducts = products.filter((p) =>
  ["budget-planner-pro", "inventory-management", "payroll-calculator", "kpi-dashboard"].includes(p.id)
);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gray-50 to-transparent rounded-full opacity-60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={12} className="text-amber-500" />
            Professional Excel Tools — Ready to Download
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Spreadsheets that work
            <br />
            <span className="text-gray-400">as hard as you do</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional Excel tools for business finance, HR, inventory, sales, and analytics. Buy once, download instantly, use forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Browse All Tools
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#categories"
              className="flex items-center gap-2 text-gray-600 px-7 py-3.5 rounded-xl text-sm font-medium hover:text-gray-900 border border-gray-200 hover:border-gray-300 transition-all"
            >
              Explore by Category
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-2xl mx-auto mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "500+", label: "Happy customers" },
            { value: "8", label: "Ready-to-use tools" },
            { value: "4.8★", label: "Average rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Seedaal */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why choose Seedaal?</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Everything you need is already built in — just download and start working.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={22} className="text-amber-500" />,
                title: "Instant download",
                desc: "Buy once and download immediately. Your files are ready the moment payment is confirmed.",
              },
              {
                icon: <Shield size={22} className="text-emerald-500" />,
                title: "No formulas to write",
                desc: "All calculations are pre-built. Just enter your data and everything updates automatically.",
              },
              {
                icon: <Users size={22} className="text-blue-500" />,
                title: "Built for all business sizes",
                desc: "Whether you're a solo freelancer or a 200-person company — our tools scale with you.",
              },
              {
                icon: <Download size={22} className="text-violet-500" />,
                title: "Works with all Excel versions",
                desc: "Compatible with Excel 2016, 2019, 2021, and Microsoft 365. No add-ins required.",
              },
              {
                icon: <Star size={22} className="text-amber-500" />,
                title: "Professionally designed",
                desc: "Clean layouts and presentation-ready reports you can share with clients or management.",
              },
              {
                icon: <ArrowRight size={22} className="text-gray-500" />,
                title: "Free updates forever",
                desc: "Buy a tool and get all future improvements included — we keep updating based on feedback.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Shop by category</h2>
              <p className="text-gray-500 text-sm">Find the right tool for your business needs</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="flex flex-col items-center gap-2.5 bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-300 hover:shadow-md transition-all group text-center"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-medium text-gray-700 leading-snug">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Best sellers</h2>
              <p className="text-gray-500 text-sm">Our most popular tools, trusted by hundreds of businesses</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-7 py-3 rounded-xl text-sm font-medium transition-all"
            >
              See all 8 tools <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / Testimonials */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">What our customers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                role: "Finance Manager, Retail Co.",
                text: "The Budget Planner Pro saved our team at least 10 hours per month. The formulas are rock solid and the dashboard is beautiful.",
              },
              {
                name: "Ahmed K.",
                role: "Operations Director, SME",
                text: "I was skeptical at first but the Inventory Management sheet is incredibly powerful. We caught stock issues we didn't even know existed.",
              },
              {
                name: "Laura D.",
                role: "HR Lead, Tech Startup",
                text: "Payroll was a nightmare before this. Now it takes 30 minutes instead of a full day. Worth every penny.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-4 sm:mx-6 mb-8 rounded-3xl bg-gray-900 text-white py-16 px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to work smarter?</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
          Join hundreds of businesses already saving time with Seedaal tools. Download once, use forever.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          Browse All Tools <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
