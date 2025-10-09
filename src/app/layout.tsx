import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import Footer from "@/components/layout/Footer";
import RouteTransitionOverlay from "@/components/RouteTransitionOverlay";
import Preloader from "@/components/Preload/Preloader";

export const metadata: Metadata = {
  title: "Echtventure",
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
      <head>
        {/* Preload Butler fonts for faster loading */}
        <link
          rel="preload"
          href="/Fonts/butler/Butler_Bold.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/butler/Butler_Medium.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/butler/Butler_Regular.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-butler antialiased bg-five-lines`}>
        <LenisScrollProvider />
        <Navbar />
        <CustomCursor />
        {/* Page transition overlay */}
        <Preloader />
        <RouteTransitionOverlay />
        <main className="bg-five-lines relative z-10 rounded-b-[100px]">
          {children}
        </main>
        <Footer />
        <canvas className="noise-overlay" width="1920" height="945"></canvas>
      </body>
    </html>
  );
}
