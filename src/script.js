let clock =  document.getElementById("clock");

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

tick()