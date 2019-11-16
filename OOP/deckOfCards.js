// Deck of Cards: Design the data structures for a generic deck of cards.
// Explain how you would subclass the data structures to implement blackjack.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Card {
  constructor(suit, val, desc) {
    this.suit = suit;
    this.val = val;
    if (desc) {
      this.desc = desc;
    }
  }
  getVal() {
    return this.val;
  }
  getSuit() {
    return this.suit;
  }
  getDesc() {
    return this.desc;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  shuffle() {
    for (let i = this.deck.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * i);
      [this.deck[rand], this.deck[i]] = [this.deck[i], this.deck[rand]];
    }
  }
  /// Removes from the deck.
  drawCard() {
    if (!this.isEmpty()) {
      return this.deck.pop();
    }

    this.resetDeck();
  }

  isEmpty() {
    return this.deck.length == 0;
  }

  setDeck(deck) {
    this.deck = deck;
  }

  resetDeck() {
    const cardArray = [];
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const descriptions = [
      "ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King"
    ];

    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 14; j++) {
        cardArray.push(new Card(suits[i], j, descriptions[j - 1]));
      }
    }
    this.setDeck(cardArray);
    this.shuffle();
  }
}

class BlackJack {
  constructor() {
    this.deck = new Deck();
    this.score;
    this.game = false;
  }

  setGame() {
    this.score = 0;
    this.deck.resetDeck();
    this.game = true;
    this.dealHand();
  }

  dealHand() {
    for (let i = 0; i < 2; i++) {
      let card = this.deck.drawCard();
      this.evaluateCard(card);
    }
  }

  evaluateCard(card) {
    if (card.getVal() == 1) {
      if (this.getScore() > 10) {
        this.score += 1;
      } else {
        this.score += 11;
      }
    } else if (card.getVal() <= 10) {
      this.score += card.getVal();
    } else {
      this.score += 10;
    }
  }

  hit() {
    const card = this.deck.drawCard();
    if (this.sore == 21 || this.bust()) this.game == false;
    this.evaluateCard(card);
    if (this.score == 21 || this.bust()) {
      console.log("End of Game Your Score was " + this.score);
      this.game == false;
    }
    return card;
  }

  bust() {
    this.getScore() == 21;
  }

  getStatus() {
    return this.game;
  }

  getScore() {
    return this.score;
  }
}

const game = new BlackJack();
let input = "y";
game.setGame();

console.log("The game has started your score is " + game.getScore());

rl.question("Do you wanna hit? (y/n) ", answer => {
  input = answer;
  rl.close();
});

console.log("The game has started your score is " + game.getScore());
