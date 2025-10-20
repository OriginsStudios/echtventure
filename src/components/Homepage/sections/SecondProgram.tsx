"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- SVG Icons ---
// A modern replacement for the "Corporate Management Experience" icon
const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

// A modern replacement for the "Holistic Development" icon
const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 20h10"></path>
    <path d="M10 20v-6h4v6"></path>
    <path d="M12 14c1.657 0 3-2.686 3-6s-1.343-6-3-6-3 2.686-3 6 1.343 6 3 6z"></path>
    <path d="M12 14a6.27 6.27 0 0 0 3-6 6.27 6.27 0 0 0-3-6"></path>
  </svg>
);

// A modern replacement for the "Enneagram Personality Profiling" icon
const BrainCircuitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a5.5 5.5 0 0 0-5.5 5.5c0 1.73.83 3.24 2.06 4.21L6.5 14.5A4.5 4.5 0 0 0 2 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 4.5 4.5 0 0 0-4.5-4.5l-2.06-2.79A5.5 5.5 0 0 0 12 2z"></path>
    <path d="M10 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M19 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
  </svg>
);

// (Cards moved to Program.tsx under The echtventure Method section)

// --- The Main Component ---
const SecondProgram = () => {
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

  // (Card refs removed)

  return (
    <section
      ref={sectionRef}
      className="text-black pt-0 pb-5 sm:pt-0 sm:pb-8 px-4 sm:px-16"
    >
      {/* Cards grid removed – now shown in Program.tsx */}
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

export default SecondProgram;
