


import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import Footer from "@/components/layout/Footer";
import RouteTransitionOverlay from "@/components/RouteTransitionOverlay";
import Preloader from "@/components/Preload/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

// Butler font is loaded via CSS @font-face in globals.css
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "echtventure",
  description: "Unlocking your full potential.",
  icons: {
    icon: "/logo/EVT_LOGO-WHT.svg",
    shortcut: "/logo/EVT_LOGO-WHT.svg",
    apple: "/logo/EVT_LOGO-WHT.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-butler ${montserrat.variable} antialiased`}>
        <LenisScrollProvider />
        
        {/* Navbar is now a client component with scroll hide/show logic */}
        <Navbar />
        
        <CustomCursor />
        <Preloader />
        <RouteTransitionOverlay />
        <ScrollToTop />

        <main 
          className="
            bg-five-lines relative z-10 rounded-b-[50px] 
            pt-16 md:pt-0               /* ← space for fixed mobile navbar */
            min-h-screen
          "
        >
          {children}
        </main>

        <Footer />

        <canvas className="noise-overlay" width="1920" height="945"></canvas>
      </body>
    </html>
  );
}