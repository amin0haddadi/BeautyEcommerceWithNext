import type { Metadata } from "next";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "بی‌شاپ - زیبایی و مراقبت",
    template: "%s | بی‌شاپ",
  },
  description:
    "پوست خود را با محصولات آرایشی بدون سموم تغذیه کنید. محصولات زیبایی و مراقبت حرفه‌ای با پیشنهادهایی که نمی‌توانید رد کنید.",
  keywords: [
    "زیبایی",
    "لوازم آرایشی",
    "مراقبت پوست",
    "آرایش",
    "مراقبت مو",
    "عطر",
    "اسپا",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={nastaliq.variable}>
      <body className={`${nastaliq.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}


