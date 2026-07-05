"use client";

import { useState } from "react";

const STEPS = [
  {
    id: "01",
    title: "DISCOVERY",
    description: "We strip away the surface-level desires to uncover the technical core of your business requirements. No fluff, just objective engineering parameters.",
  },
  {
    id: "02",
    title: "PROTOTYPING",
    description: "Rapid deployment of wireframe architectures. We build the skeleton before the skin to ensure structural integrity across all devices.",
  },
  {
    id: "03",
    title: "EXECUTION",
    description: "Coding with surgical precision. Our build phase is a controlled environment of continuous integration and automated testing.",
  }
];

const DiscoveryGraphic = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <path d="M11 8v6"></path>
      <path d="M8 11h6"></path>
    </svg>
    {/* Additional decorative elements */}
    <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-[#00ffcc]/40 rounded-full flex items-center justify-center">
      <div className="w-1 h-1 bg-[#00ffcc] rounded-full"></div>
    </div>
    <div className="absolute bottom-1/3 left-1/4 w-16 h-8 border border-[#00ffcc]/40"></div>
  </div>
);

const PrototypingGraphic = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
    <div className="absolute top-1/4 left-1/3 w-8 h-8 border border-[#00ffcc]/40 rotate-45"></div>
    <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-[#00ffcc]/40"></div>
  </div>
);

const ExecutionGraphic = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
    <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-[#00ffcc]/40 animate-spin" style={{ animationDuration: '3s' }}></div>
    <div className="absolute bottom-1/3 left-1/3 w-10 h-10 border border-[#00ffcc]/40 rounded-full border-dashed animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }}></div>
  </div>
);

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative w-full flex flex-col bg-surface-3 overflow-hidden z-20 border-t border-white/5">

      {/* Marquee Banner */}
      <div className="relative w-full h-16 md:h-20 bg-accent overflow-hidden flex items-center">
        {/* Scrolling Text */}
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-scroll {
            animation: marquee-scroll 15s linear infinite;
          }
        `}</style>
        <div className="flex whitespace-nowrap text-black font-display font-extrabold text-3xl md:text-5xl uppercase tracking-wider items-center animate-marquee-scroll w-max">
          {/* Double content for seamless looping */}
          <div className="flex items-center space-x-12 px-6">
            <span>MODERN BRUTALISM</span>
            <span>INDUSTRIAL FUTURISM</span>
            <span>MODERN BRUTALISM</span>
            <span>INDUSTRIAL FUTURISM</span>
          </div>
          <div className="flex items-center space-x-12 px-6">
            <span>MODERN BRUTALISM</span>
            <span>INDUSTRIAL FUTURISM</span>
            <span>MODERN BRUTALISM</span>
            <span>INDUSTRIAL FUTURISM</span>
          </div>
        </div>

        {/* Diagonal Mask Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #111111, #111111 20px, transparent 20px, transparent 40px)'
          }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Side: Title and Image */}
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-4">PROCESS ALPHA</h4>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] uppercase leading-none tracking-tight text-white">
              TECHNICAL<br />RIGOR
            </h2>
          </div>

          {/* Dynamic Image Container */}
          <div className="relative w-full aspect-[16/10] bg-[#0a0f12] border border-white/10 rounded overflow-hidden shadow-2xl mt-4">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(to right, #00ffcc 1px, transparent 1px), linear-gradient(to bottom, #00ffcc 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00ffcc]/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* Contextual Graphics */}
            <div className="absolute inset-0 transition-opacity duration-500">
              {activeStep === 0 && <DiscoveryGraphic />}
              {activeStep === 1 && <PrototypingGraphic />}
              {activeStep === 2 && <ExecutionGraphic />}
            </div>

            {/* Overlays */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
              <div className="bg-accent text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                ACTIVE MONITOR
              </div>
              <div className="bg-black/50 backdrop-blur text-white text-[10px] border border-white/20 font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                V_4.2.1
              </div>
            </div>

            {/* Screen lines overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffcc 2px, #00ffcc 4px)'
            }}></div>
          </div>
        </div>

        {/* Right Side: Interactive Steps */}
        <div className="flex-1 flex flex-col justify-center lg:pl-12">
          <div className="relative pl-8 md:pl-10">
            {/* Vertical connecting line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-white/10 z-0 rounded-full"></div>

            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  className="relative z-10 mb-16 last:mb-0 cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Dot */}
                  <div className={`absolute -left-10 md:-left-12 top-1.5 w-3 h-3 rounded-full transition-colors duration-300 border-2 border-[#111111] box-content ${isActive ? 'bg-accent shadow-[0_0_10px_rgba(255,204,0,0.5)]' : 'bg-white/20 group-hover:bg-white/40'
                    }`}></div>

                  <h4 className={`text-sm md:text-base font-extrabold tracking-widest uppercase mb-4 transition-colors duration-300 font-display ${isActive ? 'text-accent' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                    {step.id}. {step.title}
                  </h4>

                  <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 max-w-md ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
