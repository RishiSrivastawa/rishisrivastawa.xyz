import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "rishi.xyz",
    template: "%s | Rishi Srivastawa",
  },
  description: "Software Engineer exploring how to build reliable, scalable, and human-focused digital products. I work with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Rishi Srivastawa",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "Backend Developer"
  ],
  authors: [{ name: "Rishi Srivastawa", url: "https://rishi.xyz" }],
  creator: "Rishi Srivastawa",
  publisher: "Rishi Srivastawa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rishi.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishi.xyz",
    title: "Rishi Srivastawa- Software Engineer",
    description: "Software Engineer exploring how to build reliable, scalable, and human-focused digital products. I work with React, Next.js, TypeScript, and Node.js.",
    siteName: "rishi's personal website & blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rishi Srivastawa - Full-Stack Developer",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}