"use client";

import { motion, useReducedMotion } from "motion/react";
import MotionButton from "./animated-button";

/**
 * FooterComplex
 * Newsletter signup + social icons on the left, 4 link columns on
 * the right, each column fading in with its own incremental delay
 * as the footer scrolls into view. Nothing genuinely NEW here
 * technique-wise vs. what you already know (whileInView + delay,
 * same as ScrollReveal) — the value in this one is the STRUCTURE:
 * a real, complete, production-shaped footer layout with proper
 * social icon SVGs already inlined (Twitter/X, LinkedIn, GitHub —
 * real paths, not placeholders).
 *
 * Removed: SmoothButton (their component) → your own MotionButton,
 * since the newsletter "Subscribe" button submits an action rather
 * than navigating anywhere — MotionButton (the plain <button>
 * variant), not MotionCTAButton (the <Link> variant), is the
 * correct one here.
 */

const ANIMATION_DURATION = 0.6;
const DELAY_INCREMENT = 0.1;
const HOVER_SCALE = 1.1;
const TAP_SCALE = 0.9;

interface LinkItem {
  name: string;
  url: string;
}

interface FooterComplexProps {
  companyName?: string;
  description?: string;
  copyright?: string;
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  links?: {
    product?: LinkItem[];
    company?: LinkItem[];
    support?: LinkItem[];
    legal?: LinkItem[];
  };
  social?: {
    twitter?: string;
    youtube?: string;
    instagram?: string;
  };
}

export function FooterComplex({
  companyName = "Car-Riesling",
  description = "Your trusted vehicle partner in Stuttgart",
  newsletter = {
    title: "Stay updated",
    description: "New arrivals, exclusive deals, and updates from Car-Riesling - straight to your inbox",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  links = {
    product: [
      { name: "Home", url: "#home" },
      { name: "Services", url: "#services" },
      { name: "Gallery", url: "#gallery" },
      { name: "Founder", url: "#founder" },
    ],
    company: [
      { name: "About", url: "#about" },
      { name: "Blog", url: "/blog" },
      { name: "Contact", url: "#book-a-call" },
    ],
    support: [
      { name: "Get in touch", url: "#book-a-call" },
      { name: "Book a call", url: "#book-a-call" },
    ],
    legal: [
      { name: "Privacy Policy", url: "#privacy" },
      { name: "Terms", url: "#terms" },
    ],
  },
  social = {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
  copyright = `© ${new Date().getFullYear()} Mitrev Design. All rights reserved.`,
}: FooterComplexProps) {
  const shouldReduceMotion = useReducedMotion();
  const socialHover = shouldReduceMotion ? {} : { scale: HOVER_SCALE };
  const socialTap = shouldReduceMotion ? {} : { scale: TAP_SCALE };

  const columnDelays = {
    product: DELAY_INCREMENT * 2,
    company: DELAY_INCREMENT * 3,
    support: DELAY_INCREMENT * 4,
    legal: DELAY_INCREMENT * 5,
  };

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-full px-6 pt-16 pb-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: ANIMATION_DURATION }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          {/* Company info + newsletter + social */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: DELAY_INCREMENT, duration: ANIMATION_DURATION }
              }
            >
              <h3 className="mb-4 text-2xl font-bold text-white">{companyName}</h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-light/50">
                {description}
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {newsletter.title}
                </h4>
                <p className="mb-4 text-sm text-light/50">
                  {newsletter.description}
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={newsletter.placeholder}
                    className="flex-1 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/20"
                  />
                  <MotionButton>{newsletter.buttonText}</MotionButton>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                {social.twitter && (
                  <motion.a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    whileHover={socialHover}
                    whileTap={socialTap}
                    className="text-white/60 transition-colors hover:text-fuchsia-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </motion.a>
                )}
                {social.youtube && (
                  <motion.a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                    whileHover={socialHover}
                    whileTap={socialTap}
                    className="text-white/60 transition-colors hover:text-accent"
                  >
                     <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                     </svg>
                    <span className="sr-only">Youtube</span>
                  </motion.a>
                )}
                {social.instagram && (
                  <motion.a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    whileHover={socialHover}
                    whileTap={socialTap}
                    className="text-white/60 transition-colors hover:text-accent"
                  >
                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-4">
            {(["product", "company", "support", "legal"] as const).map((key) => {
              const columnLinks = links[key];
              if (!columnLinks) return null;

              return (
                <motion.div
                  key={key}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { delay: columnDelays[key], duration: ANIMATION_DURATION }
                  }
                >
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                    {key}
                  </h4>
                  <ul className="space-y-3">
                    {columnLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          className="text-sm text-light/50 transition-colors hover:text-accent"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: DELAY_INCREMENT * 6, duration: ANIMATION_DURATION }}
          className="mt-12 border-t border-white/10 pt-8 text-center"
        >
            <a href="https://mitrevdarko.dev" target="_blank" className="mt-0 mb-0">
          <p className="text-sm text-white/60">{copyright}</p>
            </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterComplex;