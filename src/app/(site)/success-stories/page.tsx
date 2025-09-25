"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function SuccessStoriesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero section animations
    const fullText = "SUCCESS STORIES";
    if (headlineRef.current) {
      gsap.set(headlineRef.current, { text: "" });
      gsap.to(headlineRef.current, {
        text: fullText,
        duration: 2,
        ease: "none",
        delay: 0.3,
      });
    }

    // Animate hero badge
    gsap.from(".hero-badge", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 1.5,
    });

    // Animate hero content
    gsap.from([".hero-description", ".hero-stats", ".hero-button"], {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      delay: 2,
    });

    // Background circles animation
    gsap.to(".bg-circle-1", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".bg-circle-2", {
      rotation: -360,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    // Timeline animations
    gsap.from(".timeline-item", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
      },
    });

    // Impact stats counter animation
    gsap.from(".impact-number", {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: impactRef.current,
        start: "top 80%",
      },
    });

    // Impact cards animation
    gsap.from(".impact-card", {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
      },
    });

    // Achievement cards animation
    gsap.from(".achievement-card", {
      opacity: 0,
      y: 80,
      rotation: 5,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".achievements-section",
        start: "top 80%",
      },
    });

    // Floating elements
    gsap.to(".floating-element", {
      y: -15,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });

    // Magnetic effect for buttons
    document.querySelectorAll(".magnetic-button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Scroll-triggered text reveals
    gsap.utils.toArray(".reveal-text").forEach((text) => {
      gsap.from(text as gsap.TweenTarget, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text as gsap.DOMTarget,
          start: "top 85%",
        },
      });
    });
  });

  return (
    <main className="min-h-screen bg-five-lines">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-center items-center p-6 md:p-12 2xl:py-32 2xl:pt-20 container-padding min-h-screen bg-five-lines overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="bg-circle-1 absolute top-20 right-20 w-96 h-96 border border-gray-300 rounded-full"></div>
          <div className="bg-circle-2 absolute bottom-20 left-20 w-64 h-64 border border-gray-300 rounded-full"></div>
        </div>

        <div className="mx-auto w-full max-w-7xl text-center relative z-10">
          <span
            ref={headlineRef}
            className="hero-headline block font-extrabold text-black leading-none uppercase tracking-tighter
                       text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] mb-8"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            SUCCESS STORIES
          </span>

          <div className="mb-8">
            <div className="hero-badge inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-4">
              <span className="font-montserrat text-sm font-semibold uppercase tracking-wider">
                ECHT = Authentic • Real • Genuine • True
              </span>
            </div>
          </div>

          <p className="hero-description font-montserrat text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Since 2019, Keith Tay has been transforming lives and organizations
            through authentic leadership coaching, reaching 2,500+ professionals
            across 12+ countries.
          </p>

          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="floating-element">
              <div className="text-3xl font-butler font-bold text-black mb-2">
                100+
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Leaders Coached
              </p>
            </div>
            <div className="floating-element">
              <div className="text-3xl font-butler font-bold text-black mb-2">
                2,500+
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Professionals Reached
              </p>
            </div>
            <div className="floating-element">
              <div className="text-3xl font-butler font-bold text-black mb-2">
                12+
              </div>
              <p className="font-montserrat text-sm text-gray-600">Countries</p>
            </div>
            <div className="floating-element">
              <div className="text-3xl font-butler font-bold text-black mb-2">
                5
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Organizations Founded
              </p>
            </div>
          </div>

          <div className="hero-button">
            <Button className="magnetic-button bg-black text-white border-black text-lg px-10 py-4 hover:bg-gray-800">
              Discover Keith's Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Keith's Profile Section */}
      <section className="py-24 bg-white bg-five-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
              Meet Keith Tay
            </h2>
            <p className="reveal-text font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
              Thought Leader • Leadership Coach • Pastor • International Speaker
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Content */}
            <div>
              <div className="mb-8">
                <h3 className="reveal-text text-2xl font-butler font-bold mb-4">
                  Unique Approach
                </h3>
                <p className="reveal-text font-montserrat text-gray-700 leading-relaxed mb-6">
                  Keith's distinctive methodology blends his engineering
                  precision with theological wisdom, creating a unique framework
                  for leadership development that focuses on the integration of
                  leadership, work, and spirituality.
                </p>
                <div className="reveal-text inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
                  <span className="font-montserrat text-sm font-semibold">
                    LIGHT • LOVE • LEAD
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="reveal-text text-2xl font-butler font-bold mb-4">
                  Core Expertise
                </h3>
                <div className="space-y-3">
                  <div className="reveal-text flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="font-montserrat text-gray-700">
                      Enneagram Personality Profiling
                    </span>
                  </div>
                  <div className="reveal-text flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="font-montserrat text-gray-700">
                      Leadership & Relationship Coaching
                    </span>
                  </div>
                  <div className="reveal-text flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="font-montserrat text-gray-700">
                      Organizational Culture Transformation
                    </span>
                  </div>
                  <div className="reveal-text flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="font-montserrat text-gray-700">
                      Purpose & Passion Realization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="reveal-text text-2xl font-butler font-bold mb-6">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    Bachelor in Mechanical Engineering
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    Monash University (2010)
                  </div>
                </div>
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    Masters in Theology
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    University of Wales (2013)
                  </div>
                </div>
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    Certified Professional Coach
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    Corporate Coach Academy (2020)
                  </div>
                </div>
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    People Management with Enneagram
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    Relationship Studio (2018)
                  </div>
                </div>
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    Design Thinking Practitioner
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    eiHub, Monash University (2023)
                  </div>
                </div>
                <div className="reveal-text">
                  <div className="font-montserrat font-semibold text-gray-900">
                    Certified ScrumMaster
                  </div>
                  <div className="font-montserrat text-sm text-gray-600">
                    Scrum Alliance (2025)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Timeline */}
      <section
        ref={timelineRef}
        className="py-24 bg-gray-900 bg-five-lines-blackbg text-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
              Organizations Founded & Led
            </h2>
            <p className="reveal-text font-montserrat text-xl text-gray-300 max-w-3xl mx-auto">
              Two decades of building impactful organizations across multiple
              sectors
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

            <div className="space-y-12">
              {/* Collective Global */}
              <div className="timeline-item relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-montserrat font-bold mr-4">
                      2004 - Present
                    </span>
                    <h3 className="text-xl font-butler font-bold">
                      Collective Global
                    </h3>
                  </div>
                  <p className="font-montserrat text-gray-300 mb-3">
                    15 thriving churches across Southeast Asia, impacting
                    thousands of lives through spiritual leadership and
                    community building.
                  </p>
                  <div className="text-sm font-montserrat text-gray-400">
                    <span className="font-semibold">Impact:</span> Regional
                    spiritual leadership network
                  </div>
                </div>
              </div>

              {/* ECHTVENTURE */}
              <div className="timeline-item relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-montserrat font-bold mr-4">
                      2019 - Present
                    </span>
                    <h3 className="text-xl font-butler font-bold">
                      ECHTVENTURE
                    </h3>
                  </div>
                  <p className="font-montserrat text-gray-300 mb-3">
                    Coaching & training company specializing in helping Working
                    Millennials progressively realize their passion and purpose
                    in life.
                  </p>
                  <div className="text-sm font-montserrat text-gray-400">
                    <span className="font-semibold">Impact:</span> 100+ leaders
                    coached, 2,500+ professionals reached
                  </div>
                </div>
              </div>

              {/* Autrui Global */}
              <div className="timeline-item relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-montserrat font-bold mr-4">
                      2019 - Present
                    </span>
                    <h3 className="text-xl font-butler font-bold">
                      Autrui Global
                    </h3>
                  </div>
                  <p className="font-montserrat text-gray-300 mb-3">
                    Social enterprise with vision to create a sustainable future
                    for healthcare professionals globally.
                  </p>
                  <div className="text-sm font-montserrat text-gray-400">
                    <span className="font-semibold">Focus:</span> Healthcare
                    professional sustainability
                  </div>
                </div>
              </div>

              {/* New Orange */}
              <div className="timeline-item relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-900"></div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-montserrat font-bold mr-4">
                      2022 - Present
                    </span>
                    <h3 className="text-xl font-butler font-bold">
                      New Orange Sdn Bhd
                    </h3>
                  </div>
                  <p className="font-montserrat text-gray-300 mb-3">
                    Digital agency transforming vision into cutting-edge digital
                    solutions.
                  </p>
                  <div className="text-sm font-montserrat text-gray-400">
                    <span className="font-semibold">Specialty:</span> Digital
                    transformation & innovation
                  </div>
                </div>
              </div>

              {/* Zera International School */}
              <div className="timeline-item relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"></div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-400 text-black px-3 py-1 rounded-full text-sm font-montserrat font-bold mr-4">
                      2024 - Present
                    </span>
                    <h3 className="text-xl font-butler font-bold">
                      Zera International School
                    </h3>
                  </div>
                  <p className="font-montserrat text-gray-300 mb-3">
                    Provides holistic education (preschool to secondary). Aims
                    to nurture confident, committed, competent lifelong
                    learners.
                  </p>
                  <div className="text-sm font-montserrat text-gray-400">
                    <span className="font-semibold">Mission:</span> Holistic
                    educational excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section ref={impactRef} className="py-24 bg-white bg-five-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
              Impact & Achievements
            </h2>
            <p className="reveal-text font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from two decades of leadership development and
              organizational building
            </p>
          </div>

          {/* Impact Stats */}
          <div className="impact-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="impact-card text-center bg-gray-50 p-8 rounded-xl">
              <div className="impact-number text-4xl font-butler font-bold text-black mb-3">
                100
              </div>
              <p className="font-montserrat text-gray-600">Leaders Coached</p>
              <p className="font-montserrat text-sm text-gray-500 mt-2">
                Individual transformation
              </p>
            </div>
            <div className="impact-card text-center bg-gray-50 p-8 rounded-xl">
              <div className="impact-number text-4xl font-butler font-bold text-black mb-3">
                2500
              </div>
              <p className="font-montserrat text-gray-600">
                Professionals Reached
              </p>
              <p className="font-montserrat text-sm text-gray-500 mt-2">
                Through workshops & speaking
              </p>
            </div>
            <div className="impact-card text-center bg-gray-50 p-8 rounded-xl">
              <div className="impact-number text-4xl font-butler font-bold text-black mb-3">
                12
              </div>
              <p className="font-montserrat text-gray-600">Countries Visited</p>
              <p className="font-montserrat text-sm text-gray-500 mt-2">
                International speaking
              </p>
            </div>
            <div className="impact-card text-center bg-gray-50 p-8 rounded-xl">
              <div className="impact-number text-4xl font-butler font-bold text-black mb-3">
                20
              </div>
              <p className="font-montserrat text-gray-600">Years Experience</p>
              <p className="font-montserrat text-sm text-gray-500 mt-2">
                Learning & development
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="achievements-section">
            <h3 className="reveal-text text-3xl font-butler font-bold text-center mb-12">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="achievement-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 8h6M7 12h4m1 8l2-2 2 2"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-butler font-bold mb-3">
                  Regional Church Network
                </h4>
                <p className="font-montserrat text-gray-700">
                  Built and led 15 thriving churches across Southeast Asia
                  through Collective Global, creating sustainable spiritual
                  communities.
                </p>
              </div>

              <div className="achievement-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h4 className="text-xl font-butler font-bold mb-3">
                  Leadership Coaching Excellence
                </h4>
                <p className="font-montserrat text-gray-700">
                  Certified in multiple coaching methodologies including
                  Enneagram, achieving remarkable transformation results with
                  100+ individual clients.
                </p>
              </div>

              <div className="achievement-card bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-butler font-bold mb-3">
                  International Speaking
                </h4>
                <p className="font-montserrat text-gray-700">
                  Traveled to 12+ countries delivering keynotes on leadership
                  and purposeful living, reaching thousands of professionals
                  globally.
                </p>
              </div>

              <div className="achievement-card bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-butler font-bold mb-3">
                  Multi-Sector Entrepreneur
                </h4>
                <p className="font-montserrat text-gray-700">
                  Founded and co-founded 5 organizations across education,
                  healthcare, digital, and coaching sectors, demonstrating
                  versatile leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white bg-five-lines-blackbg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-montserrat text-sm font-semibold">
                Ready to Write Your Success Story?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-butler font-bold mb-6 tracking-tight">
              Join the Leaders Keith Has Transformed
            </h2>

            <p className="font-montserrat text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Experience the same authentic leadership development that has
              empowered 100+ leaders and transformed organizations across 12+
              countries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="magnetic-button bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-none hover:from-yellow-300 hover:to-orange-400 text-lg px-12 py-4 font-bold shadow-2xl">
              Start Your Journey
            </Button>
            <Button className="magnetic-button border-white text-white hover:bg-white hover:text-black text-lg px-10 py-4 backdrop-blur-sm">
              Learn More About Keith
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="font-montserrat text-sm text-gray-400">
              🔒 Free consultation • Proven methodology • Authentic
              transformation
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
