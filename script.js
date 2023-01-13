'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👌👌 You Guessed Correctly';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 4;
document.querySelector('.guess').value = 46;
*/

// get the value when you click on the guess button

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒😒No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👌😊 Correct Number🏆👌';
    score = score + 1;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🤣🤣You lost the game🤣🤣';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
