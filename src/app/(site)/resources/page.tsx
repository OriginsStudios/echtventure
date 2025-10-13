"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// SVG component for the decorative leaf in the first section
const LeafSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1226 655"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    <path
      d="M1225.5 0.499939L655.034 0.499964C293.982 0.49998 0.770736 293.53 0.500244 654.5L570.966 654.5C932.018 654.5 1225.23 361.47 1225.5 0.499939Z"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
    ></path>
  </svg>
);

export default function ResourcesPage() {
  const mainRef = useRef(null);

  // Refs for technology cover section
  const techCoverRef = useRef(null);
  const techTitleRef = useRef(null);
  const techParaRef = useRef(null);
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);

  // Title and description for resources page
  const titleText = "Resources";
  const descText =
    "Explore our collection of insights, stories, and expertise to support your growth journey.";

  useGSAP(
    () => {
      // --- Initial Page Load Animation ---
      if (techTitleRef.current) {
        const splitTitle = new SplitType(techTitleRef.current, {
          types: "chars",
        });

        // Set initial positions for all elements
        gsap.set(splitTitle.chars, { y: "110%", opacity: 0 });
        gsap.set(techParaRef.current, { y: 70, opacity: 0 });
        gsap.set(leftSvgRef.current, { x: -200, opacity: 0 });
        gsap.set(rightSvgRef.current, { x: 200, opacity: 0 });

        const tlCover = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.4,
        });

        // Animate all elements into view on load
        tlCover
          .to([leftSvgRef.current, rightSvgRef.current], {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power4.out",
          })
          .to(
            splitTitle.chars,
            {
              y: "0%",
              opacity: 1,
              duration: 0.7,
              stagger: 0.02,
              ease: "power4.out",
            },
            "-=0.8"
          )
          .to(
            techParaRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.7"
          );
      }

      // Created a new array for elements that should disappear on scroll.
      // The SVGs are no longer in this list.
      const textElementsOnScroll = [techTitleRef.current, techParaRef.current];

      // --- Scroll Out/In Animation (Now only for text) ---
      gsap.fromTo(
        textElementsOnScroll, // Use the new array here
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        {
          opacity: 0,
          scale: 0.8,
          y: -100,
          ease: "power2.in",
          scrollTrigger: {
            trigger: techCoverRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="min-h-screen">
      <div
        ref={techCoverRef}
        className="tech-cover-container relative h-[100vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="sticky left-0 top-0 w-full h-full overflow-hidden">
              <div
                ref={leftSvgRef}
                className="absolute -left-[30rem] top-0 -translate-y-[30%]"
              >
                <div
                  className="h-[25rem] w-[50rem] text-custom-green opacity-20 will-change-transform scale-110"
                  style={{ filter: "drop-shadow(0 0 2px currentColor)" }}
                >
                  <LeafSVG />
                </div>
              </div>
              <div
                ref={rightSvgRef}
                className="absolute -right-[30rem] bottom-0 translate-y-[30%] rotate-180"
              >
                <div
                  className="h-[25rem] w-[50rem] text-custom-green opacity-20 will-change-transform scale-110"
                  style={{ filter: "drop-shadow(0 0 2px currentColor)" }}
                >
                  <LeafSVG />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full text-black text-center px-4 z-10">
            <h1
              ref={techTitleRef}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black uppercase mb-4 sm:mb-6 md:mb-8 overflow-hidden leading-tight"
            >
              {titleText}
            </h1>
            <p
              ref={techParaRef}
              className="max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed font-montserrat"
            >
              {descText}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resources Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="shadow-sm mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-custom-green rounded-full mr-3"></div>
                <span className="font-butler">FEATURED CONTENT</span>
              </div>
            </Badge>
            <h2 className="font-butler text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Explore Our Content
            </h2>
            <p className=" text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-montserrat">
              Dive deep into our curated collection of insights, conversations,
              and expertise designed to accelerate your personal and
              professional growth.
            </p>
          </div>

          {/* Enhanced Resource Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Blog Card */}
            <div className="group relative bg-white rounded-2xl transition-all duration-500 overflow-hidden border-2 border-black">
              {/* Card Header with Icon */}
              <div className="relative h-80 bg-white overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <Badge>Articles & Insights</Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className=" text-3xl font-bold text-slate-900 mb-4">
                  Blog
                </h3>
                <p className="font-montserrat text-slate-600 text-lg leading-relaxed mb-8">
                  Discover thought-provoking insights, actionable strategies,
                  and expert perspectives on leadership, personal development,
                  and organizational transformation.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Weekly insights from industry experts
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Practical leadership strategies
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Personal development guides
                    </span>
                  </div>
                </div>

                <Link href="/resources/blog">
                  <Button className="group/btn inline-flex items-center hover:bg-black hover:text-white">
                    Explore Articles
                    <svg
                      className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Podcast Card */}
            <div className="group relative bg-white rounded-2xl transition-all duration-500 overflow-hidden border-2 border-black">
              {/* Card Header with Icon */}
              <div className="relative h-80 bg-white overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <Badge>Audio Content</Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Podcast
                </h3>
                <p className="font-montserrat text-slate-600 text-lg leading-relaxed mb-8">
                  Engage with inspiring conversations featuring thought leaders,
                  industry pioneers, and transformation experts sharing their
                  wisdom and experiences.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Expert interviews & discussions
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Leadership success stories
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm">
                      Transformation case studies
                    </span>
                  </div>
                </div>

                <Link href="/resources/podcast">
                  <Button className="group/btn inline-flex items-center hover:bg-black hover:text-white">
                    Listen Now
                    <svg
                      className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="font-montserrat text-lg text-slate-600 mb-6">
              Want to stay updated with our latest content?
            </p>
            <Badge variant="outline" className="shadow-sm">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-custom-green mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7.5z"
                  />
                </svg>
                <span className="font-butler text-slate-700">
                  Follow us for regular updates and insights
                </span>
              </div>
            </Badge>
          </div>
        </div>
      </section>
    </main>
  );
}
