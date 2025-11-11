// translate-conditions.js

const translations = {
    fr: {
        // TITRE
        "title-conditions": "Conditions d’Utilisation",

        // SECTIONS
        "h2-objet": "1. Objet",
        "p-objet": "Les présentes conditions définissent les règles d’utilisation de la web app DigZen. En accédant et en utilisant cette application, vous acceptez ces conditions dans leur intégralité.",

        "h2-acces": "2. Accès à l’application",
        "p-acces": "DigZen est accessible directement via un navigateur web, sans téléchargement ni inscription obligatoire. L’éditeur se réserve le droit de modifier, suspendre ou interrompre l’accès à tout moment.",

        "h2-utilisation": "3. Utilisation de l’application",
        "p-utilisation": "L’utilisateur s’engage à utiliser DigZen de manière responsable et conforme à la loi. Toute utilisation détournée, nuisible ou frauduleuse est interdite.",

        "h2-propriete": "4. Propriété intellectuelle",
        "p-propriete": "Tous les contenus de DigZen, y compris textes, images, animations et code source, sont protégés par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.",

        "h2-responsabilite": "5. Responsabilité",
        "p-responsabilite": "L’utilisateur utilise l’application à ses propres risques. L’éditeur ne peut être tenu responsable de tout dommage direct ou indirect lié à l’usage de DigZen.",

        "h2-donnees": "6. Données personnelles",
        "p-donnees": "Aucune donnée personnelle n’est collectée par DigZen. Pour toute collecte future, un consentement explicite sera demandé conformément au RGPD.",

        "h2-modification": "7. Modification des conditions",
        "p-modification": "L’éditeur se réserve le droit de modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication sur cette page.",

        // FOOTER
        "footer-copyright": "© 2025 DigZen — Créé par WebOara",
        "footer-legal": "Mentions légales",
        "footer-privacy": "Politique de confidentialité (RGPD)",
        "footer-conditions": "Conditions d’utilisation",
        "footer-guide": "Guide d'utilisation",
        "footer-home": "Accueil"
    },
    en: {
        // TITRE
        "title-conditions": "Terms of Use",

        // SECTIONS
        "h2-objet": "1. Purpose",
        "p-objet": "These terms define the rules for using the DigZen web app. By accessing and using this application, you fully accept these terms.",

        "h2-acces": "2. Access to the Application",
        "p-acces": "DigZen is accessible directly via a web browser, without download or mandatory registration. The publisher reserves the right to modify, suspend, or terminate access at any time.",

        "h2-utilisation": "3. Use of the Application",
        "p-utilisation": "Users agree to use DigZen responsibly and in accordance with the law. Any misuse, harmful, or fraudulent use is prohibited.",

        "h2-propriete": "4. Intellectual Property",
        "p-propriete": "All content of DigZen, including text, images, animations, and source code, is protected by copyright. Any reproduction or use without authorization is prohibited.",

        "h2-responsabilite": "5. Liability",
        "p-responsabilite": "Users use the application at their own risk. The publisher cannot be held responsible for any direct or indirect damage related to the use of DigZen.",

        "h2-donnees": "6. Personal Data",
        "p-donnees": "No personal data is collected by DigZen. For any future collection, explicit consent will be requested in accordance with GDPR.",

        "h2-modification": "7. Changes to Terms",
        "p-modification": "The publisher reserves the right to modify these terms at any time. Changes will be effective upon publication on this page.",

        // FOOTER
        "footer-copyright": "© 2025 DigZen — Created by WebOara",
        "footer-legal": "Legal Notice",
        "footer-privacy": "Privacy Policy (GDPR)",
        "footer-conditions": "Terms of Use",
        "footer-guide": "User Guide",
        "footer-home": "Home"
    },
    
};

// Fonction pour changer la langue
function setLanguage(lang) {
    for (let id in translations[lang]) {
        let element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[lang][id];
        }
    }
}

// Gestion des clics sur les drapeaux
document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));
