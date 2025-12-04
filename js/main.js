const slides = [
  {
    img: "images/1.jpg",
    title: "КРУПНЫЙ КОНФЛИКТ 21 ВЕКА",
    desc:
`В конце 2020‑х годов напряжённость в Прибалтике достигла критической отметки. В Латвии и Эстонии вспыхнули протесты, сопровождаемые диверсиями на инфраструктуре. НАТО обвинило Россию в поддержке радикальных группировок, Россия же заявила, что это «внутренние дела региона»..

Чтобы укрепить позиции, НАТО развернуло силы быстрого реагирования в Риге и Вильнюсе. Россия ответила масштабными учениями на территории Беларуси. Вскоре произошел первый инцидент: диверсия на железнодорожном узле привела к гибели мирных жителей. Обе стороны обвинили друг друга, и конфликт начал стремительно нарастать.`,
    tip: "НАТО и Вооружённые силы РФ являются основными действующими фракциями в конфликте. Каждая из сторон располагает собственными подразделениями, которые отличаются тактикой, оснащением и боевыми задачами. Эти подразделения формируют основу военных операций, обеспечивая уникальный стиль ведения боя и стратегическое разнообразие на поле сражения.",
    theme: "nato"
  },

  {
    img: "images/2.jpg",
    title: "Фаза I: Прибалтика → Польша",
    desc:
`В 2029 году кризис перерос в открытые боевые действия. Россия начала операцию, вводя войска через Беларусь. НАТО ответило операцией «Baltic Shield», укрепив оборону Польши и перебросив бронетехнику.

Первые крупные столкновения произошли в приграничных районах Литвы и Польши. Города превращались в укрепленные районы, дороги — в линии снабжения. Сувалский коридор стал ключевой точкой, где интересы обеих сторон пересеклись.

К 2030 году фронт застыл у границ Германии. НАТО удерживало Варшаву и запад Польши, Россия закрепилась в восточной части и на белорусском направлении. Линия боевых действий превратилась в позиционную войну: артиллерийские дуэли, танковые прорывы, постоянные диверсии.`,
    tip: "Боевые действия в Прибалтике начались с локальных диверсий и быстро переросли в полномасштабное противостояние. Городские районы, лесные массивы и пограничные узлы стали ареной ожесточённых столкновений. Здесь важна мобильность, скрытность и способность адаптироваться к быстро меняющейся обстановке.",
    theme: "nato"
  },

  {
    img: "images/3.jpg",
    title: "Фаза II: Ближний Восток",
    desc:
`Пока Европа погружалась в позиционный конфликт, мир столкнулся с новым кризисом — нехваткой ресурсов. Нефть и газ стали ключевыми факторами выживания.

На Ближнем Востоке вспыхнула гражданская война. Россия поддержала местные вооружённые группировки, НАТО — официальные правительства. Так открылся второй фронт.

Операция «Sand Viper» стала символом этого этапа: НАТО проводило рейды по зачистке террористических лагерей, но неожиданно сталкивалось с российскими вооруженными силами. Песчаные бури мешали авиации, нефтяные терминалы превращались в поле боя, а города-призраки — в крепости.`,
    tip: "На фоне энергетического кризиса Ближний Восток стал вторым фронтом. Песчаные бури, разрушенные города и борьба за нефтяные терминалы создают уникальные условия боя. Здесь действуют как регулярные части, так и прокси-группировки, а тактика зависит от контроля над ресурсами.",
    theme: "nato"
  },

  {
    img: "images/4.jpg",
    title: "Третья сила: Корпорация",
    desc:
`Пока Европа погружалась в позиционный конфликт, мир столкнулся с новым кризисом — нехваткой ресурсов. 

В Прибалтике корпорация поддерживала диверсантов, чтобы спровоцировать НАТО и РФ. В Польше она контролировала логистику снабжения, играя на обе стороны ради прибыли. На Ближнем Востоке именно её интересы в нефтяных месторождениях стали причиной открытия второго фронта.`,
    tip: "Equinox Systems - международная корпорация, официально занимающаяся энергетикой и логистикой. В реальности она управляет частными военными компаниями, снабжает обе стороны конфликта и влияет на ход боевых действий. Её интересы лежат вне политики — в контроле над рынками и ресурсами.",
    theme: "nato"
  },
];

// ====== КАСТОМНЫЕ ФРАЗЫ ЗАГРУЗКИ (легко менять) ======
const customPhrases = [
  "Подготовка данных…",
  "Инициализация модулей…",
  "Синхронизация ресурсов…",
  "Проверка целостности…",
  "Подключение к серверу…",
  "Загрузка карты…"
];

