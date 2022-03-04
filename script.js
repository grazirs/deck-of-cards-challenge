const cards = [
  {value:'A', suit: '♥'}, {value:'2', suit: '♥'}, {value:'3', suit: '♥'}, {value:'4', suit: '♥'}, {value:'5', suit: '♥'}, {value:'6', suit: '♥'}, {value:'7', suit: '♥'}, {value:'8', suit: '♥'},  {value:'9', suit: '♥'}, {value:'10', suit: '♥'}, {value:'J', suit: '♥'}, {value:'Q', suit: '♥'}, {value:'K', suit: '♥'},
  {value:'A', suit: '♠'}, {value:'2', suit: '♠'}, {value:'3', suit: '♠'}, {value:'4', suit: '♠'}, {value:'5', suit: '♠'}, {value:'6', suit: '♠'}, {value:'7', suit: '♠'}, {value:'8', suit: '♠'},  {value:'9', suit: '♠'}, {value:'10', suit: '♠'}, {value:'J', suit: '♠'}, {value:'Q', suit: '♠'}, {value:'K', suit: '♠'},
  {value:'A', suit: '♦'}, {value:'2', suit: '♦'}, {value:'3', suit: '♦'}, {value:'4', suit: '♦'}, {value:'5', suit: '♦'}, {value:'6', suit: '♦'}, {value:'7', suit: '♦'}, {value:'8', suit: '♦'},  {value:'9', suit: '♦'}, {value:'10', suit: '♦'}, {value:'J', suit: '♦'}, {value:'Q', suit: '♦'}, {value:'K', suit: '♦'},
  {value:'A', suit: '♣'}, {value:'2', suit: '♣'}, {value:'3', suit: '♣'}, {value:'4', suit: '♣'}, {value:'5', suit: '♣'}, {value:'6', suit: '♣'}, {value:'7', suit: '♣'}, {value:'8', suit: '♣'},  {value:'9', suit: '♣'}, {value:'10', suit: '♣'}, {value:'J', suit: '♣'}, {value:'Q', suit: '♣'}, {value:'K', suit: '♣'}
];
let filter;
let shuffle = false;
const main = document.getElementsByClassName('cards')[0];

function createDeckOfCards(cards){
  return cards.map(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = card.value + card.suit;
      if (card.suit === '♥' || card.suit === '♦'){
        el.classList.add('card--red');
      }
    return el;
  });
}

function displayCards() {
  let cardsList = filter ? cards.filter(card => card.suit === filter) : cards;
  (shuffle) ? cardsList = shuffleArray([...cardsList]) : cards;
  const filteredDeck = createDeckOfCards(cardsList);
  main.replaceChildren(...filteredDeck);
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
  displayCards();
})

let spadeButton = document.querySelector('#spades');
spadeButton.addEventListener('click', () => {
  filter = '♠';
  displayCards();
})

let diamondButton = document.querySelector('#diamonds');
diamondButton.addEventListener('click', () => {
  filter = '♦';
  displayCards();
})

let clubButton = document.querySelector('#clubs');
clubButton.addEventListener('click', () => {
  filter = '♣';
  displayCards();
})

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  filter = null;
  shuffle = false;
  displayCards();
})

let shuffleButton = document.querySelector('#shuffle');
shuffleButton.addEventListener('click', () => {
  shuffle = true;
  displayCards();
})

displayCards();
