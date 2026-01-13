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
//       className="relative bg-transparent overflow-x-hidden py-16 md:py-20 xl:py-24"
//     >
//       <div className="mx-auto w-full max-w-[1600px] xl:max-w-[1800px] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
//         {/* Hero Image */}
//         <div className="flex justify-center mb-12 md:mb-16 xl:mb-24">
//           <div
//             data-video
//             className="
//               relative w-full aspect-video max-w-full rounded-2xl overflow-hidden
//               shadow-2xl
//               px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8
//               md:px-14 md:pt-12 md:pb-10
//               lg:px-20 lg:pt-16 lg:pb-14
//               xl:px-24 xl:pt-20 xl:pb-16
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

//         <div className="relative min-h-[50vh] md:min-h-[40vh] xl:min-h-[60vh] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">
//           {/* OUR MISSION - 1 row with space on mobile, 2 rows on desktop */}
//           <div className="order-1 w-full flex justify-center md:justify-start items-center md:items-center">
//             <h2
//               data-mission-title
//               className="
//                 font-black tracking-tighter leading-[0.95]
//                 text-[2.5rem] xs:text-[2.8rem] sm:text-[3.2rem]              /* mobile: smaller */
//                 md:text-[clamp(3.5rem,6vw,6.5rem)]                             /* desktop: big */
//                 xl:text-[clamp(4.5rem,5.5vw,8rem)]
//                 text-center md:text-left
//               "
//               style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//             >
//               <span className="md:hidden">OUR&nbsp;</span>
//               <span className="hidden md:inline">OUR<br /></span>
//               MISSION
//             </h2>
//           </div>

//           {/* Steps - right-aligned on desktop, original mobile behavior preserved */}
//           <div className="order-2 w-full flex flex-col items-center md:items-end justify-center md:justify-center gap-10 md:gap-6 xl:gap-8">
//             {[
//               { text: "Build", accent: "AWARENESS" },
//               { text: "Grow in", accent: "MASTERY" },
//               { text: "Step into", accent: "LEADERSHIP" },
//               { text: "Create lasting", accent: "IMPACT" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 data-step-line
//                 className={`
//                   flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-5 lg:gap-6
//                   w-full max-w-md md:max-w-none
//                   ${i % 2 === 0 ? "items-start text-left" : "items-end text-right"}
//                   md:items-end md:justify-end md:text-right
//                   px-4 md:px-0
//                 `}
//               >
//                 <span
//                   className="
//                     text-base sm:text-lg md:text-xl lg:text-2xl 
//                     font-montserrat opacity-80 tracking-wide
//                     md:whitespace-nowrap
//                   "
//                 >
//                   {item.text}
//                 </span>

//                 <span
//                   className="
//                     font-black tracking-tight leading-none
//                     text-[clamp(1.8rem,5vw,2.8rem)]
//                     md:text-[clamp(2.2rem,4vw,3.8rem)]
//                     xl:text-[clamp(2.8rem,3.5vw,4.8rem)]
//                   "
//                   style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//                 >
//                   {item.accent}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Description */}
//           <div
//             data-description
//             className="
//               order-3 col-span-2 mx-auto mt-8 md:mt-10 xl:mt-12
//               max-w-2xl xl:max-w-3xl text-center text-sm sm:text-base md:text-lg lg:text-xl
//               leading-relaxed font-sans text-black/80
//             "
//           >
//             {/* Your mission text goes here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



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
//       // Only run animations on non-mobile devices for better performance
//       if (window.innerWidth < 768) return;

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
//         .to(stepLines, { 
//           autoAlpha: 1, 
//           y: 0, 
//           stagger: 0.12, 
//           ease: "power3.out" 
//         }, "-=0.5")
//         .to(description, { 
//           autoAlpha: 1, 
//           y: 0, 
//           ease: "power2.out" 
//         }, "-=0.6");

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

//       // Cleanup on unmount
//       return () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       };
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-transparent overflow-x-hidden py-16 md:py-20 xl:py-24"
//     >
//       <div className="mx-auto w-full max-w-[1600px] xl:max-w-[1800px] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
//         {/* Hero Image */}
//         <div className="flex justify-center mb-12 md:mb-16 xl:mb-24">
//           <div
//             data-video
//             className="
//               relative w-full aspect-video max-w-full rounded-2xl overflow-hidden
//               shadow-lg md:shadow-2xl
//               px-4 pt-6 pb-4 sm:px-6 sm:pt-8 sm:pb-6
//               md:px-14 md:pt-12 md:pb-10
//               lg:px-20 lg:pt-16 lg:pb-14
//               xl:px-24 xl:pt-20 xl:pb-16
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

//         <div className="relative min-h-[50vh] md:min-h-[40vh] xl:min-h-[60vh] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">
//           {/* OUR MISSION */}
//           <div className="order-1 w-full flex justify-center md:justify-start items-center md:items-center">
//             <h2
//               data-mission-title
//               className="
//                 font-black tracking-tighter leading-[0.95]
//                 text-[2.2rem] xs:text-[2.5rem] sm:text-[3rem]
//                 md:text-[clamp(3.5rem,6vw,6.5rem)]
//                 xl:text-[clamp(4.5rem,5.5vw,8rem)]
//                 text-center md:text-left
//                 px-4 md:px-0
//               "
//               style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//             >
//               <span className="md:hidden">OUR MISSION</span>
//               <span className="hidden md:inline">OUR<br />MISSION</span>
//             </h2>
//           </div>

