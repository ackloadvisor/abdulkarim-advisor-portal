import React, { useState, useEffect, createContext, useContext } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CorporateVideo } from './components/CorporateVideo';
import { StrategicIntroVideo } from './components/StrategicIntroVideo';
import { CESPromoVideo } from './components/CESPromoVideo';
import { ExecutiveLetter } from './components/ExecutiveLetter';
import { PersonalLetter } from './components/PersonalLetter';
import { ExecutiveBriefing } from './components/ExecutiveBriefing';
import { Architecture } from './components/Architecture';
import { Deployments } from './components/Deployments';
import { InteractionLayer } from './components/InteractionLayer';
import { CompetitiveMemorandum } from './components/CompetitiveMemorandum';
import { StrategicMoat } from './components/StrategicMoat';
import { ValidationSnapshot } from './components/ValidationSnapshot';
import { SharedValueBriefing } from './components/SharedValueBriefing';
import { StrategicBlueprint } from './components/StrategicBlueprint';
import { SovereignDossier } from './components/SovereignDossier';
import { Footer } from './components/Footer';
import { NDAPage } from './components/NDAPage';
import { NDABar } from './components/NDABar';
import { buildInteractionRequest, TRANSLATIONS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './components/MotionWrapper';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Language>('en');

  // ✅ 핵심: Arabic이 불완전해도 English로 fallback
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    const ndaAgreed = document.cookie
      .split('; ')
      .find(row => row.startsWith('acklo_nda='));
    if (ndaAgreed?.split('=')[1] === 'agreed') {
      setHasAgreed(true);
    }

    const cookiesAgreed = document.cookie
      .split('; ')
      .find(row => row.startsWith('acklo_cookies='));
    if (cookiesAgreed?.split('=')[1] === 'accepted') {
      setCookiesAccepted(true);
    }

    const savedLang = localStorage.getItem('acklo_lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      setLang(savedLang);
    }

    setLoading(false);
  }, []);

  const handleAgreeNDA = () => {
    document.cookie = 'acklo_nda=agreed; path=/; max-age=86400';
    setHasAgreed(true);
  };

  const handleAcceptCookies = () => {
    document.cookie = 'acklo_cookies=accepted; path=/; max-age=31536000';
    setCookiesAccepted(true);
  };

  const toggleLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('acklo_lang', l);
  };

  if (loading) return null;

  // ✅ 안전한 conclusion 처리
  const conclusion = t.conclusion || TRANSLATIONS.en.conclusion;
  const conclusionTitle =
    conclusion.title || TRANSLATIONS.en.conclusion.title;
  const titleParts = conclusionTitle.split(',');

  const finalStatement =
    t.final_statement || TRANSLATIONS.en.final_statement;

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLang, t }}>
      <div
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className="bg-[#fafaf8] min-h-screen text-zinc-900 selection:bg-emerald-500 selection:text-white overflow-x-hidden"
      >
        <AnimatePresence>
          {!hasAgreed && <NDAPage onAgree={handleAgreeNDA} />}
        </AnimatePresence>

        <Navigation />

        <main
          className={`transition-all duration-1000 ${
            hasAgreed ? 'opacity-100 blur-0' : 'opacity-0 blur-xl scale-95'
          }`}
        >
          <Hero />
          <PersonalLetter />
          <StrategicIntroVideo />
          <CorporateVideo />
          <ExecutiveBriefing />
          <SovereignDossier />
          <ValidationSnapshot />
          <Architecture />
          <StrategicBlueprint />
          <CESPromoVideo />
          <CompetitiveMemorandum />
          <StrategicMoat />
          <Deployments />

          <section className="py-24 px-[6vw] bg-white border-y border-zinc-100">
            <FadeIn>
              <div className="relative w-full max-w-7xl mx-auto aspect-video border border-zinc-200 bg-zinc-50 shadow-2xl overflow-hidden">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dayqcryf0&public_id=acklopromo3_support_SDG_hximp1&profile=cld-default"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="ACKLO Strategic Goals"
                />
              </div>
            </FadeIn>
          </section>

          <SharedValueBriefing />

          {/* ✅ Conclusion Section (Arabic-safe) */}
          <section className="py-60 bg-[#fafaf8] px-[6vw] border-y border-zinc-200">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-full"
            >
              <div className="text-xs font-mono text-emerald-600 mb-16 uppercase tracking-[0.8em] font-bold italic">
                {conclusion.tag}
              </div>

              <h4 className="text-heading font-semibold mb-16 tracking-tighter leading-[0.9] text-zinc-900 uppercase italic">
                {titleParts[0]}
                <br />
                <span className="text-zinc-300 italic font-light">
                  {titleParts[1] || ''}
                </span>
              </h4>

              <h1 className="text-zinc-400 mb-20 font-extralight text-3xl md:text-5xl max-w-6xl leading-tight tracking-tight italic">
                "{conclusion.subtext}"
              </h1>

              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <a
                  href={buildInteractionRequest(
                    'Response',
                    'Abdulkarim Ibrahim Al Nafie Briefing'
                  )}
                  className="px-20 py-10 bg-emerald-500 text-white font-mono text-sm font-bold tracking-[0.5em] uppercase"
                >
                  {conclusion.submit}
                </a>

                <a
                  href="#interactions"
                  className="px-20 py-10 border border-zinc-200 text-zinc-400 font-mono text-sm tracking-[0.5em] uppercase"
                >
                  {conclusion.dataroom}
                </a>
              </div>

              <div className="mt-40 pt-20 border-t border-zinc-100">
                <p className="text-2xl md:text-4xl text-emerald-600 italic mb-4">
                  {finalStatement.top}
                </p>
                <p className="text-xl md:text-2xl text-zinc-400 font-mono uppercase tracking-widest italic">
                  {finalStatement.bottom}
                </p>
              </div>
            </motion.div>
          </section>

          <InteractionLayer />
        </main>

        <Footer />

        <AnimatePresence>
          {hasAgreed && !cookiesAccepted && (
            <NDABar onAccept={handleAcceptCookies} />
          )}
        </AnimatePresence>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
