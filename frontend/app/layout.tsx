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
  "Suraj Choudhari POS is a free, open-source, offline-first Point of Sale and inventory management system for small retail shops. No subscription, no internet required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suraj Choudhari POS | Offline-First POS & Inventory Management",
    template: "%s | Suraj Choudhari POS",
  },
  description,
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Suraj Choudhari POS",
    title: "Suraj Choudhari POS | Offline-First POS & Inventory Management",
    description,
  },
  twitter: {
    card: "summary",
    title: "Suraj Choudhari POS | Offline-First POS & Inventory Management",
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Suraj Choudhari POS",
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
    "@type": "Person",
    name: "Suraj Choudhari",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
