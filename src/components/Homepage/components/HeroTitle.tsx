"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextPressureProps {
  className?: string;
  // Keep old props for compatibility but ignore them
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({ className = "" }) => {
  const asset8Ref = useRef<HTMLDivElement>(null);
  const asset9Ref = useRef<HTMLDivElement>(null);
  const asset10Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !asset8Ref.current ||
      !asset9Ref.current ||
      !asset10Ref.current ||
      !containerRef.current
    )
      return;

    // Set initial positions (centered)
    gsap.set([asset8Ref.current, asset9Ref.current, asset10Ref.current], {
      x: 0,
      y: 0,
    });

    // Create scroll-triggered animations to push assets to top left
    gsap.to([asset8Ref.current, asset9Ref.current, asset10Ref.current], {
      x: "-50%", // Move to the left
      y: "-50%", // Move up
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[100px] md:min-h-[150px] ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Asset 8 - Base layer */}
        <div className="relative w-full h-auto overflow-hidden">
          <div ref={asset8Ref} className="w-full h-full">
            <Image
              src="/logo/hero/Asset 8.svg"
              alt="Echtventure Logo Base"
              width={1200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Asset 9 - Middle layer (stacked on top) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            ref={asset9Ref}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/logo/hero/Asset 9.svg"
              alt="Echtventure Logo Middle"
              width={1200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Asset 10 - Scroll animated layer (stacked on top) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            ref={asset10Ref}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/logo/hero/Asset 10.svg"
              alt="Echtventure Logo Animated"
              width={1200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPressure;
