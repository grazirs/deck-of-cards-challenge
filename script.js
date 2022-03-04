const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
const suits = ["♥", "♠", "♦", "♣"];
const cards = [];
const main = document.getElementsByClassName('cards')[0]

function deck() {
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        let card = {
        value: values[v],
        suit:suits[s]
        }
        cards.push(card);
      }
    }
    return cards;

}
console.log(deck());

createDeckOfCards = cards => {
  return cards.map(card => {
    const el = document.createElement('div');
    el.innerHTML = card.value + card.suit;
    return el
  });
}

const deckOfCards = createDeckOfCards(cards);

deckOfCards.forEach(cards => {
  main.appendChild(cards);
  cards.className = 'card';
})

let heartButton = document.querySelector('#hearts')
heartButton.addEventListener('click', () => {
  const heartCards = cards.filter(card => card.suit === '♥')

  const heartDeck = createDeckOfCards(heartCards);

  heartDeck.forEach(cards => {
    main.replaceChildren(...heartDeck)
    cards.className = 'card';
  })
})

let spadeButton = document.querySelector('#spades')
spadeButton.addEventListener('click', () => {
  const spadeCards = cards.filter(card => card.suit === '♠')

  const spadeDeck = createDeckOfCards(spadeCards);

  spadeDeck.forEach(cards => {
    main.replaceChildren(...spadeDeck)
    cards.className = 'card';
  })
})

let diamondButton = document.querySelector('#diamonds')
diamondButton.addEventListener('click', () => {
  const diamondCards = cards.filter(card => card.suit === '♦')

  const diamondDeck = createDeckOfCards(diamondCards);

  diamondDeck.forEach(cards => {
    main.replaceChildren(...diamondDeck)
    cards.className = 'card';
  })
})

let clubButton = document.querySelector('#clubs')
clubButton.addEventListener('click', () => {
  const clubCards = cards.filter(card => card.suit === '♣')

  const clubDeck = createDeckOfCards(clubCards);

  clubDeck.forEach(cards => {
    main.replaceChildren(...clubDeck)
    cards.className = 'card';
  })
})
