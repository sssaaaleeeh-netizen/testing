import Link from "next/link";
import { FileSpreadsheet, Mail, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <FileSpreadsheet size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Seedaal</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Professional Excel tools and spreadsheet templates for businesses of all sizes. Download, fill in, and save hours of work.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:hello@seedaal.com" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Mail size={14} className="text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Twitter size={14} className="text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Linkedin size={14} className="text-gray-600" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {["Financial Management", "HR & Payroll", "Inventory & Stock", "Project Management", "Sales & CRM", "Data & Analytics"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Seedaal. All rights reserved.</p>
          <p className="text-xs text-gray-400">Secure payments powered by Stripe 🔒</p>
        </div>
      </div>
    </footer>
  );
}
