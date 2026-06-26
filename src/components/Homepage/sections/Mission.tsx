"use client";

import Button from "@/components/ui/Button";
import { TextMorph } from "@/components/ui/text-morph";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

// 1. Import GSAP, ScrollTrigger, and SplitType
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mission = () => {
  // Create a ref for the main section element
  const component = useRef(null);

  useLayoutEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for safe cleanup
    const ctx = gsap.context(() => {
      const otherElements = gsap.utils.toArray("[data-mission-fade-up]");

      // Create a GSAP timeline for sequenced animations of supporting elements
      gsap
        .timeline({
          scrollTrigger: {
            trigger: component.current,
            start: "top 70%",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        })
        .from(otherElements, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.6,
        });
    }, component);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    // Add the ref here
    <section
      ref={component}
      className="relative w-full bg-backgroundColorBlack text-[#f5f5f5] overflow-hidden pt-12"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-16 xl:px-24 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 2xl:gap-32 w-full">
          {/* Right: Combined text */}
          <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right font-butler pb-6 max-w-3xl md:order-2 md:pr-16 lg:pr-0">
            {/* 4. Remove old animation classes, add data-attribute for GSAP */}
            <div className="flex flex-col lg:flex-row lg:items-end mb-1 sm:mb-2">
              <TextMorph
                as="h1"
                className="lg:text-6xl sm:text-[2.7rem] text-[3.5rem] font-bold"
              >
                echtventure
              </TextMorph>
            </div>
            <TextMorph
              as="h2"
              className="w-full text-center md:text-right text-xs xs:text-sm sm:text-base md:text-sm lg:text-base font-bold tracking-tight leading-tight font-montserrat text-gray-300"
            >
              by Keith Tay
            </TextMorph>
              <div
                data-mission-fade-up // GSAP target for fade-up
                className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
              >
                <p
                  data-mission-fade-up
                  className="font-montserrat text-sm xs:text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed sm:leading-7 md:leading-8 text-center md:text-right"
                >
                  <span className="font-semibold text-white block">
                    Over 2,500 individuals impacted
                  </span>
                  <span className="block">
                    through coaching, workshops, and leadership programs.
                  </span>
                  
                </p>
                <p
                  data-mission-fade-up
                  className="font-montserrat text-sm xs:text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed sm:leading-7 md:leading-8 text-center md:text-right"
                >
                  <span className="font-semibold text-white block">
                    ICF Certified Professional Coach
                  </span>
                  <span className="font-semibold text-white block">
                    & HRD Corp Accredited Trainer
                  </span>
                  <span className="block">
                    delivering recognized, people centered programs.
                  </span>
                </p>
              </div>
            {/* Desktop button under text */}
            <div className="hidden md:flex justify-end w-full mt-4 sm:mt-6 md:mt-6">
              <Link
                data-mission-fade-up // GSAP target for fade-up
                href="/coaches/keith-tay"
                className="inline-block"
              >
                <Button
                  variant="solidLight"
                  className="text-black border border-black hover:bg-gray-200 hover:text-black text-sm sm:text-base md:text-base lg:text-lg px-4 sm:px-6 md:px-6 lg:px-8 py-2 sm:py-2 md:py-3 lg:py-3 font-butler capitalize transition-all duration-200"
                >
                  About Keith Tay
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile-only centered button (above image on mobile) */}
          <div className="flex justify-center md:hidden w-full">
            <Link
              data-mission-fade-up // GSAP target for fade-up
              href="/coaches/keith-tay"
              className="mb-3 sm:mb-4"
            >
              <Button
                variant="solidLight"
                className="text-black border border-black hover:bg-gray-200 hover:text-black text-xs xs:text-sm sm:text-base px-4 xs:px-6 sm:px-6 py-2 xs:py-3 sm:py-3 font-butler capitalize transition-all duration-200"
              >
                About Keith Tay
              </Button>
            </Link>
          </div>
          {/* Left: Keith image */}
          <div className="flex items-center justify-center md:order-1">
            <div className="w-[75%] xs:w-[70%] sm:w-[65%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[65%] md:translate-x-0 translate-x-[12px] xs:translate-x-[16px] sm:translate-x-[18px]">
              <img
                src="/keithcutout.png"
                alt="Keith"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
