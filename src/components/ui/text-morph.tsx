"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

type TextMorphProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
};

export function TextMorph({
  children,
  as: Component = "p",
  className,
  style,
}: TextMorphProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = containerRef.current;
    if (!element) return;

    // Set the text content directly so SplitType can process it
    element.textContent = children;

    // Split into characters and animate in
    const split = new SplitType(element, { types: "chars" });

    // Ensure initial state to avoid flash of un-animated content
    gsap.set(split.chars, { y: 12, opacity: 0 });

    const tween = gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: element,
        start: "top 40%", // require user to scroll before triggering
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Refresh ScrollTrigger after DOM modifications by SplitType
    ScrollTrigger.refresh();

    return () => {
      // Kill any ScrollTriggers created for this element
      ScrollTrigger.getAll().forEach((st) => {
        const trig = st.trigger as HTMLElement | undefined;
        if (trig === element) st.kill();
      });

      // Kill the tween to free resources
      if (tween) tween.kill();

      // Revert SplitType to restore original DOM
      split.revert();
    };
  }, [children]);

  return (
    <Component
      ref={containerRef as React.RefObject<any>}
      className={className}
      aria-label={children}
      style={style}
    />
  );
}
