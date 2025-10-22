"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useGSAP(
    () => {
      const preloader = preloaderRef.current;
      if (!preloader) return;

      const topLogo = preloader.querySelector(".preloader-top");
      const bottomLogo = preloader.querySelector(".preloader-bottom");

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimationComplete(true);
        },
      });

      gsap.set([topLogo, bottomLogo], { autoAlpha: 1 });
      gsap.set(topLogo, { y: "-50vh" }); // Start from top of screen
      gsap.set(bottomLogo, { y: "50vh" }); // Start from bottom of screen

      // First animation: Move towards center but not touching
      tl.to(topLogo, {
        y: "0px", // Move to exact center position
        duration: 0.7,
        ease: "steps(5)",
      });

      tl.to(
        bottomLogo,
        {
          y: "-0.9px", // Move to exact center position
          duration: 0.7,
          ease: "steps(5)",
        },
        0
      ); // Start at the same time as topLogo

      // Final animation: Fade out
      tl.to(preloader, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.5, // Wait 1 second in the middle before fading out
      });
    },
    { scope: preloaderRef }
  );

  if (isAnimationComplete) {
    return null;
  }

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] h-screen w-full bg-[#000000]"
      ref={preloaderRef}
    >
      {/* Top Logo - positioned above center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full w-[300px]">
        <Image
          src="/reload/T.png"
          width={300}
          height={150}
          loading="eager"
          alt="Logo Top"
          className="preloader-top w-full object-cover"
          unoptimized
        />
      </div>

      {/* Bottom Logo - positioned below center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[300px]">
        <Image
          src="/reload/B.png"
          width={300}
          height={150}
          loading="eager"
          alt="Logo Bottom"
          className="preloader-bottom w-full object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
