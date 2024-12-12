document.addEventListener("DOMContentLoaded", function () {

    function updateCalculator() {
        let selectedFormFieldDesign = getRadioValue("form-field-design");
        let selectedFormFieldDesign2 = getRadioValue("form-field-design2");
        let selectedFormFieldDesign3 = getRadioValue("form-field-design3");
        let selectedFormFieldDesign4 = getRadioValue("form-field-design4");
        let selectedFormFieldDesign5 = getRadioValue("form-field-design5");
        let selectedFormFieldDesign6 = getCheckboxValues("form-field-design6");

        let totalCost = selectedFormFieldDesign + selectedFormFieldDesign2 +
                        selectedFormFieldDesign3 + selectedFormFieldDesign4 +
                        selectedFormFieldDesign5 + selectedFormFieldDesign6;

        let resultElement = document.querySelector(".filed-res-value");
        resultElement.textContent = totalCost.toLocaleString();
    }

    function getRadioValue(formId) {
        let selectedRadio = document.querySelector(`#${formId} input[name^='form_fields']:checked`);
        return selectedRadio ? parseInt(selectedRadio.value) : 0;
    }

    function getCheckboxValues(formId) {
        let selectedCheckboxes = document.querySelectorAll(`#${formId} input[type='checkbox']:checked`);
        return Array.from(selectedCheckboxes).reduce(function (acc, checkbox) {
            return acc + parseInt(checkbox.value);
        }, 0);
    }

    document.getElementById("form-field-design").addEventListener("change", updateCalculator);
    document.getElementById("form-field-design2").addEventListener("change", updateCalculator);
    document.getElementById("form-field-design3").addEventListener("change", updateCalculator);
    document.getElementById("form-field-design4").addEventListener("change", updateCalculator);
    document.getElementById("form-field-design5").addEventListener("change", updateCalculator);
    document.getElementById("form-field-design6").addEventListener("change", updateCalculator);

    updateCalculator();
});