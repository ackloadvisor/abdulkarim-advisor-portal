
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const SovereignDossier: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="sovereign-dossier" className="py-48 px-[6vw] bg-zinc-950 text-white border-y border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#10b981_0%,transparent_50%)] blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="mb-32">
          <div className="text-[10px] font-mono text-emerald-400 mb-8 tracking-[1em] uppercase font-bold italic">// STRATEGIC_DOSSIER_v3.0</div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">
            Execution <br/>
            <span className="text-white/20">Protocol.</span>
          </h2>
        </FadeIn>

        {/* SECTION 1: ELEVATOR PITCH */}
        <div className="mb-48">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-8">
                <div className="text-xs font-mono text-emerald-400 mb-10 uppercase tracking-widest font-bold italic">{t.pitch.tag}</div>
                <h3 className="text-4xl md:text-6xl font-luxury italic text-white leading-tight tracking-tight mb-12">
                  {t.pitch.title}
                </h3>
                <div className="border-s-4 border-emerald-500 ps-12">
                  <p className="text-3xl md:text-5xl font-extralight text-white/80 leading-snug tracking-tight italic">
                    "{t.pitch.text}"
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 flex items-center justify-center">
                 <div className="w-full max-w-[300px] aspect-square border border-white/10 rounded-full flex items-center justify-center relative group">
                    <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full animate-pulse"></div>
                    <div className="text-center">
                       <div className="text-[8rem] font-black text-emerald-500/10 leading-none">60</div>
                       <div className="text-[10px] font-mono text-emerald-400 tracking-[0.5em] font-bold uppercase">Impact_Ready</div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* SECTION 2: KPI DASHBOARD */}
        <div className="mb-48 pt-32 border-t border-white/10">
          <FadeIn>
            <div className="text-xs font-mono text-emerald-400 mb-10 uppercase tracking-widest font-bold italic">{t.kpi.tag}</div>
            <h3 className="text-4xl md:text-6xl font-luxury italic text-white leading-tight tracking-tight mb-16 uppercase">
              {t.kpi.title}
            </h3>
            
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-start border-collapse">
                 <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                       <th className="py-10 px-12 text-start font-bold italic">{t.kpi.headers[0]}</th>
                       <th className="py-10 px-12 text-start font-bold italic">{t.kpi.headers[1]}</th>
                       <th className="py-10 px-12 text-start font-bold italic text-emerald-400">{t.kpi.headers[2]}</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {t.kpi.rows.map((row: any, i: number) => (
                       <tr key={i} className="hover:bg-white/5 transition-all duration-500 group">
                          <td className="py-12 px-12 font-bold text-white text-2xl tracking-tighter italic uppercase">{row[0]}</td>
                          <td className="py-12 px-12 font-mono text-xs text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">{row[1]}</td>
                          <td className="py-12 px-12 font-black text-emerald-500 text-3xl tracking-tighter italic uppercase group-hover:scale-105 origin-left transition-transform">{row[2]}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
            </div>
            <div className="mt-20 text-center">
               <p className="text-3xl md:text-5xl font-luxury italic text-emerald-400">"{t.kpi.statement}"</p>
            </div>
          </FadeIn>
        </div>

        {/* SECTION 3: Q&A MATRIX */}
        <div className="mb-16 pt-32 border-t border-white/10">
          <FadeIn>
            <div className="text-xs font-mono text-emerald-400 mb-10 uppercase tracking-widest font-bold italic">// {t.qa_section.tag}</div>
            <h3 className="text-4xl md:text-6xl font-luxury italic text-white leading-tight tracking-tight mb-16 uppercase">
              {t.qa_section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {t.qa_section.items.map((item: any, i: number) => (
                  <div key={i} className="p-10 border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 group rounded-[2rem] flex flex-col h-full">
                     <div className="text-[9px] font-mono text-white/20 mb-6 uppercase tracking-widest group-hover:text-emerald-400 transition-colors italic font-bold">// NODE_0{i+1}</div>
                     <h4 className="text-xl font-bold text-white mb-6 italic leading-tight group-hover:text-emerald-400 transition-colors">Q: {item.q}</h4>
                     <div className="h-px w-8 bg-white/10 mb-6 group-hover:w-full group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                     <p className="text-base text-white/40 font-light leading-relaxed italic group-hover:text-white transition-colors">A: {item.a}</p>
                  </div>
               ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
