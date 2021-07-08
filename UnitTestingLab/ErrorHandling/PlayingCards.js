class Card {
    face;
    suit;

    constructor(face, suit) {
        if (this.#isValidFace(face)){
            this.face = face;
        }else {
            throw new Error('invalid face');
        }
        if (this.#isValidSuit(suit)){
            this.suit = suit;
        }else {
            throw new Error('invalid suit');
        }
    }

    #isValidFace = face => {
        if (Number(face)){
            return face > 1 && face < 11;
        }
        else {
            return face === 'A' || face === 'J' || face === 'K' || face ==='Q';
        }
    };

    #isValidSuit = suit => suit === 'C' || suit === 'D' || suit === 'H' || suit === 'S';
}

let card = new Card('A', 'S');
console.log(card);
let card2 = new Card(1, 'C');