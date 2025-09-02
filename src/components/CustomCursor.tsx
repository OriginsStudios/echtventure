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

    if (!dot || !ring) return;

    gsap.set(dot, { scale: 1 });
    gsap.set(ring, { scale: 1 });

    const onMouseMove = (e: MouseEvent) => {
      // dot sticks to mouse immediately
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // ring follows the dot’s position instead of mouse directly
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(dot, {
        scale: 3, // expand dot (inverted area grows too)
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(ring, {
        scale: 0, // hide ring when dot expands
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(ring, {
        scale: 1, // restore ring when dot returns to normal
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const hoverableElements = document.querySelectorAll(
      "a, button, [data-hover-cursor]"
    );

    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

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
