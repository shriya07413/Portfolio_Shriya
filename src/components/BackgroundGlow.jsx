import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute -top-[20%] left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-primary-600/15 dark:bg-primary-500/15 blur-[120px] transform-gpu animate-pulse-slow" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-500/12 dark:bg-cyan-400/10 blur-[130px] transform-gpu" />
      <div className="absolute top-[70%] left-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-purple-700/15 dark:bg-purple-600/12 blur-[140px] transform-gpu animate-float" />
      <div className="absolute -bottom-[10%] right-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-emerald-500/10 blur-[120px] transform-gpu" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
