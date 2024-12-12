//mobile блок полезной ифнормации
let openElementMobile = null;
function toggleContentMobile(element) {
    const collapseDiv = element.querySelector('.info-text-mobile');

    if (openElementMobile && openElementMobile !== element) {
        openElementMobile.classList.remove('open');
        openElementMobile.querySelector('.info-text-mobile').style.maxHeight = '0';
    }

    const isOpen = element.classList.toggle('open');
    collapseDiv.style.maxHeight = isOpen ? collapseDiv.scrollHeight + 'px' : '0';
    openElementMobile = isOpen ? element : null;
}