import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string | React.ReactNode;
  subtitle?: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, subtitle }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline | null>(null);
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  // Detect mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    // Disable hover on mobile
    if (isMobile) return;

    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    // Kill any existing timeline to prevent conflicts
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    timelineRef.current = gsap.timeline({ defaults: animationDefaults });
    timelineRef.current
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    // Disable hover on mobile
    if (isMobile) return;

    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    // Kill any existing timeline to prevent conflicts
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    timelineRef.current = gsap.timeline({ defaults: animationDefaults });
    timelineRef.current
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(
        marqueeInnerRef.current,
        {
          y: edge === "top" ? "101%" : "-101%",
        },
        "<" // Start at the same time as the previous animation
      );
  };

  const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      // Prevent navigation on mobile
      ev.preventDefault();

      if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
        return;

      // Kill any existing timeline to prevent conflicts
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      if (!isRevealed) {
        // Show the marquee
        timelineRef.current = gsap.timeline({ defaults: animationDefaults });
        timelineRef.current
          .set(marqueeRef.current, { y: "101%" })
          .set(marqueeInnerRef.current, { y: "-101%" })
          .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
        setIsRevealed(true);
      } else {
        // Hide the marquee
        timelineRef.current = gsap.timeline({ defaults: animationDefaults });
        timelineRef.current
          .to(marqueeRef.current, { y: "101%" })
          .to(marqueeInnerRef.current, { y: "-101%" }, "<");
        setIsRevealed(false);
      }
    }
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    const content = (
      <>
        <span className="text-black uppercase font-normal text-[4vh] leading-[1.2] px-[2vw] whitespace-nowrap">
          {text}
        </span>
        {subtitle && (
          <span className="text-black text-[2vh] leading-[1.4] px-[2vw] normal-case whitespace-nowrap">
            • {subtitle}
          </span>
        )}
        <span className="text-black px-[2vw]">•</span>
      </>
    );

    // Duplicate content twice for seamless infinite loop
    return (
      <>
        {Array.from({ length: 20 }).map((_, idx) => (
          <React.Fragment key={`marquee-${idx}`}>{content}</React.Fragment>
        ))}
      </>
    );
  }, [text, subtitle]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#333] bg-black min-h-[150px] flex items-center justify-center"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full w-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] transition-colors duration-300 hover:text-white focus:text-white focus-visible:text-white"
        href={isMobile ? undefined : link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%] flex items-center justify-center will-change-transform"
        ref={marqueeRef}
      >
        <div
          className="h-full flex items-center justify-center w-full will-change-transform"
          ref={marqueeInnerRef}
        >
          <div className="flex items-center justify-center whitespace-nowrap animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
