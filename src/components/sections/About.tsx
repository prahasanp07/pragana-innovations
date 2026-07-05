"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const stripeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text on scroll
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Slanted striped bar slide-in
      if (stripeRef.current) {
        gsap.fromTo(
          stripeRef.current,
          { scaleX: 0, transformOrigin: "right" },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: stripeRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white px-6 md:px-12 py-12 md:py-24 overflow-hidden select-none rounded-[30px] md:rounded-[40px]"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 border border-black rounded-[30px] md:rounded-[40px] p-8 sm:p-12 md:p-16">
        {/* Top Grid: Headline + "ABOUT ME" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Title Description */}
          <div className="lg:col-span-9">
            <h2
              ref={textRef}
              className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.08] text-black tracking-tight"
            >
              Hello! We're PraGana Innovations,<br />
              a digital agency<br />
              working together to create <br />
              awesome digital experiences.
            </h2>
          </div>

          {/* Label Group */}
          <div className="lg:col-span-3 lg:flex lg:justify-end">
            <div className="flex items-center gap-3 bg-transparent py-2">
              <span className="h-3 w-3 rounded-full bg-amber shadow-[0_0_10px_rgba(255,179,64,0.6)]" />
              <span className="font-display font-extrabold text-[13px] md:text-sm tracking-wider text-black uppercase">
                ABOUT US
              </span>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-black/30 mt-4" />

        {/* Bottom Grid: Description + Stripe Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-4">
          {/* Detailed Paragraph */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="font-display font-medium text-lg sm:text-xl md:text-2xl text-black/60 leading-relaxed max-w-[760px]">
              With a strong background in design and development, we collaborate remotely with
              cross-functional teams to craft compelling experiences that drive meaningful
              engagement. Want to know more about us? click the link below
            </p>

            {/* View More Link */}
            <Link
              href="#contact"
              className="hoverable w-fit font-mono text-[11px] md:text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors duration-300 uppercase flex items-center gap-2"
            >
              [ CONTACT US ]
            </Link>
          </div>

          {/* Slanted Striped Bar + Dot */}
          <div className="lg:col-span-4 flex flex-col items-end gap-12">
            {/* The striped diagonal box element */}
            <div
              ref={stripeRef}
              className="striped-bar w-full max-w-[280px] h-[36px] border border-black/30 rounded-sm shadow-sm"
            />
            {/* Small yellow dot at the bottom right */}
            <div className="mr-8">
              <span className="block h-3.5 w-3.5 rounded-full bg-amber shadow-[0_0_12px_rgba(255,179,64,0.7)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
