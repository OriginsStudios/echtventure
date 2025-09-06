import type { Metadata } from "next";
import {
  Bowlby_One_SC,
  Ramabhadra,
  Crimson_Text,
  Roboto_Condensed,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import Footer from "@/components/layout/Footer";
import RouteTransitionOverlay from "@/components/RouteTransitionOverlay";
import Preloader from "@/components/Preload/Preloader";

// const bowlbyOneSc = localFont({
//   src: [
//     {
//       path: "./fonts/DrukText.otf",
//       weight: "400",
//       style: "normal",
//     },
//     { path: "./fonts/DrukText.otf", weight: "500", style: "normal" },
//     { path: "./fonts/DrukText.otf", weight: "600", style: "normal" },
//     { path: "./fonts/DrukText.otf", weight: "700", style: "normal" },
//   ],
//   display: "swap",
//   variable: "--font-bowlby-one-sc",
// });

const bowlbyOneSc = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

const crimsonText = Ramabhadra({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});
const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
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
        className={`${bowlbyOneSc.variable} ${crimsonText.variable} ${robotoCondensed.variable} antialiased bg-five-lines`}
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
      </body>
    </html>
  );
}
