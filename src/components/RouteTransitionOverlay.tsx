"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
declare global {
  interface Window {
    __overlayNavigate?: (to: string) => Promise<void>;
  }
}

export default function RouteTransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const isAnimatingRef = useRef(false);
  const hasInitialLoadRun = useRef(false);
  const isReloading = useRef(false);

  // Detect page reload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      isReloading.current = true;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const completeTransition = useCallback(async () => {
    // Animate overlay out
    const el = overlayRef.current;
    if (el) {
      await new Promise<void>((resolve) => {
        gsap.to(el, {
          yPercent: -100,
          duration: 0.4, // Faster duration
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(el, { yPercent: 100, pointerEvents: "none" });
            resolve();
          },
        });
      });
    }

    setIsTransitioning(false);
    setNextUrl(null);
    isAnimatingRef.current = false;
  }, []);

  const startTransition = useCallback(
    async (url: string) => {
      if (isAnimatingRef.current || isTransitioning || isReloading.current)
        return;

      // Don't transition if user is already on "/" and trying to navigate to "/"
      const targetUrl = new URL(url, window.location.origin);
      if (pathname === "/" && targetUrl.pathname === "/") {
        return;
      }

      setIsTransitioning(true);
      setNextUrl(url);
      isAnimatingRef.current = true;

      // Animate overlay in
      const el = overlayRef.current;
      if (el) {
        gsap.set(el, { pointerEvents: "auto" });
        await new Promise<void>((resolve) => {
          gsap.fromTo(
            el,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 0.4,
              ease: "power2.inOut",
              onComplete: resolve,
            }
          );
        });
      }

      // Now navigate
      router.push(url);
    },
    [router, isTransitioning, pathname]
  );

  // Skip initial page load animation since preloader handles it
  useEffect(() => {
    const el = overlayRef.current;
    if (!el || hasInitialLoadRun.current) {
      return;
    }

    // Set initial state to hidden and mark as complete
    gsap.set(el, { yPercent: 100, pointerEvents: "none" });
    hasInitialLoadRun.current = true;
  }, []);

  // Complete transition when pathname changes
  useEffect(() => {
    if (isTransitioning && nextUrl) {
      const targetPath = nextUrl.split("?")[0].split("#")[0];
      const currentBasePath = pathname;

      if (currentBasePath === targetPath) {
        completeTransition();
      }
    }
  }, [pathname, isTransitioning, nextUrl, completeTransition]);

  // Helper: determine if anchor is internal and navigable
  const getInternalHref = useCallback((anchor: HTMLAnchorElement) => {
    const hrefAttr = anchor.getAttribute("href");
    if (!hrefAttr) return null;
    if (hrefAttr.startsWith("#")) return null; // in-page
    if (anchor.target && anchor.target !== "" && anchor.target !== "_self")
      return null;
    if (anchor.hasAttribute("download")) return null;

    let url: URL;
    try {
      url = new URL(anchor.href);
    } catch {
      return null;
    }
    const current = new URL(window.location.href);
    if (url.origin !== current.origin) return null; // external

    const to = url.pathname + url.search + url.hash;
    // ignore pure hash changes
    if (
      url.pathname === current.pathname &&
      url.search === current.search &&
      url.hash &&
      url.hash !== current.hash
    ) {
      return null;
    }
    // ignore same URL
    if (to === current.pathname + current.search + current.hash) return null;

    // Don't transition if user is already on "/" and trying to navigate to "/"
    if (pathname === "/" && url.pathname === "/") return null;

    return to;
  }, [pathname]);

  const closeMobileMenuIfOpen = () => {
    const closeBtn = document.querySelector(
      ".close-button"
    ) as HTMLButtonElement | null;
    if (closeBtn && getComputedStyle(closeBtn).display !== "none") {
      try {
        closeBtn.click();
      } catch {}
    }
  };

  // Provide an explicit navigation API for reliability
  useEffect(() => {
    window.__overlayNavigate = async (to: string) => {
      // Don't start a new navigation if we're already animating or reloading
      if (isAnimatingRef.current || isReloading.current) return;

      // Don't transition if user is already on "/" and trying to navigate to "/"
      const targetUrl = new URL(to, window.location.origin);
      if (pathname === "/" && targetUrl.pathname === "/") {
        return;
      }

      try {
        router.prefetch?.(to);
      } catch {}
      closeMobileMenuIfOpen();
      await startTransition(to);
    };
    return () => {
      delete window.__overlayNavigate;
    };
  }, [router, startTransition, pathname]);

  // Intercept navigation
  useEffect(() => {
    const handler = async (e: Event) => {
      const anyEvent = e as any;
      const pointerButton =
        typeof anyEvent.button === "number" ? anyEvent.button : 0;
      if (pointerButton !== 0) return; // left button only
      if (
        anyEvent.metaKey ||
        anyEvent.ctrlKey ||
        anyEvent.shiftKey ||
        anyEvent.altKey
      )
        return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const to = getInternalHref(anchor);
      if (!to) return;

      e.preventDefault();
      e.stopPropagation();
      (e as any).stopImmediatePropagation?.();

      await window.__overlayNavigate?.(to);
    };

    const opts = { capture: true, passive: false } as AddEventListenerOptions;
    document.addEventListener("pointerdown", handler, opts);
    document.addEventListener("touchstart", handler as any, opts);
    document.addEventListener("mousedown", handler as any, opts);
    document.addEventListener("click", handler as any, opts);

    return () => {
      document.removeEventListener("pointerdown", handler, opts);
      document.removeEventListener("touchstart", handler as any, opts);
      document.removeEventListener("mousedown", handler as any, opts);
      document.removeEventListener("click", handler as any, opts);
    };
  }, [getInternalHref]);

  // Keyboard accessibility
  useEffect(() => {
    const onKeyDown = async (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const to = getInternalHref(anchor);
      if (!to) return;

      e.preventDefault();
      e.stopPropagation();
      (e as any).stopImmediatePropagation?.();

      await window.__overlayNavigate?.(to);
    };

    document.addEventListener("keydown", onKeyDown, { capture: true });
    return () =>
      document.removeEventListener("keydown", onKeyDown, {
        capture: true,
      } as any);
  }, [getInternalHref]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[9999] bg-black pointer-events-none will-change-transform"
    />
  );
}
