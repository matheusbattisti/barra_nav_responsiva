// script.js
var hamburgerButton = document.getElementById("hamburgerButton");
var closeButton = document.getElementById("closeButton");
var mobileMenu = document.getElementById("mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.style.display = "flex";
  hamburgerButton.style.display = "none";
});

closeButton.addEventListener("click", function () {
  mobileMenu.style.display = "none";
  hamburgerButton.style.display = "block";
});
