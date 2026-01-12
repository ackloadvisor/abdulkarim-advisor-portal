
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './MotionWrapper';
import { useLanguage } from '../App';

export const ValidationSnapshot: React.FC = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { 
      url: "https://res.cloudinary.com/dayqcryf0/image/upload/v1767856327/%EC%95%84%ED%81%AC%EB%A1%9C_%EC%9D%B5%EC%8A%A4%ED%8E%A8%EB%93%9C%EB%85%B8%EC%8A%A4%EC%8A%A4%ED%83%80_5_gbuynr.jpg",
      label: "Expand North Star // Global Smart City Finalist"
    },
    { 
      url: "https://res.cloudinary.com/dayqcryf0/image/upload/v1767856245/acklo_ENS_M24_giijkj.jpg",
      label: "Institutional Presentation // Tech Validation Phase"
    }
  ];

  return (
    <section id="validation" className="py-48 px-[6vw] bg-[#fafaf8] border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Image - Climate Tech Finals */}
        <FadeIn className="mb-24">
          <div className="group border border-zinc-100 bg-white p-2 flex flex-col shadow-2xl rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-emerald-500/10">
            <div className="relative overflow-hidden w-full rounded-[2.5rem]">
              <img 
                src="https://res.cloudinary.com/dayqcryf0/image/upload/v1767856026/acklossonda_climate_tech_finals1_acklossonda_fainals1-01_cdh61d.jpg" 
                alt="Climate Tech World Cup Finals" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 block scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <div className="p-12 border-t border-zinc-50 bg-white flex justify-between items-center">
               <div className="flex items-center gap-6">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="text-[10px] font-mono text-emerald-600 uppercase tracking-[0.5em] italic font-bold">
                    // INSTITUTIONAL_VALIDATION_00 // CLIMATE_TECH_WORLD_CUP_FINALS
                  </div>
               </div>
               <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest hidden md:block">VERIFIED_ASSET_AC_01</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="text-start mb-16">
          <div className="text-[10px] font-mono text-emerald-600 mb-8 tracking-[0.8em] uppercase border-s-2 border-emerald-500 ps-6 font-bold italic">{t.validation.tag}</div>
          <h3 className="text-heading font-medium tracking-tighter mb-12 text-zinc-900">{t.validation.title}</h3>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light italic max-w-3xl leading-relaxed">
            "Our institutional grade is not just a status; it is a structural foundation for sovereign-scale deployment and long-term defensibility."
          </p>
        </FadeIn>

        {/* CORE STRATEGIC SYNTHESIS - THE IMPACT CORE */}
        <div className="mb-40 space-y-32">
          {/* CORE ENGINE REVEAL */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 group relative rounded-[3rem] overflow-hidden border border-zinc-200 bg-white p-4 shadow-3xl">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-[2.5rem]"
                >
                  <img 
                    src="https://res.cloudinary.com/dayqcryf0/image/upload/v1768111043/%EA%B7%B8%EB%A6%BC4_vtvpok.png" 
                    alt="ACKLO Shared Value Engine" 
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                <div className="absolute top-8 left-8 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">// STRATEGIC_CORE_ARCH_v4.0</span>
                </div>
              </div>
              <div className="lg:col-span-4 ps-6">
                <h4 className="text-4xl font-bold tracking-tighter text-zinc-900 italic uppercase mb-6 leading-none">
                  {t.validation.core_narrative.engine_title}
                </h4>
                <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                <p className="text-xl text-zinc-400 font-light leading-relaxed italic border-s-2 border-zinc-100 ps-8">
                  {t.validation.core_narrative.engine_desc}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* SYSTEMIC VALUE REVEAL */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 order-2 lg:order-1 text-end pe-6">
                <h4 className="text-4xl font-bold tracking-tighter text-zinc-900 italic uppercase mb-6 leading-none">
                  {t.validation.core_narrative.impact_title}
                </h4>
                <div className="w-12 h-1 bg-emerald-500 ms-auto mb-8"></div>
                <p className="text-xl text-zinc-400 font-light leading-relaxed italic border-e-2 border-zinc-100 pe-8">
                  {t.validation.core_narrative.impact_desc}
                </p>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2 group relative rounded-[3rem] overflow-hidden border border-zinc-200 bg-white p-4 shadow-3xl">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-[2.5rem]"
                >
                  <img 
                    src="https://res.cloudinary.com/dayqcryf0/image/upload/v1768110986/%EA%B7%B8%EB%A6%BC5_olaoxl.png" 
                    alt="ACKLO Systemic Impact Projection" 
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
                  <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest font-bold">// PROJECTED_SYSTEMIC_HORIZON_2030</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Large Stacked Gallery */}
        <div className="space-y-32 mb-40">
           {galleryImages.map((img, i) => (
             <FadeIn key={i} delay={i * 0.15}>
                <div className="group border border-zinc-100 bg-white p-2 flex flex-col shadow-2xl rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-emerald-500/5">
                  <div className="relative overflow-hidden w-full rounded-2xl">
                    <img 
                      src={img.url} 
                      alt={img.label} 
                      className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 block scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                  <div className="p-12 border-t border-zinc-50 bg-white flex justify-between items-end">
                    <div>
                      <div className="text-[11px] font-mono text-emerald-600 mb-3 uppercase tracking-[0.4em] italic font-bold">// AUTHENTICATED_VALIDATION_NODE_0{i + 1}</div>
                      <p className="text-3xl text-zinc-900 font-bold tracking-tight uppercase italic group-hover:text-emerald-600 transition-colors">{img.label}</p>
                    </div>
                    <div className="hidden md:block text-[10px] font-mono text-zinc-300 uppercase tracking-widest border-s border-zinc-100 ps-8 italic font-bold">
                      Institutional Record <br/>
                      Reference: Proof-2024
                    </div>
                  </div>
                </div>
             </FadeIn>
           ))}
        </div>

        {/* Validation List */}
        <div className="border border-zinc-100 overflow-hidden shadow-2xl bg-white rounded-[2rem]">
          {t.validation.items.map((item: any, i: number) => (
            <div key={i} className="flex flex-col lg:flex-row border-b border-zinc-50 last:border-0 hover:bg-emerald-50/40 transition-all duration-500 group">
              <div className="lg:w-1/4 p-12 bg-[#fafaf8] font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 flex items-center italic font-bold group-hover:text-emerald-600">
                {item.label}
              </div>
              <div className="lg:w-1/5 p-12 font-bold text-emerald-600 text-2xl flex items-center border-x border-zinc-50 tracking-tighter uppercase italic group-hover:scale-105 transition-transform">
                {item.status}
              </div>
              <div className="flex-1 p-12 text-xl text-zinc-500 font-light flex items-center leading-relaxed italic group-hover:text-zinc-700 transition-colors">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-24 flex justify-end">
          <div className="text-end border-e-4 border-emerald-500 pe-10">
            <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.6em] mb-4 italic font-bold">Authenticated Integrity Grade</p>
            <p className="text-3xl font-black tracking-[0.2em] text-zinc-900 uppercase italic">{t.validation.grade}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
