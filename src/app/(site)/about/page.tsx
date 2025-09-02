"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- Reusable AnimatedTitle Component (for section headers) ---
const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return <div ref={ref}>{children}</div>;
};

// --- Hero Section ---
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-light-bg text-primary-text p-8 text-center">
    <div className="max-w-6xl">
      {/* Responsive font size using clamp for the large headline */}
      <h1 className="font-bowlby text-[clamp(2.5rem,12vw,160px)] leading-[0.9em] text-black uppercase">
        We Believe in the Progressive Realization of Purpose and Passion.
      </h1>
      <p className="mt-8 font-roboto text-[20px] leading-[1.5em] text-body-text max-w-4xl mx-auto">
        Echtventure provides expert coaching and corporate training to help
        working millennials and business leaders unlock their full potential.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-accent-red text-white font-roboto text-[18px] font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300">
          Explore Our Services
        </button>
        <a
          href="#"
          className="font-roboto text-body-text text-[18px] font-semibold hover:text-accent-red transition-colors duration-300"
        >
          Take the Enneagram Test
        </a>
      </div>
    </div>
  </section>
);

// --- Social Proof Section ---
const SocialProof = () => {
  const logos = [
    { name: "Client 1", src: "/cover1.jpeg" },
    { name: "Client 2", src: "/cover2.jpg" },
    { name: "Client 3", src: "/cover3.jpeg" },
  ];
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Animate the logo scroll
    gsap.to(scrollerRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="font-roboto text-base font-semibold text-body-text tracking-wider uppercase">
          Trusted By Leading Organizations
        </h3>
      </div>
      <div className="relative w-full">
        <div className="flex" ref={scrollerRef}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-16 mx-10 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Impact Section ---
const ImpactSection = () => {
  const sectionRef = useRef(null);
  const individualsRef = useRef(null);
  const corporateRef = useRef(null);

  useEffect(() => {
    const animateNumber = (
      ref: React.RefObject<HTMLSpanElement>,
      endValue: number
    ) => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: endValue,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.ceil(counter.value).toLocaleString();
          }
        },
      });
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        animateNumber(individualsRef, 100);
        animateNumber(corporateRef, 2500);
      },
      once: true,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light-bg text-center">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedTitle>
          <h2 className="font-crimson text-[37px] leading-[1em] font-normal text-title-text">
            Our Impact in Numbers
          </h2>
        </AnimatedTitle>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <p className="font-roboto font-bold text-7xl md:text-8xl text-accent-red">
              <span ref={individualsRef}>0</span>+
            </p>
            <p className="mt-4 font-roboto text-[20px] text-body-text leading-[1.5em] max-w-xs">
              Individuals in Life, Relationship & Leadership Coaching
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-roboto font-bold text-7xl md:text-8xl text-accent-red">
              <span ref={corporateRef}>0</span>+
            </p>
            <p className="mt-4 font-roboto text-[20px] text-body-text leading-[1.5em] max-w-xs">
              Individuals through Corporate & Conference Engagements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Introduction to Echtventure ---
const IntroductionSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <AnimatedTitle>
        <h2 className="font-crimson text-[37px] leading-[1em] font-normal text-title-text">
          What Does 'ECHT' Mean?
        </h2>
      </AnimatedTitle>
      <p className="mt-8 font-roboto text-[20px] text-body-text leading-[1.5em]">
        ECHT is an English word for authentic, real, and genuine. It sounds like
        'Add,' signifying our mission to add value to the businesses and lives
        we touch.
      </p>
    </div>
  </section>
);

// --- Services Overview ---
const ServicesOverview = () => (
  <section className="py-24 bg-light-bg">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <AnimatedTitle>
        <h2 className="font-crimson text-[37px] leading-[1em] font-normal text-title-text">
          How We Can Help You
        </h2>
      </AnimatedTitle>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm text-left">
          <h3 className="font-crimson text-[28px] font-normal text-title-text">
            Leadership Coaching
          </h3>
          <p className="mt-4 font-roboto text-[20px] leading-[1.5em] text-body-text">
            For individuals and management teams.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm text-left">
          <h3 className="font-crimson text-[28px] font-normal text-title-text">
            Corporate Training
          </h3>
          <p className="mt-4 font-roboto text-[20px] leading-[1.5em] text-body-text">
            Custom workshops and team building.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm text-left">
          <h3 className="font-crimson text-[28px] font-normal text-title-text">
            Keynote Speaking
          </h3>
          <p className="mt-4 font-roboto text-[20px] leading-[1.5em] text-body-text">
            Engaging talks on leadership and purposeful living.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <button className="bg-accent-red text-white font-roboto text-[18px] font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300">
          View All Services
        </button>
      </div>
    </div>
  </section>
);

// --- Meet the Founder Snippet ---
const FounderSnippet = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="w-full max-w-sm mx-auto">
        <Image
          src="/cover.jpg"
          alt="Keith Tay, Founder of Echtventure"
          width={400}
          height={500}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <AnimatedTitle>
          <h2 className="font-crimson text-[37px] leading-[1em] font-normal text-title-text">
            Meet Our Founder, Keith Tay
          </h2>
        </AnimatedTitle>
        <p className="mt-6 font-roboto text-[20px] text-body-text leading-[1.5em]">
          A Thought Leader, International Speaker, and certified professional
          coach, Keith has been passionately training the next generation of
          leaders since 2005.
        </p>
        <button className="mt-8 border border-accent-red text-accent-red font-roboto text-[18px] font-bold py-3 px-8 rounded-full hover:bg-accent-red hover:text-white transition-colors duration-300">
          Read Keith's Full Profile
        </button>
      </div>
    </div>
  </section>
);

// --- Final CTA Section ---
const FinalCTA = () => (
  <section className="py-24 bg-dark-bg text-center">
    <div className="max-w-3xl mx-auto px-6">
      <AnimatedTitle>
        <h2 className="font-crimson text-[37px] leading-[1em] font-normal text-light-bg">
          Ready to Unlock Your Potential?
        </h2>
      </AnimatedTitle>
      <p className="mt-6 font-roboto text-[20px] text-light-gray-2 leading-[1.5em]">
        Let's connect to discuss how we can help you or your organization
        achieve your goals.
      </p>
      <button className="mt-10 bg-accent-red text-white font-roboto text-[18px] font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300">
        Contact Us
      </button>
    </div>
  </section>
);

// --- Main Home Page Component ---
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <ImpactSection />
      <IntroductionSection />
      <ServicesOverview />
      <FounderSnippet />
      <FinalCTA />
    </main>
  );
};

export default HomePage;
