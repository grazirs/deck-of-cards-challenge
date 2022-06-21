const cards = [
  {value:'A', suit: '♥'}, {value:'2', suit: '♥'}, {value:'3', suit: '♥'}, {value:'4', suit: '♥'}, {value:'5', suit: '♥'}, {value:'6', suit: '♥'}, {value:'7', suit: '♥'}, {value:'8', suit: '♥'},  {value:'9', suit: '♥'}, {value:'10', suit: '♥'}, {value:'J', suit: '♥'}, {value:'Q', suit: '♥'}, {value:'K', suit: '♥'},
  {value:'A', suit: '♠'}, {value:'2', suit: '♠'}, {value:'3', suit: '♠'}, {value:'4', suit: '♠'}, {value:'5', suit: '♠'}, {value:'6', suit: '♠'}, {value:'7', suit: '♠'}, {value:'8', suit: '♠'},  {value:'9', suit: '♠'}, {value:'10', suit: '♠'}, {value:'J', suit: '♠'}, {value:'Q', suit: '♠'}, {value:'K', suit: '♠'},
  {value:'A', suit: '♦'}, {value:'2', suit: '♦'}, {value:'3', suit: '♦'}, {value:'4', suit: '♦'}, {value:'5', suit: '♦'}, {value:'6', suit: '♦'}, {value:'7', suit: '♦'}, {value:'8', suit: '♦'},  {value:'9', suit: '♦'}, {value:'10', suit: '♦'}, {value:'J', suit: '♦'}, {value:'Q', suit: '♦'}, {value:'K', suit: '♦'},
  {value:'A', suit: '♣'}, {value:'2', suit: '♣'}, {value:'3', suit: '♣'}, {value:'4', suit: '♣'}, {value:'5', suit: '♣'}, {value:'6', suit: '♣'}, {value:'7', suit: '♣'}, {value:'8', suit: '♣'},  {value:'9', suit: '♣'}, {value:'10', suit: '♣'}, {value:'J', suit: '♣'}, {value:'Q', suit: '♣'}, {value:'K', suit: '♣'}
];
let filter;
let shuffle = false;
const main = document.getElementsByClassName('cards')[0];
let currentDeck = [];

function createDeckOfCards(cards){
  return cards.map(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `${card.value} ${card.suit}`;
      if (card.suit === '♥' || card.suit === '♦'){
        el.classList.add('card--red');
      }
    return el;
  });
}

function filterCards() {
  currentDeck = filter ? cards.filter(card => card.suit === filter) : cards;
  const filteredDeck = createDeckOfCards(currentDeck);
  main.replaceChildren(...filteredDeck);
}

function shuffleCards() {
  currentDeck = shuffle ? shuffleArray([...cards]) : cards;
  const shuffledDeck = createDeckOfCards(currentDeck);
  main.replaceChildren(...shuffledDeck);
}

function filterAndShuffleCards() {
  let filterAndShuffle = currentDeck.filter(card => card.suit === filter);
  const filterAndShuffleDeck = createDeckOfCards(filterAndShuffle);
  main.replaceChildren(...filterAndShuffleDeck);
}

function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let heartButton = document.querySelector('#hearts');
heartButton.addEventListener('click', () => {
  filter = '♥';
  shuffle ? filterAndShuffleCards() : filterCards();
})

let spadeButton = document.querySelector('#spades');
spadeButton.addEventListener('click', () => {
  filter = '♠';
  shuffle ? filterAndShuffleCards() : filterCards();
})

let diamondButton = document.querySelector('#diamonds');
diamondButton.addEventListener('click', () => {
  filter = '♦';
  shuffle ? filterAndShuffleCards() : filterCards();
})

let clubButton = document.querySelector('#clubs');
clubButton.addEventListener('click', () => {
  filter = '♣';
  shuffle ? filterAndShuffleCards() : filterCards();
})

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  filter = null;
  shuffle = false;
  filterCards();
})

let shuffleButton = document.querySelector('#shuffle');
shuffleButton.addEventListener('click', () => {
  shuffle = true;
  shuffleCards();
})

filterCards();
