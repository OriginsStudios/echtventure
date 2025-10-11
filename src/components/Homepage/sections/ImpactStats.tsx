"use client";
import React from "react";
import CountUp from "@/components/ui/CountUp";

const ImpactStats = () => {
  return (
    <div className="bg-transparent py-16 sm:py-20 md:py-24">
      <div className="container-padding">
        <div className="flex flex-col items-center text-center">
          <p className="font-butler text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black pb-2 font-light">
            Impact Over
          </p>
          <div className="text-6xl sm:text-7xl md:text-8xl font-butler text-black leading-none italic">
            <CountUp to={2500} separator="," />
          </div>
          <p className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-butler text-black font-light">
            Individuals
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
