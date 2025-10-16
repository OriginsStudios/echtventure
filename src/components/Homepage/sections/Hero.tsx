"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button"; // Assuming you have this Button component
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePageHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Custom scroll effect with resize handling
  useEffect(() => {
    setIsMounted(true);
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
  const isMobile = isMounted && window.innerWidth < 768;
  const fadeDistance = isMobile ? 400 : 800; // Shorter fade on mobile
  const scrollProgress = isMounted ? Math.min(scrollY / fadeDistance, 1) : 0;
  const maskMovement = isMobile ? 120 : 150; // Less movement on mobile
  const maskPosition = scrollProgress * maskMovement;
  const maskTransition = isMobile ? 20 : 30; // Smoother transition on mobile

  useGSAP(
    () => {
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
      id="home-hero"
      ref={containerRef}
      // Responsive padding: smaller on mobile, larger on desktop
      className="flex flex-col justify-center items-start p-6 md:p-12 2xl:py-12  container-padding "
    >
      <div
        // Layout: Stacks vertically in column layout
        className="mx-auto w-full flex flex-col items-center justify-center gap-10 md:gap-16"
        style={
          isMounted
            ? {
                WebkitMask: `linear-gradient(135deg, transparent ${maskPosition}%, black ${
                  maskPosition + maskTransition
                }%)`,
                mask: `linear-gradient(135deg, transparent ${maskPosition}%, black ${
                  maskPosition + maskTransition
                }%)`,
                transition: "none",
              }
            : {
                WebkitMask:
                  "linear-gradient(135deg, transparent 0%, black 20%)",
                mask: "linear-gradient(135deg, transparent 0%, black 20%)",
                transition: "none",
              }
        }
      >
        {/* Main Logo */}
        <div className="w-full text-center pt-12 md:pt-0">
          <div className="inline-block pt-5">
            <Image
              src="/logo/black.svg"
              alt="Echtventure Logo"
              width={1200}
              height={200}
              className="w-[min(95vw,1200px)] h-auto"
              priority
            />
          </div>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center text-center max-w-2xl pb-6">
          <p className="hero-description text-center font-montserrat text-gray-700 text-lg md:text-xl mb-8">
            Authentic support, adding value, right resources, maximizing
            business potential.
          </p>
          <div className="hero-button">
            <Button className="text-base md:text-lg lg:text-xl px-8 md:px-10 lg:px-12 py-2.5 md:py-3 lg:py-3 font-montserrat !font-medium capitalize">
              View Coaches
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
