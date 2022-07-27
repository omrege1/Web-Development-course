'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13; // sets the text content
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); //gets the value from input field
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let a = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //   document.querySelector('.message').textContent = 'Correct Number!';

  if (!guess) {
    displayMessage('No Number');
  } else if (guess == secretNumber) {
    displayMessage('Correct Number!');
    if (score > a) {
      document.querySelector('.highscore').textContent = score;
      a = score;
    } else {
      document.querySelector('.highscore').textContent = a;
    }
    document.querySelector('body').style.backgroundColor = '#00FF00';
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.highscore').textContent = secretNumber;

    //document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');

    score--;
    document.querySelector('.score').textContent = score;
  }

  //    else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  else {
    document.querySelector('.message').textContent = 'You lost the game';
  }
});
//   }
// }); //Event Listner on click of button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.message').textContent = 'Start Guessing';
  //document.querySelector('.number').textContent = ' ';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').textContent = '?';
});
