import Approach from "@/components/Homepage/sections/Approach";
import HomePageHero from "@/components/Homepage/sections/Hero";
import Mission from "@/components/Homepage/sections/Mission";
import Program from "@/components/Homepage/sections/Program";
import Footer from "@/components/layout/Footer";
import React from "react";

const page = () => {
  return (
    <section>
      <HomePageHero />
      <Approach />
      <Mission />
      <Program />
    </section>
  );
};

export default page;
