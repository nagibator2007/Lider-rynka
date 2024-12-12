//dynamic-text для секции widget-sell
document.addEventListener("DOMContentLoaded", function() {
    var cont = document.querySelector('.dynamic1');
    var words = ["корпоративного сайта", "лендинга", "интернет-магазина", "сайт-визитки", "портала"];
    var currentIndex = 0;
    var p = 0;

    function printSmbl() {
        cont.textContent += words[currentIndex][p];
        p++;
        if (p < words[currentIndex].length) {
            setTimeout(printSmbl, 100);
        } else {
            setTimeout(eraseSmbl, 1000);
        }
    }

    function eraseSmbl() {
        var currentText = cont.textContent;
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            cont.textContent = currentText;
            setTimeout(eraseSmbl, 50);
        } else {
            currentIndex = (currentIndex + 1) % words.length;
            p = 0;
            setTimeout(printSmbl, 1000);
        }
    }

    setTimeout(printSmbl, 1000);
});

//dynamic-text для секции special-title
document.addEventListener("DOMContentLoaded", function() {
    var cont = document.querySelector('.dynamic');
    var words = ["сотрудников", "экспертов", "гуру", "профессионалов", "специалистов"];
    var currentIndex = 0;
    var p = 0;

    function printSmbl() {
        cont.textContent += words[currentIndex][p];
        p++;
        if (p < words[currentIndex].length) {
            setTimeout(printSmbl, 100);
        } else {
            setTimeout(eraseSmbl, 1000);
        }
    }

    function eraseSmbl() {
        var currentText = cont.textContent;
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            cont.textContent = currentText;
            setTimeout(eraseSmbl, 50);
        } else {
            currentIndex = (currentIndex + 1) % words.length;
            p = 0;
            setTimeout(printSmbl, 1000);
        }
    }

    setTimeout(printSmbl, 1000);
});