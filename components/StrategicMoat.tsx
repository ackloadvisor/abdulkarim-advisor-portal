
import React from 'react';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const StrategicMoat: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-10 md:px-20 border-y border-zinc-100 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn>
          <div className="text-[10px] font-mono text-emerald-600 mb-8 tracking-[1em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">{t.moat.tag}</div>
          <h3 className="text-heading font-medium mb-10 leading-tight text-zinc-900 tracking-tighter">
            {t.moat.title_part1} <br/>
            <span className="text-zinc-200 italic font-light">{t.moat.title_part2}</span>
          </h3>
          <p className="text-zinc-400 font-light leading-relaxed mb-8 text-2xl italic">
            {t.moat.description}
          </p>
        </FadeIn>

        <div className="space-y-10">
          {t.moat.items.map((item: any, i: number) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-12 border border-zinc-100 bg-white rounded-3xl hover:border-emerald-500/30 transition-all duration-500 group shadow-sm hover:shadow-2xl">
                <h4 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-6 font-bold italic group-hover:text-zinc-900 transition-colors">{item.title}</h4>
                <div className="text-lg font-bold mb-4 text-zinc-900 uppercase tracking-tighter italic">
                   {t.moat.threat_label}: <span className="text-emerald-500 font-light">— {item.risk}</span>
                </div>
                <p className="text-xl text-zinc-400 leading-relaxed font-light italic">"{item.logic}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
