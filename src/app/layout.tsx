import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/layout/Navbar";
import Footer from "@/app/layout/Footer";
import SmoothScroll from "@/components/sections/SmoothScroll";
import "./globals.css";

/* ✅ Airtable-style clean SaaS font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AZ Commerce | The All-in-One Commerce Operating System",
  description:
    "Run your store, marketplace, and delivery business from one platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}