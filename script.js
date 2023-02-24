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
document.querySelector('.name').textContent = '';
const dealtCards = [];

function clearArray(array) {
  while (array.length > 0) {
    array.pop();
  }
}

function generateCard() {
  document.querySelector('.name').textContent = '';
  // 1. Generate random dice roll between 1-6
  let card = Math.trunc(Math.random() * 19) + 1;
  if (!dealtCards.includes(card)) {
    dealtCards.push(card);
    cardEl.classList.remove('hidden');
    cardEl.src = `card-${card}.png`;
    document.querySelector('.name').textContent = dealtCards.length;
  } else {
    if (dealtCards.length !== 19) {
      generateCard();
    } else {
      cardEl.classList.add('hidden');
      document.querySelector('.name').textContent = 'Game Over';
    }
  }
  console.log(dealtCards);
}

//////////////////////////////////////////////////// Event Handlers
// Roll Dice functionality
// btnDrawCard.addEventListener('click', generateCard);

btnDrawCard.addEventListener('touchstart', generateCard);

// btnNew.addEventListener('click', () => {
//   cardEl.classList.add('hidden');
//   document.querySelector('.name').textContent = '';
//   clearArray(dealtCards);
// });

btnNew.addEventListener('touchstart', () => {
  cardEl.classList.add('hidden');
  document.querySelector('.name').textContent = '';
  clearArray(dealtCards);
});
