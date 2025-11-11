// // "use client";
// // import { useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { useGSAP } from "@gsap/react";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function Mission2() {
// //   const sectionRef = useRef<HTMLElement | null>(null);

// //   useGSAP(
// //     () => {
// //       const section = sectionRef.current;
// //       if (!section) return;

// //       const titleLines = section.querySelectorAll("[data-title-line]");
// //       const videoContainer = section.querySelector("[data-video]");
// //       const videoImage = section.querySelector("[data-video] img");
// //       const description = section.querySelector("[data-description]");

// //       if (!titleLines.length || !videoContainer || !description) return;

// //       // Initial state
// //       gsap.set([titleLines, description], {
// //         autoAlpha: 0,
// //         y: 50,
// //       });

// //       gsap.set(videoContainer, {
// //         autoAlpha: 1,
// //         y: 0,
// //       });

// //       // Title & Description Animation
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: section,
// //           start: "top 60%",
// //           end: "top 20%",
// //           scrub: 1,
// //         },
// //       });

// //       tl.to(titleLines, {
// //         autoAlpha: 1,
// //         y: 0,
// //         stagger: 0.1,
// //         duration: 1,
// //         ease: "power2.out",
// //       }).to(
// //         description,
// //         {
// //           autoAlpha: 1,
// //           y: 0,
// //           duration: 1,
// //           ease: "power2.out",
// //         },
// //         "-=0.5"
// //       );

// //       // Image container padding & scale setup
// //       if (videoContainer) {
// //         gsap.set(videoContainer, {
// //           paddingLeft: "8vw",
// //           paddingRight: "8vw",
// //           paddingTop: "10vh", // Increased top padding to prevent cutoff
// //           paddingBottom: "6vh",
// //           transformOrigin: "center center",
// //           force3D: true,
// //         });
// //       }

// //       if (videoImage) {
// //         gsap.set(videoImage, {
// //           scale: 0.92,
// //           transformOrigin: "center center",
// //           force3D: true,
// //         });

// //         gsap.to(videoImage, {
// //           scale: 1.06,
// //           ease: "none",
// //           scrollTrigger: {
// //             trigger: section,
// //             start: "top 85%",
// //             end: "bottom 20%",
// //             scrub: 1.6,
// //             invalidateOnRefresh: true,
// //           },
// //         });
// //       }
// //     },
// //     { scope: sectionRef }
// //   );

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative min-h-[80vh] bg-transparent flex items-center justify-center overflow-visible"
// //     >
// //       <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
// //         {/* Video Container */}
// //         <div className="flex justify-center -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-24 mb-8 sm:mb-12 lg:mb-0 order-1 lg:order-2">
// //           <div
// //             data-video
// //             className="relative w-screen max-w-full aspect-video rounded-lg overflow-hidden"
// //             style={{ marginTop: "2vh" }} // Prevents top cutoff
// //           >
// //             <picture>
// //               <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
// //               <img
// //                 className="w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform] rounded-2xl"
// //                 src="/gallery/12b.png"
// //                 alt="echtventure"
// //                 style={{ imageRendering: "auto" }}
// //               />
// //             </picture>
// //           </div>
// //         </div>

// //         {/* Title + Description */}
// //         <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-20 lg:px-6 order-2 lg:order-1 lg:-mt-32 xl:-mt-40 mb-20 lg:mb-32">
// //           {/* Titles */}
// //           <div className="w-full lg:w-auto z-20 lg:pt-48">
// //             <div className="space-y-2 text-center lg:text-left">
// //                 {["AWARENESS", "MASTERY", "LEADERSHIP", "IMPACT"].map((word) => (
// //                   <h2
// //                     key={word}
// //                     data-title-line
// //                     className="font-black !text-black leading-[0.95] tracking-tighter break-words text-[clamp(2.75rem,9vw,6rem)] sm:text-[clamp(2rem,6vw,6rem)]"
// //                     style={{
// //                       fontFamily: "Arial Black, sans-serif",
// //                       // Mobile: larger base size
// //                       fontSize: "clamp(2.75rem, 9vw, 6rem)",
// //                     }}
// //                     // Override with original size on sm+
// //                     // We use style for mobile, class for sm+ to avoid conflicts
// //                   >
// //                     {word}
// //                   </h2>
// //                 ))}
// //             </div>
// //           </div>

// //           {/* Description - vertically centered with titles */}
// //           <div
// //             data-description
// //             className="w-full lg:w-[400px] xl:w-[500px] text-black text-center lg:text-justify mx-auto lg:pt-48 lg:mt-0"
// //           >
// //             <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl leading-relaxed font-montserrat">
// //               Creating transformative impact in every space — unlocking potential and inspiring lasting change in individuals and teams.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


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

//       const titleLines = section.querySelectorAll("[data-title-line]");
//       const videoContainer = section.querySelector("[data-video]");
//       const videoImage = section.querySelector("[data-video] img");
//       const description = section.querySelector("[data-description]");

//       if (!titleLines.length || !videoContainer || !description) return;

//       // Initial state
//       gsap.set([titleLines, description], {
//         autoAlpha: 0,
//         y: 50,
//       });

//       gsap.set(videoContainer, {
//         autoAlpha: 1,
//         y: 0,
//       });

//       // Title & Description Animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 60%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       });

//       tl.to(titleLines, {
//         autoAlpha: 1,
//         y: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power2.out",
//       }).to(
//         description,
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=0.5"
//       );

