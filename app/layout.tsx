import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LogisticsLoader from "./components/LogisticsLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JHC Group | Logistics & Supply Chain Solutions",
  description:
    "JHC Group is a Malaysia-based logistics company providing freight, supply chain, warehousing, and transportation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LogisticsLoader />
        {children}
      </body>
    </html>
  );
}
