// //Почему выбирают нас
// let openElement = null;

// function toggleContent(element) {
//     const collapseDiv = element.querySelector('.accordion-collapse');

//     if (openElement && openElement !== element) {
//         openElement.classList.remove('open');
//         openElement.querySelector('.accordion-collapse').style.maxHeight = '0';
//     }

//     const isOpen = element.classList.toggle('open');
//     collapseDiv.style.maxHeight = isOpen ? collapseDiv.scrollHeight + 'px' : '0';
//     openElement = isOpen ? element : null;
// }

//калькулятор "Стоимость разработки"
// document.addEventListener("DOMContentLoaded", function () {
//     function updateCalculator1() {
//         let selectedSiteType = parseInt(document.getElementById("filter-sait1").value);
//         let selectedDesignType = parseInt(document.getElementById("filter-design1").value);
//         let extraServices = document.querySelectorAll("#extra1 input:checked");

//         let siteTypeCost = selectedSiteType;
//         let designTypeCost = selectedDesignType;

//         let extraServicesCost = Array.from(extraServices).reduce(function (acc, checkbox) {
//             return acc + parseInt(checkbox.value);
//         }, 0);

//         let totalCost = siteTypeCost + designTypeCost + extraServicesCost;

//         let resultElement = document.querySelector(".form-res-value1");
//         resultElement.textContent = totalCost.toLocaleString();
//     }

//     document.getElementById("filter-sait1").addEventListener("change", updateCalculator1);
//     document.getElementById("filter-design1").addEventListener("change", updateCalculator1);
//     document.getElementById("extra1").addEventListener("change", updateCalculator1);

//     updateCalculator1();
// });


// //калькулятор "Стоимость разработки"
// document.addEventListener("DOMContentLoaded", function () {
//     function updateCalculator() {
//         let selectedSiteType = parseInt(document.getElementById("filter-sait").value);
//         let selectedDesignType = parseInt(document.getElementById("filter-design").value);
//         let extraServices = document.querySelectorAll("#extra input:checked");

//         let siteTypeCost = selectedSiteType;
//         let designTypeCost = selectedDesignType;

//         let extraServicesCost = Array.from(extraServices).reduce(function (acc, checkbox) {
//             return acc + parseInt(checkbox.value);
//         }, 0);

//         let totalCost = siteTypeCost + designTypeCost + extraServicesCost;

//         let resultElement = document.querySelector(".form-res-value");
//         resultElement.textContent = totalCost.toLocaleString();
//     }

//     document.getElementById("filter-sait").addEventListener("change", updateCalculator);
//     document.getElementById("filter-design").addEventListener("change", updateCalculator);
//     document.getElementById("extra").addEventListener("change", updateCalculator);

//     updateCalculator();
// });




//кулькулятор разработки сайта



