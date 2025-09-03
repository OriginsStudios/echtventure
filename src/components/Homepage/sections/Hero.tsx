"use client";

import React, { useRef } from "react";
import Button from "@/components/ui/Button"; // Assuming you have this Button component
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePageHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate the main headline
      gsap.from(".hero-headline", {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start animation when 80% of the hero is visible
        },
      });

      // Animate the description and button
      gsap.from([".hero-description", ".hero-button"], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // Animate them one after the other
        delay: 0.3, // Wait for the headline animation to start
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
        // Layout: Stacks vertically on mobile, horizontally on large screens
        className="mx-auto w-full flex flex-col 2xl:flex-row items-center justify-between gap-10 md:gap-16"
      >
        {/* Left Section: Main Headline */}
        <div className="flex-1 min-w-0">
          <h1
            className="hero-headline font-extrabold text-black leading-none whitespace-pre-wrap 
                       break-words uppercase font-bowlby tracking-wide text-center lg:text-left
                       text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem]"
          >
            echtventure
          </h1>
        </div>

        {/* Right Section: Description and Button */}
        <div
          // Alignment: Centers content on mobile, left-aligns on large screens
          className="flex-none flex flex-col items-center lg:items-start text-center lg:text-left
                     lg:max-w-sm" // Max-width on large screens for better readability
        >
          <p className="hero-description font-crimson text-gray-700 text-lg md:text-xl mb-8">
            Authentic support, adding value, right resources, maximizing
            business potential.
          </p>
          <div className="hero-button">
            <Button>View Coaches</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
