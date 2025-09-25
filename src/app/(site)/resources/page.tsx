"use client";

import React from "react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-five-lines">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-black p-8 text-center container-padding">
        <div className="max-w-6xl">
          <h1 className="font-butler text-[clamp(3rem,10vw,120px)] leading-[0.9em] text-black uppercase">
            Resources
          </h1>
          <p className="mt-8 font-montserrat text-[24px] leading-[1.5em] text-gray-700 max-w-4xl mx-auto">
            Explore our collection of insights, stories, and expertise to
            support your growth journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-8">
                <h3 className="font-butler text-2xl font-bold text-black mb-4">
                  Blog
                </h3>
                <p className="font-montserrat text-gray-600 mb-6">
                  Discover insights, tips, and strategies for personal and
                  professional development.
                </p>
                <Link
                  href="/resources/blog"
                  className="inline-block bg-[#6a3a3a] text-white font-butler text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#7a4a4a] transition-colors duration-300"
                >
                  Read Blog
                </Link>
              </div>
            </div>

            {/* Podcast Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-8">
                <h3 className="font-butler text-2xl font-bold text-black mb-4">
                  Podcast
                </h3>
                <p className="font-montserrat text-gray-600 mb-6">
                  Listen to conversations with experts and thought leaders in
                  personal development.
                </p>
                <Link
                  href="/resources/podcast"
                  className="inline-block bg-[#6a3a3a] text-white font-butler text-[16px] font-bold py-3 px-8 rounded-full hover:bg-[#7a4a4a] transition-colors duration-300"
                >
                  Listen Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
