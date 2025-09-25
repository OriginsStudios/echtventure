"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
  { title: "coaches", href: "/coaches" },
  { title: "services", href: "/services" },
  { title: "success stories", href: "/success-stories" },
  { title: "blog", href: "/resources/blog" },
  { title: "podcast", href: "/resources/podcast" },
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
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  // FIX 1: Add a ref to track if the menu has been opened at least once
  const hasRunOnce = useRef(false);

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

      // Opening timeline: pieces come together simultaneously
      openTl.current = gsap
        .timeline({ paused: true })
        .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.15 })
        .addLabel("enter")
        .fromTo(
          brandPiece,
          { y: -100, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" },
          "enter"
        )
        .fromTo(
          navPiece,
          { x: -100, y: 60, rotation: 10, opacity: 0, scale: 0.95 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: "power2.out", // Changed ease for quicker entry
          },
          "enter"
        )
        .fromTo(
          imagePiece,
          { x: 100, y: 60, rotation: -10, opacity: 0, scale: 0.95 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: "power2.out", // Changed ease for quicker entry
          },
          "enter"
        )
        .fromTo(
          closeButton,
          { scale: 0.7, opacity: 0, rotation: -30 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.2,
            ease: "power2.out", // Changed ease for quicker entry
          },
          "enter" // Start at the same time as "enter" label
        )
        .fromTo(
          brandText,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
          "enter" // Start at the same time as "enter" label
        )
        .fromTo(
          navLinksArr,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out", // Removed stagger
          },
          "enter" // Start at the same time as "enter" label
        )
        .fromTo(
          coverImage,
          { scale: 0.9, opacity: 0, rotation: 6 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.2,
            ease: "power2.out", // Changed ease for quicker entry
          },
          "enter" // Start at the same time as "enter" label
        );
    },
    { scope: container }
  );

  const runCloseAnimation = useCallback(() => {
    const root = container.current;
    if (!root) return Promise.resolve();

    const backdrop = root.querySelector(".menu-backdrop") as HTMLElement | null;
    const brandPiece = root.querySelector(".brand-piece") as HTMLElement | null;
    const navPiece = root.querySelector(".nav-piece") as HTMLElement | null;
    const imagePiece = root.querySelector(".image-piece") as HTMLElement | null;

    if (!backdrop || !brandPiece || !navPiece || !imagePiece)
      return Promise.resolve();

    return new Promise<void>((resolve) => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.set([brandPiece, navPiece, imagePiece], {
            clearProps: "transform,opacity",
          });
          openTl.current?.progress(0).pause();
          resolve();
        },
      });

      // Animate pieces one by one as blocks
      tl.to(imagePiece, {
        xPercent: 120,
        opacity: 0,
        duration: 0.15,
        ease: "power3.in",
      })
        .to(
          navPiece,
          {
            xPercent: -200,
            opacity: 0,
            duration: 0.15,
            ease: "power3.in",
          },
          "-=0.05"
        )
        .to(
          brandPiece,
          {
            yPercent: -120,
            opacity: 0,
            duration: 0.15,
            ease: "power3.in",
          },
          "-=0.05"
        )
        .to(backdrop, { opacity: 0, duration: 0.15, ease: "power2.out" });
    });
  }, []);

  useEffect(() => {
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
      hasRunOnce.current = true; // Mark as opened
      const scrollY = window.scrollY;

      htmlElement.classList.add("no-scroll");
      bodyElement.classList.add("no-scroll");
      bodyElement.style.top = `-${scrollY}px`;

      if (containerEl) containerEl.style.pointerEvents = "auto";
      openTl.current?.restart();
    } else {
      // FIX 1: Only run close animation if it has been opened before
      if (hasRunOnce.current) {
        runCloseAnimation().finally(() => {
          const scrollY = bodyElement.style.top;
          htmlElement.classList.remove("no-scroll");
          bodyElement.classList.remove("no-scroll");
          bodyElement.style.top = "";
          if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
          }
          if (containerEl) containerEl.style.pointerEvents = "none";
        });
      }
    }

    return () => {
      htmlElement.classList.remove("no-scroll");
      bodyElement.classList.remove("no-scroll");
      bodyElement.style.top = "";
    };
  }, [isOpen, runCloseAnimation]);

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      try {
        (window as any).__overlayNavigate?.(href);
      } catch {
        // fallback if overlay not ready
        window.location.href = href;
      }
    },
    []
  );

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
          <div className="brand-piece relative col-span-2 bg-gradient-to-br from-[#fcfaf8] to-[#f5f3f1] shadow-xl border border-gray-200/50 flex items-left justify-start pl-6 rounded-none py-6">
            <div className="brand-text text-left">
              <h2 className="text-3xl font-butler font-bold tracking-tight text-black">
                echtventure
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mt-2"></div>
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
              {navLinks.map((link, index) => (
                // FIX 2: Added event handlers and necessary classes for hover effect
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavigate(e, link.href)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="mobile-nav-link relative block  transition-colors duration-200  cursor-pointer pb-1 font-butler text-3xl font-semibold tracking-wider text-black"
                >
                  {link.title}
                  <span
                    ref={(el) => {
                      if (el) lineRefs.current[index] = el;
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 transform scale-x-0 origin-left"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Image Piece */}
          <div className="image-piece bg-gradient-to-br from-[#fcfaf8] to-[#f5f3f1] shadow-xl flex items-center justify-center overflow-hidden rounded-none ">
            <div className="cover-image relative w-full h-full overflow-hidden rounded-none ">
              <img
                src="/cover3.jpeg"
                alt="Echtventure Cover"
                className="w-full h-full object-[25%_45%] object-cover transition-transform duration-300 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-montserrat font-semibold">
                  Transform
                </p>
                <p className="text-xs font-montserrat opacity-90">
                  Your Journey
                </p>
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

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      try {
        (window as any).__overlayNavigate?.(href);
      } catch {
        window.location.href = href;
      }
    },
    []
  );

  return (
    <>
      <nav className="bg-backgroundColorWhite w-full sticky top-0 border-b z-40 border-lineColor">
        <div className="mx-auto container-padding ">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              <Image
                src="/logo/black.svg"
                alt="Echtventure Logo"
                width={200}
                height={200}
                unoptimized
              />
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
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className=" relative  pb-2 transition-colors duration-300 hover:text-gray-600 cursor-pointer text-[1.4rem] font-butler font-[600] tracking-tight text-black "
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
                className="inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 hover:bg-gray-100/80"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
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
