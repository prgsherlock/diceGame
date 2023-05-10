'use strict';
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');
const scorePlayer = document.querySelectorAll('.score');
let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
let currentScore = document.querySelectorAll('.current-score');

let active = document.querySelector('.player--active');
let player = document.querySelectorAll('.player');
let playerSection1 = document.querySelector('.player--0');
let playerSection2 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

let countPlayer = [0, 0];


//generate dice num .
function diceNumber() {
  if (
    !playerSection1.classList.contains('player--winner') &&
    !playerSection2.classList.contains('player--winner')
  ) {
    let random = Math.trunc(Math.random() * 6) + 1;
    const arr = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i++)
      if (random === arr[i]) {
        diceImg.src = `dice-${random}.png`;
        console.log(random);
        diceImg.classList.remove('hide');
      }
    if (random !== 1) {
      for (let i = 0; i < player.length; i++) {
        // console.log(player[i] === active);
        if (player[i] === active) {
          document;
          player[i].querySelector('.current-score').textContent = random;
          // calcScore(random);
          countPlayer[i] += random;
          scorePlayer[i].textContent = countPlayer[i];
          winGame();
        }
      }
    }
    if (random === 1) {
      playerSection1.classList.toggle('player--active');
      playerSection2.classList.toggle('player--active');
      active = document.querySelector('.player--active');
    }
    return;
  }
}

//change the winne- background-color: #2f2f2f;
function winGame() {
  if (scorePlayer1.textContent >= 50) {
    playerSection1.classList.add('player--winner');
    return;
  }
  if (scorePlayer2.textContent >= 50) {
    playerSection2.classList.add('player--winner');
    return;
  }
}

rollDice.addEventListener('click', diceNumber);

//resettingGame
function newGame() {
  for (let i = 0; i < currentScore.length; i++) {
    scorePlayer[i].textContent = '0';
    currentScore[i].textContent = '0';
  }
  countPlayer = [0, 0];
  playerSection1.classList.remove('player--winner');
  playerSection2.classList.remove('player--winner');
  playerSection1.classList.add('player--active');
  playerSection2.classList.remove('player--active');
  active = document.querySelector('.player--active');
  diceImg.classList.add('hide');

  return;
}
reset.addEventListener('click', newGame);

///hold button
function switchPlayer() {
  if (
    !playerSection1.classList.contains('player--winner') &&
    !playerSection2.classList.contains('player--winner')
  ) {
    for (let i = 0; i < currentScore.length; i++)
      currentScore[i].textContent = '0';

    playerSection1.classList.toggle('player--active');
    playerSection2.classList.toggle('player--active');
    active = document.querySelector('.player--active');
    return;
  }
}

hold.addEventListener('click', switchPlayer);
