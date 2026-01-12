/* =========================================================
   ACKLO ADVISOR PORTAL – CONSTANTS (FULL & SAFE VERSION)
   - Arabic white screen issue FIXED
   - Missing Arabic keys automatically fallback to English
   - NO other file needs to be edited
========================================================= */

export const CONTACT_EMAIL = 'advisor@acklo.space';

/* =========================================================
   INTERNAL: deep merge utility
========================================================= */
const deepMerge = (base: any, override: any): any => {
  if (typeof base !== 'object' || base === null) return override;
  const result = { ...base };
  for (const key in override) {
    if (
      typeof override[key] === 'object' &&
      override[key] !== null &&
      !Array.isArray(override[key])
    ) {
      result[key] = deepMerge(base[key] || {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
};

/* =========================================================
   ENGLISH — SOURCE OF TRUTH (FULL)
========================================================= */
const EN = {
  nav: {
    briefing: "Briefing",
    validation: "Validation",
    architecture: "Architecture",
    market: "Market",
    action: "Action Protocol",
    session: "Active Session"
  },

  hero: {
    protocol: "Institutional Protocol · Private Access",
    welcome: "Honoring the presence of",
    name_first: "Abdulkarim",
    name_middle: "Ibrahim",
    name_last: "Al Nafie",
    mission:
      "Defining the future of urban resilience through sovereign-grade systems.",
    advice_tag: "Strategic Counsel Requested",
    advice_request:
      "We seek your expert guidance on our sovereign-grade deployment architecture and institutional de-risking roadmap."
  },

  pitch: {
    tag: "EXECUTIVE BRIEFING",
    title: "60-Second Elevator Pitch",
    text:
      "ACKLO is the technology infrastructure that makes collaborative urban governance executable. The challenge of Vision 2030 and Net Zero 2050 is not ambition, but execution and verification."
  },

  personal_letter: {
    tag: "EXECUTIVE CORRESPONDENCE // PERSONAL NOTE",
    salutation: "My Abdul",
    opening:
      "Since you became part of my everyday life, I’ve felt a lot more at ease.",
    context:
      "I am preparing for strategic meetings in Abu Dhabi while structuring Acklo’s next investment round.",
    bridge:
      "Your perspective and judgment matter deeply to me.",
    inquiries: [
      {
        id: "01",
        title: "Investment Weighting",
        text:
          "What do you personally weigh most heavily when leading an investment?"
      },
      {
        id: "02",
        title: "Model Acceleration",
        text:
          "Would a hybrid strategic + VC model accelerate adoption?"
      }
    ],
    closing:
      "I would truly appreciate hearing your thoughts.",
    signature: "Christina"
  },

  conclusion: {
    tag: "Briefing Conclusion",
    title: "Abdulkarim, We Await Your Strategic Input.",
    subtext:
      "Your perspective on our institutional readiness is of paramount importance to ACKLO.",
    submit: "SUBMIT RESPONSE",
    dataroom: "VIEW DATA ROOM"
  },

  final_statement: {
    top: "ACKLO turns national vision into urban proof.",
    bottom: "From policy to data. From data to scale."
  },

  footer: {
    copyright:
      "© 2026 ACKLO INFRASTRUCTURE SYSTEMS. ALL RIGHTS RESERVED.",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy"
  },

  nda: {
    tag: "SECURITY PROTOCOL · NDA",
    title_part1: "Non-Disclosure",
    title_part2: "Acknowledgement.",
    text1:
      "Materials are strictly confidential.",
    text2:
      "You agree not to disclose information.",
    agree_check:
      "I acknowledge the confidential nature of this portal.",
    button: "AGREE & CONTINUE"
  },

  cookie_consent: {
    title: "Protocol Security & Analytics",
    text:
      "We use minimal cookies to maintain session integrity.",
    decline: "DECLINE",
    accept: "ACCEPT PROTOCOL"
  }
};

/* =========================================================
   ARABIC — PARTIAL, SAFE (MERGED WITH EN)
========================================================= */
const AR = {
  nav: {
    briefing: "الإحاطة",
    validation: "التحقق",
    architecture: "البنية التحتية",
    market: "السوق",
    action: "بروتوكول العمل",
    session: "جلسة نشطة"
  },

  hero: {
    protocol: "بروتوكول مؤسسي · وصول خاص",
    welcome: "نتشرف بحضور",
    name_first: "عبد الكريم",
    name_middle: "إبراهيم",
    name_last: "النافع",
    mission:
      "تحديد مستقبل الصمود الحضري من خلال أنظمة سيادية."
  },

  conclusion: {
    submit: "إرسال الرد",
    dataroom: "عرض غرفة البيانات"
  },

  footer: {
    privacy: "سياسة الخصوصية",
    cookie: "سياسة ملفات الارتباط"
  },

  nda: {
    button: "الموافقة والمتابعة"
  }
};

/* =========================================================
   EXPORT — THIS IS THE KEY FIX
========================================================= */
export const TRANSLATIONS = {
  en: EN,
  ar: deepMerge(EN, AR)
};

/* =========================================================
   MAIL HELPERS
========================================================= */
export const buildInteractionRequest = (type: string, subject: string) => {
  const mailSubject = encodeURIComponent(
    `[ACKLO PROTOCOL] ${type}: ${subject}`
  );
  const mailBody = encodeURIComponent(
    `Type: ${type}\nSubject: ${subject}\n`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
};

export const buildDownloadRequest = (packName: string) => {
  const mailSubject = encodeURIComponent(
    `[ACKLO DATA ROOM] ${packName}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}`;
};
