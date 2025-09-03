"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    },
    { scope: container, revertOnUpdate: true }
  );
  return (
    <main className="container-padding pb-24">
      <section
        ref={container}
        className="relative h-64 px-8 py-12 flex items-start pt-6 justify-center text-center text-white md:h-96 lg:h-[32rem] " // Added responsive heights
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

        <div className="hidden lg:flex absolute left-16 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-30">
          {/* Button 1 */}
          <button className="bg-black rounded-2xl px-6 py-4 w-96 text-left transition-transform duration-300 hover:translate-x-4 hover:bg-gray-800 group">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-400 text-lg italic">
                    Latest Release
                  </span>
                </div>
                <div className="text-white font-semibold text-2xl">
                  Our Approach
                </div>
              </div>
              <div className="text-white text-2xl transition-transform group-hover:translate-x-1">
                →
              </div>
            </div>
          </button>

          {/* Button 2 */}
          <button className="bg-black rounded-2xl px-6 py-4 w-96 text-left transition-transform duration-300 hover:translate-x-4 hover:bg-gray-800 group">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400 text-lg italic">
                    Our Method
                  </span>
                </div>
                <div className="text-white font-semibold text-2xl">
                  Coaching
                </div>
              </div>
              <div className="text-white text-2xl transition-transform group-hover:translate-x-1">
                →
              </div>
            </div>
          </button>

          {/* Button 3 */}
          <button className="bg-black rounded-2xl px-6 py-4 w-96 text-left transition-transform duration-300 hover:translate-x-4 hover:bg-gray-800 group">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-lg italic">Success</span>
                </div>
                <div className="text-white font-semibold text-2xl">Results</div>
              </div>
              <div className="text-white text-2xl transition-transform group-hover:translate-x-1">
                →
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
