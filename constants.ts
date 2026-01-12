export const CONTACT_EMAIL = 'advisor@acklo.space';

/* ======================================================
   SAFE DEEP MERGE (Arabic fallback → English)
====================================================== */
const deepMerge = (base: any, override: any): any => {
  if (typeof base !== 'object' || base === null) return override ?? base;
  const result: any = Array.isArray(base) ? [...base] : { ...base };

  for (const key in override) {
    if (
      typeof override[key] === 'object' &&
      override[key] !== null &&
      !Array.isArray(override[key])
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
};

/* ======================================================
   ENGLISH (BASE – 100% COMPLETE)
====================================================== */
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
    mission: "Defining the future of urban resilience through sovereign-grade systems.",
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
      "Since you became part of my everyday life, I’ve felt a lot more at ease. That quiet sense of care has been a real comfort.",
    context:
      "I am preparing for strategic meetings in Abu Dhabi while structuring Acklo’s next investment phase.",
    bridge:
      "Your way of thinking about people, strategy, and long-term value helps me see more clearly.",
    inquiries: [],
    closing:
      "I would truly appreciate hearing your thoughts whenever it feels comfortable.",
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
    title_part2: "Acknowledgement",
    text1:
      "Materials are strictly confidential and sensitive to sovereign-level execution.",
    text2:
      "You agree not to disclose any technical, financial, or strategic information.",
    agree_check: "I acknowledge the confidential nature of this portal.",
    button: "AGREE & CONTINUE"
  }
};

/* ======================================================
   ARABIC (PARTIAL – SAFE TO MISS KEYS)
====================================================== */
const AR = {
  nav: {
    briefing: "الإحاطة",
    validation: "التحقق",
    architecture: "البنية التحتية",
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
      "تحديد مستقبل الصمود الحضري من خلال أنظمة على مستوى سيادي.",
    advice_tag: "مطلوب مشورة استراتيجية"
  },

  personal_letter: {
    salutation: "عزيزي عبد الكريم",
    signature: "كريستينا"
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
    tag: "بروتوكول الأمان · اتفاقية عدم الإفصاح",
    button: "الموافقة والمتابعة"
  }
};

/* ======================================================
   FINAL EXPORT (NO WHITE SCREEN GUARANTEE)
====================================================== */
export const TRANSLATIONS = {
  en: EN,
  ar: deepMerge(EN, AR)
};

/* ======================================================
   MAIL HELPERS
====================================================== */
export const buildInteractionRequest = (type: string, subject: string) => {
  const mailSubject = encodeURIComponent(`[ACKLO PROTOCOL] ${type}: ${subject}`);
  const mailBody = encodeURIComponent(
    `Institutional Inquiry\n\nType: ${type}\nSubject: ${subject}\n\n`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
};

export const buildDownloadRequest = (packName: string) => {
  const mailSubject = encodeURIComponent(
    `[ACKLO DATA ROOM] Access Request: ${packName}`
  );
  const mailBody = encodeURIComponent(
    `Requesting executive data room access for: ${packName}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
};
