"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function YellowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate header elements
      tl.from(headerRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate cards
      tl.from(cardsRef.current!.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen bg-[#0d0d0d] px-6 py-24 md:py-32 flex flex-col items-center justify-center text-white overflow-hidden z-20 font-sans border-t border-white/5"
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs md:text-sm font-bold mb-4">Service Catalogue v4.0</h4>
            <h2 className="font-display font-extrabold text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-none tracking-tight">
              <span className="text-accent">OUR </span>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #555' }}>EXPERTISE</span>
            </h2>
          </div>
          <div className="border-l-2 border-accent pl-6 max-w-sm hidden md:block">
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              High-octane digital architecture engineered for enterprise scalability and technological dominance.
            </p>
          </div>
        </div>

        {/* Grid of Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Web Development */}
          <div className="bg-surface-3 border border-white/5 rounded-sm p-8 md:p-12 relative group hover:border-white/10 transition-colors flex flex-col h-full overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 border border-accent/30 rounded flex items-center justify-center text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">01 / ARCHITECTURE</span>
            </div>
            
            <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white tracking-wide">WEB DEVELOPMENT</h3>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Precision-engineered web ecosystems built on React, Next.js, and high-performance serverless backends. We focus on sub-second load times and flawless technical SEO.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="bg-white/5 border border-white/10 text-white/70 px-4 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase">NEXT.JS</span>
              <span className="bg-white/5 border border-white/10 text-white/70 px-4 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase">NODE.JS</span>
              <span className="bg-white/5 border border-white/10 text-white/70 px-4 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase">TYPESCRIPT</span>
            </div>
          </div>
          
          {/* Card 2: AI & Machine Learning */}
          <div className="bg-accent p-8 md:p-12 relative overflow-hidden text-black rounded-sm group flex flex-col h-full">
            {/* Diagonal stripes */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
               backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 10px)'
            }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border border-black/30 bg-black rounded flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M5 12H3"></path><path d="M21 12h-2"></path><path d="M6 6l-1-1"></path><path d="M18 18l1 1"></path><path d="M18 6l1-1"></path><path d="M6 18l-1 1"></path><circle cx="12" cy="12" r="4"></circle></svg>
                </div>
                <span className="text-black text-xs font-bold tracking-widest uppercase">02 / INTELLIGENCE</span>
              </div>
              
              <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-6 text-black tracking-wide">AI & MACHINE LEARNING</h3>
              
              <p className="text-black/80 text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium">
                Deploying neural networks and LLMs that transform raw data into predictive assets.
              </p>
            </div>
            
            <div className="mt-auto relative z-10 w-full pt-4">
              <button className="w-full border-2 border-black rounded-full py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-black hover:text-accent transition-colors">
                DEPLOY ENGINE
              </button>
            </div>
          </div>

          {/* Card 3: Mobile Apps */}
          <div className="bg-surface-3 border border-white/5 rounded-sm p-8 md:p-12 relative group hover:border-white/10 transition-colors flex flex-col h-full overflow-hidden">
            {/* Faint P background */}
            <div className="absolute -left-10 bottom-0 text-[18rem] font-display font-extrabold text-white/5 leading-none select-none pointer-events-none">
              P
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border border-accent/30 rounded flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <span className="text-accent text-xs font-bold tracking-widest uppercase">03 / MOBILITY</span>
              </div>
              
              <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white tracking-wide">MOBILE APPS</h3>
              
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Hybrid and native solutions optimized for the mobile frontier. User experiences that feel tactile, responsive, and inevitable.
              </p>
              
              <ul className="mt-auto space-y-4">
                <li className="flex items-center text-accent text-xs font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></span> REACT NATIVE
                </li>
                <li className="flex items-center text-accent text-xs font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></span> FLUTTER ENGINE
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Cloud Solutions */}
          <div className="bg-[#151515] border border-white/5 rounded-sm p-8 md:p-12 relative group hover:border-white/10 transition-colors flex flex-col h-full overflow-hidden">
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative z-10">
               <div className="flex flex-col w-full md:max-w-[65%]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white/80">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                    </div>
                    <span className="text-white/60 text-xs font-bold tracking-widest uppercase">04 / INFRASTRUCTURE</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white tracking-wide">CLOUD SOLUTIONS</h3>
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10">
                    Massive-scale DevOps and cloud architecture. We build the "Inner Hull" of your digital business—secure, redundant, and indestructible.
                  </p>
               </div>
               
               {/* Right side graphic */}
               <div className="absolute right-0 top-1/4 md:top-1/2 md:-translate-y-1/2 opacity-20 md:opacity-100 hidden sm:flex items-center justify-center pr-4 md:pr-8 pointer-events-none">
                 <div className="relative w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-sm flex items-center justify-center">
                    <div className="absolute inset-3 md:inset-4 border border-white/10 rounded-sm"></div>
                    <div className="absolute inset-6 md:inset-8 border border-white/10 rounded-sm"></div>
                    <div className="text-accent">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
                        <circle cx="12" cy="3" r="2" fill="currentColor"></circle>
                        <circle cx="4" cy="17" r="2" fill="currentColor"></circle>
                        <circle cx="20" cy="17" r="2" fill="currentColor"></circle>
                        <line x1="12" y1="5" x2="12" y2="9"></line>
                        <line x1="5.7" y1="15.3" x2="9.3" y2="13.7"></line>
                        <line x1="18.3" y1="15.3" x2="14.7" y2="13.7"></line>
                      </svg>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="flex mt-auto gap-8 md:gap-12 relative z-10 pt-8 border-t border-white/5 w-full">
              <div>
                <div className="text-white font-display text-3xl md:text-4xl font-extrabold mb-1">99.9%</div>
                <div className="text-accent text-[9px] font-bold tracking-widest uppercase">UPTIME CORE</div>
              </div>
              <div>
                <div className="text-white font-display text-3xl md:text-4xl font-extrabold mb-1">SECURE</div>
                <div className="text-white/50 text-[9px] font-bold tracking-widest uppercase">ENCRYPTED NODES</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
