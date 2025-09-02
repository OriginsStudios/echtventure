import Button from "@/components/ui/Button";
import React from "react";

const HomePageHero = () => {
  return (
    <section className="bg-backgroundColorWhite flex flex-col justify-start items-start pt-8 container-padding">
      <div className=" mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
        <div className="flex-1 min-w-0  ">
          <h1
            className="font-extrabold text-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl  leading-none whitespace-pre-wrap
            break-words flex flex-col justify-center align-middle self-center uppercase font-bowlby tracking-wide pb-16 "
          >
            {" "}
            {/* ADDED `break-words` HERE to allow text to wrap */}
            echtventure
          </h1>
        </div>

        {/* Right Section: Description and Button */}
        <div className="flex-none md:w-1/3 lg:w-1/4 flex flex-col items-start text-left ">
          <p className="font-crimson text-gray-800 text-base md:text-lg mb-6 ">
            Authentic support, adding value, right resources, maximizing
            business potential.
          </p>
          <Button>View Coaches</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
