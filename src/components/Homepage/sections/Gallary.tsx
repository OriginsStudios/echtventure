"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallary() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const titleLines = section.querySelectorAll("[data-title-line]");
      const videoContainer = section.querySelector("[data-video]");
      const description = section.querySelector("[data-description]");

      if (!titleLines.length || !videoContainer || !description) return;

      // Initial state
      gsap.set([titleLines, videoContainer, description], {
        autoAlpha: 0,
        y: 50,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.to(titleLines, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          videoContainer,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="container-padding mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Large bold text */}
          <div className="space-y-0 lg:space-y-2">
            <h2
              data-title-line
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#D4FF00] leading-[0.9] tracking-tight"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              INVESTOR.
            </h2>
            <h2
              data-title-line
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#D4FF00] leading-[0.9] tracking-tight"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              INNOVATOR.
            </h2>
            <h2
              data-title-line
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#D4FF00] leading-[0.9] tracking-tight"
              style={{ fontFamily: "Arial Black, sans-serif" }}
            >
              DISRUPTOR.
            </h2>
          </div>

          {/* Right side - Video and Description */}
          <div className="space-y-6">
            {/* Video container */}
            <div
              data-video
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <video
                className="w-full h-full object-cover"
                src="/Bounce/video3.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>

            {/* Description text */}
            <div data-description className="text-white">
              <p className="text-lg sm:text-xl leading-relaxed font-montserrat">
                Steven Bartlett is an Entrepreneur, speaker, investor, author,
                Dragon on Dragon's Den and the host of Europe's leading podcast
                'The Diary of a CEO'.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
