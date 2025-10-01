// components/Footer.tsx

"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
        <div className="flex justify-center  ">
          <Image
            src={"./signature.svg"}
            alt="keithTay"
            height={200}
            width={300}
          />
        </div>
        {/* Quote */}
        <blockquote className="mb-16">
          <p className="text-lg italic font-montserrat text-gray-400 max-w-xl mx-auto leading-relaxed">
            "Every transformation begins with a single step. I believe in the
            power of authentic change and the courage it takes to step into your
            true potential. Let's embark on this journey together."
          </p>
          <cite className="block text-gray-500 mt-6 not-italic tracking-wide">
            — Keith Tay
          </cite>
        </blockquote>
        {/* Contact Form - Centered */}
        <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-12">
          <h2 className="font-butler text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
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
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
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
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base"
              />
            </div>
            <div className="flex justify-center pt-2 sm:pt-3">
              <button
                type="submit"
                className="bg-white text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
