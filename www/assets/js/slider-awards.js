//СЛАЙДЕР НАГРАД
document.addEventListener('DOMContentLoaded', function() {
    function loadSlider() {
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');
      const sliderAwards = document.querySelector('.awards-slider-main');
    
      let scrollAmount = 0;
      const scrollStep = 200; /* Увеличим шаг для плавности */
    
      nextButton.addEventListener('click', () => {
        scrollAmount += scrollStep;
        if (scrollAmount > sliderAwards.scrollWidth - sliderAwards.clientWidth) 
        {
          scrollAmount = sliderAwards.scrollWidth - sliderAwards.clientWidth;
        }
        sliderAwards.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    
      prevButton.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) {
          scrollAmount = 0;
        }
        sliderAwards.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    }
    
    loadSlider();
  });

// Плавное появление/исчезание слайдов при загрузке страницы
window.onload = function () {
    const slideItems = document.querySelectorAll('.slide-item');
    slideItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('hidden');
        }, index * 200); // Появление каждого слайда с небольшой задержкой
    });
};