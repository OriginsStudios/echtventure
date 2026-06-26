import TrustedBy from "@/components/Homepage/components/TrustBy";
import Approach from "@/components/Homepage/sections/Approach";
import EnneagramSection from "@/components/Homepage/sections/EnneagramSection";
import Gallary from "@/components/Homepage/sections/Gallary";
import Mission2 from "@/components/Homepage/sections/Gallary2";
import Gallary2 from "@/components/Homepage/sections/Gallary2";
import HomePageHero from "@/components/Homepage/sections/Hero";
import Mission from "@/components/Homepage/sections/Mission";
import Program from "@/components/Homepage/sections/Program";
import React from "react";

const page = () => {
  return (
    <section>
      <HomePageHero />
      <Mission2 />
      <Program />
      <Gallary />
      <EnneagramSection />
      <Mission />
      {/* <Approach /> */}
      <TrustedBy />
    </section>
  );
};

export default page;
