import TrustedBy from "@/components/Homepage/components/TrustBy";
import Approach from "@/components/Homepage/sections/Approach";
import Gallary from "@/components/Homepage/sections/Gallary";
import Gallaryv2 from "@/components/Homepage/sections/Gallaryv2";
import HomePageHero from "@/components/Homepage/sections/Hero";
import Mission from "@/components/Homepage/sections/Mission";
import Program from "@/components/Homepage/sections/Program";
import React from "react";

const page = () => {
  return (
    <section>
      <HomePageHero />
      <Approach />
      <Mission />
      {/* <Gallary /> */}
      <Gallaryv2 />
      <Program />
      <TrustedBy />
    </section>
  );
};

export default page;
