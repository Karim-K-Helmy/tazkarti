import type { Metadata } from "next";
import type { ReactNode } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Tazkarti | منصة حجز تذاكر الفعاليات",
  description: "منصة عربية عصرية لحجز تذاكر الحفلات والمؤتمرات والمباريات والفعاليات.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/icons/titlebar-ticket-icon.svg", type: "image/svg+xml" },
      { url: "/assets/icons/titlebar-ticket-icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/assets/icons/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
