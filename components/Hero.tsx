
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#fafaf8] flex flex-col justify-center items-start text-start px-[6vw]">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] bg-emerald-500/[0.04] blur-[220px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.2]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 0.5px, transparent 0)', backgroundSize: '80px 80px' }}>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <span className="text-[10px] md:text-xs font-mono text-emerald-600 uppercase tracking-[0.8em] border-s-2 border-emerald-500 ps-4">
            {t.hero.protocol}
          </span>
        </motion.div>

        <div className="flex flex-col items-start gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-2xl md:text-4xl font-luxury italic text-zinc-400 tracking-tight font-light"
          >
            {t.hero.welcome}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start leading-[0.75]"
          >
            <div className="flex flex-wrap items-baseline gap-x-12 mb-4">
                <span className="text-6xl md:text-[9.5rem] font-bold tracking-tighter text-zinc-900">
                  {t.hero.name_first}
                </span>
                <span className="text-3xl md:text-[4.5rem] font-extralight italic text-zinc-300 tracking-tighter">
                  {t.hero.name_middle}
                </span>
            </div>
            <h1 className="text-huge font-black tracking-tighter animated-gradient-text drop-shadow-sm">
              {t.hero.name_last}
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-20 max-w-5xl border-s border-zinc-200 ps-12"
        >
          <p className="text-2xl md:text-5xl text-zinc-400 font-extralight leading-tight tracking-tight">
            Defining the future of <span className="text-zinc-900 font-normal">urban resilience</span> <br/>
            through <span className="text-emerald-600 italic font-normal underline decoration-emerald-200 underline-offset-8">sovereign-grade systems.</span>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 start-[6vw] flex items-center gap-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.4em]">
            {lang === 'ar' ? 'جلسة مشفرة نشطة' : 'Encrypted Session Active'}
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="text-[9px] font-mono text-zinc-300 uppercase tracking-[0.4em] hidden md:block"
        >
          Reference ID: AC-7742-BRIEF
        </motion.div>
      </div>
    </section>
  );
};
