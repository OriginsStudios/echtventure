"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button"; // Assuming you have this Button component
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import TextPressure from "../components/HeroTitle";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HomePageHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Custom scroll effect with resize handling - optimized with throttling
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (Math.abs(currentScrollY - lastScrollY) > 5) {
            // Only update if scrolled more than 5px
            setScrollY(currentScrollY);
            lastScrollY = currentScrollY;
          }
          rafId = null;
        });
      }
    };

    const handleResize = () => {
      // Update mobile state on resize
      setIsMobile(window.innerWidth < 768);
      setScrollY(window.scrollY);
    };

    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Calculate diagonal opacity mask based on scroll - responsive
  const fadeDistance = isMobile ? 400 : 800; // Shorter fade on mobile
  const scrollProgress = Math.min(scrollY / fadeDistance, 1);
  const maskMovement = isMobile ? 120 : 150; // Less movement on mobile
  const maskPosition = scrollProgress * maskMovement;
  const maskTransition = isMobile ? 20 : 30; // Smoother transition on mobile

  // Removed animations - assets now load without animation

  return (
    <section
      ref={containerRef}
      // Responsive padding: smaller on mobile, larger on desktop
      className="flex flex-col justify-center items-start p-6 md:p-12 2xl:py-24 2xl:pt-12 container-padding "
    >
      <div
        // Layout: Stacks vertically in column layout
        className="mx-auto w-full flex flex-col items-center justify-center gap-10 md:gap-16"
        style={{
          WebkitMask: `linear-gradient(135deg, transparent ${maskPosition}%, black ${
            maskPosition + maskTransition
          }%)`,
          mask: `linear-gradient(135deg, transparent ${maskPosition}%, black ${
            maskPosition + maskTransition
          }%)`,
          transition: "none", // Disable CSS transitions for smooth scroll effect
        }}
      >
        {/* Main Headline */}
        <div className="w-full text-center">
          {/* <span
            ref={headlineRef}
            className="hero-headline block font-extrabold text-black leading-none whitespace-pre-wrap 
                       break-words uppercase tracking-tighter text-center
                       text-[3rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem] "
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            echtventure
          </span> */}
          <div
            style={{
              position: "relative",
            }}
            className=" pt-5 sm:pt-6 2xl:h-[40vh] md:pt-7 xl:pt-10 2xl:pt-12"
          >
            <TextPressure
              text="echtventure"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              fontFamily="Butler Variable"
              italic={false}
              textColor="#000000"
              minFontSize={16}
            />
          </div>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <p className="hero-description text-center font-butler text-gray-700 text-xl md:text-2xl mb-8">
            Delivering authentic support that adds real value, connects you with
            the right resources, and helps you unlock and maximize your business
            potential!
          </p>
          <div className="hero-button ">
            <Link href="/coaches">
              <Button className="">View Coaches</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
