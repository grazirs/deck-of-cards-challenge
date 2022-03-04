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
