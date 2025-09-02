import Button from "@/components/ui/Button";
import React from "react";

const ProgramsSection = () => {
  return (
    <div className="bg-backgroundColorWhite text-black font-sans flex items-center justify-center py-28 sm:py-40 px-8 sm:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-none">
          OUR
          <br />
          PROGRAMS
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Chillpreneur, we offer a unique approach to creative education that
          emphasizes building and scaling your brand without the hustle. Our
          courses cover a range of topics, including audience growth, reaching
          your first six figures, building unshakable confidence, and making
          more money. Our goal is to help you build an industry-leading brand
          that reflects your values and empowers you to change the world. Join
          us and discover the power of building a business while embracing the
          chillpreneur lifestyle.
        </p>
        <div className="mt-10">
          <Button>FIND OUT MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
