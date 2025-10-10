"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

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
  const slidingLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slidingLayerRef.current) return;

    // Create one-time sliding animation with GSAP on page load
    // Slide from left (-100%) to center (0%) and stay there
    const tl = gsap.timeline({ delay: 1 });

    tl.fromTo(
      slidingLayerRef.current,
      {
        x: "-100%",
      },
      {
        x: "0%",
        duration: 1.2,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className={`relative w-full min-h-[100px] md:min-h-[150px] ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Asset 8 - Base layer */}
        <div className="relative w-full h-auto">
          <Image
            src="/logo/hero/Asset 8.svg"
            alt="Echtventure Logo Base"
            width={1200}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Asset 9 - Middle layer (stacked on top) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
          <Image
            src="/logo/hero/Asset 9.svg"
            alt="Echtventure Logo Middle"
            width={1200}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Asset 10 - Animated sliding layer (stacked on top) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            ref={slidingLayerRef}
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
