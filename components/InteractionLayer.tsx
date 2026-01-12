
import React from 'react';
import { FadeIn } from './MotionWrapper';
import { buildDownloadRequest, buildInteractionRequest } from '../constants';
import { useLanguage } from '../App';

export const InteractionLayer: React.FC = () => {
  const { t } = useLanguage();
  const i = t.interaction;

  return (
    <section id="interactions" className="py-48 px-[6vw] bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="text-[10px] font-mono text-emerald-600 mb-8 tracking-[1em] uppercase font-bold italic">{t.nav.action}</div>
          <h3 className="text-heading font-medium mb-20 text-zinc-900 tracking-tighter">{i.title}</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Ask Question */}
          <FadeIn delay={0.1}>
            <a href={buildInteractionRequest('Question', 'General Inquiry')} className="block h-full group">
              <div className="p-16 border border-zinc-100 bg-[#fafaf8] rounded-[2rem] h-full flex flex-col justify-between items-center transition-all duration-500 hover:border-emerald-500/50 hover:bg-white hover:shadow-2xl">
                <div className="mb-14 opacity-20 group-hover:opacity-100 transition-all group-hover:scale-110">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500">
                        <path d="M8 9h8m-8 4h6m2 5l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold mb-4 text-zinc-900 italic tracking-tighter uppercase group-hover:text-emerald-600 transition-colors">{i.q_title}</h4>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold italic">{i.q_desc}</p>
                </div>
                <div className="mt-14 px-10 py-3 border border-zinc-200 text-[10px] font-mono tracking-[0.4em] uppercase group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all font-bold">
                    {i.q_btn}
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Provide Advice */}
          <FadeIn delay={0.2}>
            <a href={buildInteractionRequest('Advice', 'Strategic Guidance')} className="block h-full group">
              <div className="p-16 border border-emerald-500/20 bg-emerald-50 h-full flex flex-col justify-between items-center transition-all duration-500 hover:border-emerald-500/80 hover:bg-white hover:shadow-2xl rounded-[2rem]">
                <div className="mb-14 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold mb-4 text-emerald-600 italic tracking-tighter uppercase">{i.a_title}</h4>
                    <p className="text-xs text-emerald-500/60 uppercase tracking-widest font-bold italic">{i.a_desc}</p>
                </div>
                <div className="mt-14 px-10 py-3 bg-emerald-500 text-white text-[10px] font-mono tracking-[0.4em] uppercase shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-600 transition-all font-bold">
                    {i.a_btn}
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Request Download */}
          <FadeIn delay={0.3}>
            <a href={buildDownloadRequest('Full Executive Pack')} className="block h-full group">
              <div className="p-16 border border-zinc-100 bg-[#fafaf8] rounded-[2rem] h-full flex flex-col justify-between items-center transition-all duration-500 hover:border-emerald-500/50 hover:bg-white hover:shadow-2xl">
                <div className="mb-14 opacity-20 group-hover:opacity-100 transition-all group-hover:scale-110">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500">
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <div className="text-center">
                    <h4 className="text-3xl font-bold mb-4 text-zinc-900 italic tracking-tighter uppercase group-hover:text-emerald-600 transition-colors">{i.d_title}</h4>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold italic">{i.d_desc}</p>
                </div>
                <div className="mt-14 px-10 py-3 border border-zinc-200 text-[10px] font-mono tracking-[0.4em] uppercase group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all font-bold">
                    {i.d_btn}
                </div>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="mt-24">
            <p className="text-zinc-300 text-[11px] font-mono uppercase tracking-[0.4em] max-w-lg mx-auto leading-loose italic font-bold">
                {i.footer} <br/>
                <span className="text-emerald-600 underline decoration-emerald-500/20 underline-offset-8 transition-colors hover:text-emerald-700">advisor@acklo.space</span>
            </p>
        </FadeIn>
      </div>
    </section>
  );
};
