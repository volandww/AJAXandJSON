var counterPage = 1;
var animalConteiner = document.getElementById("animal-info");
var button = document.getElementById("button");

button.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' +
  counterPage + '.json');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderAnimalInfo(myData);
  };
  myRequest.send();
  counterPage++;
  if(counterPage > 3) {
    button.classList.add("hide-me");
  }
});

function renderAnimalInfo(data) {
  var stringHtml = "";

  for(i = 0; i < data.length; i++) {
    stringHtml += "<p>" + data[i].name + " is a species " + data[i].species + " thats likes to eat ";

    for(j = 0; j < data[i].foods.likes.length; j++){
      if(j == 0) {
        stringHtml += data[i].foods.likes[j];
      } else {
        stringHtml += " and " + data[i].foods.likes[j];
      }
    };

    stringHtml += " and dislackes ";

    for(j = 0; j < data[i].foods.dislikes.length; j++){
      if(j == 0) {
        stringHtml += data[i].foods.dislikes[j];
      } else {
        stringHtml += " and " + data[i].foods.dislikes[j];
      }
    };
    stringHtml += ".</p>";
  }

  animalConteiner.insertAdjacentHTML('beforeend', stringHtml);
}
