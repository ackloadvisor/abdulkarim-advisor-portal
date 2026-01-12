
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';

interface Props {
  onAccept: () => void;
}

export const NDABar: React.FC<Props> = ({ onAccept }) => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if cookies already accepted
    const accepted = document.cookie.split('; ').find(row => row.startsWith('acklo_cookies='));
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    onAccept();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 left-10 right-10 z-[100] bg-zinc-900 border border-emerald-500/30 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex-shrink-0 bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 rounded-lg">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">{t.cookie_consent.title}</h4>
              <p className="text-xs text-white/50 max-w-xl font-light leading-relaxed italic">
                {t.cookie_consent.text}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
             <button 
                onClick={() => setVisible(false)}
                className="px-6 py-3 text-[10px] font-mono tracking-widest text-white/40 hover:text-white transition-colors uppercase font-bold"
             >
                {t.cookie_consent.decline}
             </button>
             <button 
                onClick={handleAccept}
                className="px-8 py-3 bg-emerald-500 text-black text-[10px] font-mono tracking-widest hover:bg-emerald-400 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] uppercase font-bold"
             >
                {t.cookie_consent.accept}
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
