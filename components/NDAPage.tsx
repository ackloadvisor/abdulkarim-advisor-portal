
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';

interface NDAPageProps {
  onAgree: () => void;
}

export const NDAPage: React.FC<NDAPageProps> = ({ onAgree }) => {
  const [checked, setChecked] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-6 md:p-12 overflow-hidden text-start">
      {/* Visual Background Grid - High-fidelity match to the provided screenshot */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ndaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ndaGrid)" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl bg-[#080808] p-10 md:p-16 shadow-[0_0_120px_rgba(16,185,129,0.05)] border border-white/[0.03]"
      >
        {/* Subtle Inner Glow for 'Softer' Feel */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full"></div>

        {/* Top Header Label - Entirely Green as requested */}
        <div className="flex items-center gap-3 text-[9px] font-mono mb-14 tracking-[0.6em] uppercase text-emerald-500 font-bold">
          <span>SECURITY PROTOCOL</span>
          <span className="font-black">.</span>
          <span>NDA</span>
        </div>
        
        {/* Main Title Section */}
        <h2 className="text-4xl md:text-[3.5rem] font-bold mb-10 tracking-tight leading-[0.95] text-white">
          {t.nda.title_part1} <br/>
          <span className="italic font-luxury font-light text-white/70">{t.nda.title_part2}</span>
        </h2>

        {/* Materials Note */}
        <div className="text-white/40 font-light leading-relaxed mb-10 text-lg md:text-xl">
          {t.nda.text1}
        </div>

        {/* Sub-rule Quote Box with vertical bar */}
        <div className="flex items-start gap-4 mb-14">
          <div className="w-[1px] h-10 bg-emerald-500/60 mt-1 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          <p className="text-white/30 italic text-sm md:text-base leading-relaxed max-w-md">
            "{t.nda.text2}"
          </p>
        </div>

        {/* Interactive Layer */}
        <div className="flex flex-col gap-10">
          <label className="flex items-start gap-5 cursor-pointer group">
            <div className="relative mt-1">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <div className={`w-5 h-5 border transition-all duration-500 ${checked ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-transparent border-white/20 group-hover:border-emerald-500/50'}`}>
                {checked && (
                  <svg className="text-black w-full h-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm md:text-base text-zinc-500 group-hover:text-zinc-300 transition-colors select-none font-light">
              {t.nda.agree_check}
            </span>
          </label>

          <button 
            disabled={!checked}
            onClick={onAgree}
            className={`w-full py-6 font-mono text-[10px] tracking-[0.6em] uppercase transition-all duration-500 border ${
              checked 
              ? 'bg-[#121212] text-white border-white/5 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]' 
              : 'bg-white/5 text-white/10 border-transparent cursor-not-allowed'
            }`}
          >
            {t.nda.button}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
