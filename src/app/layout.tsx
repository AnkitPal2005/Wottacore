import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashriya Infotech | Web Development & Mobile App Development Company",
  description: "Ashriya Professional is a leading Web Development & Mobile App Development Company in India, offering reliable customized software and internet services across the world.",
  keywords: ["Web Development Company", "Mobile App Development", "iOS Development", "Android Apps", "Graphics Designing", "SEO Company India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-light text-slate-800`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
