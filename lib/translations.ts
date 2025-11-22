export const translations = {
  en: {
    tagline: "We Draw Your Dreams",
    status: "Under Development",
    message: "We're crafting something exceptional. Our new website is currently under construction, but we're ready to transform your visions into reality.",
    getInTouch: "Get In Touch",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locations: "Locations",
    viewOnMap: "View on Map",
    footerMessage: "Transforming visions into reality • Where precision meets creativity",
    emailValue: "DARACONST.LLC@GMAIL.COM",
    phoneNumbers: [
      "+963930393140",
      "+963930393141",
      "+96311428870"
    ],
    locationValues: [
      "Damascus, Al-Tijara - Next to the Garden",
      "Yabroud, Al-Salihiyah - Main Street"
    ],
    locationLinks: [
      "https://maps.app.goo.gl/GLYhx1DCdP8WKioe7?g_st=aw",
      "https://maps.app.goo.gl/JKBtwgNNMWb8AVvF7"
    ]
  },
  ar: {
    tagline: "نحن نرسم أحلامك",
    status: "قيد التطوير",
    message: "نحن نصمم شيئًا استثنائيًا. موقعنا الإلكتروني قيد الإنشاء حالياً، لكننا جاهزون لتحويل رؤيتك إلى واقع.",
    getInTouch: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    locations: "المواقع",
    viewOnMap: "عرض على الخريطة",
    footerMessage: "تحويل الرؤى إلى واقع • حيث تلتقي الدقة بالإبداع",
    emailValue: "DARACONST.LLC@GMAIL.COM",
    phoneNumbers: [
      "+963930393140",
      "+963930393141",
      "+96311428870"
    ],
    locationValues: [
      "دمشق التجارة جانب الحديقة",
      "يبرود الصالحية الشارع العام"
    ],
    locationLinks: [
      "https://maps.app.goo.gl/GLYhx1DCdP8WKioe7?g_st=aw",
      "https://maps.app.goo.gl/JKBtwgNNMWb8AVvF7"
    ]
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
export type LocationValues = string[];
export type PhoneNumbers = string[];

