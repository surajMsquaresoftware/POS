import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { themeInitScript } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:1994";
const description =
  "RetailA2Z is a free, open-source, offline-first Point of Sale and inventory management system for small retail shops. No subscription, no internet required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RetailA2Z | Offline-First POS & Inventory Management",
    template: "%s | RetailA2Z",
  },
  description,
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "RetailA2Z",
    title: "RetailA2Z | Offline-First POS & Inventory Management",
    description,
  },
  twitter: {
    card: "summary",
    title: "RetailA2Z | Offline-First POS & Inventory Management",
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RetailA2Z",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows, Linux, Docker",
  description,
  url: "https://github.com/surajMsquaresoftware/POS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "RetailA2Z",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
