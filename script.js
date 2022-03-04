const cards = [
  {value:'A', suit: '♥'}, {value:'2', suit: '♥'}, {value:'3', suit: '♥'}, {value:'4', suit: '♥'}, {value:'5', suit: '♥'}, {value:'6', suit: '♥'}, {value:'7', suit: '♥'}, {value:'8', suit: '♥'},  {value:'9', suit: '♥'}, {value:'10', suit: '♥'}, {value:'J', suit: '♥'}, {value:'Q', suit: '♥'}, {value:'K', suit: '♥'},
  {value:'A', suit: '♠'}, {value:'2', suit: '♠'}, {value:'3', suit: '♠'}, {value:'4', suit: '♠'}, {value:'5', suit: '♠'}, {value:'6', suit: '♠'}, {value:'7', suit: '♠'}, {value:'8', suit: '♠'},  {value:'9', suit: '♠'}, {value:'10', suit: '♠'}, {value:'J', suit: '♠'}, {value:'Q', suit: '♠'}, {value:'K', suit: '♠'},
  {value:'A', suit: '♦'}, {value:'2', suit: '♦'}, {value:'3', suit: '♦'}, {value:'4', suit: '♦'}, {value:'5', suit: '♦'}, {value:'6', suit: '♦'}, {value:'7', suit: '♦'}, {value:'8', suit: '♦'},  {value:'9', suit: '♦'}, {value:'10', suit: '♦'}, {value:'J', suit: '♦'}, {value:'Q', suit: '♦'}, {value:'K', suit: '♦'},
  {value:'A', suit: '♣'}, {value:'2', suit: '♣'}, {value:'3', suit: '♣'}, {value:'4', suit: '♣'}, {value:'5', suit: '♣'}, {value:'6', suit: '♣'}, {value:'7', suit: '♣'}, {value:'8', suit: '♣'},  {value:'9', suit: '♣'}, {value:'10', suit: '♣'}, {value:'J', suit: '♣'}, {value:'Q', suit: '♣'}, {value:'K', suit: '♣'}
];
let filter;
const main = document.getElementsByClassName('cards')[0]

function createDeckOfCards(cards){
  return cards.map(card => {
    const el = document.createElement('div');
    el.className = 'card'
    el.innerHTML = card.value + card.suit;
      if (card.suit === '♥' || card.suit === '♦'){
        el.classList.add('card--red')
      }
    return el;
  });
}
function displayCards() {
  let cardsList = filter ? cards.filter(card => card.suit === filter) : cards;
  const filteredDeck = createDeckOfCards(cardsList);
  main.replaceChildren(...filteredDeck);
}

let heartButton = document.querySelector('#hearts')
heartButton.addEventListener('click', () => {
  filter = '♥';
  displayCards();
})

let spadeButton = document.querySelector('#spades')
spadeButton.addEventListener('click', () => {
  filter = '♠';
  displayCards();
})

let diamondButton = document.querySelector('#diamonds')
diamondButton.addEventListener('click', () => {
  filter = '♦';
  displayCards();
})

let clubButton = document.querySelector('#clubs')
clubButton.addEventListener('click', () => {
  filter = '♣';
  displayCards();
})

displayCards();
