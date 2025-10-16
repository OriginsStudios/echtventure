"use client";
import Button from "@/components/ui/Button";
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
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
        if (trig === sectionRef.current) st.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className=" text-black font-butler flex items-center justify-center pt-0 pb-16  px-4 sm:px-16 rounded-b-xl "
      >
        <div className="max-w-8xl mx-auto text-center">
          <h2
            ref={headingRef}
            className="text-[2.4rem] sm:text-6xl md:text-7xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8 mt-12"
          >
            The Echtventure Method
          </h2>
          <p
            ref={paragraphRef}
            className="mt-6 max-w-3xl text-sm sm:text-base mx-auto font-montserrat text-gray-700 leading-relaxed"
          >
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>
          <div ref={buttonRef} className="mt-6">
            <Button>DISCOVER YOUR PATH</Button>
          </div>
        </div>
      </div>
      <SecondProgram />
    </>
  );
};

export default ProgramsSection;
