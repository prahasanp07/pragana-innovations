"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Premium checkered marquee component.
 * Renders two rows of alternating black/white squares.
 * The rows move horizontally in opposite directions based on vertical scroll –
 * scrolling down shifts the top row left and the bottom row right, and vice versa.
 */
export default function CheckeredScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const topTrackRef = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !topTrackRef.current || !bottomTrackRef.current) return;

    const ctx = gsap.context(() => {
      // Use a consistent scroll travel distance
      const travelDistance = 3000;

      gsap.to(topTrackRef.current!, {
        x: -travelDistance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            // Map negative translation smoothly to [-48, 0]
            const wrapped = val % 48;
            return `${wrapped}px`;
          },
        },
      });

      // Bottom track moves in the opposite direction
      gsap.to(bottomTrackRef.current!, {
        x: travelDistance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            // Map positive translation smoothly to [0, 48]
            const wrapped = val % 48;
            return `${wrapped}px`;
          },
        },
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative overflow-hidden  py-2 md:py-4"
    >
      {/* Top Row */}
      <div ref={topTrackRef} className="flex">
        {Array.from({ length: 180 }, (_, i) => (
          <div
            key={i}
            className={`flex-none w-6 h-6 ${i % 2 === 0 ? "bg-black" : "bg-white"}`}
          />
        ))}
      </div>
      {/* Bottom Row */}
      <div ref={bottomTrackRef} className="flex">
        {Array.from({ length: 180 }, (_, i) => (
          <div
            key={i}
            className={`flex-none w-6 h-6 ${i % 2 === 0 ? "bg-white" : "bg-black"}`}
          />
        ))}
      </div>
    </section>
  );
}
