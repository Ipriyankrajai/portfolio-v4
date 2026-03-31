import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { siteConfig } from "@/config";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const headingFont = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const ogImageUrl = `${siteConfig.url}/api/og?title=${encodeURIComponent(
  "Priyank Rajai"
)}&description=${encodeURIComponent(
  "Full-Stack Developer | Open Source Steward"
)}`;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [
    {
      name: "Priyank Rajai",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@Ipriyankrajai",
    images: [ogImageUrl],
  },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Priyank Rajai - Full-Stack Developer",
      },
    ],
  },
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
  verification: {
    google: "sL0LMRnSjg7cJRIwDkRBwurl2b9hLftm-IpwJNdFnFE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased bg-neutral-950`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
