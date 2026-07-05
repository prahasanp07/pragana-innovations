"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "IDEA TO PRODUCT",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", inquiryType: "IDEA TO PRODUCT", message: "" });
        // Reset success state after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-surface-3 px-6 pt-24 pb-48 md:pt-32 md:pb-64 lg:pb-40 flex justify-center overflow-hidden z-20 border-t border-white/5 font-sans"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Faint Background Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-10">
        <h1 className="text-[12rem] md:text-[18rem] font-display font-extrabold text-white leading-none whitespace-nowrap pl-6 tracking-tighter">
          CONNECTION
        </h1>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto w-full relative z-10">

        {/* Header Area */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-accent"></div>
            <span className="text-accent text-[10px] font-bold tracking-widest uppercase">
              PHASE 04: ENGAGEMENT
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[6rem] uppercase leading-none tracking-tight">
            <span className="text-white">READY TO </span>
            <span className="text-accent">INNOVATE?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column: Form */}
          <div className="w-full lg:w-3/5">
            <div className="relative border border-white/5 p-8 md:p-10 bg-surface-4/80 backdrop-blur">
              {/* Corner Accents */}
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-accent"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Full Identity */}
                  <div className="flex flex-col gap-3 flex-1">
                    <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      FULL IDENTITY
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="NAME / ORGANISATION"
                      className="bg-surface-2 border border-white/10 text-white px-4 py-4 focus:border-accent outline-none transition-colors text-sm placeholder:text-white/20"
                    />
                  </div>

                  {/* Digital Address */}
                  <div className="flex flex-col gap-3 flex-1">
                    <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      DIGITAL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL@DOMAIN.COM"
                      className="bg-surface-2 border border-white/10 text-white px-4 py-4 focus:border-accent outline-none transition-colors text-sm placeholder:text-white/20 uppercase"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col gap-3">
                  <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    INQUIRY TYPE
                  </label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-surface-2 border border-white/10 text-white px-4 py-4 appearance-none outline-none focus:border-accent uppercase text-sm font-bold tracking-wide cursor-pointer transition-colors"
                    >
                      <option>IDEA TO PRODUCT</option>
                      <option>UI/UX PRODUCT DESIGN</option>
                      <option>FULL-STACK DEVELOPMENT</option>
                      {/* <option>CLOUD ARCHITECTURE</option> */}
                      <option>AI & MACHINE LEARNING</option>
                      <option>MOBILE DEVELOPMENT</option>
                      {/* <option>BLOCKCHAIN DEVELOPMENT</option> */}
                      {/* <option>CYBERSECURITY</option> */}
                      <option>CONSULTING</option>
                      <option>OTHER</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
                    </div>
                  </div>
                </div>

                {/* System Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    SYSTEM INPUT
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE YOUR PROJECT GOALS..."
                    rows={4}
                    className="w-full bg-surface-2 border border-white/10 text-white px-4 py-4 focus:border-accent outline-none transition-colors text-sm placeholder:text-white/20 resize-none uppercase"
                  ></textarea>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                      AVERAGE RESPONSE TIME: &lt; 24H
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-accent hover:bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-colors disabled:opacity-70 w-full sm:w-auto justify-center"
                  >
                    {status === "submitting" ? "TRANSMITTING..." : status === "success" ? "MESSAGE SENT" : "TRANSMIT MESSAGE"}
                    {status !== "submitting" && status !== "success" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <div className="text-red-500 text-xs font-bold text-center mt-2">
                    ERROR TRANSMITTING. PLEASE TRY AGAIN.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-2/5 flex flex-col gap-12 lg:pl-8 pt-4">

            {/* Coordinates */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-widest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                CORE COORDINATES
              </div>
              <div className="text-white flex flex-col gap-1">
                <p className="font-bold text-base uppercase tracking-wider mb-2">BENGALURU HQ</p>
                <p className="font-bold text-base uppercase tracking-wider mb-2">MYSURU</p>
                {/* <p className="font-mono text-accent text-sm mb-1 tracking-tight">12.9716° N, 77.5946° E</p>
                <p className="font-mono text-white/60 text-sm tracking-tight">Level 8, Tech Terminal Alpha</p>
                <p className="font-mono text-white/60 text-sm tracking-tight">Industrial District 560001</p> */}
              </div>
            </div>

            {/* Signal Channels */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-widest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                SIGNAL CHANNELS
              </div>
              <div className="text-white flex flex-col gap-3 font-mono text-sm">
                {/* <a href="mailto:hello@pragana.com" className="hover:text-accent transition-colors">hello@pragana.com</a> */}
                <a href="tel:+919480100618" className="hover:text-accent transition-colors">+91-94801 00618</a>
              </div>
            </div>

            {/* Network Mesh */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-widest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                NETWORK MESH
              </div>
              <div className="flex gap-4">
                {['LI', 'TW', 'IG', 'DR'].map((network) => (
                  <a key={network} href={`#${network}`} className="w-12 h-12 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center font-mono text-sm transition-colors text-white">
                    {network}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Graphic */}
            {/* <div className="mt-auto w-full h-24 bg-surface-2 border border-white/5 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #ffcc00, #ffcc00 2px, transparent 2px, transparent 10px)'
              }}></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-white/30 text-[8px] font-bold tracking-[0.3em] uppercase">PRAGANA SYSTEMS ANALYTICS</span>
                <div className="flex gap-1 items-end h-6">
                  <div className="w-1 h-3 bg-accent group-hover:h-6 transition-all duration-300"></div>
                  <div className="w-1 h-5 bg-accent group-hover:h-4 transition-all duration-300 delay-75"></div>
                  <div className="w-1 h-2 bg-accent group-hover:h-5 transition-all duration-300 delay-100"></div>
                  <div className="w-1 h-4 bg-accent group-hover:h-3 transition-all duration-300 delay-150"></div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
