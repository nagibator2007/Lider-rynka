//главное меню поверх всего
function toggleMenu() {
    let menu = document.querySelector('.humburger-menu');
    menu.classList.toggle('show-menu');
}
function closeMenu() {
    let menu = document.querySelector('.humburger-menu');
    menu.classList.remove('show-menu');
}