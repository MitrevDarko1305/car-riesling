"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Hero-Images/Hero-1.jpg",
  "/Hero-Images/Hero-2.jpg",
  "/Hero-Images/Hero-3.jpg",
  "/Hero-Images/Hero-4.jpg",
];

export default function HeroSplit() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row min-h-[calc(85vh)] pt-24 w-full bg-black overflow-hidden">
      {/* Left: Text */}
      <div className="flex flex-col justify-center px-3 md:px-16 lg:px-24  md:w-1/2 z-10 min-w-0">
        <span className="text-accent font-medium tracking-wide  text-sm mb-2">
          Premium Cars, Stuttgart
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light leading-[1] md:leading-tight md:mb-6 mb-3">
          Fulfill your dreams,<br />drive in style.
        </h1>
        <p className="text-light/50 md:text-lg text-[14px] mb-8 max-w-md">
          Hand-picked luxury and performance vehicles, backed by a team that
          treats every sale like it&apos;s their own car.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-red-700  hover:bg-black cursor-pointer text-[13px] md:text-lg font-black text-light px-8 md:py-3 py-2 r transition-colors">
            Browse Inventory
          </button>
          <button className="border border-white/15 cursor-pointer text-[13px] md:text-lg hover:border-white text-light/50 hover:text-light px-8 py-2 md:py-3 transition-colors">
            See Gallery
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-red-600" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Ken Burns Slideshow */}
      <div className="relative md:w-1/2 min-h-[50vh] md:min-h-full overflow-hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                i === activeIndex ? "animate-kenburns" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Luxury car ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Gradient blend into left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-transparent to-transparent z-20 md:block hidden" />
      </div>
    </section>
  );
}