import React from 'react';

export const NoiseMeshBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Light 1 - Monochromatic/White Mesh */}
      <div
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-neutral-500/5 to-transparent blur-[100px] dark:from-white/5 dark:to-transparent transform-gpu animate-mesh-float-1"
      />

      {/* Floating Light 2 - Monochromatic/White Mesh */}
      <div
        className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-neutral-500/5 to-transparent blur-[120px] dark:from-white/5 dark:to-transparent transform-gpu animate-mesh-float-2"
      />

      {/* Floating Light 3 - Monochromatic/White Highlight */}
      <div
        className="absolute top-[50%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-neutral-500/2 to-transparent blur-[90px] dark:from-white/2 dark:to-transparent transform-gpu animate-mesh-float-3"
      />
    </div>
  );
});

export default NoiseMeshBackground;
