
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { FadeIn } from './MotionWrapper';

export const CompetitiveMemorandum: React.FC = () => {
  const { t, lang } = useLanguage();
  const memo = t.memo;

  const tableData = [
    memo.silo_1,
    memo.silo_2,
    memo.silo_3,
    memo.acklo_row
  ];

  return (
    <section id="competition-memo" className="py-48 px-[6vw] bg-white border-t border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/[0.01] pointer-events-none border-s border-emerald-500/5"></div>
      
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-32">
          <div className="text-[10px] font-mono text-emerald-600 mb-10 tracking-[0.8em] uppercase border-s-2 border-emerald-500 ps-6 font-bold">{memo.tag}</div>
          <div className="space-y-6 font-mono text-xs text-zinc-400 uppercase tracking-widest border-s border-zinc-200 ps-10">
            <p className="text-zinc-900 font-bold">{memo.subject}</p>
            <p>{memo.sector}</p>
            <p>{memo.date}</p>
          </div>
        </FadeIn>

        {/* Executive Summary */}
        <FadeIn className="mb-40">
          <h4 className="text-2xl font-medium text-emerald-600 mb-12 uppercase tracking-tight italic font-bold">{memo.summary_title}</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="text-zinc-400 text-2xl font-light leading-relaxed text-justify space-y-8 italic">
              <p>{memo.summary_text}</p>
            </div>
            <div className="p-16 bg-[#fafaf8] border border-zinc-100 italic font-luxury text-3xl md:text-4xl text-zinc-900 leading-snug tracking-tight rounded-3xl shadow-xl">
              "{memo.summary_text_2}"
            </div>
          </div>
        </FadeIn>

        {/* Silos Analysis */}
        <FadeIn className="mb-32">
          <h4 className="text-2xl font-medium text-emerald-600 mb-8 uppercase tracking-tight italic font-bold">{memo.silos_title}</h4>
          <p className="text-zinc-300 mb-16 italic text-2xl font-light tracking-tight">{memo.silos_subtitle}</p>
          
          <div className="overflow-x-auto border border-zinc-100 bg-[#fafaf8] rounded-3xl shadow-2xl overflow-hidden">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="bg-white border-b border-zinc-100 text-[10px] font-mono text-zinc-300 tracking-widest uppercase">
                  <th className="py-10 px-10 border-e border-zinc-50 text-start">{memo.table_headers[0]}</th>
                  <th className="py-10 px-10 border-e border-zinc-50 text-start">{memo.table_headers[1]}</th>
                  <th className="py-10 px-10 border-e border-zinc-50 text-start">{memo.table_headers[2]}</th>
                  <th className="py-10 px-10 text-start">{memo.table_headers[3]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {tableData.map((row: any, idx: number) => {
                  const isAcklo = idx === tableData.length - 1;
                  return (
                    <tr key={idx} className={`${isAcklo ? 'bg-emerald-50' : 'hover:bg-white'} transition-colors group`}>
                      <td className={`py-12 px-10 border-e border-zinc-50 font-medium ${isAcklo ? 'text-emerald-600 text-4xl font-bold' : 'text-zinc-900 text-2xl'} tracking-tighter italic`}>
                        {isAcklo ? (
                          <motion.div
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="flex flex-col items-start leading-[0.85]"
                          >
                            <span>{row.name.split(' (')[0]}</span>
                            <span className="text-lg md:text-xl font-mono tracking-[0.2em] not-italic opacity-40 mt-2 uppercase">
                               ({row.name.split(' (')[1]?.replace(')', '') || 'THE OS'})
                            </span>
                          </motion.div>
                        ) : (
                          row.name
                        )}
                      </td>
                      <td className="py-12 px-10 border-e border-zinc-50 text-[11px] font-mono text-emerald-600/60 uppercase tracking-[0.2em] italic font-bold">
                        {row.function}
                      </td>
                      <td className="py-12 px-10 border-e border-zinc-50 max-w-sm">
                        <div className="text-[10px] font-mono text-emerald-600 mb-3 uppercase tracking-widest italic font-bold">{row.gap}</div>
                        <p className="text-lg text-zinc-400 leading-relaxed italic font-light">{row.gap_desc}</p>
                      </td>
                      <td className="py-12 px-10 text-base text-zinc-300 font-light leading-relaxed max-w-xs italic uppercase group-hover:text-zinc-500 transition-colors">
                        {row.players}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
