
import React from 'react';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const ExecutiveBriefing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="briefing" className="py-40 px-[6vw] bg-white border-y border-zinc-100">
      <div className="max-w-full">
        <FadeIn className="mb-24">
          <h2 className="text-sm font-mono text-emerald-600 mb-8 tracking-widest uppercase italic font-bold">{t.briefing.tag}</h2>
          <h3 className="text-heading font-medium tracking-tighter mb-12 text-zinc-900">
            {t.briefing.title_part1} <br/>
            <span className="text-zinc-200 italic">{t.briefing.title_part2}</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <FadeIn delay={0.1} className="h-full">
              <div className="p-12 border border-zinc-100 bg-[#fafaf8] h-full group hover:border-emerald-500/30 transition-all shadow-sm hover:shadow-xl">
                <div className="text-xs font-mono text-emerald-600 mb-10 uppercase tracking-widest font-bold">{t.briefing.q1_tag}</div>
                <h4 className="text-zinc-900 text-3xl font-medium mb-8 uppercase tracking-tighter italic">{t.briefing.q1_title}</h4>
                <div className="text-xl text-zinc-400 font-light leading-relaxed italic">
                  {t.briefing.q1_text}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="h-full">
              <div className="p-12 border border-zinc-100 bg-[#fafaf8] h-full group hover:border-emerald-500/30 transition-all shadow-sm hover:shadow-xl">
                <div className="text-xs font-mono text-emerald-600 mb-10 uppercase tracking-widest font-bold">{t.briefing.q2_tag}</div>
                <h4 className="text-zinc-900 text-3xl font-medium mb-8 uppercase tracking-tighter italic">{t.briefing.q2_title}</h4>
                <div className="text-xl text-zinc-400 font-light leading-relaxed italic">
                  {t.briefing.q2_text}
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-4 h-full">
             <FadeIn delay={0.3} className="h-full">
                <div className="relative h-full border border-zinc-100 overflow-hidden group shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dayqcryf0/image/upload/v1767856670/hands-of-robot-and-human-touching-on-global-virtual-network-connection-future-interface_ge0pss.jpg" 
                    alt="The AI Synergy Layer" 
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-2 font-bold italic">Ref: AI-URBAN-INTERFACE</div>
                    <div className="text-sm text-zinc-500 italic font-medium">Empowering measurable urban behavior through digital intelligence.</div>
                  </div>
                </div>
             </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.4}>
             <div className="p-12 border border-zinc-100 bg-[#fafaf8] h-full group hover:border-emerald-500/30 transition-all shadow-sm">
              <div className="text-xs font-mono text-emerald-600 mb-10 uppercase tracking-widest font-bold">{t.briefing.q3_tag}</div>
              <h4 className="text-zinc-900 text-3xl font-medium mb-8 uppercase tracking-tighter italic">{t.briefing.q3_title}</h4>
              <div className="text-xl text-zinc-400 font-light leading-relaxed italic">
                {t.briefing.q3_text}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} className="p-16 border-s-8 border-emerald-500 bg-emerald-50 flex flex-col justify-center shadow-xl">
            <h4 className="text-xs font-mono text-emerald-600 mb-8 uppercase tracking-widest font-bold italic">{t.briefing.quote_tag}</h4>
            <div className="text-3xl md:text-5xl font-extralight leading-tight text-zinc-900 tracking-tight italic">
              "{t.briefing.quote}"
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
