"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallaryv2() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const titleLines = section.querySelectorAll("[data-title-line]");
      const videoContainer = section.querySelector("[data-video]");
      const description = section.querySelector("[data-description]");

      if (!titleLines.length || !videoContainer || !description) return;

      // Initial state
      gsap.set([titleLines, videoContainer, description], {
        autoAlpha: 0,
        y: 50,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.to(titleLines, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          videoContainer,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[65vh] sm:min-h-[80vh] lg:min-h-screen bg-transparent flex items-center justify-center pt-12 pb-6 sm:pt-16 sm:pb-10 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Title and Description Row */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 sm:gap-8 lg:gap-20 mb-8 sm:mb-12">
          {/* Large bold text - left side */}
          <div className="w-full lg:w-auto z-10">
            <div className="space-y-0 text-left">
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                AWARENESS
              </h2>
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words whitespace-nowrap"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                {"TO\u00A0MASTERY"}
              </h2>
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words whitespace-nowrap"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                {"TO\u00A0LEADERSHIP"}
              </h2>
            </div>
          </div>

          {/* Description text - right side, aligned with title */}
          <div
            data-description
            className="w-full lg:w-[400px] xl:w-[500px] text-black text-left"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed font-montserrat">
              Echtventure exists to create impact in every space that we are
              able to enter. We have seen countless transformations in both
              individuals and teams.
            </p>
          </div>
        </div>

        {/* Video container - centered below */}
        <div className="flex justify-center">
          <div
            data-video
            className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              className="w-full h-full object-cover"
              src="/Bounce/e616c026-15d2-4b6c-94ac-432715e1124a.JPG"
              alt="Echtventure"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
