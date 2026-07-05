import { Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const GA_ID = "G-LDZT6WRSN1";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://seedaal.store"),
  title: {
    default: "سيدال | أدوات إكسل الاحترافية",
    template: "%s | سيدال",
  },
  description: "حمّل أدوات إكسل الاحترافية للأعمال بالعربي: مخططات الميزانية، تحليل الاستثمار، إدارة العقارات، أدوات الأعمال والمزيد.",
  verification: {
    google: "ykK1XuNLjqTWFWbVkFnx3O43RpAv0wekYAimLtQ1ER4",
  },
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
