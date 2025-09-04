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

const MissionVisionSection = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.from(missionRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(visionRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-24 bg-backgroundColorWhite container-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle>
            <h2 className="font-crimson text-[48px] leading-[1.1em] font-normal text-black">
              Our Mission & Vision
            </h2>
          </AnimatedTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div ref={missionRef} className="bg-white p-12 rounded-lg border border-lineColor">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6a3a3a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="font-crimson text-[32px] font-semibold text-black mb-6">
                Our Mission
              </h3>
              <p className="font-roboto text-[22px] text-gray-700 leading-[1.5em] font-medium">
                "To provide the right resources at the right time to maximise our clients' business potential."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="bg-white p-12 rounded-lg border border-lineColor">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6a3a3a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z"/>
                </svg>
              </div>
              <h3 className="font-crimson text-[32px] font-semibold text-black mb-6">
                Our Vision
              </h3>
              <p className="font-roboto text-[22px] text-gray-700 leading-[1.5em] font-medium">
                "To be the catalyst for a generation of authentic leaders who create meaningful impact in their organizations and communities."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <AnimatedTitle>
            <h3 className="font-crimson text-[36px] font-normal text-black text-center mb-12">
              Our Core Values
            </h3>
          </AnimatedTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="font-crimson text-[24px] font-semibold text-[#6a3a3a] mb-4">
                Authenticity
              </div>
              <p className="font-roboto text-[18px] text-gray-700 leading-[1.5em]">
                We believe in being genuine, real, and true to oneself in all interactions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="font-crimson text-[24px] font-semibold text-[#6a3a3a] mb-4">
                Excellence
              </div>
              <p className="font-roboto text-[18px] text-gray-700 leading-[1.5em]">
                We are committed to delivering exceptional value and results for our clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="font-crimson text-[24px] font-semibold text-[#6a3a3a] mb-4">
                Growth
              </div>
              <p className="font-roboto text-[18px] text-gray-700 leading-[1.5em]">
                We foster continuous learning and development for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
