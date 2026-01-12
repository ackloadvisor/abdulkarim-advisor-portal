
import React from 'react';
import { useLanguage } from '../App';

export const Navigation: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 md:px-20 py-8 flex justify-between items-center bg-white/40 backdrop-blur-xl border-b border-black/5">
      <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center transition-transform group-hover:rotate-45">
          <div className="w-4 h-4 bg-white"></div>
        </div>
        <span className="font-bold tracking-tighter text-3xl uppercase leading-none text-zinc-900">Acklo</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-12 text-[10px] font-mono tracking-[0.4em] text-zinc-400">
        <a href="#briefing" className="hover:text-emerald-600 transition-all uppercase">{t.nav.briefing}</a>
        <a href="#sovereign-dossier" className="hover:text-emerald-600 transition-all uppercase">Dossier</a>
        <a href="#validation" className="hover:text-emerald-600 transition-all uppercase">{t.nav.validation}</a>
        <a href="#architecture" className="hover:text-emerald-600 transition-all uppercase">{t.nav.architecture}</a>
        <a href="#interactions" className="hover:text-emerald-600 transition-all text-emerald-600 uppercase font-bold">{t.nav.action}</a>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center border border-black/10 rounded-full overflow-hidden bg-white/50">
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 text-[10px] font-mono transition-all ${lang === 'en' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('ar')}
            className={`px-4 py-1.5 text-[10px] font-mono transition-all ${lang === 'ar' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
          >
            AR
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full"></div>
          <span className="text-[8px] font-mono text-emerald-600/80 uppercase tracking-widest">{t.nav.session}</span>
        </div>
      </div>
    </nav>
  );
};
