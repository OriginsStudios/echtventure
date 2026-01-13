
// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Mission2() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useGSAP(
//     () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const missionTitle = section.querySelector("[data-mission-title]");
//       const stepLines = section.querySelectorAll("[data-step-line]");
//       const description = section.querySelector("[data-description]");
//       const videoImage = section.querySelector("[data-video] img");

//       if (!missionTitle || !stepLines.length) return;

//       gsap.set([missionTitle, stepLines, description], { autoAlpha: 0, y: 40 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 70%",
//           end: "top 30%",
//           scrub: 1,
//         },
//       });

//       tl.to(missionTitle, { autoAlpha: 1, y: 0, ease: "power3.out" })
//         .to(stepLines, { autoAlpha: 1, y: 0, stagger: 0.12, ease: "power3.out" }, "-=0.5")
//         .to(description, { autoAlpha: 1, y: 0, ease: "power2.out" }, "-=0.6");

//       if (videoImage) {
//         gsap.set(videoImage, { scale: 0.96 });
//         gsap.to(videoImage, {
//           scale: 1.04,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 85%",
//             end: "bottom 15%",
//             scrub: 1.5,
//           },
//         });
//       }
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-transparent overflow-x-hidden py-16 md:py-24"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
//         {/* Hero Image - unchanged */}
//         <div className="flex justify-center mb-10 lg:mb-16">
//           <div
//             data-video
//             className="
//               relative w-full aspect-video max-w-full rounded-2xl overflow-hidden
//               shadow-2xl px-6 pt-8 pb-6
//               sm:px-12 sm:pt-12 sm:pb-10
//               lg:px-16 lg:pt-16 lg:pb-12
//               xl:px-20
//             "
//           >
//             <picture className="block w-full h-full">
//               <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
//               <img
//                 src="/gallery/12b.png"
//                 alt="Echtventure mission visual"
//                 className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//                 loading="lazy"
//               />
//             </picture>
//           </div>
//         </div>

//         <div className="pt-12 lg:pt-24 relative min-h-[50vh] lg:min-h-[65vh] flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14">
//           {/* OUR MISSION – always first in DOM for mobile */}
//           <div className="order-1 lg:order-1 flex items-start lg:items-end justify-center lg:justify-start">
//             <h2
//               data-mission-title
//               className="
//                 font-black tracking-tighter leading-[0.85]
//                 text-[clamp(3.2rem,8.5vw,4.8rem)]           /* smaller on mobile */
//                 md:text-[clamp(4rem,8vw,5.8rem)]
//                 lg:text-[clamp(4.8rem,7.5vw,7.5rem)]
//                 text-center lg:text-left
//               "
//               style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//             >
//               OUR
//               <br />
//               MISSION
//             </h2>
//           </div>

