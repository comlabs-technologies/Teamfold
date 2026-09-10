import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { brand, CONTACT_EMAIL, SITE_URL } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: brand.metaTitle,
  description: brand.metaDescription,
  applicationName: brand.name,
  keywords: [
    "fractional People Operations",
    "fractional HR leader",
    "startup People Ops",
    "HR systems for startups",
    "manager enablement",
  ],
  openGraph: {
    type: "website",
    siteName: brand.name,
    url: SITE_URL,
    title: brand.metaTitle,
    description: brand.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.metaTitle,
    description: brand.metaDescription,
  },
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#f5f5f3",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  slogan: brand.tagline,
  description: brand.metaDescription,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Fractional People Operations",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
