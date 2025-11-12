// ==============================
// DigZen – Chrono stable + Mots magiques + Animation fin (FR)
// ==============================

// --- Mots magiques ---
const magicWords = [
  "Mâche lentement 🍴",
  "Respire profondément 🌿",
  "Pose ta fourchette ✋",
  "Savoure chaque bouchée 😌",
  "Écoute ton corps 💫",
  "Prends une toute petite gorgée d’eau 💧",
  "Sois dans l’instant présent 🕊️"
];

// ===== Chrono =====
let startTime = null;
let chronoInterval = null;
let elapsed = 0;
const chronoUpdateInterval = 500; // ms

// ===== Mots magiques =====
let motInterval = null;
let motIndex = 0;

// --- Affichage du chrono ---
function afficherTemps(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const secondes = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const heures = Math.floor(totalSeconds / 3600);

  const tim = document.querySelector(".tim");
  if (tim) tim.innerHTML = `<span>${heures} h</span>:<span>${minutes} min</span>:<span>${secondes} s</span>`;
}

// --- Chrono en cours ---
function chrono() {
  const now = Date.now();
  elapsed = now - startTime;
  afficherTemps(elapsed);

  if (elapsed >= 20 * 60 * 1000) { // 20 minutes
    stopChrono();
    stopMotsMagiques(true);
    afficherAnimationFin();
    const motDiv = document.getElementById("mot-magique");
    if (motDiv) motDiv.textContent = "✅ 20 minutes écoulées — prends un moment.";
  }
}

// ===== Fonctions boutons =====
function startChrono() {
  if (chronoInterval) return;
  startTime = Date.now() - elapsed;
  chronoInterval = setInterval(chrono, chronoUpdateInterval);
  startMotsMagiques();
  const btn = document.getElementById('start');
  if (btn) btn.disabled = true;
}

function stopChrono() {
  clearInterval(chronoInterval);
  chronoInterval = null;
  stopMotsMagiques();
  const btn = document.getElementById('start');
  if (btn) btn.disabled = false;
}

function resetChrono() {
  stopChrono();
  elapsed = 0;
  afficherTemps(elapsed);
  const motDiv = document.getElementById("mot-magique");
  if (motDiv) motDiv.textContent = "";
  const animationDiv = document.getElementById("end-animation");
  if (animationDiv) animationDiv.style.display = "none";
}

// ===== Mots magiques =====
function afficherMot(txt) {
  const motDiv = document.getElementById("mot-magique");
  if (!motDiv) return;

  motDiv.textContent = txt;
  motDiv.classList.remove("showMagic");
  void motDiv.offsetWidth; // relance l'animation CSS
  motDiv.classList.add("showMagic");
}

function startMotsMagiques() {
  stopMotsMagiques(); // sécurité

  afficherMot(magicWords[motIndex]);
  motIndex = (motIndex + 1) % magicWords.length;

  motInterval = setInterval(() => {
    afficherMot(magicWords[motIndex]);
    motIndex = (motIndex + 1) % magicWords.length;

    if (elapsed >= 20 * 60 * 1000) stopMotsMagiques(true);
  }, 5000);
}

function stopMotsMagiques(forceClear = false) {
  if (motInterval) {
    clearInterval(motInterval);
    motInterval = null;
  }
  if (forceClear) {
    const motDiv = document.getElementById("mot-magique");
    if (motDiv) motDiv.textContent = "";
  }
}

// ===== Initialisation =====
document.addEventListener("DOMContentLoaded", () => {
  afficherTemps(0);

  document.getElementById("start")?.addEventListener("click", () => { keepScreenOn(); startChrono(); });
  document.getElementById("stop")?.addEventListener("click", stopChrono);
  document.getElementById("reset")?.addEventListener("click", resetChrono);
});

// ===== Wake Lock =====
let wakeLock = null;
async function keepScreenOn() {
  try {
    if (!wakeLock) wakeLock = await navigator.wakeLock.request("screen");
    document.addEventListener("visibilitychange", async () => {
      if (!wakeLock && document.visibilityState === "visible") {
        wakeLock = await navigator.wakeLock.request("screen");
      }
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

// ===== Animation fin =====
function afficherAnimationFin() {
  const animationDiv = document.getElementById("end-animation");
  if (animationDiv) animationDiv.style.display = "block";
}









