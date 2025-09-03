"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

// CSS styles to prevent scrolling
const scrollLockStyles = `
  .no-scroll {
    overflow: hidden !important;
    height: 100% !important;
  }
  
  .no-scroll body {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    top: 0 !important;
    left: 0 !important;
  }
`;

// Data for navigation links
const navLinks = [
  { title: "about", href: "/about" },
  { title: "intensive", href: "/intensive" },
  { title: "the studio", href: "/studio" },
  { title: "programs", href: "/programs" },
  { title: "contact", href: "/contact" },
] as const;

// --- Mobile Navigation Component ---
const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  useGSAP(
    () => {
      const backdrop = container.current?.querySelector(".menu-backdrop");
      const brandPiece = container.current?.querySelector(".brand-piece");
      const navPiece = container.current?.querySelector(".nav-piece");
      const imagePiece = container.current?.querySelector(".image-piece");
      const closeButton = container.current?.querySelector(".close-button");
      const brandText = container.current?.querySelector(".brand-text");
      const navLinksArr = gsap.utils.toArray(".mobile-nav-link");
      const coverImage = container.current?.querySelector(".cover-image");

      if (
        !backdrop ||
        !brandPiece ||
        !navPiece ||
        !imagePiece ||
        !closeButton ||
        !brandText ||
        !coverImage
      )
        return;

      timeline.current = gsap
        .timeline({ paused: true })
        .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          brandPiece,
          { y: -100, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(
          closeButton,
          { scale: 0.5, opacity: 0, rotation: -45 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .fromTo(
          navPiece,
          { x: -100, y: 100, rotation: 15, opacity: 0, scale: 0.95 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .fromTo(
          imagePiece,
          { x: 100, y: 100, rotation: -15, opacity: 0, scale: 0.95 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .fromTo(
          brandText,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          navLinksArr,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          coverImage,
          { scale: 0.8, opacity: 0, rotation: 10 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: container }
  );

  // UPDATED useEffect for robust scroll lock
  useEffect(() => {
    // Inject CSS styles if not already present
    if (!document.getElementById("scroll-lock-styles")) {
      const styleElement = document.createElement("style");
      styleElement.id = "scroll-lock-styles";
      styleElement.textContent = scrollLockStyles;
      document.head.appendChild(styleElement);
    }

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const containerEl = container.current;

    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Add classes to prevent scrolling
      htmlElement.classList.add("no-scroll");
      bodyElement.classList.add("no-scroll");
      bodyElement.style.top = `-${scrollY}px`;

      if (containerEl) containerEl.style.pointerEvents = "auto";
      timeline.current?.play();
    } else {
      // Get the scroll position from the body's top style
      const scrollY = bodyElement.style.top;

      // Remove classes to re-enable scrolling
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
      bodyElement.style.top = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }

      timeline.current?.reverse();
      setTimeout(() => {
        if (containerEl) containerEl.style.pointerEvents = "none";
      }, 500);
    }

    // Cleanup function to ensure scrolling is re-enabled on component unmount
    return () => {
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
      bodyElement.style.top = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 lg:hidden"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="menu-backdrop absolute inset-0 bg-black/30 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
      />

      <div className="absolute inset-0 flex justify-end">
        <div className="grid h-full w-[95vw] sm:w-[85vw] md:w-[70vw] grid-cols-2 grid-rows-[auto,1fr] gap-2">
          {/* Brand Piece */}
          <div className="brand-piece relative col-span-2 bg-gradient-to-br from-[#fcfaf8] to-[#f5f3f1] shadow-xl border border-gray-200/50 flex items-center justify-center rounded-none py-6">
            <div className="brand-text text-center">
              <h2 className="font-crimson text-3xl font-extrabold tracking-wider text-black">
                echtventure
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mx-auto mt-2"></div>
            </div>
            <button
              onClick={handleClose}
              className="close-button absolute top-4 right-4 p-2 text-gray-500 transition-colors hover:text-black"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Piece */}
          <div className="nav-piece bg-gradient-to-br from-[#fcfaf8] to-[#f5f3f1] shadow-xl border border-gray-200/50 p-6 flex flex-col justify-center rounded-none">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={handleClose}
                  className="mobile-nav-link block text-2xl font-bowlby font-black uppercase tracking-wider transition-all duration-200 hover:text-red-500 hover:translate-x-2 cursor-pointer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Image Piece */}
          <div className="image-piece bg-gradient-to-br from-[#fcfaf8] to-[#f5f3f1] shadow-xl border border-gray-200/50 p-2 flex items-center justify-center overflow-hidden rounded-none">
            <div className="cover-image relative w-full h-full overflow-hidden rounded-none">
              <img
                src="/cover3.jpeg"
                alt="Echtventure Cover"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-crimson font-semibold">Transform</p>
                <p className="text-xs opacity-90">Your Journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = useCallback((index: number) => {
    gsap.to(lineRefs.current[index], {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    gsap.to(lineRefs.current[index], {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.3,
      ease: "power2.in",
    });
  }, []);

  const toggleMobileMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <nav className="bg-backgroundColorWhite w-full sticky top-0 border-b z-40 border-lineColor">
        <div className="mx-auto container-padding ">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span className="font-crimson text-2xl font-extrabold tracking-wider text-black">
                echtventure
              </span>
            </Link>

            <div className="hidden lg:flex md:items-center md:space-x-8">
              {navLinks.map((link, index) => (
                <div
                  key={link.title}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Link
                    href={link.href}
                    className="font-crimson text-gray-800 relative text-xl font-extrabold tracking-widest pb-2 transition-colors duration-300 hover:text-gray-600 cursor-pointer"
                  >
                    {link.title}
                  </Link>
                  <span
                    ref={(el) => {
                      if (el) lineRefs.current[index] = el;
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 transform scale-x-0"
                  />
                </div>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300 hover:bg-gray-100/80"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Open menu" : "Close menu"}
              >
                <span className="sr-only">Open main menu</span>
                <div className="text-gray-800">
                  {isOpen ? null : <Menu className="block h-6 w-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
