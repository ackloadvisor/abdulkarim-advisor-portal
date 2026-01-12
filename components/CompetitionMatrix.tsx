
import React from 'react';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const CompetitionMatrix: React.FC = () => {
  const { t, lang } = useLanguage();

  const sectors = [
    {
      name: lang === 'en' ? "Smart City Giants" : "عمالقة المدن الذكية",
      players: lang === 'en' ? "Siemens, Honeywell, G42, Tonomus" : "سيمنز، هانيويل، G42، تونموس",
      limitation: lang === 'en' ? "Hardware-rich, Action-poor. Controlling infrastructure but lacking the behavioral 'Last Mile'." : "ثراء في الأجهزة، فقر في العمل. التحكم في البنية التحتية مع الافتقار إلى 'الميل الأخير' السلوكي.",
      gap: lang === 'en' ? "Behavioral Gap" : "الفجوة السلوكية"
    },
    {
      name: lang === 'en' ? "ESG & Data Systems" : "الاستدامة وأنظمة البيانات",
      players: lang === 'en' ? "MSCI, Watershed, Persefoni, AESG" : "MSCI، واترسيد، برسيفوني، AESG",
      limitation: lang === 'en' ? "Static Metrics, Reporting-Focused. Lacking a live operational execution layer for behavioral change." : "مقاييس ثابتة، تركيز على التقارير. الافتقار إلى طبقة تنفيذ تشغيلية حية للتغيير السلوكي.",
      gap: lang === 'en' ? "Execution Gap" : "فجوة التنفيذ"
    },
    {
      name: lang === 'en' ? "Urban Media (OOH)" : "الوسائط الحضرية",
      players: lang === 'en' ? "JCDecaux, Clear Channel, Al Arabia" : "JCDecaux، كلير شانيل، العربية",
      limitation: lang === 'en' ? "Passive Inventory. High exposure but cannot convert engagement into policy or carbon assets." : "أصول سلبية. تعرض عالٍ ولكن لا يمكن تحويل التفاعل إلى سياسات أو أصول كربونية.",
      gap: lang === 'en' ? "Outcome Gap" : "فجوة النتائج"
    }
  ];

  return (
    <section id="competition" className="py-32 px-10 md:px-20 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
          <h2 className="text-xs font-mono text-emerald-400 mb-6 tracking-widest uppercase italic">{t.competition.tag}</h2>
          <h3 className="text-4xl md:text-6xl font-medium mb-8 italic">"{t.competition.title_part1} <span className="text-white/30">{t.competition.title_part2}"</span></h3>
          <p className="max-w-3xl text-white/50 text-lg font-light leading-relaxed">
            {t.competition.description}
          </p>
        </FadeIn>

        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-mono text-white/40 tracking-widest uppercase">
                <th className="py-6 px-4">{t.competition.headers[0]}</th>
                <th className="py-6 px-4">{t.competition.headers[1]}</th>
                <th className="py-6 px-4">{t.competition.headers[2]}</th>
                <th className="py-6 px-4 text-emerald-400">{t.competition.headers[3]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sectors.map((s, i) => (
                <tr key={i} className="group hover:bg-white/5 transition-colors">
                  <td className="py-8 px-4 font-medium text-lg leading-tight">{s.name}</td>
                  <td className="py-8 px-4 text-sm text-white/50 leading-relaxed max-w-xs">{s.players}</td>
                  <td className="py-8 px-4 text-sm text-white/40 italic font-light leading-relaxed max-w-sm">{s.limitation}</td>
                  <td className="py-8 px-4">
                    <div className="text-xs font-mono text-emerald-400 border border-emerald-500/20 px-4 py-2 inline-block uppercase tracking-widest">
                      {t.competition.bridge} {s.gap}
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="bg-emerald-500/10 border-t-2 border-emerald-500/50">
                <td className="py-12 px-4 font-bold text-emerald-400 text-2xl uppercase tracking-tighter italic">
                    <div className="flex flex-col items-start leading-[0.9]">
                        <span>{t.competition.os.split(' (')[0]}</span>
                        <span className="text-xs md:text-sm font-mono tracking-[0.3em] not-italic opacity-50 mt-2 uppercase">
                           ({t.competition.os.split(' (')[1]?.replace(')', '') || 'THE OS'})
                        </span>
                    </div>
                </td>
                <td className="py-12 px-4 text-sm font-mono text-emerald-400 uppercase tracking-widest">{t.competition.orchestrator}</td>
                <td className="py-12 px-4 text-sm text-white font-light">{t.competition.complete}</td>
                <td className="py-12 px-4">
                  <span className="bg-emerald-500 text-black px-6 py-2 font-mono text-[10px] tracking-widest uppercase font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    {t.competition.layer}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
