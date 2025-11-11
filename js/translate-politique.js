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
