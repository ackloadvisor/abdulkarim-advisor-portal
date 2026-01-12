
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { FadeIn } from './MotionWrapper';

export const PersonalLetter: React.FC = () => {
  const { t, lang } = useLanguage();
  const letter = t.personal_letter;

  return (
    <section className="relative py-48 px-[6vw] bg-white border-y border-zinc-100 overflow-hidden">
      {/* Editorial Background Depth */}
      <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="mb-24">
          <div className="flex items-center gap-4 text-emerald-600 font-mono text-[10px] uppercase tracking-[0.8em] mb-20 font-bold italic">
            <span className="w-12 h-[1px] bg-emerald-500/20"></span>
            {letter.tag}
          </div>
          
          <div className="space-y-20">
            {/* Salutation */}
            <h3 className="text-6xl md:text-[5.5rem] font-luxury italic text-zinc-900 tracking-tighter leading-none mb-16">
              {letter.salutation},
            </h3>

            {/* Narrative Opening */}
            <div className="space-y-12 text-zinc-500 text-3xl md:text-[2.75rem] font-luxury italic leading-[1.3] font-light max-w-4xl">
              <p className="text-zinc-400">
                {letter.opening}
              </p>
              <p className="text-zinc-900">
                {letter.context}
              </p>
            </div>

            <div className="w-full h-[1px] my-32 bg-zinc-100"></div>

            {/* Strategic Bridge */}
            <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl text-zinc-400 font-light italic leading-relaxed mb-24 border-s-4 border-emerald-500 ps-12">
                   "{letter.bridge}"
                </p>
            </div>

            {/* Structured Inquiries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mt-32">
              {letter.inquiries.map((inquiry: any, idx: number) => (
                <div key={idx} className="group relative p-12 border border-zinc-50 bg-[#fafaf8]/50 rounded-[2.5rem] hover:bg-white hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-700">
                   <div className="absolute top-8 right-8 text-[4rem] font-black text-emerald-500/5 select-none leading-none group-hover:text-emerald-500/10 transition-colors">
                     {inquiry.id}
                   </div>
                   <div className="relative z-10">
                      <div className="text-[10px] font-mono text-emerald-600 uppercase tracking-[0.4em] mb-6 font-bold italic opacity-60 group-hover:opacity-100 transition-opacity">
                         PROTOCOL_INQUIRY_{inquiry.id}
                      </div>
                      <h4 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight italic uppercase group-hover:text-emerald-600 transition-colors leading-none">
                        {inquiry.title}
                      </h4>
                      <p className="text-lg text-zinc-500 font-light leading-relaxed italic group-hover:text-zinc-700 transition-colors">
                        "{inquiry.text}"
                      </p>
                   </div>
                </div>
              ))}
            </div>

            {/* Closing Narrative */}
            <div className="mt-32 pt-24 border-t border-zinc-100">
               <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed italic mb-20 max-w-4xl">
                 {letter.closing}
               </p>
               
               <div className="flex flex-col items-start gap-4">
                  <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.6em] mb-2 font-bold italic">
                    // AUTHENTICATED_BIO_SIGNATURE_VERIFIED
                  </div>
                  <div className="text-7xl md:text-[11rem] font-luxury italic text-zinc-900 leading-none select-none tracking-tighter hover:text-emerald-600 transition-colors cursor-default">
                    {letter.signature}
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
