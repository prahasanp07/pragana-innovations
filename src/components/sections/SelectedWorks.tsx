"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(headerRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

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
    <section id="works" ref={sectionRef} className="relative w-full bg-surface-3 px-6 py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden z-20 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <div className="flex items-center text-accent text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
              INDUSTRIAL FUTURISM / 2026
            </div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] uppercase leading-none tracking-tight">
              <span className="text-white">SELECTED </span>
              <span className="text-accent">WORKS</span>
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="text-white/60 text-sm md:text-base leading-relaxed italic">
              Deploying enterprise-grade digital architecture for global industrial leaders.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="flex flex-col gap-6">

          {/* Card 1: Neural Mesh Infrastructure */}
          <div className="group relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden cursor-pointer border border-white/5">
            <div className="absolute inset-0 bg-surface-1">
              {/* Dark gradient overlay so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent z-10 pointer-events-none"></div>
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
                alt="Servers"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col">
              <div className="flex justify-between items-start w-full">
                <div className="bg-accent text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  PROJECT-PRODUCT-PORTFOLIO MANAGEMENT (PPM)
                </div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase hidden sm:block">
                  01 / WEBSITE DESIGN & DEVELOPMENT
                </div>
              </div>

              <div className="mt-auto max-w-2xl">
                <h3 className="font-display font-extrabold text-5xl md:text-7xl text-white uppercase leading-[0.9] mb-4">
                  Shree PM <br />Consulting Services
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-8 font-medium">
                  Shree PM is a consulting firm that provides project management services to businesses.
                </p>
                {/* <button className="bg-black/60 hover:bg-black border border-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full flex items-center gap-3 transition-colors w-fit">
                  VIEW CASE STUDY
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button> */}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 2: Parvam App */}
            <div className="group relative w-full rounded-[32px] overflow-hidden cursor-pointer flex flex-col bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-colors">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
                  alt="Circuit"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative w-full p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-accent text-[10px] font-bold tracking-widest uppercase">
                    [ CONNECTIVITY ]
                  </div>
                  <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase hidden sm:block">
                    PROJECT_ID: SYNC-004
                  </div>
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase mb-3">Parvam App</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">A comprehensive mobile application for community engagement and local governance.</p>

                {/* <button className="mt-auto w-full border border-white/10 hover:bg-white/5 text-white/80 text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-colors">
                  CASE DETAILS
                </button> */}
              </div>
            </div>

            {/* Card 3: Keshavashree Food Products */}
            <div className="group relative w-full rounded-[32px] overflow-hidden cursor-pointer flex flex-col bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-colors">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                  alt="Abstract city"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative w-full p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-accent text-[10px] font-bold tracking-widest uppercase">
                    [ METROPOLIS ]
                  </div>
                  <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase hidden sm:block">
                    PROJECT_ID: CITY-X
                  </div>
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase mb-3">Keshavashree Food Products</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">A modern, user-friendly e-commerce platform for a premium food products brand.</p>

                {/* <button className="mt-auto w-full border border-white/10 hover:bg-white/5 text-white/80 text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-colors">
                  CASE DETAILS
                </button> */}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
