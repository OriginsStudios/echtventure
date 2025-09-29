"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import Button from "@/components/ui/Button";
import SplitType from "split-type";

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

export default function ContactPage() {
  const mainRef = useRef(null);
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  // Refs for animated hero section
  const techCoverRef = useRef(null);
  const techTitleRef = useRef(null);
  const techParaRef = useRef(null);
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    serviceInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Title and description for contact page
  const titleText = "Contact Us";
  const descText =
    "Ready to transform your leadership journey? Get in touch with Keith Tay and the ECHTVENTURE team. We're here to help you discover your authentic leadership potential.";

  useGSAP(
    () => {
      // --- Animated Hero Section Animation ---
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
          delay: 1,
        });

        // Animate all elements into view on load
        tlCover
          .to([leftSvgRef.current, rightSvgRef.current], {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          })
          .to(
            splitTitle.chars,
            {
              y: "0%",
              opacity: 1,
              duration: 1,
              stagger: 0.03,
              ease: "power4.out",
            },
            "-=0.8"
          )
          .to(
            techParaRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
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

      // --- Original Hero Section Animation (for the old hero) ---
      const fullText = "CONTACT US";
      if (headlineRef.current) {
        gsap.set(headlineRef.current, { text: "" });
        gsap.to(headlineRef.current, {
          text: fullText,
          duration: 2,
          ease: "none",
          delay: 0.3,
        });
      }

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

      // Contact form animation
      gsap.from(".form-field", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });

      // Contact info animation
      gsap.from(".contact-info-card", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
        },
      });

      // CTA section animation
      gsap.from(".cta-consultation", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".consultation-section",
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
    },
    { scope: mainRef }
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          serviceInterest: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={mainRef} className="min-h-screen">
      {/* Animated Hero Section */}
      <div
        ref={techCoverRef}
        className="tech-cover-container relative h-[80vh]"
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
                  className="h-[50rem] w-[50rem] text-custom-green opacity-20 will-change-transform scale-110"
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
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase mb-8 overflow-hidden"
            >
              {titleText}
            </h1>
            <p
              ref={techParaRef}
              className="max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed"
            >
              {descText}
            </p>
          </div>
        </div>
      </div>
      <section className="py-24 bg-white bg-five-lines">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-12">
                <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
                  Send Us a Message
                </h2>
                <p className="reveal-text font-montserrat text-xl text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours. Let us know how we can help you achieve your leadership
                  goals.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label
                      htmlFor="name"
                      className="block font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-field">
                    <label
                      htmlFor="email"
                      className="block font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label
                      htmlFor="company"
                      className="block font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-field">
                    <label
                      htmlFor="phone"
                      className="block font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                      placeholder="+60 12 345 6789"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label
                    htmlFor="serviceInterest"
                    className="block font-montserrat font-semibold text-gray-700 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                  >
                    <option value="">Select a service...</option>
                    <option value="individual-coaching">
                      Individual Leadership Coaching
                    </option>
                    <option value="corporate-workshops">
                      Corporate Workshops & Team Building
                    </option>
                    <option value="keynote-speaking">Keynote Speaking</option>
                    <option value="enneagram-workshop">
                      Enneagram Workshop
                    </option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label
                    htmlFor="subject"
                    className="block font-montserrat font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="message"
                    className="block font-montserrat font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-montserrat resize-vertical"
                    placeholder="Tell us about your leadership challenges, goals, or how we can help you..."
                  />
                </div>

                <div className="form-field">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`magnetic-button w-full bg-black text-white border-black text-lg py-4 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-200 ease-in-out ${
                      isSubmitting ? "animate-pulse" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-montserrat">
                    ✅ Thank you! Your message has been sent successfully. We'll
                    get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg font-montserrat">
                    ❌ Sorry, there was an error sending your message. Please
                    try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef}>
              <div className="mb-12">
                <h2 className="reveal-text text-4xl md:text-5xl font-butler font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="reveal-text font-montserrat text-xl text-gray-600">
                  Multiple ways to connect with Keith Tay and the ECHTVENTURE
                  team. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="contact-info-card bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-butler font-bold text-xl mb-2">
                        Email Us
                      </h3>
                      <p className="font-montserrat text-gray-600 mb-3">
                        Send us an email and we'll respond within 24 hours.
                      </p>
                      <a
                        href="mailto:hello@echtventure.com"
                        className="font-montserrat font-semibold text-black hover:text-gray-600 transition-colors"
                      >
                        hello@echtventure.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-card bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-butler font-bold text-xl mb-2">
                        Call Us
                      </h3>
                      <p className="font-montserrat text-gray-600 mb-3">
                        Speak directly with our team for immediate assistance.
                      </p>
                      <a
                        href="tel:+60123456789"
                        className="font-montserrat font-semibold text-black hover:text-gray-600 transition-colors"
                      >
                        +60 12 345 6789
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="contact-info-card bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-butler font-bold text-xl mb-2">
                        Visit Us
                      </h3>
                      <p className="font-montserrat text-gray-600 mb-3">
                        Our office is located in the heart of Kuala Lumpur.
                      </p>
                      <address className="font-montserrat text-black not-italic">
                        ECHTVENTURE Office
                        <br />
                        Kuala Lumpur, Malaysia
                        <br />
                        <span className="text-sm text-gray-600">
                          By appointment only
                        </span>
                      </address>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="contact-info-card bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                          d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7H7z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 11h4M10 15h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-butler font-bold text-xl mb-2">
                        Follow Us
                      </h3>
                      <p className="font-montserrat text-gray-600 mb-3">
                        Stay connected for leadership insights and updates.
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="font-montserrat font-semibold text-black hover:text-gray-600 transition-colors"
                        >
                          LinkedIn
                        </a>
                        <span className="text-gray-400">•</span>
                        <a
                          href="#"
                          className="font-montserrat font-semibold text-black hover:text-gray-600 transition-colors"
                        >
                          Facebook
                        </a>
                        <span className="text-gray-400">•</span>
                        <a
                          href="#"
                          className="font-montserrat font-semibold text-black hover:text-gray-600 transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation CTA */}
      <section className="consultation-section py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white bg-five-lines-blackbg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10">
          <div className="cta-consultation">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-montserrat text-sm font-semibold">
                  Ready to Transform Your Leadership?
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-butler font-bold mb-6 tracking-tight">
                Book Your Free Consultation
              </h2>

              <p className="font-montserrat text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Take the first step towards authentic leadership. Schedule a
                complimentary 30-minute consultation with Keith Tay to discuss
                your goals and discover how ECHTVENTURE can help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-butler font-bold text-lg mb-2">
                  Goal Assessment
                </h3>
                <p className="font-montserrat text-sm text-gray-300">
                  Identify your leadership objectives
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="font-butler font-bold text-lg mb-2">
                  Roadmap Creation
                </h3>
                <p className="font-montserrat text-sm text-gray-300">
                  Design your development path
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-butler font-bold text-lg mb-2">
                  Action Plan
                </h3>
                <p className="font-montserrat text-sm text-gray-300">
                  Get immediate next steps
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="magnetic-button bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-none hover:from-yellow-300 hover:to-orange-400 text-lg px-12 py-4 font-bold shadow-2xl">
                Book Free Consultation
              </Button>
              <Button className="magnetic-button border-white text-white hover:bg-white hover:text-black text-lg px-10 py-4 backdrop-blur-sm">
                View Our Services
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="font-montserrat text-sm text-gray-400">
                🔒 No commitment required • 30-minute session • Personalized
                insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
