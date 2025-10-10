"use client";
import Button from "@/components/ui/Button";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from "@/components/ui/CountUp";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const pinContainerRef = useRef(null);
  const textSectionRef = useRef(null);
  const bounceCardsRef = useRef(null);

  // Define the bounce media array (mix of videos and images)
  const bounceMedia = [
    { type: "image", src: "/Bounce/Boss 1.JPG" },
    { type: "video", src: "/Bounce/20250806_084925000_iOS.mp4" },

    { type: "video", src: "/Bounce/video3.mp4" },
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

        // Store random values for each card (so they don't change on resize)
        const cardRandomValues = Array.from(cards).map(() => ({
          randomX: Math.random() - 0.5,
          randomY: Math.random() - 0.5,
          randomRotation: Math.random() - 0.5,
        }));

        // Function to calculate and set card positions
        const updateCardPositions = () => {
          cards.forEach((card: Element, index: number) => {
            // Responsive card spacing based on screen width
            const screenWidth = window.innerWidth;
            let cardSpacing = 360; // Desktop spacing (>= 1550px)
            let isVerticalLayout = false;

            // Determine layout and spacing based on screen width
            if (screenWidth < 640) {
              // Mobile: vertical layout with tighter spacing
              isVerticalLayout = true;
              cardSpacing = 180; // Increased from 130 to prevent overlap
            } else if (screenWidth < 768) {
              // Tablet small: vertical layout
              isVerticalLayout = true;
              cardSpacing = 200; // Increased from 145 to prevent overlap
            } else if (screenWidth < 1000) {
              // Below 1000px: vertical layout
              isVerticalLayout = true;
              cardSpacing = 220; // Increased from 160 to prevent overlap
            } else if (screenWidth < 1350) {
              // Between 1000px and 1550px: horizontal with overlapping (reduced spacing)
              isVerticalLayout = false;
              cardSpacing = 200; // Reduced spacing for overlap effect
            } else if (screenWidth < 1550) {
              // Between 1000px and 1550px: horizontal with overlapping (reduced spacing)
              isVerticalLayout = false;
              cardSpacing = 300; // Reduced spacing for overlap effect
            } else {
              // 1550px and above: full horizontal spacing
              isVerticalLayout = false;
              cardSpacing = 360;
            }

            // Calculate position based on layout orientation
            let positionX = 0;
            let positionY = 0;

            if (isVerticalLayout) {
              // Vertical layout: stack cards vertically, more centered
              const startY = -((cards.length - 1) * cardSpacing) / 2; // Center the group vertically
              positionY = startY + index * cardSpacing;
              positionX =
                cardRandomValues[index].randomX * (screenWidth < 640 ? 10 : 20); // Use stored random value
            } else {
              // Horizontal layout: spread cards horizontally (desktop)
              const startX = -((cards.length - 1) * cardSpacing) / 2; // Center the group
              positionX = startX + index * cardSpacing;
              positionY = cardRandomValues[index].randomY * 100; // Use stored random value
            }

            const randomRotation =
              cardRandomValues[index].randomRotation *
              (screenWidth < 640 ? 5 : 10); // Use stored random value

            // Update card position (for resize)
            gsap.set(card, {
              x: positionX,
              y: positionY,
              rotation: randomRotation,
            });
          });
        };

        // Initial setup - set cards to invisible
        cards.forEach((card: Element, index: number) => {
          gsap.set(card, {
            opacity: 0,
            scale: 0,
          });
        });

        // Set initial positions
        updateCardPositions();

        // Create scroll triggers for each card
        cards.forEach((card: Element, index: number) => {
          ScrollTrigger.create({
            trigger: pinContainerRef.current,
            start: `top+=${400 + index * 150}px top`, // Tighter card appearance timing (150px instead of 200px)
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

        // Handle window resize - update card positions dynamically
        const handleResize = () => {
          updateCardPositions();
          // Use a slight delay to prevent jittery updates during rapid resize
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup resize listener
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    // The main container with natural scroll flow
    // Adjusted height for better mobile/tablet experience
    <div
      ref={pinContainerRef}
      className="min-h-[120vh] bg-five-lines-blackbg relative"
    >
      <div className="container-padding min-h-[100vh] flex flex-col justify-center sticky top-0">
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

            {/* Impact Metric under description */}
            <div className="flex flex-col items-center">
              <p className="font-butler text-5xl sm:text-6xl md:text-7xl lg:text-8xl  text-gray-100 pb-2">
                Impact Over
              </p>
              <div className="text-6xl sm:text-7xl md:text-8xl font-butler text-white leading-none ">
                <CountUp to={2500} separator="," />
              </div>
              <p className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-butler text-gray-100 ">
                Individuals
              </p>
            </div>
          </div>
        </div>

        {/* 2. BounceCards Section */}
        {/* Positioned absolutely to sit in the center of the container */}
        {/* It starts with opacity-1 since we control individual card visibility */}
        {/* <div
          ref={bounceCardsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-1 p-2 sm:p-4 md:p-6 lg:p-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28"
        >
          <div className="relative w-full max-w-[1300px] h-[550px] sm:h-[600px] md:h-[650px] lg:h-[650px]">
            {bounceMedia.map((media, index) => (
              <div
                key={index}
                className="bounce-card absolute w-[200px] sm:w-[240px] md:w-[280px] lg:w-[340px] max-w-[340px] aspect-square border-4 sm:border-6 md:border-8 border-white rounded-[15px] sm:rounded-[20px] md:rounded-[30px] overflow-hidden pointer-events-auto"
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
                    webkit-playsinline="true"
                    preload="metadata"
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    onLoadedData={(e) => {
                      const video = e.currentTarget;
                      // Optimize: Reduce quality on mobile
                      if (window.innerWidth < 768) {
                        video.playbackRate = 1;
                      }
                      video.play().catch(() => {
                        // Fallback: try to play again after user interaction
                      });
                    }}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={media.src}
                    alt={`card-${index}`}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Mission;
