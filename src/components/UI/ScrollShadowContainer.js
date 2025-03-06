// document.addEventListener("DOMContentLoaded", function () {
//     const scrollBox = document.getElementById("scrollBox");
//     const topShadow = document.getElementById("topShadow");
//     const bottomShadow = document.getElementById("bottomShadow");

//     function updateShadows() {
//       topShadow.style.opacity = scrollBox.scrollTop > 0 ? "1" : "0";
//       bottomShadow.style.opacity = 
//         scrollBox.scrollTop + scrollBox.clientHeight < scrollBox.scrollHeight ? "1" : "0";
//     }

//     scrollBox.addEventListener("scroll", updateShadows);
//     updateShadows(); // Инициализация
// });