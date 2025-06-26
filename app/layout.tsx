import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumita Kevat | Full Stack Developer | GenAI Explorer",
  description: 'Sumita is a experienced full stack web developer and writer. Explore her projects, services blogs, and more.',
  keywords: "Sumita Kevat, Full Stack Developer, Web Developer, Backend Developer, Portfolio, Tech Services, Golang, React, Next.js, Tailwind CSS, Node.js, TypeScript, GenAI"
}

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
        {/* Google Analytics gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RDMTTYXYMH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDMTTYXYMH');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
