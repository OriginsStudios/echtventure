"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EnneagramSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    // Animation for the title and text
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%", // Animation starts when the top of the section is 80% down the viewport
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-black pt-0 pb-5 sm:pt-0 sm:pb-8 px-4 sm:px-16"
    >
      {/* --- Enneagram Promo --- */}
      <div className="mt-4 md:mt-16 sm:mb-16">
        <div className="mx-auto max-w-6xl pt-12 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
            <div className="md:w-1/2 md:order-2 text-center md:text-right">
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-5xl font-butler font-semibold tracking-tight leading-tight mb-2 sm:mb-3 text-black"
              >
                UNLOCK YOUR TRUE POTENTIAL
              </h2>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-gray-800">
                ENNEAGRAM PERSONALITY PROFILING
              </h3>
            </div>
            <div className="md:w-1/2 md:order-1 text-center md:text-left">
              <p
                ref={textRef}
                className="text-sm sm:text-base font-montserrat text-gray-700 leading-relaxed"
              >
                Understand your core motivations and patterns to lead with
                clarity and confidence, and create meaningful impact in every
                relationship and situation.
              </p>
              <div className="mt-6">
                <a
                  href="/enneagram"
                  className="inline-block bg-white text-black px-6 py-3  font-montserrat font-semibold text-sm sm:text-base transition-colors duration-200 rounded-full hover:text-white hover:bg-black"
                >
                  DISCOVER THE ENNEAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnneagramSection;
