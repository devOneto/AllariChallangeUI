function trackMousePosition(){
    window.addEventListener('mousemove', (event) => {
      mousePosition = { x: event.clientX, y: event.clientY };
      mousePosX.innerHTML = "X: " + mousePosition.x + " px";
      mousePosY.innerHTML = "Y: " + mousePosition.y + " px"
    });
  }