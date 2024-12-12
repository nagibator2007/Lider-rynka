// //отслеживание курсора
// document.addEventListener('mousemove', function(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     let outerCursor = document.querySelector('.circle-cursor-outer');
//     let innerCursor = document.querySelector('.circle-cursor-inner');
//     outerCursor.style.transform = `translate(${x }px, ${y }px)`
//     innerCursor.style.transform =`translate(${x}px, ${y}px)`
// });
// const cursorInner = document.querySelector('.circle-cursor-inner');
// function addHoverStyle() {
//     cursorInner.classList.add('cursor-link-hover');
// }
// function removeHoverStyle(){
//     cursorInner.classList.remove('cursor-link-hover');
// }
// document.querySelectorAll('button, a').forEach((element) => {
//     element.addEventListener('mouseenter', addHoverStyle);
//     element.addEventListener('mouseleave', removeHoverStyle);
// });