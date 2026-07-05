"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-surface-1 pt-32 pb-8 px-6 font-sans border-t border-white/5 mt-56 lg:mt-48">
      {/* Floating CTA Card */}
      <div className="max-w-6xl mx-auto absolute top-0 left-6 right-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 -translate-y-[60%] lg:-translate-y-1/2 rounded-[32px] overflow-hidden flex flex-col lg:flex-row bg-surface-3 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-30 min-h-[350px] lg:min-h-[400px]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
          <div className="text-accent text-[10px] font-bold tracking-widest uppercase mb-4">
            THE FINAL STEP
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-[1.1] uppercase break-words">
            Ready to architect <br />
            <span className="text-white/60 italic lowercase tracking-normal">your BRAND?</span>
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed max-w-md font-medium">
            Applications are strictly reviewed to ensure we are the perfect fit. Commit to the standard. Elevate your enterprise.
          </p>
          <button className="bg-accent hover:bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-colors w-fit">
            connect with us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-surface-2">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
            alt="Cyber Core"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700"
          />
          {/* Brutalist overlay accents */}
          <div className="absolute inset-0 border-l border-white/10 pointer-events-none"></div>
          <div className="absolute top-4 right-4 text-accent text-xs font-mono font-bold tracking-widest">
            [ SYSTEM.INIT ]
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-64 md:pt-32 flex flex-col">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Column 1: Brand (spans 4) */}
          <div className="md:col-span-4 flex flex-col pr-8">
            <div className="flex items-center gap-2 text-white font-display font-extrabold text-4xl tracking-widest uppercase mb-6">
              PRAGANA INNOVATIONS.
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Elite engineering for high-performers. We merge deep technical science with relentless discipline to build uncompromised digital architecture.
            </p>
          </div>

          {/* Column 2: Navigation (spans 2) */}
          <div className="md:col-span-2 flex flex-col">
            <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase mb-6">NAVIGATION</h4>
            <div className="flex flex-col gap-4">
              {['Philosophy', 'Programs', 'The Archives', 'FAQ'].map(link => (
                <a key={link} href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect (spans 2) */}
          <div className="md:col-span-2 flex flex-col">
            <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase mb-6">CONNECT</h4>
            <div className="flex flex-col gap-4">
              {['Instagram', 'YouTube', 'Spotify', 'Contact'].map(link => (
                <a key={link} href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors w-fit">{link}</a>
              ))}
            </div>
          </div>

          {/* Column 4: The Dispatch (spans 4) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase mb-6">THE DISPATCH</h4>
            <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
              Join our private network. Once a month, receive advanced technical protocols and architectural insights. No spam.
            </p>
            <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
              Join our private network. Once a month, receive advanced technical protocols and architectural insights. No spam.
            </p>
            {/* <div className="relative border-b border-white/20 pb-3 flex items-center group focus-within:border-accent transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/30"
              />
              <button className="text-white/50 hover:text-accent transition-colors absolute right-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div> */}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/40">
          <p>© 2026 PRAGANA INNOVATIONS. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>

          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-y-1 transition-transform"><path d="M19 15l-7-7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
