"use client";

import Image from "next/image";
import Link from "next/link";
import { type HTMLAttributes, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Gallary() {
  const component = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // FIX: Specify the element type as HTMLElement for TypeScript
      const cards = gsap.utils.toArray<HTMLElement>("[data-card], [data-hero]");

      // TypeScript now correctly infers that `card` is an HTMLElement
      cards.forEach((card) => {
        const image = card.querySelector("img");

        gsap.to(image, {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: card, // This is now type-safe
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            // markers: true,
          },
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={component}
      id="cover"
      className="relative py-16 pt-0 sm:py-24"
    >
      {/* ... rest of your JSX remains exactly the same ... */}
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6">
          <div data-grid-wrapper>
            <div className="relative grid grid-cols-4 md:grid-cols-12 md:gap-8 gap-6">
              {/* Top-left image */}
              <PhotoCard
                data-card
                className="hidden md:block col-span-2 md:col-span-4 md:col-start-1 md:row-start-1"
                src="/gallery/6.jpg"
                alt="Portrait"
                width={320}
                height={400}
                priority
              />

              {/* Top-right image */}
              <PhotoCard
                data-card
                className="hidden md:block col-span-2 md:col-span-4 md:col-start-9 md:row-start-1 "
                src="/gallery/14.jpg"
                alt="Family"
                width={320}
                height={300}
              />

              {/* Top image for mobile/tablet */}
              <div className="col-span-4 row-start-1 flex justify-center md:hidden">
                <PhotoCard
                  data-card
                  className="w-full"
                  src="/gallery/gallerymobile/1.jpg"
                  alt="Portrait with hat"
                  width={320}
                  height={400}
                />
              </div>

              {/* Center content */}
              <div
                data-center
                className="relative z-10 col-span-4 row-start-2 md:col-span-12 md:row-start-2 text-center px-2 pb-12 py-16  "
              >
                <h1 className="text-5xl font-butler leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-8xl font-bold ">
                  Trust the process
                </h1>
              </div>

              {/* Main "hero" image */}
              <div className="col-span-4 row-start-3 flex justify-center md:col-span-5 md:col-start-2 md:-mt-22 z-20 md:mr-24">
                <PhotoCard
                  data-hero
                  className="w-full md:max-w-none"
                  src="/gallery/12.jpg"
                  alt="Creative at work"
                  width={450}
                  height={300}
                  priority
                />
              </div>

              {/* Middle-right image */}
              <PhotoCard
                data-card
                className="hidden md:block col-span-4 md:col-start-8 md:-mt-8 md:row-start-3"
                src="/gallery/12b.png"
                alt="Portrait with hat"
                width={320}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PhotoCard component remains unchanged
function PhotoCard({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  ...rest
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={
        "relative overflow-hidden rounded-lg md:rounded-xl border border-black/5 bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md " +
        className
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
