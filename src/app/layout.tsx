import { Noto_Nastaliq_Urdu } from "next/font/google";
import { rootMetadata } from "@/config/metadata";
import "./globals.css";

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={nastaliq.variable}>
      <body className={`${nastaliq.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
