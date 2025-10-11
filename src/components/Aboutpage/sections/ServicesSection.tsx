"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section elements
    gsap.from(section.querySelectorAll(".service-card"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const services = [
    {
      title: "1:1 Coaching",
      description:
        "Personalized coaching sessions tailored to your unique goals and challenges.",
      icon: "👤",
    },
    {
      title: "Corporate Training",
      description:
        "Team development programs that foster authentic leadership and collaboration.",
      icon: "🏢",
    },
    {
      title: "Enneagram Assessment",
      description:
        "Deep personality insights using the Enneagram system for personal growth.",
      icon: "⭐",
    },
    {
      title: "Leadership Development",
      description:
        "Comprehensive programs to develop authentic and effective leadership skills.",
      icon: "🎯",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-butler text-[clamp(2rem,6vw,64px)] leading-[0.9em] text-black uppercase mb-6">
            Our Services
          </h2>
          <p className="font-butler text-[20px] leading-[1.6em] text-gray-600 max-w-3xl mx-auto">
            We offer a range of services designed to unlock your potential and
            drive authentic transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-butler text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="font-butler text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-butler text-gray-600 mb-6">
            Ready to begin your transformation journey?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#6a3a3a] text-white font-butler text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#7a4a4a] transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
