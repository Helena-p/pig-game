'use strict';

// SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  // gives a nr 0-5 + 1 to elevate to 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  // show dice img to dice nr
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // TODO: change player
  } else {
    // switch to next player
  }
});
