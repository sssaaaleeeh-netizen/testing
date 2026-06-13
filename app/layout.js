import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  title: "سيدال — أدوات إكسل الاحترافية",
  description: "حمّل أدوات إكسل الاحترافية للأعمال: مخططات الميزانية، حاسبات الرواتب، أنظمة المخزون، متتبع المبيعات والمزيد.",
  keywords: "قوالب اكسل, ادوات اكسل, نماذج اعمال, تحميل اكسل, مخطط ميزانية, حاسبة رواتب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
