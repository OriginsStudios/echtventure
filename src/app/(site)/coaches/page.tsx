"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { coaches } from "@/constants/coaches";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// SVG component for the decorative leaf
const LeafSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1226 655"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    <path
      d="M1225.5 0.499939L655.034 0.499964C293.982 0.49998 0.770736 293.53 0.500244 654.5L570.966 654.5C932.018 654.5 1225.23 361.47 1225.5 0.499939Z"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
    ></path>
  </svg>
);

export default function CoachesPage() {
  const mainRef = useRef(null);
  const techCoverRef = useRef(null);
  const techTitleRef = useRef(null);
  const techParaRef = useRef(null);
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);

  const descText =
    "Meet the people behind ECHTVENTURE—experienced coaches dedicated to leadership development, personal mastery, and impactful teams.";

  useGSAP(
    () => {
      // --- Initial Page Load Animation ---
      if (techTitleRef.current) {
        const splitTitle = new SplitType(techTitleRef.current, {
          types: "chars",
        });

        // Set initial positions for all elements
        gsap.set(splitTitle.chars, { y: "110%", opacity: 0 });
        gsap.set(techParaRef.current, { y: 70, opacity: 0 });
        gsap.set(leftSvgRef.current, { x: -200, opacity: 0 });
        gsap.set(rightSvgRef.current, { x: 200, opacity: 0 });

        const tlCover = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 1,
        });

        // Animate all elements into view on load
        tlCover
          .to([leftSvgRef.current, rightSvgRef.current], {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          })
          .to(
            splitTitle.chars,
            {
              y: "0%",
              opacity: 1,
              duration: 1,
              stagger: 0.03,
              ease: "power4.out",
            },
            "-=0.8"
          )
          .to(
            techParaRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.7"
          );
      }

      const textElementsOnScroll = [techTitleRef.current, techParaRef.current];

      // --- Scroll Out/In Animation (for text) ---
      gsap.fromTo(
        textElementsOnScroll,
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        {
          opacity: 0,
          scale: 0.8,
          y: -100,
          ease: "power2.in",
          scrollTrigger: {
            trigger: techCoverRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Animate coach cards
      gsap.from(".coach-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".coaches-grid",
          start: "top 80%",
        },
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="min-h-screen">
      {/* Hero Section with Running Text */}
      <div
        ref={techCoverRef}
        className="tech-cover-container relative h-[80vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="sticky left-0 top-0 w-full h-full overflow-hidden">
              <div
                ref={leftSvgRef}
                className="absolute -left-[30rem] top-0 -translate-y-[30%]"
              >
                <div
                  className="h-[25rem] w-[50rem] text-custom-green opacity-20 will-change-transform scale-110"
                  style={{ filter: "drop-shadow(0 0 2px currentColor)" }}
                >
                  <LeafSVG />
                </div>
              </div>
              <div
                ref={rightSvgRef}
                className="absolute -right-[30rem] bottom-0 translate-y-[30%] rotate-180"
              >
                <div
                  className="h-[25rem] w-[50rem] text-custom-green opacity-20 will-change-transform scale-110"
                  style={{ filter: "drop-shadow(0 0 2px currentColor)" }}
                >
                  <LeafSVG />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full text-black text-center px-4 sm:px-6 md:px-8 z-10">
            <h1
              ref={techTitleRef}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black uppercase mb-4 sm:mb-6 md:mb-8 overflow-hidden leading-tight"
            >
              <span>Coaches</span>
            </h1>
            <p
              ref={techParaRef}
              className="max-w-4xl text-xl sm:text-2xl md:text-2xl lg:text-2xl leading-relaxed px-2"
            >
              {descText}
            </p>
          </div>
        </div>
      </div>
      {/* Coaches Grid Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-14">
        <ul className="coaches-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <li key={coach.slug} className="group coach-card">
              <Link
                href={`/coaches/${coach.slug}`}
                className="block rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/5] bg-neutral-100">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 pb-8">
                  <h3 className="text-lg font-semibold">{coach.name}</h3>
                  <p className="text-sm font-butler text-neutral-600 mt-1">
                    {coach.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
