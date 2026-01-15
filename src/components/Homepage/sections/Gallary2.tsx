

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
      if (window.innerWidth < 768) {
        const section = sectionRef.current;
        if (!section) return;
        
        // Immediately show content on mobile with no animation
        const missionTitle = section.querySelector("[data-mission-title]");
        const stepLines = section.querySelectorAll("[data-step-line]");
        const description = section.querySelector("[data-description]");
        
        // Use force3D: false for better mobile performance
        gsap.set([missionTitle, stepLines, description], { 
          autoAlpha: 1, 
          y: 0,
          force3D: false 
        });
        return;
      }

      // Desktop animations
      const section = sectionRef.current;
      if (!section) return;
      const missionTitle = section.querySelector("[data-mission-title]");
      const stepLines = section.querySelectorAll("[data-step-line]");
      const description = section.querySelector("[data-description]");
      const videoImage = section.querySelector("[data-video] img");

      if (!missionTitle || !stepLines.length) return;

      gsap.set([missionTitle, stepLines, description], { 
        autoAlpha: 0, 
        y: 40,
        force3D: true // Enable 3D transforms only on desktop
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
          markers: false, // Disable markers in production
        },
      });

      tl.to(missionTitle, { 
        autoAlpha: 1, 
        y: 0, 
        ease: "power3.out",
        force3D: true 
      })
        .to(stepLines, { 
          autoAlpha: 1, 
          y: 0, 
          stagger: 0.12, 
          ease: "power3.out",
          force3D: true 
        }, "-=0.5")
        .to(description, { 
          autoAlpha: 1, 
          y: 0, 
          ease: "power2.out",
          force3D: true 
        }, "-=0.6");

      if (videoImage) {
        gsap.set(videoImage, { 
          scale: 0.96,
          force3D: true 
        });
        gsap.to(videoImage, {
          scale: 1.04,
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1.5,
            markers: false,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent overflow-x-hidden py-8 md:py-20 xl:py-24"
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] xl:max-w-[1800px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        {/* Hero Image - Optimized for mobile */}
        <div className="flex justify-center mb-8 md:mb-16 xl:mb-24">
          <div
            data-video
            className="
              relative w-full aspect-video max-w-full overflow-hidden
              shadow-lg md:shadow-2xl
              rounded-lg md:rounded-2xl
              mx-0 sm:mx-2
            "
            style={{
              WebkitTapHighlightColor: "transparent",
              touchAction: "pan-y",
            }}
          >
            <picture className="block w-full h-full">
              <source 
                media="(max-width: 640px)" 
                srcSet="/gallery/gallerymobile/3.png"
                width={640}
                height={360}
              />
              <img
                src="/gallery/12b.png"
                alt="Echtventure mission visual"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={1920}
                height={1080}
                style={{
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              />
            </picture>
          </div>
        </div>

        {/* Content container */}
        <div className="relative min-h-[30vh] md:min-h-[40vh] flex flex-col items-center md:grid md:grid-cols-2 md:items-start md:gap-12 xl:gap-20">
          {/* OUR MISSION - Mobile optimized */}
          <div className="pt-8 md:pt-32 w-full flex justify-center md:justify-start items-center">
            <h2
              data-mission-title
              className="
                font-black tracking-tight leading-[0.95]
                text-[2rem] xs:text-[2.3rem] sm:text-[2.6rem]
                md:text-[clamp(3.5rem,6vw,6.5rem)]
                xl:text-[clamp(4.5rem,5.5vw,8rem)]
                text-center md:text-left
                w-full
                hyphens-auto md:hyphens-none
                break-words
              "
              style={{ 
                fontFamily: "Arial Black, Arial, sans-serif",
                WebkitTextSizeAdjust: "100%",
                textSizeAdjust: "100%",
              }}
            >
              <span className="inline-block md:hidden">OUR MISSION</span>
              <span className="hidden md:inline-block">
                OUR<br />MISSION
              </span>
            </h2>
          </div>

          {/* Steps - Mobile optimized */}
          <div className="pt-8 md:pt-12 w-full flex flex-col items-center md:items-end justify-start gap-4 md:gap-6 xl:gap-8">
            {[
              { text: "Build", accent: "AWARENESS" },
              { text: "Grow in", accent: "MASTERY" },
              { text: "Step into", accent: "LEADERSHIP" },
              { text: "Create lasting", accent: "IMPACT" },
            ].map((item, i) => (
              <div
                key={i}
                data-step-line
                className="
                  flex flex-col md:flex-row
                  gap-1 md:gap-5 lg:gap-6
                  w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-none
                  items-center md:items-end md:justify-end
                  text-center md:text-right
                  px-2 xs:px-0
                "
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span
                  className="
                    text-sm sm:text-base md:text-xl lg:text-2xl
                    font-montserrat opacity-80 tracking-wide
                    md:whitespace-nowrap
                    text-center md:text-right
                    leading-tight
                    font-medium
                  "
                  style={{
                    WebkitFontSmoothing: "antialiased",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.text}
                </span>
                <span
                  className="
                    font-black tracking-tight leading-none
                    text-[1.5rem] xs:text-[1.7rem] sm:text-[1.9rem]
                    md:text-[clamp(2.2rem,4vw,3.8rem)]
                    xl:text-[clamp(2.8rem,3.5vw,4.8rem)]
                    text-center md:text-right
                    break-words
                    hyphens-auto
                  "
                  style={{ 
                    fontFamily: "Arial Black, Arial, sans-serif",
                    WebkitTextSizeAdjust: "100%",
                    textSizeAdjust: "100%",
                  }}
                >
                  {item.accent}
                </span>
              </div>
            ))}
          </div>

          {/* Description - Mobile optimized */}
          <div
            data-description
            className="
              col-span-2 mx-auto mt-8 md:mt-10 xl:mt-12
              max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-3xl
              text-center
              text-sm sm:text-base md:text-lg lg:text-xl
              leading-relaxed sm:leading-relaxed md:leading-relaxed
              font-sans text-black/80
              w-full
              px-2 xs:px-0
            "
            style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
              fontSizeAdjust: "from-font",
            }}
          >
            {/* Your mission text goes here */}
          </div>
        </div>
      </div>
    </section>
  );
}