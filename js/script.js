// Navbar
const btnHamburger = document.querySelector("#btnHamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  btnHamburger.classList.toggle("open-btn");
  menu.classList.toggle("open-menu");
});

// Change Language
// - Menu showing and hiding
const btnChangeLang = document.querySelector("#changeLangBtn");
const langMenu = document.querySelector(".lang__menu");
const langIcon = document.querySelector(".lang__icon");
let clickCounter = 0;

function showLangMenu() {
  langMenu.classList.add("lang-menu-open");
  langIcon.classList.add("fa-chevron-up");
  clickCounter++;
}

function hideLangMenu() {
  langMenu.classList.remove("lang-menu-open");
  langIcon.classList.remove("fa-chevron-up");
  clickCounter++;
}

btnChangeLang.addEventListener("click", () => {
  if (clickCounter % 2 === 0) {
    showLangMenu();
  } else {
    hideLangMenu();
  }
});

// - Changing language
const changeLangPt = document.querySelector("#change-lang-pt");
const changeLangEn = document.querySelector("#change-lang-en");
const enText = document.querySelectorAll(".en-text");
const ptText = document.querySelectorAll(".pt-text");
const langImg = document.querySelector(".lang__img");

function removeHiddenClass() {
  document.querySelectorAll(".hidden-text").forEach((ht) => {
    if (ht.classList.contains("hidden-text")) {
      ht.classList.remove("hidden-text");
    }
  });
}

function translateToEn() {
  removeHiddenClass();
  ptText.forEach((pt) => {
    pt.classList.add("hidden-text");
  });
  document.documentElement.setAttribute("lang", "en");
  langImg.setAttribute("src", "images/united-states (1).png");
}

function translateToPt() {
  removeHiddenClass();
  enText.forEach((en) => {
    en.classList.add("hidden-text");
  });
  document.documentElement.setAttribute("lang", "pt-br");
  langImg.setAttribute("src", "images/brazil (1).png");
}

changeLangEn.addEventListener("click", () => {
  translateToEn();
  hideLangMenu();
});
changeLangPt.addEventListener("click", () => {
  translateToPt();
  hideLangMenu();
});
