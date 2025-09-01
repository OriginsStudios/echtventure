"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return; // Ensure refs are available

    // Initial GSAP setup for the ring's scale (useful for hover effect)
    gsap.set(ring, { scale: 1 });

    const onMouseMove = (e: MouseEvent) => {
      // Animate the dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      // Animate the ring
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      // Animate the ring to become a larger, solid circle (by scaling it up)
      gsap.to(ring, {
        scale: 1.5, // Make the ring significantly larger
        backgroundColor: "#232323", // Change background to black
        borderColor: "transparent", // Hide the border
        duration: 0.3,
        ease: "power2.out",
      });
      // Optionally hide the dot, or make it blend in
      gsap.to(dot, {
        opacity: 0, // Make the dot disappear
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      // Animate the ring back to its original state
      gsap.to(ring, {
        scale: 1, // Reset scale
        backgroundColor: "transparent", // Reset background
        borderColor: "#535353", // Reset border
        duration: 0.3,
        ease: "power2.out",
      });
      // Bring the dot back
      gsap.to(dot, {
        opacity: 1, // Make the dot reappear
        duration: 0.3,
      });
    };

    // Add mousemove listener
    window.addEventListener("mousemove", onMouseMove);

    // Get all elements that should trigger the hover effect
    const hoverableElements = document.querySelectorAll(
      "a, button, [data-hover-cursor]" // Add custom data attribute for more control
    );

    // Attach event listeners to hoverable elements
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
