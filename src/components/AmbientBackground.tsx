import React, { useEffect, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle slightly with requestAnimationFrame
      window.requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-25 dark:opacity-20 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 70%)',
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* Primary Floating Ambient Nebula Orb 1 (Top Left) */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-transparent dark:from-blue-600/15 dark:via-indigo-900/20 dark:to-transparent rounded-full blur-[120px] animate-glow-1" />

      {/* Primary Floating Ambient Nebula Orb 2 (Top Right) */}
      <div className="absolute top-20 -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-emerald-400/20 via-teal-500/15 to-transparent dark:from-emerald-500/15 dark:via-teal-900/20 dark:to-transparent rounded-full blur-[130px] animate-glow-2" />

      {/* Subtle Mid-Page Nebula Orb 3 */}
      <div className="absolute top-[45%] left-[25%] w-[800px] h-[800px] bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-transparent dark:from-cyan-900/10 dark:via-blue-950/15 dark:to-transparent rounded-full blur-[140px] opacity-60" />

      {/* Micro-dot Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Subtle Cyber Grid Lines Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)] opacity-40 dark:opacity-30" />

    </div>
  );
};
