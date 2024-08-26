'use strict';

let ranNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // debugger;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a number';
  } else if (guess === ranNumber) {
    document.querySelector('.message').textContent = '👍 Right number';
    document.querySelector('.number').textContent = ranNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > ranNumber ? '⬇️ Decrease the number' : '⬆️ Increase the number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  console.log(ranNumber);
});

document.addEventListener('keydown', function (e) {
  console.log(e);
});
console.log(ranNumber);
