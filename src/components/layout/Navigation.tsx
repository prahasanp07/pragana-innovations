"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentMonthYear = format(new Date(), "MMMM yyyy").toUpperCase();

  // Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[500] py-6 px-6 md:px-12 bg-black select-none">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">

          {/* LEFT SIDE: Menu + Availability */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hoverable flex items-center gap-2 text-white hover:text-accent transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="font-display font-bold text-sm sm:text-base tracking-wider uppercase">
                Menu
              </span>
              {/* Specialized Crosshair Icon */}
              {/* <svg
                className="w-5 h-5 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M4 12H20M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg> */}
            </button>

            {/* Availability Pill */}
            <div className="hidden sm:flex items-center gap-2 border border-accent/60 bg-transparent px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] tracking-wider text-accent font-bold">
                AVAILABLE — {currentMonthYear}
              </span>
            </div>
          </div>

          {/* CENTER: Concentric Eye/Globe Logo */}
          <Link href="/" className="hoverable flex items-center justify-center">
            <img src="/PraGanaInnovations.png" alt="Logo" className="w-auto h-10 sm:h-12 lg:h-14 object-contain" />
          </Link>

          {/* RIGHT SIDE: Contact Trigger Group */}
          <Link href="#contact" className="hoverable flex items-center gap-2 group">
            {/* Outline Contact Pill */}
            <div className="border-2 border-accent hover:bg-accent/10 px-6 py-2 rounded-full transition-all duration-300">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white">
                CONTACT
              </span>
            </div>
            {/* Gold Arrow Circle */}
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5 text-black stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </header>

      {/* Menu Overlay System */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-black z-[490] flex flex-col justify-between p-8 pt-32 pb-16"
          >
            {/* Glowing Accent Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

            {/* Nav links */}
            <div className="flex flex-col gap-6 max-w-[500px] mx-auto w-full mt-4">
              {[
                { label: "Home", href: "#hero", num: "01" },
                { label: "About", href: "#about", num: "02" },
                { label: "Services", href: "#services", num: "03" },
                { label: "Process", href: "#process", num: "04" },
                { label: "Works", href: "#works", num: "05" },
                { label: "Contact", href: "#contact", num: "06" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-2 border-b border-border hover:border-accent transition-colors duration-300"
                  >
                    <span className="font-mono text-micro text-accent font-bold">
                      {link.num}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-wide text-white group-hover:text-accent transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom details */}
            <div className="max-w-[500px] mx-auto w-full border-t border-border pt-8 flex justify-between items-center">
              <span className="font-mono text-[10px] tracking-wider text-accent font-bold">
                AVAILABLE FOR HIRE — {currentMonthYear}
              </span>
              <div className="flex gap-4 font-mono text-[11px] text-sub">
                <a href="#" className="hover:text-accent">BNC</a>
                <a href="#" className="hover:text-accent">LKD</a>
                <a href="#" className="hover:text-accent">IG</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
