
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const Deployments: React.FC = () => {
  const { t, lang } = useLanguage();

  // Coordinates updated to fit the new abstract geometric map structure
  const DEPLOYMENTS = [
    { city: lang === 'en' ? 'Riyadh' : 'الرياض', type: 'Vision 2030 Node', country: 'KSA', coords: { x: 48, y: 58 } },
    { city: lang === 'en' ? 'Abu Dhabi' : 'أبو ظبي', type: 'Governance Node', country: 'UAE', coords: { x: 66, y: 56 } },
    { city: lang === 'en' ? 'Dubai' : 'دبي', type: 'Urban Media Hub', country: 'UAE', coords: { x: 74, y: 45 } },
    { city: lang === 'en' ? 'RAK' : 'رأس الخيمة', type: 'Nature Node', country: 'UAE', coords: { x: 81, y: 52 } },
    { city: lang === 'en' ? 'Al Ain' : 'العين', type: 'Cultural Node', country: 'UAE', coords: { x: 78, y: 70 } },
    { city: lang === 'en' ? 'Doha' : 'الدوحة', type: 'Sustainable Legacy', country: 'Qatar', coords: { x: 64, y: 42 } }
  ];

  return (
    <section id="deployments" className="py-48 px-[6vw] bg-[#fafaf8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-20">
            <FadeIn className="flex-1">
                <div className="text-[10px] font-mono text-emerald-600 mb-8 tracking-[0.8em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">{t.deployments.tag}</div>
                <h3 className="text-heading font-medium tracking-tighter leading-none text-zinc-900">
                  {lang === 'en' ? 'Sovereign Network.' : 'الشبكة السيادية.'}
                </h3>
            </FadeIn>
            <FadeIn delay={0.3} className="flex-1">
                <p className="text-zinc-400 text-2xl md:text-3xl font-extralight uppercase tracking-tighter leading-tight italic">
                    {t.deployments.description}
                </p>
            </FadeIn>
        </div>

        {/* Cinematic Strategic Map - Abstract Geometric Version */}
        <div className="mb-48 relative bg-white rounded-[4rem] p-12 md:p-32 shadow-2xl border border-zinc-100 overflow-hidden">
          
          {/* Map Status Overlay */}
          <div className="absolute top-16 left-16 z-30">
            <div className="flex items-center gap-3 text-[10px] font-mono text-emerald-600 uppercase tracking-[0.5em] mb-3 font-bold italic">
               <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></span>
               // GCC_STRATEGIC_NODES_ACTIVE
            </div>
            <div className="text-sm text-zinc-300 uppercase tracking-widest font-light">OPERATIONAL_NODES: 06 // SYSTEM: ACKLO_OS_V1</div>
          </div>

          <div className="relative aspect-[2/1] w-full flex items-center justify-center">
            
            {/* ABSTRACT GCC GEOMETRIC MAP */}
            <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-2xl">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Saudi Arabia (KSA) - Large Hexagon-ish Shape */}
              <motion.path 
                d="M20,14 L55,8 L58,35 L40,38 L20,34 Z" 
                initial={{ fill: "#ecfdf500", stroke: "#10b98122" }}
                whileInView={{ fill: "#ecfdf555", stroke: "#10b98166" }}
                transition={{ duration: 2 }}
                strokeWidth="0.2"
              />

              {/* UAE - Smaller Tilted Rectangle Shape */}
              <motion.path 
                d="M60,26 L76,32 L69,40 L53,34 Z" 
                initial={{ fill: "#d1fae500", stroke: "#10b98122" }}
                whileInView={{ fill: "#d1fae588", stroke: "#10b98166" }}
                transition={{ duration: 2, delay: 0.5 }}
                strokeWidth="0.2"
              />

              {/* Bridge Connector Node */}
              <motion.path 
                d="M57,18 L60,18 L61,23 L58,24 Z" 
                fill="white"
                stroke="#e4e4e7"
                strokeWidth="0.1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />

              {/* Watermark Labels */}
              <text x="35" y="25" className="text-[1.5px] font-mono fill-zinc-200 tracking-[1.2em] pointer-events-none uppercase font-bold" style={{ fontSize: '1.2px' }}>A C K L O _ K S A</text>
              <text x="60" y="36" className="text-[1px] font-mono fill-zinc-300 tracking-[0.6em] pointer-events-none uppercase font-bold" style={{ fontSize: '0.8px' }}>A C K L O _ U A E</text>
            </svg>

            {/* INTERACTIVE NODES - Positioned relative to the 100x50 SVG viewBox */}
            {DEPLOYMENTS.map((d, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute flex flex-col items-center group/node z-20"
                style={{ top: `${d.coords.y}%`, left: `${d.coords.x}%` }}
              >
                {/* Multi-Ring Tech Marker */}
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.8)] z-10 relative group-hover/node:scale-125 transition-transform duration-500"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-emerald-500 rounded-full animate-ping scale-150 opacity-20"></div>
                  <div className="absolute inset-0 w-5 h-5 border border-emerald-500/30 rounded-full animate-[pulse_2s_infinite] scale-[3] opacity-5"></div>
                </div>
                
                {/* Floating Content Creator Style Label */}
                <motion.div 
                  className="absolute bottom-10 whitespace-nowrap bg-zinc-900/95 backdrop-blur-md border border-emerald-500/20 p-6 rounded-2xl shadow-3xl opacity-0 group-hover/node:opacity-100 group-hover/node:-translate-y-2 transition-all duration-500 flex flex-col items-start min-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-emerald-400 font-bold tracking-[0.4em] mb-2">// {d.country}_NODE</div>
                  <div className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none mb-1">{d.city}</div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{d.type}</div>
                  <div className="mt-4 pt-4 border-t border-white/5 w-full flex justify-between items-center">
                     <span className="text-[8px] font-mono text-emerald-500/60 uppercase">System Status: Active</span>
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Grid View */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-t border-zinc-100 pt-16 relative z-10">
            {DEPLOYMENTS.map((d, i) => (
              <div key={i} className="flex flex-col group/item cursor-default border-s border-zinc-100 ps-6">
                <span className="text-[10px] font-mono text-zinc-300 mb-2 group-hover/item:text-emerald-500 transition-colors font-bold">ACKLO_0{i+1}</span>
                <span className="text-xl font-bold text-zinc-900 tracking-tighter uppercase italic group-hover/item:translate-x-2 transition-all">{d.city}</span>
                <div className="flex items-center gap-2 mt-2">
                   <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                   <span className="text-[9px] font-mono text-emerald-600/60 uppercase tracking-widest font-bold">SOVEREIGN_NODE_VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Impact Narrative - 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DEPLOYMENTS.map((d, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group p-14 border border-zinc-100 bg-white rounded-[2.5rem] hover:border-emerald-500/50 transition-all duration-700 shadow-sm hover:shadow-2xl overflow-hidden relative min-h-[400px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 text-[12rem] font-black text-zinc-50 group-hover:text-emerald-50 opacity-40 select-none transition-colors leading-none pointer-events-none">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-emerald-600 mb-6 tracking-[0.5em] font-bold italic uppercase">// EXECUTION_SITE_0{idx+1}</div>
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 uppercase italic mb-4 group-hover:text-emerald-600 transition-colors leading-none">{d.city}</h4>
                  <p className="text-xl text-zinc-300 font-light italic tracking-tight uppercase border-b border-zinc-50 pb-8 mb-8">{d.type}</p>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6">
                     <button className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold hover:underline underline-offset-8 transition-all">Request Full Briefing</button>
                     <div className="h-px flex-1 bg-zinc-50"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
