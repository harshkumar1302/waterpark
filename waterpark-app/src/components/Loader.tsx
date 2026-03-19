import { useEffect, useState, useRef } from 'react';
import Bubbles from './common/Bubbles';
import HoloRays from './common/HoloRays';
import TridentLogo from './common/TridentLogo';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isGone, setIsGone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Failsafe timer & main timer component combination
    const timer = setTimeout(() => {
      setIsGone(true);
      document.body.classList.remove('loader-active');
      setTimeout(onComplete, 600); // Wait for fade out transition
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-transparent transition-opacity duration-600 ease-in-out ${isGone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Background Animated Shimmer Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--abyss)] via-[var(--deep)] to-[var(--abyss)] -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,212,255,0.05),transparent)] animate-[shimmer_3s_linear_infinite]" style={{ width: '200%' }} />
      </div>

      <HoloRays />
      <Bubbles count={40} />

      {/* Orbit Rings Background behind Trident */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] opacity-20 pointer-events-none flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border border-[var(--cyan)] animate-[halospin_20s_linear_infinite]" />
        <div className="absolute w-[80%] h-[80%] rounded-full border border-[var(--aqua)] animate-[haloInner_15s_linear_infinite]" />
      </div>

      {/* Trident Logo */}
      <div className="animate-[tridentFloat_3s_ease-in-out_infinite] mb-6 drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]">
         <TridentLogo width="160" height="160" withGlow={true} />
      </div>

      {/* Titles */}
      <h1 className="display-font text-5xl md:text-6xl text-center text-white drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] mb-2 tracking-wider">
        THE ATLANTTIS
      </h1>
      <p className="font-light text-[var(--aqua)] uppercase tracking-[0.2em] text-sm md:text-base mb-12">
        Bihta &middot; Patna &middot; Water Park
      </p>

      {/* Loading Progress Wrapper */}
      <div className="w-64 md:w-80 flex flex-col items-center relative z-20 mt-4">
        <div className="w-full h-[2px] bg-[rgba(255,255,255,0.1)] rounded overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--cyan)] to-[var(--aqua)] animate-[ldBar_3.2s_linear_forwards] origin-left drop-shadow-[0_0_5px_var(--cyan)]" />
        </div>
        <p className="text-[var(--muted)] text-xs mt-3 italic">
          Preparing your underwater adventure...
        </p>
      </div>

      {/* 3 SVG Wave Layers at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[200px] -z-10 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute bottom-0 w-[200%] h-full animate-[waveScroll_15s_linear_infinite]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1000 200\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 100 C 250 150, 250 50, 500 100 C 750 150, 750 50, 1000 100 L 1000 200 L 0 200 Z\" fill=\"%23083352\"/></svg>')" }} />
        <div className="absolute bottom-0 w-[200%] h-[80%] animate-[waveScroll_10s_linear_infinite_reverse] opacity-60" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1000 200\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 100 C 250 50, 250 150, 500 100 C 750 50, 750 150, 1000 100 L 1000 200 L 0 200 Z\" fill=\"%23006380\"/></svg>')" }} />
        <div className="absolute bottom-0 w-[200%] h-[50%] animate-[waveScroll_7s_linear_infinite] opacity-80" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1000 200\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 100 C 150 120, 350 80, 500 100 C 650 120, 850 80, 1000 100 L 1000 200 L 0 200 Z\" fill=\"%2300a8cc\"/></svg>')" }} />
      </div>
    </div>
  );
}
