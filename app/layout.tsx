import type { Metadata } from "next";
import { Nunito, Amiri } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/brand";

// Nunito: font UI utama (variable font, mendukung bobot 400–900).
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Amiri: khusus teks Arab (RTL). Hanya tersedia bobot 400 & 700.
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      dir="ltr"
      className={`${nunito.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
