const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");
const titleEl = document.getElementById("title");

https: var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice1El.src = "/images/dice" + randomNumber1 + ".png";
dice2El.src = "/images/dice" + randomNumber2 + ".png";

if (randomNumber1 === randomNumber2) {
  titleEl.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  titleEl.innerHTML = "<img src='/images/victory.gif'/> Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  titleEl.innerHTML = "Player 2 Wins! <img src='/images/victory.gif'/>";
}

console.log(randomNumber1);
console.log(randomNumber2);
