"use client";
import React from "react";
import SecondProgram from "./SecondProgram";
import FlowingMenu from "./Reveal";
import CountUp from "@/components/ui/CountUp";

const demoItems = [
  {
    link: "/enneagram",
    text: "Founded in 2019 by Keith Tay",
    subtitle:
      "A visionary leader with over 20 years of corporate experience, Keith combines strategic management expertise with holistic development approaches. As an accredited Enneagram practitioner and certified coach, he specializes in transforming leaders and teams through deeper self-awareness and authentic connections.",
  },
  {
    link: "/enneagram",
    text: (
      <div className="text-center max-w-6xl mx-auto px-4">
        <span className="block sm:inline text-3xl sm:text-4xl md:text-5xl ">
          Impacted over{" "}
        </span>
        <CountUp
          from={0}
          to={2500}
          separator=","
          direction="up"
          duration={2}
          className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl inline-block tabular-nums min-w-[90px] sm:min-w-[120px] md:min-w-[130px] lg:min-w-[160px] underline decoration-2 sm:decoration-4"
        />{" "}
        <span className="block sm:inline text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
          individuals
        </span>
      </div>
    ),
    subtitle: "Accredited Trainer & Training Provider for HRDCorp",
  },
];
const ProgramsSection = () => {
  return (
    <>
      <div className=" text-black font-butler flex items-center justify-center py-24  px-4 sm:px-16 rounded-b-xl ">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-[2.4rem] sm:text-6xl md:text-7xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8">
            The Echtventure Approach
          </h2>
          <h3 className=" sm:mt-6 mt-2 text-[1.1rem] sm:text-4xl font-butler font-semibold text-gray-800">
            Individual Coaching // Group Coaching // Team Building
          </h3>
          <p className="mt-8 max-w-3xl text-sm sm:text-base mx-auto font-montserrat text-gray-700 leading-relaxed">
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>
        </div>
      </div>
      <FlowingMenu items={demoItems} />
      <SecondProgram />
    </>
  );
};

export default ProgramsSection;
