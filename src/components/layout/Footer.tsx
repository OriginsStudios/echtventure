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
      className="h-full sticky bottom-0 z-0 text-white flex flex-col items-center justify-center p-8 pt-24 font-sans antialiased bg-five-lines-blackbg "
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
        <div className="overflow-hidden mb-12">
          <h1 className="font-bowlby tracking-wider font-black uppercase 2xl:text-[7rem] xl:text-[6rem] lg:text-[5rem] text-[3rem] ">
            Join The Mailing List
          </h1>
        </div>
        {/* Quote */}
        <blockquote className="mb-16">
          <p className="text-lg italic text-gray-400 max-w-xl mx-auto leading-relaxed">
            “I promise not to waste your time. I'm well aware that we all get
            way too many marketing emails. I'll only write when I actually have
            something new to share.”
          </p>
          <cite className="block text-gray-500 mt-6 not-italic tracking-wide">
            — Ben Cooper (Radical Face)
          </cite>
        </blockquote>
        {/* Form */}
        <form className="space-y-12 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-3 transition-colors duration-300 text-lg"
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
              className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none py-3 transition-colors duration-300 text-lg"
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-all duration-300 transform hover:scale-105"
            >
              subscribe
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
