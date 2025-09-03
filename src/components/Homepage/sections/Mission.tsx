import Button from "@/components/ui/Button";
import React from "react";

const Mission = () => {
  return (
    <div className="bg-backgroundColorBlack bg-five-lines-blackbg text-[#f5f5f5] font-crimson py-20  flex items-center justify-center container-padding">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl  font-bold tracking-tight leading-tight">
              OUR MISSION IS TO{" "}
              <span className="italic font-light">DISRUPT</span>
            </h1>
            <Button className="mt-12 bg-[#6a3a3a] hover:bg-[#7a4a4a] transition-colors duration-300 text-white  text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-full shadow-lg">
              ABOUT CHILLPRENEUR
            </Button>
          </div>

          {/* Right Column */}
          <div className="flex items-center h-full pt-0 lg:pt-6">
            <p className=" text-base text-gray-300 leading-relaxed">
              Our mission here at the Chillpreneur Company is to be a disruptive
              force in the online business world. We are here to change online
              coaching and education, focusing on what matters and making an
              impact. Chillpreneur is not only an education platform but also an
              embodiment of its core beliefs of creating a fun, fulfilling, and
              freeing business. By being an example, Erin and The Chillpreneur
              Company aim to empower other business owners to find unique ways
              to change the world while simultaneously releasing the need to
              contribute to burnout culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
