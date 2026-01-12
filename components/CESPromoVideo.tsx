
import React from 'react';
import { FadeIn } from './MotionWrapper';

export const CESPromoVideo: React.FC = () => {
  return (
    <section className="py-24 px-[6vw] bg-[#fafaf8]">
      <FadeIn>
        <div className="relative w-full max-w-7xl mx-auto aspect-video border border-zinc-200 bg-white shadow-2xl overflow-hidden group">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dayqcryf0&public_id=redpandacompress_ACKLO_CES_Promo_video_1_k4irwp_63c046&profile=cld-default"
            width="100%"
            height="100%"
            style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title="ACKLO CES Promo"
          ></iframe>
          
          {/* Decorative frame elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-emerald-500/30 pointer-events-none group-hover:border-emerald-500 transition-colors"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-emerald-500/30 pointer-events-none group-hover:border-emerald-500 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-emerald-500/30 pointer-events-none group-hover:border-emerald-500 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-emerald-500/30 pointer-events-none group-hover:border-emerald-500 transition-colors"></div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-300 uppercase tracking-[0.5em] font-bold">
           <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>ACKLO // CES GLOBAL PROMO</span>
           </div>
           <span>PROTOCOL: CES-LITE-TRANS // REF: 04-K</span>
        </div>
      </FadeIn>
    </section>
  );
};
