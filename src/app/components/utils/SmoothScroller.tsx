// src/components/utils/SmoothScroller.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null; // This component doesn't render anything
}
