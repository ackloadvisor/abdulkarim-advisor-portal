
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';

interface Props {
  type: 'privacy' | 'cookie' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<Props> = ({ type, onClose }) => {
  const { t } = useLanguage();
  
  if (!type) return null;

  const content = type === 'privacy' 
    ? { title: t.policies.privacy_title, text: t.policies.privacy_content }
    : { title: t.policies.cookie_title, text: t.policies.cookie_content };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 sm:p-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative z-10 w-full max-w-2xl bg-white border border-zinc-100 p-12 md:p-20 shadow-2xl rounded-[2rem] overflow-hidden"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="text-[10px] font-mono text-emerald-600 tracking-[0.5em] uppercase italic font-bold">
              // INSTITUTIONAL_POLICY_DOC
            </div>
            <button onClick={onClose} className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 mb-10 italic uppercase">
            {content.title}
          </h2>
          
          <div className="text-xl text-zinc-400 font-light leading-relaxed italic mb-14">
            {content.text}
          </div>
          
          <button 
            onClick={onClose}
            className="w-full py-5 bg-zinc-900 text-white font-mono text-[10px] tracking-[0.4em] uppercase hover:bg-emerald-600 transition-colors"
          >
            {t.policies.close}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
