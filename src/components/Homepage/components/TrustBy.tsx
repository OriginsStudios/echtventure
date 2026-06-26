

"use client";
import LogoCard from "./LogoCard";

type Partner = {
  name: string;
  logo: string;
  website?: string;
};

const partners: Partner[] = [
  { name: "IQVIA", logo: "/partner/iqvia.png", website: "https://www.iqvia.com" },
  { name: "AnyMind Group", logo: "/partner/anymind.png", website: "https://anymindgroup.com/" },
  { name: "YTL", logo: "/partner/ytl.png", website: "https://www.ytl.com/" },
  { name: "Morison Global", logo: "/partner/marisonglobal.png", website: "https://www.morisonglobal.com/" },
  { name: "UHY", logo: "/partner/uhy.png", website: "https://www.uhy-th.com/" },

  { name: "CSILK", logo: "/partner/csilk.png", website: "https://csilk.com.my/" },
  { name: "Gary Chong Studios", logo: "/partner/garychongstudios.png", website: "https://garychongstudios.com/" },
  { name: "Seven Vault", logo: "/partner/sevenvault.png", website: "https://sevenvault.com/" },
  { name: "Zera", logo: "/partner/zera.png", website: "https://www.zera.edu.my/" },
  { name: "KL Dental", logo: "/partner/kl.png", website: "https://kldental.my/" },
  { name: "ESP", logo: "/partner/esp.png", website: "https://esp.com.my/" },
  { name: "Voskos Advisory", logo: "/partner/voskos.png", website: "https://www.linkedin.com/company/voskos-advisory-group/" },
  { name: "RCA Wealth", logo: "/partner/RCA.png", website: "https://rcawealth.com.my/" },

  { name: "TCG", logo: "/partner/tcg.png", website: "https://www.telecomconsulting.com.au/" },
  { name: "6Gency", logo: "/partner/gency.png", website: "https://www.6gency.co/" },
  { name: "salon.ebteq", logo: "/partner/salon-ebteq.png", website: "https://salon.ebteq.com/" },
  { name: "Alpha Omega", logo: "/partner/alphaomega.png", website: "https://alphaomegasp.weebly.com/" },
  { name: "Maria's", logo: "/partner/marias.png", website: "https://marias.com.my/" },
  { name: "Kith & Kin", logo: "/partner/kithandkin.png", website: "https://kithandkin.com/" },
  { name: "Suree Food", logo: "/partner/sureefood.png", website: "https://sureefood.com/" },
  { name: "wRipple", logo: "/partner/wripple.png" },
];

export default function TrustedBy() {
  const isOdd = partners.length % 2 === 1;
  const lastIndex = partners.length - 1;

  const renderLogo = (
    partner: Partner,
    desktopHeight: string,
    desktopMaxWidth: string,
    mobileHeight: string = "h-28",
    mobileMaxWidth: string = "max-w-[240px]",
    isLastCentered = false
  ) => (
    <div
      key={partner.name}
      className={`flex justify-center ${isLastCentered ? "col-span-2" : ""}`}
    >
      <a
        href={partner.website}
        target={partner.website ? "_blank" : undefined}
        rel={partner.website ? "noopener noreferrer" : undefined}
        className={`block w-full ${mobileMaxWidth} md:${desktopMaxWidth} ${
          partner.website ? "" : "pointer-events-none"
        }`}
      >
        <LogoCard
          src={partner.logo}
          alt={`${partner.name} logo`}
          className={`${mobileHeight} md:${desktopHeight} aspect-[4/3] mx-auto object-contain transition-transform duration-300 hover:scale-105`}
        />
      </a>
    </div>
  );

  return (
    <section className="pt-16 pb-24 bg-white border-b rounded-b-[60px]">
      <div className="mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            People We Work With
          </h2>
        </div>

        {/* ✅ MOBILE — continuous 2-column grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6 place-items-center">
            {partners.map((p, idx) =>
              renderLogo(
                p,
                "h-32 md:h-48",
                "max-w-[380px] md:max-w-[420px]",
                idx < 5 ? "h-36" : "h-28",
                idx < 5 ? "max-w-[320px]" : "max-w-[240px]",
                isOdd && idx === lastIndex // ✅ only last one, only if odd
              )
            )}
          </div>
        </div>

        {/* ✅ DESKTOP — unchanged layout */}
        <div className="hidden md:block">
          <div className="space-y-10 md:space-y-14">
            <div className="grid sm:grid-cols-3 md:grid-cols-5 md:gap-10 lg:gap-12 place-items-center">
              {partners.slice(0, 5).map((p) =>
                renderLogo(
                  p,
                  "h-32 md:h-48",
                  "max-w-[380px] md:max-w-[420px]",
                  "h-36 sm:h-44",
                  "max-w-[320px] sm:max-w-[300px]"
                )
              )}
            </div>

            <div className="grid md:grid-cols-6 lg:grid-cols-8 md:gap-5 place-items-center">
              {partners.slice(5, 13).map((p) =>
                renderLogo(
                  p,
                  "h-28 md:h-32",
                  "max-w-[140px] md:max-w-[160px]",
                  "h-28 sm:h-32",
                  "max-w-[240px] sm:max-w-[180px]"
                )
              )}
            </div>

            <div className="grid md:grid-cols-6 lg:grid-cols-8 md:gap-5 place-items-center">
              {partners.slice(13).map((p) =>
                renderLogo(
                  p,
                  "h-28 md:h-32",
                  "max-w-[140px] md:max-w-[160px]",
                  "h-28 sm:h-32",
                  "max-w-[240px] sm:max-w-[180px]"
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
