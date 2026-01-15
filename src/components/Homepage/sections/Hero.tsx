

"use client";
import React, { useRef } from "react";
import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePageHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate the text lines and the button
      gsap.from([".hero-text-line", ".hero-button"], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
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
      className="flex flex-col justify-center items-start p-6 md:p-12 2xl:py-12 container-padding"
    >
      <div className="mx-auto w-full flex flex-col items-center justify-center gap-10 md:gap-16">
        {/* Main Logo */}
        <div className="w-full text-center pt-12 md:pt-0">
          <div className="inline-block pt-5">
            <Image
              src="/logo/black.svg"
              alt="Echtventure Logo"
              width={700}
              height={100}
              className="w-[min(70vw,550px)] h-auto"
              priority
            />
          </div>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center text-center max-w-2xl pb-6">
          {/* Container for the taglines */}
          <div
            className="
              hero-description flex flex-col md:flex-row md:flex-nowrap 
              justify-center items-center md:items-baseline 
              gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-10
            "
          >
            <div className="hero-text-line font-montserrat text-gray-700 text-sm md:text-lg whitespace-nowrap">
              Grounded in Purpose.
            </div>
            <div className="hero-text-line font-montserrat text-gray-700 text-sm md:text-lg whitespace-nowrap">
              Sharpened by Mastery.
            </div>
            <div className="hero-text-line font-montserrat text-gray-700 text-sm md:text-lg whitespace-nowrap">
              Driven by Ownership.
            </div>
          </div>

          <div className="hero-button">
            <Button
              onClick={() => {
                console.log("Button clicked - attempting to scroll");
                const programSection = document.getElementById("program-section");
                console.log("Program section found:", !!programSection);

                if (programSection) {
                  console.log("Scrolling to program section");
                  const lenis = (window as any).lenis;
                  console.log("Lenis available:", !!lenis);

                  if (lenis) {
                    lenis.scrollTo(programSection, { offset: -50 });
                  } else {
                    programSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                } else {
                  console.log("Program section not found, scrolling down");
                  const lenis = (window as any).lenis;
                  if (lenis) {
                    lenis.scrollTo(window.scrollY + window.innerHeight);
                  } else {
                    window.scrollBy({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="text-base md:text-lg lg:text-xl px-8 md:px-10 lg:px-12 py-2.5 md:py-3 lg:py-3 font-montserrat !font-medium capitalize"
            >
              Explore more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;