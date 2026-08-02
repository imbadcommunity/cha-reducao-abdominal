import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const site = {
  name: "Apple Store Premium",
  url: "https://applestorepremium.com.br",
  description:
    "Loja especializada em iPhones, iPads, Apple Watch, MacBooks, AirPods e acessórios originais da Apple. Garantia, parcelamento, entrega rápida e atendimento especializado.",
  whatsapp: "5511999999999",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Apple Store Premium | iPhones, MacBooks e acessórios originais",
    template: "%s | Apple Store Premium",
  },
  description: site.description,
  keywords: [
    "apple store",
    "iphone",
    "iphone 15",
    "iphone 16",
    "ipad",
    "apple watch",
    "macbook",
    "airpods",
    "acessórios apple",
    "loja de celulares",
    "apple brasil",
    "iMac",
  ],
  authors: [{ name: "Apple Store Premium" }],
  creator: "Apple Store Premium",
  publisher: "Apple Store Premium",
  openGraph: {
    title: "Apple Store Premium | O próximo smartphone já está esperando por você",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Apple Store Premium — produtos Apple originais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple Store Premium | O próximo smartphone já está esperando por você",
    description: site.description,
    images: ["/images/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: "+55 11 99999-9999",
  priceRange: "$$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Credit Card, Debit Card, Pix, Boleto",
  openingHours: "Mo-Sa 09:00-19:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Paulista, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01310-100",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5614,
    longitude: -46.6559,
  },
  sameAs: [
    "https://instagram.com/applestorepremium",
    "https://facebook.com/applestorepremium",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produtos Apple",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "iPhone" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "iPad" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Apple Watch" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "MacBook" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "AirPods" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1800",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
