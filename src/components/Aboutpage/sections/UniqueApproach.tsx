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

const UniqueApproachSection = () => {
  const approachRef = useRef(null);
  const methodsRef = useRef(null);

  useEffect(() => {
    gsap.from(approachRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: approachRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".method-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: methodsRef.current,
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
            <h2 className="font-montserrat text-[48px] leading-[1.1em] font-normal text-black ">
              The echtventure Method
            </h2>
          </AnimatedTitle>
        </div>

        <div ref={approachRef} className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-montserrat text-[24px] text-gray-700 leading-[1.6em] mb-8">
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>

          <div className="bg-backgroundColorWhite border border-lineColor p-8 rounded-lg">
            <h3 className="font-montserrat text-[28px] font-semibold text-black mb-4">
              Our Philosophy
            </h3>
            <p className="font-montserrat text-[20px] text-gray-700 leading-[1.5em]">
              Authentic leadership starts from within. By understanding your
              core motivations, fears, and desires, you can lead with genuine
              confidence and create meaningful impact in every relationship and
              situation.
            </p>
          </div>
        </div>

        <div
          ref={methodsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {/* Corporate Experience */}
          <div className="method-card bg-white border border-lineColor p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#6a3a3a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4H20V6H21V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V6H4V4M5 8V19H19V8H5M7 10H9V12H7V10M11 10H13V12H11V10M15 10H17V12H15V10Z" />
              </svg>
            </div>
            <h3 className="font-montserrat text-[24px] font-semibold text-black mb-4 text-center">
              Corporate Management Experience
            </h3>
            <p className="font-montserrat text-[18px] text-gray-700 leading-[1.5em] text-center">
              Real-world business insights from years of corporate leadership
              and management experience.
            </p>
          </div>

          {/* Holistic Development */}
          <div className="method-card bg-white border border-lineColor p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#6a3a3a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M7 13H9V15H7V13M15 11H17V13H15V11M11 15H13V17H11V15Z" />
              </svg>
            </div>
            <h3 className="font-montserrat text-[24px] font-semibold text-black mb-4 text-center">
              Holistic Development
            </h3>
            <p className="font-montserrat text-[18px] text-gray-700 leading-[1.5em] text-center">
              A comprehensive approach that addresses personal, professional,
              and relational growth.
            </p>
          </div>

          {/* Enneagram Profiling */}
          <div className="method-card bg-white border border-lineColor p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-[#6a3a3a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.09 8.26L22 9L14.09 9.74L12 16L9.91 9.74L2 9L9.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="font-montserrat text-[24px] font-semibold text-black mb-4 text-center">
              Enneagram Personality Profiling
            </h3>
            <p className="font-montserrat text-[18px] text-gray-700 leading-[1.5em] text-center">
              Deep personality insights that unlock authentic self-awareness and
              improved relationships.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <AnimatedTitle>
            <h3 className="font-montserrat text-[36px] font-normal text-black text-center mb-12">
              Our Process
            </h3>
          </AnimatedTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#6a3a3a] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat font-bold text-xl">
                1
              </div>
              <h4 className="font-montserrat text-[20px] font-semibold text-black mb-2">
                <span className="italic font-light">Awareness</span>
              </h4>
              <p className="font-montserrat text-[16px] text-gray-700">
                Develop self-understanding and recognize your potential
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#6a3a3a] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat font-bold text-xl">
                2
              </div>
              <h4 className="font-montserrat text-[20px] font-semibold text-black mb-2">
                <span className="italic font-light">Mastery</span>
              </h4>
              <p className="font-montserrat text-[16px] text-gray-700">
                Build skills, refine capabilities, and achieve excellence
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#6a3a3a] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat font-bold text-xl">
                3
              </div>
              <h4 className="font-montserrat text-[20px] font-semibold text-black mb-2">
                <span className="italic font-light">Leadership</span>
              </h4>
              <p className="font-montserrat text-[16px] text-gray-700">
                Inspire others and create meaningful impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproachSection;
