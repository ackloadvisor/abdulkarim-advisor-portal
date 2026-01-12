
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { FadeIn } from './MotionWrapper';

export const ExecutiveLetter: React.FC = () => {
  const { t } = useLanguage();
  const letter = t.letter;

  return (
    <section className="relative py-48 px-[6vw] bg-white border-y border-zinc-100 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="mb-24">
          <div className="flex items-center gap-4 text-emerald-600 font-mono text-[10px] uppercase tracking-[0.8em] mb-16 font-bold">
            <span className="w-12 h-[1px] bg-emerald-500/20"></span>
            {letter.tag}
          </div>
          
          <div className="space-y-16">
            <h3 className="text-6xl md:text-8xl font-luxury italic text-zinc-900 tracking-tighter leading-none mb-12">
              {letter.salutation}
            </h3>

            <div className="space-y-10 text-zinc-400 text-3xl md:text-4xl font-luxury italic leading-relaxed font-light max-w-4xl">
              <p>{letter.personal_para1}</p>
              <p className="text-zinc-900">
                {letter.personal_para2}
              </p>
            </div>

            <div className="w-full h-[1px] my-24 bg-zinc-100"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 text-zinc-500">
              <div className="space-y-10">
                 <p className="text-2xl leading-relaxed font-light text-zinc-400 italic">{letter.context}</p>
                 <div className="border-s-4 border-emerald-500 ps-10 py-4">
                   <p className="text-3xl text-zinc-900 font-luxury italic leading-tight">
                     {letter.trust_statement}
                   </p>
                 </div>
              </div>
              <div className="flex items-end lg:justify-end">
                 <p className="text-[11px] font-mono text-zinc-300 uppercase tracking-[0.6em] leading-loose text-start lg:text-end italic font-bold">
                   // STOCKED ENCRYPTED TRANSMISSION <br/>
                   // ADVISORY INTERACTION REF: AC-7742 <br/>
                   // ROUTING: SOVEREIGN COUNCIL ALPHA
                 </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Strategic Inquiries Node */}
        <div className="mt-52">
          <FadeIn>
            <h4 className="text-[11px] font-mono text-emerald-600 uppercase tracking-[1em] mb-24 border-b border-zinc-100 pb-10 flex items-center justify-between font-bold italic">
              <span>{letter.questions_intro}</span>
              <span className="text-[9px] text-zinc-300 tracking-widest">// SECURE UPLINK ESTABLISHED</span>
            </h4>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
            {letter.inquiries.map((inquiry: any, idx: number) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group border-s border-zinc-100 ps-12 hover:border-emerald-500 transition-all duration-700 hover:bg-[#fafaf8] py-6">
                  <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.4em] mb-6 flex items-center gap-3 font-bold group-hover:text-emerald-600">
                    <span className="w-6 h-[1px] bg-zinc-200 group-hover:w-12 group-hover:bg-emerald-500 transition-all"></span>
                    PROTOCOL_INQUIRY 0{idx+1}
                  </div>
                  <h5 className="text-2xl font-medium text-zinc-900 mb-8 group-hover:text-emerald-600 transition-colors uppercase tracking-tight italic font-bold">
                    {inquiry.title}
                  </h5>
                  <p className="text-zinc-400 font-light leading-relaxed text-xl italic group-hover:text-zinc-600 transition-colors">
                    "{inquiry.text}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Sign Off */}
        <FadeIn delay={0.5} className="mt-52 border-t border-zinc-100 pt-24 relative">
          <div className="max-w-4xl space-y-16">
            <p className="text-3xl text-zinc-300 font-light leading-relaxed italic border-s border-emerald-500/20 ps-12">
              {letter.signoff}
            </p>
            <div className="pt-12">
               <p className="text-[10px] font-mono text-zinc-200 uppercase tracking-[0.6em] mb-6 font-bold italic">// AUTHENTICATED BIO-SIGNATURE VERIFIED</p>
               <p className="text-6xl md:text-[10rem] font-luxury italic text-zinc-900 select-none">
                 {letter.signature}
               </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
