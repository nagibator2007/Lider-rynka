//Выпадающие меню в header
// function positionDropdownContent() {
//     var wrapper = document.querySelector('.wrapper');
//     var dropdown = document.querySelector('.dropdown');
//     var dropdownContents = document.querySelectorAll('.dropdown-content');

//     var wrapperRect = wrapper.getBoundingClientRect();
//     var dropdownRect = dropdown.getBoundingClientRect();

//     var wrapperPaddingLeft = parseFloat(getComputedStyle(wrapper).paddingLeft);
//     var wrapperPaddingRight = parseFloat(getComputedStyle(wrapper).paddingRight);
//     var leftPosition = dropdownRect.left - wrapperRect.left - wrapperPaddingLeft;

//     leftPosition = Math.max(leftPosition, 0); 

//     dropdownContents.forEach(function (dropdownContent) {
//         dropdownContent.style.left = -leftPosition + 'px';
//     });
// }

function positionDropdownContent(dropdownId) {

    var wrapper = document.querySelector('.wrapper');
    var dropdown = document.getElementById(dropdownId); 
    var dropdownContent = document.getElementById(dropdownId + '-content'); 

    var wrapperRect = wrapper.getBoundingClientRect();
    var dropdownRect = dropdown.getBoundingClientRect();

    var wrapperPaddingLeft = parseFloat(getComputedStyle(wrapper).paddingLeft);
    var wrapperPaddingRight = parseFloat(getComputedStyle(wrapper).paddingRight);
    var leftPosition = dropdownRect.left - wrapperRect.left - wrapperPaddingLeft;

    leftPosition = Math.max(leftPosition, 0); 

    dropdownContent.style.left = -leftPosition + 'px';
}

positionDropdownContent('myDropdown'); 