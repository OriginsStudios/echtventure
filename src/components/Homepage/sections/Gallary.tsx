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

      gsap.set([cards, center], { autoAlpha: 0 });

      ScrollTrigger.matchMedia({
        // Desktop animation
        "(min-width: 768px)": function () {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=1000",
              pin: true,
              scrub: 2.5,
              anticipatePin: 1,
            },
          });

          // UPDATED: Changed from .from() to .fromTo() to control the final scale
          tl.fromTo(
            wrapper,
            {
              // Start state (zoomed in and off-center)
              scale: 3.5,
              xPercent: 90,
              yPercent: -70,
            },
            {
              // End state (larger and centered)
              scale: 0.8, // <-- The grid will be 50% larger at the end
              xPercent: 0,
              yPercent: 0,
              duration: 2.2,
              ease: "power2.inOut",
            }
          ).to(
            [cards, center],
            {
              autoAlpha: 1,
              stagger: 0.08,
              duration: 0.8,
              ease: "power2.inOut",
            },
            0.2
          );

          return () => {
            tl.kill();
          };
        },

        // Mobile animation
        "(max-width: 767px)": function () {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=400",
              pin: false,
              scrub: 1.2,
            },
          });

          // UPDATED: Changed from .from() to .fromTo() for mobile as well
          tl.fromTo(
            wrapper,
            {
              // Start state
              scale: 2.5,
              xPercent: 70,
              yPercent: -105,
            },
            {
              // End state
              scale: 0.8, // <-- The grid will be 20% larger at the end
              xPercent: 0,
              yPercent: 0,
              duration: 1.5,
              ease: "power2.inOut",
            }
          ).to(
            [cards, center],
            {
              autoAlpha: 1,
              stagger: 0.05,
              duration: 0.7,
              ease: "power2.out",
            },
            0.2
          );

          return () => {
            tl.kill();
          };
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="cover"
      ref={sectionRef}
      className="relative flex h-[90vh] items-end md:items-center justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6  ">
        <div data-grid-wrapper>
          <div className="relative grid grid-cols-4 md:grid-cols-12 md:gap-4 gap-12">
            {/* Top-left image */}
            <PhotoCard
              data-card
              className="hidden md:block col-span-2 md:col-span-3 md:col-start-1 md:row-start-1"
              src="/gallery/4.jpg"
              alt="Portrait"
              width={320}
              height={400}
              priority
            />

            {/* Top-right image */}
            <PhotoCard
              data-card
              className="hidden md:block col-span-2 md:col-span-3 md:col-start-10 md:row-start-1 "
              src="/gallery/3.jpg"
              alt="Family"
              width={320}
              height={300}
            />

            {/* Center content */}
            <div
              data-center
              className="relative z-10 col-span-4 row-start-2 md:col-span-6 md:col-start-4 md:row-start-2 text-center px-2 md:pb-12"
            >
              <h2 className="font-butler text-xl leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-6xl">
                Building brands
                <br className="hidden sm:block" />
                from the inside out
              </h2>
              <p className="mx-auto mt-2 max-w-xl font-montserrat text-xs leading-relaxed text-neutral-600 sm:mt-3 sm:text-base">
                Hi! We’re Becca and Yoni — the husband and wife duo behind Skye
                High.
              </p>
              <div className="mt-4 sm:mt-5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40"
                >
                  Our process
                </Link>
              </div>
            </div>

            {/* Middle-left image (NEW HERO) */}
            <PhotoCard
              data-hero
              className="col-span-2 row-start-3 md:col-span-4 md:col-start-2 md:-mt-12 z-20"
              src="/gallery/5.jpg"
              alt="Creative at work"
              width={450}
              height={300}
              priority
            />

            {/* Middle-right image */}
            <PhotoCard
              data-card
              className="col-span-2 row-start-3 md:col-span-3 md:col-start-9 md:-mt-8"
              src="/gallery/2.jpg"
              alt="Portrait with hat"
              width={320}
              height={400}
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
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
