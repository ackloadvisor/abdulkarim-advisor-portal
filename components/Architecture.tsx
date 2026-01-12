
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const Architecture: React.FC = () => {
  // Fix: Destructured lang from useLanguage to resolve "Cannot find name 'lang'" error
  const { t, lang } = useLanguage();
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="architecture" ref={containerRef} className="py-60 px-[6vw] bg-white relative overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Sticky Left Pillar: The Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <FadeIn>
              <div className="text-[10px] font-mono text-emerald-600 mb-10 tracking-[1em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">
                {t.architecture.tag}
              </div>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-zinc-900 mb-12 uppercase italic">
                ENGINEERED <br/>
                FOR <span className="animated-gradient-text">AI-DRIVEN</span> <br/>
                SCALABILITY.
              </h3>
              <p className="text-2xl text-zinc-400 font-extralight italic max-w-md leading-relaxed border-t border-zinc-100 pt-10">
                "{lang === 'ar' ? 'مصمم للتحكم السيادي، تضمن بنية آكلو تكامل البيانات.' : 'The Universal Data Orchestrator translates raw urban entropy into verified governance assets.'}"
              </p>
            </FadeIn>
          </div>

          {/* Right Column: The Tech Stack nodes */}
          <div className="lg:col-span-7 relative">
            {/* Animated Connecting Path */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-zinc-100 hidden md:block">
              <motion.div 
                style={{ scaleY: pathLength, originY: 0 }}
                className="w-full h-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
              />
            </div>

            <div className="space-y-12">
              {t.architecture.items.map((item: any, idx: number) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="relative md:ps-20 group">
                    {/* Floating Tech Marker */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                       <div className="w-12 h-12 bg-white border border-zinc-100 rounded-full flex items-center justify-center z-20 group-hover:border-emerald-500 transition-colors shadow-sm">
                          <span className="text-[10px] font-mono text-zinc-300 group-hover:text-emerald-600 font-bold transition-colors">0{idx+1}</span>
                       </div>
                       {/* Animated Wave on active node */}
                       <div className="absolute w-20 h-20 bg-emerald-500/5 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>

                    <div className="bg-[#fafaf8] border-t-2 border-zinc-100 p-12 rounded-3xl group-hover:bg-white group-hover:border-emerald-500 group-hover:shadow-3xl transition-all duration-700 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8">
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                             <span className="text-[8px] font-mono text-emerald-600 uppercase tracking-widest font-bold">STATUS_ACTIVE</span>
                          </div>
                       </div>
                       
                       <div className="relative z-10">
                          <div className="text-[9px] font-mono text-zinc-300 mb-6 uppercase tracking-[0.4em] font-bold italic group-hover:text-emerald-600 transition-colors">
                            // ORCHESTRATION_LAYER.NODE_0{idx+1}
                          </div>
                          <h4 className="text-4xl font-black text-zinc-900 mb-6 tracking-tighter italic uppercase transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xl text-zinc-400 font-light leading-relaxed italic max-w-lg group-hover:text-zinc-600 transition-colors">
                            {item.desc}
                          </p>
                       </div>
                       
                       {/* Subtle Background Glow */}
                       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Global Orchestrator Visual */}
        <div className="mt-40">
           <FadeIn>
              <div className="group relative rounded-[4rem] overflow-hidden border border-zinc-100 bg-white p-2 shadow-huge">
                 <div className="relative rounded-[3.5rem] overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/dayqcryf0/image/upload/v1767856276/out_1_%EB%B3%B5%EC%82%AC%EB%B3%B8_2_eownmn.png" 
                      alt="Full System Diagram" 
                      className="w-full h-auto grayscale-50 group-hover:grayscale-0 transition-all duration-1000 block scale-[1.01] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-zinc-900/40 opacity-40"></div>
                 </div>
                 
                 {/* Detail Labeling */}
                 <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row items-end justify-between gap-10">
                    <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] max-w-xl shadow-2xl">
                       <div className="text-[10px] font-mono text-emerald-400 mb-6 uppercase tracking-[0.6em] font-bold italic">
                          // UNIVERSAL_DATA_ORCHESTRATOR
                       </div>
                       <p className="text-2xl text-white font-light leading-snug italic tracking-tight">
                         "{t.architecture.orchestrator}: Synchronizing urban entropy into auditable sovereign assets across all regional deployment nodes."
                       </p>
                    </div>
                    <div className="text-end hidden lg:block">
                       <p className="text-[9px] font-mono text-white/20 uppercase tracking-[1em] mb-4 font-bold italic">TRANSMISSION_PROTOCOL_04-B</p>
                       <div className="flex justify-end gap-1">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-8 bg-emerald-500/20 rounded-full overflow-hidden relative">
                             <motion.div 
                               animate={{ y: ["100%", "0%", "100%"] }} 
                               transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                               className="absolute inset-0 bg-emerald-500"
                             />
                          </div>)}
                       </div>
                    </div>
                 </div>
              </div>
           </FadeIn>
        </div>
      </div>
    </section>
  );
};
