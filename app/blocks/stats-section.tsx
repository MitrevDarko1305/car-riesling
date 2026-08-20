"use client";

import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiDuolingo,
  SiStrava,
  SiDropbox,
  SiSpotify,
  SiAirbnb,
  SiNetflix,
  SiFigma,
  SiNotion,
  SiZoom,
  SiUber,
  SiPaypal,
  SiShopify,
  SiIntercom,
  SiLinear,
  SiVercel,
  SiStripe,
  SiFramer,
  SiGithub,
  SiDiscord,
  SiPinterest,
  SiTiktok,
  SiCoinbase,
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

  return (
    <section className="overflow-hidden bg-black py-28">
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
          <p className="text-lg text-light/50">{description}</p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : { x: [0, -SCROLL_DISTANCE_PER_LOGO * logos.length] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    x: {
                      duration: ANIMATION_DURATION,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }
            }
            className="flex min-w-full  shrink-0 items-center gap-10"
          >
            {[1, 2, 3].map((setNumber) =>
              logos.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={`${setNumber}-${name}`}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { delay: index * STAGGER_DELAY, duration: 0.4 }
                  }
                  className="flex shrink-0 items-center justify-center px-4"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon
                      aria-label={name}
                      className="h-11 w-11 text-light/50 transition-colors cursor-pointer hover:text-white"
                    />
                  </motion.div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloudAnimated;