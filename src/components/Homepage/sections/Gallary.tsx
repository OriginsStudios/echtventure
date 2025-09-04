"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type HTMLAttributes } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallary() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const wrapper = section.querySelector<HTMLElement>("[data-grid-wrapper]");
      const hero = section.querySelector<HTMLElement>("[data-hero]");
      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-card]")
      );
      const center = section.querySelector<HTMLElement>("[data-center]");

      if (!wrapper || !hero || !center || !cards.length) return;

      // Set initial state of surrounding elements to be invisible
      gsap.set([cards, center], { autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1000", // Controls the scroll duration of the zoom
          pin: true,
          scrub: 1, // Smooths the scroll animation
        },
      });

      // Start zoomed in on the hero image
      tl.from(wrapper, {
        scale: 2.5,
        // Further adjusted yPercent to move the initial view even higher
        yPercent: -90,
        duration: 1,
        ease: "power2.inOut",
      })
        // As it zooms out, fade in the other elements
        .to(
          [cards, center],
          {
            autoAlpha: 1,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.inOut",
          },
          // Start the fade-in 0.2s into the zoom-out animation
          0.2
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="cover"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F1EA] py-12 md:py-16"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        {/* The new wrapper element that will be scaled */}
        <div data-grid-wrapper>
          <div className="relative grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-8">
            {/* Top-left image */}
            <PhotoCard
              data-card
              className="col-span-2 md:col-span-3 md:col-start-1 md:row-start-1 md:mt-16"
              src="/gallery/4.jpg"
              alt="Portrait"
              width={640}
              height={800}
              priority
            />

            {/* Top-right image */}
            <PhotoCard
              data-card
              className="col-span-2 md:col-span-3 md:col-start-10 md:row-start-1"
              src="/gallery/3.jpg"
              alt="Family"
              width={640}
              height={800}
            />

            {/* Center content */}
            <div
              data-center
              className="relative z-10 col-span-4 row-start-2 md:col-span-6 md:col-start-4 md:row-start-2 text-center px-2 md:pb-24"
            >
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-6xl">
                Building brands
                <br className="hidden sm:block" />
                from the inside out
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg">
                Hi! We’re Becca and Yoni — the husband and wife duo behind Skye
                High.
              </p>
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40"
                >
                  Our process
                </Link>
              </div>
            </div>

            {/* Middle-left image */}
            <PhotoCard
              data-card
              className="col-span-2 row-start-3 md:col-span-4 md:col-start-2 md:-mt-24"
              src="/gallery/5.jpg"
              alt="Creative at work"
              width={900}
              height={600}
            />

            {/* Middle-right image */}
            <PhotoCard
              data-card
              className="col-span-2 row-start-3 md:col-span-3 md:col-start-9 md:-mt-16"
              src="/gallery/2.jpg"
              alt="Portrait with hat"
              width={640}
              height={800}
            />

            {/* Bottom-center large image (HERO) */}
            <PhotoCard
              data-hero
              className="col-span-4 row-start-4 md:col-span-6 md:col-start-4 z-20 mt-10"
              src="/gallery/1.jpg"
              alt="Team"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
        "relative overflow-hidden rounded-xl md:rounded-2xl border border-black/5 bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md " +
        className
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
