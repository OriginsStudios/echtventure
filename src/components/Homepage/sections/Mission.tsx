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
          {/* Left: Combined text */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left font-butler pb-6 max-w-2xl">
            {/* 4. Remove old animation classes, add data-attribute for GSAP */}
            <TextMorph
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-1 sm:mb-2"
            >
              Echtventure
            </TextMorph>
            <TextMorph
              as="h2"
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-tight font-montserrat sm:mt-1 text-gray-300 mt-2"
            >
              by Keith Tay
            </TextMorph>
            <p
              data-mission-fade-up
              className="text-sm sm:text-base font-montserrat text-gray-400 mt-2"
            >
              Founded in 2019
            </p>
            <div
              data-mission-fade-up // GSAP target for fade-up
              className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 max-w-prose"
            >
              <p
                data-mission-fade-up
                className="font-montserrat text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-8"
              >
                {/* Mobile: force 3 lines; Desktop/Tablet: inline */}
                <span className="font-semibold text-white block sm:inline">
                  Over 2,500 individuals impacted
                </span>
                <span className="block sm:inline">
                  {" "}
                  through coaching, workshops,
                </span>
                <span className="block sm:inline">
                  {" "}
                  and leadership programs.
                </span>
              </p>
              <p
                data-mission-fade-up
                className="font-montserrat text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-8"
              >
                {/* Mobile: force 3 lines; Desktop/Tablet: inline */}
                <span className="font-semibold text-white block sm:inline">
                  HRD Corp Accredited Trainer
                </span>
                <span className="block sm:inline"> delivering recognized,</span>
                <span className="block sm:inline">
                  {" "}
                  people-centered programs.
                </span>
              </p>
            </div>
            {/* Desktop button under text */}
            <Link
              data-mission-fade-up // GSAP target for fade-up
              href="/coaches/keith-tay"
              className="hidden md:inline-block mt-4"
            >
              <Button
                variant="solidLight"
                className="text-black border border-black hover:bg-gray-200 hover:text-black text-base px-6 py-2 font-butler capitalize"
              >
                Book a consultation with Keith
              </Button>
            </Link>
          </div>

          {/* Mobile-only centered button (above image on mobile) */}
          <div className="flex justify-center md:hidden w-full">
            <Link
              data-mission-fade-up // GSAP target for fade-up
              href="/coaches/keith-tay"
              className="mb-4"
            >
              <Button
                variant="solidLight"
                className="text-black border border-black hover:bg-gray-200 hover:text-black text-sm sm:text-base px-6 py-3 font-butler capitalize"
              >
                Book a consultation with Keith
              </Button>
            </Link>
          </div>
          {/* Right: Keith image */}
          <div className="flex items-center justify-center">
            <div className="w-[82%] sm:w-[75%] md:w-[90%] lg:w-[80%] xl:w-[70%] md:translate-x-0 translate-x-[18px]">
              <img src="/PR-KEITH.png" alt="Keith" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
