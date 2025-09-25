"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function EnneagramPage() {
  const enneagramRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Enneagram section animations
    const fullText = "DISCOVER YOUR TYPE";
    if (headlineRef.current) {
      gsap.set(headlineRef.current, { text: "" });
      gsap.to(headlineRef.current, {
        text: fullText,
        duration: 2.5,
        ease: "none",
        delay: 0.3,
        scrollTrigger: {
          trigger: enneagramRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Enneagram content
    gsap.from(
      [
        ".enneagram-subtitle",
        ".enneagram-description",
        ".enneagram-cta",
        ".enneagram-disclaimer",
      ],
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: enneagramRef.current,
          start: "top 70%",
        },
      }
    );

    // Pulse animation for CTA button
    gsap.to(".pulse-button", {
      scale: 1.05,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  const handleStartTest = () => {
    window.open("https://assessment.echtventure.com", "_blank");
  };

  return (
    <main className="min-h-screen bg-five-lines">
      {/* DISCOVER YOUR TYPE Section */}
      <section
        ref={enneagramRef}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 border border-slate-700 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-slate-700 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          {/* Assessment URL Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <p className="font-montserrat text-sm text-slate-300">
                <span className="font-semibold text-white">
                  Assessment Portal:
                </span>{" "}
                assessment.echtventure.com
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left lg:text-left">
              <span
                ref={headlineRef}
                className="block font-extrabold text-white leading-tight uppercase tracking-tight
                           text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] mb-6"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                DISCOVER YOUR TYPE
              </span>

              <div className="enneagram-subtitle mb-8">
                <h2 className="text-2xl md:text-3xl font-butler font-bold text-slate-200 mb-4">
                  The Enneagram Assessment
                </h2>
                <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
              </div>

              <p className="enneagram-description font-montserrat text-slate-300 text-lg leading-relaxed mb-10">
                The Enneagram is a powerful tool for understanding your core
                motivations and how they shape your relationships and work. Take
                our free assessment to begin your journey of self-discovery with
                expert guidance from Keith Tay.
              </p>

              <div className="enneagram-cta mb-8">
                <button
                  onClick={handleStartTest}
                  className="pulse-button bg-white text-slate-900 text-lg font-butler font-bold px-10 py-4 rounded-lg 
                             hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl mr-4"
                >
                  Start the Test Now
                </button>
              </div>

              <div className="enneagram-disclaimer">
                <p className="font-montserrat text-sm text-slate-400">
                  <span className="font-semibold">Note:</span> You will be
                  redirected to our secure partner platform,
                  assessment.echtventure.com, to complete the assessment.
                </p>
              </div>
            </div>

            {/* Right Column - Keith's Expertise Card */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-butler font-bold text-white mb-2">
                  Expert Guidance by Keith Tay
                </h3>
                <div className="w-12 h-0.5 bg-slate-600 mx-auto"></div>
              </div>

              <div className="space-y-6">
                <p className="font-montserrat text-slate-300 leading-relaxed text-center">
                  Certified in{" "}
                  <strong className="text-white">
                    People Management with Enneagram
                  </strong>
                  . Keith's unique approach blends engineering precision with
                  theological wisdom.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center bg-slate-700/50 px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm text-slate-200">
                      Certified Enneagram Practitioner
                    </span>
                  </div>
                  <div className="flex items-center bg-slate-700/50 px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm text-slate-200">
                      100+ Individuals Coached
                    </span>
                  </div>
                  <div className="flex items-center bg-slate-700/50 px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="font-montserrat text-sm text-slate-200">
                      International Speaker (12+ Countries)
                    </span>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <div className="inline-flex items-center bg-slate-900 px-4 py-2 rounded-lg">
                    <span className="font-montserrat text-xs text-slate-400 uppercase tracking-wider">
                      LIGHT • LOVE • LEAD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 pt-16 border-t border-slate-800">
            <h3 className="text-2xl font-butler font-bold text-center text-white mb-12">
              Why Take the Enneagram Assessment?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4 border border-slate-700">
                  <svg
                    className="w-8 h-8 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-butler font-bold text-lg text-white mb-3">
                  Self-Awareness
                </h4>
                <p className="font-montserrat text-slate-400 text-sm leading-relaxed">
                  Understand your core motivations, fears, and desires that
                  drive your behavior.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4 border border-slate-700">
                  <svg
                    className="w-8 h-8 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-butler font-bold text-lg text-white mb-3">
                  Better Relationships
                </h4>
                <p className="font-montserrat text-slate-400 text-sm leading-relaxed">
                  Improve your relationships by understanding different
                  personality approaches.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4 border border-slate-700">
                  <svg
                    className="w-8 h-8 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-butler font-bold text-lg text-white mb-3">
                  Personal Growth
                </h4>
                <p className="font-montserrat text-slate-400 text-sm leading-relaxed">
                  Identify your growth path and develop strategies to overcome
                  limiting patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
