

"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

/* Scroll-lock CSS (unchanged) */
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

/* Nav data (unchanged) */
const navLinks = [
  { title: "coaches", href: "/coaches" },
  { title: "enneagram", href: "/enneagram" },
  { title: "resources", href: "/resources" },
] as const;

/* Mobile Navigation (unchanged) */
const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const hasRunOnce = useRef(false);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  useGSAP(
    () => {
      const backdrop = container.current?.querySelector(".menu-backdrop");
      const navPiece = container.current?.querySelector(".nav-piece");
      const closeButton = container.current?.querySelector(".close-button");
      const navLinksArr = gsap.utils.toArray(".mobile-nav-link");

      if (!backdrop || !navPiece || !closeButton) return;

      openTl.current = gsap
        .timeline({ paused: true })
        .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.15 })
        .addLabel("enter")
        .fromTo(
          navPiece,
          { x: -100, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
          "enter"
        )
        .fromTo(
          closeButton,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.2, ease: "power2.out" },
          "enter"
        )
        .fromTo(
          navLinksArr,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" },
          "enter"
        );
    },
    { scope: container }
  );

  const runCloseAnimation = useCallback(() => {
    const root = container.current;
    if (!root) return Promise.resolve();
    const backdrop = root.querySelector(".menu-backdrop") as HTMLElement | null;
    const navPiece = root.querySelector(".nav-piece") as HTMLElement | null;
    if (!backdrop || !navPiece) return Promise.resolve();

    return new Promise<void>((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(navPiece, { clearProps: "all" });
          openTl.current?.progress(0).pause();
          resolve();
        },
      });
      tl.to(navPiece, {
        x: -150,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }).to(backdrop, { opacity: 0, duration: 0.15 }, "-=0.1");
    });
  }, []);

  useEffect(() => {
    if (!document.getElementById("scroll-lock-styles")) {
      const styleEl = document.createElement("style");
      styleEl.id = "scroll-lock-styles";
      styleEl.textContent = scrollLockStyles;
      document.head.appendChild(styleEl);
    }

    const html = document.documentElement;
    const body = document.body;
    const cont = container.current;

    if (isOpen) {
      hasRunOnce.current = true;
      const scrollY = window.scrollY;
      html.classList.add("no-scroll");
      body.classList.add("no-scroll");
      body.style.top = `-${scrollY}px`;
      if (cont) cont.style.pointerEvents = "auto";
      openTl.current?.restart();
    } else {
      if (hasRunOnce.current) {
        runCloseAnimation().finally(() => {
          const scrollY = body.style.top;
          html.classList.remove("no-scroll");
          body.classList.remove("no-scroll");
          body.style.top = "";
          if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
          if (cont) cont.style.pointerEvents = "none";
        });
      }
    }

    return () => {
      html.classList.remove("no-scroll");
      body.classList.remove("no-scroll");
      body.style.top = "";
    };
  }, [isOpen, runCloseAnimation]);

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      try {
        (window as any).__overlayNavigate?.(href);
      } catch {
        window.location.href = href;
      }
      setIsOpen(false);
    },
    [setIsOpen]
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 lg:hidden"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="menu-backdrop absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
      />
      <div className="absolute inset-0 flex justify-end">
        <div className="nav-piece w-[85vw] sm:w-[70vw] bg-white shadow-2xl p-8 flex flex-col">
          <button
            onClick={handleClose}
            className="close-button absolute top-6 right-6 p-2 text-gray-600 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex-1 flex items-center">
            <div className="space-y-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavigate(e, link.href)}
                  className="mobile-nav-link group relative block font-butler text-3xl font-semibold tracking-wider text-black transition-colors hover:text-gray-600"
                >
                  <span className="relative inline-block">
                    {link.title}
                    <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Main Navbar – hide only on mobile when at top
─────────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // true = at top → should hide on mobile

  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  const logoStRef = useRef<ScrollTrigger | null>(null);
  const logoTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Scroll logic → only affects mobile (< lg)
  useEffect(() => {
    const handleScroll = () => {
      // Skip logic entirely on desktop-sized screens
      if (window.innerWidth >= 1024) { // lg breakpoint in Tailwind
        setIsAtTop(false); // force visible (not at "top" state)
        return;
      }

      const scrollY = window.scrollY;
      const nowAtTop = scrollY < 20; // small threshold

      if (nowAtTop !== isAtTop) {
        setIsAtTop(nowAtTop);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll); // re-check on resize

    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isAtTop]);

  // Existing logo animation on homepage (unchanged)
  useGSAP(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    logoStRef.current?.kill();
    logoTlRef.current?.kill();

    if (pathname !== "/") {
      gsap.set(logoEl, { clearProps: "all" });
      return;
    }

    const heroEl = document.querySelector("#home-hero");
    if (!heroEl) {
      gsap.set(logoEl, { clearProps: "all" });
      return;
    }

    gsap.set(logoEl, { yPercent: -120, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(logoEl, {
      yPercent: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
    });
    logoTlRef.current = tl;

    const st = ScrollTrigger.create({
      trigger: heroEl,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.direction === 1) tl.play();
        else if (self.direction === -1) tl.reverse();
      },
      onLeave: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });
    logoStRef.current = st;

    return () => {
      logoStRef.current?.kill();
      logoTlRef.current?.kill();
    };
  }, [pathname]);

  const handleMouseEnter = useCallback((i: number) => {
    gsap.to(lineRefs.current[i], {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((i: number) => {
    gsap.to(lineRefs.current[i], {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.3,
      ease: "power2.in",
    });
  }, []);

  const toggleMobileMenu = useCallback(() => setIsOpen((p) => !p), []);

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
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40 
          bg-backgroundColorWhite border-b border-lineColor
          transition-transform duration-300 ease-in-out
          lg:translate-y-0                      /* always visible on desktop */
          ${isAtTop ? "-translate-y-full" : "translate-y-0"}  /* hide only on mobile when at top */
          ${isOpen ? "z-50" : "z-40"}
        `}
      >
        <div className="mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={(e) => handleLinkClick(e, "/")}
              ref={logoRef}
            >
              <Image
                src="/logo/black.svg"
                alt="echtventure Logo"
                width={160}
                height={160}
                unoptimized
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex md:items-center md:space-x-8">
              {navLinks.map((link, i) => (
                <div
                  key={link.title}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative pb-2 transition-colors duration-300 hover:text-gray-600 cursor-pointer text-[1.4rem] font-butler font-[600] tracking-tight text-black"
                  >
                    {link.title}
                  </Link>
                  <span
                    ref={(el) => {
                      if (el) lineRefs.current[i] = el;
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-black transform scale-x-0"
                  />
                </div>
              ))}
            </div>

            {/* Mobile toggle */}
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