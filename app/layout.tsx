import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Aama Homestay Kurseong — Book Direct",
  description:
    "Nestled in Kurseong with mountain and river views. Book directly with Bikash for the best rates. WhatsApp booking, pay on arrival.",
  openGraph: {
    title: "Aama Homestay Kurseong",
    description: "Your home in the hills. Book direct on WhatsApp.",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Aama Homestay",
  description:
    "Nestled in Kurseong with mountain and river views, Aama Homestay offers warm hospitality, home-cooked Nepali meals, and a genuine hill experience.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sudhapatole",
    addressLocality: "Kurseong",
    addressRegion: "West Bengal",
    postalCode: "734203",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.88685,
    longitude: 88.277344,
  },
  telephone: "+919560128096",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "352",
  },
  priceRange: "₹₹",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
