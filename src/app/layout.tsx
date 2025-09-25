import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import Footer from "@/components/layout/Footer";
import RouteTransitionOverlay from "@/components/RouteTransitionOverlay";
import Preloader from "@/components/Preload/Preloader";

// Butler font is now loaded via CSS @font-face declarations in globals.css
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Echtventure",
  description: "Unlocking your full potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-butler ${montserrat.variable} antialiased bg-five-lines`}
      >
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
