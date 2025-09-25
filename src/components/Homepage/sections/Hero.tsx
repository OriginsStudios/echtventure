"use client";

import React, { useRef } from "react";
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
        // Layout: Stacks vertically on mobile, horizontally on large screens
        className="mx-auto w-full flex flex-col 2xl:flex-row items-center justify-between gap-10 md:gap-16"
      >
        {/* Left Section: Main Headline */}
        <div className="flex-1 min-w-0">
          <span
            ref={headlineRef}
            className="hero-headline block font-extrabold text-black leading-none whitespace-pre-wrap 
                       break-words uppercase tracking-tighter text-center lg:text-left
                       text-[3rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[10rem] "
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            echtventure
          </span>
        </div>

        {/* Right Section: Description and Button */}
        <div
          // Alignment: Centers content on mobile, left-aligns on large screens
          className="flex-none flex flex-col 2xl:items-start items-center text-center lg:text-left
                     lg:max-w-sm" // Max-width on large screens for better readability
        >
          <p className="hero-description text-center 2xl:text-start font-montserrat text-gray-700 text-lg md:text-xl mb-8">
            Authentic support, adding value, right resources, maximizing
            business potential.
          </p>
          <div className="hero-button ">
            <Button className="">View Coaches</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
