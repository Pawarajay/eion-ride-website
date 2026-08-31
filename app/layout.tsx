import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-context";
import WhatsAppButton from "@/components/whatsappbutton";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Eion Rides",
  description: "Created by VasifyTech",
  generator: "vasifytech.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17631308778"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17631308778');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-left antialiased relative">
        {/* Fixed Top-Right Red Opaque Maintenance Ribbon (Full Text Visible) */}
        {/* <div className="fixed top-0 right-0 z-[9999] pointer-events-none overflow-hidden w-48 h-48 sm:w-56 sm:h-56">
          <div className="absolute top-9 -right-16 sm:top-11 sm:-right-16 w-64 sm:w-72 rotate-45 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white font-black text-[10px] sm:text-[11px] tracking-wider py-1.5 sm:py-2 text-center shadow-2xl uppercase border-y-2 border-amber-300 pointer-events-auto flex items-center justify-center gap-1.5 select-none shadow-red-950/40">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping inline-block flex-shrink-0" />
            <span className="whitespace-nowrap">Under Maintenance</span>
          </div>
        </div> */}

        <Suspense fallback={<div>Loading...</div>}>
          <AuthProvider>
            {children}
            <WhatsAppButton />
          </AuthProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
