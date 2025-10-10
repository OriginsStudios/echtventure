"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const countRef = useRef({ value: direction === "down" ? to : from });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      const startValue = direction === "down" ? to : from;
      const endValue = direction === "down" ? from : to;

      countRef.current.value = startValue;
      element.textContent = String(startValue);

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          once: true,
          onEnter: () => {
            if (typeof onStart === "function") {
              onStart();
            }

            gsap.to(countRef.current, {
              value: endValue,
              duration: duration,
              delay: delay,
              ease: "power1.inOut",
              onUpdate: () => {
                const hasDecimals = maxDecimals > 0;

                const options: Intl.NumberFormatOptions = {
                  useGrouping: !!separator,
                  minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                  maximumFractionDigits: hasDecimals ? maxDecimals : 0,
                };

                const formattedNumber = Intl.NumberFormat(
                  "en-US",
                  options
                ).format(Math.round(countRef.current.value));
                element.textContent = separator
                  ? formattedNumber.replace(/,/g, separator)
                  : formattedNumber;
              },
              onComplete: () => {
                // Ensure final value is exact
                const options: Intl.NumberFormatOptions = {
                  useGrouping: !!separator,
                  minimumFractionDigits: maxDecimals > 0 ? maxDecimals : 0,
                  maximumFractionDigits: maxDecimals > 0 ? maxDecimals : 0,
                };
                const formattedNumber = Intl.NumberFormat(
                  "en-US",
                  options
                ).format(endValue);
                element.textContent = separator
                  ? formattedNumber.replace(/,/g, separator)
                  : formattedNumber;

                if (typeof onEnd === "function") {
                  onEnd();
                }
              },
            });
          },
        });
      });

      return () => ctx.revert();
    }
  }, [
    from,
    to,
    direction,
    delay,
    duration,
    separator,
    maxDecimals,
    onStart,
    onEnd,
  ]);

  return <span className={className} ref={ref} />;
}
