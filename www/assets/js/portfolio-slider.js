document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slidesContainer = slider.querySelector('.slides');
        const slides = slider.querySelectorAll('.slide');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function showNextSlide() {
            currentIndex++;
            slidesContainer.style.transition = 'transform 1s ease';
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

            if (currentIndex === totalSlides - 1) {
                setTimeout(() => {
                    slidesContainer.style.transition = 'none';
                    slidesContainer.style.transform = 'translateX(0)';
                    currentIndex = 0;
                }, 1000); 
            }
        }

        setInterval(showNextSlide, 4000); 
    });
});
