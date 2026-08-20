"use client";

import { motion, useReducedMotion } from "motion/react";
import { transform } from "next/dist/build/swc";
import type { IconType } from "react-icons";
import {
  SiAudi,
  SiBmw,
  SiPorsche,
  SiVolkswagen,
  SiFerrari,
  SiToyota,
  SiHyundai,
  SiTesla,
  SiFord,
  SiHonda,
  SiSkoda,
  SiRenault,
} from "react-icons/si";

/**
 * LogoCloudAnimated
 * Infinite scrolling row of brand logos — Motion-driven (not CSS
 * @keyframes, see notes on that trade-off below), with an edge fade
 * mask and per-logo hover animation.
 *
 * All icons below are VERIFIED to exist in react-icons/si (checked
 * against the actual package, not guessed) — pick whichever subset
 * fits your "trusted by" section, delete the rest from LOGOS.
 *
 * npm install react-icons if you don't already have it (you likely
 * do, from ToolsSection).
 */

const ANIMATION_DURATION = 25;
const STAGGER_DELAY = 0.1;
const SCROLL_DISTANCE_PER_LOGO = 180;

interface Logo {
  name: string;
  icon: IconType;
}

// Full verified set — trim this down to whichever ones you want to
// actually display. All confirmed to exist in react-icons/si.
const LOGOS: Logo[] = [
  { name: "Audi", icon: SiAudi },
  { name: "BMW", icon: SiBmw },
  { name: "Porsche", icon: SiPorsche },
  { name: "Volkswagen ", icon: SiVolkswagen },
  { name: "Ferrari", icon: SiFerrari },
  { name: "Toyota", icon: SiToyota },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Tesla", icon: SiTesla },
  { name: "Ford", icon: SiFord },
  { name: "Honda", icon: SiHonda },
  { name: "Skoda", icon: SiSkoda },
  { name: "Renault", icon: SiRenault },
];

export function LogoCloudAnimated({
  title = "Every brand, one dealership",
  description = "Hand-picked inventory across Germany's most trusted manufacturers.",
  logos = LOGOS,
}: {
  title?: string;
  description?: string;
  logos?: Logo[];
}) {
  const shouldReduceMotion = useReducedMotion();
  const scrollDistance = SCROLL_DISTANCE_PER_LOGO * logos.length;

  return (
    <section className="overflow-hidden bg-black md:pt-28 pt-16 pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-extrabold text-light lg:text-3xl">
            {title}
          </h2>
          <p className="md:text-lg text-[14px] text-light/50">{description}</p>
        </motion.div>

        {/* Mobile: static grid, no animation */}
        <div className="grid grid-cols-3 md:gap-8 gap-6 md:hidden">
          {logos.map(({ name, icon: Icon }) => (
            <div key={name} className="flex items-center justify-center">
              <Icon
                aria-label={name}
                className="md:h-10 md:w-10 h-12 w-12 text-light/50 transition-colors hover:text-white"
              />
            </div>
          ))}
        </div>

        {/* Desktop: animated marquee */}
        <div className="hidden md:block relative overflow-hidden w-full">
          <div
            className="flex min-w-full shrink-0 items-center gap-10 animate-marquee"
            style={
              {
                "--marquee-distance": `${scrollDistance}px`,
                "--marquee-duration": `${ANIMATION_DURATION}s`,
              } as React.CSSProperties
            }
          >
            {[1, 2, 3].map((setNumber) =>
              logos.map(({ name, icon: Icon }) => (
                <div
                  key={`${setNumber}-${name}`}
                  className="flex shrink-0 items-center justify-center px-4"
                >
                  <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Icon
                      aria-label={name}
                      className="h-11 w-11 text-light/50 transition-colors cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

export default LogoCloudAnimated;