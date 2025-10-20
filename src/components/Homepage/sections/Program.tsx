"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { UserRound, Users, Puzzle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondProgram from "./SecondProgram";

const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const currentSection = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: currentSection,
        start: "top 55%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from([headingRef.current, paragraphRef.current, buttonRef.current], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        const trig = st.trigger as HTMLElement | undefined;
        if (trig === currentSection) st.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        id="program-section"
        ref={sectionRef}
        className="bg-black text-white font-butler flex items-center justify-center pt-6 pb-16 px-4 sm:px-16 "
      >
        <div className="max-w-8xl mx-auto text-center">
          <h2
            ref={headingRef}
            className="text-[2.1rem] sm:text-5xl md:text-6xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8 mt-12 text-white whitespace-nowrap"
          >
            The echtventure Method
          </h2>
          <p
            ref={paragraphRef}
            className="mt-6 max-w-3xl text-sm sm:text-base mx-auto font-montserrat text-gray-300 leading-relaxed"
          >
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>
          <div ref={buttonRef} className="mt-6">
            <button
              onClick={() => {
                // Simply scroll to the bottom of the page
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="!font-butler !rounded-full !text-white !bg-[#6a3a3a] hover:!bg-[#7a4a4a] px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
          {/* Coaching offerings moved here */}
          <div className="mt-7 max-w-6xl mx-auto">
            {/* New layout: simple items with divider lines between them */}
            <div className="flex flex-col md:flex-row text-center md:items-stretch divide-y divide-white/20 md:divide-y-0 md:divide-x md:divide-white/20">
              <button
                onClick={() => {
                  // Simply scroll to the bottom of the page
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-8 md:py-10 flex-1 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <UserRound
                  className="h-8 w-8 text-white mb-3 group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-butler font-semibold leading-tight text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                  Individual Coaching
                </h3>
                <p className="text-sm sm:text-base font-montserrat text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Bespoke 1:1 guidance to clarify direction, build capability,
                  and sustain measurable momentum.
                </p>
                <div className="mt-4 text-sm font-butler text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Start 1-on-1 coaching →
                </div>
              </button>

              <button
                onClick={() => {
                  // Simply scroll to the bottom of the page
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-8 md:py-10 flex-1 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <Users
                  className="h-8 w-8 text-white mb-3 group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-butler font-semibold leading-tight text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                  Group Coaching
                </h3>
                <p className="text-sm sm:text-base font-montserrat text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Facilitated cohort learning that blends expert input with peer
                  accountability for faster outcomes.
                </p>
                <div className="mt-4 text-sm font-butler text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Join group sessions →
                </div>
              </button>

              <button
                onClick={() => {
                  // Simply scroll to the bottom of the page
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-8 md:py-10 flex-1 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <Puzzle
                  className="h-8 w-8 text-white mb-3 group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-butler font-semibold leading-tight text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                  Team Building
                </h3>
                <p className="text-sm sm:text-base font-montserrat text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Experiential programs that align purpose, strengthen
                  collaboration, and elevate performance.
                </p>
                <div className="mt-4 text-sm font-butler text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Build your team →
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SecondProgram />
    </>
  );
};

export default ProgramsSection;
