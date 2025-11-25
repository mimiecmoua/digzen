// === Phrases du carousel ===
const magicWords = [
  "Mâche lentement 🍴",
  "Respire profondément 🌿",
  "Pose ta fourchette ✋",
  "Savoure chaque bouchée 😌",
  "Écoute ton corps 💫",
  "Prends une toute petite gorgée d’eau 💧",
  "Sois dans l’instant présent 🕊️"
];

// === Chrono ===
let startTime = null;
let chronoInterval = null;
let elapsed = 0;
const chronoUpdateInterval = 500;

// === Carousel ===
let carouselIndex = 0;
let carouselInterval = null;

// === Affichage du chrono ===
function afficherTemps(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const s = totalSeconds % 60;
  const m = Math.floor(totalSeconds / 60) % 60;
  const h = Math.floor(totalSeconds / 3600);

  const tim = document.querySelector(".tim");
  if (tim) tim.innerHTML = `<span>${h} h</span>:<span>${m} min</span>:<span>${s} s</span>`;
}

// === Chrono en cours ===
function chrono() {
  const now = Date.now();
  elapsed = now - startTime;
  afficherTemps(elapsed);

  if (elapsed >= 20 * 60 * 1000) { // 20 minutes
    stopChrono();
    stopCarousel(true);
    afficherAnimationFin();
  }
}

// === Boutons ===
function startChrono() {
  if (chronoInterval) return;

  startTime = Date.now() - elapsed;
  chronoInterval = setInterval(chrono, chronoUpdateInterval);

  startCarousel();
  document.getElementById('start').disabled = true;
}

function stopChrono() {
  clearInterval(chronoInterval);
  chronoInterval = null;
  stopCarousel();
  document.getElementById('start').disabled = false;
}

function resetChrono() {
  stopChrono();
  elapsed = 0;
  afficherTemps(0);
  stopCarousel(true);

  const anim = document.getElementById("end-animation");
  if (anim) anim.style.display = "none";
}

// === Carousel dynamique ===
function afficherPhrase(phrase) {
  const box = document.getElementById("phrase-carousel");
  if (!box) return;

  box.innerHTML = "";

  const p = document.createElement("div");
  p.className = "phrase-item";
  p.textContent = phrase;

  box.appendChild(p);

  // relance l'animation fade-in
  p.classList.remove("show");
  void p.offsetWidth; // forcer reflow
  p.classList.add("show");
}

function startCarousel() {
  stopCarousel();

  afficherPhrase(magicWords[carouselIndex]);
  carouselIndex = (carouselIndex + 1) % magicWords.length;

  carouselInterval = setInterval(() => {
    afficherPhrase(magicWords[carouselIndex]);
    carouselIndex = (carouselIndex + 1) % magicWords.length;

    if (elapsed >= 20 * 60 * 1000) stopCarousel(true);
  }, 5000);
}

function stopCarousel(forceClear = false) {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }

  if (forceClear) {
    const box = document.getElementById("phrase-carousel");
    if (box) box.innerHTML = "";
  }
}

// === Initialisation ===
document.addEventListener("DOMContentLoaded", () => {
  afficherTemps(0);

  document.getElementById("start")?.addEventListener("click", () => {
    keepScreenOn();
    startChrono();
  });

  document.getElementById("stop")?.addEventListener("click", stopChrono);
  document.getElementById("reset")?.addEventListener("click", resetChrono);
});

// === Wake Lock ===
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
    console.error(err);
  }
}

// === Animation fin ===
function afficherAnimationFin() {
  const anim = document.getElementById("end-animation");
  if (anim) anim.style.display = "block";
}











