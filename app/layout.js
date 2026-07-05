import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://seedaal.com"),
  title: {
    default: "سيدال | أدوات إكسل الاحترافية",
    template: "%s | سيدال",
  },
  description: "حمّل أدوات إكسل الاحترافية للأعمال بالعربي: مخططات الميزانية، تحليل الاستثمار، إدارة العقارات، أدوات الأعمال والمزيد.",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "سيدال",
    title: "سيدال | أدوات إكسل الاحترافية",
    description: "حمّل أدوات إكسل الاحترافية للأعمال بالعربي — تحميل فوري بعد الشراء.",
  },
  twitter: {
    card: "summary_large_image",
    title: "سيدال | أدوات إكسل الاحترافية",
    description: "حمّل أدوات إكسل الاحترافية للأعمال بالعربي — تحميل فوري بعد الشراء.",
  },
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
      </body>
    </html>
  );
}
