// DOM Variables
const nav = document.querySelector(".mobile-nav");
const menuButton = document.querySelector(".mobile-menu__container");
const menuLines = document.querySelectorAll(".mobile-menu__line");

// Functionality
menuButton.addEventListener("click", function () {
  menuLines.forEach((element) => {
    element.classList.toggle("mobile-menu__line--clicked"); // Menu animation
  });
  nav.classList.toggle("mobile-nav--focused");
  document.querySelector('html').classList.toggle('no-scroll');
});
