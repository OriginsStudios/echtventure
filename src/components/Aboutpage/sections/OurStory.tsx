"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return <div ref={ref}>{children}</div>;
};

const OurStorySection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-24 bg-white bg-five-lines container-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle>
            <h2 className="font-butler text-[48px] leading-[1.1em] font-normal text-black mb-6">
              Authenticity in Action: The Story of Echtventure
            </h2>
          </AnimatedTitle>
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-butler text-[20px] text-gray-700 leading-[1.6em]">
                Founded in 2019, Echtventure emerged from a clear and compelling
                mission: to help working millennials progressively realize their
                passion and purpose in life.
              </p>
              <p className="font-butler text-[20px] text-gray-700 leading-[1.6em]">
                Our journey began with the recognition that many talented
                professionals were struggling to find meaning and fulfillment in
                their careers, despite their success on paper.
              </p>
              <p className="font-butler text-[20px] text-gray-700 leading-[1.6em]">
                We believe that when individuals align their work with their
                authentic selves and deeper purpose, they don't just
                succeed—they thrive and create lasting positive impact.
              </p>
            </div>

            <div className="bg-backgroundColorWhite border border-lineColor p-8 rounded-lg">
              <div className="text-center">
                <div className="font-butler text-[64px] font-bold text-[#6a3a3a] leading-none">
                  2019
                </div>
                <p className="mt-4 font-butler text-[18px] text-gray-700 font-semibold">
                  Year Founded
                </p>
                <p className="mt-2 font-butler text-[16px] text-gray-600">
                  With a mission to help working millennials realize their
                  passion and purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
