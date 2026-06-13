"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, FileSpreadsheet } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <FileSpreadsheet size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">سيدال</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">الرئيسية</Link>
            <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">جميع الأدوات</Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">من نحن</Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">تواصل معنا</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">السلة</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm text-gray-700 hover:text-gray-900 py-1" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
          <Link href="/products" className="block text-sm text-gray-700 hover:text-gray-900 py-1" onClick={() => setMenuOpen(false)}>جميع الأدوات</Link>
          <Link href="/about" className="block text-sm text-gray-700 hover:text-gray-900 py-1" onClick={() => setMenuOpen(false)}>من نحن</Link>
          <Link href="/contact" className="block text-sm text-gray-700 hover:text-gray-900 py-1" onClick={() => setMenuOpen(false)}>تواصل معنا</Link>
        </div>
      )}
    </nav>
  );
}
