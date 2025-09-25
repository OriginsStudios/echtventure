"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Button from "@/components/ui/Button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero section animations
    const fullText = "OUR SERVICES";
    if (headlineRef.current) {
      gsap.set(headlineRef.current, { text: "" });
      gsap.to(headlineRef.current, {
        text: fullText,
        duration: 2,
        ease: "none",
        delay: 0.3,
      });
    }

    // Animate hero stats bar
    gsap.from(".hero-stats .stat-item", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.5,
    });

    // Animate hero badge
    gsap.from(".hero-badge", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 1.5,
    });

    // Animate hero description and button
    gsap.from([".hero-description", ".hero-sub-description", ".hero-button"], {
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

    // Services overview animation with enhanced effects
    gsap.from(".service-pillar", {
      opacity: 0,
      y: 80,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: overviewRef.current,
        start: "top 80%",
      },
    });

    // Service pillar icons rotation
    gsap.from(".service-icon", {
      rotation: -180,
      scale: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: overviewRef.current,
        start: "top 70%",
      },
    });

    // Social proof section animations
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 60,
      rotation: 5,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".social-proof-section",
        start: "top 80%",
      },
    });

    // Stats counter animation
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 80%",
      },
    });

    // Individual service sections with parallax effect
    gsap.from(".service-section", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.4,
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 70%",
      },
    });

    // Service images parallax
    gsap.to(".service-image", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".service-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Feature cards animation with enhanced effects
    gsap.from(".feature-card", {
      opacity: 0,
      scale: 0.8,
      y: 40,
      rotation: 10,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
      },
    });

    // CTA section dramatic entrance
    gsap.from(".cta-badge", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      },
    });

    gsap.from(".cta-title", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      },
    });

    gsap.from(".cta-service-card", {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".cta-services-grid",
        start: "top 80%",
      },
    });

    gsap.from(".cta-buttons", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      },
    });

    // Floating elements animation
    gsap.to(".floating-element", {
      y: -20,
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

    // Partners section animations
    gsap.from(".partner-card", {
      opacity: 0,
      y: 40,
      scale: 0.9,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".partners-grid",
        start: "top 80%",
      },
    });

    gsap.from(".partner-category", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".partner-category",
        start: "top 85%",
      },
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
          {/* Stats Bar */}
          <div className="hero-stats flex flex-wrap justify-center gap-8 mb-12 text-sm font-montserrat text-gray-600">
            <div className="stat-item flex items-center floating-element">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <span>100+ Leaders Coached</span>
            </div>
            <div className="stat-item flex items-center floating-element">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <span>2500+ Professionals Reached</span>
            </div>
            <div className="stat-item flex items-center floating-element">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <span>12+ Countries</span>
            </div>
          </div>

          <span
            ref={headlineRef}
            className="hero-headline block font-extrabold text-black leading-none uppercase tracking-tighter
                       text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] mb-8"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            OUR SERVICES
          </span>

          <div className="mb-8">
            <div className="hero-badge inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-4">
              <span className="font-montserrat text-sm font-semibold uppercase tracking-wider">
                ECHT = Authentic • Real • Genuine • True
              </span>
            </div>
          </div>

          <p className="hero-description font-montserrat text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-4">
            Empowering leaders, transforming organizations, and inspiring change
            through authentic coaching, dynamic workshops, and powerful keynote
            speaking.
          </p>

          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Since 2019, we've been providing the right resources at the right
            time to maximize business potential.
          </p>

          <div className="hero-button flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="magnetic-button bg-black text-white border-black text-lg px-10 py-4 hover:bg-gray-800">
              Schedule Consultation
            </Button>
            <Button className="magnetic-button text-lg px-10 py-4">
              View Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={overviewRef} className="py-24 px-6 md:px-12 bg-five-lines">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-butler font-bold mb-6 tracking-tight">
              Three Core Pillars
            </h2>
            <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to leadership development combines
              personalized coaching, organizational transformation, and
              inspirational speaking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="service-pillar group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="service-icon flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-butler font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  Individual Leadership Coaching
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-6">
                  Personalized 1-on-1 coaching for aspiring leaders,
                  entrepreneurs, and business owners ready to unlock their
                  authentic leadership potential.
                </p>
                <div className="flex items-center text-sm font-montserrat text-blue-600">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="service-pillar group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="service-icon flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-butler font-bold mb-4 group-hover:text-green-600 transition-colors">
                  Corporate Workshops
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-6">
                  Team building and culture transformation workshops designed to
                  enhance communication, leadership, and organizational
                  effectiveness.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm font-montserrat text-green-600">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                    HRD CORP
                  </div>
                </div>
              </div>
            </div>

            <div className="service-pillar group">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="service-icon flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-butler font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  Keynote Speaking
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-6">
                  Dynamic, inspiring presentations that transform audiences
                  across conferences, corporate events, and universities in 12+
                  countries.
                </p>
                <div className="flex items-center text-sm font-montserrat text-purple-600">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white bg-five-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-butler font-bold mb-6">
              Trusted by Leaders Worldwide
            </h2>
            <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of professionals who have transformed their
              leadership journey with ECHTVENTURE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="testimonial-card bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">JL</span>
                </div>
                <div>
                  <h4 className="font-butler font-semibold">Jennifer Liu</h4>
                  <p className="text-sm text-gray-600">CEO, Tech Startup</p>
                </div>
              </div>
              <p className="font-montserrat text-gray-700 italic">
                "Keith's coaching helped me develop authentic leadership skills
                that transformed not just my approach, but my entire
                organization's culture."
              </p>
            </div>

            <div className="testimonial-card bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">MR</span>
                </div>
                <div>
                  <h4 className="font-butler font-semibold">
                    Michael Rodriguez
                  </h4>
                  <p className="text-sm text-gray-600">VP, Fortune 500</p>
                </div>
              </div>
              <p className="font-montserrat text-gray-700 italic">
                "The corporate workshop was a game-changer. Our team's
                communication and collaboration improved dramatically after just
                one session."
              </p>
            </div>

            <div className="testimonial-card bg-gray-50 p-6 rounded-xl border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">SC</span>
                </div>
                <div>
                  <h4 className="font-butler font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Conference Organizer</p>
                </div>
              </div>
              <p className="font-montserrat text-gray-700 italic">
                "Keith's keynote was the highlight of our conference. His
                authentic approach and practical insights left our audience
                truly inspired."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-butler font-bold text-black mb-2">
                100+
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Leaders Coached
              </p>
            </div>
            <div>
              <div className="text-3xl font-butler font-bold text-black mb-2">
                2,500+
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Professionals Reached
              </p>
            </div>
            <div>
              <div className="text-3xl font-butler font-bold text-black mb-2">
                12+
              </div>
              <p className="font-montserrat text-sm text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-3xl font-butler font-bold text-black mb-2">
                6+
              </div>
              <p className="font-montserrat text-sm text-gray-600">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section ref={servicesRef} className="py-20 bg-gray-50 bg-five-lines">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Individual Leadership Coaching */}
          <div className="service-section mb-24">
            {/* Image Placeholder */}
            <div className="mb-12">
              <div className="service-image w-full h-64 md:h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-600"
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
                  <p className="font-montserrat text-sm">
                    One-on-One Leadership Coaching Session
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-butler font-bold mb-6">
                  Individual Leadership Coaching
                </h2>
                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Who It's For:
                  </h3>
                  <p className="font-montserrat text-gray-600 leading-relaxed">
                    Working Millennials, aspiring leaders, young entrepreneurs,
                    and business owners ready to progressively realize their
                    passion and purpose in life while creating meaningful impact
                    in their organizations and communities.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Keith's Unique Approach:
                  </h3>
                  <ul className="font-montserrat text-gray-600 space-y-2">
                    <li>• Blends engineering + theological backgrounds</li>
                    <li>• Integration of leadership, work, and spirituality</li>
                    <li>• Uses Enneagram Personality Profiling</li>
                    <li>
                      • Regarded as relationship guru and leadership coach
                    </li>
                    <li>
                      • 100+ individuals coached in life, relationship &
                      leadership
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    The Process:
                  </h3>
                  <ul className="font-montserrat text-gray-600 space-y-2">
                    <li>• Initial consultation and goal-setting session</li>
                    <li>• Personalized coaching plan development</li>
                    <li>• Regular one-on-one coaching sessions</li>
                    <li>• Progress tracking and accountability</li>
                    <li>• Integration of spiritual and business principles</li>
                  </ul>
                </div>
              </div>

              <div className="features-grid">
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Gain Clarity
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Discover your authentic leadership style and core values
                  </p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Develop Winning Habits
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Build sustainable practices that drive consistent results
                  </p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Integrate Work & Spirituality
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Align your professional goals with your spiritual values
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Workshops */}
          <div className="service-section mb-24">
            {/* Image Placeholder */}
            <div className="mb-12">
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-800"
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
                  <p className="font-montserrat text-sm">
                    Corporate Team Building Workshop
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-4xl md:text-5xl font-butler font-bold mb-6">
                  Corporate Workshops & Team Building
                </h2>

                {/* HRD Corp Feature */}
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
                  <div className="flex items-center">
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                      HRD CORP
                    </div>
                    <span className="font-butler font-semibold">
                      Claimable for Malaysian Businesses
                    </span>
                  </div>
                  <p className="font-montserrat text-sm text-gray-700 mt-2">
                    Maximize your training budget with government-supported
                    professional development
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Who It's For:
                  </h3>
                  <p className="font-montserrat text-gray-600 leading-relaxed">
                    Companies looking to improve culture, enhance communication,
                    develop leadership at all levels, and build stronger, more
                    cohesive teams. 2500+ individuals reached through corporate
                    engagements.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Popular Workshop Topics:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-montserrat text-gray-600">
                    <div>• Creative Leadership: The Power of Storytelling</div>
                    <div>• Sustainable Leadership: Winning Habits</div>
                    <div>• Culture Code I: Psychological Safety</div>
                    <div>• Culture Code II: Healthy Culture</div>
                    <div>• Bridging the Generation Gap</div>
                    <div>• The Enneagram Workshop</div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 features-grid">
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Creative Leadership
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Unlock innovative thinking and creative problem-solving
                  </p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Culture Code
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Build and strengthen organizational culture
                  </p>
                </div>
                <div className="feature-card bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h4 className="font-butler font-bold text-lg mb-3">
                    Team Dynamics
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Improve collaboration and communication
                  </p>
                </div>
                <div className="text-center mt-6">
                  <Button className="text-sm px-6 py-2">
                    View All Workshop Topics
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Keynote Speaking */}
          <div className="service-section">
            {/* Image Placeholder */}
            <div className="mb-12">
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-purple-700">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-800"
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
                  <p className="font-montserrat text-sm">
                    International Keynote Speaking
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-butler font-bold mb-6">
                  Keynote Speaking
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Who It's For:
                  </h3>
                  <p className="font-montserrat text-gray-600 leading-relaxed">
                    Conference organizers, companies hosting events,
                    universities, and organizations seeking inspiring,
                    transformational speakers for their audiences.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="bg-black text-white p-4 rounded-lg text-center mb-6">
                    <p className="font-butler font-bold text-lg">
                      LIGHT • LOVE • LEAD
                    </p>
                    <p className="font-montserrat text-sm mt-1">
                      Keith's Tagline & Philosophy
                    </p>
                  </div>

                  <h3 className="text-xl font-butler font-semibold mb-3 text-gray-800">
                    Why Book Keith?
                  </h3>
                  <ul className="font-montserrat text-gray-600 space-y-2">
                    <li>
                      • Thought Leader, Leadership Coach & International Speaker
                    </li>
                    <li>• Experience speaking in over 12 countries</li>
                    <li>• Unique blend: Engineering + Theology backgrounds</li>
                    <li>• Co-Founder of multiple organizations since 2004</li>
                    <li>• Specializes in leadership & purposeful living</li>
                    <li>• Authentic storytelling that transforms audiences</li>
                  </ul>
                </div>
              </div>

              <div className="features-grid">
                <div className="feature-card bg-black text-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-butler font-bold mb-2">12+</div>
                  <p className="font-montserrat">Countries Reached</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="feature-card bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-butler font-bold mb-1">
                      Leadership
                    </div>
                    <p className="font-montserrat text-sm text-gray-600">
                      Development
                    </p>
                  </div>
                  <div className="feature-card bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-butler font-bold mb-1">
                      Culture
                    </div>
                    <p className="font-montserrat text-sm text-gray-600">
                      Transformation
                    </p>
                  </div>
                  <div className="feature-card bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-butler font-bold mb-1">
                      Innovation
                    </div>
                    <p className="font-montserrat text-sm text-gray-600">
                      & Growth
                    </p>
                  </div>
                  <div className="feature-card bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-butler font-bold mb-1">
                      Purpose
                    </div>
                    <p className="font-montserrat text-sm text-gray-600">
                      & Impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-24 bg-gray-50 bg-five-lines">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="reveal-text font-montserrat text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of partnering with diverse organizations
              across industries, from global corporations to innovative startups
              and educational institutions.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="partners-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
            {/* Row 1 */}
            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">AM</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  AnyMind
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">GCS</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Gary Chong Studios
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">S7V</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Se7enVault
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">YTL</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  YTL
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  Since 1955
                </p>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">HG</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  HyperGear
                </h3>
              </div>
            </div>

            {/* Row 2 */}
            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">UHY</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  UHY
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">MG</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Morison Global
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">wR</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  wRipple
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">RCA</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  RCA Wealth Agency
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">VAG</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Voskos Advisory
                </h3>
              </div>
            </div>

            {/* Row 3 */}
            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">IQ</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  IQVIA
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Ascend Com
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  Rental • Integration
                </p>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">AΩ</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Alpha Omega SP
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  Homeschool
                </p>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">ZA</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Zera Academy
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">K&K</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Kith & Kin
                </h3>
              </div>
            </div>

            {/* Row 4 */}
            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">ESP</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  ESP
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">KLD</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  KL Dental
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">SF</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Suree Food
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  Industries
                </p>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">MSC</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Maria's SteakCafe
                </h3>
              </div>
            </div>

            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">TCG</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  TCG
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  Telecom Consulting
                </p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="partner-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center md:col-start-2 lg:col-start-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">CSL</span>
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800">
                  Chee Siah Le Kee
                </h3>
                <p className="font-montserrat text-xs text-gray-500">
                  & Partners
                </p>
              </div>
            </div>
          </div>

          {/* Partner Categories */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="partner-category">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h3 className="font-butler font-bold text-lg mb-2">Corporate</h3>
              <p className="font-montserrat text-sm text-gray-600">
                Global corporations and enterprises
              </p>
            </div>
            <div className="partner-category">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <h3 className="font-butler font-bold text-lg mb-2">Education</h3>
              <p className="font-montserrat text-sm text-gray-600">
                Schools and educational institutions
              </p>
            </div>
            <div className="partner-category">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              <h3 className="font-butler font-bold text-lg mb-2">Startups</h3>
              <p className="font-montserrat text-sm text-gray-600">
                Innovative technology companies
              </p>
            </div>
            <div className="partner-category">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                  />
                </svg>
              </div>
              <h3 className="font-butler font-bold text-lg mb-2">
                Professional Services
              </h3>
              <p className="font-montserrat text-sm text-gray-600">
                Consulting and advisory firms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white bg-five-lines-blackbg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-6 md:px-12 relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-montserrat text-sm font-semibold">
                Ready to Begin Your Journey?
              </span>
            </div>

            <h2 className="cta-title text-4xl md:text-6xl font-butler font-bold mb-8 tracking-tight">
              Transform Your Leadership Today
            </h2>

            <div className="mb-8">
              <p className="font-montserrat text-lg text-yellow-400 uppercase tracking-wider mb-4">
                LIGHT • LOVE • LEAD
              </p>
              <p className="font-montserrat text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join 100+ leaders who have discovered their authentic leadership
                style and transformed their organizations through ECHTVENTURE's
                proven approach.
              </p>
            </div>
          </div>

          <div className="cta-services-grid grid md:grid-cols-3 gap-8 mb-16">
            <div className="cta-service-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              <h3 className="font-butler font-bold text-lg mb-2">
                Individual Coaching
              </h3>
              <p className="font-montserrat text-sm text-gray-300">
                1-on-1 personalized leadership development
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-butler font-bold text-lg mb-2">
                Team Workshops
              </h3>
              <p className="font-montserrat text-sm text-gray-300">
                Culture transformation & team building
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="font-butler font-bold text-lg mb-2">
                Keynote Speaking
              </h3>
              <p className="font-montserrat text-sm text-gray-300">
                Inspiring presentations worldwide
              </p>
            </div>
          </div>

          <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="magnetic-button bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-none hover:from-yellow-300 hover:to-orange-400 text-lg px-12 py-4 font-bold shadow-2xl">
              Schedule Free Consultation
            </Button>
            <Button className="magnetic-button border-white text-white hover:bg-white hover:text-black text-lg px-10 py-4 backdrop-blur-sm">
              Download Our Guide
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="font-montserrat text-sm text-gray-400">
              🔒 Free 30-minute consultation • No commitment required •
              Personalized approach
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
