"use client";

import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import WireframeGlobe from "@/components/ui/WireframeGlobe";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);

  const [timeStr, setTimeStr] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Update live clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format: 19:33:51 BST (or local timezone)
      const timeFormatted = format(now, "HH:mm:ss");

      // Determine timezone abbreviation (e.g. BST, IST, EST)
      const timeZoneName = now
        .toLocaleDateString("en-US", { day: "numeric", timeZoneName: "short" })
        .split(" ")
        .pop() || "BST";

      setTimeStr(`${timeFormatted} ${timeZoneName}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move parallax tracker for 3D sphere tilting
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll triggered frame drop animation
  useEffect(() => {
    if (!containerRef.current || !heroWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Pivot the entire hero elements wrapper from top-left (right side falls off)
      tl.to(heroWrapperRef.current, {
        transformOrigin: "left top",
        rotate: 16,
        y: "8vh",
        ease: "power1.inOut",
        duration: 0.45,
      });

      // 2. Drop the entire wrapper out of viewport while concurrently sliding up the white card showcase
      tl.to(heroWrapperRef.current, {
        y: "115vh",
        opacity: 0,
        ease: "power2.in",
        duration: 0.55,
      }, "+=0.05");

      // 3. Concurrently slide up the main white showcase card from further down
      tl.fromTo(".main-white-card",
        { y: "130vh" },
        { y: "0vh", ease: "power2.out", duration: 0.6 },
        "<" // start at same time as heroWrapper drops
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate top ruler scale tick marks and labels (-07 to 03)
  const renderRuler = () => {
    const labels = ["Kanyakumari", "Madurai", "Bengaluru", "Hyderabad", "Nagpur", "Jhansi", "Gwalior", "Agra", "Delhi", "Jammu", "Srinagar"];
    return (
      <div className="absolute top-0 left-0 w-full pt-1.5 px-10 flex flex-col items-center pointer-events-none select-none z-20">
        {/* Scale Ticks */}
        <div className="w-full flex justify-between items-end h-3 relative">
          {Array.from({ length: 141 }).map((_, i) => {
            const isLabelTick = i % 14 === 0;
            return (
              <div
                key={i}
                className={`w-[1px] rounded-full transition-all ${isLabelTick
                  ? "h-2.5 bg-accent/80"
                  : i % 7 === 0
                    ? "h-1.5 bg-accent/40"
                    : "h-1 bg-accent/15"
                  }`}
              />
            );
          })}
        </div>
        {/* Numbers Label Row */}
        <div className="w-full flex justify-between mt-1 text-[8px] md:text-[10px] font-mono text-accent/90 tracking-wider">
          {labels.map((lbl, idx) => (
            <span key={idx} className="w-8 text-center">
              {lbl}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden px-6 pt-32 pb-6"
    >
      {/* Wrapper containing all concentric rings, gold borders, text, and globe to fall off together */}
      <div
        ref={heroWrapperRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-center items-center pointer-events-none z-10"
      >
        {/* 1. Concentric orbital lines behind the typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Ring 1 */}
          <div className="absolute w-[280px] h-[280px] rounded-full border-[0.5px] border-white/5" />
          {/* Ring 2 */}
          <div className="absolute w-[460px] h-[460px] rounded-full border-[0.5px] border-white/5" />

          {/* Ring 3 with slow rotating Golden Dot */}
          <div className="absolute w-[640px] h-[640px] rounded-full border-[0.5px] border-white/5 animate-[spin_50s_linear_infinite]">
            {/* Floating Gold Dot */}
            <div className="absolute top-1/2 left-0 w-3.5 h-3.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,204,0,0.8)]" />
          </div>

          {/* Ring 4 */}
          <div className="absolute w-[820px] h-[820px] rounded-full border-[0.5px] border-white/5" />
          {/* Ring 5 */}
          <div className="absolute w-[1000px] h-[1000px] rounded-full border-[0.5px] border-white/5" />
        </div>

        {/* 2. Main Frame layout surrounding the Hero section with gold borders */}
        <div ref={frameRef} className="gold-frame absolute inset-x-6 md:inset-x-12 top-[108px] bottom-0 pointer-events-none z-10">

          {/* Top Ruler ticks scale */}
          {renderRuler()}

          {/* Halftone / Dot Grid patterns inside bottom-left/right of the frame */}
          <div className="dot-grid-pattern absolute bottom-0 left-0 w-48 h-48 pointer-events-none opacity-40 z-10" />
          <div className="dot-grid-pattern absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-40 z-10" />

          {/* Technical crosshair corners inside the frame */}
          <div className="absolute top-12 left-10 w-4 h-4 border-l border-t border-accent/25" />
          <div className="absolute top-12 right-10 w-4 h-4 border-r border-t border-accent/25" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-l border-b border-accent/25" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-accent/25" />

          {/* Bottom Left: Copyright Badge */}
          <div className="absolute bottom-6 left-10 text-[10px] md:text-xs font-mono text-white/60 tracking-wider">
            © COPYRIGHT 2026
          </div>

          {/* Bottom Right: Live ticking capsule clock */}
          <div className="absolute bottom-6 right-10 pointer-events-auto z-20">
            <div className="flex items-center gap-2 bg-black border border-accent/60 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] md:text-xs tracking-wider text-accent font-bold">
                {timeStr}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Center Typography Section */}
        <div ref={contentRef} className="relative flex flex-col items-center text-center z-20 max-w-[1200px] w-full px-4 -mt-8 pointer-events-none">

          {/* Top tagline in thin uppercase sans */}
          <p className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] text-white/80 max-w-[550px] leading-relaxed uppercase mb-12">
            Scaling Brands with Enterprise-Grade Digital Experiences <br />
            Turning Your Traffic Into Revenue!
          </p>

          {/* Brand Title */}
          <h2 className="font-display font-extrabold text-sm sm:text-md md:text-lg tracking-[0.35em] text-white uppercase mb-2">
            Web | Mobile | AI | Data Solutions
          </h2>

          {/* Huge Condensed Yellow/Gold Title */}
          <h1 className="font-giant-condensed text-accent select-none mb-4 text-glow">
            PRAGANA
          </h1>
          <h1 className="font-giant-condensed text-accent select-none mb-4 text-glow">
            INNOVATIONS
          </h1>
        </div>

        {/* 4. Wireframe Globe element at the bottom with mouse parallax tilting */}
        <div
          ref={globeRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-25"
        >
          {/* Nested container for React mouse parallax to prevent GSAP conflicts */}
          <div
            style={{
              transform: `translate3d(0, 0, 0) translate(${mouse.x * 40}px, ${mouse.y * 40}px) rotateX(${-mouse.y * 15}deg) rotateY(${mouse.x * 15}deg)`,
              transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.3, 1)",
              transformStyle: "preserve-3d",
            }}
            className="w-full h-full"
          >
            <WireframeGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
