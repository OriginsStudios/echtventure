"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button"; // Assuming you have this Button component
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HomePageHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Custom scroll effect with resize handling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      // Force re-render on resize to update responsive values
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate diagonal opacity mask based on scroll - responsive
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const fadeDistance = isMobile ? 400 : 800; // Shorter fade on mobile
  const scrollProgress = Math.min(scrollY / fadeDistance, 1);
  const maskMovement = isMobile ? 120 : 150; // Less movement on mobile
  const maskPosition = scrollProgress * maskMovement;
  const maskTransition = isMobile ? 20 : 30; // Smoother transition on mobile

  useGSAP(
    () => {
      // Typewriting animation for the main headline on initial load
      const fullText = "echtventure";
      if (headlineRef.current) {
        gsap.set(headlineRef.current, { text: "" });
        gsap.to(headlineRef.current, {
          text: fullText,
          duration: 1.6,
          ease: "none",
          delay: 0.2,
        });
      }

      // Animate the description and button
      gsap.from([".hero-description", ".hero-button"], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // Animate them one after the other
        delay: 0.2, // Wait for the headline animation to start
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

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
          <span
            ref={headlineRef}
            className="hero-headline block font-extrabold text-black leading-none whitespace-pre-wrap 
                       break-words uppercase tracking-tighter text-center
                       text-[2.25rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem] pt-5"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            echtventure
          </span>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center text-center max-w-2xl pb-6">
          <p className="hero-description text-center font-montserrat text-gray-700 text-lg md:text-xl mb-8">
            Authentic support, adding value, right resources, maximizing
            business potential.
          </p>
          <div className="hero-button">
            <Button className="text-base md:text-lg lg:text-xl px-8 md:px-10 lg:px-12 py-2.5 md:py-3 lg:py-3 font-semibold">
              View Coaches
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
