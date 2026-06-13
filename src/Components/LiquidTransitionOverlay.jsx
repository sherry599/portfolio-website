import React from 'react';
import { motion } from 'framer-motion';
import { usePageTransition } from './PageTransitionContext';

export const LiquidTransitionOverlay = () => {
  const { transitionStep } = usePageTransition();

  if (transitionStep === 'idle') return null;

  // Layer 1 (Top-down liquid paint)
  const layer1Variants = {
    initial: {
      d: "M 0 0 L 100 0 L 100 0 C 75 0 25 0 0 0 Z"
    },
    starting: {
      d: "M 0 0 L 100 0 L 100 65 C 70 85 30 85 0 65 Z",
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] }
    },
    covered: {
      d: "M 0 0 L 100 0 L 100 100 C 75 100 25 100 0 100 Z",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    revealing: {
      d: "M 0 0 L 100 0 L 100 0 C 75 0 25 0 0 0 Z",
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
    }
  };

  // Layer 2 (Bottom-up liquid paint, slightly offset)
  const layer2Variants = {
    initial: {
      d: "M 0 100 L 100 100 L 100 100 C 75 100 25 100 0 100 Z"
    },
    starting: {
      d: "M 0 100 L 100 100 L 100 35 C 70 15 30 15 0 35 Z",
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.15 }
    },
    covered: {
      d: "M 0 100 L 100 100 L 100 0 C 75 0 25 0 0 0 Z",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    revealing: {
      d: "M 0 100 L 100 100 L 100 100 C 75 100 25 100 0 100 Z",
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none w-screen h-screen">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {/* Layer 1 - Deep Charcoal Paint */}
        <motion.path
          variants={layer1Variants}
          initial="initial"
          animate={transitionStep}
          fill="url(#paint-gradient-1)"
          className="pointer-events-auto"
        />

        {/* Layer 2 - Charcoal with Brand Purple Tint */}
        <motion.path
          variants={layer2Variants}
          initial="initial"
          animate={transitionStep}
          fill="url(#paint-gradient-2)"
          className="pointer-events-auto"
        />

        {/* Premium Gradients for paint textures */}
        <defs>
          <linearGradient id="paint-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#121214" />
            <stop offset="100%" stopColor="#0d0d0f" />
          </linearGradient>
          <linearGradient id="paint-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#111115" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
