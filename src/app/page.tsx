import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import About from "@/components/sections/About";
import CheckeredScroll from "@/components/sections/CheckeredScroll";
import YellowSection from "@/components/sections/YellowSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SelectedWorks from "@/components/sections/SelectedWorks";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex-1 bg-black flex flex-col">
        {/* Cinematic Hero (Gold Frame Drop transition on scroll) */}
        <Hero />

        {/* Premium White Rounded Container housing Showcase and About sections */}
        <div className="main-white-card relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] mt-0 z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.7)]">
          <Showcase />
          <About />
          <CheckeredScroll />
        </div>

        {/* Next Section with Yellow Background */}
        <YellowSection />

        {/* Technical Rigor Process Section */}
        <ProcessSection />

        {/* Selected Works Section */}
        <SelectedWorks />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
