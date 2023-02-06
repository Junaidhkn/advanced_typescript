"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
const myPlayer = new Player('Junaid', 'Khan');
console.log(myPlayer);
// //  Public,Protected and  Private Modifiers
class Persono {
    constructor(first, last) {
        this.first = first;
        ``;
        this.last = last;
    }
}
const person = new Persono('Junaid', 'Khan');
console.log(person.first);
// ReadOnly Property
// person.first = 'asdfasdf'
console.log(person.first);
// console.log(person.last);
//  Alternative the The syntax used for parameters used in Class Person
class me {
    //  Here No need to Declare Types
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
//  Public => Accessable everywhere
//  Private => Accessable only in the class Itself
//  Protected => Accessable only in the class itself and its child
