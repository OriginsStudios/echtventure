"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoCard from "./LogoCard";

// --- Partner Data ---
const partners = [
  {
    name: "AnyMind Group",
    logo: "/partner/anymind.png",
    website: "https://anymindgroup.com/",
    description: "Marketing and commerce enablement platform",
  },
  {
    name: "Gary Chong Studios",
    logo: "/partner/garychongstudios.png",
    website: "https://garychongstudios.com/",
    description: "Creative video and content production studio",
  },
  {
    name: "Seven Vault",
    logo: "/partner/sevenvault.png",
    website: "https://sevenvault.com/",
    description: "Influencer and talent management agency",
  },
  {
    name: "YTL",
    logo: "/partner/ytl.png",
    website: "https://www.ytl.com/",
    description: "Diversified infrastructure conglomerate",
  },
  {
    name: "Hypergear",
    logo: "/partner/hypergear.png",
    website: "https://www.hypergear.com.my/",
    description: "Outdoor waterproof bags and accessories",
  },
  {
    name: "UHY",
    logo: "/partner/uhy.png",
    website: "https://www.uhy-th.com/index.php",
    description: "Global accounting and consulting network",
  },
  {
    name: "Morison Global",
    logo: "/partner/marisonglobal.png",
    website: "https://www.morisonglobal.com/",
    description: "Association of independent accounting firms",
  },
  {
    name: "RCA Wealth",
    logo: "/partner/RCA.png",
    website: "https://rcawealth.com.my/",
    description: "Wealth management and advisory",
  },
  {
    name: "Voskos Advisory Group",
    logo: "/partner/voskos.png",
    website: "https://www.linkedin.com/company/voskos-advisory-group/",
    description: "Leadership and business advisory",
  },
  {
    name: "IQVIA",
    logo: "/partner/iqvia.png",
    website: "https://www.iqvia.com",
    description: "Healthcare data and analytics",
  },
  {
    name: "Alpha Omega",
    logo: "/partner/alphaomega.png",
    website: "https://alphaomegasp.weebly.com/",
    description: "Sports performance and training",
  },
  // ... more partners
];

export default function TrustedBy() {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Show first 4 items on mobile, 6 on larger screens initially
  const initialCount = isLargeScreen ? 6 : 4;

  // Trigger animation when showAll changes
  useEffect(() => {
    if (showAll && !displayAll) {
      // Show More animation
      setDisplayAll(true);
      setIsAnimating(true);

      // Wait for DOM update, then animate
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const extraItems = itemRefs.current
            .slice(initialCount)
            .filter(Boolean);

          gsap.fromTo(
            extraItems,
            {
              autoAlpha: 0,
              y: 60,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.12,
              clearProps: "all",
              onComplete: () => setIsAnimating(false),
            }
          );
        });
      });
    } else if (!showAll && displayAll) {
      // Show Less animation with smooth height collapse
      setIsAnimating(true);
      const extraItems = itemRefs.current.slice(initialCount).filter(Boolean);
      const reversedItems = [...extraItems].reverse();

      // First get actual heights
      reversedItems.forEach((item) => {
        if (item) {
          item.style.height = `${item.offsetHeight}px`;
        }
      });

      // Then animate to collapse
      gsap.to(reversedItems, {
        opacity: 0,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.08,
        onComplete: () => {
          setDisplayAll(false);
          setIsAnimating(false);
        },
      });
    }
  }, [showAll, displayAll, initialCount]);

  const displayedPartners = displayAll
    ? partners
    : partners.slice(0, initialCount);

  return (
    <section className="pt-20 pb-32 sm:pt-24 sm:pb-40 h-full ">
      {/* Main container for center alignment */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 bg-[#f0eeeb]">
        {/* --- Titles (centered) --- */}
        <div className="pb-16 text-center">
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
            People We Work With
          </h2>
        </div>

        {/* --- Logo Grid --- */}
        <div className="mt-12 md:mt-16 w-full">
          {/* Grid with 1 column below 1024px, 2 columns up to 1536px, 3 columns on 2xl screens and above */}
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-12">
            <style jsx>{`
              .grid > div:not(:last-child) {
                margin-bottom: 5rem;
              }
            `}</style>
            {displayedPartners.map((partner, index) => {
              const isExtraItem = index >= initialCount;

              return (
                <div
                  key={partner.name}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`
                    relative
                    lg:border-r border-gray-300
                    lg:[&:nth-child(2n)]:border-r-0
                    2xl:[&:nth-child(2n)]:border-r
                    overflow-hidden
                  `}
                  style={{
                    visibility:
                      isExtraItem && !displayAll ? "hidden" : "visible",
                    opacity: isExtraItem && !displayAll ? 0 : 1,
                  }}
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer block"
                  >
                    <LogoCard
                      src={partner.logo}
                      alt={partner.name}
                      name={partner.name}
                      description={partner.description}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Show More/Less Button --- */}
        {partners.length > initialCount && (
          <div className="mt-16 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              disabled={isAnimating}
              className="hover:bg-black text-black font-semibold py-2 px-8 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-full bg-white hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
