// document.addEventListener("DOMContentLoaded", () => {
//   const notList = '[href^="#"], [target], [data-target], .custom-link';
//   const links = document.querySelectorAll(`a:not(${notList})`);
//   const loadingWrap = document.querySelector(".loading-wrap");
//   const body = document.querySelector("body");

//   const animInClass = "is-loading-anim-in";
//   const visibleClass = "is-visible";
//   const animDuration = 500;

//   links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       body.classList.add(animInClass);
//       loadingWrap.classList.add(visibleClass);
//       setTimeout(() => {
//         window.location.href = link.href;
//       }, animDuration);
//     });
//   });

//   window.addEventListener("beforeunload", () => {
//     body.classList.add(animInClass);
//   });

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       body.classList.remove(animInClass);
//       loadingWrap.classList.remove(visibleClass);
//     }, animDuration);
//   });
// });