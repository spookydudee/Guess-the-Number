'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number👌`;

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 20;
document.querySelector('.label-highscore').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO number!';
    displayMessage('No number!');
  }
  // guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `Correct Number!`;

    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    score > highScore ? (highScore = score) : (highScore = highScore);

    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? `Too high!` : `Too low!`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose!');
      // document.querySelector('.message').textContent = `You lose!`;
      document.querySelector('.score').textContent = 0;
    }
  }
  // //guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Too high!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `You lose!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Too low!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else document.querySelector('.message').textContent = `You lose!`;
  // }
  // //   document.querySelector('.number').textContent = 20;
});
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = 20;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
});
