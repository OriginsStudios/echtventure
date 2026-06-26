"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Get the global lenis instance from window if it exists
    const globalLenis = (window as any).lenis;
    if (globalLenis) {
      setLenis(globalLenis);
    }
  }, []);

  return lenis;
};

// Utility functions for smooth scrolling
export const scrollTo = (target: string | number, options?: any) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, options);
  }
};

export const scrollToTop = () => {
  scrollTo(0, { duration: 1.5 });
};

export const scrollToElement = (selector: string) => {
  scrollTo(selector, { duration: 1.2 });
};
