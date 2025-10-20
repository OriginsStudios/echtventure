"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Mission2() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const titleLines = section.querySelectorAll("[data-title-line]");
      const videoContainer = section.querySelector("[data-video]");
      const videoImage = section.querySelector("[data-video] img");
      const description = section.querySelector("[data-description]");

      if (!titleLines.length || !videoContainer || !description) return;

      // Initial state - keep video container visible on all screen sizes
      gsap.set([titleLines, description], {
        autoAlpha: 0,
        y: 50,
      });
      // Keep video container visible on all screen sizes
      gsap.set(videoContainer, {
        autoAlpha: 1,
        y: 0,
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

      // Animate only title and description (video container stays visible)
      tl.to(titleLines, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      }).to(
        description,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Set initial padding and scale for the image container and image
      if (videoContainer) {
        gsap.set(videoContainer, {
          paddingLeft: "8vw",
          paddingRight: "8vw",
          paddingTop: "6vh",
          transformOrigin: "center center",
          force3D: true,
        });
      }
      if (videoImage) {
        gsap.set(videoImage, {
          scale: 0.92,
          transformOrigin: "center center",
          force3D: true,
        });
      }

      // As user scrolls through the section, scale image up smoothly
      if (videoImage) {
        gsap.to(videoImage, {
          scale: 1.06,
          ease: "none",
          transformOrigin: "center center",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            scrub: 1.6,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[65vh] sm:min-h-[80vh] lg:min-h-screen bg-transparent flex items-center justify-center overflow-hidden"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Video container - centered, full-bleed - order-1 on mobile, order-2 on lg+ */}
        <div className="flex justify-center -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-24 mb-8 sm:mb-12 lg:mb-0 order-1 lg:order-2">
          <div
            data-video
            className="relative w-screen aspect-video rounded-lg overflow-hidden "
          >
            <picture>
              {/* Use mobile-specific image on small screens */}
              <source
                media="(max-width: 640px)"
                srcSet="/gallery/gallerymobile/3.JPG"
              />
              <img
                className="w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform]"
                src="/mission1.jpg"
                alt="echtventure"
                style={{ imageRendering: "auto" }}
              />
            </picture>
          </div>
        </div>

        {/* Title and Description Row - order-2 on mobile, order-1 on lg+ */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 sm:gap-8 lg:gap-20 mb-8 sm:mb-12 lg:px-6 order-2 lg:order-1">
          {/* Large bold text - left side */}
          <div className="w-full lg:w-auto z-10 lg:pt-24">
            <div className="space-y-2 text-center lg:text-left">
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                AWARENESS
              </h2>
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words whitespace-nowrap"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                {"TO\u00A0MASTERY"}
              </h2>
              <h2
                data-title-line
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl  3xl:text-9xl font-black text-black leading-[0.95] tracking-tighter break-words whitespace-nowrap"
                style={{ fontFamily: "Arial Black, sans-serif" }}
              >
                {"TO\u00A0LEADERSHIP"}
              </h2>
            </div>
          </div>

          {/* Description text - right side, aligned with title */}
          <div
            data-description
            className="w-full lg:w-[400px] xl:w-[500px] text-black text-center lg:text-left mx-auto"
          >
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed font-montserrat">
              echtventure exists to create impact in every space that we are
              able to enter. We have seen countless transformations in both
              individuals and teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
