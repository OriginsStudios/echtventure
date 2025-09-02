// src/components/Navbar.tsx
"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const navLinks = [
    { title: "about", href: "/about" },
    { title: "intensive", href: "/intensive" },
    { title: "the studio", href: "/studio" },
    { title: "programs", href: "/programs" },
    { title: "contact", href: "/contact" },
  ];

  const handleMouseEnter = (index: number) => {
    const line = lineRefs.current[index];
    if (line) {
      gsap.killTweensOf(line);
      gsap.to(line, {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const line = lineRefs.current[index];
    if (line) {
      gsap.killTweensOf(line);
      gsap.to(line, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.2,
        ease: "power2.in",
      });
    }
  };

  return (
    <nav className="bg-backgroundColorWhite w-full sticky top-0 border-b border-lineColor">
      <div className="mx-auto container-padding ">
        <div className="flex items-center justify-between h-20 hover:bg-transparent">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-crimson text-2xl font-extrabold tracking-wider text-black ">
              echtventure
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8 ">
            {navLinks.map((link, index) => (
              <div
                key={link.title}
                className="relative group "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Link
                  href={link.href}
                  className="font-crimson text-gray-800  relative  text-xl font-extrabold tracking-widest pb-2 transition-colors duration-300 "
                >
                  {link.title}
                </Link>
                <span
                  ref={(el) => {
                    if (el) lineRefs.current[index] = el;
                  }}
                  className="absolute bottom-0 left-0 h-[2px]  w-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 transform scale-x-0"
                />
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800  focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fcfaf8]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-roboto text-gray-800  block px-3 py-2 rounded-md text-base font-medium tracking-widest"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
