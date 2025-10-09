"use client";
import Button from "@/components/ui/Button";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const pinContainerRef = useRef(null);
  const textSectionRef = useRef(null);
  const bounceCardsRef = useRef(null);

  // Define the bounce media array (mix of videos and images)
  const bounceMedia = [
    { type: "video", src: "/Bounce/1009.mp4" },
    { type: "image", src: "/Bounce/Boss 1.JPG" },
    { type: "video", src: "/Bounce/20250806_084925000_iOS.mp4" },
    { type: "image", src: "/Bounce/Conference Speaker.jpg" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade out animation - starts when section reaches top of viewport
      gsap.to(textSectionRef.current, {
        opacity: 0,
        y: -50,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top", // Start fading when section reaches the top (navbar level)
          end: "top+=500px top", // Complete fade over 500px of scroll
          scrub: 2,
        },
      });

      // Individual card animations - appear one by one with random positions
      if (bounceCardsRef.current) {
        const cardsContainer = bounceCardsRef.current as HTMLElement;
        const cards = cardsContainer.querySelectorAll(".bounce-card");

        // Make sure the container is visible
        gsap.set(bounceCardsRef.current, { opacity: 1 });

        cards.forEach((card: Element, index: number) => {
          // Position cards from left to right with proper spacing
          const cardSpacing = 400; // Increased space between cards for even bigger cards
          const startX = -((cards.length - 1) * cardSpacing) / 2; // Center the group
          const positionX = startX + index * cardSpacing;
          const randomY = (Math.random() - 0.5) * 100; // Larger random Y offset
          const randomRotation = (Math.random() - 0.5) * 15; // More rotation

          // Set initial state - all cards start invisible and scaled down
          gsap.set(card, {
            opacity: 0,
            scale: 0,
            x: positionX,
            y: randomY,
            rotation: randomRotation,
          });

          // Create individual scroll trigger for each card with progressive timing
          // Cards appear one by one as you scroll down - each card needs more scroll to appear
          ScrollTrigger.create({
            trigger: pinContainerRef.current,
            start: `top+=${400 + index * 200}px top`, // Cards start appearing after text fades (400px base + 200px per card)
            end: `bottom top`,
            onEnter: () => {
              // Animate card appearance with bounce effect
              gsap.to(card, {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "back.out(1.7)",
                overwrite: true,
              });
            },
            onLeave: () => {
              // Keep visible when scrolling past
            },
            onEnterBack: () => {
              // Re-animate when scrolling back
              gsap.to(card, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                overwrite: true,
              });
            },
            onLeaveBack: () => {
              // Hide when scrolling back up past trigger
              gsap.to(card, {
                opacity: 0,
                scale: 0,
                duration: 0.4,
                ease: "power2.in",
                overwrite: true,
              });
            },
          });
        });
      }
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    // The main container with natural scroll flow
    // Increased height to allow for smooth transitions
    <div
      ref={pinContainerRef}
      className="min-h-[280vh] bg-backgroundColorBlack bg-five-lines-blackbg relative"
    >
      <div className="container-padding min-h-screen flex flex-col justify-center sticky top-0">
        {/* 1. Text Content Section */}
        {/* This content will be centered and will fade out on scroll */}
        <div ref={textSectionRef} className="mx-auto w-full z-10">
          <div className="flex flex-col gap-10 items-center justify-center text-center w-full px-4 sm:px-6 md:px-8">
            {/* Title */}
            <div className="font-butler text-[#f5f5f5] w-full">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-center mx-auto">
                <span className="font-light">TRUST THE </span>
                <span className="italic ">PROCESS!</span>
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-3xl mx-auto">
              <p className="font-montserrat text-lg sm:text-xl text-gray-300 leading-relaxed text-center mx-auto">
                Echtventure exists to create impact in every space that we are
                able to enter. We have seen countless transformations in both
                individuals and teams, that when high mastery and great
                leadership is present, their company is elevated to the next
                level. We desire this for all who we work with.
              </p>
            </div>
          </div>
        </div>

        {/* 2. BounceCards Section */}
        {/* Positioned absolutely to sit in the center of the container */}
        {/* It starts with opacity-1 since we control individual card visibility */}
        <div
          ref={bounceCardsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-1 p-2"
        >
          <div className="relative" style={{ width: 1400, height: 700 }}>
            {bounceMedia.map((media, index) => (
              <div
                key={index}
                className="bounce-card absolute w-[380px] aspect-square border-8 border-white rounded-[30px] overflow-hidden pointer-events-auto"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {media.type === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    src={media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={media.src}
                    alt={`card-${index}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
