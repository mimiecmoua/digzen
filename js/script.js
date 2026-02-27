// === Icônes du carousel ===
const magicIcons = [
  {
    src: "img/Mache-lentement2.gif",
    alt: "Mâche lentement"
  },
  {
    src: "img/pose-fourchette2.gif",
    alt: "Pose ta fourchette"
  },
  {
    src: "img/savoure4.gif",
    alt: "Savoure chaque bouchée"
  },
  {
    src: "img/écoute-ton-corps3.gif",
    alt: "Écoute ton corps"
  },
  {
    src: "img/bois3.gif",
    alt: "Prends une toute petite gorgée d’eau"
  },
  {
    src: "img/moment-present2.gif",
    alt: "Sois dans l’instant présent"
  }
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
function afficherIcone(iconObj) {
  const box = document.getElementById("phrase-carousel");
  if (!box) return;

  box.innerHTML = "";

  const div = document.createElement("div");
  div.className = "phrase-item";

  // SEULEMENT l'image, sans texte en bas
  div.innerHTML = `
    <img src="${iconObj.src}" alt="${iconObj.alt}" class="magic-icon">
  `;

  box.appendChild(div);

  // relance l'animation fade-in
  div.classList.remove("show");
  void div.offsetWidth;
  div.classList.add("show");
}


function startCarousel() {
  stopCarousel();

  afficherIcone(magicIcons[carouselIndex]);
  carouselIndex = (carouselIndex + 1) % magicIcons.length;

  carouselInterval = setInterval(() => {
    afficherIcone(magicIcons[carouselIndex]);
    carouselIndex = (carouselIndex + 1) % magicIcons.length;

    if (elapsed >= 20 * 60 * 1000) stopCarousel(true);
  }, 10000);
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












