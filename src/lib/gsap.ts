"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Only register plugins in the browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
  // Connect GSAP ticker with a lag smoothing default
  gsap.ticker.lagSmoothing(1000, 16);
}

export { gsap, ScrollTrigger };
