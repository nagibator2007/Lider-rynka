//filter
document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.grid-filter a');
    const items = document.querySelectorAll('.grid-inner');
    const container = document.querySelector('.portfolio-wrapper');

    function calculateContainerHeight() {
        var containerHeight = 0;
        $('.grid-inner').each(function() {
            containerHeight = Math.max(containerHeight, $(this).outerHeight(true));
        });
        $('.portfolio-wrapper').css('height', containerHeight);
    }
    
    calculateContainerHeight();

    // Инициализация Masonry
    const $grid = $(container).masonry({
        itemSelector: '.grid-inner',
        columnWidth: '.grid-inner',
        percentPosition: true,
    });

    // Функция для применения фильтрации
    function applyFilter(filter) {
        items.forEach(item => {
            if (filter === '*' || item.classList.contains(filter.substring(1))) {
                item.classList.remove('hidden');
                requestAnimationFrame(() => {
                    item.style.transition = 'opacity 0.5s, transform 0.5s';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                });
            } else {
                item.style.transition = 'opacity 0.5s, transform 0.5s';
                item.style.opacity = '0.3';
                item.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    item.classList.add('hidden');
                }, 200);
            }
        });
        setTimeout(() => {
            $grid.masonry('layout');
        }, 200);
    }

    // Добавляем обработчики событий для фильтров
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');


            filterLinks.forEach(link => link.classList.remove('activeFilter'));

            this.classList.add('activeFilter');

            applyFilter(filter);

            // Обновляем Masonry после применения фильтра
            setTimeout(() => {
                $grid.masonry('layout');
            }, 200);
        });
    });

    // Добавляем обработчик события для кнопки перемешивания
    const shuffleButton = document.querySelector('.grid-shuffle');
    shuffleButton.addEventListener('click', function() {
        // Преобразуем NodeList в массив и перемешиваем
        const shuffledItems = Array.from(items);
        shuffledItems.sort(() => Math.random() - 0.5);

        // Удаляем элементы из контейнера и добавляем их заново в перемешанном порядке
        container.innerHTML = '';
        shuffledItems.forEach(item => {
            container.appendChild(item);
        });

        // Перестраиваем Masonry после перемешивания
        setTimeout(() => {
            $grid.masonry('reloadItems');
            $grid.masonry('layout');
        }, 200);
    });
});