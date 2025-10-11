"use client";
import React from "react";
import SecondProgram from "./SecondProgram";
import FlowingMenu from "./Reveal";

const ProgramsSection = () => {
  return (
    <>
      <div className=" text-black font-butler flex items-center justify-center py-12 pb-16  px-4 sm:px-16 rounded-b-xl ">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-[2.4rem] sm:text-6xl md:text-7xl font-butler font-extrabold tracking-tighter leading-none mb-4 sm:mb-8">
            The Echtventure Approach
          </h2>
          <h3 className=" sm:mt-6 mt-2 text-[1.1rem] sm:text-4xl font-butler font-semibold text-gray-800">
            Individual Coaching // Group Coaching // Team Building
          </h3>
          <p className="mt-8 max-w-3xl text-sm sm:text-base mx-auto font-butler text-gray-700 leading-relaxed">
            We leverage a unique blend of corporate management experience and
            holistic development, using powerful tools like the Enneagram
            Personality Profiling to forge deeper connections in both
            professional and personal relationships.
          </p>
        </div>
      </div>
      <SecondProgram />
    </>
  );
};

export default ProgramsSection;
