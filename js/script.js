// Navbar
const btnHamburger = document.querySelector('#btnHamburger')
const menu = document.querySelector('.menu')

btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('open-btn')
    menu.classList.toggle('open-menu')
})