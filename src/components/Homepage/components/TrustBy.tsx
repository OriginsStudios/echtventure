"use client";

import { useState, useEffect } from "react";
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
  const displayedPartners = showAll
    ? partners
    : partners.slice(0, initialCount);

  return (
    <section className="pt-20 pb-32 sm:pt-24 sm:pb-40 h-full bg-[#f0eeeb]">
      {/* Main container for center alignment */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* --- Titles (centered) --- */}
        <div className="pb-16 text-center">
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
            People We Work With
          </h2>
        </div>

        {/* --- Logo Grid --- */}
        <div className="mt-12 md:mt-16 w-full">
          {/* Grid with 1 column below 1024px, 2 columns up to 1536px, 3 columns on 2xl screens and above */}
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-32 gap-y-40">
            {displayedPartners.map((partner) => (
              <div
                key={partner.name}
                className={`
                  relative
                  border-r border-gray-300
                  lg:[&:nth-child(2n)]:border-r-0
                  2xl:[&:nth-child(2n)]:border-r
                `}
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
            ))}
          </div>
        </div>

        {/* --- Show More/Less Button --- */}
        {partners.length > initialCount && (
          <div className="mt-16 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-md bg-neutral-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
