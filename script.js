// script.js complet DigZen

document.addEventListener('DOMContentLoaded', () => {
  // Récupération des boutons
  const btnStart = document.getElementById('start');
  const btnStop = document.getElementById('stop');
  const btnReset = document.getElementById('reset');

  if (btnStart) btnStart.addEventListener('click', start);
  if (btnStop) btnStop.addEventListener('click', stop);
  if (btnReset) btnReset.addEventListener('click', reset);

  afficherTemps(0); // affichage initial
});

// ===== Variables =====
let startTime = null;   // timestamp quand start
let timer = null;       // interval ID
let elapsed = 0;        // temps écoulé en ms

// ===== Affichage =====
function afficherTemps(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const secondes = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const heures = Math.floor(totalSeconds / 3600);

  const tim = document.querySelector(".tim");
  if (!tim) return;
  tim.innerHTML = `
    <span>${heures} h</span>:
    <span>${minutes} min</span>:
    <span>${secondes} s</span>`;
}

// ===== Chrono =====
function chrono() {
  const now = Date.now();
  elapsed = now - startTime;
  afficherTemps(elapsed);

  // Stop à 20 minutes (1200000ms)
  if (elapsed >= 20 * 60 * 1000) {
    stop();
    const motDiv = document.getElementById("mot-magique");
    if (motDiv) motDiv.textContent = "✅ 20 minutes écoulées — prends un moment.";
    stopMotsMagiques(true);
  }
}

// ===== Contrôles =====
function start() {
  if (timer) return;
  startTime = Date.now() - elapsed; // reprend si pause
  timer = setInterval(chrono, 100); // update toutes les 100ms pour fluidité
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
}

// ===== Mots magiques =====
const mots = [
  "Mâche lentement 🍴",
  "Respire profondément 🌿",
  "Pose ta fourchette ✋",
  "Savoure chaque bouchée 😌",
  "Écoute ton corps 💫",
  "Bois un peu d’eau 💧",
  "Sois dans l’instant présent 🕊️"
];

let indexMot = 0;
let intervalMots = null;

function lancerMotsMagiques() {
  const motDiv = document.getElementById("mot-magique");
  if (!motDiv) return;

  if (intervalMots) clearInterval(intervalMots);

  // montrer le premier mot tout de suite
  afficherMotAvecEffet(mots[indexMot]);
  indexMot = (indexMot + 1) % mots.length;

  // Changer le mot toutes les 5 secondes
  intervalMots = setInterval(() => {
    if (elapsed >= 20 * 60 * 1000) {
      clearInterval(intervalMots);
      intervalMots = null;
      return;
    }
    afficherMotAvecEffet(mots[indexMot]);
    indexMot = (indexMot + 1) % mots.length;
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

// ===== Animation des mots =====
function afficherMotAvecEffet(txt) {
  const motDiv = document.getElementById("mot-magique");
  if (!motDiv) return;
  motDiv.textContent = txt;

  // Reset animation pour qu'elle se rejoue
  motDiv.style.animation = 'none';
  void motDiv.offsetWidth; // force reflow
  motDiv.style.animation = 'smoke-in 3s ease forwards';
}

// ---- Empêche la mise en veille de l'écran pendant la session ----
let wakeLock = null;

async function keepScreenOn() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    console.log("🔋 L’écran restera allumé pendant la session DigZen.");
    
    document.addEventListener("visibilitychange", async () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        wakeLock = await navigator.wakeLock.request("screen");
      }
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

// 🟢 On modifie le bouton "Start" pour combiner les deux actions
const btnStart = document.getElementById("start");
if (btnStart) {
  btnStart.addEventListener("click", () => {
    keepScreenOn(); // 🔒 empêche la mise en veille
    start();        // 🕒 démarre le chrono (ta fonction déjà existante)
  });
}



