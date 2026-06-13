import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const NoiseMeshBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Subtle parallax mapping for the floating lights
  const light1Y = useTransform(scrollY, [0, 1000], [0, -120]);
  const light2Y = useTransform(scrollY, [0, 1000], [0, 80]);
  const light3Y = useTransform(scrollY, [0, 1000], [0, -60]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize values between -0.5 and 0.5
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Light 1 - Monochromatic/White Mesh */}
      <motion.div
        style={{
          y: light1Y,
          x: mousePosition.x * 30, // Light interactive shift
        }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-neutral-500/5 to-transparent blur-[100px] dark:from-white/5 dark:to-transparent"
      />

      {/* Floating Light 2 - Monochromatic/White Mesh */}
      <motion.div
        style={{
          y: light2Y,
          x: mousePosition.y * -40,
        }}
        animate={{
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-neutral-500/5 to-transparent blur-[120px] dark:from-white/5 dark:to-transparent"
      />

      {/* Floating Light 3 - Monochromatic/White Highlight */}
      <motion.div
        style={{
          y: light3Y,
          x: mousePosition.x * 20,
        }}
        className="absolute top-[50%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-neutral-500/2 to-transparent blur-[90px] dark:from-white/2 dark:to-transparent"
      />
    </div>
  );
};
export default NoiseMeshBackground;
