// ===============================
//  TRADUCTION – MENTIONS LÉGALES
// ===============================

// Dictionnaire multilingue
const translations = {
  fr: {
    // TITRE
    "legal-title": "Mentions légales",
    "title-legal": "Mentions légales - DigZen",

    // SECTIONS
    "h2-editor": "Éditeur",
    "editor-name": "Nom / Raison sociale : WebOara",
    "editor-address": "Adresse : 11 rue de l'Église, 34440 Colombiers",
    "editor-email": "Email : weboaraa@gmail.com",
    "editor-phone": "Numéro de téléphone : 06 58 05 35 86",

    "h2-director": "Directrice de la publication",
    "director-name": "Nom : Émilie Clain",

    "h2-hosting": "Hébergeur",
    "host-name": "Nom : GitHub, Inc.",
    "host-address": "Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
    "host-contact": "Contact : support@github.com",

    "h2-ip": "Propriété intellectuelle",
    "ip-text":
      "Tous les contenus de cette web app, y compris textes, images et code source, sont protégés par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.",

    "h2-privacy": "Données personnelles",
    "privacy-text": "Aucune donnée personnelle n’est collectée par cette web app.",

    "h2-liability": "Limitation de responsabilité",
    "liability-text":
      "L’utilisateur utilise cette web app à ses propres risques. L’éditeur ne pourra être tenu responsable de toute conséquence liée à son utilisation.",

    // FOOTER
    "footer-legal": "Mentions légales",
    "footer-privacy": "Politique de confidentialité (RGPD)",
    "footer-tos": "Conditions d’utilisation",
    "footer-guide": "Guide d'utilisation",
    "footer-home": "Accueil"
  },

  en: {
    "legal-title": "Legal Notice",
    "title-legal": "Legal Notice - DigZen",

    "h2-editor": "Publisher",
    "editor-name": "Company name: WebOara",
    "editor-address": "Address: 11 rue de l'Église, 34440 Colombiers, France",
    "editor-email": "Email: weboaraa@gmail.com",
    "editor-phone": "Phone number: +33 6 58 05 35 86",

    "h2-director": "Publication Director",
    "director-name": "Name: Émilie Clain",

    "h2-hosting": "Hosting Provider",
    "host-name": "Name: GitHub, Inc.",
    "host-address":
      "Address: 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States",
    "host-contact": "Contact: support@github.com",

    "h2-ip": "Intellectual Property",
    "ip-text":
      "All content of this web app, including texts, images and source code, is protected by copyright. Any reproduction or use without permission is prohibited.",

    "h2-privacy": "Personal Data",
    "privacy-text": "No personal data is collected by this web app.",

    "h2-liability": "Limitation of Liability",
    "liability-text":
      "The user uses this web app at their own risk. The publisher cannot be held responsible for any consequence related to its use.",

    // FOOTER
    "footer-legal": "Legal Notice",
    "footer-privacy": "Privacy Policy (GDPR)",
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

document.getElementById("lang-fr").addEventListener("click", () => {
  applyTranslations("fr");
});

document.getElementById("lang-en").addEventListener("click", () => {
  applyTranslations("en");
});

document.getElementById("lang-de").addEventListener("click", () => {
  applyTranslations("de");
});

// Mise en FR au chargement
applyTranslations("fr");
