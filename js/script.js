// === Icônes du carousel ===
const magicIcons = [
  { src: "img/Mache-lentement2.gif", alt: "Mâche lentement" },
  { src: "img/pose-fourchette2.gif", alt: "Pose ta fourchette" },
  { src: "img/savoure4.gif", alt: "Savoure chaque bouchée" },
  { src: "img/écoute-ton-corps3.gif", alt: "Écoute ton corps" },
  { src: "img/bois3.gif", alt: "Prends une toute petite gorgée d’eau" },
  { src: "img/moment-present2.gif", alt: "Sois dans l’instant présent" }
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
  if (tim) {
    tim.innerHTML = `<span>${h} h</span>:<span>${m} min</span>:<span>${s} s</span>`;
  }
}

// === Chrono en cours ===
function chrono() {
  const now = Date.now();
  elapsed = now - startTime;
  afficherTemps(elapsed);

  // Fin du chrono de test = 5 sec (changer à 20*60*1000 pour 20 min)
  if (elapsed >= 20 * 60 * 1000) {
    stopChrono();
    stopCarousel(true);
    afficherAnimationFin(); // affiche le sondage dans le carousel
  }
}

// === Démarrer chrono ===
function startChrono() {
  if (chronoInterval) return;

  startTime = Date.now() - elapsed;
  chronoInterval = setInterval(chrono, chronoUpdateInterval);

  startCarousel();
  document.getElementById("start").disabled = true;
}

// === Stop chrono ===
function stopChrono() {
  clearInterval(chronoInterval);
  chronoInterval = null;
  stopCarousel();
  document.getElementById("start").disabled = false;
}

// === Reset ===
function resetChrono() {
  stopChrono();
  elapsed = 0;
  afficherTemps(0);
  stopCarousel(true);

  const anim = document.getElementById("end-animation");
  if (anim) anim.style.display = "none";

  // Réactiver les boutons du quiz
  const quizButtons = document.querySelectorAll(".quiz-btn");
  quizButtons.forEach(btn => {
    btn.disabled = false;
    btn.style.opacity = "1";
  });

  const quizMessage = document.getElementById("quiz-message");
  if (quizMessage) quizMessage.textContent = "";
}

// === Carousel ===
function afficherIcone(iconObj) {
  const box = document.getElementById("phrase-carousel");
  if (!box) return;

  box.innerHTML = "";

  const div = document.createElement("div");
  div.className = "phrase-item";

  div.innerHTML = `<img src="${iconObj.src}" alt="${iconObj.alt}" class="magic-icon">`;

  box.appendChild(div);

  // Animation apparition
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

    // fin du carousel après 20 min si nécessaire
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

// === Affichage du sondage DANS LE CAROUSEL ===
function afficherAnimationFin() {
  const box = document.getElementById("phrase-carousel");
  if (!box) return;

  box.innerHTML = `
    <div id="quiz-container" style="
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 25px;
      border-radius: 20px;
      width: 100%;
      max-width: 380px;
      text-align: center;
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    ">
      <h3>🎉 As-tu moins faim ?</h3>
      <div id="quiz-buttons">
        <button class="quiz-btn" data-value="oui">Oui</button>
        <button class="quiz-btn" data-value="non">Non</button>
      </div>
      <p id="quiz-message"></p>
    </div>
  `;

  // Réinitialiser événement des boutons
  const quizButtons = document.querySelectorAll(".quiz-btn");
  const quizMessage = document.getElementById("quiz-message");

  quizButtons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.dataset.value;
      const data = {
        encoreFaim: value,
        dureeRepas: elapsed,
        date: new Date().toISOString()
      };
      const historique = JSON.parse(localStorage.getItem("digzenStats")) || [];
      historique.push(data);
      localStorage.setItem("digzenStats", JSON.stringify(historique));

      quizButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.5";
      });

      if (quizMessage) quizMessage.textContent = "✔ Réponse enregistrée";
    });
  });
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
    if (!wakeLock && "wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
    }
    document.addEventListener("visibilitychange", async () => {
      if (!wakeLock && document.visibilityState === "visible") {
        wakeLock = await navigator.wakeLock.request("screen");
      }
    });
  } catch (err) {
    console.error(err);
  }
}














