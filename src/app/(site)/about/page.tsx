"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import About page sections
import OurStorySection from "@/components/Aboutpage/sections/OurStory";
import MissionVisionSection from "@/components/Aboutpage/sections/MissionVision";
import UniqueApproachSection from "@/components/Aboutpage/sections/UniqueApproach";
import MeetTheTeamSection from "@/components/Aboutpage/sections/MeetTheTeam";

gsap.registerPlugin(ScrollTrigger);

// --- Reusable AnimatedTitle Component (for section headers) ---
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

// --- Hero Section ---
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-backgroundColorWhite text-black p-8 text-center container-padding">
    <div className="max-w-6xl">
      {/* Responsive font size using clamp for the large headline */}
      <h1 className="font-bowlby text-[clamp(3rem,10vw,120px)] leading-[0.9em] text-black uppercase">
        About Echtventure
      </h1>
      <p className="mt-8 font-roboto text-[24px] leading-[1.5em] text-gray-700 max-w-4xl mx-auto">
        Authenticity in Action. Since 2019, we've been helping working
        millennials and business leaders unlock their full potential through
        purpose-driven coaching and corporate training.
      </p>
      <div className="mt-10">
        <button className="bg-[#6a3a3a] text-white font-roboto text-[18px] font-bold py-4 px-10 rounded-full hover:bg-[#7a4a4a] transition-colors duration-300">
          Discover Our Story
        </button>
      </div>
    </div>
  </section>
);

// --- Main About Page Component ---
const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <UniqueApproachSection />
      <MeetTheTeamSection />
    </main>
  );
};

export default AboutPage;
