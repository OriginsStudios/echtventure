import type { Metadata } from "next";
// 1. Import all the fonts you need
import { Bowlby_One, Crimson_Text, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/CustomCursor";

// 2. Configure each font and assign a CSS variable
const bowlby = Bowlby_One({
  subsets: ["latin"],
  weight: "400", // Bowlby One only has the 400 weight
  variable: "--font-bowlby-one",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      {/* 3. Apply the font variables to the body tag */}
      <body
        className={`${bowlby.variable} ${crimson.variable} ${roboto.variable}`}
      >
        <Navbar />
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
