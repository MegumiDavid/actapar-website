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