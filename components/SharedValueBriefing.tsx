
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { FadeIn } from './MotionWrapper';
import { Counter } from './Counter';

export const SharedValueBriefing: React.FC = () => {
  const { t } = useLanguage();
  const sv = t.sharedValue;

  return (
    <section id="shared-value" className="py-48 px-[6vw] bg-white relative overflow-hidden border-y border-zinc-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="mb-32">
          <div className="text-[10px] font-mono text-emerald-600 uppercase tracking-[0.8em] mb-10 font-bold italic">{sv.tag}</div>
          <h2 className="text-huge font-bold tracking-tighter leading-[0.85] mb-12 text-zinc-900">
            {sv.title.split(' ')[0]} <br/>
            <span className="text-zinc-200 italic font-light">{sv.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-3xl md:text-5xl font-extralight text-zinc-400 tracking-tight leading-tight max-w-6xl italic border-s-8 border-emerald-500 ps-12">
            "{sv.intro}"
          </p>
        </FadeIn>

        {/* Core Philosophy: The Profit Loop */}
        <div className="mb-48">
           <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-[0.6em] mb-16 italic font-bold">{sv.core_philosophy.title}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl">
              {sv.core_philosophy.items.map((item: any, i: number) => (
                 <div key={i} className="bg-white p-12 hover:bg-emerald-50 transition-all duration-500 group">
                    <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-10 group-hover:text-emerald-600 transition-colors font-bold italic">// ACTOR_NODE_0{i+1}</div>
                    <div className="text-3xl font-black text-zinc-900 italic tracking-tighter uppercase mb-4">{item.actor}</div>
                    <div className="text-xs font-mono text-emerald-600/60 uppercase tracking-widest mb-8 font-bold">{item.action}</div>
                    <div className="h-px w-10 bg-zinc-100 mb-8 group-hover:w-full transition-all duration-700"></div>
                    <p className="text-xl text-zinc-400 font-light italic leading-snug group-hover:text-zinc-900 transition-colors">"{item.benefit}"</p>
                 </div>
              ))}
           </div>
        </div>

        {/* Institutional Metrics Grid */}
        <div className="mb-48 pt-32 border-t border-zinc-100">
          <FadeIn>
            <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-[0.6em] mb-20 italic font-bold">{sv.metrics_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {[
                { ...sv.valuation, s: "$" },
                { ...sv.funding, s: "$" },
                { ...sv.revenue, s: "$" },
                { ...sv.social, s: "$" },
                { ...sv.exit, s: "$" }
              ].map((m, i) => (
                <div key={i} className="flex flex-col group p-10 bg-[#fafaf8] rounded-3xl border border-zinc-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-8 group-hover:text-emerald-600 transition-colors font-bold italic">{m.label}</span>
                  <div className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter flex items-baseline leading-none">
                    <span className="text-2xl text-emerald-500 mr-1 italic font-light">{m.s}</span>
                    <Counter value={m.value} suffix={m.suffix} delay={i * 0.1} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-300 uppercase mt-6 italic leading-tight font-bold group-hover:text-zinc-400 transition-colors">{m.detail}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 10-Year Impact Table */}
        <div className="mb-48">
           <FadeIn>
              <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-[0.6em] mb-16 italic font-bold">{sv.impact_breakdown.title}</h3>
              <div className="overflow-hidden rounded-[2.5rem] border border-zinc-100 shadow-2xl bg-[#fafaf8]">
                 <table className="w-full text-start border-collapse">
                    <thead>
                       <tr className="bg-white border-b border-zinc-100 text-[10px] font-mono text-zinc-300 tracking-widest uppercase">
                          <th className="py-10 px-12 text-start font-bold italic">{sv.impact_breakdown.headers[0]}</th>
                          <th className="py-10 px-12 text-start font-bold italic">{sv.impact_breakdown.headers[1]}</th>
                          <th className="py-10 px-12 text-start font-bold italic text-emerald-600">{sv.impact_breakdown.headers[2]}</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                       {sv.impact_breakdown.rows.map((row: any, i: number) => (
                          <tr key={i} className="hover:bg-white transition-all duration-500 group">
                             <td className="py-12 px-12 font-bold text-zinc-900 text-2xl tracking-tighter italic uppercase">{row.lever}</td>
                             <td className="py-12 px-12 font-mono text-xs text-zinc-400 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">{row.scale}</td>
                             <td className="py-12 px-12 font-black text-emerald-600 text-3xl tracking-tighter italic uppercase group-hover:scale-110 origin-left transition-transform">{row.revenue}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </FadeIn>
        </div>

        {/* Validation Stack */}
        <div className="mb-48 border-t border-zinc-100 pt-32">
           <h3 className="text-sm font-mono text-emerald-600 uppercase tracking-[0.6em] mb-20 italic font-bold">{sv.validation_title}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sv.validations.map((v: any, i: number) => (
                 <FadeIn key={i} delay={i * 0.05}>
                    <div className="group flex items-start gap-8 p-10 border border-zinc-50 rounded-3xl hover:border-emerald-500/20 hover:bg-[#fafaf8] transition-all duration-500">
                       <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center font-mono text-xs italic shrink-0 rounded-xl group-hover:bg-emerald-500 transition-colors">
                          {i+1}
                       </div>
                       <div>
                          <div className="text-xl font-black text-zinc-900 italic tracking-tighter uppercase mb-2">{v.label}</div>
                          <p className="text-sm text-zinc-400 font-light italic leading-relaxed uppercase tracking-tight">{v.desc}</p>
                       </div>
                    </div>
                 </FadeIn>
              ))}
           </div>
        </div>

        {/* Innovation Conclusion / Pitch */}
        <FadeIn className="p-24 bg-zinc-900 rounded-[4rem] text-white relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.3)] group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950"></div>
            <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1">
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-10 font-bold italic">{sv.innovation_title}</div>
                <p className="text-4xl md:text-6xl font-luxury italic text-white leading-tight tracking-tight mb-14">
                  "{sv.innovation_text}"
                </p>
                <div className="flex items-center gap-8">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_20px_#10b981]"></div>
                  <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-[0.5em] font-bold italic">ACKLO Execution Mechanism: ENABLED</span>
                </div>
              </div>
              <div className="hidden lg:flex w-full md:w-1/3 aspect-square bg-white/5 rounded-full items-center justify-center backdrop-blur-3xl group-hover:rotate-12 transition-transform duration-1000 border border-white/5">
                  <span className="text-[10rem] text-emerald-500/20 font-black tracking-tighter">OS</span>
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};
