"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
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
        className="bg-black text-white font-butler flex items-center justify-center pt-0 pb-16 px-4 sm:px-16 "
      >
        <div className="max-w-8xl mx-auto text-center">
          <h2
            ref={headingRef}
            className="text-[2.4rem] sm:text-6xl md:text-7xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8 mt-12 text-white"
          >
            The Echtventure Method
          </h2>
          <p
            ref={paragraphRef}
            className="mt-6 max-w-3xl text-md sm:text-lg mx-auto font-montserrat text-gray-300 leading-relaxed"
          >
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>
          <div ref={buttonRef} className="mt-6">
            <Link href="/coaches">
              <Button
                variant="solidDark"
                className="!font-butler !rounded-full !text-white !bg-[#6a3a3a] hover:!bg-[#7a4a4a] "
              >
                Discover Your Path
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <SecondProgram />
    </>
  );
};

export default ProgramsSection;
