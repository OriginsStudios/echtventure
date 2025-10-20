// components/Footer.tsx

"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        // Clear form
        setFormData({ subject: "", name: "", email: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      if (titleRef.current) {
        const words = titleRef.current.innerText.split(" ");
        titleRef.current.innerHTML = "";
        words.forEach((word) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.style.display = "inline-block";
          span.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
          titleRef.current?.appendChild(span);
        });

        gsap.from(titleRef.current.children, {
          y: 120,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        });
      }
    },
    { scope: container }
  );

  return (
    <footer
      ref={container}
      className="h-full sticky bottom-0 z-0 text-white flex flex-col items-center justify-center p-8 pt-24 font-butler antialiased bg-five-lines-blackbg "
    >
      <div className="w-full mx-auto text-center ">
        {/* Contact Form - Moved to top for better visibility */}
        <div
          id="contact-form"
          className="max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-16"
        >
          <h2 className="font-butler text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base disabled:opacity-50"
              />
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`text-center py-2 px-4 rounded-lg text-sm sm:text-base ${
                  submitStatus.type === "success"
                    ? "bg-green-900/30 text-green-400 border border-green-700"
                    : "bg-red-900/30 text-red-400 border border-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="flex justify-center pt-2 sm:pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Quote */}
        <blockquote className="mb-16">
          <p className="text-lg italic font-butler text-gray-400 max-w-xl mx-auto leading-relaxed">
            "Every transformation begins with a single step. I believe in the
            power of authentic change and the courage it takes to step into your
            true potential. Let's embark on this journey together."
          </p>
          <cite className="block text-gray-500 mt-6 not-italic tracking-wide">
            — Keith Tay
          </cite>
        </blockquote>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
            Powered by{" "}
            <a
              href="https://www.originskh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors duration-200"
              aria-label="Visit Origins Studios website (opens in a new tab)"
            >
              Origins Studios
            </a>{" "}
            · © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
