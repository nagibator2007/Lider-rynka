// Блок полезной информации
function changeTab(index) {
    let tabsContentItems = document.querySelectorAll('.tabs-content-item');
    tabsContentItems.forEach(item => {
        item.classList.remove('active');
    });

    tabsContentItems[index].classList.add('active');

    let tabsNavLinks = document.querySelectorAll('.tabs-nav-link');
    tabsNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    tabsNavLinks[index].classList.add('active');

    //черный background
    let indicator = document.querySelector('.tabs-nav-line');
    let tabHeight = tabsNavLinks[index].offsetHeight;
    let tabPosition = tabsNavLinks[index].offsetTop;
    indicator.style.height = tabHeight + 'px';
    indicator.style.transform = 'translateY(' + tabPosition + 'px)';
}