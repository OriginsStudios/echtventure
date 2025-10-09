"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BACKGROUND_IMAGES = [
  "/cover.jpg",
  "/cover1.jpeg",
  "/cover2.jpg",
  "/cover3.jpeg",
];

const TEXT_LINES = ["Awareness", "Mastery", "Leadership"];

export default function Approach() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useGSAP(
    () => {
      // Use matchMedia for proper responsive handling
      const mm = gsap.matchMedia();

      // Mobile (767px and below) - Vertical layout
      mm.add("(max-width: 767px)", () => {
        gsap.set(".keith-image-wrapper", {
          left: "50%",
          xPercent: -50,
          top: "60%",
          yPercent: -50,
        });
        gsap.set(".text-content", {
          left: "50%",
          xPercent: -50,
          top: "88%",
          yPercent: -50,
          autoAlpha: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: "top top",
            end: "bottom bottom",
          },
        });

        // Text animations for small mobile
        tl.fromTo(
          ".line-0 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          0.2
        ).to(
          ".line-0 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-1 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        ).to(
          ".line-1 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-2 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        );
      });

      // Tablet (768px - 1023px) - Vertical layout
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.set(".keith-image-wrapper", {
          left: "50%",
          xPercent: -50,
          top: "60%",
          yPercent: -50,
        });
        gsap.set(".text-content", {
          left: "50%",
          xPercent: -50,
          top: "90%",
          yPercent: -50,
          autoAlpha: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: "top top",
            end: "bottom bottom",
          },
        });

        // Text animations for medium screens
        tl.fromTo(
          ".line-0 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          0.2
        ).to(
          ".line-0 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-1 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        ).to(
          ".line-1 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-2 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        );
      });

      // Desktop (1024px and above) - Horizontal layout
      mm.add("(min-width: 1024px)", () => {
        gsap.set(".text-content", {
          left: "50%",
          xPercent: -50,
          top: "50%",
          yPercent: -50,
          autoAlpha: 0,
        });
        gsap.set(".keith-image-wrapper", {
          left: "50%",
          xPercent: -50,
          top: "calc(60% + 40px)", // Account for navbar height
          yPercent: -50,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: "top-=80px top",
            end: "bottom-=80px bottom",
          },
        });

        // Move Keith to the right side and keep him there (faster)
        tl.to(
          ".keith-image-wrapper",
          {
            left: "100%",
            xPercent: -100,
            top: "calc(60% + 40px)", // Maintain position accounting for navbar
            ease: "power3.out",
            duration: 0.2,
          },
          0
        )
          // Show text content
          .to(
            ".text-content",
            {
              left: "0%",
              xPercent: 0,
              autoAlpha: 1,
              ease: "power1.inOut",
            },
            0.05
          );
        // Text animations for desktop
        tl.fromTo(
          ".line-0 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          0.5
        ).to(
          ".line-0 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-1 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        ).to(
          ".line-1 .char",
          { y: -50, autoAlpha: 0, stagger: 0.05, ease: "power1.in" },
          "+=0.5"
        );

        tl.fromTo(
          ".line-2 .char",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "<"
        );
      });
    },
    { scope: container, revertOnUpdate: true }
  );
  return (
    <main className="container-padding pb-24">
      <section
        ref={container}
        className="relative h-[200vh] sm:h-[250vh] md:h-[300vh] pt-20"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${BACKGROUND_IMAGES[currentImageIndex]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flash absolute inset-0 bg-white opacity-0 z-30"></div>
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-md"></div>
          </div>

          <div className="relative w-full h-full">
            <div className="text-content absolute w-[50%] 2xl:w-[45%] h-full flex justify-center lg:justify-start opacity-0 lg:ml-24 xl:ml-32">
              <h2 className="text-white text-[9vw] sm:text-[10vw] md:text-[6.5vw] lg:text-[7vw] xl:text-[7vw] font-bold text-center lg:text-left font-butler leading-none tracking-tighter whitespace-nowrap px-2">
                {TEXT_LINES.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className={`line-${lineIndex} absolute inset-0 flex items-center justify-center lg:justify-start`}
                  >
                    {line.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="char"
                        style={{ display: "inline-block" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                ))}
              </h2>
            </div>

            <div className="keith-image-wrapper absolute w-[70%] md:w-[50%] lg:w-[55%] h-full flex justify-center">
              <img
                src="/PR-KEITH.png"
                alt="Keith"
                className="h-auto w-full max-h-[65%] md:max-h-[70%] lg:max-h-[85%] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
