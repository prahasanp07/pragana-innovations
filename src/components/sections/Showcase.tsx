"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax zoom effect on scroll
    if (!containerRef.current || !mediaRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        { scale: 1.05, y: -20 },
        {
          scale: 1,
          y: 20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white px-6 md:px-12 py-8 md:py-24 overflow-hidden rounded-[30px] md:rounded-[40px]"
      id="showcase"
    >
      {/* Pink Video Showreel Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[30px] md:rounded-[40px] bg-[#ff007f] overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Animated Scanlines/Visualizer Overlay to mimic a video */}
        <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none z-10" />

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-black/20 blur-[80px] pointer-events-none" />

        {/* The Looping Video Asset */}
        <video
          ref={mediaRef}
          src="https://www.pexels.com/download/video/30064793/"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        />

        {/* Video HUD Play Overlay */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="font-mono text-[12px] md:text-[14px] tracking-widest text-white uppercase font-bold">
            Future is — Here
          </span>
        </div>
      </div>
    </section>
  );
}
