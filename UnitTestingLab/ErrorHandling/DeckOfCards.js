class Card {
    face;
    suit;
    #sym;

    constructor(face, suit) {
        if (this.#isValidFace(face)){
            this.face = face;
        }else {
            throw new Error('invalid face');
        }
        if (this.#isValidSuit(suit)){
            // this.suit = suit;
            if (suit === 'S'){
                this.#sym = '\u2660';
            }else if (suit === 'H'){
                this.#sym = '\u2665';
            }else if (suit === 'D'){
                this.#sym = '♦';
            }else {
                this.#sym = '♣';
            }
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

    toString(){
        return `${this.face}${this.#sym}`;
    }
}

let getDeck = (array) => {
    let deck = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 2){
            deck.push(new Card(array[i].charAt(0), array[i].charAt(1)));
        }else {
            deck.push(new Card(array[i].slice(0,2), array[i].charAt(2)));
        }
    }

    return deck;
}

console.log(getDeck(['AS', '10D', 'KH', '2C']).toString());