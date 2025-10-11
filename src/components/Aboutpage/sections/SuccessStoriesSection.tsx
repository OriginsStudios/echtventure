"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SuccessStoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section elements
    gsap.from(section.querySelectorAll(".story-card"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const stories = [
    {
      name: "Sarah M.",
      role: "Marketing Director",
      quote:
        "The Enneagram coaching transformed my leadership style and helped me build stronger relationships with my team.",
      result: "40% improvement in team engagement",
    },
    {
      name: "Michael K.",
      role: "Tech Entrepreneur",
      quote:
        "Echtventure's authentic approach helped me align my business goals with my personal values.",
      result: "Launched successful startup",
    },
    {
      name: "Jennifer L.",
      role: "HR Manager",
      quote:
        "The corporate training sessions created a more collaborative and understanding workplace culture.",
      result: "25% reduction in team conflicts",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Transformed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "200+", label: "Corporate Sessions" },
    { number: "5 Years", label: "Of Excellence" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-butler text-[clamp(2rem,6vw,64px)] leading-[0.9em] text-black uppercase mb-6">
            Success Stories
          </h2>
          <p className="font-butler text-[20px] leading-[1.6em] text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people who chose authenticity over
            conformity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-butler text-4xl md:text-5xl font-bold text-[#6a3a3a] mb-2">
                {stat.number}
              </div>
              <div className="font-butler text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-card bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <p className="font-butler text-gray-700 italic leading-relaxed mb-4">
                  "{story.quote}"
                </p>
                <div className="border-l-4 border-[#6a3a3a] pl-4">
                  <div className="font-butler font-bold text-black">
                    {story.name}
                  </div>
                  <div className="font-butler text-gray-600 text-sm">
                    {story.role}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-butler text-sm text-gray-600 uppercase tracking-wide mb-1">
                  Result
                </div>
                <div className="font-butler font-semibold text-[#6a3a3a]">
                  {story.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
