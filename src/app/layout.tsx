import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/outfit/latin.css";
import "@fontsource/fraunces/latin.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoupleGoAI — Your Relationship's Secret Superpower",
  description: "A personal AI confidant for each of you, and a shared Couple AI that actually understands both sides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
