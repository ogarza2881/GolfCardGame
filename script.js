'use strict';
////////////////////////////////////////////////////// Dom Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const cardEl = document.querySelector('.card');
const btnNew = document.querySelector('.btn--new');
const btnDrawCard = document.querySelector('.btn--draw-card');

//////////////////////////////////////////////////Set initial Values
cardEl.classList.add('hidden');
document.querySelector('.name').textContent = 'Click New Card';

//////////////////////////////////////////////////// Event Handlers
// Roll Dice functionality
btnDrawCard.addEventListener('click', () => {
  document.querySelector('.name').textContent = 'Card Selected';
  // 1. Generate random dice roll between 1-6
  const card = Math.trunc(Math.random() * 19) + 1;
  // 2. Display dice
  cardEl.classList.remove('hidden');
  cardEl.src = `card-${card}.png`;
  // 3. Check for rolled 1
});

btnDrawCard.addEventListener('touchstart', () => {
  document.querySelector('.name').textContent = 'Card Selected';
  // 1. Generate random dice roll between 1-6
  const card = Math.trunc(Math.random() * 8) + 1;
  // 2. Display dice
  cardEl.classList.remove('hidden');
  cardEl.src = `card-${card}.png`;
});

btnNew.addEventListener('click', () => {
  cardEl.classList.add('hidden');
  document.querySelector('.name').textContent = 'Click New Card';
});

btnNew.addEventListener('touchstart', () => {
  cardEl.classList.add('hidden');
  document.querySelector('.name').textContent = 'Click New Card';
});
