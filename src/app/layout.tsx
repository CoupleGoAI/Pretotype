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
  title: "CoupleGoAI — Pretotype",
  description: "Discover your relationship dynamics in 60 seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-primary/10 px-6 py-3">
          <a href="/" className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition">
            CoupleGoAI <span className="text-accent">&hearts;</span>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
