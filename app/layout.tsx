import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timberlae Immobilien – Ihr Makler in Ostfriesland",
  description:
    "Timberlae Immobilien GbR: Ihr persönlicher Immobilienmakler in Großefehn und der Region Ostfriesland. Wir verkaufen, vermieten und verpachten Häuser, Wohnungen und Gewerbeobjekte.",
  keywords: "Immobilien, Makler, Großefehn, Ostfriesland, Haus kaufen, Haus verkaufen, Timberlae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
