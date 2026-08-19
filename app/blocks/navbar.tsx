"use client";

import React from "react";
import Image from "next/image";

export default function ScrollNavbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/" },
    { name: "Our Store", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Founder", path: "/" },
    { name: "CTA", path: "/" },
    { name: "Testimonials", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  /* Nav Handling */
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Escape key closes mobile menu */
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
      <nav
        className={`fixed top-0 left-0 bg-background w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-light shadow-md text-light/50 backdrop-blur-lg py-3 md:py-1.5"
            : "py-4 md:py-4"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
          src="/car-riesling.png"
          alt="Car-Riesling"
          width={157}
          height={40}
          className={`h-14 w-auto ${isScrolled ? "opacity-80" : ""}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex mt-2 items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-background/60 text-[13px] font-normal" : "text-light"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-red-600"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
        <button
            className={`px-8 py-2.5 font-black cursor-pointer ml-4 transition-all hover:bg-black hover:text-light duration-500 ${
              isScrolled ? "text-light bg-black text-[13px]" : "bg-red-600 text-light"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg
              className={`h-6 w-6 cursor-pointer ${
                isScrolled ? "invert" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        </div>
      </nav>
  );
}
