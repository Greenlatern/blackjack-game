

// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

switch (card.rank) {
  case 1:
}

for (let suit of suits) {
  for (const rank of ranks) {

    makeDeck(rank, suit);

  };
};

console.log(deck);
