
import React from 'react';
import { FadeIn } from './MotionWrapper';

export const MissionManifest: React.FC = () => {
  return (
    <section className="py-32 px-[6vw] bg-white overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <FadeIn>
          <div className="relative group overflow-hidden bg-white">
            <img 
              src="https://res.cloudinary.com/dayqcryf0/image/upload/v1741108226/Screenshot_2025-03-05_at_1.30.15_AM_u8j0n8.png" 
              alt="ACKLO Mission Items & SDG Alignment" 
              className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Minimalist framing for institutional look */}
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-100"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100"></div>
          </div>
          <div className="mt-12 flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-[0.5em]">
             <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>// STRATEGIC_MANIFEST_VERSION_2025</span>
             </div>
             <span>AUTHENTICATED GLOBAL STANDARDS // UN_SDG_PROTOCOL</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
