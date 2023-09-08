function searchFruits() {
    var request = new XMLHttpRequest();
    // request.open('GET','https://localhost:7217/Fruit', true);
    request.open('GET','https://allarichalangejoaoaraujoapi.azurewebsites.net/Fruit', true);
    request.onload = (response) => {
      let fruits = JSON.parse(request.responseText);
      fruitsList.innerHTML = "";
      fruits.forEach(fruit => {
        fruitsList.innerHTML += "<li> Fruit Name: " + fruit.name + " , Color: " + fruit.color + ", Origin: " + fruit.origin;
      });
    }
    request.send();
  }