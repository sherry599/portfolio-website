import { useEffect } from 'react';

export const useLenis = () => {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenisInstance = null;
    let rafId = null;

    const initLenis = (LenisClass) => {
      try {
        const lenis = new LenisClass({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve for premium feel
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
        });

        window.lenis = lenis;
        lenisInstance = lenis;

        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (err) {
        console.error("Failed to initialize Lenis:", err);
      }
    };

    // If Lenis is already on window or in global scope
    if (window.Lenis) {
      initLenis(window.Lenis);
    } else {
      // Dynamically load Lenis from unpkg CDN to ensure it compiles and runs without local node_modules blocker
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Lenis) {
          initLenis(window.Lenis);
        }
      };
      script.onerror = (e) => {
        console.warn("Lenis CDN failed to load, falling back to default browser scroll", e);
      };
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        if (rafId) cancelAnimationFrame(rafId);
        if (lenisInstance) {
          lenisInstance.destroy();
          window.lenis = null;
        }
      };
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) {
        lenisInstance.destroy();
        window.lenis = null;
      }
    };
  }, []);
};

export default useLenis;
