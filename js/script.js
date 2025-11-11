// ==============================
// DigZen – Chrono + Mots magiques + Traductions + Animation fin
// ==============================

// --- Mots magiques ---
const magicWords = {
  fr: [
    "Mâche lentement 🍴",
    "Respire profondément 🌿",
    "Pose ta fourchette ✋",
    "Savoure chaque bouchée 😌",
    "Écoute ton corps 💫",
    "Prends une toute petite gorgée d’eau 💧",
    "Sois dans l’instant présent 🕊️"
  ],
  en: [
    "Chew slowly 🍴",
    "Breathe deeply 🌿",
    "Put down your fork ✋",
    "Savor each bite 😌",
    "Listen to your body 💫",
    "Take a tiny sip of water 💧",
    "Be in the present moment 🕊️"
  ]

};

// --- Textes traduits dans la page (footer + "Créé par WebOara") ---
const translations = {
  fr: { createdBy: "Créé par", mentions: "Mentions légales", privacy: "Politique de confidentialité (RGPD)", terms: "Conditions d’utilisation", guide: "Guide d'utilisation", contact: "Contact" },
  en: { createdBy: "Created by", mentions: "Legal notices", privacy: "Privacy policy (GDPR)", terms: "Terms of use", guide: "User guide",contact: "Contact" },
  de: { createdBy: "Erstellt von", mentions: "Rechtliche Hinweise", privacy: "Datenschutzrichtlinie (DSGVO)", terms: "Nutzungsbedingungen", guide: "Benutzerhandbuch", contact: "Kontakt" }
};

// --- Langue actuelle ---
let currentLang = localStorage.getItem("lang") || "fr";

// ===== Chrono =====
let startTime = null;
let timer = null;
let elapsed = 0;

// ===== Mots magiques =====
let indexMot = 0;
let intervalMots = null;

// --- Affichage du chrono ---
function afficherTemps(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const secondes = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const heures = Math.floor(totalSeconds / 3600);

  const tim = document.querySelector(".tim");
  if (!tim) return;
  tim.innerHTML = `<span>${heures} h</span>:<span>${minutes} min</span>:<span>${secondes} s</span>`;
}

// --- Chrono en cours ---
function chrono() {
  const now = Date.now();
  elapsed = now - startTime;
  afficherTemps(elapsed);

  if (elapsed >= 20 * 60 * 1000) { // 20 minutes
    stop();

    // Affiche le message final
    const motDiv = document.getElementById("mot-magique");
    if (motDiv) motDiv.textContent = "✅ 20 minutes écoulées — prends un moment.";

    stopMotsMagiques(true);

    // Affiche le GIF
    afficherAnimationFin();
  }
}

// ===== Fonctions boutons =====
function start() {
  if (timer) return;
  startTime = Date.now() - elapsed;
  timer = setInterval(chrono, 100);
  lancerMotsMagiques();
  const btn = document.getElementById('start');
  if (btn) btn.disabled = true;
}

function stop() {
  clearInterval(timer);
  timer = null;
  stopMotsMagiques();
  const btn = document.getElementById('start');
  if (btn) btn.disabled = false;
}

function reset() {
  stop();
  elapsed = 0;
  afficherTemps(elapsed);
  const motDiv = document.getElementById("mot-magique");
  if (motDiv) motDiv.textContent = "";

  // Masque le GIF à chaque reset
  const animationDiv = document.getElementById("end-animation");
  if (animationDiv) animationDiv.style.display = "none";
}

// ===== Mots magiques =====
function afficherMotAvecEffet(txt) {
  const motDiv = document.getElementById("mot-magique");
  if (!motDiv) return;

  motDiv.textContent = txt;
  motDiv.classList.remove("showMagic");
  void motDiv.offsetWidth;
  motDiv.classList.add("showMagic");
}

function lancerMotsMagiques() {
  const motDiv = document.getElementById("mot-magique");
  if (!motDiv) return;

  if (intervalMots) clearInterval(intervalMots);

  const list = magicWords[currentLang];
  afficherMotAvecEffet(list[indexMot]);
  indexMot = (indexMot + 1) % list.length;

  intervalMots = setInterval(() => {
    if (elapsed >= 20 * 60 * 1000) {
      clearInterval(intervalMots);
      intervalMots = null;
      return;
    }
    afficherMotAvecEffet(list[indexMot]);
    indexMot = (indexMot + 1) % list.length;
  }, 5000);
}

function stopMotsMagiques(forceClear = false) {
  if (intervalMots) {
    clearInterval(intervalMots);
    intervalMots = null;
  }
  if (forceClear) {
    const motDiv = document.getElementById("mot-magique");
    if (motDiv) motDiv.textContent = "";
  }
}

// ===== Traduction de la page =====
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  // Redémarre les mots magiques dans la langue active
  indexMot = 0;
  if (timer) lancerMotsMagiques();
}

// ===== Gestion drapeaux =====
document.getElementById("lang-fr")?.addEventListener("click", () => translatePage("fr"));
document.getElementById("lang-en")?.addEventListener("click", () => translatePage("en"));
document.getElementById("lang-de")?.addEventListener("click", () => translatePage("de"));

// ===== Initialisation =====
document.addEventListener("DOMContentLoaded", () => {
  afficherTemps(0);

  const btnStart = document.getElementById("start");
  const btnStop = document.getElementById("stop");
  const btnReset = document.getElementById("reset");

  if (btnStart) btnStart.addEventListener("click", () => { keepScreenOn(); start(); });
  if (btnStop) btnStop.addEventListener("click", stop);
  if (btnReset) btnReset.addEventListener("click", reset);

  translatePage(currentLang);
});

// ===== Empêche mise en veille =====
let wakeLock = null;
async function keepScreenOn() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    document.addEventListener("visibilitychange", async () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        wakeLock = await navigator.wakeLock.request("screen");
      }
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

// ===== AFFICHAGE GIF FIN =====
function afficherAnimationFin() {
    const animationDiv = document.getElementById("end-animation");
    if (animationDiv) {
        animationDiv.style.display = "block"; // rend le GIF visible
    }
}







