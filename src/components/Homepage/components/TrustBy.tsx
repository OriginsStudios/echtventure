"use client";

import LogoCard from "./LogoCard";

// --- Partner Data ---
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
  {
    name: "YTL",
    logo: "/partner/ytl.png",
    website: "https://www.ytl.com/",
  },
  {
    name: "Morison Global",
    logo: "/partner/marisonglobal.png",
    website: "https://www.morisonglobal.com/",
  },
  {
    name: "UHY",
    logo: "/partner/uhy.png",
    website: "https://www.uhy-th.com/index.php",
  },
  {
    name: "Hypergear",
    logo: "/partner/hypergear.png",
    website: "https://www.hypergear.com.my/",
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
    name: "Cheesiah",
    logo: "/partner/cheesiah.png",
    website: "https://cheesiah.com/",
  },
  {
    name: "ESP",
    logo: "/partner/esp.png",
    website: "https://esp.com/",
  },
  {
    name: "Kith & Kin",
    logo: "/partner/kithandkin.png",
    website: "https://kithandkin.com/",
  },
  {
    name: "KL",
    logo: "/partner/kl.png",
    website: "https://kl.com/",
  },
  {
    name: "Maria's",
    logo: "/partner/marias.png",
    website: "https://marias.com/",
  },
  {
    name: "Suree Food",
    logo: "/partner/sureefood.png",
    website: "https://sureefood.com/",
  },
  {
    name: "6Gency",
    logo: "/partner/gency.png",
    website: "https://www.6gency.co/",
  },
];

export default function TrustedBy() {
  return (
    <section className="pt-20 pb-32 sm:pt-24 sm:pb-40 h-full bg-white border-b rounded-b-[60px] ">
      {/* Main container for center alignment */}
      <div className="max-w-full mx-auto px-6 lg:px-12 xl:px-16 bg-white">
        {/* --- Titles (centered) --- */}
        <div className="pb-16 text-center">
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
            People We Work With
          </h2>
        </div>

        {/* --- Logo Grid --- */}
        <div className=" w-full sm:mt-6 ">
          {/* Grid with 3 columns on mobile, 6 columns on desktop */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 gap-y-8 lg:gap-8">
            {partners.map((partner, index) => {
              return (
                <div key={partner.name} className="relative overflow-hidden">
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
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