//           {/* Steps - Consistent alignment on mobile, right-aligned on desktop */}
//           <div className="order-2 w-full flex flex-col items-center md:items-end justify-center md:justify-center gap-8 md:gap-6 xl:gap-8">
//             {[
//               { text: "Build", accent: "AWARENESS" },
//               { text: "Grow in", accent: "MASTERY" },
//               { text: "Step into", accent: "LEADERSHIP" },
//               { text: "Create lasting", accent: "IMPACT" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 data-step-line
//                 className="
//                   flex flex-col md:flex-row md:items-baseline 
//                   gap-1.5 md:gap-5 lg:gap-6
//                   w-full max-w-md md:max-w-none
//                   items-center text-center
//                   md:items-end md:justify-end md:text-right
//                   px-4 md:px-0
//                 "
//               >
//                 <span
//                   className="
//                     text-sm sm:text-base md:text-xl lg:text-2xl 
//                     font-montserrat opacity-80 tracking-wide
//                     md:whitespace-nowrap
//                   "
//                 >
//                   {item.text}
//                 </span>

//                 <span
//                   className="
//                     font-black tracking-tight leading-none
//                     text-[clamp(1.6rem,4.5vw,2.5rem)]
//                     md:text-[clamp(2.2rem,4vw,3.8rem)]
//                     xl:text-[clamp(2.8rem,3.5vw,4.8rem)]
//                   "
//                   style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
//                 >
//                   {item.accent}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Description */}
//           <div
//             data-description
//             className="
//               order-3 col-span-2 mx-auto mt-8 md:mt-10 xl:mt-12
//               max-w-2xl xl:max-w-3xl text-center 
//               text-sm sm:text-base md:text-lg lg:text-xl
//               leading-relaxed sm:leading-relaxed font-sans text-black/80
//               px-4 md:px-0
//             "
//           >
//             {/* Your mission text goes here */}
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
      // Disable heavy animations on mobile for better performance
      if (window.innerWidth < 768) {
        const section = sectionRef.current;
        if (!section) return;

        const missionTitle = section.querySelector("[data-mission-title]");
        const stepLines = section.querySelectorAll("[data-step-line]");
        const description = section.querySelector("[data-description]");

        gsap.set([missionTitle, stepLines, description], { autoAlpha: 1, y: 0 });
        return;
      }

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
      className="relative bg-transparent overflow-x-hidden py-12 md:py-20 xl:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] xl:max-w-[1800px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        {/* Hero Image - Same layout, smaller padding */}
        <div className="flex justify-center mb-10 md:mb-16 xl:mb-24">
          <div
            data-video
            className="
              relative w-full aspect-video max-w-full rounded-xl md:rounded-2xl overflow-hidden
              shadow-lg md:shadow-2xl
              px-4 pt-5 pb-3 
              sm:px-5 sm:pt-6 sm:pb-4
              md:px-14 md:pt-12 md:pb-10
              lg:px-20 lg:pt-16 lg:pb-14
              xl:px-24 xl:pt-20 xl:pb-16
            "
          >
            <picture className="block w-full h-full">
              <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
              <img
                src="/gallery/12b.png"
                alt="Echtventure mission visual"
                className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        {/* Mobile: Two-column layout like desktop but scaled down */}
        <div className="relative min-h-[40vh] flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-start">
          
          {/* OUR MISSION - Left column on mobile, same as desktop layout */}
          <div className="lg:pt-32 pt-24 w-full flex justify-start items-start md:items-center">
            <h2
              data-mission-title
              className="
                font-black tracking-tighter leading-[0.95]
                text-[2.2rem] xs:text-[2.5rem] sm:text-[2.8rem]
                md:text-[clamp(3.5rem,6vw,6.5rem)]
                xl:text-[clamp(4.5rem,5.5vw,8rem)]
                text-left
                w-full
              "
              style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
            >
              <span className="inline-block">OUR<br />MISSION</span>
            </h2>
          </div>

          {/* Steps - Right column on mobile, same as desktop layout */}
          <div className="lg:pt-12 w-full flex flex-col items-end justify-start gap-6 md:gap-6 xl:gap-8">
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
                  flex flex-col md:flex-row 
                  gap-1.5 md:gap-5 lg:gap-6
                  w-full
                  items-end text-right
                  md:items-end md:justify-end md:text-right
                "
              >
                <span
                  className="
                    text-sm sm:text-base md:text-xl lg:text-2xl 
                    font-montserrat opacity-80 tracking-wide
                    md:whitespace-nowrap
                    text-left md:text-right
                  "
                >
                  {item.text}
                </span>

                <span
                  className="
                    font-black tracking-tight leading-none
                    text-[1.6rem] xs:text-[1.8rem] sm:text-[2rem]
                    md:text-[clamp(2.2rem,4vw,3.8rem)]
                    xl:text-[clamp(2.8rem,3.5vw,4.8rem)]
                    text-right
                  "
                  style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
                >
                  {item.accent}
                </span>
              </div>
            ))}
          </div>

          {/* Description - Full width below both columns, same as desktop */}
          <div
            data-description
            className="
              col-span-2 mx-auto mt-10 md:mt-10 xl:mt-12
              max-w-2xl xl:max-w-3xl 
              text-center 
              text-sm sm:text-base md:text-lg lg:text-xl
              leading-relaxed font-sans text-black/80
              w-full
            "
          >
            {/* Your mission text goes here */}
          </div>
        </div>
      </div>
    </section>
  );
}