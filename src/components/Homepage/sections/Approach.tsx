"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// An array of background images to cycle through.
const BACKGROUND_IMAGES = [
  "/cover.jpg",
  "/cover1.jpeg",
  "/cover2.jpg",
  "/cover3.jpeg",
];

export default function Approach() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const container = useRef(null);

  // FIX 1: Provide a type for the ref that allows a GSAP Timeline or null.
  const flashTimeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Initialize the timeline and assign it to the ref's 'current' property.
      flashTimeline.current = gsap
        .timeline({ paused: true })
        .to(".flash", {
          opacity: 1,
          duration: 0.15,
          onComplete: () => {
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length
            );
          },
        })
        .to(".flash", {
          opacity: 0,
          duration: 0.35,
        });

      // Animate words appearing from left to right on scroll
      gsap.set(".background-text span", {
        opacity: 0,
        x: -100,
        rotationY: -90,
      });

      // ScrollTrigger setup - simplified approach
      gsap.to(".background-text span", {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    },
    { scope: container, revertOnUpdate: true }
  );
  return (
    <main className="container-padding pb-24">
      <section
        ref={container}
        className="relative h-96 px-8 py-12 flex items-start pt-6 justify-center text-center text-white md:h-[40rem] lg:h-[48rem] xl:h-[56rem] " // Increased responsive heights
      >
        <div
          className="absolute inset-0 transition-all duration-300 rounded-xl  " // Changed inset-8 to inset-0 for full coverage
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGES[currentImageIndex]})`,
            backgroundPosition: "center", // Changed to center for better responsiveness
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flash absolute inset-0 bg-white opacity-0 z-20 rounded-2xl"></div>
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>
        </div>

        {/* Background text behind Keith's image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 w-full max-w-4xl">
          <h2 className="background-text text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold text-center font-butler leading-none">
            <span className="word-1">PURPOSE</span>
            <br />
            <span className="word-2">MEETS</span>
            <br />
            <span className="word-3">PASSION!</span>
          </h2>
        </div>

        {/* Keith's image in the center - full height */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <img
            src="/PR-KEITH.png"
            alt="Keith"
            className="h-full w-auto max-h-80 md:max-h-[32rem] lg:max-h-[40rem] xl:max-h-[48rem] object-cover shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
