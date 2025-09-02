import HomePageHero from "@/components/Homepage/sections/Hero";
import Mission from "@/components/Homepage/sections/Mission";
import Program from "@/components/Homepage/sections/Program";
import Footer from "@/components/layout/Footer";
import React from "react";

const page = () => {
  return (
    <section>
      <HomePageHero />
      <Mission />
      <Program />
      <Footer />
    </section>
  );
};

export default page;
