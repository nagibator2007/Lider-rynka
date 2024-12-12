//Новый калькулятор 
$(document).ready(function () {
    function updateResults() {
        var budget = $("#slider1").val();
        var dealAmount = $("#slider2").val();
        var conversionRate = $("#slider3").val();
        var clickCost = $("#slider4").val();

        var seoProd = $("#seo-pro").val();

        var sliderPos = getSliderPosValue($("#slider-pos").val());
        var sliderSearch = $("#slider-search").val();

        if (sliderSearch == 0) {
            $("#slider-search").val(1000);
            sliderSearch = 1000; 
        }
        
        $("#slider-search").on("input", function() {
            var currentValue = $(this).val();
        
            if (currentValue == 0) {
                $(this).val(1000);
                currentValue = 1000;
            }

            $("#slider-search-value").text(currentValue);

            clickCost = currentValue;
        });
        
        // Проверка, если значение #slider4 равно 340, то изменить на 330
        if (clickCost == 340) {
            $("#slider4").val(330);
            clickCost = 330; // Обновить значение переменной clickCost
        }
        $("#slider4").on("input", function() {
            var currentValue = $(this).val();
        
            // Проверка, если текущее значение равно 340, изменить на 330
            if (currentValue == 340) {
                $(this).val(330); // Обновить значение слайдера
                currentValue = 330;
            }
        
            // Обновить текст в элементе с id "slider4-value"
            $("#slider4-value").text(currentValue);
        
            // Обновить переменную clickCost
            clickCost = currentValue;
        });

        var additionalFormula = 0;

        if (!$("#seo-pro").prop("checked")) {
            var sliderSearch = $("#slider-search").val();
            var sliderPos = getSliderPosValue($("#slider-pos").val());
        }
        
        var additionalFormula = (sliderSearch * sliderPos) * (conversionRate / 100) * dealAmount;
        var profitReklama = (budget / clickCost) * (conversionRate / 100) * dealAmount;
        var profit = (budget / clickCost) * (conversionRate / 100) * dealAmount + additionalFormula;

        var expenses = parseInt(budget);
        var budgetRek = parseInt(budget);
        var caseSeo = parseInt(seoProd)
            // Суммируем выбранные значения чекбоксов
            $(".calculat-checbox input:checked").each(function () {
                expenses += parseInt($(this).val());
            });
            $("#reklama1 input:checked").each(function () {
                budgetRek += parseInt($(this).val());
            });
            $("#seo-pro input:checked").each(function(){
                caseSeo += parseInt($(this).val());
            });

            $("#form-res-value").text(Math.round(profit).toLocaleString() + ' ₽');
            $("#expenses-res").text(Math.round(expenses).toLocaleString() + ' ₽');
            $("#form-seo-res-value").text(Math.round(additionalFormula).toLocaleString() + ' ₽');
            $("#expenses-seo-res").text(Math.round(caseSeo).toLocaleString() + ' ₽');
            $("#form-reklama-res-value").text(Math.round(profitReklama).toLocaleString() + ' ₽');
            $("#expenses-reklama-res").text(Math.round(budgetRek).toLocaleString() + ' ₽');
    }

    function getSliderPosValue(value) {
        if (value == 1) {
            return 0.9;
        } else if (value == 2) {
            return 0.8;
        } else if (value == 3) {
            return 0.6;
        } else if (value == 4) {
            return 0.5;
        } else if (value == 6 || value == 7) {
            return 0.3;
        } else if (value == 8) {
            return 0.2;
        } else if (value == 9) {
            return 0.1;
        } else if (value >= 10) {
            return 0.01;
        } else {
            return 1; // По умолчанию
        }
    }

    // Установка минимальных значений для каждого слайдера
    $("#slider1").val($("#slider1").attr("min"));
    $("#slider2").val($("#slider2").attr("min"));
    $("#slider3").val($("#slider3").attr("min"));
    $("#slider4").val($("#slider4").attr("min"));
    $("#slider-search").val($("#slider-search").attr("min"));

    // Установка шага для каждого слайдера
    $("#slider1").attr("step", 10000);
    $("#slider2").attr("step", 1000);
    $("#slider3").attr("step", 1);
    $("#slider4").attr("step", 30);
    $('#reklama1').attr("step", 5000);

    $('#slider1').val(30000);
    $('#slider2').val(39000);
    $('#slider3').val(3);
    $('#slider4').val(70);
    $('#slider-search').val(5000);
    $('#slider-pos').val(7);

    $("#slider1, #slider2, #slider3, #slider-pos, #slider4, #slider-search, .calculat-checbox input, #seo-pro, #sliders-seo").on("input change", function () {
        updateResults();
    });

    updateResults();
    
});
//ползунок
$(document).ready(function () {
    
    $('.range-slider').each(function () {
        var sliderId = $(this).attr('id');
        var initialValue = $(this).val();
        $('#' + sliderId + '-value').text(formatNumberWithSpaces(initialValue));
    });    

    $('.range-slider').on('input', function () {
        var sliderId = $(this).attr('id');
        var sliderValue = $(this).val();

        // Проверка, если значение #slider4 равно 340, то изменить на 330
        if (sliderId === 'slider4' && sliderValue === 340) {
            sliderValue = 330;
            $(this).val(sliderValue);
        }

        $('#' + sliderId + '-value').text(formatNumberWithSpaces(sliderValue));
        updateSliderPosition(sliderId);
    });


    
    function updateSliderPosition(sliderId) {
        var slider = $('#' + sliderId);
        var valueSpan = $('#' + sliderId + '-value');

        var sliderWidth = slider.width();
        var sliderMin = parseFloat(slider.attr('min'));
        var sliderMax = parseFloat(slider.attr('max'));
        var valueSpanWidth = valueSpan.width();

        var leftOffset = Math.max(0, ((slider.val() - sliderMin) / (sliderMax - sliderMin)) * sliderWidth - (valueSpanWidth / 2));

        valueSpan.css('left', leftOffset + 'px');
    }
    $('#slider-pos').on('input', function () {
        updateSliderPosition('slider-pos');
    });

    function formatNumberWithSpaces(number) {
        return parseFloat(number).toLocaleString('en-US');
    }
});