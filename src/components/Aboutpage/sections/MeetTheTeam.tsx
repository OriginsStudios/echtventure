"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

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

const MeetTheTeamSection = () => {
  const profileRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(profileRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: profileRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(contentRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-24 bg-backgroundColorWhite bg-five-lines container-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle>
            <h2 className="font-montserrat text-[48px] leading-[1.1em] font-normal text-black">
              Our Leadership
            </h2>
          </AnimatedTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={profileRef} className="relative">
            <div className="relative max-w-md mx-auto">
              <Image
                src="/cover.jpg"
                alt="Keith Tay, Founder and Chief Coach of Echtventure"
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-lg w-full"
              />
              {/* Floating credentials */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-md border border-lineColor">
                <p className="font-montserrat text-[14px] font-semibold text-[#6a3a3a]">
                  Certified Professional Coach
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#6a3a3a] text-white p-4 rounded-lg shadow-md">
                <p className="font-montserrat text-[14px] font-semibold">
                  International Speaker
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h3 className="font-montserrat text-[36px] font-semibold text-black mb-2">
                Keith Tay
              </h3>
              <p className="font-montserrat text-[20px] text-[#6a3a3a] font-semibold mb-4">
                Founder & Chief Coach
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-montserrat text-[20px] text-gray-700 leading-[1.6em]">
                A Thought Leader, International Speaker, and certified
                professional coach, Keith has been passionately training the
                next generation of leaders since 2005.
              </p>

              <p className="font-montserrat text-[18px] text-gray-700 leading-[1.6em]">
                With extensive corporate management experience and deep
                expertise in personality profiling, Keith brings a unique blend
                of practical business acumen and psychological insights to every
                coaching engagement.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-white p-6 rounded-lg border border-lineColor">
              <h4 className="font-montserrat text-[24px] font-semibold text-black mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#6a3a3a] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="font-montserrat text-[16px] text-gray-700">
                    20+ years in leadership development and coaching
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#6a3a3a] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="font-montserrat text-[16px] text-gray-700">
                    Certified Enneagram Practitioner and Trainer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#6a3a3a] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="font-montserrat text-[16px] text-gray-700">
                    Coached 100+ individuals and trained 2500+ professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#6a3a3a] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span className="font-montserrat text-[16px] text-gray-700">
                    Featured speaker at international conferences and corporate
                    events
                  </span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/coaches/keith-tay">
                <button className="bg-[#6a3a3a] text-white font-montserrat text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#7a4a4a] transition-colors duration-300">
                  Read Keith's Full Profile
                </button>
              </Link>
              <Link href="/coaches">
                <button className="border border-[#6a3a3a] text-[#6a3a3a] font-montserrat text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#6a3a3a] hover:text-white transition-colors duration-300">
                  Meet Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Team Preview */}
        <div className="mt-20 text-center">
          <AnimatedTitle>
            <h3 className="font-montserrat text-[32px] font-normal text-black mb-8">
              Our Extended Network
            </h3>
          </AnimatedTitle>

          <p className="font-montserrat text-[20px] text-gray-700 leading-[1.6em] max-w-3xl mx-auto mb-8">
            Keith leads a network of experienced coaches and trainers, each
            bringing specialized expertise to serve our diverse client needs
            across different industries and leadership levels.
          </p>

          <Link href="/coaches">
            <button className="bg-backgroundColorWhite border border-[#6a3a3a] text-[#6a3a3a] font-montserrat text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#6a3a3a] hover:text-white transition-colors duration-300">
              Explore Our Full Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
