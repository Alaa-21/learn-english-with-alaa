import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuraBackground } from "@/app/components/AuraBackground";
import { MouseFollower } from "@/app/components/MouseFollower";
import { BackToTop } from "@/app/components/BackToTop";
import SplashCursor from "@/app/components/SplashCursor";
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
  title: "Learn English with Alaa",
  description: "A warm and welcoming platform to learn English step by step with Alaa Nasser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#100e0b] text-slate-100 relative">
        <AuraBackground />
        <SplashCursor rainbow={true} size={0.9} force={1} swirl={3} trail={1} clickSplash={true} />
        <MouseFollower />
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
