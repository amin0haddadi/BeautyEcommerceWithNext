import { rootMetadata } from "@/config/metadata";
import { QueryProvider } from "@/lib/providers/query-provider";
import { nastaliq } from "@/lib/fonts";
import "./globals.css";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={nastaliq.variable} style={nastaliq.style}>
      <body className={`${nastaliq.className} min-h-screen flex flex-col`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
