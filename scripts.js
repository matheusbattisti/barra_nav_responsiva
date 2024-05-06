// script.js
var hamburgerButton = document.getElementById("hamburgerButton");
var closeButton = document.getElementById("closeButton");
var mobileMenu = document.getElementById("mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});