//       // Image scale animation (no padding in GSAP)
//       if (videoImage) {
//         gsap.set(videoImage, {
//           scale: 0.92,
//           transformOrigin: "center center",
//           force3D: true,
//         });

//         gsap.to(videoImage, {
//           scale: 1.06,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 85%",
//             end: "bottom 20%",
//             scrub: 1.6,
//             invalidateOnRefresh: true,
//           },
//         });
//       }
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[80vh] bg-transparent flex items-center justify-center overflow-visible"
//     >
//       <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
//         {/* Video Container */}
//         <div className="flex justify-center px-4 sm:px-6 lg:px-16 xl:px-24 mb-8 sm:mb-12 lg:mb-0 order-1 lg:order-2">
//           <div
//             data-video
//             className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden px-[8vw] pt-[10vh] pb-[6vh] lg:px-0 lg:pt-0 lg:pb-0"
//             style={{ marginTop: "2vh" }}
//           >
//             <picture className="block w-full h-full">
//               <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
//               <source media="(min-width: 641px)" srcSet="/gallery/12b.png" />
//               <img
//                 src="/gallery/12b.png"
//                 alt="echtventure"
//                 className="absolute inset-0 w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform] rounded-2xl"
//                 style={{ imageRendering: "auto" }}
//                 loading="lazy"
//               />
//             </picture>
//           </div>
//         </div>

//         {/* Title + Description */}
//         <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-20 lg:px-6 order-2 lg:order-1 lg:-mt-32 xl:-mt-40 mb-20 lg:mb-32">
//           {/* Titles */}
//           <div className="w-full lg:w-auto z-20 lg:pt-48">
//             <div className="space-y-2 text-center lg:text-left">
//               {["AWARENESS", "MASTERY", "LEADERSHIP", "IMPACT"].map((word) => (
//                 <h2
//                   key={word}
//                   data-title-line
//                   className="font-black !text-black leading-[0.95] tracking-tighter break-words text-[clamp(2.75rem,9vw,6rem)] sm:text-[clamp(2rem,6vw,6rem)]"
//                   style={{
//                     fontFamily: "Arial Black, sans-serif",
//                   }}
//                 >
//                   {word}
//                 </h2>
//               ))}
//             </div>
//           </div>

//           {/* Description */}
//           <div
//             data-description
//             className="w-full lg:w-[400px] xl:w-[500px] text-black text-center lg:text-justify mx-auto lg:pt-48 lg:mt-0"
//           >
//             <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl leading-relaxed font-montserrat">
//               Creating transformative impact in every space — unlocking potential and inspiring lasting change in individuals and teams.
//             </p>
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

      const titleLines = section.querySelectorAll("[data-title-line]");
      const videoContainer = section.querySelector("[data-video]");
      const videoImage = section.querySelector("[data-video] img");
      const description = section.querySelector("[data-description]");

      if (!titleLines.length || !videoContainer || !description) return;

      // Initial state
      gsap.set([titleLines, description], { autoAlpha: 0, y: 50 });
      gsap.set(videoContainer, { autoAlpha: 1, y: 0 });

      // Title + description animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.to(titleLines, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      }).to(
        description,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Image scale only (no padding in GSAP)
      if (videoImage) {
        gsap.set(videoImage, {
          scale: 0.92,
          transformOrigin: "center center",
          force3D: true,
        });

        gsap.to(videoImage, {
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            scrub: 1.6,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] bg-transparent flex items-center justify-center overflow-visible"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* ====================== IMAGE CONTAINER ====================== */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-0 order-1 lg:order-2">
          <div
            data-video
            className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden
                       px-[8vw] pt-[10vh] pb-[6vh]
                       lg:px-[8vw] lg:pt-[10vh] lg:pb-[6vh]"
            style={{ marginTop: "2vh" }}
          >
            <picture className="block w-full h-full">
              <source media="(max-width: 640px)" srcSet="/gallery/gallerymobile/3.png" />
              <source media="(min-width: 641px)" srcSet="/gallery/12b.png" />
              <img
                src="/gallery/12b.png"
                alt="echtventure"
                className="absolute inset-0 w-full h-full object-cover
                           [backface-visibility:hidden] [transform:translateZ(0)]
                           [will-change:transform] rounded-2xl"
                style={{ imageRendering: "auto" }}
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        {/* ====================== TITLE + DESCRIPTION ====================== */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center
                        gap-6 sm:gap-8 lg:gap-20
                        order-2 lg:order-1
                        lg:-mt-32 xl:-mt-40 mb-20 lg:mb-32">
          {/* ---- TITLES ---- */}
          <div className="w-full lg:w-auto z-20 lg:pt-48">
            <div className="space-y-2 text-center lg:text-left">
              {["AWARENESS", "MASTERY", "LEADERSHIP", "IMPACT"].map((word) => (
                <h2
                  key={word}
                  data-title-line
                  className="font-black !text-black leading-[0.95] tracking-tighter break-words
                             text-[clamp(2.75rem,9vw,6rem)] sm:text-[clamp(2rem,6vw,6rem)]"
                  style={{ fontFamily: "Arial Black, sans-serif" }}
                >
                  {word}
                </h2>
              ))}
            </div>
          </div>

          {/* ---- DESCRIPTION: SAME WIDTH AS BEFORE ---- */}
          <div
            data-description
            className="w-full lg:w-[400px] xl:w-[500px] text-black text-center lg:text-justify mx-auto lg:pt-48 lg:mt-0"
          >
            <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl leading-relaxed font-montserrat">
              Creating transformative impact in every space — unlocking potential and inspiring lasting change in individuals and teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}