import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Seedaal — Professional Excel Tools & Templates",
  description:
    "Download professional Excel spreadsheet tools for business. Budget planners, payroll calculators, inventory systems, sales trackers, and more.",
  keywords: "excel templates, spreadsheet tools, business templates, excel download, budget planner, payroll calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
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
