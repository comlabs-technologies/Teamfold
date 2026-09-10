import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { brand } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f5f5f3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