const bg = document.getElementById("background");
const sidePanel = document.querySelector(".side-panel");
const panelTitle = document.getElementById("panel-title");
const panelDesc = document.getElementById("panel-desc");
const panelTip = document.getElementById("panel-tip");
const panelScroll = document.querySelector(".panel-scroll");
const scrollFade = document.querySelector(".scroll-fade");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const loadingPhrase = document.getElementById("loading-phrase");

function setDescText(text) {
  const paragraphs = text.split(/\n{2,}/).map(t => t.trim()).filter(Boolean);
  panelDesc.innerHTML = paragraphs.map(p => `<span class="para">${p}</span>`).join("<br><br>");
}

function updateScrollFade() {
  const hasOverflow = panelScroll.scrollHeight > panelScroll.clientHeight + 2;
  scrollFade.style.display = hasOverflow ? "block" : "none";
}

// ====== ТЕМА ======
function applyTheme(theme) {
  const divider = document.querySelector(".panel-divider");
  const title = document.querySelector(".panel-header h1");
  const square = document.querySelector(".brand-logo");
  square.classList.remove("theme-nato", "theme-rf");

  if (theme === "nato") {
    title.style.color = "#cfe7ff";
    divider.style.background = "linear-gradient(90deg, rgba(160,200,255,0.8), rgba(160,200,255,0))";
    // square.classList.add("theme-nato"); // если добавишь разные лого
  } else {
    title.style.color = "#ffd6d6";
    divider.style.background = "linear-gradient(90deg, rgba(255,154,160,0.9), rgba(255,154,160,0))";
    // square.classList.add("theme-rf"); // если добавишь разные лого
  }
}

let index = 0;

function applySlide(i) { 
  const s = slides[i]; 
  bg.classList.add("fade-out"); 
  sidePanel.classList.add("fade-out");
   bg.classList.add("zoom-in"); 
   setTimeout(() => { 
    bg.style.backgroundImage = `url(${s.img})`;
   panelTitle.textContent = s.title; 
   setDescText(s.desc); 
   panelTip.textContent = s.tip; 
   applyTheme(s.theme); 
   bg.classList.remove("fade-out"); 
   sidePanel.classList.remove("fade-out"); 
   bg.classList.remove("zoom-in"); 
   bg.classList.add("zoom-reset"); 
   bg.classList.add("fade-in"); 
   sidePanel.classList.add("fade-in"); 
   requestAnimationFrame(updateScrollFade); 
   setTimeout(() => { 
    bg.classList.remove("fade-in", "zoom-reset"); 
  }, 700); 
}, 450); 
} 

function nextSlide() {
  index = (index + 1) % slides.length;
  applySlide(index);
}

applySlide(index);
setInterval(nextSlide, 10000);

let progress = 0;
let phraseIndex = 0;


function updateProgress(amount) {
  progress = Math.min(100, amount);
  progressBar.style.width = progress + "%";
  progressText.textContent = progress + "%";

  // Меняем фразу по шагам (каждые ~20%)
  const step = Math.floor(progress / 20);
  if (step !== phraseIndex) {
    phraseIndex = step;
    const p = customPhrases[phraseIndex % customPhrases.length];
    loadingPhrase.textContent = p;
  }
}

/*
function fakeTick() {
  if (progress < 100) {
    const step = Math.floor(Math.random() * 6) + 3; // 3–8%
    updateProgress(progress + step);
  }
}
setInterval(fakeTick, 900);
*/

// ====== ХУКИ Garry's Mod  ======
/*
window.GameDetails = function(serverName, serverURL, mapName, maxPlayers, steamID, gamemode) {
  document.querySelector(".server-name").textContent = `${serverName} — ${gamemode}`;
};

window.SetStatusChanged = function(status) {
  // Перехватываем оригинальные фразы GMod и заменяем кастомными по логике:
  // Например, можно сопоставить ключевые слова с кастомными фразами.
  // Простой вариант: вынести status напрямую в loadingPhrase:
  // loadingPhrase.textContent = status;
  // Или: использовать словарь:
  const map = [
    { key: "Sending client info", text: "Отправка клиентской информации…" },
    { key: "Workshop Complete", text: "Мастерская загружена." },
    { key: "Retrieving server info", text: "Получение данных сервера…" },
    { key: "Downloading", text: "Загрузка ресурсов…" }
  ];
  const found = map.find(m => status.includes(m.key));
  loadingPhrase.textContent = found ? found.text : status;
};

window.DownloadProgress = function(bytesReceived, bytesTotal) {
  if (bytesTotal > 0) {
    const pct = Math.round(bytesReceived / bytesTotal * 100);
    updateProgress(pct);
  }
};
*/