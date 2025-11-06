// ===============================
//  TRADUCTION – POLITIQUE DE CONFIDENTIALITÉ
// ===============================

const translations = {
  fr: {
    "legal-title": "Politique de confidentialité",
    "policy-intro": "Cette politique explique comment la web app DigZen collecte, utilise et protège les données personnelles de ses utilisateurs.",
    "h2-collected": "Données collectées",
    "collected-text": "Aucune donnée personnelle n'est collectée par cette web app.",
    "h2-use": "Utilisation des données",
    "use-text": "Si des données étaient collectées, elles seraient utilisées uniquement pour améliorer l'expérience utilisateur et ne seraient jamais partagées avec des tiers sans consentement.",
    "h2-security": "Sécurité des données",
    "security-text": "Toutes les mesures nécessaires sont mises en place pour protéger vos données contre l'accès non autorisé, la modification ou la suppression.",
    "h2-cookies": "Cookies",
    "cookies-text": "Cette web app n'utilise pas de cookies.",
    "h2-contact": "Contact",
    "contact-text": "Pour toute question concernant la politique de confidentialité : Email : weboaraa@gmail.com",

    // FOOTER
    "footer-legal": "Mentions légales",
    "footer-privacy": "Politique de confidentialité",
    "footer-tos": "Conditions d’utilisation",
    "footer-guide": "Guide d'utilisation",
    "footer-home": "Accueil"
  },

  en: {
    "legal-title": "Privacy Policy",
    "policy-intro": "This policy explains how the DigZen web app collects, uses and protects users' personal data.",
    "h2-collected": "Data Collected",
    "collected-text": "No personal data is collected by this web app.",
    "h2-use": "Data Usage",
    "use-text": "If any data were collected, it would only be used to improve user experience and would never be shared with third parties without consent.",
    "h2-security": "Data Security",
    "security-text": "All necessary measures are in place to protect your data from unauthorized access, modification, or deletion.",
    "h2-cookies": "Cookies",
    "cookies-text": "This web app does not use cookies.",
    "h2-contact": "Contact",
    "contact-text": "For any questions regarding the privacy policy: Email: weboaraa@gmail.com",

    // FOOTER
    "footer-legal": "Legal Notice",
    "footer-privacy": "Privacy Policy",
    "footer-tos": "Terms of Use",
    "footer-guide": "User Guide",
    "footer-home": "Home"
  },

  de: {
    "legal-title": "Datenschutzrichtlinie",
    "policy-intro": "Diese Richtlinie erklärt, wie die Web-App DigZen personenbezogene Daten ihrer Nutzer sammelt, verwendet und schützt.",
    "h2-collected": "Gesammelte Daten",
    "collected-text": "Diese Web-App sammelt keine personenbezogenen Daten.",
    "h2-use": "Verwendung der Daten",
    "use-text": "Wenn Daten gesammelt würden, würden sie nur zur Verbesserung der Benutzererfahrung verwendet und niemals ohne Zustimmung an Dritte weitergegeben.",
    "h2-security": "Datensicherheit",
    "security-text": "Alle notwendigen Maßnahmen sind ergriffen, um Ihre Daten vor unbefugtem Zugriff, Änderung oder Löschung zu schützen.",
    "h2-cookies": "Cookies",
    "cookies-text": "Diese Web-App verwendet keine Cookies.",
    "h2-contact": "Kontakt",
    "contact-text": "Bei Fragen zur Datenschutzrichtlinie: E-Mail: weboaraa@gmail.com",

    // FOOTER
    "footer-legal": "Impressum",
    "footer-privacy": "Datenschutzrichtlinie",
    "footer-tos": "Nutzungsbedingungen",
    "footer-guide": "Benutzerhandbuch",
    "footer-home": "Startseite"
  }
};

// ===============================
//  FONCTION DE TRADUCTION
// ===============================

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach((el) => {
    const key = el.id;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===============================
//  LISTENERS SUR LES DRAPEAUX
// ===============================

document.getElementById("lang-fr").addEventListener("click", () => applyTranslations("fr"));
document.getElementById("lang-en").addEventListener("click", () => applyTranslations("en"));
document.getElementById("lang-de").addEventListener("click", () => applyTranslations("de"));

// Traduction par défaut : français
applyTranslations("fr");
