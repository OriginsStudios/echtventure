import Button from "@/components/ui/Button";
import React from "react";

const Mission = () => {
  return (
    <div className="bg-backgroundColorBlack bg-five-lines-blackbg text-[#f5f5f5] font-butler py-20  flex items-center justify-center container-padding">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl  font-bold tracking-tight leading-tight">
              OUR MISSION IS TO{" "}
              <span className="italic font-light">TRANSFORM</span>
            </h1>
            <Button className="mt-12 bg-[#6a3a3a] hover:bg-[#7a4a4a] transition-colors duration-300 text-white  text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-full shadow-lg">
              DISCOVER THE ENNEAGRAM
            </Button>
          </div>

          {/* Right Column */}
          <div className="flex items-center h-full pt-0 lg:pt-6">
            <p className="font-montserrat text-base text-gray-300 leading-relaxed">
              Our mission at Echtventure is to transform how leaders understand
              themselves and connect with others. Through the powerful lens of
              the Enneagram personality system, we help individuals discover
              their core motivations, fears, and desires. We believe authentic
              leadership starts from within - by understanding who you are at
              your deepest level, you can lead with genuine confidence and
              create meaningful impact in every relationship and situation. Our
              goal is to empower leaders to move beyond surface-level
              interactions and build connections that drive real transformation
              in their organizations and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
