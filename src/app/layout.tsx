import type { Metadata } from "next";
import {
  Bowlby_One_SC,
  Crimson_Text,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LenisScrollProvider from "@/components/LenisScrollProvider";

const bowlbyOneSc = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby-one-sc",
});

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
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
        className={`${bowlbyOneSc.variable} ${crimsonText.variable} ${robotoCondensed.variable} antialiased `}
      >
        <LenisScrollProvider />
        <Navbar />
        <CustomCursor />
        <main className="bg-five-lines bg-black">{children}</main>
      </body>
    </html>
  );
}
