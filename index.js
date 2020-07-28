// random image code for image 1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6; //(0 - 5.99999999999999999)
randomNumber1 = Math.floor(randomNumber1) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1 - dice6
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png -images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



// random image code for image 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//declaring the winner of the game after every Refresh
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}