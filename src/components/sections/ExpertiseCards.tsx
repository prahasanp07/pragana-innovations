"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ExpertiseCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return;

    // We check if it's mobile to adjust the fan-out spread (cards stack vertically on small screens)
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initial state: hidden way down below the viewport
      gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
        y: "150vh",
        rotation: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%", // How long the pin lasts
          pin: true,
          scrub: 1, // Smooth scrub
        }
      });

      if (isMobile) {
        // Mobile animation: just stack them with slight offsets
        tl.to(card1Ref.current, { y: -80, rotation: -2, duration: 1, ease: "power2.out" }, 0)
          .to(card2Ref.current, { y: 0, rotation: 0, duration: 1, ease: "power2.out" }, 0.2)
          .to(card3Ref.current, { y: 80, rotation: 2, duration: 1, ease: "power2.out" }, 0.4);
      } else {
        // Desktop animation: fan out
        tl.to(card1Ref.current, { y: 60, x: -100, rotation: -10, duration: 1, ease: "power2.out" }, 0)
          .to(card2Ref.current, { y: -30, x: 0, rotation: -2, duration: 1, ease: "power2.out" }, 0.2)
          .to(card3Ref.current, { y: 40, x: 100, rotation: 8, duration: 1, ease: "power2.out" }, 0.4);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const ViewButton = () => (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-between bg-black border border-white/20 rounded-full pl-5 pr-1.5 py-1.5 gap-4 z-20 shadow-xl group cursor-none">
      <span className="text-white text-xs font-semibold tracking-wide">VIEW</span>
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black transition-transform group-hover:scale-110">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-accent flex flex-col items-center justify-center overflow-hidden z-20"
    >
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 h-full">
        
        {/* CARD 1 */}
        <div 
          ref={card1Ref} 
          className="relative w-[300px] md:w-[340px] aspect-[1/1.6] bg-[#0d0d0d] rounded-[40px] border border-white/10 flex flex-col p-8 md:p-10 shadow-2xl z-10 md:-mr-10"
        >
          <div className="mx-auto border border-white/30 rounded-full px-4 py-1 text-[10px] text-white/80 uppercase tracking-widest mb-8">
            Mobile / Web Apps
          </div>
          <h3 className="text-2xl font-bold uppercase text-center mb-4 text-white">Product Design</h3>
          <p className="text-xs text-center text-white/60 leading-relaxed max-w-[90%] mx-auto mb-auto">
            Focused on creating practical, user-friendly designs that prioritize functionality and deliver smooth, engaging experiences.
          </p>
          {/* Card 1 Decorative Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden rounded-b-[40px]">
            {/* White pill with drop */}
            <div className="absolute -left-4 top-8 w-24 h-24 bg-white rounded-3xl rotate-12 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="black"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </div>
            {/* Hash symbol */}
            <div className="absolute left-6 bottom-4 text-5xl text-white/20 font-bold -rotate-12">#</div>
            {/* Slanted yellow stripe */}
            <div className="absolute bottom-10 -right-10 w-[120%] h-8 bg-accent rotate-[-15deg] flex items-center text-black font-bold text-[10px] whitespace-nowrap overflow-hidden">
              <span className="marquee-text-simple">PRODUCT DESIGN + WEB DESIGN + PRODUCT DESIGN</span>
            </div>
          </div>
          <ViewButton />
        </div>

        {/* CARD 2 */}
        <div 
          ref={card2Ref} 
          className="relative w-[300px] md:w-[340px] aspect-[1/1.6] bg-[#0d0d0d] rounded-[40px] border border-white/10 flex flex-col p-8 md:p-10 shadow-2xl z-20"
        >
          <div className="mx-auto border border-white/30 rounded-full px-4 py-1 text-[10px] text-white/80 uppercase tracking-widest mb-8">
            Figma Design
          </div>
          <h3 className="text-2xl font-bold uppercase text-center mb-4 text-white">Web Design</h3>
          <p className="text-xs text-center text-white/60 leading-relaxed max-w-[90%] mx-auto mb-auto">
            Skilled in designing responsive, user-friendly websites by using Figma to create pixel perfect landing pages.
          </p>
          {/* Card 2 Decorative Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden rounded-b-[40px]">
            {/* Yellow eye shape */}
            <div className="absolute right-4 top-6 w-16 h-12 bg-accent rounded-full rounded-tr-none rounded-bl-none rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full"></div>
            </div>
            {/* Striped Dome approximation */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-white rounded-t-full overflow-hidden flex flex-col justify-end">
              <div className="w-full h-4 bg-black rounded-t-[100%] mb-2 scale-x-75"></div>
              <div className="w-full h-4 bg-black rounded-t-[100%] mb-2 scale-x-90"></div>
              <div className="w-full h-4 bg-black rounded-t-[100%] mb-2 scale-x-100"></div>
              <div className="w-full h-4 bg-black rounded-t-[100%] mb-2"></div>
            </div>
            {/* Figma logo approx */}
            <div className="absolute left-8 top-10 flex flex-col gap-1 -rotate-12">
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <ViewButton />
        </div>

        {/* CARD 3 */}
        <div 
          ref={card3Ref} 
          className="relative w-[300px] md:w-[340px] aspect-[1/1.6] bg-[#0d0d0d] rounded-[40px] border border-white/10 flex flex-col p-8 md:p-10 shadow-2xl z-10 md:-ml-10"
        >
          <div className="mx-auto border border-white/30 rounded-full px-4 py-1 text-[10px] text-white/80 uppercase tracking-widest mb-8">
            Web Development
          </div>
          <h3 className="text-2xl font-bold uppercase text-center mb-4 text-white">Webflow</h3>
          <p className="text-xs text-center text-white/60 leading-relaxed max-w-[90%] mx-auto mb-auto">
            Proficient in the use of Webflow to build functional, visually engaging websites efficiently, without compromising quality.
          </p>
          {/* Card 3 Decorative Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] overflow-hidden rounded-b-[40px]">
            {/* Wireframe globe approx */}
            <div className="absolute -right-4 top-4 w-20 h-20 rounded-full border border-white/40">
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/40"></div>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40"></div>
              <div className="absolute left-[20%] top-0 w-[60%] h-full rounded-[50%] border border-white/40"></div>
              <div className="absolute top-[20%] left-0 w-full h-[60%] rounded-[50%] border border-white/40"></div>
            </div>
            {/* Yellow box with checkerboard */}
            <div className="absolute -bottom-4 -left-4 w-40 h-32 bg-accent rotate-12 flex flex-wrap content-start p-4 border-2 border-white">
              {Array.from({length: 12}).map((_, i) => (
                <div key={i} className={`w-4 h-4 ${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`}></div>
              ))}
            </div>
            {/* Concentric lines approx */}
            <div className="absolute left-0 top-10 w-24 h-24 border border-white/20 rounded-full scale-150 -translate-x-1/2"></div>
            <div className="absolute left-0 top-10 w-24 h-24 border border-white/20 rounded-full scale-110 -translate-x-1/2"></div>
          </div>
          <ViewButton />
        </div>

      </div>
    </section>
  );
}
