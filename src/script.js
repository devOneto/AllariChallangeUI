let clock =  document.getElementById("clock");

let btn = document.getElementById("getFruitsButton");

let mousePosX = document.getElementById("mouseXPos")
let mousePosY = document.getElementById("mouseYPos")

let fruitsList = document.getElementById("fruitsList")

let slideIndex = 1;

let mousePosition;

function tick(){
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    clock.innerHTML = hours + ':' + minutes + ':' + seconds
    setTimeout(tick, 1000)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function trackMousePosition(){
  window.addEventListener('mousemove', (event) => {
    mousePosition = { x: event.clientX, y: event.clientY };
    mousePosX.innerHTML = "X: " + mousePosition.x + " px";
    mousePosY.innerHTML = "Y: " + mousePosition.y + " px"
  });
}

function searchFruits() {
  var request = new XMLHttpRequest();
  request.open('GET','https://localhost:7217/Fruit', true);
  request.onload = (response) => {
    let fruits = JSON.parse(request.responseText);
    fruitsList.innerHTML = "";
    fruits.forEach(fruit => {
      fruitsList.innerHTML += "<li> Fruit Name: " + fruit.name + " , Color: " + fruit.color + ", Origin: " + fruit.origin;
    });
  }
  request.send();
}

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

tick();

showSlides(slideIndex);

trackMousePosition();