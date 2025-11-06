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
    de: {
        // TITRE
        "title-conditions": "Nutzungsbedingungen",

        // SECTIONS
        "h2-objet": "1. Zweck",
        "p-objet": "Diese Bedingungen definieren die Regeln für die Nutzung der DigZen-Webanwendung. Durch den Zugriff und die Nutzung dieser Anwendung akzeptieren Sie diese Bedingungen vollständig.",

        "h2-acces": "2. Zugriff auf die Anwendung",
        "p-acces": "DigZen ist direkt über einen Webbrowser zugänglich, ohne Download oder obligatorische Registrierung. Der Herausgeber behält sich das Recht vor, den Zugriff jederzeit zu ändern, auszusetzen oder zu beenden.",

        "h2-utilisation": "3. Nutzung der Anwendung",
        "p-utilisation": "Der Nutzer verpflichtet sich, DigZen verantwortungsbewusst und gesetzeskonform zu nutzen. Jede missbräuchliche, schädliche oder betrügerische Nutzung ist verboten.",

        "h2-propriete": "4. Geistiges Eigentum",
        "p-propriete": "Alle Inhalte von DigZen, einschließlich Texte, Bilder, Animationen und Quellcode, sind urheberrechtlich geschützt. Jede Reproduktion oder Nutzung ohne Genehmigung ist untersagt.",

        "h2-responsabilite": "5. Haftung",
        "p-responsabilite": "Der Nutzer verwendet die Anwendung auf eigenes Risiko. Der Herausgeber kann nicht für direkte oder indirekte Schäden im Zusammenhang mit der Nutzung von DigZen haftbar gemacht werden.",

        "h2-donnees": "6. Persönliche Daten",
        "p-donnees": "Es werden keine personenbezogenen Daten von DigZen erhoben. Für jede zukünftige Erhebung wird die ausdrückliche Zustimmung gemäß DSGVO eingeholt.",

        "h2-modification": "7. Änderungen der Bedingungen",
        "p-modification": "Der Herausgeber behält sich das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen treten mit der Veröffentlichung auf dieser Seite in Kraft.",

        // FOOTER
        "footer-copyright": "© 2025 DigZen — Erstellt von WebOara",
        "footer-legal": "Rechtliche Hinweise",
        "footer-privacy": "Datenschutzrichtlinie (DSGVO)",
        "footer-conditions": "Nutzungsbedingungen",
        "footer-guide": "Benutzerhandbuch",
        "footer-home": "Startseite"
    }
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
