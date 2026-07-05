"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const touchCheck = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    touchCheck();

    if (isTouchDevice) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const text = textRef.current;

    if (!ring || !dot || !text) return;

    // Set initial off-screen positions
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // GSAP quickSetters for extreme 60+ FPS performance
    const xRingSetter = gsap.quickSetter(ring, "x", "px");
    const yRingSetter = gsap.quickSetter(ring, "y", "px");
    const xDotSetter = gsap.quickSetter(dot, "x", "px");
    const yDotSetter = gsap.quickSetter(dot, "y", "px");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    // Move coordinates on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Dot moves instantly
      xDotSetter(e.clientX);
      yDotSetter(e.clientY);
    };

    // Animate loop for the ring lag (lerp)
    const tick = () => {
      // Lerp logic: current_pos += (target_pos - current_pos) * speed
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;
      
      xRingSetter(pos.x);
      yRingSetter(pos.y);
      
      requestAnimationFrame(tick);
    };
    const animId = requestAnimationFrame(tick);

    // Click bounce animations
    const handleMouseDown = () => {
      gsap.to(ring, {
        scale: 0.7,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      });
    };

    // Event delegation for various hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest elements with hover tags/roles
      const isHoverable = target.closest("a, button, [role='button'], input, select, textarea, .hoverable");
      const cursorProject = target.closest('[data-cursor="project"]');
      const cursorVideo = target.closest('[data-cursor="video"]');
      const cursorText = target.closest('[data-cursor="text"]');

      if (cursorProject) {
        // Project card hover state
        text.innerText = "VIEW";
        gsap.to(ring, {
          width: 120,
          height: 120,
          borderWidth: 1.5,
          borderColor: "rgba(181, 255, 77, 0.9)",
          backgroundColor: "rgba(181, 255, 77, 0.1)",
          borderRadius: "50%",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(text, { opacity: 1, scale: 1, duration: 0.2 });
      } else if (cursorVideo) {
        // Video hover state
        text.innerText = "PLAY";
        gsap.to(ring, {
          width: 100,
          height: 100,
          borderWidth: 1.5,
          borderColor: "rgba(181, 255, 77, 0.9)",
          backgroundColor: "rgba(181, 255, 77, 0.12)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(text, { opacity: 1, scale: 1, duration: 0.2 });
      } else if (cursorText) {
        // Text block hover state (shrinks to small dot / line style)
        gsap.to(ring, {
          width: 4,
          height: 24,
          borderRadius: 2,
          borderWidth: 0,
          backgroundColor: "#b5ff4d",
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.1 });
      } else if (isHoverable) {
        // Default link/button hover state
        gsap.to(ring, {
          width: 64,
          height: 64,
          borderWidth: 1.5,
          borderColor: "#b5ff4d",
          backgroundColor: "rgba(181, 255, 77, 0.08)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.15 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const currentTarget = e.relatedTarget as HTMLElement;
      
      // Check if we are still hovering hoverable zones
      const wasHoverable = target.closest("a, button, [role='button'], input, select, textarea, .hoverable");
      const isStillHoverable = currentTarget?.closest("a, button, [role='button'], input, select, textarea, .hoverable");
      
      const wasProject = target.closest('[data-cursor="project"]');
      const isStillProject = currentTarget?.closest('[data-cursor="project"]');

      const wasVideo = target.closest('[data-cursor="video"]');
      const isStillVideo = currentTarget?.closest('[data-cursor="video"]');

      const wasText = target.closest('[data-cursor="text"]');
      const isStillText = currentTarget?.closest('[data-cursor="text"]');

      // Revert if leaving specific zones and not entering another of the same
      if ((wasHoverable && !isStillHoverable) || 
          (wasProject && !isStillProject) || 
          (wasVideo && !isStillVideo) || 
          (wasText && !isStillText)) {
        
        gsap.to(ring, {
          width: 44,
          height: 44,
          borderWidth: 1.5,
          borderColor: "rgba(181, 255, 77, 0.5)",
          backgroundColor: "transparent",
          borderRadius: "50%",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
        gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.15 });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-accent/50 bg-transparent transition-opacity duration-300 ease-out will-change-transform flex items-center justify-center`}
        style={{
          width: "44px",
          height: "44px",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Hover Label Text */}
        <div
          ref={textRef}
          className="font-display text-[11px] font-bold tracking-wider text-accent opacity-0 scale-50 transition-all select-none"
        >
          VIEW
        </div>
      </div>

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-opacity duration-300 ease-out will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
