
"use client";

import LogoCard from "./LogoCard";

type Partner = {
  name: string;
  logo: string;
  website?: string;
};

const partners: Partner[] = [
  // Row 1 – 5 logos (Biggest)
  { name: "IQVIA",              logo: "/partner/iqvia.png",              website: "https://www.iqvia.com" },
  { name: "AnyMind Group",      logo: "/partner/anymind.png",            website: "https://anymindgroup.com/" },
  { name: "YTL",                logo: "/partner/ytl.png",                website: "https://www.ytl.com/" },
  { name: "Morison Global",     logo: "/partner/marisonglobal.png",      website: "https://www.morisonglobal.com/" },
  { name: "UHY",                logo: "/partner/uhy.png",                website: "https://www.uhy-th.com/index.php" },

  // Row 2 – 8 Compact logos (120px)
  { name: "CSILK",              logo: "/partner/csilk.png",              website: "https://csilk.com.my/" },
  { name: "Gary Chong Studios", logo: "/partner/garychongstudios.png",   website: "https://garychongstudios.com/" },
  { name: "Seven Vault",        logo: "/partner/sevenvault.png",         website: "https://sevenvault.com/" },
  { name: "Zera",               logo: "/partner/zera.png",               website: "https://www.zera.edu.my/" },
  { name: "KL Dental",          logo: "/partner/kl.png",                 website: "https://kldental.my/" },
  { name: "ESP",                logo: "/partner/esp.png",                website: "https://esp.com.my/" },
  { name: "Voskos Advisory",    logo: "/partner/voskos.png",             website: "https://www.linkedin.com/company/voskos-advisory-group/" },
  { name: "RCA Wealth",         logo: "/partner/RCA.png",                website: "https://rcawealth.com.my/" },

  // Row 3 – 8 Compact logos (120px)
  { name: "TCG",                logo: "/partner/tcg.jpg",                website: "https://www.telecomconsulting.com.au/" },
  { name: "6Gency",             logo: "/partner/gency.png",              website: "https://www.6gency.co/" },
  { name: "salon.ebteq",        logo: "/partner/salon-ebteq.jpg",        website: "https://salon.ebteq.com/" },
  { name: "Alpha Omega",        logo: "/partner/alphaomega.png",         website: "https://alphaomegasp.weebly.com/" },
  { name: "Maria's",            logo: "/partner/marias.png",             website: "https://marias.com.my/" },
  { name: "Kith & Kin",         logo: "/partner/kithandkin.png",         website: "https://kithandkin.com/" },
  { name: "Suree Food",         logo: "/partner/sureefood.png",          website: "https://sureefood.com/" },
  { name: "wRipple",            logo: "/partner/wripple.jpg" },
];

export default function TrustedBy() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-40 bg-white border-b rounded-b-[60px]">
      <div className="mx-auto px-5 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            People We Work With
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Row 1 – 5 logos – Biggest */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 lg:gap-8">
            {partners.slice(0, 5).map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[200px] sm:max-w-[220px] md:max-w-[340px]"
                >
                  <LogoCard
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-20 sm:h-24 md:h-30 aspect-[5/2]"
                  />
                </a>
              </div>
            ))}
          </div>



          {/* Row 2 – 8 logos – Strict 120px Width */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-6">
            {partners.slice(5, 13).map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[120px]"
                >
                  <LogoCard
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-20 sm:h-24 md:h-28 aspect-[4/3]"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Row 3 – 8 logos – Strict 120px Width */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-6">
            {partners.slice(13).map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    partner.website
                      ? "block w-full max-w-[120px]"
                      : "block w-full max-w-[120px] pointer-events-none"
                  }
                >
                  <LogoCard
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-20 sm:h-10 md:h-16 aspect-[4/3]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


