
const menuButton = document.querySelector('.menu-button');
const menuCloseButton = document.querySelector('.menu-close')

function showMobileMenu () {
    const menu = document.querySelector('.menu');
    menu.classList.add('active')
}   

function hideMobileMenu () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active')
}   

menuButton.addEventListener('click', showMobileMenu);

menuCloseButton.addEventListener('click', hideMobileMenu);

