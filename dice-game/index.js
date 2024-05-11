var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;

var diceimage1 = "dice" + randomnum1 + ".png";
var diceimage2 = "dice" + randomnum2 + ".png";

var image1 = "images/" + diceimage1;
var image2 = "images/" + diceimage2;

var imagen1 = document.querySelectorAll("img")[0];
imagen1.setAttribute("src", image1);

var imagen2 = document.querySelectorAll("img")[1];
imagen2.setAttribute("src", image2);

if (randomnum1 > randomnum2) {
    document.querySelectorAll("h1")[0].innerHTML = "PLAYER 1 WINS";
}
else if (randomnum1 < randomnum2){
    document.querySelectorAll("h1")[0].innerHTML = "PLAYER 2 WINS";
}
else {
    document.querySelectorAll("h1")[0].innerHTML = "DRAW";
}