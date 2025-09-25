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

// --- Data for the cards ---
const philosophyCards = [
  {
    icon: <BriefcaseIcon />,
    title: "Corporate Management Experience",
    description:
      "Real-world business insights from years of corporate leadership and management experience.",
  },
  {
    icon: <LeafIcon />,
    title: "Holistic Development",
    description:
      "A comprehensive approach that addresses personal, professional, and relational growth.",
  },
  {
    icon: <BrainCircuitIcon />,
    title: "Enneagram Personality Profiling",
    description:
      "Deep personality insights that unlock authentic self-awareness and improved relationships.",
  },
];

// --- The Main Component ---
const SecondProgram = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  cardsRef.current = []; // Ensure it's empty on re-renders

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

    // Staggered animation for the cards
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0], // Trigger based on the first card
          start: "top 85%",
        },
      }
    );
  }, []);

  // Helper function to add card elements to our ref array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="text-black py-8 sm:py-12 px-4 sm:px-16"
    >
      <div className="max-w-8xl mx-auto">
        {/* --- Philosophy Intro --- */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="bg-gray-900 text-white p-8 sm:p-12 rounded-2xl">
            <h2
              ref={titleRef}
              className="text-[2.4rem] sm:text-6xl md:text-7xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8 text-white"
            >
              UNLOCK YOUR TRUE POTENTIAL
            </h2>
            <h3 className="text-xl sm:text-2xl font-butler font-semibold text-gray-300 mb-6">
              ENNEAGRAM PERSONALITY PROFILING
            </h3>
            <p
              ref={textRef}
              className="mt-8 max-w-3xl text-sm sm:text-base mx-auto font-montserrat text-gray-300 leading-relaxed"
            >
              Discover the power of authentic self-awareness through the
              Enneagram. Our comprehensive personality profiling system helps
              you understand your core motivations, fears, and desires, enabling
              you to lead with genuine confidence and create meaningful impact
              in every relationship and situation. Transform your leadership
              style by understanding not just what you do, but why you do it.
            </p>
            <div className="mt-8">
              <a
                href="/enneagram"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-butler font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 hover:transform hover:scale-105"
              >
                DISCOVER THE ENNEAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex flex-col text-center p-8 border border-gray-300 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-gray-400"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-butler font-semibold leading-7 text-black tracking-tight mb-4">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base font-montserrat text-gray-700 leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondProgram;
