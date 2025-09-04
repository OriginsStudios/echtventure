"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type HTMLAttributes } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Center headline with surrounding images
// Uses public/cover*.{jpg,jpeg} assets
export default function Gallary() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const hero = section.querySelector<HTMLElement>("[data-hero]");
      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-card]")
      );
      const center = section.querySelector<HTMLElement>("[data-center]");

      if (!hero) return;

      // initial states
      gsap.set(hero, {
        // Make the hero very large at the top-right to start
        scale: 2.6,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "100% 0%",
      });
      if (center) gsap.set(center, { autoAlpha: 0, y: 20 });
      if (cards.length) gsap.set(cards, { autoAlpha: 0, y: 60, scale: 0.96 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1) HERO: smoothly shrink in place (top-right)
      tl.to(hero, { scale: 1, duration: 0.55, ease: "power2.out" });

      // 2) Surrounding photos start appearing during hero scale-down
      if (cards.length)
        tl.to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.35,
            ease: "power1.out",
          },
          "<+0.15"
        );

      // 3) (removed lateral move) keep hero in top-right; just reveal center after

      // 4) Reveal center text after images settle
      if (center)
        tl.to(
          center,
          { autoAlpha: 1, y: 0, duration: 0.25, ease: "power1.out" },
          "+=0.05"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="cover"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F1EA] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid wrapper */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {/* Top-left image */}
          <PhotoCard
            data-card
            className="md:col-span-3 md:col-start-1 md:row-start-1 md:-mt-8"
            src="/cover1.jpeg"
            alt="Portrait"
            width={640}
            height={800}
            priority
          />

          {/* Top-right family image (moved to avoid overlap with hero) */}
          <PhotoCard
            data-card
            className="md:col-span-3 md:col-start-7 md:row-start-1 md:-mt-12"
            src="/cover2.jpg"
            alt="Family"
            width={640}
            height={800}
          />

          {/* Center content */}
          <div
            data-center
            className="relative z-10 md:col-span-6 md:col-start-4 md:row-start-2 text-center px-2"
          >
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Building brands
              <br className="hidden sm:block" />
              from the inside out
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Hi! We’re Becca and Yoni — the husband and wife duo (with 3 kids
              in tow) behind Skye High.
            </p>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40"
              >
                Our process
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          {/* Middle-left reclining image */}
          <PhotoCard
            data-card
            className="md:col-span-4 md:col-start-1 md:row-start-3 md:mt-8"
            src="/cover.jpg"
            alt="Creative at work"
            width={900}
            height={600}
          />

          {/* Middle-right portrait */}
          <PhotoCard
            data-card
            className="md:col-span-3 md:col-start-10 md:row-start-3 md:mt-10"
            src="/cover3.jpeg"
            alt="Portrait with hat"
            width={640}
            height={800}
          />

          {/* Bottom-center large couple image */}
          <PhotoCard
            data-card
            className="md:col-span-6 md:col-start-4 md:row-start-4 md:mt-10"
            src="/echtventure.png"
            alt="Team"
            width={1200}
            height={900}
          />

          {/* Bottom-right portrait */}
          <PhotoCard
            data-card
            className="md:col-span-3 md:col-start-10 md:row-start-3 md:mt-10"
            src="/cover3.jpeg"
            alt="Portrait with hat"
            width={640}
            height={800}
          />

          {/* HERO now lives in the top-right grid slot */}
          <PhotoCard
            data-hero
            className="md:col-span-3 md:col-start-10 md:row-start-1 md:-mt-12 z-20"
            src="/cover4.jpeg"
            alt="Team"
            width={1200}
            height={900}
          />
        </div>
      </div>

      {/* subtle background grain (fallback) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_1px,_#F5F1EA_1px)] [background-size:12px_12px] opacity-[0.35]"
      />
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
        "relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md " +
        className
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
