const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".main-text", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal("footer", {
  ...scrollRevealOption,
  origin: "bottom",
});
ScrollReveal().reveal(".description-text", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".btn", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".image-icon-container", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".image-flex-container", {
  ...scrollRevealOption,
  interval: 800,
});

let navigation = document.querySelector("nav");
let closeIcon = document.getElementById("close");
let openIcon = document.getElementById("open");

openIcon.addEventListener("click", () => {
  navigation.classList.add("show");
});
closeIcon.addEventListener("click", () => {
  navigation.classList.remove("show");
});

let body = document.getElementById("body");
let blue = document.getElementById("blue");
let black = document.getElementById("black");
let diet = document.getElementById("diet");
let image = document.getElementById("image");

blue.addEventListener("click", () => {
  body.style.background = "#044b83";
  image.setAttribute("src", "assets/pepsi_blue.png");
});

black.addEventListener("click", () => {
  body.style.background = "#000";
  image.setAttribute("src", "assets/pepsi_black.jpg");
});

diet.addEventListener("click", () => {
  body.style.background = "#e43c44";
  image.setAttribute("src", "assets/pepsi_diet.jpg");
});
