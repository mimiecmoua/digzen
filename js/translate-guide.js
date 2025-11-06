// translate-guide.js

const translations = {
    fr: {
        "title-guide": "Guide d’Utilisation",
        "p-note": "<strong>Note :</strong> Le chrono de 20 minutes est basé sur le temps moyen de satiété pour des personnes sans trouble hormonal ou conditions particulières. Les temps peuvent varier selon chacun.",
        "li-1": "Installez-vous confortablement devant votre repas.",
        "li-2": "Enclenchez le chrono une fois bien installé.",
        "li-3": "Prévoyez un peu d’eau pour prendre quelques petites gorgées en mangeant.",
        "li-4": "Le chrono dure 20 minutes et vous permet de vous situer dans le temps afin de ne pas manger trop vite.",
        "li-5": "Pensez plus à votre satiété qu’à votre faim.",
        "li-6": "Jetez un œil de temps en temps à l’écran : des phrases s’affichent pour vous rappeler de ralentir.",
        "li-7": "Posez votre fourchette à chaque bouchée, ou votre nourriture si vous mangez avec les mains.",
        "li-8": "Plus vous mangez doucement, plus la satiété arrive vite.",
        "li-9": "Placez l’écran à une distance confortable pour garder un œil sur le chrono sans effort.",
        // FOOTER
        "footer-copyright": "© 2025 DigZen — Créé par WebOara",
        "footer-legal": "Mentions légales",
        "footer-privacy": "Politique de confidentialité (RGPD)",
        "footer-conditions": "Conditions d’utilisation",
        "footer-guide": "Guide d'utilisation",
        "footer-home": "Accueil"
    },
    en: {
        "title-guide": "User Guide",
        "p-note": "<strong>Note:</strong> The 20-minute timer is based on the average satiety time for people without hormonal disorders or specific conditions. Times may vary for each individual.",
        "li-1": "Sit comfortably in front of your meal.",
        "li-2": "Start the timer once you are settled.",
        "li-3": "Have some water available to take small sips while eating.",
        "li-4": "The timer lasts 20 minutes and helps you pace yourself so you don't eat too quickly.",
        "li-5": "Focus more on your satiety than your hunger.",
        "li-6": "Glance at the screen from time to time: messages will appear to remind you to slow down.",
        "li-7": "Put down your fork after each bite, or your food if you eat with your hands.",
        "li-8": "The slower you eat, the sooner satiety arrives.",
        "li-9": "Place the screen at a comfortable distance to monitor the timer without effort.",
        // FOOTER
        "footer-copyright": "© 2025 DigZen — Created by WebOara",
        "footer-legal": "Legal Notice",
        "footer-privacy": "Privacy Policy (GDPR)",
        "footer-conditions": "Terms of Use",
        "footer-guide": "User Guide",
        "footer-home": "Home"
    },
    de: {
        "title-guide": "Benutzerhandbuch",
        "p-note": "<strong>Hinweis:</strong> Der 20-Minuten-Timer basiert auf der durchschnittlichen Sättigungszeit für Personen ohne hormonelle Störungen oder besondere Bedingungen. Die Zeiten können individuell variieren.",
        "li-1": "Setzen Sie sich bequem vor Ihre Mahlzeit.",
        "li-2": "Starten Sie den Timer, sobald Sie es sich bequem gemacht haben.",
        "li-3": "Halten Sie etwas Wasser bereit, um kleine Schlucke während des Essens zu nehmen.",
        "li-4": "Der Timer läuft 20 Minuten und hilft Ihnen, Ihr Tempo zu kontrollieren, damit Sie nicht zu schnell essen.",
        "li-5": "Achten Sie mehr auf Ihre Sättigung als auf Ihren Hunger.",
        "li-6": "Werfen Sie von Zeit zu Zeit einen Blick auf den Bildschirm: Nachrichten erscheinen, um Sie daran zu erinnern, langsamer zu essen.",
        "li-7": "Legen Sie Ihre Gabel nach jedem Bissen ab oder das Essen, wenn Sie mit den Händen essen.",
        "li-8": "Je langsamer Sie essen, desto schneller stellt sich Sättigung ein.",
        "li-9": "Platzieren Sie den Bildschirm in einem angenehmen Abstand, um den Timer mühelos zu überwachen.",
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
