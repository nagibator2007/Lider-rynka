//header-fixed
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header-fixed');
    let headerNav = document.querySelector('.header-nav');
    let brandingLogo = document.querySelector('.brand-black img');
    let navLinks = document.querySelectorAll('nav a');
    let scrollY = window.scrollY;

    if (scrollY > 100 && scrollY <= 200) {
        header.classList.add('hidden');
        header.classList.add('fixed');
    } else if (scrollY > 200) { 
        header.classList.remove('hidden');
        header.classList.add('visible');
        headerNav.classList.add('showed');
        navLinks.forEach(link => {
            link.style.color = '#403737';
            link.style.textShadow = 'none'
        });
        // brandingLogo.src = 'assets/img/logopre.png ';
    } else {
        header.classList.remove('hidden', 'visible','fixed');
        headerNav.classList.remove('showed');
        // brandingLogo.src = 'logo black.png';
        navLinks.forEach(link => {
            link.style.color = '';
            link.style.textShadow = ''
        });
    }   
});