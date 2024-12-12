//Карточки тарифов
let cards = document.querySelectorAll('.card-wrapper');

cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
        let rect = card.getBoundingClientRect();
        
        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;
        
        let tiltX = -(mouseX / rect.width - 0.5) * 20;
        let tiltY = (mouseY / rect.height - 0.5) * 20;
        card.style.transform = 'perspective(6000px) rotateX(' + tiltY + 'deg) rotateY(' + tiltX + 'deg)';
    });

    card.addEventListener('mouseleave', function () {
        card.style.transition = 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s';
        card.style.transform = 'perspective(6000px) rotateX(0deg) rotateY(0deg)';
    });
});
