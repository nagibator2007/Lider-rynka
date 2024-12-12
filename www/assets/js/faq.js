const tabs = document.querySelectorAll('.tabs li');
const faqItems = document.querySelectorAll('.faq-item');
const faqContents = document.querySelectorAll('.faq-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Убираем класс 'active' со всех вкладок
      tabs.forEach(t => t.classList.remove('active'));
      // Убираем класс 'active' со всех блоков контента
      faqContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс 'active' текущей вкладке
      tab.classList.add('active');

      // Получаем атрибут data-target для определения целевого блока контента
      const targetId = tab.dataset.target;
      
      // Находим блок контента по ID и добавляем класс 'active'
      const targetContent = document.getElementById(targetId);
      targetContent.classList.add('active');
    });
  });

const toggles = document.querySelectorAll('.faq-item');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const faqItem = toggle.closest('.faq-item');
    const answer = faqItem.querySelector('.answer');

    // Переключаем класс активный/неактивный
    faqItem.classList.toggle('active');

    // Показываем/скрываем ответ
    if (faqItem.classList.contains('active')) {
      // Получаем высоту ответа
      const answerHeight = answer.scrollHeight;

      // Анимация раскрытия
      answer.style.transition = 'height 0.5s ease';
      answer.style.height = answerHeight + 'px';
    } else {
      // Анимация схлопывания
      answer.style.transition = 'height 0.5s ease';
      answer.style.height = '0';
    }
  });
});

const chatButton = document.querySelector('.chat-button');