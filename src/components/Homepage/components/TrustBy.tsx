// components/TrustedBy.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LogoCard from "./LogoCard"; // Import the card component

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// --- Partner Data ---
// Partner logos from the /public/partner folder with their website URLs.
const partners = [
  {
    name: "AnyMind Group",
    logo: "/partner/anymind.png",
    website: "https://anymindgroup.com/",
  },
  {
    name: "Gary Chong Studios",
    logo: "/partner/garychongstudios.png",
    website: "https://garychongstudios.com/",
  },
  {
    name: "Seven Vault",
    logo: "/partner/sevenvault.png",
    website: "https://sevenvault.com/",
  },
  { name: "YTL", logo: "/partner/ytl.png", website: "https://www.ytl.com/" },
  {
    name: "Hypergear",
    logo: "/partner/hypergear.png",
    website: "https://www.hypergear.com.my/",
  },
  {
    name: "UHY",
    logo: "/partner/uhy.png",
    website: "https://www.uhy-th.com/index.php",
  },
  {
    name: "Morison Global",
    logo: "/partner/marisonglobal.png",
    website: "https://www.morisonglobal.com/",
  },
  {
    name: "RCA Wealth",
    logo: "/partner/RCA.png",
    website: "https://rcawealth.com.my/",
  },
  {
    name: "Voskos Advisory Group",
    logo: "/partner/voskos.png",
    website: "https://www.linkedin.com/company/voskos-advisory-group/",
  },
  {
    name: "IQVIA",
    logo: "/partner/iqvia.png",
    website: "https://www.iqvia.com",
  },
  {
    name: "Alpha Omega",
    logo: "/partner/alphaomega.png",
    website: "https://alphaomegasp.weebly.com/",
  },
  {
    name: "Kith and Kin Realty",
    logo: "/partner/kithandkin.png",
    website: "https://web.facebook.com/kithandkinrealty/?_rdc=1&_rdr#",
  },
  {
    name: "ESP Global",
    logo: "/partner/esp.png",
    website: "https://www.espglobal.co/",
  },
  {
    name: "KL Dental",
    logo: "/partner/kl.png",
    website: "https://www.kldental.com/",
  },
  {
    name: "Suree Food",
    logo: "/partner/sureefood.png",
    website: "https://sureefood.com/",
  },
  {
    name: "Marias",
    logo: "/partner/marias.png",
    website: "https://www.marias.com.my/",
  },
  {
    name: "Cheesiah",
    logo: "/partner/cheesiah.png",
    website: "https://csilk.com.my/",
  },
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Animate the elements into view on scroll
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".gsap-subtitle", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(
          ".gsap-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3" // Start slightly before the previous animation ends
        )
        .from(
          ".gsap-card",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.08, // Animate each card with a slight delay
            ease: "power2.out",
          },
          "-=0.5"
        );

      // GSAP Carousel Animation
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const totalWidth = carousel.scrollWidth / 2; // Half because we duplicate the content

        gsap.to(carousel, {
          x: -totalWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }
    },
    { scope: containerRef } // Scope the GSAP selectors to this component
  );

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-32 sm:pt-24 sm:pb-40 h-full "
    >
      <div className="text-center">
        {/* --- Titles --- */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="gsap-title mt-2 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl italic">
            People We Work With
          </h2>
        </div>

        {/* --- Logo Carousel --- */}
        <div
          className="mt-12 md:mt-16 w-full overflow-x-hidden rounded-2xl"
          style={{ minHeight: "280px" }}
        >
          <div
            ref={carouselRef}
            className="flex space-x-12 items-center rounded-2xl"
            style={{ height: "auto" }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <a
                key={`first-${partner.name}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex-shrink-0"
              >
                <LogoCard
                  src={partner.logo}
                  alt={partner.name}
                  className={`
                    gsap-card 
                    // Apply a subtle, alternating rotation to each card
                    hover:rotate-0 hover:z-10 hover:scale-105 // Straighten card and bring to front on hover
                    transition-all duration-300
                  `}
                />
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <a
                key={`second-${partner.name}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex-shrink-0"
              >
                <LogoCard
                  src={partner.logo}
                  alt={partner.name}
                  className={`
                    gsap-card 
                    hover:rotate-0 hover:z-10 hover:scale-105 
                    transition-all duration-300
                  `}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
