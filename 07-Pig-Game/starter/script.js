'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //use to add hidden class
//new game
btnNew.addEventListener('click', function () {
  currentScore = 0;
  diceEl.classList.add('hidden');
  score0El.textContent = currentScore;
  current0El.textContent = currentScore;
});

//Rolling dice
btnRoll.addEventListener('click', function () {
  //1. Generating dice roll
  //console.log(1);
  const dice = Math.trunc(Math.random() * 6) + 1;
  score0El.textContent = dice;
  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check for 1 rolled if true, switch to next player
  if (dice !== 1) {
    //add dice to currrent score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }

  score0El.textContent = dice;
});
