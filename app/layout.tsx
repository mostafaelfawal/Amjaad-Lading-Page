import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أمجاد للعقارات | أفضل شركة تطوير عقاري في الخليج",
  description:
    "شركة أمجاد للعقارات تأسست عام 1992 وتعد من الشركات الرائدة في مجال المقاولات والتطوير العقاري في الخليج. اكتشف مشاريعنا وخدماتنا المميزة.",
  keywords: [
    "أمجاد للعقارات",
    "شركة مقاولات",
    "تطوير عقاري",
    "مشاريع سكنية",
    "الخليج",
    "الدوحة",
    "عقارات قطر",
  ],
  authors: [{ name: "شركة أمجاد للعقارات" }],
  openGraph: {
    title: "أمجاد للعقارات | مشاريعنا المميزة في الخليج",
    description:
      "اكتشف مشاريعنا وخدماتنا العقارية في الدوحة وجميع أنحاء الخليج.",
    url: "https://your-domain.vercel.app", // ✳️ استبدلها برابط موقعك بعد الرفع
    siteName: "أمجاد للعقارات",
    locale: "ar_QA",
    type: "website",
    images: [
      {
        url: "/icon.png", // ✳️ ضع هنا صورة المعاينة للموقع
        width: 1200,
        height: 630,
        alt: "شركة أمجاد للعقارات",
      },
    ],
  },
  icons: {
    icon: "/icon.png", // ✳️ صورة الأيقونة
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
