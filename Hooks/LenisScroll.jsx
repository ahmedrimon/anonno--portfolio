// ✅ Highlight: This is the Lenis setup component
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