//           {/* Steps – right aligned on both mobile & desktop */}
//           <div className="order-2 lg:order-2 flex flex-col items-center lg:items-end gap-3 md:gap-4 lg:gap-5 xl:gap-6">
//             {[
//               { text: "Build", accent: "AWARENESS" },
//               { text: "Grow in", accent: "MASTERY" },
//               { text: "step into", accent: "LEADERSHIP" },
//               { text: "create lasting", accent: "IMPACT" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 data-step-line
//                 className="
//                   flex flex-col sm:flex-row sm:items-baseline
//                   gap-1 sm:gap-2.5
//                   text-center lg:text-right w-full lg:w-auto
//                   justify-center lg:justify-end
//                 "
//               >
//                 <span className="text-base sm:text-lg md:text-xl font-bold opacity-80">
//                   {item.text}
//                 </span>
//                 <span
//                   className="
//                     font-black tracking-tight leading-none
//                     text-[clamp(1.85rem,4.8vw,2.6rem)]          /* much smaller on mobile */
//                     sm:text-[clamp(2.1rem,5vw,3rem)]
//                     md:text-[clamp(2.4rem,4.8vw,3.4rem)]
//                     lg:text-[clamp(2.8rem,4vw,4.2rem)]
//                   "
//                   style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//                 >
//                   {item.accent}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Description (if you'll use it later) */}
//           <div
//             data-description
//             className="
//               order-3 col-span-2 mx-auto mt-8 lg:mt-12
//               max-w-2xl text-center text-sm sm:text-base md:text-lg
//               leading-relaxed font-montserrat text-black/85
//             "
//           >
//             {/* Your description text here when ready */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Mission2() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const missionTitle = section.querySelector("[data-mission-title]");
      const stepLines = section.querySelectorAll("[data-step-line]");
      const description = section.querySelector("[data-description]");
      const videoImage = section.querySelector("[data-video] img");

      if (!missionTitle || !stepLines.length) return;

      gsap.set([missionTitle, stepLines, description], { autoAlpha: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.to(missionTitle, { autoAlpha: 1, y: 0, ease: "power3.out" })
        .to(stepLines, { autoAlpha: 1, y: 0, stagger: 0.12, ease: "power3.out" }, "-=0.5")
        .to(description, { autoAlpha: 1, y: 0, ease: "power2.out" }, "-=0.6");

      if (videoImage) {
        gsap.set(videoImage, { scale: 0.96 });
        gsap.to(videoImage, {
          scale: 1.04,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent overflow-x-hidden py-16 md:py-20 xl:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] xl:max-w-[1800px] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        {/* Hero Image - Optimized padding for 16:9 and iPad */}
        <div className="flex justify-center mb-12 md:mb-16 xl:mb-24">
          <div
            data-video
            className="
              relative w-full aspect-video max-w-full rounded-2xl overflow-hidden
              shadow-2xl 
              px-6 pt-8 pb-6       /* Mobile */
              sm:px-10 sm:pt-10 sm:pb-8
              md:px-14 md:pt-12 md:pb-10 /* Tablet / iPad */
              lg:px-20 lg:pt-16 lg:pb-14 
              xl:px-24 xl:pt-20 xl:pb-16 /* 16:9 Desktop */
            "
          >
            <picture className="block w-full h-full">
              <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
              <img
                src="/gallery/12b.png"
                alt="Echtventure mission visual"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        {/* 
           Grid Layout: 
           - Mobile: Stacked (Flex Col)
           - iPad (md+): 2 Columns, side-by-side
           - 16:9 (xl+): Expanded gap, vertically centered content
        */}
        <div className="relative min-h-[50vh] md:min-h-[40vh] xl:min-h-[60vh] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">
          
          {/* OUR MISSION - Left Aligned, Vertically Centered on iPad/Desktop */}
          <div className="order-1 w-full flex justify-center md:justify-start items-center md:items-center">
            <h2
              data-mission-title
              className="
                font-black tracking-tighter leading-[0.9]
                text-[clamp(3rem,9vw,5.5rem)]           /* Mobile */
                md:text-[clamp(3.5rem,6vw,6.5rem)]      /* iPad Portrait/Landscape */
                xl:text-[clamp(4.5rem,5.5vw,8rem)]      /* Large 16:9 Screens */
                text-center md:text-left
              "
              style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
            >
              OUR
              <br />
              MISSION
            </h2>
          </div>

          {/* Steps - Right Aligned, Vertically Centered to match Title */}
          <div className="order-2 w-full flex flex-col items-center md:items-end justify-center md:justify-center gap-4 md:gap-6 xl:gap-8">
            {[
              { text: "Build", accent: "AWARENESS" },
              { text: "Grow in", accent: "MASTERY" },
              { text: "Step into", accent: "LEADERSHIP" },
              { text: "Create lasting", accent: "IMPACT" },
            ].map((item, i) => (
              <div
                key={i}
                data-step-line
                className="
                  flex flex-col sm:flex-row sm:items-baseline
                  gap-1 sm:gap-3 md:gap-4
                  text-center md:text-right w-full
                  justify-center md:justify-end
                "
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat opacity-80 tracking-wide">
                  {item.text}
                </span>
                <span
                  className="
                    font-black tracking-tight leading-none
                    text-[clamp(2rem,5.5vw,3.2rem)]       /* Mobile */
                    md:text-[clamp(2.2rem,4vw,3.8rem)]   /* iPad */
                    xl:text-[clamp(2.8rem,3.5vw,4.8rem)] /* 16:9 */
                  "
                  style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
                >
                  {item.accent}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div
            data-description
            className="
              order-3 col-span-2 mx-auto mt-8 md:mt-10 xl:mt-12
              max-w-2xl xl:max-w-3xl text-center text-sm sm:text-base md:text-lg lg:text-xl
              leading-relaxed font-sans text-black/80
            "
          >
          </div>
        </div>
      </div>
    </section>
  );
}