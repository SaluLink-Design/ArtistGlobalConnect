import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artist Global Connect — Strategic Artist Management",
  description:
    "We manage Amapiano artists with a focus on long-term career growth, brand partnerships, and commercial strategy. Where talent meets structure, strategy, and corporate opportunity.",
  keywords: [
    "Amapiano artist management",
    "brand partnerships",
    "corporate activations",
    "EeQue",
    "Masterpiece YVK",
    "Artist Global Connect",
  ],
  openGraph: {
    title: "Artist Global Connect — Strategic Artist Management",
    description:
      "Strategic artist management for the business of music. We connect brands with culturally relevant artists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
