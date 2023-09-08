let clock =  document.getElementById("clock");

let btn = document.getElementById("getFruitsButton");

let mousePosX = document.getElementById("mouseXPos")
let mousePosY = document.getElementById("mouseYPos")

let fruitsList = document.getElementById("fruitsList")

let slideIndex = 1;

let mousePosition;

tick();

showSlides(slideIndex);

trackMousePosition();

btn.onclick = function (e) {

  let ripple = document.createElement("span");

  ripple.classList.add("ripple");

  this.appendChild(ripple);

  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
      ripple.remove();
  }, 300);

  searchFruits()
};