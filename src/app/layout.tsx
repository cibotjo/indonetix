import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom-styles.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Indonetix - Solusi Digital Terbaik untuk Bisnis Anda",
    template: "%s | Indonetix"
  },
  description: "Indonetix menyediakan solusi digital komprehensif untuk bisnis Anda. Kami spesialis dalam pengembangan website, aplikasi mobile, e-commerce, dan layanan IT lainnya dengan teknologi terkini.",
  keywords: [
    "Indonetix", 
    "pengembangan website", 
    "aplikasi mobile", 
    "solusi digital", 
    "e-commerce", 
    "pengembangan perangkat lunak", 
    "IT consultant", 
    "web development", 
    "mobile app development", 
    "digital solution",
    "SEO optimization",
    "responsive design",
    "custom software"
  ],
  authors: [{ name: "Indonetix Team" }],
  creator: "Indonetix",
  publisher: "Indonetix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Indonetix - Solusi Digital Terbaik untuk Bisnis Anda",
    description: "Solusi digital komprehensif untuk bisnis Anda. Pengembangan website, aplikasi mobile, e-commerce, dan layanan IT dengan teknologi terkini.",
    url: "https://indonetix.com",
    siteName: "Indonetix",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://indonetix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indonetix - Solusi Digital Terbaik"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonetix - Solusi Digital Terbaik untuk Bisnis Anda",
    description: "Solusi digital komprehensif untuk bisnis Anda. Pengembangan website, aplikasi mobile, e-commerce, dan layanan IT dengan teknologi terkini.",
    images: ["https://indonetix.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://indonetix.com"
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}