import { Bowlby_One, Crimson_Text, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar"; // Example Component
import Footer from "./components/layout/Footer"; // Example Component
import SmoothScroller from "./components/utils/SmoothScroller";
// Configure Bowlby One for Hero Headlines (H1)
const bowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400", // This font only has the 400 weight
  variable: "--font-bowlby-one",
});

// Configure Crimson Text for Page Titles (H2, H3)
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // We can load multiple weights if needed
  style: ["normal", "italic"],
  variable: "--font-crimson-text",
});

// Configure Roboto Condensed for Body & UI Text
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"], // Load 400 (normal) and 700 (bold)
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bowlbyOne.variable} ${crimsonText.variable} ${robotoCondensed.variable} 
                   font-roboto bg-light-background text-primary-text-dark`}
      >
        <SmoothScroller />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
