"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const MailingListComponent: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // GSAP animation for the main title
  useGSAP(
    () => {
      if (titleRef.current) {
        // Split text into spans of words
        const words = titleRef.current.innerText.split(" ");
        titleRef.current.innerHTML = "";
        words.forEach((word) => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          // Style for animation
          span.style.display = "inline-block";
          span.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
          titleRef.current?.appendChild(span);
        });

        // Animate words sliding up
        gsap.from(titleRef.current.children, {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-transparent text-white min-h-screen flex flex-col items-center justify-center p-8 font-sans antialiased"
    >
      <div className="w-full max-w-lg mx-auto text-center">
        {/* Signature SVG - You can replace this with your own */}
        <div className="mb-16">
          <svg
            className="w-48 h-auto mx-auto"
            viewBox="0 0 278 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1042 59.8113C13.2934 57.1994 16.9458 52.8465 21.0152 48.7303C27.009 42.6647 34.1166 37.8189 42.1026 34.3312C48.884 31.393 56.0957 29.8373 63.585 29.8373C69.3486 29.8373 74.9082 30.6974 80.1411 32.4176C87.4916 34.7876 93.6382 38.8374 98.4087 44.4093C101.402 47.9383 103.571 51.9881 104.877 56.4177C105.786 59.5471 106.24 62.8066 106.24 66.066C106.24 72.8856 104.091 78.405 99.8596 82.4961L101.526 62.2721L114.391 66.066L113.125 79.3747C118.889 74.9451 121.821 68.7358 121.821 61.1123C121.821 57.0351 121.042 53.2825 119.526 49.8947C117.237 45.0902 113.81 41.1804 109.343 38.2842L120.595 28.537C125.184 33.4241 127.514 39.2483 127.514 45.871C127.514 48.918 126.98 51.8416 125.952 54.5824C128.525 51.453 130.082 48.0652 130.655 44.4093C131.045 41.867 131.24 39.2835 131.24 36.6588C131.24 30.2917 129.15 24.8617 125.045 20.5088C120.982 16.1559 115.866 13.0649 109.872 11.386C103.96 9.7071 97.4646 8.86768 90.5772 8.86768C79.8189 8.86768 70.1345 11.2377 61.7086 16.0835C56.1082 19.1305 51.4005 23.139 47.7481 27.9848C45.319 31.2029 43.5376 34.8207 42.486 38.7305C41.7481 41.5477 41.3791 44.5713 41.3791 47.7715C41.3791 55.3538 43.808 61.4607 48.6655 65.9426L45.4545 45.3607L32.1729 48.2569L34.1082 62.5398C27.9205 60.1285 23.4118 56.1199 20.7318 50.7811L33.7364 36.6588C36.4164 41.6669 40.8418 45.6755 46.8355 48.5717L38.4095 29.8373C30.6082 34.6418 25.1005 41.505 22.2595 50.1313"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M149.255 60.1761C149.091 54.8812 150.136 50.1313 152.425 45.871C157.014 37.9366 164.733 33.0143 174.919 31.5049C180.152 30.6448 185.344 30.2147 190.455 30.2147C203.87 30.2147 215.319 34.9646 224.255 44.4093C230.167 50.7811 233.428 58.4962 233.428 67.0812C233.428 78.6881 228.699 87.2318 219.646 91.9817C211.22 96.3346 201.291 98.5992 190.291 98.5992C180.259 98.5992 171.16 96.6214 163.317 92.7936C154.542 88.5332 148.11 82.2539 144.458 74.3195L159.219 66.066C161.425 70.3847 164.852 73.803 169.319 76.173C173.828 78.5843 178.939 79.8306 184.54 79.8306C191.078 79.8306 196.586 78.4908 200.919 75.8213C205.294 73.109 207.514 69.3564 207.514 64.6065C207.514 60.8953 206.35 57.8717 204.061 55.5429C201.814 53.1729 198.595 51.5768 194.582 50.7811L179.614 48.0269C173.205 46.8837 168.137 44.9723 164.582 42.411C161.028 39.8085 159.255 36.5078 159.255 32.5824C159.255 27.2464 161.737 22.9277 166.507 19.8807C171.278 16.7925 177.108 15.247 183.848 15.247C189.173 15.247 194.045 16.2248 198.409 18.1408C202.814 20.0156 206.467 22.7564 209.255 26.2854L195.046 34.3312C193.337 32.042 191.168 30.3115 188.625 29.1683C186.082 28.0251 183.334 27.4535 180.455 27.4535C175.467 27.4535 171.491 28.638 168.664 30.9823C165.837 33.2854 164.458 36.1716 164.458 39.5594C164.458 42.1841 165.237 44.3195 166.753 45.871C168.31 47.4224 170.455 48.6186 173.046 49.3855L189.664 52.3633C197.878 53.7618 204.287 56.173 208.664 59.4325C213.041 62.6919 215.255 66.8081 215.255 71.6539C215.255 76.99 212.802 81.3842 208.032 84.6023C203.261 87.8204 197.308 89.4325 190.455 89.4325C184.226 89.4325 178.232 88.0753 172.632 85.3762C167.032 82.6354 162.337 78.8828 158.814 74.3195L149.255 60.1761Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Animated Title */}
        <div className="overflow-hidden mb-12">
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
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
    </div>
  );
};

export default MailingListComponent;
