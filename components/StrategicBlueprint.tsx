
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../App';
import { FadeIn } from './MotionWrapper';
import { Counter } from './Counter';

const WordReveal: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, rotateX: -40 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: delay + (i * 0.1),
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block mr-[0.2em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const StrategicBlueprint: React.FC = () => {
  const { t } = useLanguage();
  const bp = t.blueprint;
  const imp = bp.sections.impact;
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const ghostTextX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section 
      id="strategic-blueprint" 
      ref={containerRef}
      className="py-60 px-[6vw] bg-[#fafaf8] border-y border-zinc-200 relative overflow-hidden"
    >
      {/* Background Media Depth Layers */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center overflow-hidden"
      >
        <motion.span 
          style={{ x: ghostTextX }}
          className="text-[40vw] font-black text-emerald-600 whitespace-nowrap leading-none tracking-tighter"
        >
          {imp.title.split(',')[1]?.trim().toUpperCase() || 'REFRAMED'}
        </motion.span>
      </motion.div>

      <div className="max-w-full relative z-10 mx-auto">
        <FadeIn className="mb-32">
          <div className="text-[10px] font-mono text-emerald-600 mb-10 tracking-[1em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">{bp.tag}</div>
          <h2 className="text-huge font-bold tracking-tighter leading-[0.85] mb-12 text-zinc-900">
            {bp.title.split(' ')[0]} <br/>
            <span className="text-zinc-300 italic font-light">{bp.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-3xl text-zinc-400 font-extralight italic max-w-3xl leading-snug tracking-tight">
            "{bp.subtitle}"
          </p>
        </FadeIn>

        {/* Section 1: Regional Deployment Grid */}
        <div className="mb-64">
           <FadeIn className="mb-20">
              <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-[0.8em] border-b border-zinc-200 pb-10 flex justify-between items-end">
                <span>01 // {bp.sections.regional.title}</span>
                <span className="text-[10px] text-zinc-300 tracking-widest hidden md:block uppercase font-bold">SOVEREIGN_NODE_ESTABLISHMENT_2026</span>
              </h3>
           </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl rounded-2xl overflow-hidden">
              {bp.sections.regional.items.map((item: any, i: number) => (
                 <div key={i} className="bg-white p-16 hover:bg-emerald-50 transition-all duration-700 group relative overflow-hidden">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                       <div>
                          <div className="flex justify-between items-start mb-12">
                             <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.4em] group-hover:text-emerald-600 transition-colors italic font-bold">Region_Protocol.0{i+1}</div>
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                          </div>
                          <h4 className="text-5xl font-bold text-zinc-900 mb-8 tracking-tighter italic uppercase group-hover:text-emerald-600 transition-colors">{item.location}</h4>
                          <div className="text-xs font-mono text-emerald-600 mb-10 uppercase tracking-[0.2em] border-s border-emerald-200 ps-5 font-bold">{item.focus}</div>
                       </div>
                       <p className="text-xl text-zinc-400 font-light leading-relaxed italic group-hover:text-zinc-600 transition-colors">"{item.desc}"</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Section 3: Institutional Impact Logic - Carbon Reduction Infographic */}
        <div className="pt-32 border-t border-zinc-200">
           <div className="mb-24 relative overflow-visible">
              <FadeIn>
                <div className="text-[10px] font-mono text-emerald-600 mb-8 tracking-[1em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">{imp.tag}</div>
                
                <div className="relative">
                  <WordReveal 
                    text={imp.title.split(',')[0] + ","} 
                    className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase italic text-zinc-900"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-2 md:h-4 bg-emerald-500 origin-left mt-4 mb-4"
                  />
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex items-center gap-8"
                  >
                    <span className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase animated-gradient-text drop-shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                      {imp.title.split(',')[1]}
                    </span>
                    <div className="flex-1 h-px bg-zinc-200"></div>
                  </motion.div>
                </div>
              </FadeIn>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-48 items-center">
              {/* Left Column: Numeric Performance 22% Carbon Reduction */}
              <div className="lg:col-span-5 flex flex-col justify-center relative">
                 <FadeIn>
                    <div className="relative group p-12 bg-white rounded-[3rem] shadow-2xl border border-zinc-50 overflow-hidden">
                       <div className="absolute -inset-20 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
                       
                       {/* Animated Wave / Carbon Absorption Visual */}
                       <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <motion.path 
                              d="M0 80 Q 25 70 50 80 T 100 80 V 100 H 0 Z" 
                              fill="#10b981"
                              animate={{ 
                                d: [
                                  "M0 80 Q 25 70 50 80 T 100 80 V 100 H 0 Z", 
                                  "M0 80 Q 25 90 50 80 T 100 80 V 100 H 0 Z", 
                                  "M0 80 Q 25 70 50 80 T 100 80 V 100 H 0 Z"
                                ],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                           />
                         </svg>
                       </div>

                       <motion.div 
                         className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-[0.7] animated-gradient-text flex items-baseline relative"
                       >
                         <Counter value={22} suffix="" />
                         <span className="text-[0.25em] md:text-[0.2em] font-extralight text-zinc-300 ms-2">%</span>
                       </motion.div>
                       
                       <div className="mt-12 space-y-4 relative z-10">
                          <div className="w-12 h-1 bg-emerald-500 mb-6"></div>
                          <p className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none italic">
                            EMISSIONS <br/>
                            REDUCTION <br/>
                            THROUGH <br/>
                            BEHAVIOR
                          </p>
                          <p className="text-[10px] font-mono text-emerald-600 uppercase tracking-[0.4em] font-bold italic mt-10">VERIFIED OPERATIONAL BENCHMARK</p>
                       </div>
                    </div>
                 </FadeIn>
              </div>

              {/* Right Column: Institutional Data Table */}
              <div className="lg:col-span-7">
                 <FadeIn delay={0.2}>
                    <div className="bg-white rounded-3xl border border-zinc-100 divide-y divide-zinc-50 shadow-2xl overflow-hidden">
                       {imp.table.map((row: any, i: number) => (
                          <div key={i} className="grid grid-cols-1 md:grid-cols-12 items-center hover:bg-emerald-50/40 transition-all duration-500 group relative">
                             <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.02] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="md:col-span-5 p-12 border-e border-zinc-50 text-[10px] font-mono text-zinc-300 uppercase tracking-[0.4em] italic group-hover:text-emerald-600 font-bold z-10">
                                {row.label}
                             </div>
                             <div className="md:col-span-7 p-12 text-2xl md:text-3xl font-light text-zinc-900 italic tracking-tight uppercase group-hover:translate-x-3 transition-transform z-10">
                                {row.value}
                             </div>
                          </div>
                       ))}
                    </div>
                    <div className="mt-16 space-y-10 text-xl md:text-2xl text-zinc-400 font-extralight italic leading-relaxed border-s border-emerald-200 ps-12">
                       <p className="hover:text-zinc-600 transition-colors">Conventionally, behavioral change is seen as "soft." ACKLO makes it "hard" infrastructure data.</p>
                       <p className="hover:text-zinc-600 transition-colors">By operationalizing the urban domain, we convert citizen participation into a verifiable asset for sovereign net-zero goals.</p>
                    </div>
                 </FadeIn>
              </div>
           </div>

           {/* Logic Pillars: Modern Content Card Grid */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl">
              {imp.pillars.map((p: any, i: number) => (
                 <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-white p-14 hover:bg-emerald-50 transition-all duration-700 h-full group relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-100 group-hover:bg-emerald-500 transition-all duration-700"></div>
                       <div className="text-[10px] font-mono text-emerald-600/30 mb-12 tracking-[0.5em] italic font-bold">Impact_Pillar.0{i+1}</div>
                       <h5 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 tracking-tighter italic uppercase group-hover:text-emerald-600 transition-colors">{p.title}</h5>
                       <p className="text-lg text-zinc-400 font-light leading-relaxed italic group-hover:text-zinc-600 transition-colors">"{p.desc}"</p>
                    </div>
                 </FadeIn>
              ))}
           </div>
           
           {/* Section Conclusion Quote */}
           <FadeIn delay={0.4} className="mt-32 text-center max-w-4xl mx-auto">
              <div className="h-px w-20 bg-emerald-500/30 mx-auto mb-16"></div>
              <p className="text-3xl md:text-5xl font-luxury italic text-zinc-300 leading-tight tracking-tight">
                "Behavioral change is not an auxiliary contribution to Net Zero. When structurally integrated, it becomes a material lever."
              </p>
           </FadeIn>
        </div>
      </div>
    </section>
  );
};
