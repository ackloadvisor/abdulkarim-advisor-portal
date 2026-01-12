
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'cookie' | null>(null);

  return (
    <>
      <footer className="py-24 px-[6vw] border-t border-zinc-100 bg-white flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[10px] font-mono text-zinc-200 uppercase tracking-widest italic font-bold">
          <span className="opacity-80">
            {t.footer.copyright}
          </span>
          <div className="flex items-center gap-12 opacity-80">
            <button 
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-emerald-600 transition-colors underline decoration-zinc-100 underline-offset-8 decoration-1"
            >
              {t.footer.privacy}
            </button>
            <button 
              onClick={() => setActivePolicy('cookie')}
              className="hover:text-emerald-600 transition-colors underline decoration-zinc-100 underline-offset-8 decoration-1"
            >
              {t.footer.cookie}
            </button>
          </div>
        </div>
      </footer>
      
      <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
    </>
  );
};
