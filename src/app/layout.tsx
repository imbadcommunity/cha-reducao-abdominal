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
  title: "Chá Redução Abdominal | Naturalidade e Bem-Estar",
  description:
    "Chá natural premium com ingredientes cuidadosamente selecionados para complementar sua rotina saudável. Hibisco, Chá Verde, Gengibre, Canela e Hortelã.",
  keywords: [
    "chá natural",
    "redução abdominal",
    "chá medicinal",
    "bem-estar",
    "saúde natural",
    "hibisco",
    "chá verde",
    "gengibre",
    "canela",
    "hortelã",
  ],
  authors: [{ name: "Chá Redução Abdominal" }],
  openGraph: {
    title: "Chá Redução Abdominal | Naturalidade e Bem-Estar",
    description:
      "Uma combinação de ingredientes naturais cuidadosamente selecionados para complementar uma rotina equilibrada.",
    type: "website",
    locale: "pt_BR",
    siteName: "Chá Redução Abdominal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chá Redução Abdominal | Naturalidade e Bem-Estar",
    description:
      "Uma combinação de ingredientes naturais cuidadosamente selecionados para complementar uma rotina equilibrada.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chá Redução Abdominal",
  description:
    "Chá natural premium com hibisco, chá verde, gengibre, canela e hortelã. Ingredientes selecionados para complementar uma rotina equilibrada.",
  brand: {
    "@type": "Brand",
    name: "Chá Redução Abdominal",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "5000",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "BRL",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
