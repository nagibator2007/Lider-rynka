
const checkboxSeo = document.getElementById('seo-pro');
const slidersSeo = document.getElementById('sliders-seo');
const calculatorSeoProd = document.getElementById('seo-result');
const expensesAc = document.getElementById('expenses');
const wrapperAc = document.getElementById('wrapper-btn');

checkboxSeo.addEventListener('change', () => {
  if (checkboxSeo.checked) {
    slidersSeo.classList.add('active');
    calculatorSeoProd.classList.add('active');
    expensesAc.classList.add('active');
    wrapperAc.classList.add('active');
  } else {
    slidersSeo.classList.remove('active');
    calculatorSeoProd.classList.remove('active');
    expensesAc.classList.remove('active');
    wrapperAc.classList.remove('active');
  }
});
function toggleContent() {
    var checkbox = document.getElementById("seo-pro");
    var additionalContent = document.querySelectorAll(".additional-content");
    var reklamaResult = document.querySelector(".reklama-result");

    additionalContent.forEach(function (content) {
        if (checkbox.checked) {
            content.style.display = "block";
            setTimeout(function () {
                content.style.opacity = 1;
                reklamaResult.style.top = "500px";
            }, 10);
        } else {
            content.style.opacity = 0;
            reklamaResult.style.top = "130px";
            setTimeout(function () {
                content.style.display = "none";
            }, 500); // Adjust the duration to match the transition duration
        }
    });
}





//калькулятор "Стоимость разработки"
document.addEventListener("DOMContentLoaded", function () {
  function updateCalculator1() {
      let selectedSiteType = parseInt(document.getElementById("filter-sait1").value);
      let selectedDesignType = parseInt(document.getElementById("filter-design1").value);
      let extraServices = document.querySelectorAll("#extra1 input:checked");

      let siteTypeCost = selectedSiteType;
      let designTypeCost = selectedDesignType;

      let extraServicesCost = Array.from(extraServices).reduce(function (acc, checkbox) {
          return acc + parseInt(checkbox.value);
      }, 0);

      let totalCost = siteTypeCost + designTypeCost + extraServicesCost;

      let resultElement = document.querySelector(".form-res-value1");
      resultElement.textContent = totalCost.toLocaleString();
  }

  document.getElementById("filter-sait1").addEventListener("change", updateCalculator1);
  document.getElementById("filter-design1").addEventListener("change", updateCalculator1);
  document.getElementById("extra1").addEventListener("change", updateCalculator1);

  updateCalculator1();
});