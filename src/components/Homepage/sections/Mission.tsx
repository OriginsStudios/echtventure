"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Mission = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowTitle(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <section className="relative w-full bg-backgroundColorBlack text-[#f5f5f5] overflow-hidden pt-12">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-16 xl:px-24 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 2xl:gap-32 w-full">
          {/* Left: Combined text */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left font-butler pb-6 max-w-2xl">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-1 sm:mb-2 transition-all duration-700 ease-out transform ${
                showTitle
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              KEITH TAY
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight font-montserrat  sm:mt-1 text-gray-300 mt-3">
              FOUNDED IN 2019
            </h2>
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 max-w-prose">
              <p className="font-montserrat text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-8">
                <span className="font-semibold text-white">
                  Impacted over 2,500 individuals
                </span>{" "}
                — through coaching, workshops, and leadership programs.
              </p>
              <p className="font-montserrat text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-8">
                <span className="font-semibold text-white">
                  Accredited Trainer for HRDCorp
                </span>{" "}
                — delivering programs that are recognized and people-centered.
              </p>
            </div>
            {/* Desktop button under text (hidden on mobile) */}
            <Link
              href="/coaches/keith-tay"
              className="mt-12 hidden md:inline-block"
            >
              <Button className="bg-[#6a3a3a] hover:bg-[#7a4a4a] text-white text-xs font-bold uppercase px-10 py-4 rounded-full font-montserrat">
                Book consultant with Keith
              </Button>
            </Link>
          </div>

          {/* Right: Keith image */}
          <div className="flex items-center justify-center">
            <div className="w-[85%] sm:w-[75%] md:w-[90%] lg:w-[80%] xl:w-[70%]  md:translate-x-0 translate-x-[2px]">
              <img src="/PR-KEITH.png" alt="Keith" className="w-full h-auto" />
            </div>
          </div>
          {/* Mobile-only centered button (after image) */}
          <div className="flex justify-center md:hidden w-full">
            <Link href="/coaches/keith-tay" className="mt-2 mb-12 w-full px-4">
              <Button className="w-full bg-[#6a3a3a] hover:bg-[#7a4a4a] text-white text-sm md:text-xs font-bold uppercase py-4 rounded-full">
                Book consultant with Keith
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
