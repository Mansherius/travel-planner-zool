//Layout.tsx
import type { Metadata } from "next";
import { Livvic, Barrio, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const livvic = Livvic({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-livvic",
});

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barrio",
});

export const metadata: Metadata = {
  title: "Planorama",
  description: "Created by Raakesh Mansher Manasvi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mapLogo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@400;700&family=Barrio&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={livvic.className}>
        <div className="bg-transparent">
          <Navbar />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
